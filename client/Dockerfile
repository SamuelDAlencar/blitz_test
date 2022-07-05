FROM node:16-alpine

WORKDIR /usr/app/client

COPY package.json /usr/app/client

RUN npm install

COPY . /usr/app/client

EXPOSE 3000

CMD [ "npm", "start"]