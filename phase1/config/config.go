package config

import (
	"context"
	"fmt"
	"os"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var Client *mongo.Client
var Context context.Context

func ConnectDB(containerName string) {
	dbURL:= os.Getenv("dbURL")
	port := ":"+os.Getenv("DBPORT")
	url := "mongodb://"+dbURL+port+"/"
	fmt.Println(url)
	clientOptions := options.Client().ApplyURI(url)
	client, err := mongo.Connect(Context, clientOptions)
	if err != nil {
		fmt.Println(err)
	}

	Client = client
	fmt.Println("Connected to MongoDB!")
}
