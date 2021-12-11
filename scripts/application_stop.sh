#!/bin/bash

echo "Stopping application..."

docker container stop "$(docker ps --filter name=pauloeduardods-front-end-* -aq)"

docker image rmi -f pauloeduardods_front-end:latest