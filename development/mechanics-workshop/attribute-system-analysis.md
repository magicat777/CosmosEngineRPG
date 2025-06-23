# Attribute System Analysis & Integration

## Proposed System Review

### ✅ Strengths of the Proposal

1. **Cross-Scale Consistency**: Excellent implementation where same attributes work Personal → Capital
2. **Thematic Clarity**: Each attribute has clear fiction and mechanical purpose
3. **No Dump Stats**: Every attribute has critical applications
4. **Technology Integration**: Amplification rather than replacement aligns with design philosophy

### 🔴 Critical Issues to Address

#### 1. Modifier Cap Violation
**Problem**: Your examples show totals exceeding +8 cap
- Professional: +8 (at cap)
- Elite: +12 (exceeds cap by +4)
- Capital Scale: +22 (massively exceeds)

**Solution**: Implement staged caps by scale:
```
Personal/Vehicle: +8 maximum
Starship: +12 maximum (crew provides scale bonus)
Capital: +16 maximum (infrastructure provides scale bonus)
```

#### 2. Attribute Maximum Confusion
**Problem**: Conflicting maximums (5, 6, 7, or 8?)
- Base rules say max 5 (6 at level 20)
- Era caps suggest up to 8

**Solution**: Clarify progression:
```
Natural Human Maximum: 5
Level 20 Exception: 6 (one attribute only)
Technology Enhancement: Can reach 7 (not base attribute)
```

#### 3. Initiative System Drift
**Problem**: Proposes Coordination + Awareness + 1d10
- Changes from established 2d10 + Reaction + Agility
- Reduces to single d10

**Solution**: Keep 2d10 base:
```
Initiative: 2d10 + Coordination + Awareness
```

## Recommended Integration

### Core Attribute Framework

```markdown
## The Six Attributes (0-5 range, 6 max at level 20)

### MIGHT - Force & Power
- **Personal**: Strength, endurance, constitution
- **Vehicle**: Power output, structural integrity
- **Starship**: Engineering, power allocation
- **Capital**: Industrial capacity, logistics

### COORDINATION - Precision & Control  
- **Personal**: Dexterity, reflexes, accuracy
- **Vehicle**: Piloting, system synchronization
- **Starship**: Navigation, tactical maneuvering
- **Capital**: Fleet coordination, timing

### INTELLECT - Analysis & Processing
- **Personal**: Reasoning, knowledge, problem-solving
- **Vehicle**: Diagnostics, optimization
- **Starship**: Strategic analysis, computation
- **Capital**: Grand strategy, prediction

### AWARENESS - Detection & Intuition
- **Personal**: Perception, empathy, alertness
- **Vehicle**: Environmental scanning
- **Starship**: Sensor operation, threat detection
- **Capital**: Intelligence networks

### PRESENCE - Influence & Command
- **Personal**: Charisma, leadership, force of personality
- **Vehicle**: Crew coordination
- **Starship**: Command authority, morale
- **Capital**: Diplomacy, alliance building

### RESOLVE - Will & Stability
- **Personal**: Willpower, stress resistance
- **Vehicle**: System stability, damage control
- **Starship**: Crisis management
- **Capital**: Strategic patience
```

### Mechanical Integration

#### Resolution Formula (Unchanged)
```
2d10 + Attribute + Skill + Equipment + Situation vs TN (8-20)
```

#### Modified Caps by Scale
To handle larger scale bonuses while preserving probability:

**Personal/Vehicle Scales**:
- Standard cap: +8 total modifiers
- Normal application of all rules

**Starship Scale**:
- Modified cap: +10 total modifiers
- Represents crew assistance
- Still within probability bounds

**Capital Scale**:
- Modified cap: +12 total modifiers  
- Represents massive infrastructure
- Maintains meaningful chance of failure

#### Attribute Advancement
```
Levels 1-5: 3 AP per +1 (to max 4)
Levels 6-10: 4 AP per +1 (to max 5)
Levels 11-15: 5 AP per +1 (to max 5)
Levels 16-20: 6 AP per +1 (to max 6, one attribute only)
```

### Derived Statistics (Revised)

#### Health Points
```
10 + (Might × 2) + (Resolve)
Range: 10-30 (not 40, maintains scale)
```

#### Initiative  
```
2d10 + Coordination + Awareness
(Maintains core 2d10 mechanic)
```

#### Defense Values
```
Physical Defense: 10 + Coordination + Equipment
Mental Defense: 10 + Resolve + Intellect/2
Electronic Defense: 10 + Intellect + Equipment
```

#### Strain/Stress
```
Strain Capacity: 3 + (Resolve × 2)
Range: 3-13 (manageable scale)
```

### Technology Integration

**Key Principle**: Technology enhances, never replaces attributes

**Enhancement vs Augmentation**:
- Enhancement: Equipment bonuses (+1 to +5 by era)
- Augmentation: Temporary boosts to effective attribute (not base)

Example:
```
Base Might: 4
Exoskeleton (Advanced Era): +3 equipment bonus
Neural Boost: Treat Might as 5 for one scene
Total: 2d10 + 5 + Skill + 3 + Situation
```

### Balance Considerations

#### Anti-Dump Stat Implementation
Each attribute vital for:

**MIGHT**: 
- Health points
- Equipment requirements
- Physical damage resistance

**COORDINATION**:
- Initiative (half)
- Defense
- All piloting/vehicle operation

**INTELLECT**:
- Skill points per level (bonus = Intellect/2)
- Technology use
- Electronic defense

**AWARENESS**:
- Initiative (half)
- Surprise/ambush detection
- Sensor operation (required at ship scale)

**PRESENCE**:
- Social encounters
- Crew/morale effects
- Command limits (max subordinates = Presence × 10)

**RESOLVE**:
- Strain capacity
- Mental defense
- Stress/morale checks

### Common Attribute Combinations

Document these for consistent play:

**Combat Actions**:
- Melee Attack: Might + Combat
- Ranged Attack: Coordination + Combat
- Tactical Analysis: Intellect + Combat

**Vehicle Operation**:
- Piloting: Coordination + Pilot
- Navigation: Intellect + Pilot
- Evasion: Awareness + Pilot

**Social Encounters**:
- Persuasion: Presence + Social
- Deception: Intellect + Social
- Intimidation: Might or Presence + Social

### Implementation Checklist

- [ ] Update all references to 6 attributes with these definitions
- [ ] Revise character sheets for derived statistics
- [ ] Create attribute requirement tables for equipment
- [ ] Define Technology Era enhancement limits
- [ ] Test probability math with scale-based caps
- [ ] Write examples for each attribute at each scale

## Summary

The proposed system is 85% excellent. With these adjustments:
1. Respect modifier caps (use scale-based progression)
2. Clarify attribute maximum (5, or 6 at level 20)
3. Maintain 2d10 for all rolls including initiative
4. Simplify derived statistics to manageable ranges

This creates a robust attribute system that supports your cross-scale play while maintaining mathematical integrity.

---

## Version History
- **v1.0.0** (2025-01-23): Initial attribute system analysis and integration recommendations