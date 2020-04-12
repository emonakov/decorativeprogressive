# build environment
FROM node:12.16.2-alpine as build
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN apk update && \
    apk add --no-cache make gcc g++ python && \
    npm ci --silent
COPY . ./
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
