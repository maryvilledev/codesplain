#!/bin/sh

git submodule update --init --recursive

mkdir -p bin/
curl http://www.antlr.org/download/antlr-4.6-complete.jar -o bin/antlr-4.6-complete.jar

cd antlr4/runtime/JavaScript/src/antlr4/
    npm install
cd -
npm link antlr4/runtime/JavaScript/src/antlr4/

mkdir -p _cache/
mkdir -p _cache/java_func_data/
