FROM node:12.16.3
WORKDIR /server
COPY package.json /server
RUN npm install
COPY . /server
EXPOSE 8080
CMD ["npm", "start"]
