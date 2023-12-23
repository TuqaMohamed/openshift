package config

import (
	"context"
	"fmt"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var Client *mongo.Client
var Context context.Context

func ConnectDB(containerName string) {
	clientOptions := options.Client().ApplyURI("https://my-mongo2-tuqamohamed-dev.apps.sandbox-m4.g2pi.p1.openshiftapps.com")
	client, err := mongo.Connect(Context, clientOptions)
	if err != nil {
		fmt.Println(err)
	}

	Client = client
	fmt.Println("Connected to openshif MongoDB!")
}
