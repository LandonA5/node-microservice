#!/bin/bash
echo "Testing GET"
curl -X GET localhost:8080
echo
echo "Testing POST"
curl -X POST -H "Content-Type:application/json" localhost:8080 -d '{"text":"Hello world"}'
echo

