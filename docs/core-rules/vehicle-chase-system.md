# Vehicle Chase System - Balanced Framework

## Overview

The Vehicle Chase System extends the balanced 2d10 mechanics to dynamic pursuit scenarios across ground, air, and space environments. It maintains the mathematical foundation established in the core combat system while adding tactical depth for high-speed encounters.

**Core Principles**:
- Uses standard 2d10 + Attribute + Skill resolution
- Maintains 85% success rates for appropriate skill levels
- Integrates seamlessly with combat system
- Scalable from personal vehicles to capital ships
- Technology era determines available maneuvers and capabilities

---

## Chase Resolution Framework

### Basic Chase Mechanics

#### Initiative and Turn Order
**Chase Initiative**: 1d10 + Coordination + Pilot Skill
- Determines action order each round
- Re-roll initiative when vehicles change significantly
- Tied initiative: Defender (being chased) acts first

#### Range Categories
| Range | Description | Modifiers | Actions Available |
|-------|-------------|-----------|-------------------|
| **Adjacent** | Ramming distance | Combat possible | All maneuvers, boarding |
| **Close** | Within weapons range | +1 to attacks | Most maneuvers, combat |
| **Medium** | Visual contact | +0 baseline | Basic maneuvers, long-range combat |
| **Long** | Sensor contact | -1 to attacks | Limited maneuvers, detection |
| **Extreme** | Edge of detection | -2 to attacks | Escape attempts, sensor work |

#### Basic Action Economy
- **Standard Action**: Complex maneuver, attack, special ability
- **Move Action**: Basic movement, simple maneuver, evasion
- **Quick Action**: Communication, sensor scan, simple system
- **Reaction**: Defensive maneuver, countermeasure

---

## Core Chase Actions

### Pilot Maneuvers
All maneuvers use: **2d10 + Coordination + (Pilot Skill ÷ 2) + Equipment + Situation**

#### Pursuit (Standard Action)
**Purpose**: Close distance with target
**TN**: 14 + Target's last Evasion result
**Success**: Reduce range by one category
**Failure**: No change in range
**Critical Success**: Reduce range by two categories, gain +1 to next action

#### Evasion (Standard Action)
**Purpose**: Increase distance from pursuer
**TN**: 14 + Pursuer's last Pursuit result
**Success**: Increase range by one category
**Failure**: No change in range
**Critical Success**: Increase range by two categories, force pursuer TN +2 next round

#### Ramming Attack (Standard Action)
**Requirements**: Adjacent range
**TN**: Target's Defense + 2
**Success**: Both vehicles take collision damage
**Damage**: 2d10 + Vehicle Scale + Speed modifier
**Risk**: Pilot takes damage equal to half dealt

#### Dangerous Maneuver (Standard Action)
**Purpose**: Gain tactical advantage through risky piloting
**TN**: 17 (varies by environment)
**Success**: +2 to next action, special positioning
**Failure**: Take environmental damage, lose next move action
**Examples**: Asteroid threading, urban weaving, atmospheric diving

### Combat Integration

#### Vehicle Combat
**Attack Roll**: 2d10 + Attribute + (Combat Skill ÷ 2) + Vehicle Equipment + Range
**Defense**: 10 + Coordination + (Pilot Skill ÷ 2) + Vehicle Maneuverability + Cover

#### Shooting While Piloting
- **Pilot + Gunner**: No penalties if different people
- **Pilot as Gunner**: -2 to both Pilot and Combat rolls
- **Passenger Shooting**: Range penalties only

#### Vehicle Damage Effects
| Damage Level | System Effects | Pilot Penalties |
|--------------|----------------|-----------------|
| Light (25%) | Minor systems offline | None |
| Moderate (50%) | -1 to all vehicle actions | -1 to Pilot |
| Heavy (75%) | -2 to all vehicle actions | -2 to Pilot |
| Critical (90%+) | Random system failures | -3 to Pilot, breakdown risk |

---

## Environmental Factors

### Ground Chase Environments

#### Urban Environment
**Characteristics**: Dense obstacles, traffic, varying surfaces
**Special Rules**:
- **Traffic**: TN +1 for all maneuvers, civilians at risk
- **Obstacles**: Cover bonuses +1 to +3, ramming opportunities
- **Shortcuts**: Knowledge (Local) + Pilot for route advantages

**Hazard Examples**:
- **Pedestrian Areas**: TN 17 Pilot or cause civilian casualties
- **Construction Zones**: Environmental damage 1d6, difficult terrain
- **Multi-level**: Elevation changes provide tactical options

#### Off-Road Environment
**Characteristics**: Natural terrain, weather effects, limited support
**Special Rules**:
- **Terrain Types**: Modify TN based on vehicle suitability
- **Weather**: Visibility and control penalties
- **Isolation**: No immediate rescue if vehicles disabled

**Terrain Modifiers**:
| Terrain Type | Wheeled | Tracked | Hover | Special |
|--------------|---------|---------|-------|---------|
| Paved Road | +0 | +0 | +0 | Baseline |
| Dirt Road | -1 | +0 | +0 | Dust clouds |
| Rough Terrain | -2 | -1 | +1 | Vehicle damage risk |
| Extreme Terrain | -4 | -2 | +0 | Specialized vehicles only |

### Air Chase Environments

#### Atmospheric Flight
**Characteristics**: Three-dimensional movement, weather, air traffic
**Special Rules**:
- **Altitude Bands**: Low/Medium/High with different characteristics
- **Weather Effects**: Wind, storms, visibility impact
- **Air Traffic Control**: Legal complications, civilian safety

**Altitude Effects**:
| Altitude Band | Benefits | Penalties | Special |
|---------------|----------|-----------|---------|
| Low (0-500m) | Ground cover, surprise | Obstacle risk | Building/terrain interaction |
| Medium (500-5000m) | Balanced performance | ATC attention | Standard flight operations |
| High (5000m+) | Speed advantage | Thin air penalties | Specialized equipment needed |

#### Space Flight
**Characteristics**: Zero gravity, vast distances, radiation hazards
**Special Rules**:
- **Inertia**: Momentum carries between maneuvers
- **Heat Signatures**: Stealth vs detection mechanics
- **Vacuum**: System failures have severe consequences

**Space Maneuver Types**:
- **Orbital Mechanics**: Using gravity wells for acceleration
- **Debris Fields**: Asteroid belts, ship graveyards as cover
- **Solar Weather**: Radiation storms affecting sensors/systems

---

## Vehicle Scale Integration

### Scale Categories
| Scale | Examples | Pilot Skill Required | Crew Size |
|-------|----------|---------------------|-----------|
| **Personal** | Motorcycle, jetpack | 0+ | 1 |
| **Vehicle** | Car, small aircraft | 1+ | 1-4 |
| **Transport** | Truck, shuttle | 2+ | 2-12 |
| **Starship** | Fighter, corvette | 3+ | 1-50 |
| **Capital** | Frigate, cruiser | 4+ | 50-5000 |
| **Massive** | Dreadnought, carrier | 5+ | 1000+ |

### Cross-Scale Interactions
**Size Differential Effects**:
- **Same Scale**: Standard rules apply
- **One Scale Difference**: Larger vehicle +1 Defense, +2 damage
- **Two+ Scale Difference**: Minion/mook rules may apply

**Example**: Personal scale fighter vs Vehicle scale shuttle
- Fighter: +1 to hit (maneuverability), normal damage
- Shuttle: +1 Defense (size), +2 damage if hits

---

## Technology Era Progressions

### Primitive Era Chases
**Technology Level**: Animal-drawn, wind-powered, manual
**Characteristics**:
- **Speed Limits**: Biological/natural power constraints
- **Maneuvers**: Terrain-dependent, stamina limitations
- **Equipment**: +0 bonuses, reliability focus

**Example Vehicles**:
- **Horse Pursuit**: Fatigue mechanics, terrain advantages
- **Sailing Ships**: Wind direction, crew skill critical
- **Early Railways**: Fixed routes, speed vs maneuverability

### Industrial Era Chases
**Technology Level**: Steam, internal combustion, early aviation
**Characteristics**:
- **Mechanical Systems**: Maintenance and fuel considerations
- **Speed Increase**: Faster than biological but limited
- **Equipment**: +1 bonuses, reliability vs performance

**Example Vehicles**:
- **Automobile Chase**: Road network limitations, fuel range
- **Biplane Pursuit**: Weather dependent, limited altitude
- **Steamship**: Fuel efficiency vs speed tradeoffs

### Advanced Era Chases
**Technology Level**: Jet propulsion, electronics, computer assistance
**Characteristics**:
- **High Performance**: Significant speed and maneuverability
- **Electronic Systems**: Sensors, communication, targeting
- **Equipment**: +2 bonuses, specialized capabilities

**Example Vehicles**:
- **Starfighter**: Space maneuverability, energy weapons
- **Hovertank**: All-terrain capability, advanced targeting
- **Hypersonic**: Extreme speed, atmospheric limitations

### Stellar Era Chases
**Technology Level**: Energy manipulation, AI integration, exotic propulsion
**Characteristics**:
- **Reality Manipulation**: Physics-bending capabilities
- **AI Integration**: Computer-assisted everything
- **Equipment**: +3 bonuses (maximum), unique abilities

**Example Vehicles**:
- **Quantum Fighter**: Phase shifting, probability manipulation
- **Gravitic Racer**: Gravity control, dimensional shortcuts
- **AI Symbiosis**: Vehicle and pilot merge capabilities

---

## Special Chase Scenarios

### Multi-Environment Chases
**Surface to Air**: Ground vehicles vs aircraft
- Ground vehicles: Cover advantages, civilian complications
- Aircraft: Speed advantages, limited maneuver options
- Transition points: Buildings, bridges, elevation changes

**Air to Space**: Atmospheric to vacuum transition
- Atmospheric craft: Home environment, fuel limitations
- Space craft: Destination advantage, system requirements
- Transition zone: Atmospheric interface, heat buildup

### Objective-Based Chases
Beyond simple pursuit/escape:

#### Escort Mission
**Objective**: Protect vulnerable target from attackers
**Mechanics**: Escort uses Evasion, guards use Interception
**Complications**: Multiple threats, civilian safety, destination security

#### Retrieval Chase
**Objective**: Recover stolen item/person during pursuit
**Mechanics**: Boarding actions, transfer procedures
**Complications**: Moving platforms, hostile cargo, time pressure

#### Racing Competition
**Objective**: Reach destination first in multi-participant race
**Mechanics**: Track layout, multiple opponents, checkpoint system
**Complications**: Sabotage, cheating, environmental hazards

---

## Advanced Maneuver Options

### Defensive Maneuvers

#### Jinking (Move Action)
**Purpose**: Rapid evasive movement
**Effect**: +1 Defense until next turn, -1 to own attacks
**Cost**: Can only be used once per round
**Technology**: Available at all eras

#### Smoke Screen/Countermeasures (Quick Action)
**Purpose**: Break target locks, confuse pursuit
**Effect**: -2 to enemy attacks next round
**Limitation**: Limited uses per encounter
**Technology**: Era-specific delivery methods

#### Terrain Usage (Standard Action)
**Purpose**: Use environment for tactical advantage
**TN**: Varies by terrain (14-20)
**Success**: Gain cover, force enemy disadvantage
**Risk**: Environmental damage on failure

### Offensive Maneuvers

#### Interception (Standard Action)
**Purpose**: Cut off escaping target
**TN**: 14 + target's Speed rating
**Success**: Force target to change course or face collision
**Tactical**: Works best with multiple pursuers

#### Herding (Coordinated Action)
**Purpose**: Multiple vehicles guide target toward trap
**Requirements**: 2+ vehicles with communication
**Effect**: Target's Evasion TN +2, limited escape options
**Counter**: Dangerous Maneuver to break formation

#### Boarding Action (Adjacent Range Only)
**Requirements**: Vehicles traveling at similar speeds
**Process**: Pilot check to maintain position + Athletics/Acrobatics
**Risk**: Fall damage, hostile reception
**Success**: Physical confrontation on moving vehicle

---

## Damage and Consequences

### Vehicle Health System
Uses same framework as character health but scaled for vehicles:

**Vehicle HP**: Base HP + (Scale × 50) + (Technology Era × 25)
**Damage Thresholds**: Same percentages as character wounds

### System Damage
Instead of status conditions, vehicles suffer system failures:

| System | Effect of Damage | Repair Difficulty |
|--------|------------------|-------------------|
| **Propulsion** | Speed reduction, mobility loss | Technology + Might |
| **Sensors** | Detection penalties, navigation issues | Technology + Intellect |
| **Weapons** | Attack penalties, system offline | Technology + Coordination |
| **Life Support** | Crew health issues, time pressure | Technology + Intellect |
| **Communications** | Coordination penalties, isolation | Technology + Awareness |
| **Structural** | HP reduction, crash risk | Technology + Might |

### Crash Mechanics
When vehicles are reduced to 0 HP or fail critical systems:

**Crash Severity**: Determined by speed and circumstances
- **Controlled Landing**: Pilot TN 17, minimal damage
- **Hard Crash**: Pilot TN 20, significant damage to occupants
- **Catastrophic**: No save, maximum damage to all aboard

**Survival Rolls**: Might + Coordination vs damage-based TN
**Rescue Operations**: Technology + Medicine for emergency response

---

## Example Chase: Starfighter Pursuit

### Setup
- **Environment**: Asteroid field in space
- **Participants**: 2 Advanced Era fighters
- **Objective**: Pursuer captures fleeing smuggler

### Round 1
**Initiative**: Pursuer 15, Smuggler 12

**Pursuer Action**: Pursuit maneuver
- **Roll**: 2d10 + 5 COO + 2 Pilot + 2 equipment = 18
- **TN**: 14 (base)
- **Result**: Success, close to Medium range

**Smuggler Action**: Dangerous Maneuver (asteroid threading)
- **Roll**: 2d10 + 6 COO + 3 Pilot + 2 equipment = 20
- **TN**: 17 (dangerous environment)
- **Result**: Success, +2 to next action, gains cover

### Round 2
**Pursuer Action**: Attack with weapons
- **Roll**: 2d10 + 4 AWA + 2 Combat + 2 equipment - 1 range = 16
- **TN**: 10 + 6 COO + 3 Pilot + 2 equipment + 2 cover = 23
- **Result**: Miss

**Smuggler Action**: Evasion with bonus
- **Roll**: 2d10 + 6 COO + 3 Pilot + 2 equipment + 2 bonus = 24
- **TN**: 14 (base)
- **Result**: Critical Success, increase to Long range, pursuer TN +2

### Round 3
**Pursuer**: Must close distance before smuggler escapes
**Smuggler**: One more successful Evasion likely means escape

---

## GM Guidance

### Pacing Chase Encounters
- **Short Bursts**: 3-5 rounds for intense scenes
- **Extended**: 6-10 rounds for complex scenarios
- **Epic**: 10+ rounds for climactic sequences

### Environmental Storytelling
Use environment to drive narrative:
- **Urban**: Civilian consequences, property damage
- **Wilderness**: Isolation, survival elements
- **Space**: Cosmic scale, technology dependence

### Balancing Multiple Vehicles
- **Equal Numbers**: Standard rules apply
- **Outnumbered**: Use Elite rules for lone vehicles
- **Mass Chase**: Abstract some participants as environmental hazards

### Integration with Campaign
- **Reputation**: Chase outcomes affect character standing
- **Equipment**: Damage requires repair time and resources
- **Consequences**: Legal trouble, enemy creation, civilian casualties

---

## Conclusion

The Vehicle Chase System maintains the balanced 2d10 foundation while adding dynamic movement and tactical depth. By using consistent mechanics across all scales and environments, it integrates seamlessly with the core combat system while providing exciting high-speed encounters.

**Key Features**:
- ✅ Maintains 85% success rates for skilled pilots
- ✅ Scalable from personal to capital ship level
- ✅ Integrates with technology era progression
- ✅ Provides tactical options without overwhelming complexity
- ✅ Supports multi-environment and objective-based scenarios

The system is ready for immediate implementation and testing across all campaign types and technology levels.