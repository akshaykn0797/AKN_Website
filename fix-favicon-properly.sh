#!/bin/bash
# Script to properly fix favicon issue

cd "$(dirname "$0")"

echo "Fixing favicon configuration..."

# Remove the conflicting favicon from app directory
if [ -f "src/app/favicon.ico" ]; then
    rm src/app/favicon.ico
    echo "✓ Removed conflicting favicon from src/app/"
fi

# Copy AKN logo to public directory as favicon
cp public/Icons/aknlogo.png public/favicon.ico
cp public/Icons/aknlogo.png public/icon.png
cp public/Icons/aknlogo.png public/apple-icon.png

echo "✓ Created favicon files in public directory"
echo ""
echo "Favicon has been fixed!"
echo "Please restart your development server and clear browser cache."
echo ""
echo "To clear cache:"
echo "  - Chrome/Edge: Ctrl+Shift+Delete (Cmd+Shift+Delete on Mac)"
echo "  - Then do a hard refresh: Ctrl+Shift+R (Cmd+Shift+R on Mac)"
