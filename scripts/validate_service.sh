echo "Removing unused containers and images"

docker container prune -f
docker image prune -af

echo "Checking if application is running"

if [ "$( docker container inspect -f '{{.State.Status}}' pauloeduardods-front-end-1 )" == "running" ];
then
  echo "Container is running"
  exit 0
else 
  echo "Container is not running"
  exit 1
fi