FROM node:14

WORKDIR /shopping-app/src
COPY package*.json ./
RUN yarn start
COPY . .
EXPOSE 8080
CMD [ "node", "server.js" ]