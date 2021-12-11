# if [ docker container inspect -f '{{.State.Running}}' "$(docker ps --filter name=name=pauloeduardods-front-end-1 -q)" == "true" ]; then
#   docker container prune -f
#   docker image prune -af
# else
#   docker rm -f pauloeduardods-front-end-1
#   docker rmi -f pauloeduardods_front-end:latest
#   docker image tag pauloeduardods_front-end_old:latest pauloeduardods_front-end:latest
#   docker rmi -f pauloeduardods_front-end_old:latest
#   docker container rename pauloeduardods-front-end-old pauloeduardods-front-end-1
#   docker run -d -p 8080:80 pauloeduardods-front-end-1
#   exit 0
# fi