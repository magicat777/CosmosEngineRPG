# Cosmos Engine Combat Mechanics
## Technical Design Guide v1.0

---

## Table of Contents

1. [Core Combat Foundation](#core-combat-foundation)
2. [Movement & Positioning Framework](#movement--positioning-framework)
3. [Perception & Line-of-Sight System](#perception--line-of-sight-system)
4. [Weapon Systems Architecture](#weapon-systems-architecture)
5. [Weapon Modification Framework](#weapon-modification-framework)
6. [Damage Classification System](#damage-classification-system)
7. [Status Effects & Conditions System](#status-effects--conditions-system)
8. [Action Acceleration Framework](#action-acceleration-framework)
9. [Advanced Combat Actions](#advanced-combat-actions)
10. [Cognitive Warfare & Enhancement Systems](#cognitive-warfare--enhancement-systems)
11. [Equipment Degradation & Damage](#equipment-degradation--damage)
12. [System Integration & Balance](#system-integration--balance)
13. [Quick Reference Tables](#quick-reference-tables)

---

## Core Combat Foundation

### Universal Resolution Mechanic
**2d10 + Attribute + Skill + Equipment + Situational Modifier vs Target Number**

All combat actions use this core resolution across four operational scales with unified mechanics but scale-appropriate damage systems.

### Scale-Appropriate Damage Systems

**PERSONAL SCALE**: Hit Points + Conditions
- **Primary Damage**: Attacks reduce Hit Points
- **Secondary Effects**: Conditions modify future actions (-1 to -4 penalties)
- **Unconsciousness/Death**: Occurs when Hit Points reach 0

**VEHICLE+ SCALES**: Condition Tracks + Conditions
- **Primary Damage**: Attacks advance condition track (Functional → Damaged → Destroyed)
- **Secondary Effects**: Conditions modify system performance
- **Destruction**: Occurs when condition track reaches final state

### Damage and Conditions Integration

**Conditions are modifiers, not damage replacements**:
- **Attacks deal damage** to appropriate scale (Hit Points or Condition Track)
- **Conditions provide tactical penalties** to future actions
- **Both systems work together** for rich combat resolution

**Example Personal Scale Attack**:
1. **Attack Roll**: 2d10 + modifiers vs Target Number
2. **Damage Roll**: Reduce target's Hit Points
3. **Condition Check**: Weapon may inflict condition (Hindered, Distracted, etc.)
4. **Result**: Target has reduced HP AND potential action penalties

### Modifier Consolidation System

**CORE ATTACK FORMULA** (streamlined):
```
2d10 + Attribute + Skill + Equipment + Situational Modifier vs TN
```

**Mathematical Range**:
- **Maximum**: 20 + 5 + 5 + 5 + 5 = 40
- **Minimum**: 2 + 1 + 1 + 1 + (-5) = 0
- **Practical Range**: Most characters operate 10-30
- **Total Swing**: 40 points

**Situational Modifier Scaling** (-5 to +5):

| Situation | Modifier | Description |
|-----------|----------|-------------|
| **Perfect Storm** | +5 | Everything working for you (point-blank, no cover, target immobilized, perfect conditions) |
| **Ideal Conditions** | +3 | Close range, no cover, clear conditions |
| **Good Conditions** | +2 | Short range, light obstacles |
| **Standard Conditions** | +1 | Medium range, some interference |
| **Neutral Conditions** | +0 | Long range, moderate obstacles |
| **Poor Conditions** | -1 | Extreme range, heavy cover |
| **Bad Conditions** | -2 | Multiple obstacles, poor conditions |
| **Terrible Conditions** | -3 | Nearly everything against you |
| **Nightmare Scenario** | -5 | Perfect storm of bad conditions (extreme range, total concealment, systems failing, under fire) |

### Critical Hit System

**NATURAL CRITICAL** (Rolling exactly 20 on 2d10):
- **Probability**: 1% chance (only 10+10)
- **Effect**: Standard critical hit
- **Damage**: Roll damage dice again, add to original damage

**PERFECT EXECUTION** (Total result of exactly 40):
- **Probability**: ~0.01% (requires natural 20 + maximum modifiers)
- **Effect**: Legendary critical hit
- **Damage**: Roll damage dice again, add to original + choose bonus effect

**Perfect Execution Bonus Effects** (player chooses one):

*Combat Effects*:
- **Devastating Strike**: Target takes maximum possible damage from second roll
- **System Cascade**: Target gains additional status effect of your choice
- **Precision Shot**: Ignore all armor/defensive systems
- **Collateral Effect**: Damage spreads to adjacent target/system

*Tactical Effects*:
- **Combat Advantage**: Gain +2 to next attack this scene
- **Opportunity**: Gain extra Free Action this turn
- **Inspiration**: Grant ally +2 to their next action
- **Momentum**: Move one additional range band immediately

### Operational Scales
- **Personal Scale**: Individual characters, Hit Points for damage
- **Vehicle Scale**: Small craft, tanks, Condition Tracks for damage  
- **Starship Scale**: Large vessels, Condition Tracks for damage
- **Capital Scale**: Massive ships/installations, Condition Tracks for damage

### Combat Foundation Elements
- **Initiative**: 2d10 + Reaction + Agility Rating
- **Action Economy**: Move + Standard + Free actions per turn
- **Power Management**: Offense/Defense allocation with different timing by scale
- **Cross-Scale Combat**: ±2 hit modifier per scale difference
- **Technology Era Equipment**: Caps from +1 (Primitive) to +5 (Cosmic)
- **Defense Categories**: Passive/Active/Electronic with +6 maximum total

---

## Movement & Positioning Framework

### Universal Range Band System

Range bands scale by operational level, maintaining tactical relationships across all scales:

| Scale | Close | Short | Medium | Long | Extreme |
|-------|-------|-------|--------|------|---------|
| **Personal** | 0-2m | 3-10m | 11-50m | 51-250m | 251m+ |
| **Vehicle** | 0-50m | 51-500m | 0.5-5km | 5-25km | 25km+ |
| **Starship** | 0-1km | 1-10km | 10-100km | 100-1000km | 1000km+ |
| **Capital** | 0-10km | 10-100km | 100-1000km | 1000-10000km | 10000km+ |

### Movement Actions & Mechanics

**Movement Allowance**: Base Move + Agility Rating in range bands per Move Action
- **Personal Scale**: 1 + Agility (typically 2-4 bands)
- **Vehicle+ Scales**: Depends on propulsion system, modified by pilot skill

**Movement Types**:
- **Tactical Move** (Free Action): 1 range band, no penalties
- **Combat Move** (Move Action): Full movement allowance
- **Sprint/Burn** (Standard Action): Double movement, -2 to all other actions this turn
- **Evasive Movement** (Move Action): Half movement, +2 Defense this turn

### Range Modifiers
Applied to attack rolls based on engagement distance:

- **Close**: +2 attack (enables melee/close-quarters weapons)
- **Short**: +1 attack (optimal for most personal weapons)
- **Medium**: No modifier (standard engagement range)
- **Long**: -1 attack (favors long-range weapons)
- **Extreme**: -2 attack (requires specialized equipment)

### Cover & Concealment System
- **Light Cover**: +1 Defense (corner of wall, debris)
- **Heavy Cover**: +2 Defense (behind solid wall, vehicle hull)
- **Total Cover**: Cannot be targeted directly
- **Concealment**: -1 to enemy attack rolls (smoke, darkness, sensor jamming)
- **Elevation Advantage**: +1 attack when firing from higher position

---

## Perception & Line-of-Sight System

### Universal Targeting Process

Every attack requires establishing **Line-of-Sight (LOS)** through this sequence:

1. **Range Check**: Is target within weapon range?
2. **LOS Check**: Can you draw an unobstructed line to target?
3. **Perception Check**: Can you detect/identify the target?
4. **Cover Assessment**: What protection does the target have?
5. **Final Attack**: Apply all modifiers and resolve

### Core Mechanic Integration

**Perception Check**: 2d10 + Perception Attribute + Awareness Skill + Equipment vs Detection Difficulty

**Base Detection Difficulties**:
- **Obvious Target**: 10 (standing in the open)
- **Partially Hidden**: 12 (using cover/concealment)
- **Well Hidden**: 15 (multiple concealment layers)
- **Nearly Invisible**: 18 (active camouflage/cloaking)
- **Impossible**: 21+ (perfect invisibility/phase shifted)

### Physical Cover Categories

**LIGHT COVER** (+1 Defense, blocks 25% of target)
- *Personal*: Corner of building, vehicle door, tree trunk
- *Vehicle+*: Asteroid fragment, debris field, structural element
- **LOS Effect**: Can target normally, +1 Defense to target

**HEAVY COVER** (+2 Defense, blocks 50% of target)
- *Personal*: Behind wall with window, vehicle hull, large boulder
- *Vehicle+*: Large asteroid, space station module, planet limb
- **LOS Effect**: Can target normally, +2 Defense to target

**SUPERIOR COVER** (+3 Defense, blocks 75% of target)
- *Personal*: Firing port, murder hole, narrow gap
- *Vehicle+*: Dense asteroid cluster, city ruins, orbital debris
- **LOS Effect**: Requires Perception Check (Difficulty 12) to target, +3 Defense

**TOTAL COVER** (Cannot target, blocks 100% of target)
- *Personal*: Behind solid wall, inside building, underground
- *Vehicle+*: Behind planet, inside space station, dense nebula core
- **LOS Effect**: No LOS possible, cannot target

### Partial Cover Situations

**EXPOSED POSITIONS** (specific body parts/components visible):
- **Head/Sensors Only**: +4 Defense, Perception Check Difficulty 15
- **Weapon Ports Only**: +3 Defense, can only target weapons
- **Extremities Only**: +2 Defense, limited damage potential

### Concealment Types & Effects

**LIGHT CONCEALMENT** (-1 to enemy attack rolls)
- *Personal*: Dim lighting, rain, light smoke
- *Vehicle+*: Sensor static, electromagnetic interference
- **Perception**: +2 Difficulty to initial detection

**HEAVY CONCEALMENT** (-2 to enemy attack rolls)
- *Personal*: Heavy smoke, darkness, thick fog
- *Vehicle+*: Dense dust cloud, sensor jamming, solar interference
- **Perception**: +4 Difficulty to initial detection

**TOTAL CONCEALMENT** (Cannot target visually)
- *Personal*: Complete darkness, opaque smoke screen
- *Vehicle+*: Dense nebula, total sensor blackout
- **Perception**: Must use alternative detection methods

### Stealth & Cloaking Systems

**PERSONAL STEALTH**:
- **Camouflage**: +4 Difficulty when stationary, +2 when moving slowly
- **Optical Camo**: +6 Difficulty, requires power, -2 when moving
- **Phase Cloak**: +8 Difficulty, exotic technology, massive power drain

**VEHICLE+ STEALTH**:
- **Stealth Coating**: +2 Difficulty to sensor detection
- **Active Camo**: +4 Difficulty, power drain, reduced when maneuvering
- **Cloaking Device**: +6 Difficulty, cannot fire while cloaked
- **Phase Shield**: +8 Difficulty, exotic tech, cannot interact while phased

### Stealth Compromise Events

**Automatic Detection** occurs when:
- **Attacking**: Reveals position immediately (lose stealth for 1 round)
- **High Energy**: Using powerful systems/weapons breaks stealth
- **Physical Contact**: Touching objects/targets reveals position
- **System Failure**: Critical failures expose stealth systems

### Cross-Scale Line-of-Sight

**SCALE-SPECIFIC LOS RULES**:

**Personal to Vehicle+**: Vehicle+ targets are Easy to Spot (Difficulty 8), Personal figures are Hard to Spot from Vehicle+ (Difficulty 15)

**Vehicle to Starship+**: Starship+ targets Automatic Detection at Short range, Vehicle-scale targets require Sensor Lock (Difficulty 12)

**Cross-Scale Stealth**: Stealth bonuses reduced by 2 per scale size difference

### Detection Range Scaling

**Maximum Detection Range** by scale and sensor quality:

| Scale | Basic Sensors | Advanced Sensors | Elite Sensors |
|-------|---------------|------------------|---------------|
| Personal | Long Range | Extreme Range | Beyond Extreme |
| Vehicle | Extreme Range | 2x Extreme | 5x Extreme |
| Starship | 2x Extreme | 10x Extreme | System-wide |
| Capital | System-wide | Multi-system | Galactic |

### Environmental LOS Effects

**SPACE ENVIRONMENTS**:
- **

### Weapon Categories by Scale

**Personal Scale**: Pistols, Rifles, Heavy Weapons, Melee
**Vehicle Scale**: Autocannons, Missiles, Energy Weapons
**Starship Scale**: Particle Beams, Torpedo Systems, Point Defense
**Capital Scale**: Mass Drivers, Planet Crackers, System-wide Weapons

### Weapon Quality System

Each weapon can have 1-2 **Weapon Qualities** providing tactical advantages:

**Accuracy Qualities**:
- **Accurate**: +1 to hit
- **Precise**: Reroll 1s on attack dice
- **Guided**: +2 vs stationary targets
- **Lock-On**: +1 cumulative per round targeting same enemy (max +3)

**Damage Qualities**:
- **Armor Piercing**: Ignore 2 points of armor/hull
- **Devastating**: +2 damage on critical hits
- **Penetrating**: Damage carries through to targets behind
- **Incendiary**: Ongoing fire damage (1 per round for 3 rounds)

**Tactical Qualities**:
- **Area Effect**: Affects adjacent range band
- **Suppressing**: Forces morale checks, denies actions
- **Disabling**: Non-lethal damage, systems shutdowns
- **Tracking**: Hits reveal target position for allies

**Utility Qualities**:
- **Reliable**: Reroll natural 1s on damage
- **Quick Deploy**: Ready as Free Action
- **Modular**: Field-swappable configurations
- **Self-Targeting**: Can fire without direct operator control

### Ammunition & Power Management

**Resource Tracking** scales by Technology Era:
- **Primitive/Modern**: Ammunition counts matter
- **Advanced+**: Power cells with larger capacities
- **Cosmic**: Effectively unlimited ammunition

**Power Allocation** (Vehicle+ scales):
- Standard weapons: No power cost
- Heavy weapons: 1 Power Point per shot
- Capital weapons: 2-3 Power Points per shot
- Emergency power boosts: +1 damage, costs extra Power Point

---

## Weapon Modification Framework

### Modification Categories & Stacking Rules

Modifications add to base Equipment Rating through different **Modification Slots**:

**Accuracy Modifications** (Stack up to +3):
- **Targeting Scope**: +1 accuracy, +1 range band effectiveness
- **Thermal/X-Ray Scope**: +1 accuracy, ignores Light Cover/Concealment
- **Smart Targeting**: +2 accuracy (Advanced+ Tech), requires power
- **Bipod/Stabilizer**: +1 accuracy when stationary/braced

**Damage Modifications** (Stack up to +3):
- **Explosive Rounds/Bolts**: +1 damage, Armor Piercing quality
- **Overcharged Power Cell**: +1 damage, double power consumption
- **Focused Beam Array**: +1 damage, -1 range band effectiveness
- **Armor-Piercing Core**: +2 vs armored targets, -1 vs unarmored

**Range Modifications**:
- **Extended Barrel/Focusing Chamber**: +1 range band optimal effectiveness
- **Range Amplifier**: +2 range bands, requires power (Advanced+ Tech)
- **Atmospheric Compensator**: Negates atmospheric penalties

**Special Effect Modifications**:
- **Suppressor/Signature Dampener**: Stealth quality, -2 to detect shooter
- **Multi-Spectrum Imaging**: See through smoke, darkness penalties
- **Penetrator Package**: Shots ignore Heavy Cover, treat as Light Cover
- **EMP Payload**: Electromagnetic damage type vs electronics

**Utility Modifications**:
- **Extended Magazine/Power Cell**: 2x ammunition/shots per reload
- **Quick-Change System**: Reload as Free Action instead of Move Action
- **Modular Design**: Swap 1 modification as Move Action in field

### Installation Limits & Balancing

**Modification Slots by Scale**:
- **Personal Weapons**: 4-6 modification slots
- **Vehicle Weapons**: 6-8 modification slots
- **Starship/Capital**: 8-10 modification slots

**Balancing Mechanisms**:
- **Accuracy Cap**: +3 from modifications
- **Damage Cap**: +3 from modifications
- **Power Requirements**: Advanced modifications drain power faster
- **Weight/Bulk**: Heavy modifications reduce movement or require mounting
- **Cost Scaling**: Each modification costs significantly more than the last

**Modification Conflicts**: Some modifications are mutually exclusive (suppressor vs explosive rounds, conflicting scope types, etc.)

---

## Damage Classification System

### Four Universal Damage Types

**KINETIC** - Physical Mass Weapons
- **Examples**: Bullets, missiles, railguns, mass drivers, kinetic bombardment
- **Strong vs**: Hull armor, physical barriers
- **Weak vs**: Energy shields, deflector fields
- **Special**: Reliable damage, good penetration, affected by gravity/atmosphere

**ENERGY** - Directed Energy Systems
- **Examples**: Lasers, particle beams, plasma rifles, fusion torches
- **Strong vs**: Electronic defenses, unarmored targets
- **Weak vs**: Reflective armor, energy absorption
- **Special**: No ammunition, instantaneous impact, can overload power systems

**ELECTROMAGNETIC** - Electronic Warfare
- **Examples**: Ion cannons, EMP grenades, magnetic pulse, system viruses
- **Strong vs**: Electronic systems, shields, cybernetics
- **Weak vs**: Hardened systems, purely mechanical targets
- **Special**: Disabling rather than destroying, bypasses physical armor

**EXOTIC** - Advanced Physics Weapons
- **Examples**: Quantum disruptors, singularity weapons, phase rifles, psionic attacks
- **Strong vs**: Everything (limited defense options)
- **Weak vs**: Exotic defenses, rare countermeasures
- **Special**: Ignores conventional defenses, expensive/rare, unpredictable effects

### Damage Type vs Defense Interaction Matrix

| Damage Type | Passive Defense | Active Defense | Electronic Defense |
|-------------|----------------|----------------|-------------------|
| **Kinetic** | **Full Effect** | Half Effect | No Effect |
| **Energy** | Half Effect | **Full Effect** | Full Effect |
| **Electromagnetic** | No Effect | Half Effect | **Full Effect** |
| **Exotic** | Half Effect | Half Effect | Half Effect |

**Effect Definitions**:
- **Full Effect**: Defense rating applies normally
- **Half Effect**: Defense rating divided by 2 (round down)
- **No Effect**: Defense provides no protection

### Technology Era Availability
- **Primitive Era**: Kinetic only
- **Modern Era**: Kinetic + basic Energy
- **Advanced Era**: All four types available
- **Stellar Era**: Enhanced versions of all types
- **Cosmic Era**: Exotic weapons become mainstream

---

## Status Effects & Conditions System

### Core Design Principle

**Conditions are tactical modifiers, not damage systems**:
- **Personal Scale**: Conditions modify actions while Hit Points track damage
- **Vehicle+ Scales**: Conditions modify performance while Condition Tracks track damage  
- **Conditions enhance tactical depth** without replacing core damage mechanics

### Universal Condition Framework

All conditions provide **action penalties** that stack with other modifiers in the situational modifier system:

**IMPAIRED CONDITIONS** (-1 to specific actions):
- Reduce effectiveness without preventing action
- Most common condition type
- Can often be overcome with effort or tactics

**DISABLED CONDITIONS** (-2 to -4 to specific actions):
- Severely hamper capability
- May prevent certain actions entirely
- Require active effort to overcome

**CRITICAL CONDITIONS** (Immediate danger/ongoing effects):
- Create time pressure and resource drain
- Often cause additional damage over time
- Demand immediate attention to resolve

### Condition Categories by Effect Type

**PHYSICAL IMPAIRMENT**:

**Hindered** (-1 to all physical actions)
- *Personal*: Injured limb, difficult terrain, heavy load
- *Vehicle+*: Maneuvering thrusters damaged, structural stress
- *Caused by*: Kinetic damage, environmental effects, equipment overload
- *Duration*: Short to Extended

**Immobilized** (Cannot move, -2 Defense)
- *Personal*: Legs injured, trapped, grappled, paralyzed
- *Vehicle+*: Engines offline, caught in tractor beam, structural lock
- *Caused by*: Targeted kinetic damage, restraint systems, system failure
- *Duration*: Extended until repaired/treated

**MENTAL IMPAIRMENT**:

**Distracted** (-1 to all mental actions)
- *Personal*: Stunned, pain, sensory overload, fear
- *Vehicle+*: Sensor interference, comm disruption, crew confusion
- *Caused by*: Electromagnetic damage, explosions, psychic attacks
- *Duration*: Short

**Blinded** (-4 to attack rolls, cannot target visually)
- *Personal*: Cannot see, relying on other senses
- *Vehicle+*: Visual sensors offline, navigation compromised
- *Caused by*: Bright flashes, sensor jamming, smoke/concealment
- *Duration*: Short to Extended

**SYSTEM IMPAIRMENT**:

**Drained** (-1 to energy-dependent systems)
- *Personal*: Exhausted, low power cells, cybernetic strain
- *Vehicle+*: Power grid strained, reduced weapon effectiveness
- *Caused by*: Energy drain attacks, overuse of enhanced systems
- *Duration*: Extended until recharged/rested

**Disrupted** (Electronic systems offline for 1-3 rounds)
- *Personal*: Cybernetics, smart weapons non-functional
- *Vehicle+*: Fire control, navigation, communications down
- *Caused by*: EMP weapons, system intrusion, electromagnetic interference
- *Duration*: Short, specific duration

**CRITICAL CONDITIONS**:

**Burning** (1 damage per round to Hit Points/Condition Track, spreads without action)
- *Personal*: On fire, requires action to extinguish or take ongoing damage
- *Vehicle+*: Hull breach fires, requires damage control team action
- *Caused by*: Incendiary weapons, energy weapon overloads, engine fires
- *Duration*: Until extinguished

**Venting** (Rapid resource loss, escalating danger)
- *Personal*: Suit breach losing air/blood, requires immediate medical attention
- *Vehicle+*: Hull breach losing atmosphere/fuel, requires emergency repair
- *Caused by*: Penetrating kinetic damage, critical structural failure
- *Duration*: Until repaired, worsens over time

**System Cascade** (-2 cumulative penalty per round to all systems)
- *Personal*: Cybernetic feedback loops, multiple system failures
- *Vehicle+*: Chain reaction failures across ship systems
- *Caused by*: Exotic damage, critical system overloads, cascading failures
- *Duration*: Until actively stopped with technical intervention

### Condition Sources and Application

**FROM WEAPON DAMAGE**:
- **Critical Hits**: Often inflict conditions based on damage type and weapon
- **Special Weapons**: Designed to cause specific conditions alongside damage
- **Cumulative Damage**: Multiple wounds may result in "Hindered" condition

**Examples**:
- **Kinetic Critical Hit**: 2d6+2 damage to Hit Points + "Hindered" condition
- **Stun Weapon**: 1d6 nonlethal damage + "Distracted" condition
- **Neural Disruptor**: 1d6 damage + "Drained" condition

**FROM ENVIRONMENTAL HAZARDS**:
- **Difficult Terrain**: "Hindered" movement without damage
- **Bright Lights/Noise**: "Distracted" condition from sensory overload
- **Power Draining Field**: "Drained" condition affecting energy systems

**FROM TACTICAL ACTIONS**:
- **Suppressive Fire**: Normal damage + "Distracted" condition from stress
- **Grappling**: No damage but "Hindered" or "Immobilized" condition
- **Electronic Warfare**: System targeting for "Disrupted" condition

### Condition Duration and Recovery

**DURATION CATEGORIES**:
- **Instantaneous**: Lasts until end of current turn
- **Short**: 1-3 rounds
- **Extended**: Rest of scene/encounter
- **Permanent**: Until actively treated/repaired

**RECOVERY METHODS**:

**Natural Recovery**: 
- Minor conditions fade automatically over time
- Physical rest removes fatigue-based conditions
- Time heals minor injuries and system strain

**Active Treatment**:
- **Medical Attention**: First Aid, Medicine, Surgery skills
- **Technical Repair**: Engineering, Electronics, Computer skills  
- **Countermeasures**: Specific gear/abilities designed to remove conditions

**Resource Investment**:
- **Medical Supplies**: Consumed to treat physical conditions
- **Spare Parts**: Used to repair equipment-based conditions
- **Power/Energy**: May be spent to boost natural recovery

### Damage Type Integration with Conditions

Each damage type has characteristic conditions it commonly inflicts:

**KINETIC DAMAGE**:
- **Light Damage**: May cause "Hindered" from impact trauma
- **Heavy Damage**: "Immobilized" from structural damage
- **Critical Damage**: "Venting" from penetrating wounds/breaches

**ENERGY DAMAGE**:
- **Light Damage**: "Drained" from power system stress
- **Heavy Damage**: "Burning" from thermal overload
- **Critical Damage**: "System Cascade" from energy feedback

**ELECTROMAGNETIC DAMAGE**:
- **Light Damage**: "Distracted" from sensor interference
- **Heavy Damage**: "Disrupted" electronic systems
- **Critical Damage**: "System Failure" with permanent electronic damage

**EXOTIC DAMAGE**:
- **Unpredictable Effects**: Any condition possible
- **Reality Distortion**: Conditions that don't follow normal rules
- **Unique Conditions**: Custom effects based on exotic weapon type

### Condition Stacking and Interaction

**SAME CONDITION STACKING**:
- **Multiple Sources**: Conditions from different sources stack penalties
- **Same Source**: Extended duration rather than increased penalty
- **Maximum Stack**: -4 penalty maximum for any single condition type

**CONDITION INTERACTIONS**:
- **Synergistic**: Some conditions worsen others (Burning + Venting = faster spread)
- **Contradictory**: Some conditions cancel others (Immobilized vs high-speed movement)
- **Cascading**: Some conditions can trigger others (System failure → Power loss → Multiple systems affected)

### Integration with Advanced Combat Actions

**SUPPRESSIVE FIRE**:
- **Primary Effect**: Normal damage to Hit Points/Condition Track
- **Secondary Effect**: "Distracted" condition from suppression stress
- **Tactical Result**: Targets take damage AND penalties to future actions

**CALLED SHOTS**:
- **Primary Effect**: Normal damage to Hit Points
- **Targeted Conditions**: Specific conditions based on target location
  - **Head/Sensors**: "Distracted" condition
  - **Limbs/Propulsion**: "Hindered" or "Immobilized"
  - **Equipment**: May damage gear, causing "Drained"

**ELECTRONIC WARFARE**:
- **System Intrusion**: May cause "Disrupted" without physical damage
- **Jamming Effects**: "Distracted" for electronic-dependent actions
- **Countermeasures**: Can remove enemy-imposed electronic conditions

---

## Action Acceleration Framework

### Standard Action Economy

**STANDARD TIME SCALE (Scale 2 - 6 seconds)**:
- **Move Action**: Change range band, reposition
- **Standard Action**: Attack, complex skill use, power management
- **Quick Action**: Reload, activate simple systems, short communication
- **Free Action**: Drop items, speak briefly, toggle simple controls
- **Reaction**: Respond to enemy actions, defensive measures

### Enhancement-Driven Action Acceleration

**Core Principle**: Enhancements allow actions to be **accelerated up the hierarchy**:
```
Standard → Move → Quick → Free → Reaction
```

**Benefits of Acceleration**:
- **Faster Response**: Actions happen earlier in round
- **Multi-tasking**: Can perform more actions per turn
- **Tactical Advantage**: React to opponents before they can respond

### Cybernetic Enhancement Examples

**REFLEX BOOSTERS** (Advanced Tech):
- **Combat Targeting**: Attacks become Move Actions
- **Duration**: 3 rounds per scene
- **Limitation**: Heat buildup prevents extended use
- **Side Effect**: Cybernetic strain accumulates with overuse

**NEURAL ACCELERATION** (Stellar Tech):
- **Multi-Task Processing**: Two Standard Actions become one Standard + one Move
- **Duration**: Limited by neural strain tolerance
- **Side Effect**: -1 to social interactions (hyper-speed makes user seem "off")
- **Power Requirement**: High-energy cybernetics drain equipment rating

**QUANTUM SYNAPSES** (Cosmic Tech):
- **Temporal Shift**: Any action can be accelerated by 2 categories
- **Example**: Standard Action → Quick Action, Move Action → Reaction
- **Limitation**: Massive energy drain, limited uses per scene
- **Risk**: Temporal displacement side effects possible

### Psychic Acceleration

**PRECOGNITIVE REFLEXES**:
- **Defensive Enhancement**: All defensive actions become Reactions
- **Combat Prediction**: Can declare Reactions before enemy acts
- **Mental Cost**: Requires concentration, -2 to other mental tasks
- **Duration**: Concentration-dependent, ends if focus breaks

**TELEKINETIC ASSISTANCE**:
- **Physical Actions**: Move Actions become Quick Actions
- **Multiple Manipulation**: Handle several objects simultaneously
- **Range**: Can affect items within Short range as if touching them
- **Strain**: Mental fatigue accumulates with complex manipulation

**TEMPORAL PERCEPTION**:
- **Enhanced Awareness**: Process multiple Quick Actions as Free Actions
- **Combat Clarity**: See attacks coming, upgrade defensive Reactions
- **Strain**: Can only maintain for Constitution + Will rounds
- **Recovery**: Requires rest equal to duration used

### Technology Era Progression

**PRIMITIVE ERA**: No acceleration possible
**MODERN ERA**: 
- **Basic Stimulants**: +1 acceleration per scene, causes "Hindered" after use
- **Simple Cybernetics**: +1 Equipment rating, limited acceleration capability

**ADVANCED ERA**:
- **Reflex Boosters**: +2-3 Equipment rating cybernetics
- **Neural Interfaces**: Mental acceleration capabilities
- **Combat Drugs**: Temporary enhancement with significant side effects

**STELLAR ERA**:
- **AI Symbiosis**: AI assistance doesn't cause personal strain
- **Quantum Processors**: +4-5 Equipment rating systems
- **Psionic Amplifiers**: Technology boosts natural psychic capabilities

**COSMIC ERA**:
- **Reality Manipulation**: Essentially unlimited acceleration possible
- **Consciousness Transfer**: Multiple action streams simultaneously
- **Temporal Technology**: True time manipulation at will

### Resource Management & Limitations

**CYBERNETIC STRAIN**:
- **Heat Buildup**: Extended use causes system overheating
- **Equipment Degradation**: Overuse may damage cybernetic systems
- **Neural Feedback**: Too much acceleration causes disorientation
- **Power Drain**: Enhanced systems consume significant energy

**PSYCHIC STRAIN**:
- **Mental Fatigue**: Accelerated perception exhausts the mind
- **Temporal Dissonance**: Moving too fast causes reality "lag"
- **Concentration Requirements**: Must maintain focus or lose enhancement
- **Recovery Time**: Mental strain requires downtime to clear

**EQUIPMENT LIMITATIONS**:
- **Usage Caps**: Each enhancement has scene/day limits
- **Maintenance**: Complex systems require regular upkeep
- **Compatibility**: Not all enhancements work together
- **Power Requirements**: Advanced systems need significant energy

### Cross-Scale Applications

**PERSONAL SCALE**: Individual enhancement gives tactical edge in firefights
**VEHICLE SCALE**: Enhanced pilots perform impossible maneuvers, AI assists navigation
**STARSHIP SCALE**: Ship AI systems provide crew-wide action acceleration
**CAPITAL SCALE**: Strategic systems process information at accelerated rates

**Scale Transition Benefits**:
- **Ship Pilot**: Enhanced reflexes allow sudden acceleration/deceleration
- **Boarding Actions**: Accelerated characters dominate close combat
- **Fleet Command**: AI enhancement allows processing multiple simultaneous engagements

---

## Advanced Combat Actions

### Design Philosophy

Advanced actions provide **tactical depth through meaningful choices** rather than modifier stacking:
- **Use existing modifier framework** (don't create new bonuses)
- **Trade advantages for disadvantages** (gain something, lose something else)
- **Cost resources** (actions, equipment condition, strain)
- **Create binary effects** (works/doesn't work) rather than small bonuses

### Suppression & Area Denial

**SUPPRESSIVE FIRE**:
- **Action**: Standard Action
- **Target**: Area (one range band) instead of specific target
- **Mechanics**: Attack roll at -2 penalty (less accurate, more volume)
- **Effect**: All in area must make Morale check (2d10 + Will + Leadership vs TN 15)
- **Failed Morale**: Target gains "Distracted" condition, loses Standard Action next turn
- **Duration**: Until end of suppressor's next turn
- **Resource Cost**: Uses 3x normal ammunition/power
- **Integration with Hit Points**: Targets in area may also take damage from spray fire

**AREA DENIAL WEAPONS**:
- **Smoke/Gas Grenades**: Create Heavy Concealment, may cause "Distracted"
- **Incendiary Rounds**: Area gains "Burning" environmental hazard
- **EMP Burst**: Electronics in area suffer "Disrupted" condition for 3 rounds
- **Damage Integration**: Area effects cause both environmental conditions AND potential damage

### Coordinated Attacks

**TEAM ATTACK FORMATION**:
- **Requirements**: 2+ attackers can coordinate (same range band, communication)
- **Action Economy**: All attackers use Standard Action simultaneously
- **Mechanics**:
  - **Primary Attacker**: Rolls normally for damage to target's Hit Points
  - **Supporting Attackers**: Each adds +1 to Primary's attack roll (max +3)
  - **Damage**: Primary deals normal damage + 1 damage per supporter
  - **Vulnerability**: All attackers have -2 Defense until next turn (committed to attack)
- **Example**: 4-person team deals normal damage + 3 extra + attack bonus

**OVERWATCH PROTOCOL**:
- **Action**: Standard Action to establish overwatch
- **Effect**: Can make immediate attack when enemy enters specified area
- **Attack**: -1 penalty (split attention between watching and readiness)
- **Limitations**: Cannot move while on overwatch, ends after one attack or start of next turn
- **Damage**: Normal damage to Hit Points if attack succeeds
- **Integration**: Can use action acceleration to set up overwatch faster

### Electronic Warfare

**SYSTEM INTRUSION** (Advanced+ Tech):
- **Action**: Standard Action
- **Target**: Electronic systems (vehicles, augmented characters, smart weapons)
- **Mechanics**: 2d10 + Intelligence + Hacking + Equipment vs Target's Electronic Defense
- **Success**: Choose one system to impose "Disrupted" condition for 3 rounds
- **Critical Success**: Multiple systems or "System Failure" condition
- **No Damage**: Pure condition effect, doesn't reduce Hit Points
- **Countermeasures**: Target can improve defense with power allocation
- **Range**: Must be within Short range for personal-scale intrusion

**SIGNAL JAMMING**:
- **Action**: Standard Action to activate, Free Action to maintain
- **Effect**: Creates Heavy Concealment for all electronic targeting in area
- **Area**: Medium range bubble around jammer
- **Resource Cost**: Equipment condition degrades with extended use
- **Trade-off**: Affects allies AND enemies in the area

### Precision Targeting

**CALLED SHOTS**:
- **Action**: Standard Action with aim (+1 turn of preparation)
- **Mechanics**: Take -2 to attack roll to target specific system/component
- **Damage**: Normal damage to Hit Points PLUS specific condition effect
- **Effects by Target**:
  - **Weapons**: Target weapon gains "Damaged" equipment condition
  - **Sensors**: Target gains "Blinded" condition
  - **Propulsion**: Target gains "Immobilized" condition
  - **Life Support**: Target begins "Venting" condition
- **Critical Success**: Upgrade condition by one level AND maximum damage
- **Integration**: Both physical damage and tactical impairment

**EXPLOIT WEAKNESS**:
- **Requirements**: Study target for full round (no other actions)
- **Effect**: Next attack ignores target's best defense type
- **Examples**: Kinetic vs Energy Shields (ignore Electronic Defense)
- **One-time Effect**: Must study again for additional attacks
- **Damage**: Normal damage resolution after defense bypass

### Formation & Movement Tactics

**COVER FORMATION**:
- **Requirements**: 2+ characters in same area
- **Effect**: One character provides +1 Defense to another
- **Cost**: Covering character cannot move, has -1 to own Defense
- **Breaking**: Formation breaks if anyone moves more than 1 range band
- **Damage Protection**: Covering character may intercept attacks (take damage instead)

**LEAPFROG ADVANCE**:
- **Requirements**: 2+ characters coordinating movement
- **Action**: Move Action for all participants
- **Effect**: Team moves 2 range bands instead of 1
- **Mechanics**: Half team moves while others provide covering fire (+1 Defense)
- **Limitation**: Cannot use while under direct fire (enemies in Close/Short range)
- **Tactical Advantage**: Rapid repositioning under mutual protection

### Integration with Action Acceleration

**ENHANCED SUPPRESSION**:
- **With Acceleration**: Suppressive fire becomes Move Action
- **Benefit**: Can suppress AND reposition in same turn
- **Resource Cost**: Normal suppression cost + enhancement strain

**ACCELERATED COORDINATION**:
- **Enhanced Team Leader**: Can coordinate team attacks faster
- **Mixed Enhancement**: Team members at different speed levels
- **Timing Challenge**: Must synchronize despite different action speeds

**RAPID OVERWATCH**:
- **Enhanced Setup**: Overwatch becomes Quick Action instead of Standard
- **Multiple Triggers**: Enhanced characters can overwatch multiple areas
- **Predictive Overwatch**: Psychic characters can anticipate enemy movement

---

### Skill Enhancement Technologies

**TEMPORARY SKILL BOOSTERS**:

**Skill Chips/Neural Interfaces**:
- **Basic Skill Chip**: +1 to specific skill for scene/day
- **Expert Module**: +2 to skill cluster (all Engineering skills)
- **Master Archive**: +3 to single skill, requires power/concentration
- **Quantum Neural Link**: +4 to any skill, massive power drain

**Brain-Computer Interface (BCI)**:
- **Skill Streaming**: Access remote databases for knowledge checks
- **Collaborative Processing**: Share skills with networked allies
- **AI Assistance**: Computer aids in real-time skill application

**PERMANENT SKILL ARCHITECTURE** (Advanced+ Tech):
- **Skill Imprinting**: Purchase skill levels with neural modification
- **Memory Palace Construction**: Enhanced learning and retention
- **Cognitive Acceleration**: Learn skills faster, retain longer

### Skill Enhancement Limits by Technology Era

- **Primitive Era**: No artificial skill enhancement
- **Modern Era**: Basic training simulations, +1 temporary bonuses
- **Advanced Era**: Skill chips, BCI interfaces, +2 temporary bonuses
- **Stellar Era**: Neural architecture, +3 bonuses, skill downloading
- **Cosmic Era**: Reality-level skill manipulation, no practical limits

**Maximum Skill Levels**:
- **Natural Maximum**: 5 (human potential)
- **Augmented Maximum**: 7 (technological enhancement)
- **Exotic Maximum**: 10 (reality manipulation, cosmic tech)

### Cognitive Warfare Systems

**PSIONIC/MENTAL ATTACKS**:

**Psychic Skill Attacks**:
- **Mind Blank**: Target loses access to specific skill for scene
- **Memory Scramble**: -2 to all knowledge-based skills
- **Cognitive Overload**: Cannot use skills requiring concentration
- **Skill Burn**: Temporarily drain skill levels (1 per round until rest)

**Wisdom/Intelligence Drain**:
- **Neural Feedback**: -1 to mental attributes, affects skill application
- **Synaptic Disruption**: Skills randomly fail (roll to access each use)
- **Cognitive Cascade**: Progressive skill loss (-1 per turn until stopped)

**TECHNOLOGICAL SKILL WARFARE**:

**Neural Viruses/Nanites**:
- **Skill-Specific Nanites**: "Forget" how to pilot, cook, hack, etc.
- **Memory Worms**: Consume specific categories of knowledge
- **Cognitive Malware**: Corrupt skill application (wrong results)
- **Neural Static**: Electromagnetic interference with augmented skills

**Targeted Memory Attacks**:
- **Selective Amnesia**: Lose specific expertise
- **Skill Extraction**: Enemy literally steals your knowledge
- **False Memories**: Replace real skills with incorrect techniques
- **Temporal Displacement**: Skills "forgotten" until timeline restored

### Cognitive Status Conditions

**SKILL LOCKED** (Cannot access specific skill)
- *Personal*: Psionic blocks, memory wipes, neural trauma
- *Vehicle+*: AI systems compromised, navigation databases corrupted
- *Caused by*: Psionic attacks, neural viruses, memory blocks
- *Recovery*: Countermeasures, time, or technical repair

**COGNITIVE STATIC** (-2 to all mental skills)
- *Personal*: Neural jamming, sensory overload, cybernetic feedback
- *Vehicle+*: Computer systems disrupted, sensor networks compromised
- *Caused by*: EM interference, neural jamming, system conflicts
- *Recovery*: Remove source, electromagnetic shielding

**MEMORY FRAGMENTATION** (Roll for skill access each use)
- *Personal*: Partial amnesia, neural damage, temporal displacement
- *Vehicle+*: Database corruption, inconsistent AI responses
- *Caused by*: Memory attacks, neural damage, system corruption
- *Recovery*: Medical/technological intervention

**SKILL FEEDBACK** (Using augmented skills causes damage)
- *Personal*: Neural interfaces cause pain/damage when used
- *Vehicle+*: Ship systems damage operators when activated
- *Caused by*: Corrupted interfaces, hostile AI, system conflicts
- *Recovery*: Technical expertise or emergency disconnection

### Enhanced Mathematical Range

With cognitive enhancement and warfare:

**Enhanced Maximum**:
```
2d10 + Attribute(5) + Augmented Skill(7) + Equipment(5) + Situational(+5) = 42
```

**Cognitively Drained Minimum**:
```
2d10 + Drained Attribute(0) + Skill Wiped(0) + Broken Equipment(0) + Nightmare(-5) = -3
```

**Extended Range**: -3 to 42 (45-point swing in extreme circumstances)

---

## Equipment Degradation & Damage

### Equipment Condition System

**Equipment Health**: Each piece of equipment has durability based on Technology Era and quality.

**EQUIPMENT CONDITIONS**:

**Damaged** (-1 Equipment rating)
- *Examples*: Cracked scope, dented armor, minor system glitches
- *Caused by*: Incidental damage, environmental exposure, wear
- *Recovery*: Field repair with appropriate tools and skills

**Malfunctioning** (-2 Equipment rating)
- *Examples*: Jamming weapons, flickering displays, unreliable systems
- *Caused by*: Direct damage, EMP effects, system overloads
- *Recovery*: Workshop repair, replacement parts

**Severely Damaged** (-3 Equipment rating)
- *Examples*: Shattered optics, cracked power cells, major system failures
- *Caused by*: Heavy damage, critical failures, sustained abuse
- *Recovery*: Extensive repair, specialized facilities

**Destroyed** (0 Equipment rating)
- *Examples*: Completely broken, melted, exploded equipment
- *Caused by*: Catastrophic damage, direct targeting, self-destruct
- *Recovery*: Replacement only, possible salvage of components

### Equipment Targeting

**DELIBERATE EQUIPMENT ATTACKS**:
- **Target Equipment**: -2 attack penalty, can specifically target gear
- **Critical Hits on Equipment**: Automatically reduce condition by one level
- **Area Attacks**: May damage multiple pieces of equipment simultaneously

**DEFENSIVE EQUIPMENT USE**:
- **Equipment as Cover**: Use rifle/tool as improvised shield, takes damage instead of character
- **Sacrificial Protection**: Deliberately intercept attacks with equipment
- **Emergency Disconnection**: Drop/shed damaged equipment to prevent feedback

### Repair Mechanics

**FIELD REPAIR** (Temporary fixes):
- **Time**: 1-5 minutes depending on damage
- **Skill Check**: Engineering/Technical skill vs damage level
- **Success**: Restore 1 condition level temporarily (until stress tested)
- **Tools Required**: Basic repair kit, improvised tools

**WORKSHOP REPAIR** (Permanent fixes):
- **Time**: Hours to days depending on damage
- **Skill Check**: Appropriate technical skill vs damage level
- **Success**: Restore equipment to full functionality
- **Resources Required**: Parts, proper tools, controlled environment

**JURY-RIGGING** (Emergency solutions):
- **Time**: Immediate (Combat Action)
- **Skill Check**: Technical skill + Creativity
- **Success**: Equipment functions for 1 scene at -1 penalty
- **Risk**: Possible further damage on critical failure

### Attribute Damage Integration

**TEMPORARY ATTRIBUTE REDUCTION**:
- **Physical Injury**: -1 to physical attributes from wounds, exhaustion
- **Mental Fatigue**: -1 to mental attributes from stress, neural strain
- **System Shock**: -2 to all attributes from major trauma

**LASTING ATTRIBUTE DAMAGE**:
- **Serious Injury**: Requires medical attention to recover
- **Neural Damage**: May require cybernetic intervention
- **Permanent Loss**: Rare, dramatic story consequences only

**ATTRIBUTE ZERO CONSEQUENCES**:
- **Physical Attribute 0**: Unconscious, paralyzed, incapacitated
- **Mental Attribute 0**: Catatonic, system shutdown, neural death
- **Should be rare and immediately life-threatening**

---

### Mathematical Balance Check

With 2d10 + Attribute (1-5) + Skill (1-5) + Equipment (1-5) + Modifications (0-3):
- **Minimum Roll**: 2 + 1 + 1 + 1 + 0 = 5
- **Maximum Roll**: 20 + 5 + 5 + 5 + 3 = 38
- **Typical Competent Character**: 2d10 + 3 + 3 + 3 + 2 = 11-31 range

### Cross-Scale Combat Integration

When attacks cross scale boundaries:
- **±2 hit modifier per scale difference**
- **Status effects scale dramatically** (Capital vs Personal = automatic Critical conditions)
- **Damage scaling** maintains tactical relevance

### Environmental Integration Support

System supports various environmental conditions:
- **Zero-G**: Movement restrictions, recoil effects
- **Atmospheric Conditions**: Range and damage modifiers
- **Terrain Effects**: Cover availability, movement costs
- **Space Environments**: Sensor limitations, unique hazards

---

## Quick Reference Tables

### Core Resolution Quick Reference
| Component | Range | Notes |
|-----------|-------|-------|
| 2d10 Base | 2-20 | Core dice roll |
| Attribute | 1-5 | Character capability |
| Skill | 1-5 (0-7 enhanced) | Training/augmentation |
| Equipment | 1-5 | Technology Era limited |
| Situational | -5 to +5 | Consolidated circumstances |
| **Total Range** | **0-40 (standard)** | **-3 to 42 (enhanced)** |

### Damage System Quick Reference
| Scale | Primary Damage | Secondary Effects | Death/Destruction |
|-------|----------------|-------------------|-------------------|
| **Personal** | Hit Points | Conditions (modifiers) | HP reaches 0 |
| **Vehicle+** | Condition Track | Conditions (modifiers) | Track reaches final state |

### Action Economy Quick Reference
| Action Type | Time Cost | Examples |
|-------------|-----------|----------|
| **Standard Action** | 6 seconds | Attack, complex skill use, power management |
| **Move Action** | 6 seconds | Change range band, reposition |
| **Quick Action** | 6 seconds | Reload, activate systems, communication |
| **Free Action** | 6 seconds | Drop items, speak, toggle controls |
| **Reaction** | Immediate | Respond to enemy actions, defense |

### Action Acceleration Quick Reference
| Enhancement Level | Acceleration Capability | Examples |
|-------------------|------------------------|----------|
| **None** | Standard hierarchy | Unenhanced humans |
| **Basic** | 1 category | Standard → Move |
| **Advanced** | 1-2 categories | Standard → Quick |
| **Stellar** | 2-3 categories | Standard → Free |
| **Cosmic** | 3-4 categories | Standard → Reaction |

### Situational Modifier Quick Reference
| Situation | Modifier | Typical Examples |
|-----------|----------|------------------|
| Perfect Storm | +5 | Point-blank, defenseless target, ideal conditions |
| Ideal | +3 | Close range, no cover, clear conditions |
| Good | +2 | Short range, light obstacles |
| Standard | +1 | Medium range, some interference |
| Neutral | +0 | Long range, moderate obstacles |
| Poor | -1 | Extreme range, heavy cover |
| Bad | -2 | Multiple obstacles, poor conditions |
| Terrible | -3 | Nearly everything against you |
| Nightmare | -5 | Extreme range, total concealment, systems failing |

### Critical Hit Quick Reference
| Type | Trigger | Effect |
|------|---------|--------|
| Natural Critical | Roll exactly 20 on 2d10 | Roll damage again and add to Hit Points |
| Perfect Execution | Total result equals 40 | Roll damage again + add + bonus effect + condition |

### Target Number Quick Reference
| Difficulty | TN | Success Rate (Competent Character) |
|------------|----|------------------------------------|
| Trivial | 8 | ~95% |
| Easy | 12 | ~85% |
| Moderate | 15 | ~70% |
| Hard | 20 | ~45% |
| Extreme | 25 | ~20% |
| Legendary | 30 | ~5% |

### Range Modifier Quick Reference
| Range Band | Attack Modifier | Notes |
|------------|----------------|-------|
| Close | +2 | Enables melee weapons |
| Short | +1 | Optimal for most weapons |
| Medium | +0 | Standard engagement |
| Long | -1 | Long-range weapons favored |
| Extreme | -2 | Specialized equipment required |

### Cover & Concealment Quick Reference
| Type | Defense Bonus | Attack Penalty | Examples |
|------|---------------|----------------|----------|
| Light Cover | +1 Defense | - | Corner, debris, partial obstruction |
| Heavy Cover | +2 Defense | - | Wall, vehicle hull, solid barrier |
| Superior Cover | +3 Defense | Perception Check to target | Firing port, dense obstacles |
| Total Cover | Cannot Target | - | Complete obstruction |
| Light Concealment | - | -1 to enemy | Dim light, light smoke |
| Heavy Concealment | - | -2 to enemy | Heavy smoke, darkness |
| Total Concealment | Cannot Target Visually | - | Complete darkness, opaque smoke |

### Status Effect Quick Reference
| Category | Effect | Penalty | Duration | Damage Integration |
|----------|--------|---------|----------|-------------------|
| **PHYSICAL IMPAIRMENT** | | | | |
| Hindered | Physical actions | -1 | Short-Extended | From kinetic damage/critical hits |
| Immobilized | No move, Defense | -2 | Extended | From targeted damage, restraints |
| **MENTAL IMPAIRMENT** | | | | |
| Distracted | Mental actions | -1 | Short | From EM damage, sensory overload |
| Blinded | Attack rolls | -4 | Short-Extended | From flash weapons, sensor damage |
| **SYSTEM IMPAIRMENT** | | | | |
| Drained | Energy systems | -1 | Extended | From energy drain, system overload |
| Disrupted | Electronic systems | Offline | 1-3 rounds | From EMP, electronic warfare |
| **CRITICAL CONDITIONS** | | | | |
| Burning | Ongoing damage | 1/round | Until extinguished | Damages Hit Points/Condition Track |
| Venting | Resource loss | Escalating | Until repaired | Life-threatening to Hit Points |
| System Cascade | All systems | -2/round | Until stopped | Cascading system damage |

### Advanced Combat Actions Quick Reference
| Action | Cost | Effect | Damage/Condition Integration |
|--------|------|--------|----------------------------|
| **Suppressive Fire** | Standard Action, 3x ammo | Area "Distracted", -2 attack | May cause damage + condition |
| **Team Attack** | All Standard Actions | +1 attack/damage per supporter | Normal damage + bonus + conditions |
| **Called Shot** | Standard + aim, -2 attack | Target specific system | Normal damage + specific condition |
| **Overwatch** | Standard Action, -1 attack | Immediate reaction attack | Normal damage on trigger |
| **Electronic Warfare** | Standard Action vs Electronic Defense | System "Disrupted" condition | Condition only, no Hit Point damage |

### Cognitive Warfare Quick Reference
| Enhancement | Bonus | Requirements | Vulnerability |
|-------------|-------|--------------|---------------|
| Skill Chip | +1 | Modern+ Tech | EM interference |
| Expert Module | +2 | Advanced+ Tech | System targeting |
| Master Archive | +3 | Stellar+ Tech, Power | Cognitive attacks |
| Quantum Link | +4 | Cosmic Tech, Massive power | Reality manipulation |

| Cognitive Attack | Effect | Target | Recovery |
|------------------|--------|---------|----------|
| Mind Blank | Lose specific skill | Individual skill | Time/countermeasures |
| Memory Scramble | -2 knowledge skills | Mental abilities | Medical attention |
| Skill Burn | -1 skill/round | Skill levels | Rest/recovery |
| Neural Static | -2 augmented skills | Enhanced abilities | Remove interference |

### Equipment Condition Quick Reference
| Condition | Equipment Penalty | Repair Difficulty | Time Required |
|-----------|------------------|-------------------|---------------|
| Functional | Normal rating | - | - |
| Damaged | -1 | Easy (TN 12) | 1-5 minutes |
| Malfunctioning | -2 | Moderate (TN 15) | 1 hour |
| Severely Damaged | -3 | Hard (TN 20) | 1 day |
| Destroyed | 0 (unusable) | - | Replacement only |

### Damage Type Effectiveness Quick Reference
| Damage Type | Best Against | Worst Against | Special Properties | Common Conditions |
|-------------|--------------|---------------|-------------------|-------------------|
| Kinetic | Physical armor | Energy shields | Reliable, penetrating | Hindered, Immobilized, Venting |
| Energy | Electronics | Reflective armor | No ammo, instant, signature | Drained, Burning, System Cascade |
| Electromagnetic | Shields/systems | Hardened targets | Disabling, cognitive warfare | Distracted, Disrupted, System Failure |
| Exotic | Everything | Exotic defenses | Ignores normal defenses, rare | Any (unpredictable effects) |

### Scale Cross-Reference Quick Reference
| Attacker Scale | Target Scale | Modifier | Damage Effect | Notes |
|----------------|--------------|----------|---------------|--------|
| Personal | Vehicle | -2 | Reduced effectiveness | Hard to damage vehicles |
| Personal | Starship+ | -4 | Minimal effect | Nearly impossible |
| Vehicle | Personal | +2 | Automatic conditions | Easy to hit, devastating |
| Starship | Vehicle | +2 | Major damage | Size advantage |
| Capital | Personal | +4 | Automatic critical | Overwhelming force |

---

**Document Version**: 3.0  
**Last Updated**: Hit Points + Conditions + Action Acceleration Integration  
**Status**: Ready for Multi-Scale Combat Playtesting  
**Next Phase**: Vehicle Operations & Crew Roles Integration