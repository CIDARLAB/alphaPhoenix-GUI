#!/bin/bash
git checkout master
git branch -D gh-pages
git push origin --delete gh-pages
git checkout -b gh-pages
npm install
ionic cordova build browser --prod
rm README.md
rm -rf src
rm node_modules
cp -r www/* .
rm -rf www
rm .editorconfig
rm ionic.config.json
rm package.json
rm package-lock.json
rm tsconfig.json
rm tslint.json
rm node_modules
rm .sourcemaps
git add .
git reset deploy-gh.sh
git commit -m "Publishing to gh-pages"
git push -u origin gh-pages
git checkout master
