#! /bin/bash
cp ../Big.no_closure.js .
#cp ../../build/Big.min.js Big.no_closure.js
time rhino differential.rhino.js $1 tee differential.log.txt
