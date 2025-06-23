# Cosmos Engine RPG - Technical System Guide v2.0

## Table of Contents
1. [Core Resolution Mechanic](#core-resolution-mechanic)
2. [Probability Mathematics](#probability-mathematics)
3. [Scale System](#scale-system)
4. [Technology Era System](#technology-era-system)
5. [Streamlined Defense Mechanics](#streamlined-defense-mechanics)
6. [Condition Tracking System](#condition-tracking-system)
7. [Initiative & Combat Flow](#initiative--combat-flow)
8. [Power Management](#power-management)
9. [Essential Subsystems](#essential-subsystems)
10. [GM Quick Reference](#gm-quick-reference)

---

## Core Resolution Mechanic

### Basic Formula
**2d10 + Attribute + Skill + Equipment vs Target Number**

### Core Components
- **Dice Roll**: 2d10 (2-20, bell curve distribution)
- **Attributes**: 0-5 (Human average: 2-3)
- **Skills**: 0-5 (Professional level: 3-4)
- **Equipment**: 0-5 (limited by Technology Era)
- **Situational Modifiers**: -3 to +3 (environmental, tactical)

### Modifier Caps (New!)
- **Maximum Total Bonus**: +8 (prevents auto-success)
- **Maximum Total Penalty**: -6 (prevents impossible tasks)
- **Hard Limits**: Excess modifiers are ignored

### Target Numbers & Success Rates
| Target Number | Difficulty | Success Rate* |
|---------------|------------|---------------|
| 8 | Easy | 85% |
| 11 | Moderate | 65% |
| 14 | Hard | 35% |
| 17 | Extreme | 15% |
| 20 | Legendary | 5% |

*Based on 2d10 + 6 average total bonus*

### Critical Results
- **Natural 20**: Always succeeds + bonus effect (ignores penalties)
- **Natural 2**: Always fails + complication (ignores bonuses)
- **Success Degrees**:
  - **Critical Success**: Beat TN by 8+ or natural 20
  - **Success**: Meet or beat TN
  - **Failure**: Miss TN by 1-7
  - **Critical Failure**: Miss TN by 8+ or natural 2

---

## Probability Mathematics

### 2d10 Distribution Properties
- **Mean**: 11.0
- **Standard Deviation**: 2.87
- **Range**: 2-20
- **Bell Curve**: 68% of rolls fall between 8-14
- **Extreme Results** (2-3, 18-20): 9% total

### Modifier Impact Table
| Total Modifier | Success Rate vs TN 11 |
|----------------|---------------------|
| +3 | 85% |
| +2 | 75% |
| +1 | 65% |
| 0 | 55% |
| -1 | 45% |
| -2 | 35% |
| -3 | 25% |

### Design Goals Achieved
- ✅ Predictable 60-70% success at moderate difficulty
- ✅ Bell curve reduces extreme variance
- ✅ Intuitive +/-10% per modifier point
- ✅ Extreme results occur <10% of time

---

## Scale System

### Scale Tiers
| Scale | Examples | Health System | Damage Range | Engagement Range |
|-------|----------|---------------|--------------|------------------|
| **1: Personal** | Infantry, Power Armor | Hit Points (10-50) | 1-18 damage | Close-Medium |
| **2: Vehicle** | Tanks, Gunships | Condition Tracks | Abstract damage | Medium-Long |
| **3: Starship** | Fighters, Corvettes | Condition Tracks | Abstract damage | Long-Extreme |
| **4: Capital** | Battleships, Stations | Condition Tracks | Abstract damage | Strategic |

### Damage Scaling
| Weapon Class | Scale 1 (Personal) | Scale 2+ (Vehicles & Above) |
|-------------|-------------------|----------------------------|
| **Light** | 1d6 HP damage | Light Condition damage |
| **Medium** | 2d6 HP damage | Moderate Condition damage |
| **Heavy** | 3d6 HP damage | Heavy Condition damage |
| **Extreme** | 4d6 HP damage | Extreme Condition damage |

### Cross-Scale Modifiers
- **+1 Scale advantage**: +2 to hit (larger targets)
- **-1 Scale disadvantage**: -2 to hit (smaller targets)
- **±2+ Scale difference**: Generally cannot engage effectively

### Resolution Consistency
**All scales use identical mechanics:**
- Same 2d10 + attribute + skill + equipment vs TN
- Same target numbers (8-20)
- Same success rates and probability curves
- Only damage representation changes

---

## Technology Era System (Simplified!)

### Five Technology Eras
| Era | Max Equipment Bonus | Representative Technologies |
|-----|-------------------|---------------------------|
| **Primitive** | +1 | Stone tools to gunpowder, basic metallurgy |
| **Industrial** | +2 | Steam power to modern electronics, guided weapons |
| **Advanced** | +3 | Near future to biotechnology, AI assistance |
| **Exotic** | +4 | Far future to reality manipulation, exotic matter |
| **Cosmic** | +5 | Physics-breaking technology, universal control |

### Implementation Rules
1. **Equipment Bonus Cap**: Cannot exceed Era maximum
2. **Skill Unlimited**: Character abilities always matter
3. **Upgrade Path**: Higher Era equipment provides better bonuses
4. **Availability**: Equipment above campaign Era is rare/unique
5. **Mixed Eras**: Lower-era characters can use higher-era equipment if available

### Mixed-Era Combat Example
**Colonial Marine (Industrial Era)** vs **Future Soldier (Advanced Era)**
- Colonial: 2d10 + 5 (skill) + 2 (rifle) = +7 total
- Future: 2d10 + 3 (skill) + 3 (plasma rifle) = +6 total
- **Result**: Nearly equal hit chances, dramatically different damage

---

## Streamlined Defense Mechanics (Revised!)

### Three Defense Categories
| Category | Type | Examples | Bonus Range |
|----------|------|----------|-------------|
| **Passive** | Always Active | Hull armor, reinforced structure | +0 to +3 |
| **Active** | Requires Power | Shields, evasive maneuvers | +0 to +3 |
| **Electronic** | Tech-Based | ECM, stealth, AI prediction | +0 to +3 |

### Defense Calculation
**Target Number = Base TN + Passive + Active + Electronic**
- **Base TN**: 8 (Personal), 10 (Vehicle), 12 (Starship), 14 (Capital)
- **Maximum Total Defense**: +6 (down from +8 for simpler math)
- **Final TN Range**: 8-20 (keeps within system bounds)

### Defense Examples
**Medium Starfighter**:
- Base TN: 12
- Reinforced Hull: +2 Passive
- Energy Shields: +2 Active  
- ECM Suite: +1 Electronic
- **Total Defense TN**: 17

**Personal Combat**:
- Base TN: 8
- Combat Armor: +2 Passive
- Dodge Training: +1 Active
- None: +0 Electronic
- **Total Defense TN**: 11

---

## Condition Tracking System (New!)

### Personal Scale: Hit Point System
Traditional HP tracking for individual characters and personal equipment where damage amounts are small and manageable (1-50 HP range).

### All Other Scales: Universal Condition Track System
Abstract health system for vehicles, starships, capital vessels, objects, cover, and any equipment above personal scale. This eliminates unwieldy numbers while providing consistent rules.

### Universal Condition Track Structure
```
□□□□□ Operational (100-81% effectiveness)
□□□□□ Damaged (80-61% effectiveness)  
□□□□□ Impaired (60-41% effectiveness)
□□□□□ Critical (40-21% effectiveness)
□□□□□ Failing (20-1% effectiveness)
```

### Damage Application
| Damage Type | Condition Levels | Examples |
|-------------|------------------|----------|
| **Light** | 1 level | Small arms vs vehicle, fighter vs cruiser |
| **Moderate** | 2 levels | Anti-tank vs tank, torpedo vs destroyer |
| **Heavy** | 3 levels | Artillery vs bunker, capital laser vs frigate |
| **Extreme** | 4 levels | Nuclear vs city, superlaser vs battleship |

### Universal Applications

#### Vehicles & Equipment
- **Ground Vehicles**: Tanks, APCs, construction equipment
- **Aircraft**: Fighters, transports, gunships  
- **Spacecraft**: All vessels from shuttles to dreadnoughts
- **Jury-Rigged Equipment**: Personal shields from vehicle components
- **Installations**: Bunkers, power plants, orbital platforms

#### Objects & Structures
- **Cover**: Walls, barricades, vehicles used as cover
- **Doors**: From residential to vault doors to airlock systems
- **Infrastructure**: Bridges, towers, communication arrays
- **Environmental**: Force fields, energy barriers, protective domes

#### Condition Track Examples by Scale
**Light Vehicle (APC)**:
- Operational: Full speed, all systems functional
- Damaged: Reduced speed, minor systems offline
- Impaired: Significant speed loss, weapons malfunction
- Critical: Barely mobile, life support failing
- Failing: Immobilized, catastrophic system failures

**Reinforced Door**:
- Operational: Secure, electronic locks functional
- Damaged: Visible damage, lock systems intermittent
- Impaired: Structural integrity compromised
- Critical: Major breaches, about to fail
- Failing: Hanging on hinges, easily bypassed

### Condition Effects
- **Operational**: No penalties, full functionality
- **Damaged**: -1 to all actions, minor system malfunctions
- **Impaired**: -2 to all actions, significant systems offline
- **Critical**: -3 to all actions, major system failures
- **Failing**: -4 to all actions, barely functional
- **Destroyed**: Eliminated, completely non-functional

### Advanced Applications

#### Jury-Rigged Equipment
**Personal Vehicle Shield Generator**:
When a character salvages shield technology from a destroyed vehicle, it gains its own condition track:
```
□□□□□ Full Shield Strength (+3 defense)
□□□□□ Reduced Shield (+2 defense)
□□□□□ Fluctuating Shield (+1 defense) 
□□□□□ Failing Shield (+0 defense, 50% chance of working)
□□□□□ Burned Out (non-functional)
```

#### Tactical Cover
**Destroyed Vehicle as Cover**:
A wrecked tank provides different protection based on its condition:
- **Operational**: Not cover (it drives away!)
- **Damaged**: +2 cover bonus, stable position
- **Impaired**: +2 cover bonus, may shift under fire
- **Critical**: +1 cover bonus, unstable structure  
- **Failing**: +0 cover bonus, debris field
- **Destroyed**: No cover bonus, scattered wreckage

#### Environmental Obstacles
**Reinforced Blast Door**:
- **Operational**: TN 20 to breach, requires extreme measures
- **Damaged**: TN 17 to breach, some structural damage visible
- **Impaired**: TN 14 to breach, significant weakening
- **Critical**: TN 11 to breach, barely holding together
- **Failing**: TN 8 to breach, nearly destroyed
- **Destroyed**: Open passage, debris scattered

### Universal Benefits
- **No Large Numbers**: "Moderate damage" vs "347 damage against 1,250 HP"
- **Clear Status**: Visual track shows condition at a glance
- **Meaningful Degradation**: Performance degrades as damage accumulates
- **Quick Resolution**: Mark boxes instead of calculating large numbers
- **Narrative Support**: Condition names suggest specific malfunctions
- **Tactical Flexibility**: Same rules for vehicles, cover, objects, equipment
- **Scalable Coverage**: Works for anything from a door to a space station

---

## Initiative & Combat Flow (New!)

### Initiative System
**2d10 + Reaction Attribute + Agility Rating**

#### Agility Ratings by Scale
- **Personal**: +0 to +3 (based on training/augmentation)
- **Vehicle**: +0 to +3 (based on engine/chassis design)
- **Starship**: +0 to +3 (based on thruster arrays/design)
- **Capital**: +0 to +1 (massive vessels are inherently slow)

### Combat Round Structure
1. **Initiative Phase**: Roll initiative, act in descending order
2. **Action Phase**: Each participant takes their turn
3. **Resolution Phase**: Apply ongoing effects, advance timers
4. **Repeat**: Start new round

### Action Economy
**Each turn includes:**
- **1 Move Action**: Movement, simple interactions
- **1 Standard Action**: Attack, complex skill use, power reallocation
- **Any number of Free Actions**: Speaking, simple gestures, maintaining equipment

### Power Allocation Timing
- **Personal Scale**: Free action (can change each round)
- **Vehicle Scale**: Move action (requires concentration)
- **Starship Scale**: Standard action (complex system rebalancing)
- **Capital Scale**: Full round action (massive power grid management)

---

## Power Management

### Universal Power Settings
| Setting | Defense Modifier | Damage Modifier | Tactical Use |
|---------|------------------|-----------------|--------------|
| **Max Defense (+3)** | +3 Defense | -3 Damage | Survival mode |
| **Defense (+2)** | +2 Defense | -2 Damage | Cautious advance |
| **Defense (+1)** | +1 Defense | -1 Damage | Conservative |
| **Balanced (0)** | No modifier | No modifier | Standard operations |
| **Offense (+1)** | -1 Defense | +1 Damage | Aggressive assault |
| **Offense (+2)** | -2 Defense | +2 Damage | High-risk offense |
| **Max Offense (+3)** | -3 Defense | +3 Damage | Glass cannon |

### Scale-Specific Implementation
- **Personal**: Energy allocation in power armor/cybernetics
- **Vehicle**: Engine power distribution between movement/weapons/defense
- **Starship**: Reactor output management across ship systems
- **Capital**: Massive power grid optimization

### Tactical Considerations
- **Risk vs Reward**: Higher offense = easier to destroy
- **Situational Adaptation**: Switch based on tactical needs
- **Resource Management**: Some settings may be limited by fuel/power reserves

---

## Essential Subsystems (New!)

### Hacking & Cybersecurity
**Core Mechanic**: 2d10 + Hacking Skill + Software Rating vs Firewall TN

#### Hacking Process
1. **Reconnaissance**: Gather information about target systems
2. **Penetration**: Break through outer defenses
3. **Navigation**: Move through system architecture
4. **Execution**: Perform desired action
5. **Exfiltration**: Escape without detection

#### Cybersecurity Ratings
- **Firewall TN**: 8 (Basic), 11 (Standard), 14 (Military), 17 (Corporate), 20 (Classified)
- **Software Bonuses**: +1 (Basic), +2 (Professional), +3 (Military), +4 (Exotic), +5 (Cosmic)
- **Countermeasures**: Active monitoring, trace programs, ICE systems

### Social Interaction
**Core Mechanic**: 2d10 + Social Skill + Reputation Modifier vs Resistance TN

#### Social Skills
- **Diplomacy**: Negotiation, peaceful resolution
- **Intimidation**: Threats, coercion
- **Deception**: Lies, misdirection
- **Leadership**: Inspiring, commanding

#### Reputation System
- **Unknown**: +0 (no reputation modifier)
- **Recognized**: +1 (locally known)
- **Renowned**: +2 (sector-wide fame)
- **Legendary**: +3 (galactic recognition)
- **Infamous**: -1 to -3 (negative reputation)

### Environmental Hazards
**Core Mechanic**: 2d10 + Relevant Skill + Equipment vs Hazard TN

#### Common Hazards
- **Radiation**: TN 11-17, cumulative exposure damage
- **Vacuum**: TN 14, immediate pressure loss consequences
- **Extreme Gravity**: TN 8-20, based on gravity multiple
- **Hostile Atmosphere**: TN 11-14, toxicity and corrosiveness

#### Protective Equipment
Environmental suits and vehicles provide bonuses against specific hazard types.

### Extended Actions
**Core Mechanic**: Multiple 2d10 rolls over time to accumulate "progress points"

#### Progress Point System
- **Simple Tasks**: 5-10 progress points required
- **Complex Tasks**: 15-25 progress points required
- **Major Projects**: 50+ progress points required
- **Success**: Each successful roll adds 1-3 progress points
- **Failure**: No progress, possible setback
- **Critical Failure**: Lose progress points

#### Time Scales
- **Minutes**: Detailed repair, hacking, first aid
- **Hours**: Research, construction, complex repairs
- **Days**: Major construction, extensive research
- **Weeks**: Ship construction, base building

---

## GM Quick Reference

### Target Number Quick Guide
- **Don't Roll**: Routine tasks (unless stress/time pressure)
- **TN 8**: Easy tasks, favorable conditions
- **TN 11**: Moderate difficulty, typical challenge
- **TN 14**: Hard tasks, challenging conditions
- **TN 17**: Extreme difficulty, near-impossible
- **TN 20**: Legendary feats, require exceptional skill

### Common Modifier Guidelines
| Situation | Modifier |
|-----------|----------|
| **Superior conditions/equipment** | +1 to +2 |
| **Poor conditions/equipment** | -1 to -2 |
| **Extreme conditions** | -3 |
| **Rushed action** | -1 to -2 |
| **Extra time/preparation** | +1 to +2 |
| **Teamwork/assistance** | +1 to +2 |

### Scale Combat Quick Setup
1. **Determine Primary Scale**: Match participants
2. **Set Base TNs**: 8/10/12/14 for scales 1/2/3/4
3. **Apply Defense Modifiers**: Passive + Active + Electronic (max +6)
4. **Cross-Scale Adjustments**: ±2 per scale difference
5. **Begin Combat**: Initiative → Actions → Resolution

### Condition Track Management
- **Mark Damage**: Fill boxes from left to right
- **Apply Penalties**: Current condition level = penalty to all actions
- **System Failures**: GM describes specific malfunctions based on condition
- **Repair**: Extended actions to restore condition levels
- **Objects**: Use same system for doors, cover, installations
- **Jury-Rigged Gear**: Salvaged vehicle equipment gets its own condition track

### Object & Cover Targeting
- **Assign Base TN**: 8 (Fragile), 11 (Sturdy), 14 (Reinforced), 17 (Hardened)
- **Apply Scale Modifiers**: Larger objects easier to hit
- **Track Condition**: Use standard 5-box condition track
- **Determine Effects**: Describe how damage affects function/protection

### Technology Era Adjudication
1. **Identify Equipment Era**: Determine maximum possible bonus
2. **Apply Caps**: Equipment bonus cannot exceed Era limit
3. **Consider Availability**: Higher Era equipment is rare
4. **Maintenance Requirements**: Advanced tech may need specialists

### Balancing Encounters
- **Same Scale/Era**: Balanced baseline
- **Scale Advantage**: Offset with numbers or positioning
- **Era Advantage**: Offset with skill/tactical disadvantage
- **Mixed Groups**: Use specialist weapons and coordinated tactics

---

## Design Philosophy Summary

**Cosmos Engine** prioritizes:

1. **Mathematical Consistency**: 2d10 bell curve across all resolution
2. **Scalable Complexity**: Simple core, optional advanced systems
3. **Narrative Support**: Framework serves story over pure simulation
4. **Usability Focus**: Reduce bookkeeping without sacrificing depth
5. **Future Flexibility**: Accommodates any sci-fi setting or technology level

The system provides stable, predictable gameplay mechanics while maintaining tactical depth and the vast scope needed for science fiction adventures—from personal conflicts to galactic warfare.

---

## Quick Start Summary

**Core Resolution**: 2d10 + Skill + Equipment vs TN (8-20)
**Modifier Caps**: +8 max bonus, -6 max penalty
**Defense**: 3 categories (Passive/Active/Electronic), +6 max total
**Scales**: Personal (HP) → Vehicle (HP) → Starship (Conditions) → Capital (Conditions)
**Technology**: 5 Eras limiting equipment bonuses (+1 to +5)
**Initiative**: 2d10 + Reaction + Agility
**Power**: Reallocate between offense and defense as action economy allows