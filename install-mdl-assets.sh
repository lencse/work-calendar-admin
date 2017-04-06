#!/bin/bash

rm -rf web/js
rm -rf web/css
rm -rf web/images
mkdir web/js
cp node_modules/lencse-getmdl-dashboard/build/dark-material.js web/js/
mkdir web/css
cp node_modules/lencse-getmdl-dashboard/build/dark-material-vendor.css web/css/
cp -R node_modules/lencse-getmdl-dashboard/src/images web/
