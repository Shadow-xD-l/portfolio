@echo off
echo Building project...
call npm run build

echo Navigating to dist folder...
cd dist

echo Initializing git...
git init

echo Adding files...
git add -A

echo Committing...
git commit -m "Deploy to GitHub Pages"

echo Pushing to gh-pages branch...
git push -f https://github.com/Shadow-xD-l/protfolio.git main:gh-pages

echo.
echo Deployment complete!
echo Your site will be live at: https://shadow-xd-l.github.io/protfolio/
echo.
pause
