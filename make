#!/bin/bash
#Operate in current direcory
cd $(dirname $0)

# Variables
LANG="python3"
MINIFY=0
DEBUG=0

#Ensure npm installed
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
		*)
			echo "Unknown flag $1"
			exit 127
	esac
done

$NPM run build -- --env.langs="$LANG" --env.optimize=$MINIFY --env.enable_debug=$DEBUG
exit
