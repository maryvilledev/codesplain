#!/bin/sh

rm language_configs/*
rm language_configs_generated/*
node gen_lang_configs.js
cp language_configs_generated/* language_configs/

