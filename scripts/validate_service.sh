
if [ docker container inspect -f '{{.State.Running}}' "$(docker ps --filter name=name=pauloeduardods-front-end-* -nq)" == "true" ]; then
  docker container prune -f
  docker image prune -af
else
  docker run -d -p 8080:80 pauloeduardods-front-end-old
  exit 0
fi