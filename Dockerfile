FROM node:22.13

WORKDIR /usr/app

COPY package*.json ./

RUN npm ci --quiet

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]