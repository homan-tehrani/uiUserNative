FROM node:18-alpine
WORKDIR /app
RUN npm install
EXPOSE 3000