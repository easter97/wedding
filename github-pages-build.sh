#!/bin/bash

# Build Angular app for production
echo 'Building Angular app for production...'

ng build --prod --base-href "https://easter97.github.io/wedding/" --deploy-url "https://easter97.github.io/wedding/"

# Navigate to the 'docs' directory
cd docs

# Copy 'index.html' to '404.html'
echo 'Copying index into 404...'
cp index.html 404.html

# Create 'CNAME' file with specified content
# echo 'Updating CNAME'
# echo 'amandaeaster.com' > CNAME

# Optional: Navigate back to the original directory
cd -

