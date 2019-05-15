FROM node:carbon

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8035

ENTRYPOINT ["npm", "run", "build"]
