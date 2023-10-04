FROM node:18-alpine

WORKDIR /usr/app/

COPY index.mjs .
COPY package.json .
COPY package-lock.json .
COPY /src ./src/

ENV MONGO_URI mongodb+srv://jhojan:lWlKZcPKcMAZrgP3@cluster0.fuzzwmy.mongodb.net/?retryWrites=true&w=majority

ENV PORT 5001
ENV MINIO_HOST=http://minio:9000

ENV MINIO_ACCESS_KEY=miniouser
ENV MINIO_SECRET_KEY=miniopassword

EXPOSE 5001  

RUN npm install --production

ENTRYPOINT ["npm", "start"]