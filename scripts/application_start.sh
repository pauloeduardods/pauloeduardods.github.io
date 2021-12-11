#!/bin/bash

echo "Starting application"

cd /home/ec2-user/pauloeduardods

docker-compose up -d

echo "Checking if application is running"

sleep 20 && if [ "$( docker container inspect -f '{{.State.Status}}' pauloeduardods-front-end-1 )" == "running" ];
then
  echo "Container is running"
  docker container prune -f
  docker image prune -af
  exit 0
else 
  echo "Container is not running"
    docker rm -f pauloeduardods-front-end-1
    docker rmi -f pauloeduardods_front-end:latest
    docker image tag pauloeduardods_front-end_old:latest pauloeduardods_front-end:latest
    docker rmi -f pauloeduardods_front-end_old:latest
    docker container rename pauloeduardods-front-end-old pauloeduardods-front-end-1
    docker run -d -p 8080:80 --name pauloeduardods-front-end-1 pauloeduardods_front-end-1:latest
    docker container prune -f
    docker image prune -af
    exit 1
fi