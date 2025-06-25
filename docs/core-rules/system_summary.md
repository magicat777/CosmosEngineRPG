# Cosmos Engine RPG - Complete System Summary v3.0

## Design Philosophy & Core Principles

### **System Vision**
**Cosmos Engine** is a science fiction RPG system designed to scale seamlessly from personal combat to galactic fleet operations using unified mechanics. The system prioritizes **meaningful tactical choices** over complex tracking, creating "sci-fi crunch" through **technology integration** rather than modifier stacking.

### **Complexity Budget Approach**
**Core Principle**: Different game aspects have different complexity targets to optimize play experience:
- **Core System**: 3/10 complexity (fast, intuitive resolution)
- **Combat System**: 5-6/10 complexity (tactical depth without overhead)
- **Technology/Enhancement**: 4/10 complexity (meaningful choices, not tracking)
- **Character Creation**: 3-4/10 complexity (guided paths for accessibility)
- **Social/Exploration**: 2/10 complexity (simple, fast resolution)

### **Design Priorities**
1. **Specialization Over Generalization**: Specialists should dramatically outperform generalists
2. **Meaningful Choices Over Complex Tracking**: Binary decisions preferred over graduated scales
3. **Tactical Depth Without Overhead**: Strategic options that don't bog down play
4. **Technology Integration**: Advanced tech feels advanced without complexity creep
5. **Cross-Scale Consistency**: Same mechanics work from personal to fleet command

---

## Core Resolution System

### **Universal Mechanic**
```
2d10 + Attribute + Skill + Equipment + Situation vs Target Number (8-20)
```

### **Component Ranges**
- **2d10 Base**: 2-20 (bell curve distribution, mean 11.0)
- **Attributes**: 1-10 (human average 4-5, maximum 10 at level 20) - PRIMAC system:
  - **Presence**: Influence & Command (charisma, leadership)
  - **Resolve**: Will & Stability (willpower, stress resistance)
  - **Intellect**: Analysis & Processing (reasoning, knowledge)
  - **Might**: Force & Power (strength, endurance)
  - **Awareness**: Detection & Intuition (perception, empathy)
  - **Coordination**: Precision & Control (dexterity, reflexes)
- **Skills**: 0-10 base (combat skill divided by 2 for attack/damage bonuses, maximum 10)
- **Equipment**: 0-3 (limited by Technology Era, balanced for scaling)
- **Situation**: -3 to +3 (consolidated modifier covering range, cover, conditions)

### **Target Numbers & Probability**
| Target Number | Difficulty | Success Rate* |
|---------------|------------|---------------|
| 8 | Easy | 85% |
| 11 | Moderate | 65% |
| 14 | Hard | 35% |
| 17 | Extreme | 15% |
| 20 | Legendary | 5% |

*Based on competent character (2d10 + 6 average modifiers)*

### **Critical Results**
- **Natural 20** (roll exactly 20 on 2d10): Always succeeds + bonus effect
- **Natural 2** (roll exactly 2 on 2d10): Always fails + complication  
- **Perfect Execution** (total result exactly 40): Legendary critical + choose bonus effect

### **Modifier Caps**
- **Maximum Total Bonus**: +8 (prevents auto-success)
- **Maximum Total Penalty**: -6 (prevents impossible tasks)
- **Hard Rule**: Excess modifiers beyond caps are ignored

---

## Scale System Architecture

### **Four Operational Scales**
| Scale | Examples | Health System | Damage Representation | Engagement Range |
|-------|----------|---------------|----------------------|------------------|
| **1: Personal** | Infantry, Power Armor | Hit Points (10-50) | Polyhedral dice | Close-Medium |
| **2: Vehicle** | Tanks, Gunships | Condition Tracks | Abstract damage levels | Medium-Long |
| **3: Starship** | Fighters, Corvettes | Condition Tracks | Abstract damage levels | Long-Extreme |
| **4: Capital** | Battleships, Stations | Condition Tracks | Abstract damage levels | Strategic |

### **Universal Range Bands**
| Scale | Close | Short | Medium | Long | Extreme |
|-------|-------|-------|--------|------|---------|
| **Personal** | 0-2m | 3-10m | 11-50m | 51-250m | 251m+ |
| **Vehicle** | 0-50m | 51-500m | 0.5-5km | 5-25km | 25km+ |
| **Starship** | 0-1km | 1-10km | 10-100km | 100-1000km | 1000km+ |
| **Capital** | 0-10km | 10-100km | 100-1000km | 1000-10000km | 10000km+ |

### **Cross-Scale Combat**
- **Scale Advantage**: +2 hit modifier per scale difference (larger targets easier to hit)
- **Scale Disadvantage**: -2 hit modifier per scale difference (smaller targets harder to hit)
- **Damage Effects**: Higher scale weapons cause automatic status effects on lower scales
- **Engagement Limits**: ±2+ scale differences generally cannot engage effectively

---

## Technology Era System

### **Five Technology Eras**
| Era | Max Equipment Bonus | Representative Technologies | Enhancement Access |
|-----|-------------------|---------------------------|-------------------|
| **Primitive** | +1 | Stone tools to gunpowder | None |
| **Industrial** | +2 | Steam power to modern electronics | Boosted mode only |
| **Advanced** | +3 | Near future to biotechnology | All modes, 3 allocation points |
| **Stellar** | +4 | Far future to reality manipulation | All modes, 4 allocation points |
| **Cosmic** | +5 | Physics-breaking technology | All modes, 5 allocation points |

### **Implementation Rules**
1. **Equipment Bonus Cap**: Cannot exceed Era maximum
2. **Skill Unlimited**: Character abilities always matter regardless of era
3. **Upgrade Path**: Higher Era equipment provides better bonuses
4. **Availability**: Equipment above campaign Era is rare/unique
5. **Mixed Eras**: Lower-era characters can use higher-era equipment if available

---

## Combat System (Streamlined - 5-6/10 Complexity)

### **Dual Damage System**

**Personal Scale**: Hit Points + Status Effects
- **Primary Damage**: Attacks reduce Hit Points (10-50 range)
- **Status Effects**: Conditions modify future actions
- **Death/Unconsciousness**: At 0 Hit Points

**Vehicle+ Scales**: Condition Tracks + Status Effects
- **Primary Damage**: Advances 5-box condition track (Operational → Damaged → Impaired → Critical → Destroyed)
- **Status Effects**: Same conditions modify system performance
- **Destruction**: At final condition track state

### **Multi-Die Damage System**

**Weapon Categories by Die Type**:
- **Precision (d4)**: Surgical strikes, reliable minimum damage
- **Standard (d6)**: Military workhorses, balanced damage profile
- **Heavy (d8)**: Industrial firepower, high average damage
- **Advanced (d10)**: High-tech systems, high maximum damage
- **Artillery (d12)**: Overwhelming force, massive damage potential
- **Exotic (d20)**: Reality-warping, extreme variance (Advanced+ Eras only)

**Technology Era Scaling**:
```
Primitive Era:    1 die    (1d4 to 1d12)
Industrial Era:   2 dice   (2d4 to 2d12)
Advanced Era:     3 dice   (3d4 to 3d20)
Stellar Era:      4 dice   (4d4 to 4d20)
Cosmic Era:       5 dice   (5d4 to 5d20)
```

**Example Progression**: 
- Industrial plasma rifle: 2d6+2 energy (4-14 damage, avg 9)
- Stellar plasma rifle: 4d6+4 energy (8-28 damage, avg 18)

### **Streamlined Status System**

**Three Universal Categories** (Maximum one per category):

**IMPAIRED** (-2 to affected actions):
- **Physical**: Movement, manual tasks
- **Mental**: Perception, decision-making
- **System**: Electronic functions

**DISABLED** (Cannot perform affected actions):
- **Physical**: Cannot move
- **Mental**: Cannot think clearly
- **System**: Systems offline

**CRITICAL** (Immediate danger requiring action):
- **Burning**: 1 damage per round until extinguished
- **Venting**: Losing air/fuel/power rapidly
- **Cascade**: Systems failing progressively (-1 cumulative per round)

### **Enhanced Technology System**

**Enhancement Modes** (Choose one per scene):
- **Standard Mode**: Normal operation
- **Boosted Mode**: +2 to all actions, equipment degrades faster
- **Overcharged Mode**: +4 to specific actions, -2 to others, equipment damage risk

**Power Allocation** (Distribute 3-5 points based on Technology Era):
- **Offense**: Each point adds +1 damage
- **Defense**: Each point adds +1 to Defense TN
- **Systems**: Each point adds +1 to electronic/technical actions

### **Attack & Defense System** (Balanced Formulas)

**Attack Resolution**:
```
2d10 + Attribute + (Skill ÷ 2) + Equipment + Situation vs Defense
```
- **Melee**: Might + (Combat ÷ 2)
- **Ranged**: Coordination + (Combat ÷ 2)
- **Other Skills**: Use appropriate attribute + (Skill ÷ 2)

**Defense Calculation**:
```
10 + Coordination + (Combat Skill ÷ 2) + Cover + Equipment
```
- **Base Defense**: 10 (replaces variable Target Numbers)
- **Combat Training**: Improves both offense and defense
- **Cover**: +1 to +3 (light to superior)
- **Equipment**: Armor/shields +0 to +3

**Damage Resolution**:
```
Weapon Base + (Combat Skill ÷ 2) + Success Margin + Enhancements
```
- **Skill Bonus**: Combat training adds to damage
- **Success Margin**: +1 damage per 5 points over Defense
- **Equipment**: Technology era determines weapon dice

### **Level Gap Rules** (Balance Mechanics)
- **5-9 Level Gap**: Lower opponents are "Minions" (take double damage)
- **10+ Level Gap**: Lower opponents are "Mooks" (defeated by any hit)
- **Elite Scaling**: Bosses gain +2 Defense per 5 levels above party

### **Defense Type Breakdown**
- **Passive Defense**: Physical armor, hull reinforcement (+0 to +3)
- **Active Defense**: Shields, evasive maneuvers (+0 to +3)  
- **Electronic Defense**: ECM, AI assistance (+0 to +3)
- **Maximum Equipment Bonus**: +3 (prevents inflation)

### **Damage Type Interactions**
| Damage Type | Effective Against | Reduced Against | Special Properties |
|-------------|------------------|-----------------|-------------------|
| **Kinetic** | Passive Defense | Active Defense | Reliable, penetrating |
| **Energy** | Electronic Defense | Passive Defense | No ammo, instant |
| **Electromagnetic** | All electronic systems | Hardened targets | Disabling effects |
| **Exotic** | Everything | Exotic defenses | Ignores normal defenses |

---

## Action Economy & Initiative

### **Initiative System** (Balanced)
**1d10 + Coordination + Awareness**

### **Action Types per Turn**
- **Standard Action**: Attack, complex skill use, electronic warfare
- **Move Action**: Movement, power reallocation, simple skill use
- **Quick Action**: Reload, activate equipment, short communication
- **Free Action**: Drop items, speak, toggle simple controls  
- **Reaction**: Respond to enemy actions (limited by enhancement level)

### **Action Acceleration Framework**
**Technology Enhancement allows faster action execution:**
- **Reflex Boosters**: One Standard Action becomes Move Action per turn
- **Neural Acceleration**: Two Standard Actions, second at -2 penalty
- **Quantum Synapses**: One action becomes Reaction (once per scene)

---

## Character Creation & Advancement

### **EVE Online-Inspired Progression**
**Character Levels**: 1-20 (galactic legendary figures at level 20)
**Advancement**: Specialization skill trees using Advancement Points (AP)
**Philosophy**: Specialization mastery over generalization

### **Character Creation Process (30-45 minutes)**

**Phase 1: Choose Your Path** (10 minutes)
- **New Players**: Select from 12+ Legendary Paths (auto-optimized builds)
- **Experienced Players**: Custom build using full skill tree system

**Phase 2: Technology Era Selection** (5 minutes)
- Choose starting technology era access (Primitive through Cosmic)

**Phase 3: Attribute Generation** (10 minutes)
- **Starting Array**: [3,3,2,2,2,2] - assign to PRIMAC attributes (Presence, Resolve, Intellect, Might, Awareness, Coordination)
- **Lifepath Method**: Apply bonuses based on choices:
  - Origin: +1 to two attributes (based on homeworld/culture)
  - Background: +1 to two attributes (based on upbringing)  
  - Career: +1 to two attributes (based on profession)
  - Experience: Distribute 2 additional points freely
- **Final Range**: Attributes 2-5 with narrative justification
- **Example**: Soldier origin (+1 Might, +1 Resolve), Academic background (+1 Intellect, +1 Awareness)

**Phase 4: Starting Skills** (10 minutes)
- Background grants 3 skills at rank 1
- Career grants 3 skills at rank 2
- Choose 2 personal interests at rank 1

**Phase 5: Starting Specializations** (10 minutes)
- **Beginning Budget**: 10 AP for skill tree basics
- **Path Followers**: Auto-guided to optimal purchases
- **Custom Builders**: Must follow prerequisite requirements

### **Advancement Point Progression**
| Character Tier | Levels | AP per Level | Total AP |
|----------------|---------|--------------|----------|
| **Personal Heroes** | 1-5 | 10 AP | 50 AP |
| **Regional Champions** | 6-10 | 15 AP | 75 AP |
| **Galactic Legends** | 11-15 | 20 AP | 100 AP |
| **Mythic Figures** | 16-20 | 25 AP | 125 AP |

**Total Character Progression**: 350 AP across 20 levels

### **Advancement Costs**
**Traditional Development**:
- **Attribute +1**: 3/4/5/6 AP (by tier, max 6 at level 20)
- **Skill +1**: 2/2/3/4 AP (by tier, max 7 enhanced/5 natural)
- **New Skill**: 1/2/2/3 AP
- **Equipment Rating +1**: 2/3/4/5 AP (within era limits)

### **Specialization Mastery System**

**Tree Mastery Bonuses** (encourage deep specialization):
- **Apprentice** (25 AP in tree): +1 to all tree rolls, signature ability
- **Journeyman** (75 AP in tree): +2 to all tree rolls, master technique  
- **Master** (150 AP in tree): +3 to all tree rolls, 25% cost reduction
- **Grandmaster** (250 AP in tree): +4 to all tree rolls, transcendent technique

**Generalist Tax** (discourage spreading):
- **1 Tree**: Normal costs
- **2 Trees**: +1 AP to all advances
- **3 Trees**: +2 AP to all advances
- **4+ Trees**: +3 AP to all advances

### **Core Skill Trees**
1. **Combat Tree**: Personal → Vehicle → Fleet weapons and tactics
2. **Engineering Tree**: Power → Structure → Innovation
3. **Operations Tree**: Piloting → Command → Strategy
4. **Technology Tree**: Computing → Enhancement → Research
5. **Economic Tree**: Trade → Manufacturing → Resource Control
6. **Exploration Tree**: Discovery → Survey → First Contact

### **Legendary Path Examples**

**"Supreme Galactic Ace Fighter Pilot"** (~280 AP, Piloting Mastery):
- **Arc**: Local hotshot → Squadron leader → Fleet coordinator → Legendary ace
- **Transcendent Technique**: "Fleet Ghost" - coordinate thousands of pilots simultaneously

**"Unhinged Cyborg with Fantasy Obsession"** (~270 AP, Technology Mastery):
- **Arc**: Tech enthusiast → Cybernetic experiment → Digital-reality hybrid
- **Transcendent Technique**: "Fantasy Singularity" - make anime physics temporarily real

**"Asteroid Belt Resource Emperor"** (~260 AP, Resource Extraction Mastery):
- **Arc**: Independent miner → Operation leader → System controller → Galactic hegemon
- **Transcendent Technique**: Control strategic materials across galactic civilization

---

## Equipment & Technology Integration

### **Equipment Condition System**
- **Functional**: Full Equipment rating applies
- **Damaged**: Equipment rating halved (round down)
- **Destroyed**: Equipment rating = 0, unusable

### **Equipment Degradation Triggers**
- **Natural 2** rolled while using equipment
- **Overcharged Mode** extended use
- **Enemy targeting** with successful Called Shots

### **Technology Enhancement Integration**
**Enhancement Modes affect damage dice**:
- **Boosted Mode**: +2 to damage rolls
- **Overcharged Mode**: +1 die step (d6→d8, d8→d10, etc.)

**Power Allocation affects damage output**:
- **Offense Points**: Each point adds +1 to damage rolls
- **Example**: 3d8+3 weapon + 2 Offense = 3d8+5 damage

---

## Design Decisions & Rationale

### **Complexity Budget Success**
**Problem Identified**: Initial combat system had 8+ modifier sources (complexity explosion)
**Solution Applied**: Consolidated to single Situation modifier (-3 to +3)
**Result**: Maintained tactical depth while achieving 5-6/10 complexity target

### **Multi-Die Damage Innovation**
**Problem**: Traditional damage scaling felt same-y across weapon types
**Solution**: Different die types (d4-d20) create weapon personality
**Benefits**: 
- Tactile variety (players use full dice collection)
- Immediate threat assessment (d20 = extremely dangerous)
- Natural technology progression (more dice = higher era)

### **Specialization Over Generalization**
**Problem**: Many RPGs reward generalist "do everything" characters
**Solution**: Exponential mastery bonuses + generalist tax system
**Result**: Specialists dramatically outperform generalists, encouraging focused builds

### **Cross-Scale Integration**
**Innovation**: Same mechanics work from personal combat to fleet command
**Implementation**: Scale modifiers rather than separate systems
**Benefit**: Characters naturally progress from personal heroes to galactic legends

### **Technology Era Gating**
**Problem**: How to represent technological advancement meaningfully
**Solution**: Equipment rating caps + enhancement access by era
**Result**: Technology feels like genuine advancement without power creep

---

## Mathematical Validation

### **Probability Preservation**
**2d10 Bell Curve Maintained**: Mean 11.0, standard deviation 2.87
**Modifier Caps Enforced**: +8 max bonus, -6 max penalty keeps meaningful probability
**Target Number Range**: 8-20 preserves 5-95% success rate spread

### **Character Power Progression**
**Level 1 Character**: 2d10 + 8-12 total modifiers (typical range 10-32)
**Level 20 Character**: 2d10 + 15-20 total modifiers (typical range 17-40)
**Power Growth**: Significant but not overwhelming, skills and specialization matter more than raw numbers

### **Cross-Scale Balance**
**Personal vs Vehicle**: ±2 modifier maintains challenge while showing scale difference
**Damage Scaling**: Condition tracks prevent unwieldy large numbers
**Enhancement Integration**: Technology feels powerful without breaking probability curves

---

## Unresolved Design Elements

### **Attribute System** ✅
**Defined**: 6 attributes, 0-5 range (6 max at level 20)
- **Might**: Force & Power across scales
- **Coordination**: Precision & Control
- **Intellect**: Analysis & Processing
- **Awareness**: Detection & Intuition
- **Presence**: Influence & Command
- **Resolve**: Will & Stability
**Integrated**: Cross-scale applications, derived statistics, advancement costs defined

### **Social/Exploration Systems** ✅
**Implemented**: Binary state system with talent trees
- **Relationships**: 5-state progression tracks per NPC/faction
- **Discoveries**: 5-state exploration tracks per location
- **Complexity**: 2/10 achieved through binary states
- **Depth**: 200+ AP of specialization options

### **Campaign Framework**
**Requirements**: Guidelines for scale progression, technology era advancement
**Needs**: Milestone systems, setting integration, campaign structure

---

## System Status & Next Steps

### **Completed Systems** ✅
- **Core Resolution Mechanic**: 2d10 + modifiers vs TN
- **Scale System**: Personal through Capital with unified mechanics
- **Combat System**: Streamlined to 5-6/10 complexity with tactical depth
- **Character Creation**: EVE-inspired advancement with guided paths
- **Technology Integration**: Enhancement modes and era progression
- **Attribute System**: PRIMAC - 6 attributes with cross-scale applications
- **Social/Exploration**: Binary states with deep specialization trees

### **Current Workshop** 🔧
- **Equipment Catalogs**: Detailed items by Technology Era
- **Complete Skill List**: All skills with PRIMAC pairings

### **Pending Development** 📋
- **Campaign Framework**: Scale progression and setting guidelines  
- **Equipment Catalogs**: Weapons, armor, vehicles by technology era
- **Complete Skill List**: Comprehensive skills with descriptions
- **Quick-Start Materials**: Pre-generated characters and scenarios
- **GM Resources**: Running games, setting TNs, creating NPCs

### **Design Philosophy Validation** ✅
**Cosmos Engine successfully achieves**:
- **Tactical depth without complexity overhead**
- **Sci-fi crunch through meaningful technology choices**
- **Seamless scaling from personal to galactic conflicts**  
- **Specialization rewards over generalist approaches**
- **Accessible character creation with deep customization options**

---

## Key Innovation Summary

**Cosmos Engine's** unique contributions to science fiction RPG design:

1. **Complexity Budget Approach**: Different systems target different complexity levels for optimal play experience
2. **Unified Cross-Scale Mechanics**: Same rules work from personal combat to fleet battles
3. **Multi-Die Damage System**: Weapon types feel mechanically distinct through different dice
4. **Specialization Mastery Framework**: Deep specialization provides exponential benefits
5. **Technology Era Integration**: Equipment caps and enhancement access create meaningful technological progression
6. **Guided Path Character Creation**: New players get optimized builds, veterans get unlimited customization

**Result**: A science fiction RPG that feels appropriately "crunchy" and high-tech while maintaining smooth, fast play through careful complexity management and innovative mechanical design.
