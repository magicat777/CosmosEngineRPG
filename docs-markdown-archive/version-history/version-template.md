# Documentation Version Control Template

## How to Use This Template

When making changes to any file in `/docs`, add a version block at the bottom of the file:

```markdown
---
## Version History
- **v3.0.0** (2025-01-23): Initial documentation release
- **v3.0.1** (YYYY-MM-DD): [Brief description of changes]
```

## Full Version Entry Template

For major changes, use this expanded format:

```markdown
---
## Version History

### v3.1.0 - [Update Name]
**Date**: YYYY-MM-DD  
**Author**: [Your Name]  
**Status**: Draft | Review | Stable

#### Changes
- Added [new section/rule]
- Modified [existing section] to [clarify/improve/fix]
- Removed [obsolete content]

#### Rationale
[Why these changes were made]

#### Playtesting
- [ ] Mechanics tested in session
- [ ] Feedback incorporated
- [ ] Balance validated

#### Notes
[Any additional context or dependencies]
```

## Version Numbering Guidelines

### When to Increment Versions

**Patch (x.x.1)**
- Typo fixes
- Clarifications without mechanical changes
- Example additions
- Formatting improvements

**Minor (x.1.x)**
- New subsystems or options
- Significant clarifications that affect gameplay
- Balance adjustments
- Additional examples that demonstrate new uses

**Major (1.x.x)**
- Complete system overhauls
- Breaking changes to core mechanics
- Fundamental shifts in design philosophy
- Incompatible modifications

## Change Categories

Use these tags in your change descriptions:

- **[NEW]** - Added content
- **[MODIFIED]** - Changed existing content
- **[REMOVED]** - Deleted content
- **[FIXED]** - Corrected errors
- **[CLARIFIED]** - Made existing rules clearer
- **[BALANCED]** - Adjusted for game balance
- **[REORGANIZED]** - Restructured without changing content

## Example Version History

```markdown
---
## Version History

### v3.2.0 - Combat Streamlining Update
**Date**: 2025-02-15  
**Author**: Jane Designer  
**Status**: Stable

#### Changes
- [MODIFIED] Simplified status effect categories from 5 to 3
- [NEW] Added quick combat resolution option
- [BALANCED] Adjusted damage scaling for vehicle combat
- [CLARIFIED] Cross-scale combat modifier application

#### Rationale
Playtesting revealed status effect tracking was slowing combat. This update maintains tactical depth while improving play speed.

#### Playtesting
- ✅ Tested across 5 sessions
- ✅ 15% reduction in combat time
- ✅ Player satisfaction increased

### v3.1.2 - Minor Fixes
**Date**: 2025-02-01  
**Author**: System Team  
**Status**: Stable

#### Changes
- [FIXED] Typos in examples on pages 14, 27, 31
- [CLARIFIED] Initiative calculation for vehicle scale
- [NEW] Added example for multi-scale combat

### v3.1.1 - Clarification Patch
**Date**: 2025-01-28  
**Author**: Bob Editor  
**Status**: Stable

#### Changes
- [CLARIFIED] Technology Era equipment restrictions
- [FIXED] Incorrect damage calculation in example 3

### v3.1.0 - Attribute System Definition
**Date**: 2025-01-25  
**Author**: Design Team  
**Status**: Review

#### Changes
- [NEW] Complete attribute system with 6 attributes
- [NEW] Attribute application guidelines for all scales
- [NEW] Integration with skill system
- [MODIFIED] Character creation to include attribute allocation

### v3.0.0 - Initial Release
**Date**: 2025-01-23  
**Author**: System Architecture Team  
**Status**: Stable

Initial documentation release establishing core systems.
```

## Commit Message Format

When committing documentation changes:

```
docs: [component] brief description (vX.Y.Z)

- Detailed change 1
- Detailed change 2

Affects: filename1.md, filename2.md
```

Example:
```
docs: combat-system streamline status effects (v3.2.0)

- Reduced status categories from 5 to 3
- Added quick combat resolution rules
- Balanced vehicle scale damage

Affects: cosmos_combat_streamlined.md
```