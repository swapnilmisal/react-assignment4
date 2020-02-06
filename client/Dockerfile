# Client
FROM node:12.14.0
WORKDIR /client
COPY package*.json /client/
RUN npm install
COPY . /client/
EXPOSE 5000
RUN npm run build
RUN npm install -g serve
CMD ["serve", "build"]
