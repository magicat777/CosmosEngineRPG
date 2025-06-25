# Combat System

## Overview

The Cosmos Engine combat system uses the universal 2d10 resolution mechanic to create tactical, fast-paced encounters across all scales of play. Combat emphasizes meaningful player choices, technological enhancement, and cinematic action while maintaining streamlined tracking.

**Design Principles**:
- Meaningful choices over complex calculations
- Technology provides tactical options, not just bigger numbers
- Combat feels dangerous but heroes can be heroic
- Single resolution system across all scales
- Optional complexity for different play styles

**Complexity Target**: 5-6/10 (tactical depth without overwhelming tracking)

---

## Combat Overview

### Universal Combat Formula

**2d10 + Attribute + Skill + Equipment + Situation vs Target Number**

**Core Components**:
- **Attribute**: Coordination (ranged), Might (melee), or other as appropriate
- **Skill**: Combat skill or relevant specialization
- **Equipment**: Weapon/armor rating (+0 to +5 by technology era)
- **Situation**: Consolidated modifier (-3 to +3) covering range, cover, environment

### Target Numbers

Combat typically uses these TNs:
- **Static Defense**: 10 + Coordination + Armor (most attacks)
- **Opposed Rolls**: Attacker vs Defender (special maneuvers)
- **Environmental**: 14-20 (difficult circumstances)

Note: All TNs increased by +3 to account for 1-10 attribute scale

### Critical Results

**Natural 20** (rolled exactly 20 on 2d10):
- Always hits regardless of defense
- Attacker chooses critical effect (see Critical Hits)

**Natural 2** (rolled exactly 2 on 2d10):
- Always misses regardless of skill
- Equipment degradation check required

---

## Initiative & Turn Order

### Initiative System

**Initiative**: 2d10 + Coordination + Awareness

**Process**:
1. All participants roll initiative at start of encounter
2. Act in descending order (highest to lowest)
3. Keep same order throughout entire encounter
4. On ties, PCs act before NPCs, then by highest Coordination

### Combat Round Structure

#### Phase 1: Initiative (First Round Only)
- Roll 2d10 + Coordination + Awareness
- Establish turn order for entire encounter

#### Phase 2: Declare Actions
- Players announce general intentions
- No need for detailed mechanics yet
- Can change specifics when turn arrives

#### Phase 3: Action Resolution
- Act in initiative order
- Resolve each character's full turn completely
- Apply damage and effects immediately

#### Phase 4: End of Round
- Apply ongoing effects (burning, bleeding, etc.)
- Advance status effect timers
- Check equipment degradation if triggered

---

## Action Economy

### Actions per Turn

Each character gets one action of each type per turn:

#### Standard Action (Choose One)
- **Attack**: Make weapon attack or combat maneuver
- **Complex Skill Use**: Hacking, detailed medical treatment
- **Electronic Warfare**: Jam systems, hack networks
- **Special Maneuvers**: Suppressive fire, coordinated attacks

#### Move Action (Choose One)
- **Movement**: Change position, range bands
- **Power Reallocation**: Adjust enhancement settings
- **Simple Skill Use**: Basic technical tasks, quick checks
- **Combat Movement**: Evasive maneuvers, positioning

#### Quick Actions (Any Number)
- **Reload**: Change magazines, power cells
- **Activate Equipment**: Turn on devices, systems
- **Simple Communication**: Short phrases, hand signals
- **Draw/Sheathe**: Ready weapons or equipment

#### Free Actions (Any Number)
- **Drop Items**: Release held objects
- **Speak**: Brief sentences, warnings
- **Toggle Controls**: Simple switches, obvious controls
- **Look Around**: General awareness of situation

#### Reactions (Limited by Technology)
- **Defensive**: Dodge incoming attacks
- **Opportunistic**: Attack exposed enemies
- **Protective**: Shield allies from harm
- **Counter**: Respond to enemy actions

### Movement Options

#### Tactical Move (Free Action)
- **Distance**: 1 range band
- **Restriction**: Cannot move into engagement range of new enemies
- **Effect**: No penalties to other actions

#### Combat Move (Move Action)
- **Distance**: Full movement rating (typically 2-3 range bands)
- **Freedom**: Can engage new enemies
- **Effect**: No penalties

#### Sprint (Standard Action)
- **Distance**: Double movement rating
- **Effect**: -2 to all other actions this turn
- **Risk**: Easier target for opportunity attacks

#### Evasive Movement (Move Action)
- **Distance**: Half movement rating
- **Benefit**: +2 Defense until next turn
- **Use**: Escaping dangerous positions

### Technology Enhancement

Advanced characters can modify their action economy:

#### Reflex Boosters
- **Effect**: One Standard Action becomes Move Action per turn
- **Cost**: Equipment degradation risk
- **Requirement**: Information+ technology era

#### Neural Acceleration
- **Effect**: Two Standard Actions per turn, second at -2
- **Cost**: Mental strain, equipment degradation
- **Requirement**: Fusion+ technology era

#### Quantum Synapses
- **Effect**: One action of any type becomes Reaction
- **Limit**: Once per scene
- **Cost**: Major equipment degradation
- **Requirement**: Stellar+ technology era

---

## Range & Positioning

### Universal Range Bands

Distance is abstracted into range bands that scale by operational level:

| Scale | Close | Short | Medium | Long | Extreme |
|-------|-------|-------|--------|------|---------|
| **Personal** | 0-2m | 3-10m | 11-50m | 51-250m | 251m+ |
| **Vehicle** | 0-50m | 51-500m | 0.5-5km | 5-25km | 25km+ |
| **Starship** | 0-1km | 1-10km | 10-100km | 100-1000km | 1000km+ |
| **Capital** | 0-10km | 10-100km | 100-1000km | 1000-10000km | 10000km+ |

### Range Modifiers

**Applied to attack rolls**:
- **Close**: +1 (melee range, point-blank shooting)
- **Short**: +0 (optimal range for most weapons)
- **Medium**: -1 (standard engagement distance)
- **Long**: -2 (requires good aim and weapons)
- **Extreme**: -3 (specialist equipment needed)

### Engagement Rules

**Engagement Range**: Close range creates special conditions:
- **Melee Attacks**: Only possible at Close range
- **Opportunity Attacks**: Leaving Close range without Evasive movement
- **Ranged Penalties**: -2 to ranged attacks while in Close range
- **Movement Restrictions**: Tactical moves cannot enter new Close ranges

---

## Cover & Concealment

### Cover System

Physical protection that increases Defense:

#### Light Cover (+1 Defense)
- **Examples**: Corner of wall, vehicle door, debris
- **Protection**: Partial body coverage
- **Weakness**: Vulnerable to flanking, area effects

#### Heavy Cover (+2 Defense)
- **Examples**: Solid wall, vehicle hull, reinforced position
- **Protection**: Most of body covered
- **Requirement**: Must be deliberately using cover

#### Superior Cover (+3 Defense)
- **Examples**: Bunker, turret, prepared fortification
- **Protection**: Nearly complete protection
- **Special**: Attackers need Awareness check (TN 12) to target

#### Total Cover (Cannot be targeted)
- **Examples**: Around corner, behind solid barrier
- **Protection**: Complete line-of-sight blockage
- **Limitation**: Cannot attack while in total cover

### Concealment System

Reduces attacker's ability to target accurately:

#### Light Concealment (-1 to enemy attacks)
- **Examples**: Dim lighting, light smoke, rain
- **Effect**: Harder to aim precisely
- **Duration**: Usually environmental

#### Heavy Concealment (-2 to enemy attacks)
- **Examples**: Heavy smoke, darkness, dense fog
- **Effect**: Difficult to distinguish targets
- **Tactics**: Often created by equipment or grenades

#### Total Concealment (Cannot target visually)
- **Examples**: Complete darkness, opaque barriers
- **Effect**: Must use other senses or area attacks
- **Technology**: Thermal/EM sensors can overcome

### Positioning Benefits

#### Elevation Advantage (+1 attack)
- **Requirement**: Attacking from higher position
- **Benefit**: Better angle of attack
- **Examples**: Rooftops, elevated platforms, hillsides

#### Flanking (+1 attack)
- **Requirement**: Attacking from target's side/rear
- **Benefit**: Reduced effective cover
- **Tactics**: Coordinated team movement

#### Formation Fighting
- **Cover Formation**: One character provides +1 Defense to adjacent ally
- **Overwatch**: Character sacrifices movement to grant allies defensive bonus
- **Leapfrog**: Team advances 2 range bands with mutual protection

---

## Attack Resolution

### Basic Attack Sequence

1. **Declare Target**: Choose enemy and weapon/attack type
2. **Check Range**: Confirm weapon can reach target
3. **Calculate Modifiers**: Range, cover, concealment, situation
4. **Roll Attack**: 2d10 + Attribute + Skill + Equipment + Situation
5. **Compare to Defense**: Target's Defense TN
6. **Apply Results**: Damage, status effects, critical effects

### Attack Types

#### Ranged Attacks
- **Attribute**: Coordination + Combat skill
- **Range**: Depends on weapon type
- **Ammunition**: May require Quick Action to reload

#### Melee Attacks
- **Attribute**: Might + Combat skill
- **Range**: Must be at Close range
- **Benefit**: Cannot be disarmed by EM weapons

#### Area Effect Attacks
- **Target**: Area rather than individual
- **Effect**: All characters in area roll defense
- **Cover**: Provides normal benefits
- **Examples**: Grenades, flamethrowers, energy weapons

### Damage Application

**Damage**: Weapon base + Success margin + Enhancements
- **Weapon Base**: Varies by weapon (typically 1d10 personal scale)
- **Success Margin**: +1 damage per 3 points over Defense TN
- **Enhancements**: Technology, ammunition, power allocation

**Damage Types**:
- **Kinetic**: Bullets, blades, mass drivers
- **Energy**: Lasers, plasma, particle beams
- **Electromagnetic**: EMP, ion weapons, system viruses
- **Exotic**: Quantum weapons, psionics, reality manipulation

### Critical Hits

**Natural 20** triggers critical effects. Attacker chooses ONE:

#### Double Damage
- Roll weapon damage twice and add together
- Most reliable choice for eliminating threats

#### Status Effect
- Inflict appropriate condition based on damage type
- **Kinetic**: Bleeding, knockdown, physical impaired
- **Energy**: Burning, system overload, mental impaired
- **EM**: System disabled, electronic interference
- **Exotic**: Varies by source

#### Penetrating Hit
- Ignore target's armor rating completely
- Effective against heavily armored opponents
- Represents hitting weak spots or system vulnerabilities

#### Tactical Advantage
- Grant ally bonus action immediately
- Force enemy to move one range band
- Disrupt enemy formation or plans
- Create battlefield opportunities

---

## Special Maneuvers

### Core Tactical Actions

#### Suppressive Fire
- **Action**: Standard Action
- **Cost**: 3x normal ammunition
- **Effect**: Target area becomes "Suppressed"
- **Suppressed**: Targets must make Resolve check (TN 15) or lose Standard Action
- **Duration**: Until suppressor's next turn
- **Tactics**: Area denial, movement control

#### Coordinated Attack
- **Requirements**: 2+ attackers with communication
- **Action**: All attackers use Standard Actions simultaneously
- **Benefit**: +1 damage per additional attacker (maximum +3)
- **Risk**: All attackers suffer -2 Defense until next turn
- **Tactics**: Focus fire, overwhelm defenses

#### Electronic Warfare
- **Action**: Standard Action
- **Requirement**: Advanced+ technology era
- **Target**: Electronic system within Short range
- **Effect**: Target gains "System Disabled" status for 3 rounds
- **Defense**: Target can resist with Tech + Electronic Defense
- **Applications**: Disable weapons, sensors, life support

#### Power Surge
- **Action**: Part of any attack
- **Cost**: Advance equipment degradation one level
- **Effect**: Choose ONE enhancement for this attack:
  - Double damage dice
  - Ignore target's best defense type
  - Attack becomes area effect (affects adjacent targets)
- **Risk**: Equipment may become damaged or destroyed

### Advanced Maneuvers

#### Called Shots
- **Action**: Standard Action with previous turn's aim
- **Mechanics**: -2 to attack roll to target specific component
- **Effects by Target**:
  - **Weapons**: Target weapon becomes damaged
  - **Sensors**: Target becomes blinded
  - **Engines**: Target becomes immobilized
  - **Life Support**: Target begins venting atmosphere

#### Overwatch
- **Action**: Standard Action to establish
- **Effect**: Make immediate attack when trigger condition met
- **Attack Penalty**: -1 (divided attention)
- **Duration**: Until next turn or trigger activated
- **Tactics**: Covering movement, defending positions

#### Grappling (Close Range Only)
- **Action**: Standard Action
- **Contest**: Attacker's Might vs Defender's Might or Coordination
- **Success**: Target becomes grappled (Physical Disabled for movement)
- **Escape**: Opposed check as Standard Action
- **Advantage**: Grappled targets cannot dodge ranged attacks

#### Disarming
- **Action**: Standard Action
- **Target**: Opponent's weapon at Close range
- **Contest**: Attacker's Combat vs Defender's Combat
- **Success**: Weapon falls to ground in same range band
- **Defense**: EM weapons can disrupt electronic weapons at range

---

## Damage & Defense

### Defense Types

Characters have multiple defense options:

#### Passive Defense
- **Source**: Armor, natural toughness, cover
- **Range**: +0 to +3 (technology era limited)
- **Effect**: Constant protection against physical attacks
- **Best Against**: Kinetic and some energy weapons

#### Active Defense
- **Source**: Shields, evasive maneuvers, powered armor
- **Range**: +0 to +3 (technology era limited)
- **Effect**: Dynamic protection requiring power/attention
- **Best Against**: Energy weapons and area effects

#### Electronic Defense
- **Source**: ECM, firewalls, AI assistance
- **Range**: +0 to +3 (technology era limited)
- **Effect**: Protection against digital/EM attacks
- **Best Against**: Electromagnetic and hacking attempts

**Maximum Total Defense**: +6 (prevents target number inflation)

### Status Effects in Combat

Status effects use three categories with three severity levels:

#### Physical Status
**Impaired** (-2 to physical actions): Minor injuries, fatigue
**Disabled** (Cannot take physical actions): Serious injury, restraints
**Critical** (Ongoing crisis): Bleeding, burning, organ failure

#### Mental Status
**Impaired** (-2 to mental actions): Confusion, minor stress
**Disabled** (Cannot think clearly): Stunned, overwhelmed
**Critical** (Mental breakdown): Panic, berserk rage, catatonic

#### System Status
**Impaired** (-2 to electronic actions): Minor interference
**Disabled** (Systems offline): Hacked, power loss, EMP
**Critical** (Cascade failure): Progressive system failure

**Stacking Rules**: Different categories stack, same categories don't

---

## Cross-Scale Combat

### Scale Interactions

When different scales engage:

#### Scale Modifiers
- **+1 Scale Advantage**: +2 to hit (easier to hit larger targets)
- **-1 Scale Disadvantage**: -2 to hit (harder to hit smaller targets)
- **±2+ Scale Difference**: Generally cannot engage effectively

#### Damage Scaling
- **Same Scale**: Normal damage resolution
- **+1 Scale Larger**: Normal damage + automatic status effect
- **+2 Scale Larger**: Automatic Critical health threshold
- **+3 Scale Larger**: Instant defeat (personal scale)

#### Examples
- **Personal vs Vehicle**: Heavy weapons needed, cover critical
- **Vehicle vs Starship**: Swarm tactics, target subsystems
- **Starship vs Capital**: Focused fire, exploit blind spots

---

## Technology & Enhancement

### Enhancement Modes

Choose one per scene (Advanced+ technology only):

#### Standard Mode
- **Effect**: Normal operation
- **Cost**: No penalties or degradation
- **Use**: Conservative approach, reliable performance

#### Boosted Mode
- **Effect**: +2 to all actions
- **Cost**: Faster equipment degradation
- **Use**: When performance matters more than longevity

#### Overcharged Mode
- **Effect**: +4 to specific action type, -2 to everything else
- **Cost**: High degradation risk
- **Use**: Desperate situations, specialized tasks

### System Power Allocation

Distribute 3-5 points (by technology era) among:

#### Offense (each point adds +1 damage)
- **High Allocation**: Glass cannon approach
- **Synergy**: Works best with accurate weapons
- **Risk**: Vulnerable to counter-attack

#### Defense (each point adds +1 to Defense TN)
- **High Allocation**: Tank approach
- **Synergy**: Works best with good positioning
- **Risk**: Lower damage output

#### Systems (each point adds +1 to electronic actions)
- **High Allocation**: Technical specialist
- **Synergy**: Electronic warfare, hacking, sensors
- **Risk**: Vulnerable in direct combat

### Equipment Degradation

**Triggers**:
- **Natural 2**: Any roll using equipment
- **Overcharged Mode**: Extended use
- **Called Shots**: Successful targeting of equipment
- **Environmental**: Harsh conditions, combat damage

**Equipment Conditions**:
- **Functional**: Full rating applies
- **Damaged**: Rating halved (round down)
- **Destroyed**: Rating = 0, unusable

**Field Repair**:
- **Damaged → Functional**: Engineering check (TN 12), 5 minutes
- **Destroyed → Damaged**: Engineering check (TN 17), 1 hour, proper tools

---

## Environmental Combat

### Hazardous Conditions

Combat often occurs in dangerous environments:

#### Vacuum
- **Effect**: See Environmental Hazards section
- **Tactics**: Sealed suits essential, projectiles continue forever
- **Advantage**: No air resistance, extreme range possible

#### Zero Gravity
- **Effect**: -2 to all physical actions until adapted
- **Movement**: Requires handholds or thruster packs
- **Tactics**: Three-dimensional thinking, newton's laws apply

#### Extreme Temperature
- **Effect**: Equipment failures, suit dependence
- **Hot**: System Impaired conditions common
- **Cold**: Brittle equipment, reduced battery life

#### Radiation Fields
- **Effect**: Ongoing damage, electronic interference
- **Protection**: Shielded suits, limited exposure time
- **Tactics**: Quick strikes, remote engagement

### Environmental Tactics

#### Using Environment as Weapon
- **Explosive Decompression**: Breach hull/windows
- **Gravity Wells**: Push enemies into dangerous areas
- **Environmental Systems**: Control life support, lighting
- **Natural Hazards**: Lure enemies into danger zones

#### Environmental Protection
- **Sealed Suits**: Essential for hostile environments
- **Emergency Protocols**: Backup air, radiation pills
- **Environmental Sensors**: Detect invisible hazards
- **Shelter Construction**: Create safe zones

---

## Combat Lite Mode

For new players or simplified games:

### Essential Rules Only
1. **Initiative**: 2d10 + Coordination + Awareness
2. **Actions**: Standard + Move + any Quick/Free per turn
3. **Attack**: 2d10 + Coordination + Combat + Weapon vs Defense
4. **Damage**: Weapon dice to Hit Points
5. **Health**: Healthy/Wounded/Critical/Defeated thresholds

### Skip Initially
- Special maneuvers beyond basic attacks
- Complex equipment systems
- Cross-scale interactions
- Environmental hazards
- Status effect details

Add complexity as players become comfortable.

---

## GM Guidelines

### Pacing Combat

#### Round Length
- **Personal Scale**: 6 seconds per round
- **Vehicle Scale**: 30 seconds per round
- **Starship Scale**: 5 minutes per round
- **Capital Scale**: 30 minutes per round

#### Encounter Pacing
- **Quick Skirmish**: 3-5 rounds
- **Standard Fight**: 6-10 rounds
- **Major Battle**: 10-15 rounds
- **Epic Confrontation**: 15+ rounds

### Tactical Depth

#### New Players
- Focus on basic attacks and movement
- Simple cover and concealment
- Avoid complex maneuvers initially

#### Experienced Players
- Encourage creative tactics
- Use full range of special maneuvers
- Environmental interaction
- Equipment optimization

#### System Masters
- Complex multi-scale battles
- Advanced technology integration
- Environmental hazard combinations
- Political/social combat consequences

### Dramatic Moments

#### Critical Hits
- Describe results cinematically
- Let players narrate their critical effects
- Use environment for dramatic flair

#### Environmental Drama
- Ticking clocks (air running out, reactor overload)
- Changing conditions (gravity failure, hull breach)
- Cascading failures (one system affects others)

#### Scale Transitions
- Personal heroics affecting larger battles
- Individual skill determining fleet engagement
- Technology solutions to impossible odds

---

## Quick Reference

### Action Economy Summary
- **Standard**: Attack, complex skills, special maneuvers
- **Move**: Movement, simple skills, reallocation
- **Quick**: Reload, activate, communicate
- **Free**: Drop, speak, toggle
- **Reaction**: Defend, counter, respond

### Range Modifiers
- **Close**: +1 attack
- **Short**: +0 attack
- **Medium**: -1 attack
- **Long**: -2 attack
- **Extreme**: -3 attack

### Cover & Concealment
- **Light Cover**: +1 Defense
- **Heavy Cover**: +2 Defense
- **Superior Cover**: +3 Defense
- **Light Concealment**: -1 enemy attack
- **Heavy Concealment**: -2 enemy attack

### Status Effect Quick Reference
| Category      | Impaired      | Disabled          | Critical 
|----------     |----------     |----------         |----------
| **Physical**  | -2 physical   | No movement       | Bleeding/Burning
| **Mental**    | -2 mental     | No thinking       | Panic/Berserk
| **System**    | -2 electronic | Systems offline   | Cascade failure

### Common Target Numbers
- **Defense**: 8 + armor rating
- **Cover Use**: Automatic if available
- **Status Recovery**: 11-14 depending on severity
- **Equipment Repair**: 12 (damaged) or 17 (destroyed)

---

## Design Philosophy

This combat system achieves:
- **Tactical Depth**: Meaningful choices without overwhelming complexity
- **Cinematic Feel**: Fast resolution with dramatic results
- **Technology Integration**: Equipment matters but doesn't dominate
- **Scale Flexibility**: Works from personal duels to fleet battles
- **Player Agency**: Multiple valid approaches to every situation

The 5-6/10 complexity target allows for sophisticated tactical play while remaining accessible to new players through the Combat Lite mode.

---

## Version History

- **v3.5.0** (2025-01-24): Created unified combat system document
- **v3.5.0** (2025-01-24): Integrated all combat mechanics from multiple sources
- **v3.5.0** (2025-01-24): Added environmental combat and scaling guidelines