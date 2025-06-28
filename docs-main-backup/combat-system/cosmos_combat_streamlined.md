# Cosmos Engine Combat System - Streamlined v1.0
## Complexity Budget: 5-6/10 - Tactical Depth Without Overhead

---

## Design Philosophy

**Core Principle**: Meaningful choices over complex tracking
- **Sci-Fi Crunch**: Comes from tactical decisions, not modifier math
- **Technology Feel**: Enhanced through binary choices and resource allocation
- **Combat Depth**: Achieved through positioning, timing, and equipment selection
- **Streamlined Tracking**: Maximum 3 states for any system

---

## Core Combat Resolution

### Universal Mechanic
**2d10 + Attribute + Skill + Equipment + Situation vs Target Number**

**Situation Modifier** (-3 to +3): Single consolidated modifier covering:
- Range (Close +2, Short +1, Medium 0, Long -1, Extreme -2)
- Cover/Concealment (Light -1, Heavy -2, Total = can't target)
- Environmental conditions
- Tactical circumstances

**Example Calculation:**
- *Shooting at medium range through light smoke at target behind corner*
- **Situation**: Medium range (0) + Light concealment (-1) + Light cover (-1) = **-2**
- **Final Roll**: 2d10 + Firearms + Equipment **-2** vs Target's Defense

---

## Dual Damage System (Streamlined)

### Personal Scale: Hit Points + Status
- **Primary Damage**: Reduces Hit Points (10-50 range)
- **Status Effects**: Binary conditions affecting future actions
- **Death/Unconsciousness**: At 0 Hit Points

### Vehicle+ Scales: Condition Tracks + Status  
- **Primary Damage**: Advances 5-box condition track (Operational → Damaged → Impaired → Critical → Destroyed)
- **Status Effects**: Same binary conditions affecting performance
- **Destruction**: At final condition track box

### Status Integration
**Weapons can cause BOTH damage AND status effects:**
- **Standard Hit**: Damage only
- **Critical Hit**: Damage + Status effect
- **Special Weapons**: Designed to cause specific status effects

---

## Streamlined Status System

### Three Universal Status Categories

**IMPAIRED** (-2 to affected actions)
- **Physical**: Movement, manual tasks (caused by kinetic damage, fatigue)
- **Mental**: Perception, decision-making (caused by EM interference, stress)  
- **System**: Electronic functions (caused by EMP, power drain)

**DISABLED** (Cannot perform affected actions)
- **Physical**: Cannot move (engines offline, legs injured)
- **Mental**: Cannot think clearly (stunned, sensory overload)
- **System**: Systems offline (hacked, power failure)

**CRITICAL** (Immediate danger requiring action)
- **Burning**: 1 damage per round until extinguished
- **Venting**: Losing air/fuel/power rapidly
- **Cascade**: Systems failing progressively (-1 cumulative penalty per round)

### Status Rules
- **Maximum One Status per category** (Physical, Mental, System)
- **Duration**: Short (1-3 rounds) or Extended (scene/encounter)
- **Recovery**: Active effort removes status, or fades naturally
- **Stacking**: Different categories stack, same categories don't

**Example**: Character can be Physically Impaired + Mentally Disabled + Critical Burning simultaneously, but not Physically Impaired + Physically Disabled.

---

## Enhanced Technology System (4/10 Complexity)

### Technology States (Binary Choices)

**ENHANCEMENT MODES** (Choose one per scene):
- **Standard Mode**: Normal operation, no bonuses or penalties
- **Boosted Mode**: +2 to all actions, equipment degrades faster
- **Overcharged Mode**: +4 to specific action type, -2 to everything else, risk of damage

**SYSTEM ALLOCATION** (Distribute 3 points among):
- **Offense**: Each point adds +1 damage
- **Defense**: Each point adds +1 to Defense TN
- **Systems**: Each point adds +1 to electronic/technical actions

**Example Character Setup:**
- **Mode**: Boosted (+2 to all actions)
- **Allocation**: Offense 2, Defense 1, Systems 0
- **Result**: +4 damage, +1 Defense, +2 to technical actions, equipment degrades

### Technology Era Limits
- **Primitive Era**: Cannot use Enhancement Modes
- **Modern Era**: Can use Boosted Mode only
- **Advanced Era**: All modes available, 3 allocation points
- **Stellar Era**: All modes, 4 allocation points  
- **Cosmic Era**: All modes, 5 allocation points

---

## Action Acceleration Framework (Preserved)

### Enhancement-Driven Action Economy

**Core Innovation**: Technology allows faster action execution
- **Standard → Move**: Attack becomes movement-speed action
- **Move → Quick**: Reposition becomes quick action
- **Quick → Free**: Reload becomes free action
- **Free → Reaction**: Simple actions become immediate

### Technology-Based Acceleration
- **Reflex Boosters**: One Standard Action becomes Move Action per turn
- **Neural Acceleration**: Two Standard Actions, but second at -2 penalty
- **Quantum Synapses**: One action of any type becomes Reaction (1/scene)

**Resource Cost**: Using acceleration advances equipment degradation

---

## Streamlined Equipment System

### Three Equipment States
- **Functional**: Full Equipment rating applies
- **Damaged**: Equipment rating halved (round down)  
- **Destroyed**: Equipment rating = 0, unusable

### Equipment Degradation
**Natural Degradation**: Equipment downgrades one level when:
- **Natural 2 rolled** while using equipment
- **Used in Overcharged Mode** for extended periods
- **Targeted by enemies** with successful Called Shots

**Field Repair**: 
- **Damaged → Functional**: Easy repair (TN 12), 5 minutes, basic tools
- **Destroyed → Damaged**: Hard repair (TN 17), 1 hour, workshop tools

---

## Tactical Combat Actions

### Core Tactical Options (Choose 4 to keep system focused)

**SUPPRESSIVE FIRE**
- **Cost**: Standard Action, 3x ammunition  
- **Effect**: Target area gains "Suppressed" condition
- **Suppressed**: Must make Resolve check (TN 15) or lose Standard Action next turn
- **Duration**: Until suppressor's next turn

**COORDINATED ATTACK**
- **Requirements**: 2+ attackers can communicate
- **Effect**: All attackers use Standard Actions simultaneously
- **Benefit**: +1 damage per additional attacker (max +3)
- **Risk**: All attackers have -2 Defense until next turn

**ELECTRONIC WARFARE** (Advanced+ Tech)
- **Cost**: Standard Action
- **Target**: Any electronic system within Short range
- **Effect**: Target gains "System Disabled" status for 3 rounds
- **Defense**: Target can resist with Electronic Defense

**POWER SURGE**
- **Cost**: Advance equipment degradation one level
- **Effect**: Choose one for this attack:
  - Double damage dice
  - Ignore target's best defense type
  - Attack becomes area effect (affects adjacent targets)

---

## Damage Types & Defense Interaction

### Four Damage Types (Preserved - Core Sci-Fi Element)

**KINETIC** (Bullets, missiles, mass drivers)
- **Effective vs**: Physical armor (Passive Defense)
- **Reduced vs**: Energy barriers (Active Defense)

**ENERGY** (Lasers, plasma, particle beams)
- **Effective vs**: Electronic systems (Electronic Defense)
- **Reduced vs**: Reflective armor (Passive Defense)

**ELECTROMAGNETIC** (EMP, ion weapons, system viruses)
- **Effective vs**: All electronic systems
- **Causes**: System status effects instead of damage

**EXOTIC** (Quantum weapons, psionic attacks, reality manipulation)
- **Effective vs**: Everything (ignores conventional defenses)
- **Rare**: Limited to Advanced+ Technology Eras

### Defense Types (Streamlined from 6 to 3)
- **Passive Defense**: Physical armor, hull reinforcement (+0 to +3)
- **Active Defense**: Shields, evasive maneuvers (+0 to +3)
- **Electronic Defense**: ECM, AI assistance (+0 to +3)
- **Maximum Total Defense**: +6 (prevents TN inflation)

---

## Cross-Scale Combat (Preserved Innovation)

### Scale Modifiers
- **+1 Scale Advantage**: +2 to hit (larger targets easier)
- **-1 Scale Disadvantage**: -2 to hit (smaller targets harder)
- **±2+ Scale Difference**: Generally cannot engage effectively

### Damage Scaling
- **Personal Scale**: Hit Points (1-50 range)
- **Vehicle Scale**: Condition Tracks (abstract damage levels)
- **Starship Scale**: Condition Tracks (abstract damage levels)
- **Capital Scale**: Condition Tracks (abstract damage levels)

**Cross-Scale Effects**: Larger scale weapons cause automatic status effects vs smaller scales

---

## Range & Movement System

### Universal Range Bands (Preserved)
| Scale | Close | Short | Medium | Long | Extreme |
|-------|-------|-------|--------|------|---------|
| **Personal** | 0-2m | 3-10m | 11-50m | 51-250m | 251m+ |
| **Vehicle** | 0-50m | 51-500m | 0.5-5km | 5-25km | 25km+ |
| **Starship** | 0-1km | 1-10km | 10-100km | 100-1000km | 1000km+ |
| **Capital** | 0-10km | 10-100km | 100-1000km | 1000-10000km | 10000km+ |

### Movement Actions
- **Tactical Move** (Free): 1 range band, no penalties
- **Combat Move** (Move): Full movement rating
- **Sprint** (Standard): Double movement, -2 to other actions this turn
- **Evasive** (Move): Half movement, +2 Defense this turn

---

## Initiative & Combat Flow

### Initiative System
**2d10 + Reaction Attribute + Agility Rating**

### Combat Round Structure
1. **Initiative Phase**: Roll once per encounter, act in order
2. **Declare Actions**: Players announce intended actions
3. **Action Resolution**: Resolve in initiative order
4. **Status Updates**: Apply ongoing effects, advance timers
5. **Equipment Check**: Check for degradation if applicable

### Action Economy per Turn
- **1 Standard Action**: Attack, complex skill use, electronic warfare
- **1 Move Action**: Movement, power reallocation, simple skill use  
- **Any Quick Actions**: Reload, activate equipment, short communication
- **Any Free Actions**: Drop items, speak, toggle simple controls
- **Reactions**: Respond to enemy actions (limited by enhancement level)

---

## Quick Reference

### Complexity Tracking Checklist
**Per Character Maximum**:
- ✅ **1 Enhancement Mode** (Standard/Boosted/Overcharged)
- ✅ **1 Power Allocation** (3-5 points distributed)
- ✅ **3 Equipment States** (Functional/Damaged/Destroyed)
- ✅ **3 Status Effects Maximum** (1 Physical, 1 Mental, 1 System)
- ✅ **1 Condition Track** (Vehicle+ scales only)

### GM Quick Setup
1. **Set Situation Modifier** (-3 to +3 based on circumstances)
2. **Track Initiative Order** (rolled once per encounter)
3. **Note Enhancement Modes** (what are PCs using?)
4. **Monitor Status Effects** (3 categories maximum)
5. **Check Equipment Degradation** (on natural 2s, overcharge, targeting)

### Attack Resolution Steps
1. **Roll Attack**: 2d10 + Attribute + Skill + Equipment + Situation vs Defense TN
2. **Apply Damage**: To Hit Points (Personal) or Condition Track (Vehicle+)
3. **Check for Status**: Critical hits, special weapons, cross-scale effects
4. **Equipment Check**: Natural 2 = potential degradation

### Status Effect Quick Reference
| Category | Effect | Duration | Removal |
|----------|--------|----------|---------|
| **Physical Impaired** | -2 to movement/manual tasks | Short-Extended | Rest/medical |
| **Mental Impaired** | -2 to perception/decisions | Short | Remove stressor |
| **System Impaired** | -2 to electronic functions | Short-Extended | Repair/reboot |
| **Physical Disabled** | Cannot move | Extended | Medical/repair |
| **Mental Disabled** | Cannot think clearly | Short | Remove cause |
| **System Disabled** | Systems offline | Extended | Technical repair |
| **Critical Burning** | 1 damage/round | Until action | Extinguish |
| **Critical Venting** | Rapid resource loss | Until repair | Emergency patch |
| **Critical Cascade** | -1/round cumulative | Until stopped | Technical intervention |

### Technology Enhancement Quick Reference
| Mode | Effect | Cost | Era Requirement |
|------|--------|------|-----------------|
| **Standard** | Normal operation | None | Any |
| **Boosted** | +2 to all actions | Faster degradation | Modern+ |
| **Overcharged** | +4 to specific, -2 to others | Degradation risk | Modern+ |

| Enhancement | Effect | Resource Cost |
|-------------|--------|---------------|
| **Reflex Boosters** | 1 Standard → Move | Equipment degradation |
| **Neural Acceleration** | 2 Standard actions, 2nd at -2 | Equipment degradation |
| **Quantum Synapses** | 1 action → Reaction | 1/scene, major degradation |

---

## Complexity Budget Achievement

**Target**: 5-6/10 Complexity ✅

**Achieved Through**:
- ✅ **Single Situation Modifier** instead of multiple stacking bonuses
- ✅ **3-State Systems** maximum (Enhancement/Equipment/Status)
- ✅ **Binary Choices** over graduated scales
- ✅ **Meaningful Tactical Options** (4 core actions) without overwhelming variety
- ✅ **Preserved Innovation**: Action Acceleration, Cross-Scale, Damage Types
- ✅ **Streamlined Tracking**: Maximum 5 items per character to track

**Maintained Sci-Fi "Crunch"**:
- ✅ **Technology Feels Advanced**: Enhancement modes, system allocation
- ✅ **Tactical Depth**: Resource management, positioning, timing
- ✅ **Meaningful Choices**: Power allocation, enhancement modes, action economy
- ✅ **Equipment Matters**: Clear upgrade paths, degradation consequences

**Result**: Sophisticated tactical combat that plays smoothly without overwhelming GMs or players, while maintaining the high-tech feel essential to science fiction gaming.