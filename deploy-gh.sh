#!/bin/bash
git checkout master
git branch -D gh-pages
git push origin --delete gh-pages
git checkout -b gh-pages
cd client
npm install
npm run ionic:build -- --prod --device
cd ..
mkdir www
mv client/www/* www
rm -rf client
rm README.md
git add .
git reset circle.yml
git reset deploy-gh.sh
git commit -m "Publishing to gh-pages"
git push -u origin gh-pages
git checkout master
