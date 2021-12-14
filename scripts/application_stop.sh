#!/bin/bash

echo "Stopping application..."

docker container stop "$(docker ps --filter name=pauloeduardods-front-end-* -aq)"
docker container prune -f
docker image prune -af