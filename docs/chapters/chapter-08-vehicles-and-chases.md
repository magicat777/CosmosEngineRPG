# Chapter 8: Vehicles and Chases

From motorcycles racing through neon-lit streets to starfighters dogfighting in asteroid fields, vehicles add speed, mobility, and dramatic action to Cosmos Engine. This chapter covers vehicle operation, combat, and the heart-pounding chase sequences that define science fiction adventure.

## Vehicle Basics

### Vehicle Statistics

Vehicles use a framework similar to characters but at different scales:

**Core Statistics**:
- **Speed**: Base movement per round
- **Handling**: Modifier to Pilot checks
- **Armor**: Damage reduction
- **Structure**: Vehicle hit points
- **Shields**: Energy-based protection (if equipped)
- **Size**: Affects targeting and maneuvers
- **Crew**: Required/maximum operators
- **Passengers**: Non-crew capacity

### Vehicle Scales

**Personal Scale**: Human-sized
- Motorcycles, jet packs, riding animals
- Speed in meters per round
- Use personal combat rules

**Vehicle Scale**: Car to fighter sized
- Ground cars, aircraft, small spacecraft
- Speed in tens of meters
- 10× personal scale damage

**Starship Scale**: Frigate sized
- Transports, corvettes, patrol ships
- Speed in hundreds of meters
- 100× personal scale damage

**Capital Scale**: Massive vessels
- Cruisers, carriers, stations
- Speed in kilometers
- 1000× personal scale damage

### Operating Vehicles

**Basic Operation**: No check needed for:
- Normal movement in clear conditions
- Standard acceleration/deceleration
- Following traffic patterns
- Routine docking/parking

**Pilot Checks Required**: 
- Dangerous maneuvers
- Combat situations
- Hazardous conditions
- Emergency responses
- Pursuit/evasion

**Pilot Skill Requirements**:
- Personal vehicles (0+): Bikes, animals
- Ground vehicles (1+): Cars, trucks
- Aircraft (3+): Planes, VTOLs
- Spacecraft (5+): Shuttles, fighters
- Capital ships (7+): Cruisers, carriers

## Vehicle Combat

### Initiative and Actions

**Vehicle Initiative**: 1d10 + Pilot's Awareness + Vehicle Handling

**Action Economy**: Same as personal combat
- Standard Action: Attack, complex maneuver
- Move Action: Normal movement, simple maneuver
- Quick Actions: Communication, simple adjustments

**Crew Actions**: Multiple crew members can act
- Pilot: Movement and evasion
- Gunner: Weapon attacks
- Engineer: Damage control
- Commander: Coordination bonuses

### Vehicle Attacks

**Attack Roll**: 2d10 + Coordination + (Pilot ÷ 2) + Weapon + Targeting

**Vehicle Weapons**:
- Fixed: Must aim entire vehicle
- Turret: Independent targeting
- Guided: Tracking missiles/torpedoes

**Targeting Modifiers**:
| Situation | Modifier |
|-----------|----------|
| Target size larger | +2 per scale |
| Target size smaller | -2 per scale |
| High relative speed | -2 to -4 |
| Sensor lock | +2 |
| Evasive maneuvers | -2 to -4 |

### Vehicle Defense

**Defense**: 10 + Pilot's Coordination + (Pilot ÷ 2) + Handling + Size

**Size Modifiers**:
- Motorcycle/Fighter: +2
- Car/Shuttle: +0
- Truck/Transport: -2
- Tank/Corvette: -4

**Active Defense**: Pilot can take Evasive Action
- Full Defense: +4 Defense, half speed
- Jink: +2 Defense, -2 to attacks

### Vehicle Damage

**Damage Application**:
1. Subtract Armor from damage
2. Apply to Shields (if any)
3. Remaining damages Structure
4. Check damage thresholds

**Damage Thresholds**:
- **Intact** (75-100%): No penalties
- **Damaged** (50-74%): -2 Handling
- **Heavily Damaged** (25-49%): -4 Handling, half Speed
- **Crippled** (1-24%): No movement, -6 Handling
- **Destroyed** (0 or less): Vehicle inoperable

**Critical Hits**: Roll on vehicle critical table
1-2: Engine damage (half Speed)
3-4: Weapon destroyed
5-6: Control damage (-2 Handling)
7-8: Crew injury
9-10: System failure (GM choice)

## Chase Mechanics

### Chase Framework

Chases are dramatic sequences resolved through:
1. **Establish Context**: Distance, terrain, stakes
2. **Roll Initiative**: Act in order
3. **Declare Actions**: What each participant attempts
4. **Resolve Actions**: Apply results
5. **Check Victory**: Has anyone escaped/been caught?

### Starting Distance

**Chase Range Categories**:
- **Extreme** (4+ zones): Can attempt to break off
- **Long** (3 zones): Outside most weapon ranges
- **Medium** (2 zones): Standard engagement range
- **Short** (1 zone): Close combat range
- **Contact** (0 zones): Ramming/boarding range

Starting distance depends on circumstances:
- Ambush: Start at Short/Contact
- Pursuit: Start at Long/Extreme
- Interception: Start at Medium

### Chase Actions

**Pursuit** (Standard Action)
- Pilot check vs opponent's Defense
- Success: Close 1 zone
- Critical: Close 2 zones
- Failure: No change
- Fumble: Lose 1 zone

**Evasion** (Standard Action)
- Pilot check vs opponent's attack
- Success: Open 1 zone
- Critical: Open 2 zones + lose pursuer
- Failure: No change
- Fumble: Lose control briefly

**Ram** (Standard Action, Contact range)
- Attack at -2
- Damage: Speed factor + vehicle size
- Both vehicles take damage
- Smaller vehicle takes double

**Stunt** (Standard Action)
- Describe creative maneuver
- Pilot check TN varies
- Success: Gain advantage
- Failure: Complications

**Passenger Actions**:
- Attack: Normal combat rules
- Assist: Aid pilot/gunner
- Repair: Fix damage
- Navigate: Find shortcuts

### Environmental Factors

**Urban** (streets, buildings):
- Tight turns: Handling checks TN 14
- Traffic: -2 to all rolls
- Shortcuts: Navigation can help
- Vertical options: With right vehicle

**Wilderness** (forests, deserts):
- Terrain: Speed penalties
- Obstacles: Pilot checks required
- Weather: Additional penalties
- Getting lost: Possible

**Space** (asteroids, debris):
- 3D movement: Complex positioning
- No friction: Momentum matters
- Obstacles: Instant destruction
- Sensors: Vital for range

**Underwater**:
- Pressure: Depth limits
- Visibility: Severely limited
- Slow: Half normal speed
- Special vehicles: Required

### Chase Resolution

**Victory Conditions**:
- **Escape**: Open to Extreme range and break line of sight
- **Capture**: Force to Contact range and disable
- **Destruction**: Reduce to 0 Structure
- **Surrender**: Negotiated end

**Time Limits**: Consider:
- Fuel/energy consumption
- Approaching authorities
- Environmental hazards
- Mission deadlines

## Sample Vehicles

### Ground Vehicles

**Motorcycle** (Industrial Era)
- Speed: 40m | Handling: +2
- Armor: 0 | Structure: 20
- Crew: 1 | Passengers: 1
- Cost: 1,000cr

**Ground Car** (Advanced Era)
- Speed: 30m | Handling: +0
- Armor: 1 | Structure: 40
- Crew: 1 | Passengers: 3-5
- Cost: 5,000cr

**Hover Tank** (Stellar Era)
- Speed: 20m | Handling: -2
- Armor: 6 | Structure: 100
- Crew: 3 | Passengers: 0
- Weapons: Plasma cannon
- Cost: 250,000cr

### Aircraft

**Helicopter** (Industrial Era)
- Speed: 50m | Handling: +0
- Armor: 1 | Structure: 60
- Crew: 2 | Passengers: 6
- Cost: 50,000cr

**Fighter Jet** (Advanced Era)
- Speed: 200m | Handling: +1
- Armor: 2 | Structure: 80
- Crew: 1 | Passengers: 0
- Weapons: Missiles, cannon
- Cost: 500,000cr

**Grav Flyer** (Stellar Era)
- Speed: 150m | Handling: +2
- Armor: 3 | Structure: 60
- Crew: 1 | Passengers: 3
- Cost: 100,000cr

### Spacecraft

**Shuttle** (Advanced Era)
- Speed: 100m | Handling: -1
- Armor: 3 | Structure: 150
- Crew: 2 | Passengers: 20
- Cost: 1,000,000cr

**Fighter** (Stellar Era)
- Speed: 300m | Handling: +2
- Armor: 4 | Structure: 100
- Crew: 1 | Passengers: 0
- Weapons: Lasers, torpedoes
- Cost: 2,000,000cr

**Transport** (Any Era)
- Speed: 50m | Handling: -2
- Armor: 5 | Structure: 300
- Crew: 4 | Passengers: 50
- Cost: 5,000,000cr

## Vehicle Modifications

### Basic Modifications (Tech TN 14)

**Performance**:
- **Tuned Engine**: +10m Speed
- **Improved Handling**: +1 Handling
- **Reinforced Frame**: +20% Structure

**Defense**:
- **Armor Plating**: +1 Armor, -5m Speed
- **Countermeasures**: +2 vs guided weapons
- **Smoke Screen**: Creates concealment

**Utility**:
- **Extended Fuel**: Double range
- **Sensor Package**: +2 detection
- **Cargo Space**: Increase capacity

### Advanced Modifications (Tech TN 17)

**Weapons**:
- **Weapon Mount**: Add vehicle weapon
- **Targeting System**: +2 to attacks
- **Ammo Feed**: Double ammunition

**Protection**:
- **Shield Generator**: 20-50 shield points
- **Stealth Coating**: -4 to detect
- **Emergency Ejection**: Crew safety

**Special**:
- **AI Pilot**: Autonomous operation
- **Transformation**: Multiple modes
- **Jump Jets**: Limited flight

## Quick Vehicle Reference

### Common Pilot TNs
- Routine maneuver: TN 8
- Sharp turn: TN 11
- Dangerous stunt: TN 14
- Impossible feat: TN 17

### Speed Categories
- Stationary: 0m
- Slow: 10-20m
- Moderate: 30-50m
- Fast: 60-100m
- Extreme: 100m+

### Range Zones
- Contact: 0 (ramming)
- Short: 1 (close combat)
- Medium: 2 (firearms)
- Long: 3 (sniping)
- Extreme: 4+ (escape)

### Cross-Scale Damage
- **Personal weapons vs Vehicles**: Damage ÷10 (pistol dealing 8 damage = 0.8, rounds to 1 vs vehicle)
- **Vehicle weapons vs Personal**: Damage ×10 (vehicle cannon dealing 15 = 150 vs person)
- **Vehicle to Starship**: Damage ÷10
- **Starship to Capital**: Damage ÷10
- **Higher to Lower Scale**: Always ×10 damage multiplier

**Personal Weapons vs Vehicles Example**: A character with an assault rifle (1d10+2 damage) attacking a hover car would deal (roll result) ÷10 damage, minimum 1 point per hit. Most personal weapons require many hits to disable vehicles.

## Vehicle Combat Example

**Setup**: Hover bike chase through city

**Participants**:
- Zara: Grav Bike (Speed 60m, Handling +2)
- Pursuer 1: Security Hover (Speed 50m, Handling +0)
- Pursuer 2: Security Hover (Speed 50m, Handling +0)

**Round 1**:
- Zara: Evasion through traffic (Pilot TN 14)
  - Roll: 16, opens 1 zone to Long
- Pursuer 1: Pursuit
  - Roll: 13 vs Defense 15, fails
- Pursuer 2: Shortcut attempt
  - Roll: 18, closes to Medium

**Round 2**:
- Zara: Stunt - jump between buildings
  - Roll: 19 vs TN 17, gains advantage
- Pursuer 1: Fire stun weapon
  - Roll: 12 vs Defense 17, miss
- Pursuer 2: Ram attempt
  - Too far away

Chase continues with environmental hazards, passenger actions, and dramatic stunts...

---

*Continue to Chapter 9: Starships and Space Travel for interstellar vessels and travel...*