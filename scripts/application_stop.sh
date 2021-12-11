#!/bin/bash

echo "Stopping application..."

docker container stop "$(docker ps --filter name=pauloeduardods-front-end-* -aq)"

docker container rename pauloeduardods-front-end-1 pauloeduardods-front-end-old

docker image tag pauloeduardods_front-end:latest pauloeduardods_front-end_old:latest

docker image rmi -f pauloeduardods_front-end:latest