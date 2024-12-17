FROM node:20-alpine

ENV NODE_ENV development

WORKDIR /tic-tac-toe

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]