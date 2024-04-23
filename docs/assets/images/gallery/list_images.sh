#!/bin/bash
# Loop through HEIC files in the current directory
for file in ./*.HEIC; do
  if [ -f "$file" ]; then
    # Extract base filename without extension
    filename=$(basename -- "$file")
    filename_no_ext="${filename%.*}"
    
    # Convert HEIC to JPEG in the same directory
    heif-convert "$file" "./$filename_no_ext.jpg"

    #then delete the old file
    rm "$file"
  fi
done

echo "Conversion complete."
# Define the directory containing the images
IMAGE_DIR="../../../assets/images/gallery"

# Initialize an array to hold image paths
declare -a IMAGE_PATHS

# Loop through all files in the directory
for file in *; do
  # Check if the file is an image (jpg, png, or heic)
  if [[ "$file" == *.jpg || "$file" == *.JPG || "$file" == *.JPEG || "$file" == *.jpeg ]]; then
    # Add the image path to the array
    IMAGE_PATHS+=("\"$IMAGE_DIR/$file\"")
  fi
done

# Print the array of image paths in JSON format
echo 'images = ['
for path in "${IMAGE_PATHS[@]}"; do
  echo "  $path",   # Print each path on a new line
done
echo "  ]"

