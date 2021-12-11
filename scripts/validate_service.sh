
if [ docker container inspect -f '{{.State.Running}}' "$(docker ps --filter name=name=pauloeduardods-front-end-* -nq)" == "true" ]; then
  docker container prune -f
  docker image prune -af
else
  exit 0
fi