FROM node:10.15
EXPOSE 3000

WORKDIR /app
ADD . /app/
RUN npm install

CMD node ./src/index.js