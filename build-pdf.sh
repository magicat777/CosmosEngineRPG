#!/bin/bash

# Cosmos Engine RPG - PDF Build Script

echo "Building Cosmos Engine RPG Complete Rulebook..."

# Create output directory
mkdir -p output

# Concatenate all chapters
cat > output/cosmos-engine-complete.md << 'EOF'
---
title: "Cosmos Engine RPG - Core Rulebook"
subtitle: "Science Fiction Roleplaying from Street Level to Cosmic Legend"
author: "Claude Code AI Assistant"
date: "2025"
geometry: margin=1in
fontsize: 11pt
mainfont: "Liberation Serif"
sansfont: "Liberation Sans"
monofont: "Liberation Mono"
toc: true
toc-depth: 2
numbersections: true
colorlinks: true
linkcolor: blue
urlcolor: blue
citecolor: blue
---

# Cosmos Engine RPG
## Science Fiction Roleplaying from Street Level to Cosmic Legend

*A complete game system for epic science fiction adventures*

---

EOF

# Add each chapter
echo "Adding chapters..."

chapters=(
    "docs/chapters/chapter-01-welcome.md"
    "docs/chapters/chapter-02-core-mechanics.md" 
    "docs/chapters/chapter-03-character-creation.md"
    "docs/chapters/chapter-04-character-advancement.md"
    "docs/chapters/chapter-05-actions-and-skills.md"
    "docs/chapters/chapter-06-personal-combat.md"
    "docs/chapters/chapter-07-equipment-and-gear.md"
    "docs/chapters/chapter-08-vehicles-and-chases.md"
    "docs/chapters/chapter-09-starships-and-space-travel.md"
    "docs/chapters/chapter-10-electronic-warfare-and-hacking.md"
    "docs/chapters/chapter-11-running-cosmos-engine.md"
    "docs/chapters/chapter-12-creating-adventures.md"
    "docs/chapters/chapter-13-campaign-building.md"
    "docs/chapters/chapter-14-mass-combat.md"
    "docs/chapters/chapter-15-organizations-and-factions.md"
    "docs/chapters/chapter-16-advanced-options.md"
)

for chapter in "${chapters[@]}"; do
    if [ -f "$chapter" ]; then
        echo "Adding $(basename "$chapter")..."
        echo "" >> output/cosmos-engine-complete.md
        echo "\\newpage" >> output/cosmos-engine-complete.md
        echo "" >> output/cosmos-engine-complete.md
        cat "$chapter" >> output/cosmos-engine-complete.md
        echo "" >> output/cosmos-engine-complete.md
    else
        echo "Warning: $chapter not found"
    fi
done

echo "Markdown compilation complete!"

# If pandoc is available, convert to PDF
if command -v pandoc &> /dev/null; then
    echo "Converting to PDF with pandoc..."
    
    pandoc output/cosmos-engine-complete.md \
        -o output/cosmos-engine-rpg-core-rulebook.pdf \
        --pdf-engine=xelatex \
        --toc \
        --toc-depth=2 \
        --number-sections \
        --variable=geometry:margin=1in \
        --variable=fontsize:11pt \
        --variable=colorlinks:true \
        --variable=linkcolor:blue \
        --variable=urlcolor:blue \
        --variable=citecolor:blue
    
    echo "PDF created: output/cosmos-engine-rpg-core-rulebook.pdf"
else
    echo "Pandoc not found. Install pandoc to generate PDF automatically."
    echo "Complete markdown file created: output/cosmos-engine-complete.md"
    echo ""
    echo "To install pandoc:"
    echo "Ubuntu/Debian: sudo apt install pandoc texlive-xetex"
    echo "macOS: brew install pandoc basictex"
    echo ""
    echo "Then run: pandoc output/cosmos-engine-complete.md -o cosmos-engine-rpg.pdf --pdf-engine=xelatex --toc --number-sections"
fi

echo "Build complete!"