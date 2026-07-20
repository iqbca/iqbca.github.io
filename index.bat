@echo off
cd /d "%~dp0"

echo =====================================
echo      Starting Portfolio...
echo =====================================
echo.

start http://localhost:5173

call npm run dev

pause