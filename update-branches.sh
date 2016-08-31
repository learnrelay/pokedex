#! /bin/bash

set -e

message="$1"

for dir in branch-step-*
do
	cp -r $dir tmp
	cp -rf .git tmp
	cd tmp
  branch=${dir/"branch-"/""}
	git checkout -B $branch
	git add .
	git commit -m "$message"
	git push -f origin $branch
	cd ..
	rm -rf tmp
done
