#!/usr/bin/env bash

# Config begin
LANG_CONFIGS_DIR=language_configs/
CACHE_DIR=_cache/
OUTPUT_DIR=public/langs
PUSH_ENV="$1"
VERSION_TAG="$2"

# Config end


if [ "$PUSH_ENV" == "release" ]
then
  echo "Releasing Codesplain Parsers"
elif [ "$PUSH_ENV" == "dev" ]
then
  echo "Updating Codesplain Parsers in dev environment"
  VERSION_TAG="dev"
else
   echo "Error! Invalid PUSH_ENV" 1>&2
   exit 1
fi


rm -rf $CACHE_DIR/treematcher/

# In the future we want to iterate over all language configs:
# for lang_config in $LANG_CONFIGS_DIR/*.compile.js; do

# But for now just do python3:
lang_config="$LANG_CONFIGS_DIR/python3.js"

PARSELANG="$(basename $lang_config .js)"

rm -rf "$CACHE_DIR/$PARSELANG/"
./make -d
./make -m


aws s3 cp $OUTPUT_DIR/$PARSELANG.min.js s3://codesplain-parsers/$PARSELANG/$VERSION_TAG/$PARSELANG.min.js
aws s3 cp $OUTPUT_DIR/$PARSELANG.js s3://codesplain-parsers/$PARSELANG/$VERSION_TAG/$PARSELANG.js

exit

# done
