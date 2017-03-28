#!/bin/sh

echo "Untested"
exit 1

cd "$(dirname "$0")"
CS_PATH="$(pwd)"

mkdir -p "/tmp/codesplain_java/"
cd "/tmp/codesplain_java/"

cp "$CS_PATH/grammars-v4/$1" .
java -jar "$CS_PATH/bin/antlr-4.6-complete.jar" "/tmp/codesplain_java/$2.g4"
CLASSPATH=".:$CS_PATH/bin/antlr-4.6-complete.jar:$CLASSPATH" javac $2*.java
printf "...code\n..." | CLASSPATH=".:$CS_PATH/bin/antlr-4.6-complete.jar:$CLASSPATH" java org.antlr.v4.gui.TestRig $2 file_input -gui
