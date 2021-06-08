FROM node:12-slim

RUN mkdir -p /usr/src

WORKDIR /usr/src

COPY . /usr/src

RUN npm install

RUN npm run build

ENV PORT=3000

ENV LOCAL=TRUE

EXPOSE 3000

CMD [ "npm", "run", "docker" ]