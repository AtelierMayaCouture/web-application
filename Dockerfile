# Dockerfile

FROM node:8-alpine

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000

CMD npm run build && npm run prod
