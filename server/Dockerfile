FROM node:20-alpine

WORKDIR /server

COPY package.json .

COPY . .
RUN rm -r node_modules
RUN npm install

CMD ["npm", "run", "dev"]



