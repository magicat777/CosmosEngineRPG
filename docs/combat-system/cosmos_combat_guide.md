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
8. [System Integration & Balance](#system-integration--balance)
9. [Quick Reference Tables](#quick-reference-tables)

---

## Core Combat Foundation

### Universal Resolution Mechanic
**2d10 + Attribute + Skill + Equipment vs Target Number**

All combat actions use this core resolution across four operational scales with unified mechanics but different damage representation.

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

### Three Effect Categories

All status effects fall into three categories that scale appropriately:

**IMPAIRED** - Reduced Performance
**DISABLED** - Systems/Functions Offline
**CRITICAL** - Immediate Danger/Failure

### Core Status Effects Library

**IMPAIRED CONDITIONS**:

**Distracted** (-1 to all mental actions)
- *Personal*: Stunned, confused, overwhelmed
- *Vehicle+*: Sensor interference, comm disruption
- *Caused by*: Electromagnetic damage, explosions, psionics

**Hindered** (-1 to all physical actions)
- *Personal*: Injured, encumbered, in difficult terrain
- *Vehicle+*: Maneuvering thrusters damaged, structural stress
- *Caused by*: Kinetic damage, environmental effects

**Drained** (-1 to energy-dependent systems)
- *Personal*: Exhausted, low on power cells
- *Vehicle+*: Power grid strained, reduced weapon effectiveness
- *Caused by*: Energy drain attacks, overuse of systems

**DISABLED CONDITIONS**:

**Blinded** (Cannot target visually, -4 to attack rolls)
- *Personal*: Cannot see, relying on other senses
- *Vehicle+*: Visual sensors offline, reduced targeting
- *Caused by*: Bright flashes, sensor jamming, smoke

**Immobilized** (Cannot move, -2 Defense)
- *Personal*: Legs injured, trapped, grappled
- *Vehicle+*: Engines offline, caught in tractor beam
- *Caused by*: Kinetic damage to propulsion, restraint systems

**System Failure** (One major system offline)
- *Personal*: Weapon jammed, armor compromised
- *Vehicle+*: Weapons, shields, or engines completely non-functional
- *Caused by*: Electromagnetic damage, critical failures

**Disrupted** (Electronic systems offline for 1 round)
- *Personal*: Cybernetics, smart weapons non-functional
- *Vehicle+*: Fire control, navigation, communications down
- *Caused by*: EMP weapons, system intrusion

**CRITICAL CONDITIONS**:

**Burning** (1 damage per round, spreads without action to extinguish)
- *Personal*: On fire, requires action to put out
- *Vehicle+*: Hull breach fires, requires damage control
- *Caused by*: Incendiary weapons, engine overloads

**Venting** (Rapid decompression/resource loss)
- *Personal*: Suit breach, losing air/blood rapidly
- *Vehicle+*: Hull breach, losing atmosphere/fuel
- *Caused by*: Penetrating kinetic damage, structural failure

**System Cascade** (Multiple systems failing, -2 cumulative per round)
- *Personal*: Cybernetic feedback loops, toxic exposure
- *Vehicle+*: Chain reaction failures across ship systems
- *Caused by*: Exotic damage, critical system overloads

**Dying** (Personal scale only, unconscious and losing Hit Points)
- *Vehicle+ equivalent*: **Breaking Up** (structural collapse imminent)

### Damage Type Status Integration

Each damage type has signature status effects:

**Kinetic**: Hindered → Immobilized → Venting
**Energy**: Drained → Burning → System Cascade
**Electromagnetic**: Distracted → Disrupted → System Failure
**Exotic**: Any effect (unpredictable results)

### Duration & Recovery System

**Duration Categories**:
- **Instantaneous**: Lasts until end of current turn
- **Short**: Lasts 1-3 rounds
- **Extended**: Lasts rest of scene/encounter
- **Permanent**: Requires repair/medical attention

**Recovery Mechanics**:
- **Natural Recovery**: Some effects fade automatically
- **Active Recovery**: Spend actions to remove effects using appropriate skills
- **Power Through**: Spend Willpower/Power Points to ignore effect for 1 round

---

## System Integration & Balance

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

### Range Modifier Quick Reference
| Range Band | Attack Modifier | Notes |
|------------|----------------|-------|
| Close | +2 | Enables melee weapons |
| Short | +1 | Optimal for most weapons |
| Medium | +0 | Standard engagement |
| Long | -1 | Long-range weapons favored |
| Extreme | -2 | Specialized equipment required |

### Cover & Concealment Quick Reference
| Type | Defense Bonus | Examples |
|------|---------------|----------|
| Light Cover | +1 | Corner, debris, partial obstruction |
| Heavy Cover | +2 | Wall, vehicle hull, solid barrier |
| Total Cover | Cannot Target | Complete obstruction |
| Concealment | -1 to enemy | Smoke, darkness, jamming |

### Status Effect Quick Reference
| Category | Effect | Penalty | Duration |
|----------|--------|---------|----------|
| Impaired | Distracted | -1 mental | Short |
| Impaired | Hindered | -1 physical | Short |
| Impaired | Drained | -1 energy | Extended |
| Disabled | Blinded | -4 attack | Short |
| Disabled | Immobilized | No move, -2 Defense | Extended |
| Disabled | System Failure | System offline | Extended |
| Critical | Burning | 1 damage/round | Until extinguished |
| Critical | Venting | Rapid resource loss | Until repaired |
| Critical | System Cascade | -2 cumulative/round | Until stopped |

### Damage Type Effectiveness Quick Reference
| Damage Type | Best Against | Worst Against | Special Properties |
|-------------|--------------|---------------|-------------------|
| Kinetic | Physical armor | Energy shields | Reliable, penetrating |
| Energy | Electronics | Reflective armor | No ammo, instant |
| Electromagnetic | Shields/systems | Hardened targets | Disabling effects |
| Exotic | Everything | Exotic defenses | Ignores normal defense |

---

**Document Version**: 1.0  
**Last Updated**: Combat Mechanics Design Phase  
**Status**: Ready for Product Manager Review  
**Next Phase**: Vehicle Operations & Crew Roles Integration