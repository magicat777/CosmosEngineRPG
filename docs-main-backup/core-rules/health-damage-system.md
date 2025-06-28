# Health & Damage System

## Overview

The Cosmos Engine uses a streamlined health system that balances tactical depth with easy tracking. Characters track a single Hit Point pool with meaningful thresholds, while vehicles and larger scales use abstract condition tracks. The system supports both new players seeking simplicity and experienced players wanting tactical combat options.

**Core Design Principles**:
- Single resource tracking (Hit Points for personal scale)
- Binary threshold states over complex calculations
- Meaningful player choices during critical moments
- Seamless integration across all scales
- Optional complexity for tactical depth

---

## Personal Scale Health

### Hit Points

**Calculation**: 40 + (Might × 8) + (Resolve × 4)

**Starting Range**: 52-120 HP (average character has 80-90 HP)
**Maximum Range**: 200 HP (with maximum attributes at level 20)

Hit Points represent a combination of physical durability, combat training, luck, and the ability to minimize serious harm. The higher HP pool allows for tactical combat where conditions and status effects matter more than raw damage.

### Health Thresholds

Characters exist in one of five health states:

#### **Healthy (100-75% HP)**
- No penalties or visible effects
- Character operates at peak performance
- Minor scrapes and bruises only

#### **Bloodied (74-50% HP)**
- Visible injuries (cuts, bruises, minor burns)
- No mechanical penalties (heroic resilience)
- Other characters can see you're hurt
- **Narrative Impact**: Description should reflect combat wear

#### **Wounded (49-25% HP)**
- Significant injuries (bleeding, burns, fractures)
- **-1 penalty** to all actions
- Clearly struggling but still fighting
- **Narrative Impact**: Labored breathing, favoring wounds

#### **Critical (24-10% HP)**
- Severe trauma threatening consciousness
- **-2 penalty** to all actions
- Must make **Resolve check (TN 14)** for strenuous activities
- **Strenuous Activities**: Sprinting, climbing, lifting heavy objects

#### **Defeated (9-0% HP)**
- Character is down and out of the fight
- **Player Choice** (based on campaign tone):
  - **Heroic**: Unconscious but stable
  - **Gritty**: Dying (requires death saves)
  - **Cinematic**: Dramatically injured but conscious for final actions

### Wound Markers (Optional Narrative Tool)

When crossing health thresholds, players can note the type of injury for roleplay:
- **Light Wounds** (75→50%): Painful but not debilitating
- **Serious Wounds** (50→25%): Significant injury requiring attention
- **Grievous Wounds** (25→0%): Life-threatening trauma

---

## Damage Application

### Standard Damage

Most attacks deal standard damage that reduces Hit Points directly.

**Damage Calculation**: Weapon Base + Success Margin + Modifiers
- **Base Damage**: Varies by weapon (typically 1d10 for personal scale)
- **Success Margin**: Extra damage for beating defense by 5+ 
- **Modifiers**: Technology enhancements, special ammunition, etc.

### Damage Types & Defenses

The four damage types interact with specific defense types:

#### **Damage Type Matrix**

| Damage Type | Effective Defense | Weak Against | Special Effects |
|-------------|-------------------|--------------|-----------------|
| **Kinetic** | Physical Armor | Energy Shields | Knockback, bleeding |
| **Energy** | Reflective Armor | Electronics | Burns, overheating |
| **Electromagnetic** | Shielding | All Electronics | System disruption |
| **Exotic** | None | Everything | Varies by source |

#### **Defense Applications**
- **Physical Defense**: Armor, cover, natural toughness
- **Mental Defense**: Willpower, training, psychic shields
- **Electronic Defense**: Hardening, firewalls, isolation

### Wound Thresholds

When taking damage equal to these percentages of maximum HP in a single hit, characters suffer additional effects:

#### **Minor Wound** (10% of max HP)
- No immediate mechanical effect
- Visible injury for roleplay purposes
- May leave scars or lasting marks

#### **Moderate Wound** (20% of max HP)
- **Might Save (TN 14)** or suffer Physical Impaired for the scene
- Triggers bleeding or other ongoing effects
- Requires medical attention after combat

#### **Major Wound** (30% of max HP)
- **Automatic** Physical Impaired status
- **Might Save (TN 17)** or suffer Physical Disabled for 1 round
- May break bones or cause internal injuries

#### **Grievous Wound** (40% of max HP)
- **Automatic** Physical Disabled for 1 round
- **Might Save (TN 20)** or fall to Critical health state
- Requires immediate medical intervention
- May cause permanent injuries without proper treatment

### Critical Hits

**Natural 20** on attack rolls trigger critical effects. The attacker chooses ONE:

#### **Critical Options**
1. **Maximum Damage**: Deal maximum possible damage on all dice (no rolling)
2. **Brutal Strike**: Normal damage + inflict Physical Impaired (no save)
3. **Penetrating Strike**: Normal damage + ignore all armor/defenses
4. **Devastating Blow**: Normal damage + trigger next Wound Threshold
5. **Tactical Advantage**: Normal damage + grant ally immediate action or force enemy to reposition

### Cross-Scale Damage

When different scales interact:
- **+1 Scale Larger**: Automatic status effect + normal damage
- **+2 Scale Larger**: Automatic Critical threshold (personal scale)
- **+3 Scale Larger**: Instant defeat (personal scale)

---

## Status Effects

Status effects use the three-category system from combat:

### Physical Status
**Impaired** (-2 to physical actions)
- Caused by: Wounds, fatigue, environmental effects
- Duration: Short (1-3 rounds) or Extended (scene)

**Disabled** (Cannot perform physical actions)
- Caused by: Paralysis, restraints, severe injury
- Duration: Extended (until treated)

**Critical** (Ongoing physical crisis)
- **Burning**: 1 damage/round until extinguished
- **Bleeding**: 1 damage/round until stabilized
- Requires action to stop

### Mental Status
**Impaired** (-2 to mental actions)
- Caused by: Confusion, fear, sensory overload
- Duration: Short (1-3 rounds)

**Disabled** (Cannot think clearly)
- Caused by: Stun, terror, mind control
- Duration: Short (usually 1 round)

**Critical** (Mental breakdown)
- **Panicked**: Must flee or take full defense
- **Berserk**: Must attack nearest target
- Requires Resolve check to overcome

### System Status
**Impaired** (-2 to electronic actions)
- Caused by: Interference, minor damage
- Duration: Short or Extended

**Disabled** (Systems offline)
- Caused by: EMP, hacking, power loss
- Duration: Extended (until repaired)

**Critical** (Cascade failure)
- **Overloading**: -1 cumulative penalty/round
- **Viral**: Spreads to connected systems
- Requires Tech check to stop

---

## Recovery & Healing

### Natural Recovery

**Rest**: Characters recover differently based on activity level:
- **Light Activity**: 1 HP per day
- **Full Rest**: 2 HP per day
- **Medical Supervision**: 3 HP per day

**Threshold Recovery**: Crossing back above 25% removes Critical penalty

### Medical Treatment

Medicine skill checks provide immediate healing:

#### **Field Medicine (TN 11)**
- **Time**: 1 minute
- **Effect**: Stabilize dying character + restore 1d10 HP
- **Limit**: Once per character per scene
- **Equipment**: Basic medical supplies

#### **Medical Treatment (TN 14)**
- **Time**: 10 minutes
- **Effect**: Restore 2d10 HP + remove one status effect
- **Limit**: Once per character per day
- **Equipment**: Medical kit or facility

#### **Surgery (TN 17)**
- **Time**: 1 hour
- **Effect**: Remove Critical threshold penalty + restore character to 50% HP
- **Limit**: Requires proper medical facility
- **Risk**: Failure causes 1d10 damage

### Technology Enhancement

Medical equipment follows standard equipment bonuses:
- **First Aid Kit**: +1 to Field Medicine
- **Medical Scanner**: +2 to diagnosis and treatment
- **Surgical Suite**: +3 to Surgery checks
- **Regeneration Tank**: +4 to all medical checks

---

## Vehicle & Larger Scale Health

### Condition Tracks

Vehicles and larger entities use the 5-box condition track:

**Operational** → **Damaged** → **Impaired** → **Critical** → **Destroyed**

#### **Condition Effects**
- **Operational**: No penalties
- **Damaged**: -1 to all actions
- **Impaired**: -2 to all actions, some systems offline
- **Critical**: -3 to all actions, major systems failing
- **Destroyed**: Inoperable (crew may survive)

### Scale Damage Application

**Damage Thresholds** by relative scale:
- **Light Hit** (-2 scale or less): 1 box
- **Standard Hit** (same scale): 1 box
- **Heavy Hit** (critical or +1 scale): 2 boxes
- **Devastating Hit** (+2 scale or more): 3+ boxes

### Repair & Maintenance

**Field Repairs** (Engineering + Tech):
- **Damaged → Operational**: TN 11, 10 minutes
- **Impaired → Damaged**: TN 14, 1 hour
- **Critical → Impaired**: TN 17, 6 hours

**Facility Repairs**: Reduce all TNs by 3, halve time requirements

---

## Death & Dying

### Dying Condition

At **0 HP**, character's fate depends on campaign tone:

#### **Heroic Mode** (Default)
- Character is unconscious but stable
- Recovers to 1 HP after scene ends
- No risk of actual death except by choice

#### **Gritty Mode**
- Character is dying
- **Death Save**: Resolve check (TN 11) each round
- **Failure**: Character dies
- **Success**: Remain dying but stable for 1 round
- **Three Successes**: Stabilize at 1 HP

#### **Cinematic Mode**
- Character remains conscious for final actions
- Can act at -4 penalty for dramatic moments
- Dies at end of scene unless stabilized

### Stabilization

**Any character** can attempt to stabilize the dying:
- **Medicine Check** (TN 11): Stop death saves
- **Psionics**: May provide alternative methods
- **Technology**: Auto-stabilizers, medical drones

### Character Death

Death should be meaningful. Options:
- **Heroic Sacrifice**: Achieve major goal
- **Last Stand**: Take enemies with you
- **Final Words**: Pass on crucial information
- **Legacy**: Inspire allies or successors

---

## Quick Reference Tables

### Damage by Weapon Scale
| Weapon Type | Personal | Vehicle | Starship | Capital |
|-------------|----------|---------|----------|----------|
| **Light** | 1d10 | 1 box | - | - |
| **Standard** | 2d10 | 1 box | 1 box | - |
| **Heavy** | 3d10 | 2 boxes | 1 box | 1 box |
| **Devastating** | 4d10+ | 3 boxes | 2 boxes | 1 box |

### Recovery Summary
| Method | Time | Effect | TN |
|--------|------|--------|-----|
| **Natural Rest** | 1 day | 1-3 HP | - |
| **Field Medicine** | 1 min | Stabilize +1d10 HP | 11 |
| **Medical Treatment** | 10 min | 2d10 HP + remove status | 14 |
| **Surgery** | 1 hour | Remove Critical + 50% HP | 17 |

### Status Duration Guide
| Duration | Rounds | Real Time | Example |
|----------|--------|-----------|---------|
| **Instant** | 0 | Immediate | Knockback |
| **Short** | 1-3 | 6-18 seconds | Stun, daze |
| **Extended** | Scene | 5-30 minutes | Injuries |
| **Long** | Session | Hours | Serious wounds |

---

## Combat Lite Mode

For new players or quick games, use only:

### Essential Rules
1. **Track HP** with three thresholds (75%, 25%, 0%)
2. **Critical hits** just deal double damage
3. **Medicine** heals 1d10 HP (TN 11)
4. **0 HP** means unconscious (Heroic Mode)

### Ignore Initially
- Damage type interactions
- Critical hit options
- Detailed status effects
- Complex recovery options

Players can add tactical options as they become comfortable with the system.

---

## GM Guidelines

### Pacing Health Loss
- **Minor Encounters**: 10-25% HP loss
- **Moderate Challenges**: 25-50% HP loss  
- **Major Battles**: 50-75% HP loss
- **Climactic Fights**: Risk of defeat

### Describing Damage
- Make hits feel impactful without being gratuitous
- Use threshold crossings for dramatic description
- Let players describe their own injuries
- Match description to campaign tone

### Balancing Recovery
- Ensure medical supplies are meaningful resources
- Make rest a tactical decision
- Use time pressure to prevent full healing
- Consider lingering injuries for drama

### Scaling Difficulty
- **New Players**: Enemies deal flat damage
- **Experienced**: Use damage types and status effects
- **Tactical Masters**: Full critical options and conditions

---

## Environmental Hazards

Science fiction settings expose characters to dangers beyond combat. Environmental hazards use the same damage and status effect systems, creating consistency while reflecting the hostile nature of space and alien worlds.

### Hazard Categories

Environmental hazards fall into three severity levels:

**Minor Hazards** (Inconvenient)
- Inflict status effects or minor damage over time
- Protection equipment negates completely
- Examples: Thin atmosphere, uncomfortable temperature

**Major Hazards** (Dangerous)
- Deal significant damage or severe status effects
- Protection equipment reduces but doesn't eliminate
- Examples: Toxic atmosphere, high radiation

**Extreme Hazards** (Lethal)
- Cause rapid death or destruction
- Protection equipment provides limited time
- Examples: Hard vacuum, stellar radiation

### Core Environmental Hazards

#### Vacuum Exposure

The most iconic space hazard. Effects depend on protection level:

**No Protection**:
- **Round 1**: Physical Disabled (lungs expel air)
- **Round 2**: 1d10 damage + Mental Disabled (hypoxia)
- **Round 3+**: 2d10 damage per round
- **Death**: After Resolve + 2 rounds

**Emergency Suit** (thin emergency protection):
- **10 minutes**: Normal operation
- **After 10 min**: 1 damage per minute
- **Suit Failure**: Treat as No Protection

**EVA Suit** (proper space suit):
- **2-8 hours**: Normal operation (by tech era)
- **Low Power**: System Impaired status
- **Suit Breach**: 1d10 damage, suit seals in 1 round

**Rapid Decompression**:
- **Explosive**: 2d10 damage + knockback
- **Slow Leak**: Awareness check (TN 14) to notice
- **Sealed Doors**: May trap or crush

#### Radiation Exposure

Space is filled with lethal radiation. Protection and duration determine effects:

**Radiation Levels**:

**Background** (cosmic rays, solar wind):
- **Unshielded**: 1 damage per day
- **Light Shielding**: No effect
- **Duration**: Cumulative over months

**Elevated** (solar flares, reactor leaks):
- **Unshielded**: 1d10 damage per hour
- **Light Shielding**: 1 damage per hour
- **Heavy Shielding**: No immediate effect

**Extreme** (reactor core, stellar proximity):
- **Unshielded**: 2d10 damage per round
- **Light Shielding**: 1d10 damage per round
- **Heavy Shielding**: 1 damage per round

**Radiation Effects**:
- **Acute** (immediate): Direct HP damage
- **Chronic** (long-term): Physical Impaired status
- **Severe**: Physical Disabled, System Impaired
- **Treatment**: Medicine (TN 14) + medical facility

#### Temperature Extremes

Space and alien worlds feature killing cold and heat:

**Extreme Cold** (-100°C or below):
- **No Protection**: 1d10 damage per minute
- **Basic Suit**: 1 damage per 10 minutes
- **Environmental Suit**: Normal operation
- **Effects**: Physical Impaired → Disabled → Death
- **Metal Contact**: 1d10 instant damage

**Extreme Heat** (200°C or above):
- **No Protection**: 2d10 damage per round
- **Basic Suit**: 1d10 damage per minute
- **Environmental Suit**: 1 damage per 10 minutes
- **Effects**: System Impaired (equipment fails first)
- **Direct Flame**: Use Burning critical status

**Temperature Shock**:
- Rapid temperature change: 1d10 damage
- Equipment check or suffer System Impaired
- Thermal stress can crack helmets/seals

#### Atmospheric Hazards

Alien atmospheres range from toxic to corrosive:

**Toxic Atmosphere**:
- **Mild** (CO2, low oxygen): Physical Impaired after 10 minutes
- **Moderate** (ammonia, methane): 1d10 damage per minute
- **Severe** (chlorine, acid vapor): 2d10 damage per round
- **Protection**: Sealed suit or respirator

**Corrosive Atmosphere**:
- **Equipment**: -1 condition level per hour
- **Exposed Skin**: 1d10 damage per round
- **Suit Breach**: Immediate corrosion begins
- **Examples**: Venus-like acid clouds

**High Pressure**:
- **2-5 atmospheres**: Physical Impaired
- **5-10 atmospheres**: Physical Disabled
- **10+ atmospheres**: 1d10 damage per minute
- **Decompression**: Follow vacuum rules if rapid

#### Gravity Variations

Different worlds mean different gravity:

**Low Gravity** (0.1-0.5g):
- **Movement**: Double jump distances
- **Combat**: -2 to melee attacks (overswing)
- **Extended Exposure**: Might checks or lose 1 Might/month
- **Adaptation**: 1 week to adjust

**High Gravity** (1.5-3g):
- **Movement**: Half speed, -2 to Athletics
- **Burden**: Physical Impaired status
- **Extended Exposure**: 1 damage per hour
- **Adaptation**: Might check (TN 14) to function normally

**Extreme Gravity** (3g+):
- **Movement**: Physical Disabled (can barely move)
- **Damage**: 1d10 per minute from organ stress
- **Equipment**: May malfunction or break
- **Protection**: Powered armor or gravity compensation

**Zero Gravity**:
- **Movement**: Requires handholds or thrusters
- **Combat**: -2 to all physical actions
- **Disorientation**: Mental Impaired until adapted
- **Space Sickness**: Resolve check or Physical Impaired

#### Exotic Hazards

Science fiction's unique dangers:

**Electromagnetic Fields**:
- **Strong**: System Impaired to all electronics
- **Extreme**: System Disabled, 1d10 to cyborgs
- **Shielding**: Hardened systems reduce effects

**Psychic Storms** (Nexus-related):
- **Minor**: Mental Impaired to psionics
- **Major**: Mental Disabled to all
- **Extreme**: 1d10 damage + permanent effects
- **Protection**: Psionic shields or meditation

**Temporal Anomalies**:
- **Dilation**: Actions take longer/shorter
- **Loops**: Repeat same round
- **Fractures**: Multiple timeline versions
- **Protection**: Temporal stabilizers

**Nanoplagues**:
- **Aggressive**: 1 damage per round, spreads
- **Conversion**: Transforms matter slowly
- **Grey Goo**: Exponential consumption
- **Protection**: EM fields, extreme heat

### Environmental Protection

#### Protection Levels

**Clothing/Armor** (Level 0):
- No environmental protection
- Decorative or combat only

**Respirator** (Level 1):
- Protects against: Toxic atmosphere
- Duration: 1-4 hours
- No protection: Vacuum, temperature, radiation

**Emergency Suit** (Level 2):
- Protects against: Vacuum (10 min), toxic atmosphere
- Limited: Temperature (±50°C), radiation
- Duration: 10 minutes to 1 hour

**Environmental Suit** (Level 3):
- Protects against: Most conditions
- Duration: 2-8 hours by tech era
- Vulnerable: Extreme conditions

**Powered Armor** (Level 4):
- Protects against: All standard hazards
- Duration: 8-24 hours
- Features: Gravity compensation, radiation shielding

**Specialized Protection**:
- **Radiation Suit**: +2 levels vs radiation only
- **Thermal Suit**: +2 levels vs temperature only
- **Pressure Suit**: +2 levels vs pressure only

#### Technology Era Modifiers

**Primitive/Industrial**: Basic protection only
**Information Era**: Standard suits available
**Fusion Era**: Extended duration, better protection
**Stellar Era**: Self-repairing, adaptive protection
**Cosmic Era**: Near-immunity to environmental hazards

### Hazard Combination Effects

Multiple hazards create compounded dangers:

**Vacuum + Cold**: Double damage from cold
**Radiation + Heat**: System failures accelerate
**Toxic + Corrosive**: Suit breaches guarantee
**High Gravity + Heat**: Exhaustion in minutes

### Quick Reference: Hazard Survival Times

| Hazard | No Protection | Basic Suit | Full Suit |
|--------|---------------|------------|-----------|
| **Vacuum** | 2-5 rounds | 10 minutes | 2-8 hours |
| **Radiation (Extreme)** | 1-3 rounds | 1-5 minutes | 1 hour |
| **Temperature (Extreme)** | 1-5 rounds | 10 minutes | 2-4 hours |
| **Toxic Atmosphere** | 1-10 minutes | 1 hour | 8+ hours |
| **High Pressure** | 1-10 minutes | 1 hour | Indefinite |

### Environmental Scenes

Use environmental hazards to create tension:

**Decompression Emergency**: Race to seal breaches
**Radiation Storm**: Find shelter before exposure
**Hostile Planet**: Limited suit power vs distance
**Derelict Exploration**: Unknown atmospheric dangers
**Combat in Hazards**: Tactical use of environment

### GM Guidelines

**Telegraphing Danger**:
- Sensor warnings for radiation/atmosphere
- Visual cues for temperature/pressure
- NPC reactions to demonstrate threat
- Equipment beginning to fail

**Pacing Hazard Damage**:
- Start with status effects
- Escalate to HP damage
- Create decision points
- Allow heroic actions

**Protection as Resource**:
- Suit power/air is finite
- Damage degrades protection
- Repairs require time/parts
- Upgrades are meaningful

---

## Design Philosophy Notes

This system achieves several goals:
- **Single Resource**: HP tracking remains simple
- **Meaningful Thresholds**: Clear state changes
- **Tactical Depth**: Critical choices add strategy
- **Scale Integration**: Seamless personal to capital
- **Flexible Complexity**: Grows with player experience

The enhanced Option 1 provides the perfect balance of streamlined play and tactical options, supporting both new players and system masters within the same elegant framework.

---

## Version History

- **v3.5.0** (2025-01-24): Created formal health & damage system
- **v3.5.0** (2025-01-24): Integrated enhanced Option 1 with tactical choices
- **v3.5.0** (2025-01-24): Added Combat Lite mode for accessibility