# Chapter 5: Personal Scale Rules

This chapter covers all rules for personal-scale action: movement, combat, damage, healing, and environmental challenges. These form the foundation for all character actions in Cosmos Engine.

## Movement and Positioning

### Basic Movement

**Speed**: Each character has a Speed in meters equal to 5 + Coordination

**Movement Types**:
- **Move Action**: Move up to Speed
- **Full Move**: Move double Speed, no other actions
- **Sprint**: Triple Speed in straight line, -2 Defense
- **Careful Movement**: Half Speed, no Defense penalty

### Terrain and Obstacles

**Difficult Terrain** (rubble, water, steep slopes):
- Movement costs double
- No sprinting allowed
- -2 to Defense while moving

**Hazardous Terrain** (fire, toxic waste, zero-g):
- As difficult terrain plus environmental effects
- May require saves to traverse
- Damage for entering/remaining

**Obstacles**:
- **Low** (1m): Free action to cross, or 2m movement
- **Medium** (2m): Move action to climb, Athletics TN 11
- **High** (3m+): Standard action, Athletics TN 14+

### Tactical Movement

**Cover**:
- **Light Cover** (+2 Defense): Tables, thin walls, foliage
- **Heavy Cover** (+4 Defense): Stone walls, vehicles, blast doors
- **Total Cover**: Cannot be targeted directly

**Concealment**:
- **Light** (-2 to hit): Dim light, light fog, bushes
- **Heavy** (-4 to hit): Darkness, thick smoke, dense foliage
- **Total**: Must guess location to attack

**Positioning**:
- **Higher Ground**: +1 to attacks, +10m range
- **Flanking**: +2 when attacking from opposite sides
- **Prone**: +2 Defense vs ranged, -2 vs melee
- **Behind**: Target loses Coordination bonus to Defense

## Action Economy in Detail

### Initiative

**Rolling Initiative**: 1d10 + Awareness
- Rolled once per combat
- Higher goes first
- Ties broken by Awareness, then Coordination
- Can delay turn to act later
- Can interrupt with Awareness check TN 17

### Types of Actions

**Standard Actions**:
- Make an attack
- Full skill use
- Complex maneuver
- Activate complex device
- First aid
- Rally shaken ally

**Move Actions**:
- Move your Speed
- Stand from prone
- Draw/sheathe weapon
- Open door
- Climb low obstacle
- Reload weapon

**Quick Actions** (max 3/turn):
- Drop item
- Fall prone
- Speak few words
- Activate simple device
- Look around

**Free Actions**:
- Maintain concentration
- Drop concentration
- Simple communication

**Reactions** (special):
- Some abilities allow
- Don't count against actions
- Usually defensive

### Action Combinations

**Charge**: Full Move + Attack
- Must move 4+ meters straight
- +2 damage, -2 Defense until next turn

**Fighting Retreat**: Attack + Move
- Half movement only
- No Sprint afterward
- Maintains facing

**Total Defense**: Standard + Move
- +4 Defense
- Can only move half Speed
- No attacks possible

## Personal Combat

### Making Attacks (Balanced System)

**Attack Roll**: 2d10 + Attribute + (Combat Skill ÷ 2) + Equipment + Modifiers vs Defense

**Melee Attacks**: Might + (Combat ÷ 2)
- Reach 1-2 meters (weapon dependent)
- Can use Coordination for finesse weapons
- Combat skill adds to damage

**Ranged Attacks**: Coordination + (Combat ÷ 2)
- Range varies by weapon
- Environmental factors apply
- Ammunition tracking

### Defense Calculation (Balanced System)

**Physical Defense**: 10 + Coordination + (Combat Skill ÷ 2) + Cover + Armor
- Represents dodging, reflexes, and combat training
- Combat skill improves defensive ability
- Cover and armor provide additional protection

**Reactive Defense**: Can add (Combat ÷ 2) as Move Action
- Use combat training to actively defend
- Increases Defense until next turn

**Flat-Footed Defense**: 10 + Coordination + Armor
- When surprised or unaware
- Loses Combat skill bonus

### Attack Modifiers

**Situational Modifiers**:
| Situation | Modifier |
|-----------|----------|
| Target prone (melee) | +2 |
| Target prone (ranged) | -2 |
| Target behind cover | -2 to -4 |
| Target concealed | -2 to -4 |
| Flanking target | +2 |
| Higher ground | +1 |
| Aimed shot (full round) | +3 |
| Multiple attacks | -2 per extra |

### Special Combat Maneuvers

**Grapple**: Might + Combat vs Defense
- Success: Target grappled (immobilized)
- Each round: Opposed Might checks
- Can damage, pin, or throw

**Disarm**: Attack at -2
- Success: Weapon knocked away
- Critical: You catch weapon
- Failure by 5+: You drop weapon

**Trip**: Might or Coordination vs Defense
- Success: Target prone
- Can combine with attack at -2
- Size matters (+/-2 per size difference)

**Overwatch**: Ready action to shoot
- Triggered by movement/action
- Normal attack at any point
- Can abort to avoid friendly fire

### Critical Hits

Natural 20 (double 10s) = Critical Hit:

**Effects** (choose or roll 1d10):
1-2: Maximum damage
3-4: Bypass armor completely
5-6: Target condition (bleeding, stunned)
7-8: Damage equipment
9-10: Severe injury (GM discretion)

**Confirming Criticals** (Optional):
- Roll attack again
- Success: Full critical
- Failure: Just maximum damage

## Health and Damage

### Hit Points and Wounds

**Hit Points**: 40 + (Might × 8) + (Resolve × 4)
- Represent stamina, luck, and toughness
- Not all "meat points"
- Abstract until low health

### Health States

Health tracked as percentage of maximum:

**Healthy** (75-100%):
- No penalties
- Full effectiveness
- Cosmetic injuries only

**Wounded** (50-74%):
- -1 to all actions
- Visible injuries
- Needs medical attention

**Injured** (25-49%):
- -2 to all actions
- Serious wounds
- Movement reduced by 2

**Critical** (1-24%):
- -3 to all actions
- Life-threatening injuries
- Movement halved
- Might save TN 14 or unconscious

**Dying** (0 or below):
- Unconscious and dying
- Might save TN 17 or die
- -1 HP per round
- Requires immediate aid

### Damage Types

**Physical Damage**:
- **Kinetic**: Bullets, blades, impacts
- **Energy**: Lasers, plasma, fire
- **Explosive**: Area effects, shrapnel

**Special Damage**:
- **Stun**: Nonlethal, max Injured state
- **Armor Piercing**: Ignores X armor
- **Bleeding**: 1 damage/round until treated

**Damage Resistance**:
- Armor subtracts from damage
- Energy shields vs energy only
- Natural toughness (rare)

### Armor

**Armor Types**:
| Type | Protection | Defense Penalty |
|------|------------|-----------------|
| Light | 2 | 0 |
| Medium | 4 | -1 |
| Heavy | 6 | -2 |
| Powered | 8 | 0 |

**Armor Degradation** (Optional):
- -1 protection per 20 damage taken
- Repair with Tech check

### Death and Dying

**Death Saves**: When at 0 HP or below
- Might save TN 17
- Success: Stabilize at -1 HP
- Failure: Continue dying
- Critical failure: Immediate death
- Critical success: Stabilize at 1 HP

**Stabilization**:
- Medicine check TN 14
- First aid kit gives +2
- Success stops dying
- Still unconscious until 1+ HP

**Instant Death**:
- Damage exceeding HP + Might score
- Certain critical hits
- Environmental hazards
- GM discretion for dramatic moments

## Conditions and Status Effects

### Common Conditions

**Bleeding**: 1 damage per round
- Medicine TN 11 or pressure to stop
- Multiple wounds stack

**Blinded**: Cannot see
- -4 to attacks
- Half movement
- No Defense from Coordination

**Deafened**: Cannot hear
- -2 to Initiative
- Cannot hear communication
- Vulnerable to stealth

**Fatigued**: Exhausted
- -2 to all physical actions
- Half movement
- Cannot sprint

**Frightened**: Afraid
- -2 to all actions
- Must retreat from source
- Resolve save to act normally

**Grappled**: Held
- Cannot move
- -2 to all actions
- Only small weapons

**Prone**: On ground
- -2 Defense vs melee
- +2 Defense vs ranged
- Half movement to crawl
- Move action to stand

**Stunned**: Dazed
- Lose next action
- -2 Defense
- Drop held items

**Unconscious**: Out cold
- Helpless
- No Defense
- Can be coup de graced

### Environmental Conditions

**Zero Gravity**:
- Movement by pushing only
- -2 to attacks without training
- No falling damage
- Might save or drift

**Low Gravity**:
- Double jump distances
- +2 meters movement
- Falling damage halved
- -1 to attacks (overcorrection)

**High Gravity**:
- Half movement
- -2 to physical actions
- Double falling damage
- Fatigue in minutes

**Vacuum**:
- Hold breath: Resolve rounds
- Then 2d6 damage/round
- Unconscious at 0 HP
- Death in Resolve rounds

**Extreme Temperature**:
- **Heat**: Fatigue, then damage
- **Cold**: Slow, then damage
- Protection negates
- Survival checks to endure

## Healing and Recovery

### Natural Healing

**Rest**:
- **Light Activity**: 1 HP per day
- **Full Rest**: 2 HP per day
- **Medical Care**: 3 HP per day
- **Advanced Medical**: 5 HP per day

**Healing Thresholds**:
- Must heal to 25% for Injured→Wounded
- Must heal to 50% for Wounded→Healthy
- Conditions clear at thresholds

### Medical Treatment

**First Aid** (Medicine TN 11):
- Stops bleeding
- Stabilizes dying
- Restores 1d6 HP once per day

**Field Medicine** (Medicine TN 14):
- As first aid plus:
- Restores 2d6 HP
- Removes one condition
- Requires medical kit

**Surgery** (Medicine TN 17):
- Restores 3d6 HP
- Fixes serious injuries
- Requires facility
- Patient helpless for hours

**Advanced Medicine**:
- Regeneration: 10 HP/hour
- Nano-medicine: Instant healing
- Cloning: Replace body parts
- Era dependent

### Drugs and Stims

**Combat Drugs**:
- **Adrenaline**: +2 Initiative, ignores Wounded
- **Pain Suppressors**: Ignore one health state penalty
- **Reflex Enhancers**: +1 Defense
- **Strength Boost**: +2 Might for scene

**Side Effects**:
- Addiction potential
- Crash after use
- Tolerance builds
- Health risks

## Environmental Hazards

### Common Hazards

**Falling**:
- 1d6 per 3 meters
- Max 20d6
- Coordination save to halve
- Water/soft landing reduces

**Fire**:
- 1d6 per round in flames
- Spreads on critical failure
- Stop/drop/roll to extinguish
- Armor may not protect

**Electricity**:
- Touch: 2d6 + stun
- Arc: 3d6 in line
- Water conducts
- Metal armor worse

**Radiation**:
- Slow death
- Resolve saves
- Permanent damage
- Medicine to treat

**Toxic Atmosphere**:
- Might saves
- Damage or conditions
- Filters help
- Time limits

### Hazard Navigation

**Detecting**: Awareness + Survival
**Avoiding**: Coordination + Athletics  
**Enduring**: Might/Resolve + Survival
**Escaping**: Varies by hazard

### Environmental Protection

**Basic Suits**: 4 hours protection
**Advanced Suits**: 24 hours
**Power Armor**: Days to weeks
**Vehicle/Ship**: Indefinite

## Zero-G and Extreme Environments

### Zero-G Movement

**Controlled**: Push off surfaces
- Move 3m per push
- Coordination to change direction
- Magnetic boots negate

**Uncontrolled**: Drift helplessly
- 1m per round momentum
- Can't change direction
- Throw objects to move

**Combat in Zero-G**:
- No grounding for melee
- Recoil moves shooter
- Blood/debris floats
- Disorientation common

### Other Environments

**Underwater**:
- Half movement
- -4 to attacks
- Special weapons only
- Pressure concerns

**Heavy Weather**:
- Wind: Movement and ranged penalties
- Rain: Visibility penalties
- Lightning: Random strikes
- Storms: Multiple effects

**Alien Environments**:
- Psychotropic atmospheres
- Predatory plant life
- Sentient weather
- Reality distortions

## Quick Combat Example

**Round 1**:
- Zara (Init 16): Shoots at pirate, rolls 18 vs Defense 12, hits for 8 damage
- Pirate (Init 12): Charges Zara, rolls 14 vs Defense 17, misses
- Marcus (Init 10): Moves to cover, shoots, rolls 20 (crit!), maximum damage

**Round 2**:
- Zara: Quick aim (+1), shoots again, hits
- Pirate (Wounded): Grapples Marcus, succeeds
- Marcus: Tries to break free, fails

Combat continues with tactical choices, conditions applied, and environmental factors considered.

---

*Continue to Chapter 6: Skills & Specializations for detailed skill descriptions...*