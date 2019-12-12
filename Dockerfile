FROM node:latest

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app/myapp

COPY ./myapp /usr/src/app

RUN npm install

EXPOSE 3030

CMD [ "npm", "start" ]
