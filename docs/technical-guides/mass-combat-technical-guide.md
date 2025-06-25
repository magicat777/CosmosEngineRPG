# Mass Combat Technical Guide
*Complete Integration Reference for Large-Scale Warfare*

## Table of Contents

1. [System Integration Overview](#system-integration-overview)
2. [Scale Transition Mechanics](#scale-transition-mechanics)
3. [Unit Construction & Statistics](#unit-construction--statistics)
4. [Combat Resolution Engine](#combat-resolution-engine)
5. [Hero Integration Systems](#hero-integration-systems)
6. [Multi-Theater Operations](#multi-theater-operations)
7. [Electronic Warfare Integration](#electronic-warfare-integration)
8. [Command & Control Systems](#command--control-systems)
9. [Logistics & Campaign Integration](#logistics--campaign-integration)
10. [Technical Implementation](#technical-implementation)
11. [Advanced Mechanics](#advanced-mechanics)
12. [Example Conversions](#example-conversions)

---

## System Integration Overview

### Core Design Philosophy

The Mass Combat system extends Cosmos Engine's unified 2d10 resolution across three integrated scales:

```
Personal Scale    ←→    Starship Scale    ←→    Mass Combat Scale
(Individual)            (Single Vessels)        (Formations/Fleets)
```

**Unified Elements**:
- Same core resolution: `2d10 + Attribute + Skill + Equipment vs TN`
- Consistent attribute system (PRIMAC) at all scales
- Heat management principles extend to unit stress
- Electronic warfare effects scale consistently
- Damage thresholds create similar breakpoints

**Scale-Specific Adaptations**:
- **Personal**: Individual actions, detailed positioning
- **Starship**: Crew coordination, ship systems, momentum
- **Mass**: Unit cohesion, command decisions, strategic objectives

### Mechanical Inheritance

**From Personal Combat**:
- Initiative system (modified for unit coordination)
- Action economy (Standard/Move/Quick/Free)
- Damage and health states with thresholds
- Specialization trees affecting unit capabilities

**From Starship Combat**:
- Heat-like stress management (Unit Stress)
- Momentum concepts adapted to unit positioning
- Electronic warfare integration
- Multi-crew coordination → multi-unit coordination

**New Mass Combat Elements**:
- Unit Strength as abstract hit points
- Morale as secondary health track
- Command structure hierarchy
- Victory point objectives

---

## Scale Transition Mechanics

### Personal → Mass Combat Integration

#### Hero Actions During Mass Combat
Heroes maintain their personal-scale capabilities while influencing unit-scale operations:

**Direct Leadership** (Hero leads unit):
```
Unit Strength Bonus = (Hero's Presence + Command) / 2
Unit Morale Bonus = Hero's Presence / 2
Unit Action Bonus = +1 (from competent leadership)
```

**Special Missions** (Hero operates independently):
- Use full personal-scale rules
- Success affects mass combat objectives
- Risk calculated using personal combat danger

**Heroic Inspiration** (Hero visible to multiple units):
```
Inspiration Check: 2d10 + Presence + Command vs TN 14
Success: All units within "command radius" gain +1 morale
Critical: Additional +1 action bonus for 1 round
```

#### Cross-Scale Damage Translation
When personal-scale characters face mass combat threats:

**Unit Weapons vs Personal Scale**:
```
Personal Damage = Unit Strength × Technology Multiplier × 2d6
Technology Multiplier:
- Industrial: ×1
- Information: ×1.5  
- Fusion: ×2
- Stellar: ×3
- Cosmic: ×4
```

**Personal Weapons vs Units**:
- Personal-scale weapons generally ineffective vs units
- Exception: Heavy weapons (TN 20+ to affect unit)
- Sabotage/infiltration uses special mission rules

### Starship → Mass Combat Integration

#### Squadron Formation Rules
Multiple starships can form squadrons using mass combat mechanics:

**Squadron Creation**:
```
Squadron Strength = Total Ship Hull Points / 20
Squadron Equipment = Average Ship Technology Level
Squadron Command = Best Captain's (Presence + Command)
Squadron Morale = Average Crew Morale + Command Bonus
```

**Squadron vs Individual Ship Combat**:
- Individual ships can engage squadrons
- Use starship combat rules with Squadron acting as single "super-ship"
- Squadron casualties translate back to individual ship damage

#### Fleet Combat Abstraction
Large space battles use adapted mass combat with starship-specific modifiers:

**Ship Class Modifiers**:
| Ship Class | Base Strength | Special Rules |
|------------|---------------|---------------|
| Fighter Squadron | 2 | Fast, limited endurance |
| Corvette Squadron | 4 | Balanced, electronic warfare |
| Frigate Squadron | 6 | Anti-fighter, escort duty |
| Cruiser Squadron | 8 | Heavy weapons, command capability |
| Battleship Squadron | 12 | Massive firepower, slow |
| Capital Squadron | 15 | Strategic weapons, rare |

**Starship Mass Combat Actions**:
- **Bombardment**: Orbital units can attack surface units
- **Fighter Screening**: Fighter units protect larger ships
- **Electronic Warfare**: EW effects apply to entire engagement zones
- **Jump Interdiction**: Prevent enemy fleet withdrawal

### Mass → Personal Scale Zoom

#### Detailed Resolution
During mass combat, specific actions can "zoom in" to personal or starship scale:

**Trigger Conditions**:
- Hero attempts special mission
- Critical objective requires detailed resolution
- Dramatically appropriate moment
- GM chooses to highlight specific action

**Zoom Process**:
1. Pause mass combat at current state
2. Set up personal/starship scenario
3. Resolve using appropriate scale rules
4. Translate results back to mass combat effects
5. Continue mass combat with modified conditions

---

## Unit Construction & Statistics

### Unit Statistic Derivation

#### Core Statistics Mapping
Units derive statistics from component elements:

**Unit Strength** (0-10 scale):
```
Base Strength = 3 (standard line unit)
+ Equipment Bonus (0-4 based on tech era)
+ Training Bonus (0-3: Green/Regular/Veteran/Elite)
+ Size Modifier (-2 to +2: Understrength to Overstrength)
+ Special Role Bonus (-1 to +3: Specialist units)
```

**Unit Morale** (0-10 scale):
```
Base Morale = 5 (standard troops)
+ Commander's Presence / 2
+ Unit Experience (0-3: Green to Veteran)
+ Supply Status (-2 to +1: Starving to Oversupplied)
+ Recent Victory/Defeat (+/-2 temporary)
+ Home Territory Bonus (+1 when defending homeland)
```

**Unit Equipment** (0-10 scale):
```
Equipment = Technology Era Base (3-7)
+ Manufacturing Quality (-1 to +2: Poor to Superior)
+ Maintenance Status (-2 to +1: Degraded to Well-Maintained)
+ Specialist Gear (+1 to +3: Role-specific equipment)
```

#### Technology Era Impact
Technology level affects all unit capabilities:

| Era | Base Equipment | Special Capabilities | Communication Range |
|-----|----------------|---------------------|-------------------|
| Industrial | 3 | Mass production, artillery | Line of sight |
| Information | 4 | Precision weapons, radio | Theater-wide |
| Fusion | 5 | Energy weapons, powered armor | Planetary |
| Stellar | 6 | Gravitic systems, AI assistance | System-wide |
| Cosmic | 7 | Reality manipulation, transcendent tech | Unlimited |

### Unit Type Classifications

#### Primary Combat Units

**Infantry Classifications**:
```
Light Infantry: Strength 3, Morale 6, Equipment 4
- High mobility (+2 movement)
- Terrain bonuses in urban/forest
- Vulnerable to armor without support

Heavy Infantry: Strength 4, Morale 7, Equipment 6  
- Powered armor, heavy weapons
- +1 vs light units
- Reduced mobility (-1 movement)

Elite Forces: Strength 5, Morale 8, Equipment 7
- Special forces, marines, guards
- Can attempt special operations
- +2 vs equal-strength units
```

**Armor Classifications**:
```
Light Armor: Strength 4, Morale 6, Equipment 5
- Reconnaissance, urban warfare
- +3 movement, +1 vs infantry
- -1 vs heavy armor, vulnerable to air

Main Battle: Strength 6, Morale 6, Equipment 6
- Primary armored force
- +3 vs infantry/light units
- Balanced capabilities

Heavy Assault: Strength 7, Morale 7, Equipment 7
- Siege warfare, breakthrough operations
- +4 vs fortifications
- -2 movement, requires support
```

#### Support Unit Calculations

**Artillery Units**:
```
Strength = 3 + (Technology Era - 3)
Range = Technology Era × 10 km
Indirect Fire Bonus = +2 (cannot be counter-attacked at range)
Setup Time = 10 - Technology Era minutes
```

**Electronic Warfare Units**:
```
EW Rating = Technology Era + Unit Training + Equipment Quality
Effect Radius = EW Rating × 5 km
Jamming Strength = EW Rating + 2d10 vs target EDR
Power Requirements = (EW Rating × 2) heat per round
```

**Air Support Calculations**:
```
Fighter Wing Strength = 2 + (Aircraft Quality / 2)
Endurance = 3 + (Technology Era - 3) engagements
Air Superiority Bonus = Strength + 2 vs ground units
Vulnerability to AA = -2 defense vs dedicated AA units
```

---

## Combat Resolution Engine

### Action Resolution Framework

#### Modified Starship Action Economy
Mass combat uses adapted starship action structure:

**Command Phase** (= Starship Command Actions):
- **Fleet Coordination**: Like starship "Coordinate Fire"
- **Tactical Analysis**: Like starship "Tactical Analysis"  
- **Battle Orders**: Like starship "Battle Orders"

**Movement Phase** (= Starship Movement):
- **Unit Redeployment**: Like starship "Adjust Course"
- **Formation Change**: Like starship "Drift Maneuver"
- **Emergency Advance**: Like starship "Emergency Thrust"

**Combat Phase** (= Starship Weapons):
- **Direct Engagement**: Like starship "Fire Weapons"
- **Suppressing Fire**: Like starship "Suppressing Fire"
- **Targeted Strike**: Like starship "Targeted Strike"

**Resolution Phase** (= Starship System Management):
- **Damage Control**: Like starship "Emergency Repairs"
- **Morale Check**: Like starship crew casualty saves
- **Objective Assessment**: Like starship mission evaluation

### Combat Calculation Matrix

#### Attack Resolution
```
Attack Roll: 2d10 + Unit Strength + Equipment + Tactical Situation
vs
Defense Number: 10 + (Target Strength + Equipment + Terrain + Morale) / 2

Damage Calculation:
Success Margin 0-2: 1 Strength damage
Success Margin 3-5: 2 Strength damage + morale check
Success Margin 6-8: 3 Strength damage + forced movement
Success Margin 9+: 4 Strength damage + unit broken
```

#### Combined Arms Modifiers
Units fighting together gain bonuses similar to starship crew coordination:

```
Infantry + Armor Support: +2 vs fortified positions
Air + Ground Coordination: +3 vs units without air cover  
Artillery + Forward Spotters: +2 damage, ignore cover
EW + Combat Units: +1 attack, enemy -1 defense
Orbital + Surface Forces: +4 vs unshielded ground units

Coordination Requirements:
- Functioning communication network
- Compatible command structure
- Units within mutual support range
- No major morale differences
```

### Damage and Casualty System

#### Unit Health States
Similar to starship hull damage thresholds:

| Unit Strength | Status | Effects |
|---------------|--------|---------|
| 8-10 | Fresh | No penalties |
| 6-7 | Engaged | -0 to actions |
| 4-5 | Bloodied | -1 to actions |
| 2-3 | Mauled | -2 to actions, morale checks |
| 1 | Broken | -3 to actions, may rout |
| 0 | Destroyed | Unit eliminated |

#### Morale as Secondary Track
Functions like starship heat management:

```
Morale Check Triggers:
- Unit loses 50%+ strength in one engagement
- Commander killed/incapacitated  
- Witnessing allied unit destruction
- Fighting significantly superior enemy
- Cut off from supply/communication

Morale Check: 2d10 + Current Morale + Leadership vs TN 14
Failure: -1 morale
Critical Failure: -2 morale + immediate withdrawal

Morale Effects:
10: Fanatical (immune to morale checks)
8-9: High (reroll failed morale checks)  
6-7: Steady (no modifiers)
4-5: Shaken (-1 to all actions)
2-3: Broken (-2 to all actions, may flee)
0-1: Routed (unit flees battlefield)
```

---

## Hero Integration Systems

### Personal Scale Heroes in Mass Combat

#### Leadership Mechanics
Heroes can influence mass combat through leadership roles:

**Direct Command** (Hero commands unit):
```
Unit receives bonuses:
+ Leadership Bonus = (Hero Presence + Command) / 2
+ Morale Bonus = Hero Presence / 2  
+ Special Abilities = Hero's applicable specializations

Hero Risk Assessment:
Risk Level = Battle Intensity + Unit Role Modifier
Personal Danger Check: 2d10 + Resolve + Survival vs Risk Level
Failure: Hero takes damage per personal combat rules
```

**Inspiring Presence** (Hero visible but not commanding):
```
Inspiration Range = Hero Presence × 100 meters
All friendly units in range: +1 morale
Hero with Command specializations: Additional +1 action bonus

Heroic Action Economy:
- Can perform one personal-scale action per round
- Can issue one unit-level command per round
- Risk increases with aggressive actions
```

#### Special Mission Resolution
Heroes can attempt objectives requiring personal-scale resolution:

**Mission Types**:
- **Sabotage**: Destroy specific targets using personal combat
- **Assassination**: Eliminate enemy commanders
- **Reconnaissance**: Gather intelligence on enemy positions
- **Rescue**: Extract personnel from combat zone
- **Infiltration**: Penetrate enemy lines for strategic advantage

**Mission Resolution**:
1. Set personal-scale difficulty based on mass combat situation
2. Use full personal combat rules for mission
3. Success/failure modifies mass combat state
4. Return to mass combat with changed conditions

#### Hero Scale Impact
Personal actions can influence mass combat outcomes:

```
Sabotage Success: Target unit -2 to next action
Commander Elimination: Enemy loses coordination for 1d3 rounds  
Intelligence Gathering: Friendly forces +1 to next engagement
Successful Rescue: Unit morale +1, enemy morale -1
Infiltration Success: Enable flanking maneuver (+3 to next attack)
```

### Starship Heroes in Mass Combat

#### Squadron Leadership
Starship crews can lead fighter squadrons or small fleets:

**Squadron Command**:
```
Squadron Size = Ship's Command Rating + Captain's Leadership
Squadron Bonuses:
+ Attack = Captain's Combat Skill / 2
+ Defense = Pilot's Coordination / 2
+ Morale = Captain's Presence / 2
+ Electronic Warfare = Science Officer's Tech / 2
```

**Fleet Coordination**:
- Capital ships can coordinate multiple squadrons
- Electronic warfare affects entire engagement zones
- Orbital bombardment supports surface operations
- Supply runs maintain unit effectiveness

#### Cross-Scale Naval Operations
Starships can engage in both starship and mass combat simultaneously:

**Dual-Scale Actions**:
- **Ship vs Ship**: Use starship combat rules
- **Fleet Coordination**: Use mass combat rules
- **Surface Support**: Orbital bombardment affects ground units
- **Electronic Warfare**: Ship EW affects mass combat communications

---

## Multi-Theater Operations

### Theater Definition and Interaction

#### Theater Types and Characteristics
Each theater uses adapted combat mechanics:

**Ground Theater**:
- Base mechanics: Standard mass combat
- Special rules: Terrain effects, urban warfare
- Integration: Air support, orbital bombardment

**Air Theater**:
- Base mechanics: Modified starship combat for atmosphere
- Special rules: Altitude bands, weather effects
- Integration: Ground support, anti-air defenses

**Naval Theater**:
- Base mechanics: Starship combat adapted for water
- Special rules: Weather, submarines, amphibious operations
- Integration: Coastal bombardment, marine landings

**Orbital Theater**:
- Base mechanics: Full starship combat
- Special rules: 3D movement, no atmosphere
- Integration: Surface bombardment, space control

**Information Theater**:
- Base mechanics: Hacking system adapted for warfare
- Special rules: Network penetration, propaganda
- Integration: Communication disruption, intelligence

### Theater Control Effects

#### Superiority Benefits
Control of each theater provides specific advantages:

```
Air Superiority:
- Ground units +2 vs units without air cover
- Artillery +50% range and accuracy
- Supply operations +2 effectiveness
- Enemy movement -2 (harassment)

Orbital Superiority:
- Surface bombardment capability (3d10 damage)
- Perfect intelligence on enemy movements
- Supply drops to any location
- Electronic warfare dominance

Naval Superiority:
- Amphibious assault capability
- Coastal bombardment support
- Supply security over water
- Island/coastal fortress control

Information Superiority:
- Enemy coordination -2 (communication disruption)
- Perfect battlefield intelligence
- Propaganda effects on enemy morale
- Electronic warfare advantages
```

#### Combined Operations
Multiple theater control enables combined arms bonuses:

```
Air + Ground: +3 to breakthrough attacks
Naval + Ground: +4 to amphibious operations  
Orbital + All: +2 to all friendly operations
Information + Any: +1 coordination to all operations
```

### Resource and Logistics Integration

#### Supply Line Management
```
Supply Efficiency = Base (100%) 
+ Distance Modifier (-5% per 100km from base)
+ Theater Control Modifier (+10% per controlled theater)
+ Security Modifier (-10% if supply route threatened)
+ Technology Modifier (+5% per technology era above Industrial)

Unit Supply Status Effects:
- Oversupplied (120%+): +1 to all actions
- Well Supplied (80-119%): No modifiers
- Short Supply (50-79%): -1 to sustained operations
- Cut Off (20-49%): -2 to all actions, equipment degrades
- Starving (0-19%): -3 to actions, strength loss per day
```

---

## Electronic Warfare Integration

### EW Scale Adaptation

#### Theater-Level Electronic Warfare
EW effects from starship combat scale to mass combat level:

**Mass Combat EW Actions**:
```
Communications Jamming (adapted from ECM Suite):
- Effect: All enemy units -2 to coordination
- Range: Theater-wide
- Duration: Concentration
- Counter: ECCM units or communication redundancy

Sensor Disruption (adapted from Sensor Dampener):
- Effect: Enemy intelligence gathering -3
- Range: Battlefield-wide  
- Duration: Concentration
- Counter: Multiple sensor networks

Navigation Jamming (adapted from Tracking Disruptor):
- Effect: Enemy movement actions -2
- Range: Regional
- Duration: Concentration  
- Counter: Non-electronic navigation methods
```

#### EW Unit Integration
Dedicated EW units use adapted starship EW mechanics:

```
EW Unit Statistics:
EW Rating = Technology Era + Unit Training + Equipment Quality
Range = EW Rating × 5 km (theater range)
Power = EW Rating × 2 (heat equivalent for sustained operations)

EW Unit Actions:
- Signal Intelligence: Gain enemy unit positions and strength
- Electronic Attack: Degrade enemy command and control
- Electronic Protection: Defend friendly communication networks
- Cyber Operations: Disrupt enemy digital infrastructure
```

### Network Warfare

#### Command Network Attacks
Using hacking system mechanics for military networks:

```
Military Network Zones:
- Public: Open communication channels
- Secure: Encrypted military communications  
- Admin: Command and control networks
- Core: Strategic command systems
- Black: Nuclear/strategic weapon control

Network Penetration:
Base TN = 10 + Network Security + Military Encryption
Success: Gain access to network zone
Critical: Plant persistent access for future use
Failure: Generate Heat (attention from network security)
Critical Failure: Trace (counter-intelligence response)
```

#### Information Operations
```
Propaganda Warfare:
Target: Enemy unit morale
Check: 2d10 + Intellect + Social + Information Warfare vs Enemy Morale + Command
Success: Target unit -1 morale
Critical: Target unit -2 morale + spreads to adjacent units

Counter-Intelligence:
Target: Enemy information gathering
Check: 2d10 + Intellect + Tech + Security Rating vs Enemy Intelligence
Success: Prevent intelligence gathering
Critical: Feed false information to enemy
```

---

## Command & Control Systems

### Command Structure Mechanics

#### Hierarchy and Control
Command structure affects unit coordination and effectiveness:

```
Command Levels:
Squad/Section (10-30): +0 coordination
Platoon/Flight (30-100): +1 coordination  
Company/Squadron (100-300): +2 coordination
Battalion/Wing (300-1000): +3 coordination
Regiment/Group (1000-3000): +4 coordination
Division/Fleet (3000+): +5 coordination

Coordination Benefits:
- Combined arms bonuses
- Simultaneous unit actions
- Complex maneuver execution
- Resource sharing between units
```

#### Communication Network
```
Network Integrity Levels:
Full Network (100%): All coordination bonuses apply
Partial Network (75%): -1 to coordination actions
Degraded Network (50%): -2 to coordination, limited complex maneuvers
Disrupted Network (25%): -3 to coordination, no combined arms
Network Down (0%): No coordination, units act independently

Network Degradation Causes:
- Electronic warfare attacks
- Physical destruction of communication equipment
- Extreme weather or environmental interference
- Cyber attacks on communication networks
- Command structure casualties
```

### Leadership Effects

#### Commander Characteristics
Commanders provide bonuses similar to starship captains:

```
Commander Ratings (similar to starship captain abilities):
Legendary (+4): Historical great commanders
- Can rally any broken unit automatically
- +2 to all subordinate unit actions
- Can coordinate complex multi-unit maneuvers

Exceptional (+3): Natural military genius  
- Reroll one failed unit action per round
- +1 to all subordinate unit morale
- Can attempt risky tactical innovations

Veteran (+2): Experienced professional
- Standard coordination bonuses
- Can rally broken units on successful Command check
- Tactical knowledge grants situational bonuses

Competent (+1): Basic military training
- Reduced coordination bonuses
- Limited ability to handle complex situations
- Adequate for routine operations

Poor (-1): Inadequate leadership
- Penalty to coordination actions
- Units may ignore orders on failed morale checks
- Cannot attempt complex maneuvers

Incompetent (-2): Actively harmful leadership
- Significant penalties to all subordinate actions
- Units may mutiny or abandon positions
- Enemy gains intelligence from poor decisions
```

#### Command Actions
```
Standard Actions (adapted from starship captain actions):

Coordinate Attack (similar to starship "Coordinate Fire"):
- 2-4 units attack same target
- Each unit gains +1 to attack
- Requires functioning communication network
- Duration: This engagement

Tactical Analysis (similar to starship "Tactical Analysis"):
- Identify enemy weakness or opportunity
- Intelligence + Command vs TN 14 + Enemy Security
- Success: All attacks vs target +2 damage next round
- Critical: Additional +1 morale to all friendly units

Battle Orders (similar to starship "Battle Orders"):
- Change tactical stance for multiple units
- Aggressive: +2 attack, -2 defense
- Defensive: -2 attack, +2 defense  
- Balanced: No modifiers
- Takes effect next round

Move Actions:
Emergency Orders: One unit acts immediately out of sequence
Rally Troops: Attempt to restore broken unit to operational status
Tactical Redeployment: Move unit without combat penalty

Quick Actions:
Inspire Unit: One unit gains +1 morale this round
Call Support: Request artillery/air/orbital support
Situational Awareness: +1 to next tactical decision
```

---

## Logistics & Campaign Integration

### Strategic Resource Management

#### Supply System Mechanics
```
Base Supply Generation:
Industrial Base × Technology Multiplier × Control Factor

Technology Multipliers:
Industrial: ×1 (basic manufacturing)
Information: ×1.5 (improved logistics)
Fusion: ×2 (advanced materials)  
Stellar: ×3 (automated production)
Cosmic: ×4 (reality-level manufacturing)

Control Factors:
Secure Territory: ×1.0
Contested Territory: ×0.7
Enemy Territory: ×0.3
Besieged: ×0.1

Supply Consumption:
Unit Strength × Activity Level × Technology Requirements

Activity Levels:
Rest/Refit: ×0.5 consumption
Patrol/Security: ×1.0 consumption
Active Combat: ×2.0 consumption
Sustained Operations: ×3.0 consumption
```

#### Attrition and Reinforcement

**Daily Attrition Rates**:
```
Combat Operations: 5-10% strength loss
- Modified by: Unit training, enemy strength, terrain
- Medical support reduces by 50%
- Poor supply increases by 100%

Non-Combat Operations: 1-2% strength loss
- Equipment wear, accidents, minor injuries
- Good maintenance reduces to 0.5%
- Hostile environment increases to 5%

Recovery Rates:
Rest with Medical: +5% strength per day
Refit with Supplies: +3% strength per day  
Combat Replacements: +2% strength per day
Veteran Transfers: +1% strength, +0.5 training per week
```

### Campaign Timeline Integration

#### Strategic Movement
```
Movement Rates (per day, modified by terrain and opposition):

Infantry:
- Road March: 30 km/day
- Cross Country: 20 km/day  
- Difficult Terrain: 10 km/day
- Forced March: +50% distance, +2 attrition

Mechanized:
- Road: 300 km/day
- Cross Country: 100 km/day
- Difficult Terrain: 50 km/day
- Combat Operations: 50 km/day

Air Mobile:
- Strategic: 1000+ km/day
- Tactical: 500 km/day
- Combat Operations: 200 km/day
- Limited by fuel and landing zones

Naval:
- Open Ocean: 500 km/day
- Coastal: 300 km/day  
- Rivers: 100 km/day
- Combat Operations: 200 km/day

Space Forces:
- System: 10,000+ km/day
- Interplanetary: 100,000+ km/day
- Interstellar: Use Drift travel system
- Limited by fuel and supply
```

#### Long-Term Campaign Effects
```
Victory Consequences:
Decisive Victory (3:1+ VP ratio):
- Enemy force destroyed or captured
- Territory control shifted dramatically
- Strategic objectives achieved
- Campaign momentum strongly favorable

Major Victory (2:1 VP ratio):
- Enemy force withdraws with heavy losses
- Significant territory gained
- Primary objectives achieved
- Campaign momentum favorable

Minor Victory (1.5:1 VP ratio):
- Enemy force forced to defensive posture
- Limited territory gained
- Some objectives achieved
- Slight campaign momentum shift

Draw (1:1.5 ratio):
- Both forces consolidate positions
- No territory change
- No clear strategic advantage
- Campaign continues

Defeat: Apply enemy victory effects to friendly forces
```

---

## Technical Implementation

### Conversion Algorithms

#### Personal → Mass Combat Scale
```
Converting Individual Characters to Unit Statistics:

Unit Strength Calculation:
Base = 3 (standard unit)
+ (Average Character Combat Skill - 5) 
+ (Average Character Equipment Quality - 5)
+ Special Training Modifiers

Unit Morale Calculation:  
Base = 5 (average)
+ (Leader's Presence - 5)
+ Unit Experience Modifier
+ Equipment Quality Modifier

Example: Elite Marine Unit
- Characters: Combat 7, Equipment 8, Leader Presence 8
- Unit Strength = 3 + 2 + 3 = 8
- Unit Morale = 5 + 3 + 2 + 1 = 11 (capped at 10)
```

#### Starship → Mass Combat Scale
```
Converting Individual Starships to Squadron Statistics:

Squadron Strength = Total Hull Points / 20
Squadron Equipment = Average Ship Technology Rating
Squadron Command = Best Captain's Leadership Rating
Squadron Morale = Average Crew Morale

Example: Cruiser Squadron (3 ships, 80 hull each)
- Squadron Strength = (80+80+80) / 20 = 12
- Squadron Equipment = 6 (Stellar Era average)
- Squadron Command = 8 (best captain)
- Squadron Morale = 7 (crew average)
```

### Damage Translation

#### Cross-Scale Damage Conversion
```
Personal Weapons vs Mass Combat Units:
Personal Weapon Damage → Unit Effect
Standard Personal Weapon: No significant effect
Heavy Personal Weapon: TN 20 to cause 1 Unit damage
Explosive/Sabotage: TN 14 to cause 1d3 Unit damage
Starship Weapon: 2d6 Unit damage (overwhelming firepower)

Mass Combat vs Personal Scale:
Unit Strength → Personal Damage Multiplier
Strength 1-3: 1d6 personal damage
Strength 4-6: 2d6 personal damage  
Strength 7-9: 3d6 personal damage
Strength 10: 4d6 personal damage

Technology Era Multipliers:
Industrial: ×1
Information: ×1.5
Fusion: ×2
Stellar: ×3
Cosmic: ×4
```

### Time Scale Coordination

#### Action Resolution Timing
```
Mass Combat Round = 10 minutes real time
- Allows for detailed personal/starship actions within mass combat
- Heroes can perform multiple personal actions per mass round
- Starship combat occurs simultaneously with mass combat

Personal Combat Integration:
10 minutes = 100 personal combat rounds (6 seconds each)
Heroes can accomplish significant personal missions
Personal combat fatigue applies normally
Medical attention possible between engagements

Starship Combat Integration:  
10 minutes = 100 starship combat rounds (6 seconds each)
Extended starship engagements fit within mass combat
Heat management operates across multiple starship rounds
Ammunition consumption tracked across extended engagement
```

---

## Advanced Mechanics

### Combined Scale Operations

#### Simultaneous Multi-Scale Combat
When multiple scales operate simultaneously:

**Priority Resolution Order**:
1. Mass Combat Command Phase (strategic decisions)
2. Starship Combat Resolution (fleet engagements)
3. Personal Combat Resolution (hero special missions)
4. Mass Combat Effects Application (integrate results)

**Information Flow**:
```
Personal Scale Intel → Tactical Advantage (+1 to mass combat)
Starship Scale Success → Strategic Advantage (+2 to related mass combat)
Mass Combat Victory → Campaign Advantage (affects future engagements)

Example: Orbital Assault
1. Mass Combat: Army lands on planet (strategic level)
2. Starship Combat: Fleet engages orbital defenses (tactical level)
3. Personal Combat: Heroes sabotage ground-based guns (mission level)
4. Integration: Successful sabotage grants fleet +3 vs ground defenses
```

#### Cross-Scale Support Actions
```
Orbital Bombardment (Starship → Mass Combat):
Starship Action: Fire Weapons (Standard Action)
Mass Combat Effect: Target unit takes 3d10 damage
Requirements: Target acquisition, orbital superiority
Limitations: Cannot target units in close combat with friendlies

Air Support (Starship → Mass Combat):
Vehicle Scale Action: Attack Run (Standard Action)  
Mass Combat Effect: +3 to friendly ground unit attack
Requirements: Air superiority, communication network
Limitations: Limited ammunition, vulnerable to anti-air

Special Operations (Personal → Mass Combat):
Personal Scale Mission: Complete objective using personal combat
Mass Combat Effect: Various based on mission success
Examples: Sabotage (-2 to enemy unit), Assassination (enemy loses command), Intelligence (+1 to friendly coordination)
Requirements: Hero infiltration, mission completion
Limitations: High personal risk, limited strategic impact
```

### Environmental Integration

#### Multi-Environment Battlefields
```
Environment affects all scales simultaneously:

Electromagnetic Storm:
- Personal: Electronic equipment -2 reliability  
- Starship: Sensors -3, communications disrupted
- Mass Combat: Electronic warfare ineffective, coordination -2

Zero Gravity Environment:
- Personal: Movement rules modified, orientation challenges
- Starship: Standard operations (designed for space)
- Mass Combat: Traditional tactics ineffective, 3D battlefield

Toxic Atmosphere:
- Personal: Environmental suits required, time limitations
- Starship: Sealed systems provide protection
- Mass Combat: Unprotected units take attrition damage

Extreme Weather:
- Personal: Visibility and movement penalties
- Starship: Atmospheric craft affected, space operations normal
- Mass Combat: Air operations impossible, ground movement reduced
```

### Electronic Warfare Deep Integration

#### Network-Centric Warfare
```
Information Networks span all scales:

Personal Scale Network Access:
- Heroes can hack into tactical networks
- Affects mass combat coordination
- Provides intelligence advantages
- Enables sabotage operations

Starship Scale Network Warfare:
- Ship EW systems affect fleet coordination
- Can disrupt enemy mass combat command
- Provides tactical intelligence to ground forces
- Enables precision targeting for orbital support

Mass Combat Network Effects:
- Command network integrity affects all operations
- Electronic warfare units affect multi-scale coordination
- Information superiority provides campaign advantages
- Cyber operations can achieve strategic objectives

Integration Example: Information Assault
1. Personal: Hacker infiltrates enemy command network
2. Starship: EW ship exploits network vulnerability
3. Mass Combat: Enemy coordination collapses (-3 to all actions)
4. Result: Synchronized attack achieves breakthrough
```

---

## Example Conversions

### Personal Scale → Mass Combat

#### Converting Player Characters to Unit Leaders
```
Example: Captain Sarah Chen
Personal Stats: Presence 7, Command Skill 4, Combat 6
Equipment: Military uniform, advanced communicator, sidearm

Unit Leadership Effects:
Unit Strength Bonus: (7 + 4) / 2 = +5 (exceptional leader)
Unit Morale Bonus: 7 / 2 = +3 (inspiring presence)  
Unit Coordination: Standard Command actions available
Special: Can perform one personal action per mass combat round

Risk Assessment:
Battle Intensity: 8 (major engagement)
Personal Risk TN: 8 + 5 (leading from front) = 13
Sarah's Defense: 2d10 + 5 (Resolve) + 3 (Survival) + 2 (armor) = 12.5 average
Risk Level: Moderate (40% chance of personal danger per round)
```

#### Squad-Level Unit Creation
```
Example: Elite Marine Squad (8 marines + sergeant)
Individual Stats: Average Combat 6, Equipment 7, Morale 7

Unit Conversion:
Base Strength: 3 (standard unit)
Training Bonus: +2 (elite marines)
Equipment Bonus: +2 (advanced gear)  
Leadership Bonus: +1 (competent sergeant)
Total Unit Strength: 8

Unit Morale: 5 + 2 (high individual morale) + 1 (good leadership) = 8
Unit Equipment: 7 (high-tech gear)
Special Abilities: Can attempt special operations, +1 vs standard infantry
```

### Starship Scale → Mass Combat

#### Fighter Squadron Conversion
```
Example: Red Squadron (12 Stellar-era fighters)
Individual Ships: Hull 15, Pilot Skill 5, Weapons 3

Squadron Conversion:
Squadron Strength: (15 × 12) / 20 = 9
Squadron Equipment: 6 (Stellar era)
Squadron Command: 6 (best pilot's skill + leadership)
Squadron Morale: 7 (veteran pilots)

Special Rules:
- Fast: +3 to movement actions
- Limited Endurance: 3 engagements per battle
- Air Superiority: +2 vs ground units without air cover
- Vulnerable: -2 defense vs dedicated anti-air units
```

#### Capital Ship Integration
```
Example: CNS Endeavor (Stellar-era cruiser)
Ship Stats: Hull 120, Captain Leadership 8, Crew Morale 7

Mass Combat Integration:
Functions as individual unit (too valuable for squadron)
Unit Strength: 120 / 20 = 6 (moderate ground unit equivalent)
Special Abilities:
- Orbital Bombardment: 3d10 damage vs surface units
- Fleet Command: Can coordinate up to 5 squadron units
- Electronic Warfare: Ship EW affects entire battlefield
- Strategic Mobility: Can reposition between theaters rapidly

Vulnerability: If destroyed, significant campaign impact
```

### Mass Combat → Personal Scale

#### Zooming into Personal Action
```
Example: Infiltration Mission During Battle

Mass Combat Context:
Allied infantry unit (Strength 6) attacking enemy fortification (Strength 8)
Current attack modifier: -2 (defending fortification bonus)
Stakes: If attack fails, allied offensive stalls

Personal Mission: Disable defensive turret
Hero: Agent Martinez (Stealth 7, Tech 6, Explosives 5)

Personal Scale Resolution:
1. Stealth approach: TN 14 (alert defenders)
2. Disable security: TN 17 (high-tech systems)  
3. Plant charges: TN 11 (straightforward with right equipment)
4. Escape: TN 14 (pursuit likely)

Results Integration:
Success: Enemy fortification -2 Strength, allied attack gets +2 bonus
Failure: No effect, hero may be captured/killed
Critical Success: Turret turns on enemy, allied attack gets +4 bonus
Critical Failure: Explosives detonate early, allied attack -1 (friendly fire)
```

#### Unit Casualty to Personal Impact
```
Example: Command Unit Under Fire

Mass Combat: Elite command unit (Strength 5) takes 3 damage from artillery
Unit reduced to Strength 2, morale check required

Personal Scale Translation:
Command post hit by artillery barrage
Individual damage: 3d6 to each person in command post
Saving throws required for all personnel
Commander (hero) must make Resolve + Survival TN 17 or take damage

Story Integration:
Unit statistics represent aggregate effect
Personal stories emerge from mass combat results
Hero actions can mitigate or worsen unit casualties
Command decisions have personal consequences
```

---

## Version History

- **v1.0** (2025-01-25): Created comprehensive technical integration guide
- **v1.0** (2025-01-25): Documented cross-scale mechanical interactions
- **v1.0** (2025-01-25): Established conversion algorithms and examples
- **v1.0** (2025-01-25): Integrated with existing starship and personal combat systems