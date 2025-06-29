# Cosmos Engine Mechanical Blocks System

## Overview

Each core mechanic is treated as a versioned "block" that can be mixed, matched, and evolved independently. This allows us to:
- Track mechanical evolution over time
- Test different combinations
- Revert specific systems without affecting others
- Build variant editions from different block versions

## Core Mechanical Blocks

### 1. RESOLUTION BLOCK
**Current Version**: v3.0 (2d10 + modifiers)
- Base dice mechanic
- Critical success/failure rules
- When to roll

### 2. ATTRIBUTE BLOCK  
**Current Version**: v2.0 (PRIMAC, -2 to +7 modifiers)
- Attribute definitions
- Modifier scale
- Derived values

### 3. SKILL BLOCK
**Current Versions Available**:
- v1.0: Flat bonus system (skills 0-10)
- v2.0: Tag-only system (7 ranks, tag dice)
- v3.0: Expanded 20-level system (in development)

### 4. TAG BLOCK
**Current Version**: v2.1 (Universal Tag System)
- Tag categories
- Synergy rules
- Dice pool mechanics

### 5. EQUIPMENT BLOCK
**Current Versions Available**:
- v1.0: Simple bonuses + tags
- v2.0: Component-based system (in development)

### 6. ADVANCEMENT BLOCK
**Current Versions Available**:
- v1.0: 10-rank progression
- v2.0: 20-level expansion (in development)

### 7. SCALE BLOCK
**Current Version**: v1.0 (Personal/Vehicle/Starship/Capital/Fleet)
- Scale definitions
- Conversion rules
- Cross-scale interactions

### 8. COMBAT BLOCK
**Current Version**: v1.5 (Updated for tag system)
- Initiative
- Attack/damage resolution
- Status effects

## Version History Format

Each block maintains a CHANGELOG with:
```
## [Version] - Date
### Added
- New features
### Changed  
- Modifications to existing features
### Removed
- Deprecated features
### Notes
- Design reasoning and compatibility notes
```

## Block Compatibility Matrix

| Block | Compatible With | Incompatible With |
|-------|----------------|-------------------|
| Resolution v3.0 | All current blocks | None |
| Attribute v2.0 | All skill versions | Attribute v1.0 |
| Skill v1.0 | Tag v1.0, Equipment v1.0 | Skill v2.0, v3.0 |
| Skill v2.0 | Tag v2.0 | Skill v1.0, v3.0 |
| Skill v3.0 | Equipment v2.0 | Skill v1.0, v2.0 |

## Building an Edition

To create a specific game edition, select compatible blocks:

### "Classic" Edition
- Resolution v3.0
- Attribute v2.0  
- Skill v1.0
- Tag v1.0
- Equipment v1.0
- Scale v1.0

### "Streamlined" Edition  
- Resolution v3.0
- Attribute v2.0
- Skill v2.0 (tag-only)
- Tag v2.1
- Equipment v1.0
- Scale v1.0

### "Epic" Edition (In Development)
- Resolution v3.0
- Attribute v2.0
- Skill v3.0 (20-level)
- Tag v2.1 (single signature tags)
- Equipment v2.0 (components)
- Advancement v2.0
- Scale v1.0

## Block Development Process

1. **Identify**: Recognize when a mechanic needs significant revision
2. **Branch**: Create a development branch for the new version
3. **Document**: Update the block's CHANGELOG and compatibility
4. **Test**: Playtest with other compatible blocks
5. **Version**: Tag the release (e.g., skill-v3.0)
6. **Integrate**: Update edition definitions

## Current Development Status

### Stable Blocks
- Resolution v3.0 ✓
- Attribute v2.0 ✓
- Scale v1.0 ✓

### In Transition
- Skill System (v2.0 tag-only → v3.0 expanded)
- Equipment System (v1.0 simple → v2.0 components)
- Advancement System (v1.0 → v2.0)

### Planned Blocks
- Magic/Psionics Block
- Social Conflict Block  
- Mass Combat Block
- Faction Block