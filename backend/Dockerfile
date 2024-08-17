FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# RUN npx prisma migrate dev --name init

CMD ["npm", "run", "start:dev"]