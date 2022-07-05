FROM node:16-alpine

WORKDIR /usr/app/server

COPY package.json /usr/app/server

RUN npm install

COPY . usr/app/server

EXPOSE 3001 

CMD ["npm", "run", "dev"]
