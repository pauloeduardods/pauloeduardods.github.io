
if [ docker container inspect -f '{{.State.Running}}' "$(docker ps --filter name=name=pauloeduardods-front-end-* -nq)" == "true" ]; then
  docker container prune -f
  docker image prune -af
else
  docker rm -f pauloeduardods-front-end-1
  docker rmi -f pauloeduardods-front-end
  docker image tag pauloeduardods-front-end_old pauloeduardods-front-end
  docker rmi -f pauloeduardods-front-end_old
  docker container rename pauloeduardods-front-end-old pauloeduardods-front-end-1
  docker run -d -p 8080:80 pauloeduardods-front-end-1
  exit 0
fi