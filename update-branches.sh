#! /bin/bash

set -e

message="$1"

for dir in step-*
do
	cp -r $dir tmp
	cp -rf .git tmp
	cd tmp
	git checkout -B $dir
	git add .
	git commit -m "$message"
	git push -f origin $dir
	cd ..
	rm -rf tmp
done
