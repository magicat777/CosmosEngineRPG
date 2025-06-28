# Starship Combat

## Overview

Starship combat in Cosmos Engine captures the tension of space battles from intimate dogfights to massive fleet engagements. The system emphasizes tactical positioning, heat management, and crew coordination while maintaining the fast-paced 2d10 resolution.

**Design Principles**:
- Three-dimensional tactical space
- Momentum and physics matter
- Every crew member contributes
- Multiple viable strategies
- Scales from fighters to fleets

---

## Space Combat Fundamentals

### Detection & Engagement
Space combat begins long before weapons fire.

**Sensor Ranges** (Starship Scale):
| Mode         | Range        | Effect |
|------        |-------       |--------|
| Passive      | 10,000 km    | Detects active emissions only |
| Active       | 100,000 km   | Full detection but reveals position |
| Stealth Scan | 1,000 km     | Penetrates silent running |

**Engagement Ranges**:
| Range     | Distance     | Modifier  | Weapons |
|-------    |----------    |---------- |---------|
| Extreme   | 1000+ km     | -3        | Missiles only |
| Long      | 100-1000 km  | -2        | Energy weapons, missiles |
| Medium    | 10-100 km    | -1        | All weapons effective |
| Short     | 1-10 km      | +0        | Optimal combat range |
| Close     | <1 km        | +1        | Point defense, boarding |

### Momentum in Space
Ships maintain velocity. Direction changes require thrust.

**Momentum Points (MP)**:
- Track current velocity (-10 to +10)
- Positive = forward, Negative = reverse
- Affects maneuverability:
  - Low MP (0-3): Easy to change direction
  - Medium MP (4-7): Standard difficulty
  - High MP (8-10): Hard to change vector

**Using Momentum**:
- **Close Distance**: Add MP to range change
- **Break Away**: MP helps escape
- **Evasive Action**: High MP = harder to hit
- **Ram**: MP adds damage

### Heat Management
Weapons and systems generate heat that limits options.

**Heat Capacity by Ship Class**:
| Class     | Capacity  | Dissipation/Round |
|-------    |---------- |-------------------|
| Fighter   | 10        | 3 |
| Shuttle   | 15        | 3 |
| Freighter | 20        | 4 |
| Corvette  | 30        | 5 |
| Cruiser   | 40        | 6 |
| Capital   | 80        | 10 |

**Heat Sources**:
- Energy weapons: 1-3 per shot
- Overcharge actions: 3-5
- Shield absorption: 1 per 10 damage
- Silent running: No dissipation

**Overheat Consequences**:
- 50%+: -1 to all actions
- 75%+: -2 to all actions  
- 100%: Shutdown required
- Over 100%: System damage

---

## Combat Sequence

### 1. Detection Phase
Ships must find each other before engaging.

**Sensor Checks**:
- **Passive**: Awareness + Tech vs Stealth TN
- **Active**: Automatic but reveals position
- **Analysis**: Intellect + Tech to identify ship class

**Stealth & Countermeasures**:
- **Silent Running**: +3 Stealth, no heat dissipation
- **Sensor Ghosts**: Create false contacts
- **ECM**: -2 to enemy sensor checks

### 2. Positioning Phase
Initial positioning determines tactical advantage.

**Positioning Check**: 2d10 + Pilot skill + Ship Maneuverability
- Winner chooses initial range
- Winner gains +2 Initiative
- Margin 5+: Gains surprise round
- Tie: Start at Long range

**Environmental Modifiers**:
- Asteroid field: +2 concealment, -1 weapons
- Nebula: -2 sensors, +1 stealth
- Gravity well: Affects momentum changes
- Debris: Provides cover

### 3. Initiative Phase
**Ship Initiative**: 2d10 + best crew's Awareness + Ship Sensors
- Entire ship acts on one initiative
- Can delay to coordinate
- Can interrupt with Pilot check TN 17

### 4. Action Phase
Each crew member contributes on ship's turn.

**Action Types**:
- **Captain**: Command decisions, inspire crew
- **Pilot**: Maneuvers, positioning
- **Gunner**: Weapon attacks
- **Engineer**: Power management, repairs
- **Science**: Sensors, analysis

**Solo/Small Crew**: One person can take multiple roles with -2 cumulative penalty.

---

## Crew Actions

### Captain/Command
**Coordinate Fire** (Standard):
- All gunners gain +1 to hit
- Requires Communication systems

**Inspire Crew** (Standard):
- Crew gains +1 to next action
- Once per combat

**Demand Excellence** (Move):
- One crew member rerolls failed check
- Causes 1 stress to crew

**All Ahead Full** (Free):
- Boost engines, +2 Thrust this round
- Generates 3 heat

### Pilot
**Evasive Maneuvers** (Standard):
- Ship gains +2 Defense
- -1 to own attacks
- Costs 2 Momentum

**Attack Vector** (Standard):
- +2 to ship's attacks
- -2 to Defense
- Pilot + Combat check

**Drift Maneuver** (Move):
- Coast on momentum
- Hard to predict (+2 Defense vs missiles)
- Can't change direction

**Adjust Course** (Move):
- Change momentum by Thrust rating
- TN based on current momentum

### Gunner
**Fire Weapons** (Standard):
- Attack: 2d10 + Coordination + Combat + Weapon
- Can fire linked weapons together

**Target Subsystem** (Standard):
- -2 to attack
- Hit disables specific system
- Must penetrate shields first

**Suppressing Fire** (Standard):
- Force area denial
- -2 to enemies entering zone
- Uses extra ammunition/heat

**Missile Lock** (Move):
- Acquire target for missiles
- Intellect + Combat vs Defense
- Lock lasts until broken

### Engineer
**Boost System** (Standard):
Choose one:
- Weapons: +2 damage
- Shields: +2 strength  
- Engines: +2 Thrust
- Sensors: +2 range
Generates 3 heat

**Emergency Cooling** (Standard):
- Vent 5 heat immediately
- Ship vulnerable for 1 round (-2 Defense)

**Damage Control** (Standard):
- Engineering + Tech TN 14
- Repair one damaged system
- Restore 10% hull on critical success

**Redistribute Shields** (Move):
- Move shield points between facings
- 2:1 ratio (lose 2 to gain 1)
- Maximum double normal

### Science Officer
**Sensor Sweep** (Standard):
- Reveal all ships in sensor range
- Identify one unknown contact
- Detect hidden threats TN 17

**Target Analysis** (Standard):
- Learn enemy's:
  - Weapon types
  - Damaged systems
  - Crew complement
- Grants +1 to attacks against target

**Calculate Jump** (Full Round):
- Prepare emergency FTL escape
- Tech + Intellect TN 17
- Can jump next round
- Blocked by active Warp Disruptor!

**Electronic Warfare** (Varies):
- See Electronic Warfare rules for full options
- Basic Jamming: Standard action
- Target Painting: Move action
- Sensor Dampening: Standard action

---

## Weapons & Attacks

### Weapon Categories

**Kinetic Weapons**:
- No heat generation
- Limited ammunition
- Ignores energy shields
- Full damage at all ranges

**Energy Weapons**:
- Generates heat (1-3)
- Unlimited shots
- Reduced by shields first
- -1 damage per range increment

**Missiles/Torpedoes**:
- Requires lock first
- Can be shot down (Defense 15)
- Ignores range penalties
- Devastating damage

**Weapon Mount Types**:
- **Fixed**: Forward arc only, +1 damage
- **Turret**: 360° coverage, normal
- **Broadside**: Side arcs, can link fire

### Attack Resolution
**Attack Roll**: 2d10 + Coordination + Combat + Weapon Bonus vs Defense

**Ship Defense**: 10 + Pilot's Coordination + Ship Size + Maneuvers
- Fighter: +2 size bonus
- Shuttle/Freighter: +0
- Corvette/Cruiser: -2
- Capital: -4

**Electronic Defense**: 10 + Intellect + EDEF Systems
- Modified by Signature Radius
- See Electronic Warfare rules

**Critical Hits** (Natural 20):
Choose one:
- Maximum damage
- Disable subsystem
- Ignore shields/armor
- Cause secondary explosion
- Crew casualties

---

## Shields & Damage

### Shield System
Ships have four shield facings:
- **Fore**: Front arc
- **Aft**: Rear arc
- **Port**: Left side
- **Starboard**: Right side

**Shield Properties**:
- Absorb energy damage first
- No effect on kinetic weapons
- Generate 1 heat per 10 absorbed
- Regenerate 10% per round

**Angling Shields** (Free Action):
- Guess incoming fire direction
- Correct: +1 shield strength
- Wrong: -1 shield strength

### Damage & Consequences

**Ship Health States**:
| State | Hull % | Effects |
|-------|--------|---------|
| Operational | 100-75% | No penalties |
| Damaged | 74-50% | -1 to all actions |
| Crippled | 49-25% | -2 actions, half speed |
| Critical | 24-10% | -3 actions, systems failing |
| Destroyed | 9-0% | Abandon ship! |

**System Damage** (When shields down):
| 2d10 | System | Disabled Effect |
|------|--------|-----------------|
| 2-4 | Weapons | Cannot fire |
| 5-7 | Engines | Half speed, -2 maneuvers |
| 8-10 | Shields | No regeneration |
| 11-13 | Sensors | -4 to relevant actions |
| 14-16 | Life Support | Crew endurance checks |
| 17-19 | Power Core | All systems -1 |
| 20 | Bridge | All actions -2 |

**Crew Casualties**:
When ship takes threshold damage, crew must save:
- **Damaged**: Coordination TN 11 or stunned
- **Crippled**: Might TN 14 or 1d6 damage
- **Critical**: Might TN 17 or 2d6 damage

---

## Advanced Tactics

### Power Management
Ships have Power Points equal to reactor rating.

**Standard Distribution**:
- Weapons: 1/3 power
- Shields: 1/3 power
- Engines: 1/3 power

**Reallocation Options**:
- Double power: +2 to system
- Triple power: +4 to system
- Unpowered: System offline
- Change allocation: Engineering Move action

### Special Maneuvers

**Alpha Strike**:
- Fire all weapons as one attack
- -2 to hit but overwhelming
- Generates maximum heat
- Can break through defenses

**Silent Running**:
- All systems minimal
- +3 to Stealth
- No active sensors
- Heat doesn't dissipate

**Ramming Attack**:
- Damage = Speed × Ship Mass
- Both ships take damage
- Pilot check to hit
- Desperation move

**Slingshot Maneuver**:
- Use gravity for speed
- Pilot TN 17+
- Success: Double movement
- Failure: Ship damage

### Electronic Warfare Integration

**Common EW Tactics**:
- **Tackle**: Warp Disruptor prevents escape
- **Jam**: ECM breaks target locks
- **Dampen**: Reduce enemy sensor range
- **Paint**: Make targets easier to hit

**EW Creates Risk/Reward**:
- Small ships can disable larger ones
- But must maintain focus (vulnerability)
- Counter-EW ships protect fleets
- See Electronic Warfare rules for full system

---

## Fleet Combat

### Squadron Rules
Groups of similar ships act together.

**Squadron Sizes**:
- Wing (3-5): +1 attack/defense
- Squadron (6-11): +2 attack/defense
- Fleet (12+): +3 attack/defense

**Squadron Combat**:
- Track total squadron HP
- Each 20% loss = 1 ship destroyed
- Morale check at 50% losses

### Command Ships
Fleet commanders provide bonuses:
- **Tactical Genius**: Reroll one failed attack
- **Defensive Screen**: +2 Defense to capital ships
- **Concentrate Fire**: +1 damage to focus target
- **Scatter Pattern**: -1 to area attacks

### Mass Battle Resolution
For huge fleet battles:

1. **Calculate Fleet Strength**:
   - Fighter = 1 point
   - Corvette = 3 points
   - Cruiser = 10 points
   - Capital = 30 points

2. **Command Check**:
   - 2d10 + Command + Tactics
   - Add fleet quality bonus
   - Environmental modifiers

3. **Resolution**:
   - Compare totals
   - Loser takes casualties:
     - 1-2 margin: 10%
     - 3-5 margin: 20%
     - 6-9 margin: 30%
     - 10+ margin: 40%

4. **Morale**:
   - Check when 50% losses
   - Failure = retreat/surrender

---

## Quick Ship Stats

### Fighter (Viper-class)
- Hull: 40 HP
- Speed: 10 (Thrust 4)
- Defense: 16 (base 10 + 2 size + 4 maneuver)
- Weapons: Twin autocannons (2d6 kinetic)
- Shields: 5 per facing
- Heat: 10 capacity

### Freighter (Firefly-class)
- Hull: 100 HP
- Speed: 6 (Thrust 2)
- Defense: 12
- Weapons: None standard
- Shields: 10 per facing
- Heat: 20 capacity

### Cruiser (Alliance-class)
- Hull: 300 HP
- Speed: 4 (Thrust 1)
- Defense: 8
- Weapons: Multiple turrets (3d8 energy)
- Shields: 30 per facing
- Heat: 40 capacity

### EW Frigate (Blackbird-class)
- Hull: 60 HP
- Speed: 8 (Thrust 3)
- Defense: 14
- Weapons: Light turret (1d8)
- Shields: 8 per facing
- Heat: 25 capacity
- Special: +2 EWR, Multiple ECM suites

### Interdictor (Sabre-class)
- Hull: 80 HP
- Speed: 7 (Thrust 3)
- Defense: 13
- Weapons: Missile launcher (2d10)
- Shields: 12 per facing
- Heat: 20 capacity
- Special: Warp Disruptor, Interdiction Sphere

---

## Quick Resolution

For simple space encounters:

**Fast Combat** (3 rolls):
1. Detection: Awareness + Sensors
2. Positioning: Pilot + Ship
3. Combat: Best gunner + Weapons
- Highest total wins
- Margin determines outcome

**When to Use**:
- Random encounters
- Time pressure
- Teaching new players
- Background battles

---

## Design Success

This system avoids single-metric dominance by:
1. **Detection ≠ Victory**: Finding first helps but doesn't determine outcome
2. **Range Matters**: Different optimal strategies at each range
3. **Heat Limits**: Can't spam best options
4. **Momentum Physics**: Movement has consequences
5. **Crew Synergy**: Multiple paths to success

The result is dynamic space combat where positioning, resource management, and teamwork create victory—not just who rolls highest initiative.

---

## Version History

- **v4.1.0** (2025-01-25): Created comprehensive starship combat system
- **v4.1.1** (2025-01-25): Integrated Electronic Warfare systems