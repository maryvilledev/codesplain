#!/bin/bash

# Exit if error
set -e

# Operate in current direcory
cd $(dirname $0)

# Variables
LANG="python3"
MINIFY=0
DEBUG=0

# Help
function help {
	echo "Usage: $0 [-l|--lang lang] [-m|--minify] [-d|--debug] [-h|--help]"
	echo "	Makes the parser with the current configuration and places in './build/parsers'"
	echo "	-l|--lang [lang]: Which language the parser is for"
	echo " 	-m|--minify: Optimizes the parser, will not be human-readable"
	echo "	-d|--debug: Enables debugging info"
	echo "	-h|--help: Prints this help text"
}

# Ensure npm installed
NPM="$(which npm)"
if [ "$NPM" == "" ]; then
	echo "npm not installed"
	exit 1
fi

while (( "$#" )); do
	case "$1" in
		-l|--lang)
		LANG="$2"
		shift 2
		;;
		-m|--minify)
		MINIFY=1
		shift
		;;
		-d|--debug)
		DEBUG=1
		shift
		;;
		-h|--help)
		help
		exit
		;;
		*)
		echo "Unknown flag $1"
		exit 127
	esac
done

$NPM run build -- --env.langs="$LANG" --env.optimize=$MINIFY --env.enable_debug=$DEBUG
exit
