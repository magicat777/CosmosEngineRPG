# Starship Combat Technical Guide
*Complete Rules Reference for Space Combat & Electronic Warfare*

## Table of Contents

1. [Core Mechanics](#core-mechanics)
2. [Detection & Positioning](#detection--positioning)
3. [Initiative & Actions](#initiative--actions)
4. [Movement & Momentum](#movement--momentum)
5. [Heat Management](#heat-management)
6. [Crew Roles & Actions](#crew-roles--actions)
7. [Weapons & Damage](#weapons--damage)
8. [Shields & Defenses](#shields--defenses)
9. [Electronic Warfare](#electronic-warfare)
10. [Fleet Combat](#fleet-combat)
11. [Quick Reference Tables](#quick-reference-tables)
12. [Example Scenarios](#example-scenarios)

---

## Core Mechanics

### Basic Resolution
All starship combat uses the standard Cosmos Engine mechanic:
```
2d10 + Attribute + Skill + Equipment + Situation vs Target Number
```

### Scale Integration
- **Starship Scale**: Primary combat scale
- **Personal Scale**: Crew actions use personal attributes/skills
- **Capital Scale**: Fleet engagements and massive ships
- **Cross-Scale**: -3 penalty per scale difference

### Key Attributes by Role
- **Captain**: Presence (Command), Intellect (Tactics)
- **Pilot**: Coordination (Maneuvering), Awareness (Navigation)
- **Gunner**: Coordination (Targeting), Combat skill
- **Engineer**: Intellect (Systems), Tech skill
- **Science**: Intellect (Analysis), Tech skill

---

## Detection & Positioning

### Sensor Systems

#### Detection Ranges
| Sensor Mode | Range | Detection Capability | Reveals Position |
|-------------|-------|---------------------|------------------|
| Passive | 10,000 km | Active emissions only | No |
| Active | 100,000 km | All ships | Yes |
| Focused Scan | 50,000 km | Detailed information | Yes |
| Stealth Scan | 1,000 km | Penetrates silent running | Partially |

#### Sensor Checks
**Basic Detection**: 2d10 + Awareness + Tech + Ship Sensors vs Stealth TN
- **Stealth TN**: 10 + enemy's Tech + Stealth Systems + Situation
- **Success**: Detect presence and range
- **+5 Success**: Identify ship class
- **+10 Success**: Detailed scan (weapons, damage, crew)

#### Stealth & Countermeasures
**Silent Running**:
- +3 to Stealth TN
- Cannot use active sensors
- No heat dissipation
- -2 to own sensor checks

**Sensor Ghosts**:
- Tech check TN 14 to create false contacts
- 1d3 false signatures per success
- Lasts 10 minutes

### Positioning Phase

#### Initial Positioning
**Positioning Check**: 2d10 + Pilot + Ship Maneuverability
- **Winner**: Chooses starting range
- **Winner**: Gains +2 Initiative
- **Margin 5+**: Surprise round
- **Tie**: Default to Long range

#### Environmental Effects
| Environment       | Effect |
|-------------      |--------|
| Asteroid Field    | +2 concealment, -1 to weapons, cover available |
| Nebula            | -2 sensors, +1 stealth, blocks long-range targeting |
| Gravity Well      | -2 to change momentum, slingshot maneuvers possible |
| Debris Field      | Light to Heavy cover available, navigation hazards |
| Solar Flare       | +3 heat per round, -1 to sensors |

---

## Initiative & Actions

### Initiative Determination
**Ship Initiative**: 2d10 + Best Crew Awareness + Ship Sensors
- Ships act as single unit
- Can delay to coordinate with allies
- Can interrupt with Pilot check TN 17

### Action Economy Per Turn
Each crew member gets:
- **1 Standard Action**: Primary task
- **1 Move Action**: Secondary task
- **Any Quick Actions**: Minor tasks
- **Any Free Actions**: Trivial tasks
- **Reactions**: Based on technology/abilities

### Multi-Role Penalties
When one person fills multiple roles:
- First role: No penalty
- Second role: -2 to all actions
- Third role: -4 to all actions
- Fourth+ roles: -6 to all actions

---

## Movement & Momentum

### Momentum Points (MP)
Represents current velocity and vector:
- **Range**: -10 to +10
- **Positive**: Forward movement
- **Negative**: Reverse movement
- **Zero**: Relative stop

### Momentum Effects

#### Maneuverability by Momentum
| Current MP | Direction Change TN  | Notes |
|-----------|-------------------    |-------|
| 0-3       | 11                    | Easy to maneuver |
| 4-6       | 14                    | Standard difficulty |
| 7-9       | 17                    | Hard to change vector |
| 10        | 20                    | Extreme velocity |

#### Using Momentum
**Closing Distance**:
- Add current MP to range bands moved
- Example: MP 5 = move 5 range bands toward target

**Breaking Away**:
- MP adds to escape distance
- Opposed Pilot checks if pursued

**Evasive Patterns**:
- High MP grants +1 Defense per 3 MP
- Represents unpredictable vector

**Ramming**:
- Damage = MP × Ship Mass Category
- Both ships take damage
- Pilot check to hit

### Thrust Ratings by Ship Class
| Ship Class    | Thrust    | Max Safe MP |
|------------   |--------   |-------------|
| Fighter       | 4         | 10 
| Shuttle       | 3         | 8 
| Freighter     | 2         | 6 
| Corvette      | 3         | 8 
| Cruiser       | 1         | 6 
| Capital       | 1         | 4 

---

## Heat Management

### Heat Capacity
| Ship Class    | Capacity  | Dissipation/Round  | Emergency Vent
|------------   |---------- |------------------- |----------------
| Fighter       | 10        | 3                 | 5 
| Shuttle       | 15        | 3                 | 5 
| Freighter     | 20        | 4                 | 8 
| Corvette      | 30        | 5                 | 10 
| Cruiser       | 40        | 6                 | 12 
| Capital       | 80        | 10                | 20 

### Heat Generation Sources
| Source                    | Heat Generated
|--------                   |---------------
| Energy Weapon (Light)     | 1 
| Energy Weapon (Medium)    | 2 
| Energy Weapon (Heavy)     | 3 
| Overcharge Action         | 3-5 
| Shield Absorption         | 1 per 10 damage
| System Boost              | 3
| Silent Running            | 0 dissipation
| Environmental             | Varies

### Heat Consequences
| Heat Level    | Effect |
|------------   |--------|
| 0-49%         | Normal operation 
| 50-74%        | -1 to all actions 
| 75-99%        | -2 to all actions 
| 100%          | Emergency shutdown required 
| 101-150%      | 1d6 system damage per round 
| 151%+         | Catastrophic failure

### Heat Management Options
**Emergency Venting** (Standard Action):
- Vent heat equal to emergency vent value
- Ship suffers -2 Defense for 1 round
- Visible heat signature (breaks stealth)

**Gradual Cooling** (Automatic):
- Dissipate heat equal to dissipation rating
- No penalties or visibility

**Heat Sinks** (Equipment):
- Store heat for later venting
- Limited capacity
- Can "dump" heat sinks as decoys

---

## Crew Roles & Actions

### Captain/Commander

#### Standard Actions
**Coordinate Fire**:
- All gunners gain +1 to attack rolls
- Requires: Functioning communications
- Duration: This round

**Inspire Crew**:
- All crew gain +1 to next roll
- Requires: Presence + Command TN 14
- Limit: Once per combat

**Tactical Analysis**:
- Identify enemy weakness
- Intellect + Tactics TN 17
- Success: All attacks +1 damage vs target

#### Move Actions
**Demand Excellence**:
- One crew member may reroll failed check
- Cost: Crew takes 1 stress
- Limit: 3 times per combat

**Battle Orders**:
- Change ship's tactical stance
- Options: Aggressive (+2 attack, -2 defense)
- Options: Defensive (-2 attack, +2 defense)
- Options: Balanced (normal)

#### Free Actions
**All Ahead Full**: +2 Thrust this round, 3 heat
**Brace for Impact**: Crew gains +2 vs casualty saves
**Open Channel**: Communicate with any ship

### Pilot

#### Standard Actions
**Evasive Maneuvers**:
- Ship gains +2 Defense
- Ship suffers -1 to attacks
- Cost: 2 Momentum points

**Attack Vector**:
- Ship gains +2 to attacks
- Ship suffers -2 Defense
- Requires: Pilot + Combat check TN 14

**Ramming Speed**:
- Ram target ship
- Damage: Momentum × Mass difference
- Both ships damaged

#### Move Actions
**Adjust Course**:
- Change MP by ship's Thrust
- TN based on current momentum
- Can reverse direction at MP 0

**Drift Maneuver**:
- Coast without thrust
- Maintain current MP
- +2 Defense vs guided weapons
- Cannot change direction

**Emergency Thrust**:
- Double Thrust for one action
- Cost: 5 heat, equipment check

#### Quick Actions
**Barrel Roll**: +1 Defense until next turn
**Adjust Trim**: +1 to next Pilot check
**Vector Thrust**: Change facing without moving

### Gunner

#### Standard Actions
**Fire Weapons**:
- Attack: 2d10 + Coordination + Combat + Weapon
- Can link similar weapons
- Apply range modifiers

**Targeted Strike**:
- Attack specific subsystem
- -2 to attack roll
- Must overcome shields first
- Success disables system

**Suppressing Fire**:
- Create danger zone
- -2 to enemies entering area
- Uses 3× normal ammo/heat
- Lasts until next turn

#### Move Actions
**Acquire Lock**:
- Required for missiles/torpedoes
- Intellect + Combat vs Defense
- Lock maintained until broken

**Predictive Targeting**:
- Study enemy patterns
- +1 to next attack
- Cumulative (max +3)

**Switch Weapons**:
- Change active weapon system
- Required for different weapon types

#### Quick Actions
**Fine Tuning**: +1 to next shot
**Snapshot**: Attack at -2 as quick action
**Clear Jam**: Fix weapon malfunction

### Engineer

#### Standard Actions
**System Boost**:
Choose one system to overcharge:
- Weapons: +2 damage
- Shields: +2 strength all facings
- Engines: +2 Thrust rating
- Sensors: Double range
Cost: 3 heat, lasts 3 rounds

**Emergency Repairs**:
- Fix one damaged system
- Engineering + Tech TN 14
- Success: System operational
- Critical: Also restore 10% hull

**Power Reallocation**:
- Redistribute power points
- Can disable systems for more power
- Takes effect next round

#### Move Actions
**Redistribute Shields**:
- Move points between facings
- 2:1 transfer ratio
- Maximum: Double normal strength

**Damage Control**:
- Prevent system degradation
- Engineering check TN 11
- Success: No additional damage this round

**Boost Efficiency**:
- Reduce heat generation by 1
- Lasts 3 rounds
- Cannot stack

#### Quick Actions
**Monitor Systems**: +1 to next Engineering check
**Vent Coolant**: Remove 2 heat
**Cycle Power**: Restart disabled system

### Science Officer/EW Specialist

#### Standard Actions
**Sensor Analysis**:
- Deep scan of target
- Learn: Weapons, damage, crew status
- Grants allies +1 to attacks

**Electronic Warfare** (see EW section for full details):
- Jamming (break locks)
- Target painting (+3 signature)
- Sensor dampening (reduce range)

**Calculate Jump**:
- Prepare FTL escape
- Tech + Intellect TN 17
- Takes full round
- Blocked by warp disruptors

#### Move Actions
**Focused Scan**:
- Penetrate stealth/jamming
- +2 to sensor checks
- Reveals your position

**Countermeasures**:
- Deploy chaff/flares
- +2 Defense vs missiles
- Creates sensor noise

**Boost Sensors**:
- +10,000km detection range
- Lasts 5 rounds
- 1 heat per round

#### Quick Actions
**Tag Target**: Mark for allies (+1 to hit)
**Sensor Ping**: Quick active scan
**Adjust Frequencies**: +1 vs jamming

---

## Weapons & Damage

### Weapon Categories

#### Kinetic Weapons
**Properties**:
- No heat generation
- Limited ammunition
- Ignores energy shields
- Full damage at all ranges

**Types**:
| Weapon | Damage | Ammo | Special |
|--------|--------|------|---------|
| Autocannon | 1d8 | 100 | Rapid fire |
| Railgun | 2d6 | 50 | Armor piercing |
| Mass Driver | 3d6 | 20 | Siege weapon |

#### Energy Weapons
**Properties**:
- Generates heat (1-3 per shot)
- Unlimited ammunition
- Reduced by shields first
- -1 damage per range increment

**Types**:
| Weapon        | Damage    | Heat  | Special |
|--------       |--------   |------ |---------|
| Laser         | 1d10      | 1     | Precise |
| Plasma        | 2d8       | 2     | Burn chance |
| Particle Beam | 3d8       | 3     | Shield piercing |

#### Missiles/Torpedoes
**Properties**:
- Requires target lock
- Can be shot down (Defense 15)
- Ignores range penalties
- Limited ammunition

**Types**:
| Weapon | Damage | Ammo | Special |
|--------|--------|------|---------|
| Missiles | 2d10 | 20 | Guided |
| Torpedoes | 3d10 | 8 | Slow but devastating |
| Swarm Missiles | 1d10×5 | 5 | Multiple targets |

### Weapon Mounts
| Mount Type    | Arc           | Modifier |
|------------   |-----          ----------|
| Fixed         | Forward 90°   | +1 damage |
| Turret        | 360°          | Standard |
| Broadside     | Side 180°     | Can link fire |
| Spinal        | Forward 30°   | +2 damage, -1 to hit |

### Damage Resolution

#### Attack Roll
```
2d10 + Coordination + Combat + Weapon Bonus + Situation vs Defense
```

#### Range Modifiers
| Range     | Distance      | Modifier |
|-------    |----------     |----------|
| Close     | <1 km         | +1 |
| Short     | 1-10 km       | +0 |
| Medium    | 10-100 km     | -1 |
| Long      | 100-1000 km   | -2 |
| Extreme   | 1000+ km      | -3 |

#### Critical Hit Effects (Natural 20)
Roll 1d10 or choose:
| Roll | Effect |
|------|--------|
| 1-2 | Maximum damage |
| 3-4 | Bypass shields/armor |
| 5-6 | Disable random subsystem |
| 7-8 | Cause secondary explosion (+1d6 damage) |
| 9-10 | Crew casualties (1d6 to random department) |

#### Damage Application
1. Energy weapons hit shields first
2. Kinetic weapons bypass shields
3. Remaining damage to hull
4. Check for threshold effects
5. Roll for system damage if applicable

---

## Shields & Defenses

### Shield Configuration
Ships have four shield facings:
- **Fore**: Front 90° arc
- **Aft**: Rear 90° arc  
- **Port**: Left 90° arc
- **Starboard**: Right 90° arc

### Shield Properties
| Property          | Value |
|----------         |-------|
| Absorption        | Energy damage only |
| Heat Generation   | 1 per 10 damage absorbed |
| Regeneration      | 10% per round (round down) |
| Overcharge Limit  | 200% normal strength |
| Bleedthrough      | 10% damage at 0 shields |

### Shield Management

#### Redistribution (Move Action)
- Transfer ratio: 2:1 (lose 2 to gain 1)
- Maximum strength: 200% normal
- Can create "shield holes" (0 on facing)

#### Angling (Free Action)
- Predict attack direction
- Correct guess: +1 shield strength
- Wrong guess: -1 shield strength
- Declare before attacks resolved

#### Reinforcement (Engineering Action)
- Boost one facing +2
- Lasts 3 rounds
- Costs 3 heat

### Defense Calculations

#### Physical Defense
```
10 + Pilot's Coordination + Ship Size + Active Maneuvers
```

**Ship Size Modifiers**:
- Fighter: +2
- Shuttle/Freighter: +0
- Corvette: -1
- Cruiser: -2
- Capital: -4

#### Electronic Defense (EDR)
```
10 + Intellect + EDEF Systems + Situation
```

**Signature Radius Modifiers**:
- Silent Running: -3 EDR
- Normal Operation: +0 EDR
- Active Sensors: +2 EDR
- Overcharged: +3 EDR
- Using Jump Drive: +5 EDR

### Damage Resistance

#### Armor
- Reduces all damage types
- No heat generation
- Cannot be redistributed
- Degrades over time

**Armor by Tech Era**:
| Era | Light | Medium | Heavy |
|-----|-------|--------|-------|
| Industrial | 1 | 2 | 3 |
| Information | 2 | 3 | 4 |
| Fusion | 3 | 4 | 5 |
| Stellar | 4 | 5 | 6 |

### Ship Health States
| State | Hull % | Effects |
|-------|---------|---------|
| Operational | 100-75% | No penalties |
| Damaged | 74-50% | -1 to all ship actions |
| Crippled | 49-25% | -2 actions, half speed, one system offline |
| Critical | 24-10% | -3 actions, multiple systems failing |
| Destroyed | 9-0% | Abandon ship immediately |

### System Damage
When ship takes threshold damage (25% in one hit) or has no shields:

**System Damage Table** (2d10):
| Roll | System | Disabled Effect |
|------|--------|----------------|
| 2-3 | Weapons | Cannot fire |
| 4-5 | Engines | Half speed, -2 maneuvers |
| 6-7 | Shields | No regeneration |
| 8-9 | Sensors | -4 to relevant actions |
| 10-11 | Life Support | Crew saves vs environment |
| 12-13 | Power Core | All systems -1 |
| 14-15 | Communications | Cannot coordinate |
| 16-17 | Jump Drive | Cannot FTL |
| 18-19 | Cargo/Crew Area | Morale check |
| 20 | Bridge | All actions -2 |

### Crew Casualties
**When ship reaches damage threshold**:
- **Damaged**: Coordination save TN 11 or stunned 1 round
- **Crippled**: Might save TN 14 or 1d6 damage
- **Critical**: Might save TN 17 or 2d6 damage
- **Destroyed**: Might save TN 20 or death

---

## Electronic Warfare

### EW Fundamentals

#### Electronic Warfare Rating (EWR)
```
Base EWR = Intellect + Tech + Ship's EW Suite
```

**EW Suite Bonuses**:
- Basic: +0 to +2
- Military: +3 to +5
- Specialized: +6 to +8

#### Electronic Defense Rating (EDR)
```
Base EDR = 10 + Intellect + EDEF Systems
```

Modified by Signature Radius (see above)

### Focus Requirements
Most EW requires dedicating ship resources:
- **Light Focus**: Can still take Move actions
- **Heavy Focus**: Only Free actions allowed
- **Total Focus**: No other actions, +2 EW bonus

### Offensive EW Systems

#### Warp Disruptor
**Purpose**: Prevent FTL escape
**Activation**: Standard Action + Heavy Focus
**Check**: EWR vs target's EDR
**Range**: Short to Medium
**Effect**: Target cannot jump/warp
**Duration**: Maintained with Heavy Focus
**Counter**: Warp Core Stabilizers (+3 EDR)
**Heat**: 2 per round

**Variants**:
- **Scrambler**: Close range, +2 EWR
- **Interdictor**: Area effect bubble
- **Focused Point**: Long range, single target

#### ECM Suite
**Purpose**: Blind sensors and break locks
**Activation**: Standard Action + Heavy Focus
**Check**: EWR vs EDR
**Range**: Long
**Effects** (choose one):
- Sensor Jam: -4 to detection/targeting
- Lock Break: Cancel all target locks
- Comm Jam: No coordination
- Nav Jam: -2 to Pilot checks
**Duration**: Concentration
**Counter**: ECCM (+3 EDR)
**Heat**: 3 per round

#### Target Painter
**Purpose**: Increase target signature
**Activation**: Move Action + Light Focus
**Check**: EWR vs EDR
**Range**: Medium to Long
**Effect**: +3 to target's signature radius
**Duration**: 3 rounds
**Counter**: Signature Dampeners
**Heat**: 1 per use

#### Tracking Disruptor
**Purpose**: Reduce weapon accuracy
**Activation**: Move Action + Light Focus
**Check**: EWR vs EDR
**Range**: Medium
**Effect**: Target -3 to weapon attacks
**Duration**: Concentration
**Counter**: Tracking Computers
**Heat**: 2 per round

#### Sensor Dampener
**Purpose**: Reduce detection range
**Activation**: Standard Action + Light Focus
**Check**: EWR vs EDR
**Range**: Long
**Effects**:
- Sensor range halved
- -2 to Initiative
- Cannot achieve missile lock
**Duration**: Concentration
**Counter**: Sensor Boosters
**Heat**: 1 per round

#### Energy Neutralizer
**Purpose**: Drain power systems
**Activation**: Standard Action + Heavy Focus
**Check**: EWR vs EDR
**Range**: Close to Short
**Effect**: Drain 1d6 power points
**Special**: Nosferatu variant transfers drained power
**Counter**: Capacitor Batteries
**Heat**: 4 per use

### Defensive EW Systems

#### Warp Core Stabilizer
**Type**: Passive System
**Effect**: +3 EDR vs warp disruption
**Drawback**: -2 to targeting range
**Stacking**: Multiple stabilizers stack

#### ECCM (Electronic Counter-Countermeasures)
**Type**: Active System
**Activation**: Free Action
**Effect**: +3 EDR vs ECM, +1 to break jams
**Duration**: While active
**Heat**: 1 per round

#### Signature Suppressor
**Type**: Passive System
**Effect**: -2 to signature radius
**Benefit**: Harder to target and lock
**Stacking**: Diminishing returns

#### Burst Jammer
**Type**: Area Denial
**Activation**: Full Round + Total Focus
**Check**: EWR vs all ships in Medium range
**Effect**: All affected -2 to actions
**Duration**: Instant
**Heat**: 8
**Warning**: Affects allies!

### EW Tactical Roles

#### Interdictor
**Purpose**: Tackle and hold targets
**Typical Fit**:
- Multiple warp disruptors
- Reinforced defenses
- Short range weapons
**Tactics**: Lock down high-value targets
**Vulnerability**: Must stay close

#### ECM Specialist
**Purpose**: Disrupt enemy operations
**Typical Fit**:
- Racial ECM suites
- Long range
- Minimal weapons
**Tactics**: Jam logistics and snipers
**Vulnerability**: Fragile when focused

#### Dampener Platform
**Purpose**: Range control
**Typical Fit**:
- Multiple dampeners
- Extreme range bonuses
- Kiting setup
**Tactics**: Neutralize long-range threats
**Vulnerability**: Fast tackle ships

#### EW Support Frigate
**Purpose**: Fleet force multiplier
**Typical Fit**:
- Target painters
- Tracking disruptors
- High speed
**Tactics**: Paint primaries, protect allies
**Vulnerability**: Paper-thin tank

### Counter-EW Operations

#### EDEF Cruiser Abilities
- Fleet Bonus: Allies within Medium range gain +2 EDR
- ECCM Projection: Grant ECCM to targeted ally
- Jam Break: Remove one EW effect per round
- Information Link: Share sensor data despite jamming

#### Command Ship Bonuses
**Information Warfare Link**:
- Fleet +1 to all EW/EDEF checks
- +10,000km to EW optimal range
- -1 heat generation from EW

**Electronic Superiority**:
- Ignore first jam attempt per round
- Automatically break one lock per round
- +2 Initiative despite sensor damping

### EW in Fleet Combat

#### Opening Gambits
1. Dampeners reduce enemy sniper range
2. ECM blinds enemy logistics
3. Target painters mark primary targets
4. Interdictors trap valuable targets

#### Counter-Strategy
1. EDEF cruisers protect key ships
2. Fast tackle eliminates EW platforms
3. Snipers focus fragile EW ships
4. Command ship coordinates despite jamming

#### Combined Arms
- EW ships enable damage dealers
- Tackle holds targets for EW effects
- Logistics keep EW ships alive
- Scouts provide warp-ins for EW

---

## Fleet Combat

### Squadron Mechanics

#### Squadron Composition
**Squadron Sizes**:
- Wing: 3-5 ships (+1 attack/defense)
- Squadron: 6-11 ships (+2 attack/defense)  
- Fleet: 12+ ships (+3 attack/defense)

**Requirements**:
- Similar ship classes
- Functioning communications
- Squadron leader (highest Command)

#### Squadron Combat
**Health Tracking**:
- Track total squadron HP
- Every 20% lost = 1 ship destroyed
- Destroyed ships chosen by GM or randomly

**Morale Checks**:
- Required at 50% casualties
- Command + Presence TN 14
- Failure: Squadron breaks/retreats
- Critical failure: Rout (no organized retreat)

### Fleet Command

#### Command Ship Actions
**Fleet Coordination** (Standard):
- All allied ships +1 to next action
- Requires: Command network active

**Tactical Genius** (Move):
- One allied ship rerolls failed check
- Limit: Once per ship per battle

**Strategic Withdrawal** (Full Round):
- Organized retreat despite interdiction
- Command + Tactics TN 17
- Success: Fleet escapes in order

#### Fleet Formations
**Line of Battle**:
- +1 to attacks
- -1 to defense
- Maximizes firepower

**Defensive Screen**:
- Capital ships gain +2 defense
- Escorts take -1 to attacks
- Protects valuable assets

**Wolf Pack**:
- +2 damage vs single target
- Must outnumber target 3:1
- Vulnerable to area attacks

**Scattered Formation**:
- +2 defense vs area attacks
- -1 to coordination
- Harder to command

### Mass Battle Resolution

#### Abstract Fleet Combat
For battles too large for individual resolution:

**1. Calculate Fleet Strength**:
| Ship Class | Point Value |
|------------|-------------|
| Fighter | 1 |
| Corvette | 3 |
| Frigate | 5 |
| Cruiser | 10 |
| Battleship | 20 |
| Capital | 30 |
| Titan | 50 |

**2. Apply Modifiers**:
- Fleet composition: Rock-paper-scissors bonuses
- Technology level: +1 per era difference
- Tactical position: +2 for ambush/high ground
- Morale: +1 to +3 for high morale

**3. Command Checks**:
Both fleet commanders roll:
```
2d10 + Command + Tactics + Modifiers
```

**4. Determine Casualties**:
| Victory Margin    |Loser's Casualties     | Winner's Casualties |
|----------------   |-------------------    |-------------------|
| 1-2               | 10%                   | 5% |
| 3-5               | 20%                   | 10% |
| 6-9               | 30%                   | 10% |
| 10-14             | 40%                   | 15% |
| 15+               | 50%                   | 15% |

**5. Resolve Morale**:
Loser checks morale or retreats
Winner may pursue with new round

---

## Quick Reference Tables

### Combat Action Summary
| Role | Standard Actions | Move Actions | Quick Actions |
|------|-----------------|--------------|---------------|
| Captain | Coordinate, Inspire, Analysis | Excellence, Orders | Comms |
| Pilot | Evasive, Attack Vector, Ram | Course, Drift, E-Thrust | Roll, Trim |
| Gunner | Fire, Target, Suppress | Lock, Predict, Switch | Tune, Snap |
| Engineer | Boost, Repair, Power | Shields, Damage, Efficiency | Monitor, Vent |
| Science | Scan, EW, Jump | Focus, Counter, Boost | Tag, Ping |

### Range Band Summary
| Range | Distance | Hit Mod | Weapons Allowed |
|-------|----------|---------|-----------------|
| Close | <1 km | +1 | All + boarding |
| Short | 1-10 km | +0 | All weapons |
| Medium | 10-100 km | -1 | All weapons |
| Long | 100-1000 km | -2 | Energy + missiles |
| Extreme | 1000+ km | -3 | Missiles only |

### Status Effect Summary
| Status | Effect | Duration |
|--------|--------|----------|
| Sensor Jammed | -4 detection/targeting | Concentration |
| Warp Disrupted | Cannot FTL | Concentration |
| Target Painted | +3 signature | 3 rounds |
| Tracking Disrupted | -3 attacks | Concentration |
| Sensor Dampened | Half sensor range | Concentration |
| Power Neutralized | -1d6 power | Instant |

### Heat Quick Reference
| Heat Level | Effect | Recovery |
|-----------|--------|----------|
| 0-49% | Normal | Automatic dissipation |
| 50-74% | -1 all actions | Vent or wait |
| 75-99% | -2 all actions | Emergency vent required |
| 100%+ | Shutdown/damage | Major repairs needed |

---

## Example Scenarios

### Scenario 1: Pirate Ambush
**Setup**: 
- Pirates: 1 Interdictor, 3 Fighters
- Merchant: 1 Freighter, 1 Escort

**Round 1**:
1. Pirates win positioning, start at Short range
2. Interdictor activates warp disruptor on freighter
3. Fighters engage escort
4. Freighter attempts to break tackle
5. Escort uses target painter on interdictor

**Tactical Considerations**:
- Freighter must survive until disruptor breaks
- Escort must protect while handling fighters
- Pirates must maintain tackle despite damage
- EW superiority determines escape possibility

### Scenario 2: Fleet Engagement
**Setup**:
- Fleet A: 1 Command Cruiser, 3 Cruisers, 6 Frigates
- Fleet B: 2 Cruisers, 2 EDEF Cruisers, 8 Frigates

**Opening**:
1. Fleet A dampens Fleet B's range
2. Fleet B counters with EDEF projection
3. Both sides launch fighters
4. EW war begins in earnest

**Key Decisions**:
- Target priority: EW or damage dealers?
- Formation: Concentrated or spread?
- Fighter deployment: Anti-fighter or anti-ship?
- When to commit reserves?

### Scenario 3: Station Defense
**Setup**:
- Station: Static defenses, fighter wings
- Attackers: Siege fleet with EW support

**Unique Elements**:
- Station can't maneuver but has superior firepower
- Attackers must suppress defenses
- EW crucial for both sides
- Time pressure (reinforcements coming?)

---

## Design Notes

### Core Philosophy
This system creates space combat where:
- Positioning and momentum matter
- Heat creates resource pressure
- Every crew member contributes
- EW adds parallel battlefield
- Multiple viable strategies exist

### Complexity Scaling
- **Basic**: Ignore EW, use simple heat
- **Standard**: Full rules minus squadron
- **Advanced**: All rules including mass combat
- **Simulation**: Track individual missiles, detailed damage

### Common Pitfalls
1. **Alpha Strike Dominance**: Heat prevents one-shot kills
2. **EW Shutdown**: Counter-EW prevents total control
3. **Initiative Supremacy**: Multiple phases prevent single advantage
4. **Tank & Spank**: Mobility and positioning matter
5. **Optimal Range**: Different weapons shine at different ranges

### Future Expansions
- Drone/fighter wing mechanics
- Boarding action resolution
- Exotic weapon effects
- Detailed subsystem damage
- Campaign-level fleet management

---

## Version History

- **v1.0** (2025-01-25): Complete technical guide compiled
- Integrated starship combat core rules
- Comprehensive EW system documentation
- Fleet combat mechanics
- Quick reference materials