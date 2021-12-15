#Stage1 Build
FROM node:14-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ ./
RUN npm run build-nginx

#Stage2 Production
FROM nginx:1.21.4-alpine AS prod
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
ARG GOOGLE_ANALYTICS_ID
ENV GOOGLE_ANALYTICS_ID $GOOGLE_ANALYTICS_ID
WORKDIR /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build ./
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]