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

#commit and push to git
# Get the list of commit hashes since the last push
commit_hashes=($(git log origin/main..HEAD --format="%h"))

# Check if there are any new commits since the last push
if [ ${#commit_hashes[@]} -eq 0 ]; then
    echo "No new commits since the last push."
    exit 0
fi

# Extract the first and last commit hashes
first_commit="${commit_hashes[0]}"
last_commit="${commit_hashes[-1]}"

# Construct the commit message
commit_message="Deploy build for [${first_commit}...${last_commit}]"

# Commit and push with the generated message
git add .
git commit -m "$commit_message"
git push

echo "Commits deployed with message: $commit_message"

