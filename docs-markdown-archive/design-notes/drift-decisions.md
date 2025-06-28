# Cosmos Engine Drift Decisions Log

This document records all decisions made when mechanics drift from core principles, providing rationale and ensuring intentional design.

## Decision Template
```
### [Date]: [Mechanic Name]
**Type**: [Core Violation/Design Drift/Implementation Variance]
**Severity**: [High/Medium/Low]
**Decision**: [Keep Drift/Modify Rule/Change Core]
**Rationale**: [Why this decision was made]
**Review Date**: [When to revisit this decision]
```

---

## Active Drift Decisions

### 2025-01-23: Initiative System Simplification
**Type**: Design Drift  
**Severity**: Low  
**Decision**: Keep Drift  
**Description**: Initiative uses 2d10 + Coordination + Awareness instead of full 4-modifier system  
**Rationale**: 
- Initiative needs to be calculated quickly at combat start
- Adding equipment and situation modifiers would slow gameplay
- The simplified system maintains 2d10 base and reasonable range
- Uses two attributes that represent reflexes (Coordination) and perception (Awareness)
- Players find it more intuitive  
**Review Date**: After 10 combat playtests

### 2025-01-23: Multi-Die Damage System
**Type**: Implementation Variance  
**Severity**: Low  
**Decision**: Keep Drift  
**Description**: Damage uses polyhedral dice (d4-d20) instead of 2d10  
**Rationale**:
- Damage is not a resolution mechanic (no success/failure)
- Different die types create weapon personality
- Maintains excitement with full dice set usage
- Technology Era scaling through die quantity works well
- No probability curve needed for damage  
**Review Date**: Stable decision

### 2025-01-23: Condition Tracks for Vehicles+
**Type**: Implementation Variance  
**Severity**: Medium  
**Decision**: Keep Drift  
**Description**: Vehicles and larger use 5-box condition tracks instead of hit points  
**Rationale**:
- Prevents hit point inflation at larger scales
- More cinematic for vehicle combat
- Easier to track than triple-digit hit points
- Still uses same status effect system
- Maintains cross-scale compatibility  
**Review Date**: After vehicle combat playtests

### 2025-01-23: Scale-Based Modifier Caps
**Type**: Design Drift  
**Severity**: Medium  
**Decision**: Keep Drift  
**Description**: Modifier caps increase at higher scales (Personal +8, Starship +10, Capital +12)  
**Rationale**:
- Represents crew and infrastructure assistance at larger scales
- Maintains probability integrity (still can fail on Natural 2)
- Prevents absurd modifiers while acknowledging scale differences
- Players expect capital ships to be more capable
- Mathematical impact acceptable (max 97% success at TN 8)  
**Review Date**: After multi-scale combat playtests

---

## Rejected Drifts

### 2025-01-15: Advantage/Disadvantage System (Rejected)
**Type**: Core Violation  
**Severity**: High  
**Decision**: Modify Rule  
**Description**: Proposed rolling 3d10 keep highest/lowest 2  
**Rationale for Rejection**:
- Changes fundamental probability curve
- Breaks mathematical assumptions
- Incompatible with modifier caps
- Use binary bonuses/penalties instead  
**Alternative**: Situation modifiers (-3 to +3) achieve same goal

---

## Monitoring List

These are potential drifts to watch:

### Skill Enhancement Beyond +7
**Risk**: Players may want higher skill caps  
**Current Status**: Capped at +7 (enhanced)  
**Monitor For**: Power creep requests  
**Contingency**: Technology Era gates instead of raw numbers

### Complexity Creep in Status Effects
**Risk**: May expand beyond 3 categories  
**Current Status**: 3 categories (Impaired/Disabled/Critical)  
**Monitor For**: Requests for more conditions  
**Contingency**: Subcategories within existing 3

### Scale-Specific Rules
**Risk**: Each scale develops unique mechanics  
**Current Status**: Unified with modifiers  
**Monitor For**: "Realism" arguments  
**Contingency**: Optional complexity modules

---

## Design Philosophy Reminders

When evaluating drift, remember:

1. **Simplicity Enables Complexity**: Simple core allows complex tactics
2. **Consistency Builds Mastery**: Players should transfer knowledge between systems
3. **Dice Feel Matters**: 2d10 creates the right probability and feel
4. **Specialization Story**: Every drift should support specialist characters
5. **Technology Not Magic**: Sci-fi elements through equipment, not new mechanics

---

## Review Schedule

- **Monthly**: Review all active decisions
- **Per Playtest**: Check if decisions achieve goals
- **Major Version**: Reevaluate all drifts
- **Player Feedback**: Address systematic complaints

---

## Version History
- **v1.0.0** (2025-01-23): Initial drift decision documentation