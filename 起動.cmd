@echo off
chcp 65001 > nul

:: すでに起動していれば、ブラウザだけ開く
netstat -an 2>nul | findstr ":5180 " > nul
if not errorlevel 1 goto open_browser

:: Pythonサーバーをバックグラウンドで起動（最小化ウィンドウ）
start /min "MicrobitServer" python -m http.server 5180 --directory "%~dp0dist"
timeout /t 2 /nobreak > nul

:open_browser
start "" "http://localhost:5180"
