FROM library/node:latest

RUN apt-get update && apt-get install -y lua5.2 && apt-get clean
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install
CMD node index.js
