# Chapter Update Implementation Plan
## Cosmos Engine RPG - Skill Tree & Tag System Integration

### Overview
This document provides detailed task plans for updating core chapters to integrate the new 7×15 skill tree system and tag synergies. Each phase is designed to be self-contained and can be resumed independently.

---

## Phase 1: Chapter 5 - Actions & Skills (Complete Rewrite)
**Priority**: Highest - Foundation for entire system
**Estimated Time**: 2-3 days
**Dependencies**: None

### Pre-Phase Setup
- [ ] Read current Chapter 5: `/docs/chapters/chapter-05-actions-and-skills.md`
- [ ] Review skill tree references:
  - `/docs/mechanics/combat-skill-tree-with-tags.md`
  - `/docs/mechanics/cross-tag-compatibility-system.md` 
  - `/docs/mechanics/tag-system-integration-v4.md`
- [ ] Reference HTML skill trees in `/docs/diagrams/skill-trees/` for visual examples

### Task 1: Chapter Structure Design
- [ ] **1.1** Create new chapter outline:
  ```
  5.1 Using Skills (updated mechanics)
  5.2 Scale Integration (Personal → Vehicle → Starship → Fleet)
  5.3 Tag System Overview
  5.4 Tag Synergies and Combinations
  5.5 The Fifteen Core Skills
      5.5.1 Combat Skills
      5.5.2 Technical Skills  
      5.5.3 Social Skills
      5.5.4 Mental Skills
      5.5.5 Physical Skills
  5.6 Skill Progression Examples
  5.7 Tag Library (Quick Reference)
  ```
- [ ] **1.2** Backup current chapter: `cp chapter-05-actions-and-skills.md chapter-05-backup.md`

### Task 2: Core Mechanics Integration (Sections 5.1-5.4)
- [ ] **2.1** Rewrite "Using Skills" section:
  - Include tag bonus mechanics (+1 to +5 dice)
  - Explain tag manifestation vs. mechanical effect
  - Add examples of tagged skill rolls
- [ ] **2.2** Update "Scale Integration":
  - Show how skills work at each scale
  - Examples of same skill at different scales
  - Tag evolution across scales
- [ ] **2.3** Write "Tag System Overview":
  - What tags represent (specialization, background, personality)
  - How tags are gained (one per skill rank)
  - Tag categories and themes
- [ ] **2.4** Create "Tag Synergies" section:
  - Synergy levels: Perfect (+3), Strong (+2), Basic (+1), Conflict (-1 to -2)
  - Cross-skill synergy examples
  - Legendary chain synergies at high ranks

### Task 3: Individual Skill Documentation (Section 5.5)
For each of the 15 skills, create a standardized entry:

#### Combat Skills Section (5.5.1)
- [ ] **3.1** Combat skill progression:
  - R1: Basic Combat → R2: Weapon Specialist → R3: Combat Expert → R4: Elite Fighter → R6: Master Warrior → R8: Legendary Fighter → R10: WAR INCARNATE
  - Include 4 tag options per rank (28 total tags)
  - Scale progression examples
  - Combat maneuver examples using tags

#### Technical Skills Section (5.5.2)
- [ ] **3.2** Tech skill progression:
  - R1: Tech Use → R2: System Expert → R3: Tech Innovation → R4: Cyber Warfare → R6: Master Engineer → R8: Technology Prophet → R10: TECHNOMANCER
  - Tag options and tech specializations
  - Cross-skill synergies with pilot/medical

- [ ] **3.3** Pilot skill progression:
  - R1: Basic Piloting → R2: Reflexive Control → R3: Vehicle Specialist → R4: Combat Pilot → R6: Ace Pilot → R8: Legendary Ace → R10: VOID MASTER
  - Vehicle operation examples
  - Fleet command integration

- [ ] **3.4** Medical skill progression:
  - R1: First Aid → R2: Field Medicine → R3: Medical Science → R4: Chief Medical Officer → R6: Master Physician → R8: Medical Prodigy → R10: LIFE WEAVER
  - Healing mechanics with tags
  - Xenobiology applications

#### Social Skills Section (5.5.3)
- [ ] **3.5** Persuasion skill progression:
  - R1: Basic Persuasion → R2: Silver Tongue → R3: Group Dynamics → R4: Master Negotiator → R6: Social Architect → R8: Voice of Nations → R10: GALACTIC VOICE
  - Social influence examples
  - Mass persuasion mechanics

- [ ] **3.6** Deception skill progression:
  - R1: Basic Deception → R2: False Identity → R3: Information Control → R4: Master Spy → R6: Web Weaver → R8: Truth Sculptor → R10: THE DECEIVER
  - Espionage operations
  - Information warfare

- [ ] **3.7** Command skill progression:
  - R1: Basic Leadership → R2: Squad Leader → R3: Tactical Command → R4: Ship Captain → R6: Fleet Commander → R8: Legendary Commander → R10: SUPREME COMMANDER
  - Leadership mechanics
  - Mass combat integration

- [ ] **3.8** Intimidation skill progression:
  - R1: Basic Intimidation → R2: Fearmonger → R3: Dread Presence → R4: Terror Master → R6: Fear Incarnate → R8: Dread Lord → R10: THE TERROR
  - Fear effects and morale
  - Psychological warfare

#### Mental Skills Section (5.5.4)
- [ ] **3.9** Knowledge skill progression:
  - R1: Basic Knowledge → R2: Field Expert → R3: Information Network → R4: Scholar-Savant → R6: Universal Mind → R8: Omniscient Sage → R10: THE OMNIMIND
  - Research mechanics
  - Information databases

- [ ] **3.10** Perception skill progression:
  - R1: Keen Senses → R2: Eagle Eye → R3: Environmental Awareness → R4: Sensor Master → R6: All-Seeing Eye → R8: Cosmic Awareness → R10: THE WATCHER
  - Detection mechanics
  - Sensor integration

- [ ] **3.11** Discipline skill progression:
  - R1: Mental Fortitude → R2: Iron Will → R3: Mental Mastery → R4: Psionic Shield → R6: Willpower Incarnate → R8: Mental Titan → R10: THE UNBROKEN
  - Mental resistance
  - Willpower applications

- [ ] **3.12** Psionics skill progression:
  - R1: Psionic Awakening → R2: Mind Powers → R3: Psionic Network → R4: Psychic Master → R6: Mind Over Matter → R8: Cosmic Mind → R10: PSYCHIC GOD
  - Psionic powers
  - Reality manipulation

#### Physical Skills Section (5.5.5)
- [ ] **3.13** Stealth skill progression:
  - R1: Basic Stealth → R2: Shadow Walker → R3: Infiltrator → R4: Phantom Operative → R6: Master Shadow → R8: Shadow Legend → R10: THE UNSEEN
  - Infiltration mechanics
  - Electronic stealth

- [ ] **3.14** Athletics skill progression:
  - R1: Physical Fitness → R2: Enhanced Performance → R3: Extreme Athletics → R4: Superhuman Athlete → R6: Physical Paragon → R8: Legendary Athlete → R10: APEX PHYSICAL
  - Physical challenges
  - Environmental adaptation

- [ ] **3.15** Survival skill progression:
  - R1: Basic Survival → R2: Wilderness Expert → R3: Resource Master → R4: Colony Builder → R6: World Shaper → R8: Life Bringer → R10: VOID GARDENER
  - Environmental survival
  - Terraforming mechanics

### Task 4: Examples and Integration (Sections 5.6-5.7)
- [ ] **4.1** Create "Skill Progression Examples":
  - Character build examples showing tag synergies
  - Multi-skill combinations
  - Scale progression stories
- [ ] **4.2** Build "Tag Library Quick Reference":
  - Alphabetical tag list with descriptions
  - Synergy compatibility matrix
  - Common tag combinations

### Task 5: Chapter Review and Polish
- [ ] **5.1** Internal consistency check
- [ ] **5.2** Cross-reference with mechanics files
- [ ] **5.3** Proofread and format
- [ ] **5.4** Create chapter summary

---

## Phase 2: Chapter 4 - Character Advancement (Complete Overhaul)
**Priority**: High - Core progression mechanics
**Estimated Time**: 1 day
**Dependencies**: Requires Chapter 5 complete

### Pre-Phase Setup
- [ ] Read current Chapter 4: `/docs/chapters/chapter-04-character-advancement.md`
- [ ] Confirm Chapter 5 skills structure is finalized
- [ ] Review advancement point costs in original system

### Task 1: Advancement Structure Redesign
- [ ] **1.1** Update chapter outline:
  ```
  4.1 Advancement Basics
  4.2 Skill Progression (7-Tier System)
  4.3 Tag Evolution and Selection
  4.4 Advancement Point Costs
  4.5 Synergy Discovery and Rewards
  4.6 Character Arcs and Long-term Growth
  4.7 Advancement Examples
  ```
- [ ] **1.2** Backup current chapter: `cp chapter-04-character-advancement.md chapter-04-backup.md`

### Task 2: Core Advancement Mechanics
- [ ] **2.1** Rewrite "Advancement Basics":
  - Advancement point earning
  - When to advance skills
  - Tag selection timing
- [ ] **2.2** Create "Skill Progression" section:
  - Cost table for Ranks 1-10
  - Prerequisites for advancement
  - Cross-scale progression examples
- [ ] **2.3** Design "Tag Evolution" mechanics:
  - How tags change meaning at higher ranks
  - Tag synergy discovery process
  - Legendary tag manifestations

### Task 3: Advancement Economics
- [ ] **3.1** Balance advancement point costs:
  - Rank 1: 1 AP
  - Rank 2: 2 AP
  - Rank 3: 3 AP
  - Rank 4: 5 AP
  - Rank 6: 8 AP
  - Rank 8: 13 AP
  - Rank 10: 21 AP
- [ ] **3.2** Design synergy discovery rewards
- [ ] **3.3** Create advancement tracking sheets

### Task 4: Examples and Integration
- [ ] **4.1** Character advancement examples through all ranks
- [ ] **4.2** Tag evolution case studies
- [ ] **4.3** Multi-character synergy development

---

## Phase 3: Chapter 2 - Core Mechanics (Major Additions)
**Priority**: High - Foundation integration
**Estimated Time**: 1 day  
**Dependencies**: Requires Chapters 4 and 5 complete

### Pre-Phase Setup
- [ ] Read current Chapter 2: `/docs/chapters/chapter-02-core-mechanics.md`
- [ ] Identify sections needing tag integration
- [ ] Plan insertion points for new content

### Task 1: Tag System Integration
- [ ] **1.1** Add new section "2.X Tags and Synergies":
  - What tags represent
  - How tags modify rolls
  - Synergy bonus calculations
- [ ] **1.2** Update "Basic Task Resolution":
  - Include tag bonuses in examples
  - Show synergy combinations
- [ ] **1.3** Enhance "Dice Pool Modifiers":
  - Tag bonuses as modifier source
  - Stacking rules with other bonuses

### Task 2: Scale System Integration
- [ ] **2.1** Update scale examples to include tags
- [ ] **2.2** Show how tags work across scales
- [ ] **2.3** Scale-specific tag applications

### Task 3: Examples and Clarifications
- [ ] **3.1** Replace existing examples with tag-enhanced versions
- [ ] **3.2** Add edge case clarifications
- [ ] **3.3** Create tag synergy quick reference

---

## Phase 4: Chapter 3 - Character Creation (Major Revision)
**Priority**: High - Player onboarding
**Estimated Time**: 1 day
**Dependencies**: Requires Chapters 2, 4, and 5 complete

### Pre-Phase Setup
- [ ] Read current Chapter 3: `/docs/chapters/chapter-03-character-creation.md`
- [ ] Map current creation steps to new system
- [ ] Plan tag selection integration points

### Task 1: Creation Process Updates
- [ ] **1.1** Update character creation steps:
  ```
  Step 1: Character Concept
  Step 2: Choose Species
  Step 3: Determine Attributes
  Step 4: Select Skills
  Step 5: Choose Starting Equipment
  Step 6: Calculate Secondary Statistics  
  Step 6.5: Select Initial Tags (NEW)
  Step 7: Final Details
  ```

### Task 2: Tag Selection Integration
- [ ] **2.1** Create "Initial Tag Selection" guide
- [ ] **2.2** Link to skill descriptions in Chapter 5
- [ ] **2.3** Update character sheet template

### Task 3: Character Creation Example
- [ ] **3.1** Update Zara Chen example with tag selection
- [ ] **3.2** Show tag synergy potential
- [ ] **3.3** Reference advancement path (Chapter 4)

---

## Phase 5: Chapter 11 - Running Cosmos Engine (Major Additions)
**Priority**: High - GM Support
**Estimated Time**: 1-2 days
**Dependencies**: Requires all player-facing chapters complete

### Pre-Phase Setup
- [ ] Read current Chapter 11: `/docs/chapters/chapter-11-running-cosmos-engine.md`
- [ ] Identify GM guidance needs for tag system
- [ ] Plan integration with existing GM advice

### Task 1: Tag System GM Guidance
- [ ] **1.1** Add section "Using Tags in Play":
  - When to award synergy bonuses
  - Using player tags for complications
  - Encouraging tag discovery
- [ ] **1.2** Create "NPC Tag Assignment":
  - Quick NPC tag generation
  - Meaningful NPC tags
  - Villain tag combinations

### Task 2: Encounter Design Updates
- [ ] **2.1** Tag-based encounter design
- [ ] **2.2** Challenges that highlight different skills
- [ ] **2.3** Synergy reward opportunities

### Task 3: Campaign Integration
- [ ] **3.1** Using tags for story hooks
- [ ] **3.2** Long-term tag evolution arcs
- [ ] **3.3** Player agency through tags

---

## Phase Completion Checklist

### After Each Phase:
- [ ] Chapter is internally consistent
- [ ] Cross-references other chapters correctly
- [ ] Examples are clear and comprehensive
- [ ] No mechanical contradictions
- [ ] Maintains Cosmos Engine design principles

### After All Phases:
- [ ] All chapters reference each other correctly
- [ ] Tag system is consistently implemented
- [ ] Skill progression is clear throughout
- [ ] GM has adequate guidance
- [ ] Players have clear advancement path

## Emergency Continuation Notes

### If Interrupted Mid-Phase:
1. Save current work with timestamp
2. Note specific task being worked on
3. Document any decisions made during the session
4. List any questions or concerns that arose

### Key Reference Files:
- Skill trees: `/docs/diagrams/skill-trees/`
- Tag systems: `/docs/mechanics/`
- Current chapters: `/docs/chapters/`
- This plan: `/docs/development/chapter-update-implementation-plan.md`

### Design Principles to Maintain:
1. **Simplicity**: 2d10 + Attribute + Skill core remains unchanged
2. **Scalability**: Same mechanics work from Personal to Fleet scale  
3. **Narrative**: Tags provide story hooks, not just mechanical bonuses
4. **Choice**: Multiple viable character builds and advancement paths
5. **Consistency**: Same concepts work the same way throughout