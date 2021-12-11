#!/bin/bash

echo "Stopping application..."

docker container stop "$(docker ps --filter name=pauloeduardods-front-end-* -aq)"

docker container rename pauloeduardods-front-end-1 pauloeduardods-front-end-old

docker image tag pauloeduardods-front-end pauloeduardods-front-end_old

docker image rmi -f pauloeduardods-front-end