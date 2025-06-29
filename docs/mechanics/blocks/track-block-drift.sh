#!/bin/bash

# track-block-drift.sh - Monitor changes to mechanical blocks over time

echo "=== Cosmos Engine Block Drift Tracker ==="
echo "Analyzing mechanical block changes..."
echo ""

# Function to check block changes
check_block() {
    local block_name=$1
    local block_path=$2
    
    echo "--- $block_name Block ---"
    
    # Show recent changes
    echo "Recent changes (last 5 commits):"
    git log --oneline -5 -- "$block_path" 2>/dev/null || echo "No history found"
    
    # Count total revisions
    local revision_count=$(git log --oneline -- "$block_path" 2>/dev/null | wc -l)
    echo "Total revisions: $revision_count"
    
    # Show file changes in last 30 days
    echo "Changes in last 30 days:"
    git log --since="30 days ago" --oneline -- "$block_path" 2>/dev/null || echo "No recent changes"
    
    echo ""
}

# Check each mechanical block
check_block "Resolution" "docs/mechanics/blocks/resolution-block/"
check_block "Attribute" "docs/mechanics/blocks/attribute-block/"
check_block "Skill" "docs/mechanics/blocks/skill-block/"
check_block "Tag" "docs/mechanics/blocks/tag-block/"
check_block "Equipment" "docs/mechanics/blocks/equipment-block/"
check_block "Advancement" "docs/mechanics/blocks/advancement-block/"
check_block "Scale" "docs/mechanics/blocks/scale-block/"
check_block "Combat" "docs/mechanics/blocks/combat-block/"

# Show current branch configuration
echo "=== Current Branch Configuration ==="
echo "Branch: $(git branch --show-current)"
echo ""

# Check for uncommitted changes to blocks
echo "=== Uncommitted Block Changes ==="
git status --short docs/mechanics/blocks/ 2>/dev/null || echo "No uncommitted changes"

echo ""
echo "=== Block Compatibility Warnings ==="

# Simple compatibility check based on current files
if [ -f "docs/mechanics/blocks/skill-block/v3.0/README.md" ]; then
    echo "⚠️  Using Skill v3.0 (20-level) - requires Equipment v2.0 and Tag v2.1-sig"
fi

if [ -f "docs/mechanics/blocks/skill-block/v2.0/README.md" ]; then
    echo "⚠️  Using Skill v2.0 (tag-only) - incompatible with Equipment v2.0"
fi

echo ""
echo "To see detailed changes for a specific block:"
echo "  git log -p -- docs/mechanics/blocks/[block-name]/"
echo ""
echo "To compare versions:"
echo "  git diff [old-commit] [new-commit] -- docs/mechanics/blocks/[block-name]/"