# Welcome to Docker

This is a repo for new users getting started with Docker.

You can try it out using the following command.
```
docker run -d -p 8088:80 --name Technoidetity real-time-docker-nodejs-frontend-web-app
```
And open `http://localhost:8088` in your browser.

# Building

Maintainers should see [MAINTAINERS.md](MAINTAINERS.md).

Build and run:
```
docker build -t real-time-docker-nodejs-frontend-web-app . 
docker run -d -p 8088:3000 --name Technoidetity real-time-docker-nodejs-frontend-web-app
```
Open `http://localhost:8088` in your browser.
