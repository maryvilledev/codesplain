#!/bin/sh

git submodule update --init --recursive

mkdir -p bin/
curl http://www.antlr.org/download/antlr-4.6-complete.jar -o bin/antlr-4.6-complete.jar

pushd antlr4/runtime/JavaScript/src/antlr4/
    npm install
popd
npm link antlr4/runtime/JavaScript/src/antlr4/

mkdir -p _cache/
