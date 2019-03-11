FROM node as build-env
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM httpd:2.4
COPY --from=build-env app/dist/ /usr/local/apache2/htdocs/

