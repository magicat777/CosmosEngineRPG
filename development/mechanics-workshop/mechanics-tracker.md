# Cosmos Engine Mechanics Tracker

This document tracks all mechanics and rules across the system to monitor drift and ensure consistency.

## Active Mechanics Registry

### Core Resolution Mechanics

| Mechanic | Location | Uses 2d10 | Modifiers | TN Range | Drift Status | Notes |
|----------|----------|-----------|-----------|----------|--------------|-------|
| Basic Task Resolution | core-rules/system_summary.md | ✅ | 4 types | 8-20 | ✅ Aligned | Core mechanic |
| Combat Attack Rolls | combat-system/cosmos_combat_streamlined.md | ✅ | 4 types | 8-20 | ✅ Aligned | |
| Skill Checks | character-system/cosmos_character_system.md | ✅ | 4 types | 8-20 | ✅ Aligned | |
| Initiative | combat-system/cosmos_combat_streamlined.md | ✅ | 2 types | N/A | ✅ Aligned | 2d10 + Reaction + Agility |

### Damage Systems

| Mechanic | Location | Dice Used | Complexity | Scale Consistent | Drift Status | Notes |
|----------|----------|-----------|------------|------------------|--------------|-------|
| Personal Damage | combat-system/cosmos_combat_streamlined.md | Polyhedral | 5/10 | N/A | ✅ Aligned | Multi-die system |
| Vehicle Damage | combat-system/cosmos_combat_streamlined.md | Condition Tracks | 5/10 | ✅ | ✅ Aligned | 5-box tracks |
| Status Effects | combat-system/cosmos_combat_streamlined.md | N/A | 4/10 | ✅ | ✅ Aligned | 3 categories max |

### Character Mechanics

| Mechanic | Location | Complexity | Uses Core | Drift Status | Notes |
|----------|----------|------------|-----------|--------------|-------|
| Attribute System | *In Development* | TBD | TBD | ⚠️ Undefined | Needs definition |
| Skill System | character-system/cosmos_character_system.md | 3/10 | ✅ | ✅ Aligned | 0-5 range, 0-7 enhanced |
| Advancement Points | character-system/cosmos_character_system.md | 4/10 | N/A | ✅ Aligned | EVE-inspired |
| Specialization Trees | character-system/cosmos_character_system.md | 4/10 | N/A | ✅ Aligned | Mastery bonuses |

### Technology Integration

| Mechanic | Location | Complexity | Era Limited | Drift Status | Notes |
|----------|----------|------------|-------------|--------------|-------|
| Equipment Bonuses | core-rules/system_summary.md | 3/10 | ✅ | ✅ Aligned | +1 to +5 by era |
| Enhancement Modes | combat-system/cosmos_combat_streamlined.md | 4/10 | ✅ | ✅ Aligned | Standard/Boosted/Overcharged |
| Power Allocation | combat-system/cosmos_combat_streamlined.md | 4/10 | ✅ | ✅ Aligned | 3-5 points by era |

## Drift Analysis Summary

### 🟢 Fully Aligned Mechanics
- Core resolution (2d10 + modifiers)
- Combat system (streamlined version)
- Damage systems (multi-die + conditions)
- Skill ranges and advancement
- Technology Era integration

### 🟡 Potential Drift Areas
- **Initiative System**: Uses only 2 modifiers instead of 4 (intentional simplification)
- **Damage Dice**: Uses polyhedral dice but not for resolution (acceptable variance)

### 🔴 Undefined/Problem Areas
- **Attribute System**: Not yet defined - blocks several other systems
- **Social/Exploration**: No mechanics defined yet

## Complexity Budget Tracking

| System | Target | Current | Status | Notes |
|--------|--------|---------|--------|-------|
| Core Resolution | 3/10 | 3/10 | ✅ On Target | |
| Combat | 5-6/10 | 5/10 | ✅ On Target | Streamlined version |
| Technology | 4/10 | 4/10 | ✅ On Target | |
| Character Creation | 3-4/10 | 4/10 | ✅ On Target | With guided paths |
| Social/Exploration | 2/10 | 0/10 | 🔴 Missing | Needs development |

## Cross-Scale Compatibility Matrix

| Mechanic | Personal | Vehicle | Starship | Capital | Notes |
|----------|----------|---------|----------|---------|-------|
| Core Resolution | ✅ | ✅ | ✅ | ✅ | Universal |
| Combat System | ✅ | ✅ | ✅ | ✅ | Scale modifiers |
| Damage (HP) | ✅ | ❌ | ❌ | ❌ | Personal only |
| Damage (Conditions) | ❌ | ✅ | ✅ | ✅ | Vehicle+ only |
| Status Effects | ✅ | ✅ | ✅ | ✅ | Universal |
| Technology Modes | ✅ | ✅ | ✅ | ✅ | Universal |

## Version Correlation

| Document | Version | Last Drift Check | Status |
|----------|---------|------------------|--------|
| system_summary.md | v3.0.0 | 2025-01-23 | ✅ Baseline |
| cosmos_combat_streamlined.md | v3.0.0 | 2025-01-23 | ✅ Aligned |
| cosmos_character_system.md | v3.0.0 | 2025-01-23 | ✅ Aligned |
| core-mechanics-reference.md | v3.1.0 | 2025-01-23 | ✅ Current |

## Action Items

### Immediate Priorities
1. **Define Attribute System** - Blocking multiple subsystems
2. **Create Social/Exploration Rules** - Major gap in coverage
3. **Document Equipment Catalogs** - Players need concrete examples

### Drift Corrections Needed
- None currently identified in implemented systems

### Future Monitoring
- Watch for complexity creep in combat system
- Ensure new subsystems use 4-modifier structure
- Validate all new mechanics against core reference

## Drift Decision Log

### 2025-01-23: Initiative System Review
**Mechanic**: Initiative uses only Reaction + Agility, not all 4 modifiers
**Analysis**: This is intentional to speed play
**Decision**: Keep as designed - simplicity outweighs consistency here
**Rationale**: Initiative needs to be fast; full modifiers would slow game start

---

## How to Use This Tracker

1. **When Adding Mechanics**: Add entry to appropriate table
2. **During Review**: Check drift status column
3. **If Drift Detected**: Document in decision log
4. **Monthly**: Review all yellow/red status items
5. **After Updates**: Update version correlation

## Quick Status Legend

- ✅ **Aligned**: Follows core mechanics perfectly
- ⚠️ **Intentional Variance**: Documented drift for good reason
- 🔴 **Problem**: Needs correction or core revision
- ❌ **Not Applicable**: Doesn't apply at this scale/context
- TBD **Undefined**: Not yet developed