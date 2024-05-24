#!/bin/bash
echo "Starting the build process"

echo "Running the save of the current answer"

yarn end

echo "Running the build"

yarn build

echo "Build completed"

echo "Cleaning you answer file..." 

yarn clear

echo "Starts the commit and push process"

echo "Staging your build"

git add .

echo "Commiting your build"

git commit -m "Build"

echo "Pushing your build"

git push -u origin main

echo "Build pushed"