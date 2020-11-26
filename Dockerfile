FROM node:12.16.3
WORKDIR /server
ENV Port 5000
COPY package.json /server
RUN npm install
COPY . /server
CMD ["node", "server.js"]
