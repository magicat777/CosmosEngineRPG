# Starship Combat Workshop

## Design Goals

1. **Scalable System**: From single-ship encounters (Firefly) to fleet engagements (BSG)
2. **Tactical Depth**: Multiple viable strategies, not dominated by single metric
3. **Three-Dimensional Thinking**: Long-range sensors, positioning matters
4. **Realistic Actions**: Shield reallocation, power management, targeting solutions
5. **Crew Participation**: Everyone has meaningful choices

## Core Concepts

### Detection & Engagement Ranges
Unlike 2D naval combat, space combat begins at extreme ranges with sensor locks and tactical positioning.

**Detection Ranges** (Starship Scale):
- **Passive Sensors**: 10,000km (can detect active ships)
- **Active Sensors**: 100,000km (reveals your position)
- **Stealth Detection**: 1,000km (special sensors needed)

**Engagement Ranges**:
- **Extreme**: 1000+ km (missiles only, -3 to hit)
- **Long**: 100-1000 km (energy weapons, -2 to hit)
- **Medium**: 10-100 km (standard combat, -1 to hit)
- **Short**: 1-10 km (dogfighting range, +0 to hit)
- **Close**: <1 km (point defense, boarding, +1 to hit)

### Momentum System
Ships don't stop in space. Velocity and vector matter.

**Momentum Points (MP)**:
- Represent ship's current velocity/vector
- Range from -10 to +10 (negative = reversing)
- Affect difficulty to change direction
- Can be used for:
  - Closing distance faster
  - Breaking away
  - Evasive patterns
  - Ramming attacks

**Changing Momentum**:
- Pilot check TN based on current MP
- Success changes MP by ship's Thrust rating
- Failure maintains current vector
- Critical failure causes drift

### Heat Management
Energy weapons and systems generate heat that must be managed.

**Heat Capacity**: Based on ship size and tech
- Fighter: 10 heat
- Freighter: 20 heat
- Cruiser: 40 heat
- Capital: 80 heat

**Heat Generation**:
- Energy weapons: 1-3 heat per shot
- Shields: 1 heat per 10 damage absorbed
- Overcharge actions: 3-5 heat
- Silent running: No heat dissipation

**Heat Effects**:
- 50% capacity: -1 to all actions
- 75% capacity: -2 to all actions
- 100% capacity: Emergency shutdown
- Over capacity: System damage

---

## Combat Sequence

### Phase 1: Detection
Before combat begins, ships must detect each other.

**Sensor Operations**:
- **Passive Scan**: Intellect + Tech vs ship's Stealth TN
- **Active Scan**: Auto-detect but reveals position
- **Running Silent**: +3 to Stealth TN, -2 to own sensors

**Information Warfare**:
- False signatures
- Sensor ghosts
- ECM/ECCM

### Phase 2: Positioning
Initial positioning determines tactical advantage.

**Positioning Roll**: 2d10 + Pilot + Ship's Maneuvering
- Winner chooses initial range
- Winner gains +2 Initiative
- Ties start at Long range

**Environmental Factors**:
- Asteroid field: +2 to hiding, -1 to weapons
- Nebula: -2 to sensors, +1 to stealth
- Gravity well: Affects momentum
- Debris field: Cover available

### Phase 3: Initiative
**Ship Initiative**: 2d10 + Awareness + Ship's Sensors
- Acts as unit (crew acts on ship's initiative)
- Can delay to coordinate with allies
- Can interrupt with successful Pilot check

### Phase 4: Action Resolution

Each crew member can contribute:

**Bridge Actions** (Captain/Pilot):
- **Evasive Maneuvers**: +2 ship defense, costs momentum
- **Attack Run**: +2 to weapons, -2 to defense
- **Ramming Speed**: Devastating but dangerous
- **Coordinate Fire**: Link weapons for concentrated attack

**Engineering Actions**:
- **Boost Shields**: +2 shield strength for round
- **Overcharge Weapons**: +2 damage, generates heat
- **Emergency Cooling**: Remove 5 heat
- **Damage Control**: Repair critical systems

**Tactical Actions** (Weapons/Sensors):
- **Target Subsystem**: -2 to hit, disable specific component
- **Point Defense**: Protect against missiles/fighters
- **Sensor Lock**: +2 to next attack against target
- **Fire Control**: Coordinate multiple weapon systems

**Science Actions**:
- **Analyze Pattern**: Learn enemy ship capabilities
- **Jam Communications**: Prevent coordination
- **Boost Sensors**: Extend detection range
- **Calculate Jump**: Prepare emergency escape

---

## Weapons & Defense

### Weapon Types

**Kinetic Weapons** (Railguns, Autocannons):
- No heat generation
- Limited ammunition
- Effective at all ranges
- Can't be deflected by shields

**Energy Weapons** (Lasers, Plasma):
- Generate heat
- Unlimited shots
- -1 per range increment
- Reduced by shields

**Missiles/Torpedoes**:
- Must acquire lock first
- Can be shot down
- Devastating damage
- Limited supply

**Exotic Weapons** (Era 5+):
- Graviton beams
- Singularity projectors
- Phase weapons
- Unique effects

### Defense Systems

**Shields**:
- Four facings: Fore, Aft, Port, Starboard
- Redistribute as free action
- Absorb energy damage first
- Generate heat when hit

**Armor**:
- Reduces all damage
- Can't be redistributed
- Degrades over time
- Better vs kinetic

**Point Defense**:
- Automated anti-missile/fighter
- Uses ship's Combat + Systems
- Limited firing arcs

**Electronic Countermeasures**:
- Breaks target locks
- Confuses sensors
- Creates false targets

---

## Tactical Maneuvers

### Shield Management
**Reinforce Shield** (Move Action):
- Transfer power from one facing to another
- 2:1 ratio (lose 2 to gain 1 elsewhere)
- Maximum double normal strength

**Angle Shields** (Free Action):
- Predict incoming fire direction
- If correct, +1 shield strength
- If wrong, -1 shield strength

### Power Allocation
Ships have Power Points to distribute:

**Standard Allocation**:
- Weapons: Normal damage
- Shields: Normal strength  
- Engines: Normal speed
- Sensors: Normal range

**Overcharge Options**:
- Double allocation: +2 to system
- Triple allocation: +4 to system
- Generates heat equal to bonus
- Risk of burnout on natural 2

### Special Maneuvers

**Alpha Strike**:
- Fire all weapons at once
- -2 to all attacks
- Massive heat generation
- Can overwhelm defenses

**Silent Running**:
- Minimize emissions
- +3 to Stealth
- Can't use active sensors
- Heat builds up

**Drift Maneuver**:
- Cut engines, maintain momentum
- Free movement, hard to predict
- Can't change direction easily
- No heat generation

**Slingshot**:
- Use gravity well for speed
- Dangerous but effective
- Pilot TN 17+
- Failure damages ship

---

## Damage & Consequences

### Hit Locations
When shields are down:

| 2d10 | Location | Effect if Disabled |
|------|----------|-------------------|
| 2-3 | Bridge | -2 to all actions |
| 4-5 | Weapons | Can't fire |
| 6-7 | Engines | Half speed |
| 8-9 | Shields | No shield regeneration |
| 10-11 | Sensors | Blind, -4 to actions |
| 12-13 | Life Support | Crew takes damage |
| 14-15 | Power Core | -1 to all systems |
| 16-17 | Cargo/Crew | Morale/supply issues |
| 18-19 | Comms | Can't coordinate |
| 20 | Critical | Roll twice |

### Damage Thresholds
Like personal combat, ships have threshold states:

**Ship Health States**:
- **Operational** (100-75%): No penalties
- **Damaged** (74-50%): -1 to all actions
- **Crippled** (49-25%): -2 to actions, half speed
- **Critical** (24-10%): -3 to actions, one system offline
- **Destroyed** (9-0%): Exploding, evacuate now

### Crew Casualties
When ship takes threshold damage:
- **Damaged**: Crew Coordination saves TN 11 or stunned
- **Crippled**: Crew Might saves TN 14 or 1d6 damage
- **Critical**: Crew Might saves TN 17 or 2d6 damage
- **Destroyed**: Evacuate or die

---

## Fleet Engagements

### Squadron Rules
Groups of similar ships act as units:

**Squadron Size**:
- Wing (3-5 ships): +1 to attacks
- Squadron (6-11 ships): +2 to attacks
- Fleet (12+ ships): +3 to attacks

**Squadron Damage**:
- Track squadron HP (total of all ships)
- Every 20% damage destroys one ship
- Morale checks when at 50% strength

### Command & Control

**Fleet Commander Actions**:
- **Coordinate Strike**: All ships +1 to hit
- **Defensive Screen**: Protect capital ships
- **Wolf Pack**: Concentrate on single target
- **Scatter**: Harder to target with area weapons

**Communications**:
- In range: Instant coordination
- Jamming: -2 to fleet actions
- Destroyed flagship: Morale check

### Simplified Fleet Combat

For large battles:

**Abstract Resolution**:
1. Compare fleet strengths
2. Add commander's Command + Tactics
3. Roll opposed checks
4. Winner inflicts "damage" based on margin
5. Repeat until one side breaks

**Fleet Damage**:
- 1-2 margin: 10% casualties
- 3-5 margin: 20% casualties  
- 6-9 margin: 30% casualties
- 10+ margin: 40% casualties

---

## Example Ships

### Light Freighter (Firefly-class)
- **Size**: Small (HP 100)
- **Speed**: 6 (Thrust 2)
- **Sensors**: Basic (+0)
- **Weapons**: None standard
- **Defenses**: Light shields (10 per facing)
- **Heat**: 20 capacity
- **Crew**: 3-8

### Fighter (Viper-class)
- **Size**: Tiny (HP 40)
- **Speed**: 10 (Thrust 4)
- **Sensors**: Combat (+2)
- **Weapons**: Dual autocannons, missiles
- **Defenses**: Minimal shields, high evasion
- **Heat**: 10 capacity
- **Crew**: 1

### Cruiser (Military)
- **Size**: Large (HP 300)
- **Speed**: 4 (Thrust 1)
- **Sensors**: Advanced (+3)
- **Weapons**: Multiple turrets, torpedo tubes
- **Defenses**: Heavy shields (30 per facing)
- **Heat**: 40 capacity
- **Crew**: 50-200

---

## Design Analysis

### Avoiding Single-Metric Dominance

Unlike Starfinder's initiative-determines-all:
1. **Detection matters**: Finding enemy first ≠ automatic win
2. **Range bands**: Different weapons optimal at different ranges
3. **Momentum**: Can't just stop and pivot
4. **Heat management**: Can't spam best options
5. **Crew actions**: Multiple paths to victory

### Tactical Considerations

**Long-range sniping**: Viable but heat-intensive
**Close dogfighting**: Risky but devastating
**Defensive play**: Shields and countermeasures
**Ambush tactics**: Stealth and positioning
**Ramming**: Desperate but effective

### Three-Dimensional Elements

1. **Sensor shadows**: Hide behind objects
2. **Gravity assists**: Use momentum
3. **Attack vectors**: Above/below harder to defend
4. **Drift physics**: Momentum ≠ facing
5. **Heat radiation**: Directional in space

---

## Quick Resolution Option

For simple encounters:

**Fast Starship Combat**:
1. Detection: Awareness + Sensors
2. Positioning: Pilot + Maneuvering  
3. Exchange fire: Combat + Weapons
4. Winner based on margin of success
5. Narrate outcome

**When to Use**:
- Minor encounters
- Time pressure
- Players prefer simple
- Teaching new players

---

## Next Steps

This workshop provides the foundation. Still need:
1. Detailed weapon statistics
2. Ship construction rules
3. Modification/upgrade system
4. Example combat scenarios
5. Integration with mass combat