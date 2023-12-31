docker rm -f angular-container 
docker rm -f go-container 
docker rm -f mongo-container 
docker network create my-network
docker build -t my-mongo2 -f .\phase1\database\Dockerfile .\phase1\database
docker build -t my-go -f .\phase1\Dockerfile .\phase1
docker build -t my-angular -f .\clinic-appointment-app\Dockerfile .\clinic-appointment-app
docker run -d --name mongo-container --net my-network -e DB_PORT=27017 -p 27017:27017 my-mongo2
docker run -d --name go-container --net my-network -e DB_PORT=27017 -e PORT=8080 -e dbURL=mongo-container -e CORS="http://localhost:4200" -p 8080:8080 my-go
docker run -d --name angular-container --net my-network  -e API_URL="http://localhost:8080" -p 4200:80 my-angular