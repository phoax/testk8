#!bin/bash

set -x #echo on

docker build -f Dockerfile.dev -t sandrocaseiro/complex-server .

docker run -p 15005:5000 sandrocaseiro/complex-server
