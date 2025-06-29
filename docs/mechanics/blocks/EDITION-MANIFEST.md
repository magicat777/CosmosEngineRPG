# Cosmos Engine Edition Manifest

## Current Git Branches & Their Block Configurations

### main (Current Stable)
**Last Updated**: 2024-12-27
**Description**: Tag-only skill system implementation

| Block | Version | Notes |
|-------|---------|-------|
| Resolution | v3.0 | 2d10 + modifiers |
| Attributes | v2.0 | -2 to +7 scale |
| Skills | v2.0 | Tag-only system |
| Tags | v2.1 | Universal Tag System |
| Equipment | v1.0 | Simple bonuses + tags |
| Advancement | v1.0 | 10-rank progression |
| Scale | v1.0 | 5-tier scale system |
| Combat | v1.5 | Updated for tags |

### expanded-20-level-system (In Development)
**Created**: 2024-12-28
**Description**: Full 1-20 level progression with specific abilities

| Block | Version | Notes |
|-------|---------|-------|
| Resolution | v3.0 | Unchanged |
| Attributes | v2.0 | Unchanged |
| Skills | v3.0 | 20-level system |
| Tags | v2.1-sig | Single signature tags |
| Equipment | v2.0 | Component system |
| Advancement | v2.0 | 20-level progression |
| Scale | v1.0 | Unchanged |
| Combat | v2.0 | Abilities + components |

### universal-tag-system (Historical)
**Merged**: 2024-12-26
**Description**: Implementation of comprehensive tag system

| Block | Version | Notes |
|-------|---------|-------|
| Resolution | v3.0 | 2d10 + modifiers |
| Attributes | v1.0 | Old +1 to +10 scale |
| Skills | v1.5 | Hybrid bonus + tags |
| Tags | v2.0 | Full implementation |
| Equipment | v1.0 | Simple bonuses |
| Advancement | v1.0 | 10-rank progression |
| Scale | v1.0 | 5-tier scale system |
| Combat | v1.0 | Original system |

## Quick Branch Creation Commands

### To create a new experimental branch with specific blocks:

```bash
# Create branch for testing component equipment
git checkout -b equipment-components-test
# Then manually update EDITION-MANIFEST.md with block selections
```

### To create a "Classic Edition" branch:

```bash
git checkout -b classic-edition
# Revert to Skill v1.0, Attribute v1.0, etc.
git checkout <commit-hash> -- docs/mechanics/blocks/skill-block/v1.0/
```

## Block Combination Guidelines

### Tested & Stable Combinations

**"Narrative Focus"**
- Resolution v3.0 + Attributes v2.0 + Skills v2.0 + Tags v2.1
- Emphasis on tag-driven storytelling

**"Traditional Crunch"**  
- Resolution v3.0 + Attributes v2.0 + Skills v1.0 + Equipment v1.0
- Familiar flat bonus progression

**"Epic Heroes"** (In Testing)
- Resolution v3.0 + Attributes v2.0 + Skills v3.0 + Equipment v2.0
- Full 20-level progression with component customization

### Incompatible Combinations

❌ **Don't Mix:**
- Skill v1.0 with Tag v2.1 (incompatible tag systems)
- Skill v2.0 with Equipment v2.0 (both use tags differently)
- Attribute v1.0 with Skill v2.0+ (math breaks)

## Version Tag Convention

When creating a stable block version:

```bash
# Tag individual block versions
git tag skill-v3.0
git tag equipment-v2.0

# Tag complete edition releases  
git tag edition-epic-v1.0-beta
```

## Recovery Instructions

### To recover a specific block from history:

```bash
# Find when block was changed
git log --oneline -- docs/mechanics/blocks/skill-block/

# Cherry-pick specific version
git checkout <commit> -- docs/mechanics/blocks/skill-block/v1.0/

# Or revert to tagged version
git checkout skill-v1.0 -- docs/mechanics/blocks/skill-block/
```

### To compare block versions:

```bash
# See differences between skill versions
git diff skill-v1.0 skill-v2.0 -- docs/mechanics/blocks/skill-block/

# Track drift in attribute scaling
git log -p -- docs/mechanics/blocks/attribute-block/CHANGELOG.md
```

## Design Principles for Blocks

1. **Independence**: Each block should function with minimal dependencies
2. **Clear Interfaces**: Define exactly what each block provides/requires
3. **Version Compatibility**: Document which versions work together
4. **Graceful Degradation**: Missing blocks should have obvious defaults
5. **Single Responsibility**: Each block handles one core system

## Future Block Candidates

- **Magic/Psionics Block**: Supernatural abilities system
- **Social Combat Block**: Detailed social conflict resolution  
- **Crafting Block**: Extended creation rules
- **Faction Block**: Organization management
- **Wealth Block**: Economic systems
- **Corruption Block**: Moral/physical degradation mechanics