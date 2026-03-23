import os, sys, socket, subprocess, webbrowser, time

PORT = 5180
BASE = os.path.dirname(os.path.abspath(__file__))
DIST = os.path.join(BASE, "dist")

def port_in_use(port):
    try:
        with socket.create_connection(("localhost", port), timeout=1):
            return True
    except OSError:
        return False

if not port_in_use(PORT):
    exe = sys.executable
    if os.path.basename(exe).lower() == "pythonw.exe":
        exe = os.path.join(os.path.dirname(exe), "python.exe")
    subprocess.Popen(
        [exe, "-m", "http.server", str(PORT)],
        cwd=DIST,
        creationflags=0x08000000,  # CREATE_NO_WINDOW
    )
    time.sleep(2)

webbrowser.open(f"http://localhost:{PORT}")
