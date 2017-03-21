#!/usr/bin/env sh
DIR=public/langs/
aws  s3  sync $DIR s3://$1/ --exclude "*DS_Store"
