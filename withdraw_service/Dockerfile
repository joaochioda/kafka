FROM node:15

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

ENV NODE_ENV $NODE_ENV

RUN npm i pm2 -g

COPY . .

ARG env

ENV env ${env}

CMD npm run ${env}