# syntax=docker/dockerfile:1

FROM node:lts-hydrogen

ENV PORT=${PORT}
ENV JWT_SECRET=${JWT_SECRET}
ENV MIDTRANS_SERVER_KEY=${MIDTRANS_SERVER_KEY}
ENV DATABASE_URL=${DATABASE_URL}

WORKDIR /flip_and_boom_BE

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

CMD ["npm", "run", "all"]