#!/usr/bin/env bash

mkdir -p build

babel app.js --watch --out-file build/app.js &

python -m SimpleHTTPServer 3000
