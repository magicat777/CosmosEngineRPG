# Attribute System Integration Report

**Date**: 2025-01-23  
**Scope**: Full documentation review for attribute system integration  
**Priority**: High - Attributes are foundational to many systems

## Executive Summary

With the attribute system now defined, significant documentation updates are required across multiple systems. The most critical updates involve initiative mechanics, character creation, and skill-attribute pairings.

## Critical Updates Required

### 1. Initiative System (🔴 Immediate)
**Current**: References "Reaction Attribute + Agility Rating"  
**Update To**: "2d10 + Coordination + Awareness"  
**Files Affected**:
- `/docs/core-rules/system_summary.md` (line 195)
- `/docs/character-system/cosmos_character_system.md` (line 195)
- `/docs/design-notes/drift-decisions.md` (line 23)

### 2. Character Creation (🔴 Immediate)
**Current**: Generic attribute generation without specifics  
**Needs**: Complete integration of the six attributes  
**Files Affected**:
- `/docs/character-system/cosmos_character_system.md`
- `/docs/core-rules/system_summary.md` (lines 229-236)

**Required Additions**:
- Starting arrays for the six attributes
- Lifepath bonuses mapped to new attributes
- Example characters with all six attributes

### 3. Core Mechanics Reference (🔴 Immediate)
**Current**: States attributes undefined  
**Update**: Add attribute definitions  
**File**: `/docs/core-rules/core-mechanics-reference.md` (lines 19-24)

## System Integration Needs

### Combat System Updates
1. **Melee Combat**: Specify Might + Combat skill
2. **Ranged Combat**: Specify Coordination + Combat skill
3. **Defense Calculations**: Update with new formulas
   - Physical Defense: 10 + Coordination + Armor
   - Mental Defense: 10 + Resolve + (Intellect ÷ 2)
   - Electronic Defense: 10 + Intellect + Systems

### Skill-Attribute Pairings
Need to define which attributes pair with which skills:

**Combat Skills**:
- Melee: Might
- Ranged: Coordination
- Tactics: Intellect
- Evasion: Awareness

**Technical Skills**:
- Engineering: Intellect/Might
- Hacking: Intellect
- Repair: Coordination
- Analysis: Awareness

**Social Skills**:
- Leadership: Presence
- Deception: Intellect
- Intimidation: Might/Presence
- Empathy: Awareness

**Vehicle Skills**:
- Piloting: Coordination
- Navigation: Intellect
- Gunnery: Coordination
- Command: Presence

### Missing Systems That Depend on Attributes

1. **Social/Exploration Mechanics** (Not yet created)
   - Needs Presence for social encounters
   - Needs Awareness for exploration
   - Needs Intellect for investigation

2. **Stress/Morale System** (Referenced but undefined)
   - Should use Resolve as primary attribute
   - Presence for leadership effects

3. **Technology Interface Rules** (Mentioned but not detailed)
   - Enhancement compatibility checks
   - Neural interface requirements
   - Cybernetic integration limits

4. **Equipment Requirements** (Need specification)
   - Heavy weapons: Might requirements
   - Precision tools: Coordination requirements
   - Advanced tech: Intellect requirements

## Documentation Update Priority

### Phase 1: Core Updates (Immediate)
1. Update initiative formula everywhere
2. Add attribute definitions to core-mechanics-reference.md
3. Update character creation with attribute details
4. Fix all "Reaction/Agility/Will" references

### Phase 2: System Integration (This Week)
1. Define all skill-attribute pairings
2. Update combat examples with specific attributes
3. Create equipment requirement tables
4. Add derived statistic calculations

### Phase 3: New Systems (Next Week)
1. Create social/exploration mechanics
2. Develop stress/morale rules
3. Define technology interface systems
4. Build complete skill list

## File-by-File Action Items

### `/docs/core-rules/system_summary.md`
- [ ] Update line 195: Initiative formula
- [ ] Update line 34: List all six attributes
- [ ] Update lines 229-236: Attribute generation details
- [ ] Update lines 380-384: Remove "undefined" status

### `/docs/core-rules/core-mechanics-reference.md`
- [ ] Update lines 19-24: Add attribute definitions
- [ ] Add attribute quick reference table

### `/docs/character-system/cosmos_character_system.md`
- [ ] Update initiative references
- [ ] Add complete attribute generation
- [ ] Include attribute descriptions
- [ ] Add advancement costs

### `/docs/combat-system/cosmos_combat_streamlined.md`
- [ ] Add specific combat attribute uses
- [ ] Update defense calculations
- [ ] Define "Will check" as Resolve

### All Combat Documents
- [ ] Search/replace old attribute names
- [ ] Add combat-attribute pairing examples
- [ ] Update any derived statistics

## Recommended Approach

1. **Create Update Checklist**: Track each change systematically
2. **Batch Updates**: Update similar references together
3. **Version Control**: Create feature branch for updates
4. **Validation**: Use drift analysis framework to verify consistency
5. **Examples**: Add concrete examples for each attribute use

## Missing Content to Create

### High Priority
1. **Skill List**: Complete skill list with attribute pairings
2. **Social Mechanics**: Presence-based social system
3. **Exploration Rules**: Awareness-based exploration

### Medium Priority
1. **Equipment Catalog**: With attribute requirements
2. **Stress System**: Resolve-based mental health
3. **Technology Interface**: Enhancement rules

### Low Priority
1. **GM Guidance**: How to set attribute-based TNs
2. **Advancement Examples**: Character progression paths
3. **Quick Reference**: Attribute application cheat sheet

## Conclusion

The attribute system definition unlocks multiple blocked systems. Priority should be:
1. Update all existing references (Phase 1)
2. Define skill-attribute pairings (Phase 2)
3. Create missing systems (Phase 3)

This will bring the documentation to full consistency with the new attribute system.

---

## Version History
- **v1.0.0** (2025-01-23): Initial attribute integration assessment