@echo off
echo =========================================
echo Setting up images for Vite React Project...
echo =========================================
mkdir public\images 2>nul

echo Copying Hero graphic...
copy "C:\Users\HP\.gemini\antigravity\brain\d4a1a0a1-c0b1-4555-9561-d9054a224f8e\niya_profile_illustration_1790597184818.png" "public\images\niya_profile_illustration.png" >nul

echo Copying About Graphic...
copy "C:\Users\HP\.gemini\antigravity\brain\d4a1a0a1-c0b1-4555-9561-d9054a224f8e\abstract_ai_nodes_1790598591788.png" "public\images\abstract_ai_nodes.png" >nul

echo =========================================
echo Building the Project...
echo =========================================
call npm run build

echo =========================================
echo Deploying to Surge...
echo =========================================
echo When prompted, you MUST press Enter if it asks for the path.
call npx surge ./dist niyadodiya.surge.sh

echo =========================================
echo Done! Please visit http://niyadodiya.surge.sh
echo =========================================
pause
