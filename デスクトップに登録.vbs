Set WShell = CreateObject("WScript.Shell")
Set FSO    = CreateObject("Scripting.FileSystemObject")

Dim scriptDir
scriptDir = FSO.GetParentFolderName(WScript.ScriptFullName)

' Find the .pyw file automatically (avoids hardcoding Japanese filename)
Dim pywPath
pywPath = ""
Dim f
For Each f In FSO.GetFolder(scriptDir).Files
    If LCase(FSO.GetExtensionName(f.Name)) = "pyw" Then
        pywPath = f.Path
        Exit For
    End If
Next

If pywPath = "" Then
    MsgBox "No .pyw file found in " & scriptDir, 16, "Error"
    WScript.Quit
End If

' Get pythonw.exe path from python command
Dim oExec
Set oExec = WShell.Exec("python -c ""import sys,os; print(os.path.join(os.path.dirname(sys.executable),'pythonw.exe'))""")
Dim pythonwPath
pythonwPath = Trim(oExec.StdOut.ReadLine())

If pythonwPath = "" Or Not FSO.FileExists(pythonwPath) Then
    MsgBox "pythonw.exe not found. Please check Python installation.", 16, "Error"
    WScript.Quit
End If

Dim desktopPath
desktopPath = WShell.SpecialFolders("Desktop")

Dim linkName
linkName = desktopPath & "\Microbit.lnk"

Dim oLink
Set oLink = WShell.CreateShortcut(linkName)
oLink.TargetPath       = pythonwPath
oLink.Arguments        = Chr(34) & pywPath & Chr(34)
oLink.WorkingDirectory = scriptDir
oLink.WindowStyle      = 7
oLink.IconLocation     = "%SystemRoot%\system32\shell32.dll, 14"
oLink.Save

MsgBox "Microbit.lnk created on Desktop!", 64, "Done"
