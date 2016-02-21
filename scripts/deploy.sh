#!/usr/bin/env bash

BUILD_NAME=$(echo "build $(date)" | sed 's/ /_/g')

scripts/build.sh

echo "Deploying build '$BUILD_NAME'"

mkdir /tmp/$BUILD_NAME

cp -R build /tmp/$BUILD_NAME/build
cp index.html /tmp/$BUILD_NAME/index.html

cd /tmp/$BUILD_NAME

git init .
git add .
git commit -m "Version $BUILD_NAME"
git remote add origin git@github.com:shiroyasha/tetris.git
git push origin master:gh-pages --force
