#!/bin/bash

echo "Stopping application..."

docker container stop "$(docker ps --filter name=pauloeduardods-front-end-* -aq)"

docker rm -f pauloeduardods-front-end-1
docker image rmi -f pauloeduardods_front-end:latest