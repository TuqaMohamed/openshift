FROM node:20.10.0 as build

RUN mkdir -p /app
WORKDIR /app

COPY package*.json /app/
RUN npm install

COPY . /app/

COPY replace-config-url.sh .

RUN chmod +x replace-config-url.sh

RUN ./replace-config-url.sh

RUN ng build --configuration=production

ARG API_URL=http://localhost:8080
ENV API_URL=${API_URL}
ENV FPORT=4200

EXPOSE $FPORT

FROM nginxinc/nginx-unprivileged:alpine3.18-perl
COPY --chown=nginx:nginx nginx.conf /etc/nginx/nginx.conf
COPY --chown=nginx:nginx --from=build  /app/dist/clinic-appointment-app /var/www/html/


