# Stage 1: Build Angular app
FROM node:20.10.0 as build
WORKDIR /app

# Copy only the package.json and package-lock.json first to leverage Docker layer caching
COPY package*.json /app/
RUN npm install

# Copy the entire application code
COPY . /app/

# Copy the script and make it executable
COPY replace-config-url.sh /app/
RUN chmod +x /app/replace-config-url.sh

# Run the script to replace the API_URL
ARG API_URL=http://localhost:8080
RUN /app/replace-config-url.sh $API_URL

# Continue with the Angular build
RUN npm run build --configuration=production

# Stage 2: Use Nginx to serve the Angular app
FROM nginxinc/nginx-unprivileged:alpine3.18-perl

# Copy the built Angular app into the nginx server
COPY --from=build /app/dist /var/www/html/

# Copy nginx configuration
COPY --chown=nginx:nginx nginx.conf /etc/nginx/nginx.conf

# Expose the desired port
ENV FPORT=4200
EXPOSE $FPORT
