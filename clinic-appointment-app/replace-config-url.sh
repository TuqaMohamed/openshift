#!/bin/bash

TMP_FILE=$(mktemp)
sed "s|\"API_URL\": \"default\"|\"API_URL\": \"$API_URL\"|g" src/config.json > "$TMP_FILE"
mv "$TMP_FILE" src/config.json
