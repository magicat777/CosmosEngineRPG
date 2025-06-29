# Mechanical Blocks Quick Start Guide

## For Developers/Designers

### Switching Between Systems

```bash
# Switch to main branch (tag-only system)
git checkout main

# Switch to 20-level system
git checkout expanded-20-level-system

# Create new experimental branch
git checkout -b experimental-magic-system
```

### Creating a New Block Version

1. **Identify the need** for a new version
2. **Create the version directory**:
   ```bash
   mkdir -p docs/mechanics/blocks/skill-block/v4.0/
   ```
3. **Document the changes** in CHANGELOG.md
4. **Update compatibility** in EDITION-MANIFEST.md
5. **Test with other blocks** before committing

### Tracking Changes

```bash
# Run the drift tracker
./docs/mechanics/blocks/track-block-drift.sh

# See all changes to skill system
git log --oneline -- docs/mechanics/blocks/skill-block/

# Compare two versions
git diff main expanded-20-level-system -- docs/mechanics/blocks/skill-block/
```

### Recovering Old Mechanics

```bash
# Find when we had the old attribute system
git log --grep="attribute.*modifier" --oneline

# Restore a specific version
git checkout <commit-hash> -- docs/mechanics/blocks/attribute-block/v1.0/

# Cherry-pick just one mechanical change
git cherry-pick <commit-hash>
```

## For Game Masters

### Choosing an Edition

**Classic Experience** (Flat Bonuses)
- Use `main` branch
- Revert Skill Block to v1.0
- Simple, predictable progression

**Narrative Focus** (Current Main)
- Use `main` branch as-is
- Tag-only skill system
- Dynamic, story-driven

**Epic Campaign** (1-20 Levels)
- Use `expanded-20-level-system` branch
- Full progression with specific abilities
- Long-term character growth

### Mixing Blocks

Want component-based equipment but classic skills?
1. Start with `main` branch
2. Copy Equipment Block v2.0 from `expanded-20-level-system`
3. Keep Skill Block v1.0

## Common Commands

```bash
# See what edition you're running
cat docs/mechanics/blocks/EDITION-MANIFEST.md | grep -A20 "^### $(git branch --show-current)"

# Check block versions
ls docs/mechanics/blocks/*/CHANGELOG.md

# Quick switch between editions
git stash  # Save any uncommitted work
git checkout <branch-name>
git stash pop  # Restore work
```

## Design Philosophy

The mechanical blocks system allows us to:
1. **Experiment** without breaking stable mechanics
2. **Recover** good ideas we moved past
3. **Mix** proven systems in new ways
4. **Track** why we made specific changes
5. **Build** multiple editions from one codebase

Remember: Each block should do ONE thing well!