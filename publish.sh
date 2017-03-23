#!/usr/bin/env sh

# Config begin

LANG_CONFIGS_DIR=language_configs/
CACHE_DIR=_cache/
OUTPUT_DIR=public/langs/
PUSH_ENV="$1"
VERSION_TAG="$2"

# Config end


if [ "$PUSH_ENV" = "release" ]
then
    S3CMD="put"
elif [ "$PUSH_ENV" = "dev" ]
then
    S3CMD="sync"
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

LANG="$(basename $lang_config .js)"
echo "Processing language $LANG..."

rm -rf "$CACHE_DIR/$LANG/"
./node_modules/.bin/webpack "--env.langs=$LANG" --env.optimize=0 --env.enable_debug=1
./node_modules/.bin/webpack "--env.langs=$LANG" --env.optimize=1 --env.enable_debug=0

echo "S3Command $S3CMD"
aws s3 $S3CMD $OUTPUT_DIR/$LANG.min.js s3://codesplain-parsers/$LANG/$VERSION_TAG/$LANG.min.js
aws s3 $S3CMD $OUTPUT_DIR/$LANG.js s3://codesplain-parsers/$LANG/$VERSION_TAG/$LANG.js

# done
