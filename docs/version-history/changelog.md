# Cosmos Engine RPG - Documentation Change Log

This document tracks all changes to files within the `/docs` directory. Each entry includes the date, version, affected files, and a summary of changes.

## Version Numbering System
- **Major.Minor.Patch** (e.g., 3.1.2)
- **Major**: Significant system overhauls or incompatible changes
- **Minor**: New features, systems, or substantial improvements
- **Patch**: Bug fixes, clarifications, and minor adjustments

---

## Version 3.0.0 - Initial Documentation Release
**Date**: 2025-01-23  
**Type**: Major Release  
**Author**: System Architecture Team

### Files Added
- `core-rules/system_summary.md` - Complete system overview (v3.0)
- `core-rules/cosmos_engine_technical_guide.md` - Technical implementation guide
- `core-rules/rpg_technical_dice_mechanic_guide.md` - Dice mechanics analysis
- `combat-system/cosmos_combat_guide.md` - Basic combat rules
- `combat-system/cosmos_combat_guide_advanced.md` - Advanced combat rules
- `combat-system/cosmos_combat_guide_advanced_v2.md` - Enhanced advanced combat
- `combat-system/cosmos_combat_streamlined.md` - Streamlined combat system
- `character-system/cosmos_character_system.md` - Character creation and advancement
- `character-system/cosmos_advantage_system.md` - Advantage and specialization system
- `design-notes/scifi_rpg_requirements.md` - Original design requirements

### Summary of Changes
- Established baseline documentation for Cosmos Engine RPG v3.0
- Consolidated multiple combat system iterations
- Defined core resolution mechanics (2d10 + modifiers)
- Implemented four-scale system (Personal, Vehicle, Starship, Capital)
- Created EVE-inspired character advancement system
- Established Technology Era framework
- Set complexity budget targets for all systems

### Known Issues
- Attribute system definitions pending (see section 375-384 in system_summary.md)
- Social/exploration mechanics need development
- Equipment catalogs not yet created
- Campaign framework requires definition

---

## Version 3.1.0 - Drift Analysis Framework
**Date**: 2025-01-23  
**Type**: Minor Release  
**Author**: System Architecture Team

### Files Added
- `core-rules/core-mechanics-reference.md` - Quick reference for core mechanics validation
- `design-notes/drift-decisions.md` - Log of intentional mechanical variations
- `development/mechanics-workshop/drift-analysis-framework.md` - Framework for detecting drift
- `development/mechanics-workshop/mechanics-tracker.md` - Active tracking of all mechanics
- `development/mechanics-workshop/drift-analysis-report.md` - Initial system analysis
- `resources/templates/rule-validation-checklist.md` - Checklist for new rule validation

### Summary of Changes
- Established drift detection and management system
- Created validation tools for mechanical consistency
- Documented existing intentional variances
- Identified attribute system as critical gap
- Set up ongoing monitoring framework

### Key Findings
- Core mechanics consistency: 92/100
- Intentional drifts: Initiative simplification, damage dice variety
- Critical gap: Attribute system undefined
- Overall system health: Good

### Review Requirements
- Check all new mechanics against core reference
- Use validation checklist for new rules
- Update tracker monthly
- Document all drift decisions

---

## Version 3.2.0 - Attribute System Definition
**Date**: 2025-01-23  
**Type**: Minor Release  
**Author**: System Design Team

### Files Added
- `core-rules/attribute-system.md` - Complete attribute system definition
- `development/mechanics-workshop/attribute-system-analysis.md` - Analysis of proposed system

### Files Modified
- `development/mechanics-workshop/mechanics-tracker.md` - Updated attribute system status
- `docs/design-notes/drift-decisions.md` - Added scale-based modifier cap decision

### Summary of Changes
- Defined six core attributes: Might, Coordination, Intellect, Awareness, Presence, Resolve
- Established cross-scale applications for all attributes
- Set attribute ranges (0-5, max 6 at level 20)
- Created derived statistics (HP, Initiative, Defenses, Strain)
- Implemented scale-based modifier caps (Personal +8, Starship +10, Capital +12)

### Design Decisions
- Maintained 2d10 for initiative (not 1d10)
- Capped HP at reasonable range (10-30)
- Technology enhances but doesn't replace attributes
- Every attribute has vital applications (no dump stats)

### Integration Notes
- All attributes work identically across scales
- Modifier caps adjust by scale to represent assistance
- Technology Era provides temporary enhancements only

---

## Version 3.2.1 - Phase 1 Attribute Integration
**Date**: 2025-01-23  
**Type**: Patch Release  
**Author**: System Integration Team

### Files Modified
- `core-rules/system_summary.md` - Updated initiative formula, added attribute definitions, completed character creation
- `core-rules/core-mechanics-reference.md` - Added attribute definitions and derived statistics
- `character-system/cosmos_character_system.md` - Integrated attributes into character creation
- `combat-system/cosmos_combat_streamlined.md` - Changed "Will check" to "Resolve check"
- `design-notes/drift-decisions.md` - Updated initiative drift documentation

### Summary of Changes
- Updated all initiative references from "Reaction + Agility" to "Coordination + Awareness"
- Added complete attribute definitions to core references
- Integrated attribute generation into character creation process
- Added derived statistics formulas (HP, Defenses, Strain)
- Fixed terminology (Will → Resolve)

### Integration Progress
- Phase 1 Complete: Core attribute references updated
- Ready for Phase 2: Skill-attribute pairings and combat examples
- Attribute system now fully referenced in core documentation

---

## Version History Template

<!--
## Version X.Y.Z - [Release Name]
**Date**: YYYY-MM-DD  
**Type**: Major|Minor|Patch  
**Author**: [Name/Team]

### Files Added
- `path/filename.md` - Brief description

### Files Modified
- `path/filename.md` - Summary of changes
  - Specific change 1
  - Specific change 2

### Files Removed
- `path/filename.md` - Reason for removal

### Summary of Changes
[Overall description of what this version accomplishes]

### Breaking Changes
[List any changes that break compatibility with previous versions]

### Migration Notes
[Instructions for updating from previous version]

### Known Issues
[Any known problems or limitations]
-->

---

## Quick Reference - Current System Status

### Stable Systems (v3.0.0)
- ✅ Core Resolution Mechanic
- ✅ Scale System Architecture  
- ✅ Combat System (Streamlined)
- ✅ Technology Era Framework
- ✅ Character Creation Framework

### In Development
- 🔧 Attribute System
- 🔧 Social/Exploration Mechanics
- 🔧 Equipment Catalogs

### Planned
- 📋 Campaign Framework
- 📋 Setting Details
- 📋 GM Resources
- 📋 Quick-Start Guide

---

*This changelog is maintained for all documentation within the `/docs` directory. Tool updates, resource additions, and playtesting results are tracked separately.*