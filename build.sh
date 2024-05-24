#!/bin/bash
echo "Starting the build process"

echo "Running the save of the current answer"

yarn end

echo "Running the build"

yarn build

echo "Build completed"

echo "Cleaning you answer file..." 

yarn clear

echo "Staging your build"

git add .

echo "Commiting your build"

git commit -m "Build"

echo "Pushing your build"

git push -u origin master

echo "Build pushed"

echo "Ending the execution of your build and cleaning up the environment"

read -p "Press any key to continue" x