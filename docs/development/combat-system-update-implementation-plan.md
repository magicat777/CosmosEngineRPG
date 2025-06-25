# Combat System Update Implementation Plan

## Overview
This plan outlines the systematic update of 35+ files to implement the new balanced combat system across the entire Cosmos Engine RPG documentation repository.

## **PHASE 1: CORE FOUNDATION (Week 1)**
**Goal**: Establish the new combat system foundation that all other documents reference

### **Priority 1A: Combat System Core (Days 1-2)**

#### **Files to Consolidate & Rewrite:**
1. **NEW: `/docs/core-rules/combat-system-v3.md`** 
   - **Sources**: Consolidate from 4 existing combat guides
     - `/docs/core-rules/combat-system.md`
     - `/docs/combat-system/cosmos_combat_guide.md`
     - `/docs/combat-system/cosmos_combat_guide_advanced.md`
     - `/docs/combat-system/cosmos_combat_streamlined.md`
   - **Content**: Single authoritative combat system document
   - **New Sections**: Minion rules, elite scaling, level gap mechanics

2. **UPDATE: `/docs/core-rules/system_summary.md`**
   - **Action**: Modify combat section (lines 114-200)
   - **Content**: Update all formulas, add scaling notes

#### **New Content to Create:**
3. **NEW: `/docs/core-rules/combat-balance-rules.md`**
   - Minion rules for level gaps
   - Elite/boss scaling mechanics  
   - Cross-level encounter guidelines

### **Priority 1B: Quick Reference Updates (Days 3-4)**

#### **Critical Reference Files:**
4. **UPDATE: `/docs/gm-resources/gm-screen.md`**
   - **Action**: Complete rewrite of combat section
   - **Content**: New formulas, hit probability tables

5. **UPDATE: `/resources/reference-sheets/primac-quick-reference.md`**
   - **Action**: Replace all combat formulas
   - **Content**: Attack/defense/damage quick calculations

#### **New Reference Materials:**
6. **NEW: `/resources/reference-sheets/combat-quick-reference.md`**
   - Attack formula tables by level
   - Defense progression charts
   - Hit probability matrices
   - Level gap modifier tables

### **Priority 1C: Core Rules Document (Days 5-7)**

#### **Primary System Documentation:**
7. **UPDATE: `/docs/COSMOS_ENGINE_CORE_RULES.md`**
   - **Action**: Major revision of combat sections
   - **Sources**: Integrate new combat-system-v3.md content
   - **Content**: Update all examples, formulas, character builds

8. **UPDATE: `/docs/chapters/chapter-05-personal-scale-rules.md`**
   - **Action**: Complete rewrite of combat mechanics
   - **Content**: New formulas, updated examples, tactical guidance

---

## **PHASE 2: PLAYER RESOURCES (Week 2)**
**Goal**: Update all player-facing content with new combat system

### **Priority 2A: Character Creation & Examples (Days 8-10)**

#### **Character Creation System:**
1. **UPDATE: `/docs/chapters/chapter-03-character-creation.md`**
   - **Action**: Update derived values section
   - **Content**: New defense calculations, combat examples

2. **UPDATE: `/docs/chapters/chapter-04-character-advancement.md`**
   - **Action**: Update specialization benefits
   - **Content**: Combat skill value, advancement examples

#### **Core Character Examples:**
3. **CREATE: `/resources/example-builds/character-examples-v3/`** (New Directory)
   - **Purpose**: Clean slate character builds using new system
   - **Content**: 6 example characters across different levels/archetypes

### **Priority 2B: Existing Character Build Updates (Days 11-12)**

#### **Example Character Conversions:**
4. **UPDATE: `/resources/example-builds/character-build-laughing-man.md`**
   - **Action**: Recalculate all combat statistics
   - **Content**: New attack/defense/damage values

5. **UPDATE: `/resources/example-builds/character-build-dathomiri-witch.md`**
   - **Action**: Update Force combat mechanics
   - **Content**: Scaling Force powers with new damage system

6. **UPDATE: `/resources/example-builds/character-build-paul-atreides.md`**
   - **Action**: Update precognitive combat bonuses
   - **Content**: Rebalance abilities with new formulas

7. **UPDATE: `/resources/example-builds/character-build-scorpio-swtor.md`**
   - **Action**: Update stealth combat mechanics
   - **Content**: New sneak attack and positioning rules

8. **UPDATE: `/resources/example-builds/character-build-sith-lord.md`**
   - **Action**: Update lightsaber combat and Force powers
   - **Content**: Elite-level character example

### **Priority 2C: Species Integration (Days 13-14)**

#### **Species Combat Abilities:**
9. **UPDATE: `/docs/chapters/chapter-03-character-creation.md`** (Species Section)
   - **Action**: Update all species combat traits
   - **Content**: Recalculate synthetic/augment advantages

10. **CREATE: `/docs/development/species-combat-comparison.md`**
    - **Content**: Side-by-side combat capability analysis
    - **Purpose**: Balance verification for all 10 species

---

## **PHASE 3: ADVANCED SYSTEMS (Week 3)**
**Goal**: Update specialized combat systems and equipment

### **Priority 3A: Scale-Specific Combat (Days 15-17)**

#### **Multi-Scale Combat Systems:**
1. **UPDATE: `/docs/core-rules/mass-combat.md`**
   - **Action**: Update unit combat statistics
   - **Content**: New hero integration with balanced system

2. **UPDATE: `/docs/core-rules/starship-combat.md`**
   - **Action**: Update crew action mechanics
   - **Content**: Personal skills affecting ship combat

3. **UPDATE: `/docs/technical-guides/mass-combat-technical-guide.md`**
   - **Action**: Update scale transition mechanics
   - **Content**: Cross-scale damage conversion formulas

4. **UPDATE: `/docs/technical-guides/starship-combat-technical-guide.md`**
   - **Action**: Update crew effectiveness formulas
   - **Content**: Skill scaling in ship operations

### **Priority 3B: Equipment & Weapons (Days 18-19)**

#### **Equipment System Updates:**
5. **UPDATE: `/docs/equipment/weapons-catalog.md`**
   - **Action**: Add skill-based damage scaling
   - **Content**: Weapon + (Skill ÷ 2) calculations for all weapons

6. **UPDATE: `/docs/equipment/weapon-damage-scaling.md`**
   - **Action**: Complete rewrite of damage progression
   - **Content**: New era-based scaling with skill integration

7. **CREATE: `/docs/equipment/combat-equipment-tactics.md`**
   - **Content**: How positioning, cover, and equipment interact
   - **Purpose**: Tactical guidance for new balanced system

### **Priority 3C: Supporting Combat Rules (Days 20-21)**

#### **Specialized Mechanics:**
8. **UPDATE: `/docs/core-rules/health-damage-system.md`**
   - **Action**: Update damage application examples
   - **Content**: New damage scaling effects on health states

9. **UPDATE: `/docs/core-rules/electronic-warfare.md`**
   - **Action**: Update hacking combat mechanics
   - **Content**: Digital attacks using new formula system

10. **UPDATE: `/docs/core-rules/hacking-system.md`**
    - **Action**: Update parallel combat mechanics
    - **Content**: Hacking skill progression and scaling

---

## **PHASE 4: NEW CONTENT & FINALIZATION (Week 4)**
**Goal**: Create missing content and finalize documentation

### **Priority 4A: New Combat Rules (Days 22-24)**

#### **Missing Mechanics Documentation:**
1. **CREATE: `/docs/core-rules/minion-elite-rules.md`**
   - **Content**: 
     - Minion rules for 5+ level gaps
     - Elite scaling for bosses
     - Legendary creature mechanics
     - Encounter balance guidelines

2. **CREATE: `/docs/gm-resources/combat-encounter-design.md`**
   - **Content**:
     - Level-appropriate encounter guidelines
     - Mixed-level party considerations
     - Challenge rating calculations
     - Tactical encounter templates

3. **CREATE: `/docs/gm-resources/combat-tactics-guide.md`**
   - **Content**:
     - Positioning and movement tactics
     - Cover and concealment usage
     - Environmental factors
     - Advanced combat maneuvers

### **Priority 4B: GM Resources (Days 25-26)**

#### **Game Master Tools:**
4. **CREATE: `/docs/gm-resources/combat-difficulty-scaling.md`**
   - **Content**:
     - Automatic scaling for level gaps
     - On-the-fly encounter adjustment
     - Player skill vs character skill balance

5. **UPDATE: `/docs/gm-resources/gm-screen.md`** (Final Version)
   - **Action**: Add new content from Phases 1-3
   - **Content**: Complete combat reference with all new rules

6. **CREATE: `/resources/generators/combat-stat-calculator.md`**
   - **Content**: Quick calculation tables for NPCs
   - **Purpose**: Fast stat generation using new formulas

### **Priority 4C: Documentation Finalization (Days 27-28)**

#### **Integration & Cleanup:**
7. **CREATE: `/docs/development/combat-system-migration-guide.md`**
   - **Content**: 
     - Converting old characters to new system
     - Formula comparison charts
     - Common conversion scenarios

8. **UPDATE: `/docs/TABLE_OF_CONTENTS.md`**
   - **Action**: Add all new files created in Phases 1-4
   - **Content**: Complete book structure with new combat content

9. **UPDATE: `/docs/INDEX.md`**
   - **Action**: Add index entries for all new combat terms
   - **Content**: Cross-references to new rules and mechanics

10. **CREATE: `/docs/development/combat-system-changelog.md`**
    - **Content**: Complete list of changes made
    - **Purpose**: Developer reference and user migration guide

---

## **CONTENT CONSOLIDATION STRATEGY**

### **Documents to Consolidate:**
- **4 Combat Guides** → **1 Authoritative Combat System**
- **Multiple Reference Sheets** → **Unified Quick Reference**
- **Scattered Balance Rules** → **Centralized Balance Document**
- **Character Examples** → **Organized Build Library**

### **Documents to Retire:**
After Phase 1 completion:
- `/docs/combat-system/cosmos_combat_guide.md` (superseded)
- `/docs/combat-system/cosmos_combat_guide_advanced.md` (superseded)
- `/docs/combat-system/cosmos_combat_streamlined.md` (superseded)
- `/docs/development/combat-scaling-analysis.md` (replaced with new version)

### **New Document Structure:**
```
/docs/core-rules/
├── combat-system-v3.md (main combat rules)
├── combat-balance-rules.md (scaling & balance)
└── minion-elite-rules.md (special opponent rules)

/docs/gm-resources/
├── combat-encounter-design.md (encounter building)
├── combat-tactics-guide.md (tactical guidance)
└── combat-difficulty-scaling.md (on-the-fly scaling)

/resources/example-builds/character-examples-v3/
├── level-1-examples/ (starting characters)
├── level-5-examples/ (experienced characters)
└── level-10-examples/ (veteran characters)
```

---

## **SUCCESS METRICS**

### **Phase 1 Complete When:**
- All core combat formulas updated
- Quick references functional
- GM can run combats with new system

### **Phase 2 Complete When:**
- All character examples use new system
- Character creation produces balanced results
- Players have clear guidance

### **Phase 3 Complete When:**
- All specialized combat systems updated
- Equipment integrates with new formulas
- Scale transitions work correctly

### **Phase 4 Complete When:**
- All missing rules documented
- GM tools support new system
- Documentation is complete and organized

---

## **RISK MITIGATION**

### **Consistency Risks:**
- **Solution**: Use Phase 1 documents as authoritative source
- **Check**: Cross-reference all updates against core system

### **Complexity Risks:**
- **Solution**: Create simple reference materials in each phase
- **Check**: Test with example encounters at each phase

### **Integration Risks:**
- **Solution**: Update specialized systems after core is stable
- **Check**: Verify scale transitions work with new formulas

---

## **DELIVERABLES SUMMARY**

### **New Files Created:** 15+
### **Files Updated:** 25+
### **Files Retired:** 4
### **Total Work Items:** 44

This plan ensures systematic, thorough implementation of the balanced combat system while maintaining documentation quality and user accessibility.