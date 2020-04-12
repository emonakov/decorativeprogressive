# build environment
FROM node:12.16.2-stretch as build
WORKDIR /app
COPY . ./
RUN npm i --silent
RUN npm run build --production --quite

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
