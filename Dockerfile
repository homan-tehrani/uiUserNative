FROM node:18-alpine
WORKDIR /app
COPY . /app
RUN npm run build
EXPOSE 3000