FROM node:alpine

WORKDIR /usr/botwindpieces
COPY package*.json ./
COPY . .
CMD ["npm", "start"]

# Path: docker-compose.yml