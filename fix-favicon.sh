#!/bin/bash
# Script to fix favicon by copying AKN logo to the correct locations

cd "$(dirname "$0")"

echo "Copying AKN logo to favicon locations..."

# Copy to public directory
cp public/Icons/aknlogo.png public/favicon.ico
cp public/Icons/aknlogo.png public/icon.png
cp public/Icons/aknlogo.png public/apple-icon.png

echo "Favicon files created successfully!"
echo "Please restart your development server and clear browser cache."
