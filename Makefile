include env_config

DIR=$(shell pwd)

build:
	make clean
	make build-dist
	docker build -t $(DOCKER_REG)$(SERVICE_NAME) .

build-dist:
	docker run -it --rm -v "/$(DIR)":"//code" $(DOCKER_REG)appenv-angular2-polarisplatform build

clean:
	-docker rm -f $(DOCKER_REG)$(SERVICE_NAME)

# local running of server
run:
	make build
	docker run -t --rm -p $(PORT):80 --name=$(SERVICE_NAME)	 $(DOCKER_REG)$(SERVICE_NAME)

attach-bash:
	docker exec --name=$(SERVICE_NAME)  $(DOCKER_REG)$(SERVICE_NAME) bash

shutdown:
	docker stop $(SERVICE_NAME)
