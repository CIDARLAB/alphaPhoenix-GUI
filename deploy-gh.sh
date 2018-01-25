#!/bin/bash
git checkout master
git branch -D gh-pages
git push origin --delete gh-pages
git checkout -b gh-pages
npm install
npm run ionic:build -- --prod --device
rm README.md
rm -rf src
rm node_modules
cp -r www/* .
rm -rf www
git add .
git reset circle.yml
git reset deploy-gh.sh
git commit -m "Publishing to gh-pages"
git push -u origin gh-pages
git checkout ionic
