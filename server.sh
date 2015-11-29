#!/usr/bin/env bash

mkdir -p build

babel src --watch --out-dir build &

python -m SimpleHTTPServer 3000
