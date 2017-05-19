#!/bin/sh

mv "$1" "snippet.`node --print "Math.random().toString(36).substr(2, 8)"`.${1##*.}"
