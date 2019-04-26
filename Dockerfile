FROM library/node:latest as builder

RUN apt-get update && apt-get install -y lua5.2 && apt-get clean
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install
CMD node index.js

FROM library/nginx:latest
COPY --from=builder /usr/src/app/build/* /usr/share/nginx/html/
EXPOSE 80
