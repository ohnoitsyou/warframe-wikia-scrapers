FROM library/node:latest as builder

RUN apt-get update && apt-get install -y lua5.2 && apt-get clean
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install
RUN node index.js

FROM bitnami/nginx:latest
USER 0 
COPY --from=builder /usr/src/app/build/* /app/
USER 1001
EXPOSE 8080
