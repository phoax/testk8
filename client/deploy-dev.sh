#!bin/bash

set -x #echo on

docker build -f Dockerfile.dev -t sandrocaseiro/complex-client .
