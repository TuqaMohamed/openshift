# Use the official MongoDB image as the base image
FROM mongo:latest

# Set environment variables (optional)
WORKDIR /phase1
ENV  MONGO_INITDB_DATABASE=clinic
ENV DB_PORT=27017

RUN mkdir -p /data/db && chown -R mongodb:mongodb /data/db

EXPOSE $DB_PORT

CMD ["mongod"]