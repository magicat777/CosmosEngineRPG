# Combat Quick Reference - Balanced System

## Core Combat Formulas

### Attack Resolution
**2d10 + Attribute + (Combat Skill ÷ 2) + Equipment + Situation vs Defense**

- **Melee**: Might + (Combat ÷ 2)
- **Ranged**: Coordination + (Combat ÷ 2)
- **Equipment**: +0 to +3 (by tech era)
- **Situation**: -3 to +3 (range, cover, tactics)

### Defense Calculation  
**10 + Coordination + (Combat Skill ÷ 2) + Cover + Equipment**

- **Combat Skill**: Defensive training matters
- **Cover**: +1 to +3 (light to superior)
- **Equipment**: Armor +0 to +3 (by tech era)

### Damage Resolution
**Weapon Base + (Combat Skill ÷ 2) + Success Margin**

- **Weapon Base**: 1d6 to 3d6 (by weapon type)
- **Combat Skill**: Skill with weapons adds damage
- **Success Margin**: +1 per 5 points over Defense

---

## Combat Sequence

### 1. Initiative
**1d10 + Coordination + Awareness** (once per encounter)

### 2. Actions Each Turn
- **Standard**: Attack, complex skill, special maneuver
- **Move**: Movement, combat defense, simple skill  
- **Quick**: Reload, activate, communicate (any number)
- **Free**: Drop, speak, toggle (any number)

### 3. Attack Resolution
1. Roll 2d10 + Attribute + (Combat ÷ 2) + modifiers
2. Compare to target's Defense
3. If hit: Roll damage + add Combat skill bonus
4. Apply damage to Hit Points

---

## Level-Based Combat Stats

### Attack Bonuses by Level
| Level | Typical Attack Bonus | Notes |
|-------|---------------------|-------|
| 1     | +8                  | Attribute 6, Combat 3 |
| 5     | +10                 | Attribute 7, Combat 5 |
| 10    | +12                 | Attribute 8, Combat 7 |
| 15    | +14                 | Attribute 9, Combat 9 |
| 20    | +15                 | Attribute 10, Combat 10 |

### Defense Values by Level
| Level | Base Defense | With Cover | With Superior Cover |
|-------|--------------|------------|---------------------|
| 1     | 13           | 16         | 19                  |
| 5     | 15           | 18         | 21                  |
| 10    | 17           | 20         | 23                  |
| 15    | 19           | 22         | 25                  |
| 20    | 20           | 23         | 26                  |

### Damage Output by Level
| Level | Average Damage | vs 100 HP | Rounds to Defeat |
|-------|----------------|-----------|------------------|
| 1     | 5.5            | vs 80     | 14               |
| 5     | 7.5            | vs 100    | 13               |
| 10    | 11             | vs 120    | 11               |
| 15    | 14             | vs 140    | 10               |
| 20    | 15.5           | vs 160    | 10               |

---

## Hit Probability Tables

### Same Level Combat (85% Target)
| Attacker Level | vs Same Level Defense | Hit Rate |
|----------------|--------------------|----------|
| 1              | +8 vs 13           | 85%      |
| 5              | +10 vs 15          | 85%      |
| 10             | +12 vs 17          | 85%      |
| 15             | +14 vs 19          | 85%      |
| 20             | +15 vs 20          | 85%      |

### Cross-Level Combat
| Attack Bonus | vs Def 13 | vs Def 15 | vs Def 17 | vs Def 19 | vs Def 21 |
|--------------|-----------|-----------|-----------|-----------|-----------|
| +8 (Lvl 1)   | 85%       | 75%       | 65%       | 55%       | 45%       |
| +10 (Lvl 5)  | 95%       | 85%       | 75%       | 65%       | 55%       |
| +12 (Lvl 10) | 100%      | 95%       | 85%       | 75%       | 65%       |
| +14 (Lvl 15) | 100%      | 100%      | 95%       | 85%       | 75%       |
| +15 (Lvl 20) | 100%      | 100%      | 100%      | 95%       | 85%       |

---

## Level Gap Rules

### Minion Rules (5+ Level Difference)
- **5-9 Level Gap**: Lower level opponents are "Minions"
  - Take double damage from all sources
  - Morale penalties when seeing other minions defeated
- **10+ Level Gap**: Lower level opponents are "Mooks"  
  - Defeated by any successful hit
  - Automatic success on attacks against them

### Elite Scaling (Boss Opponents)
- **Elite Status**: +2 Defense per 5 levels above party
- **Action Economy**: May take extra actions per round
- **Immunity**: Unaffected by minion/mook rules
- **Legendary**: Multiple actions, legendary resistance

---

## Range & Positioning

### Range Modifiers (Personal Scale)
| Range | Distance | Attack Modifier |
|-------|----------|-----------------|
| Close | 0-2m     | +1              |
| Short | 3-10m    | +0              |
| Medium| 11-50m   | -1              |
| Long  | 51-250m  | -2              |
| Extreme| 251m+   | -3              |

### Cover & Concealment
| Type | Effect |
|------|--------|
| Light Cover | +1 Defense |
| Heavy Cover | +2 Defense |
| Superior Cover | +3 Defense |
| Total Cover | Cannot be targeted |
| Light Concealment | -1 to enemy attacks |
| Heavy Concealment | -2 to enemy attacks |

### Tactical Modifiers
| Situation | Modifier |
|-----------|----------|
| Elevation advantage | +1 attack |
| Flanking | +1 attack |
| All-out attack | +2 attack, -2 Defense |
| Total defense | +4 Defense, no attacks |
| Called shot | -2 attack, status effect |

---

## Special Maneuvers

### Coordinated Attack
- **Requirements**: 2+ attackers with communication
- **Benefit**: +1 damage per additional attacker (max +3)
- **Cost**: All attackers -2 Defense until next turn

### Suppressive Fire
- **Action**: Standard Action, 3x ammunition
- **Effect**: Target area becomes "Suppressed"
- **Suppressed**: TN 15 Resolve check or lose Standard Action

### Overwatch
- **Action**: Standard Action to establish
- **Effect**: Make attack when trigger condition met
- **Penalty**: -1 to attack (divided attention)

---

## Status Effects

### Physical Conditions
- **Impaired**: -2 to physical actions
- **Disabled**: Cannot take physical actions
- **Critical**: Bleeding, burning, ongoing damage

### Mental Conditions  
- **Impaired**: -2 to mental actions
- **Disabled**: Cannot think clearly
- **Critical**: Panic, berserk, catatonic

### System Conditions
- **Impaired**: -2 to electronic actions
- **Disabled**: Systems offline
- **Critical**: Cascade failure

**Stacking**: Different categories stack, same don't

---

## Critical Results

### Critical Hit (Natural 20)
Choose one effect:
- **Maximum Damage**: Roll maximum on all dice
- **Status Effect**: Apply condition based on damage type
- **Penetrating Hit**: Ignore all armor
- **Tactical Advantage**: Grant ally bonus action

### Critical Failure (Natural 2)
GM chooses effect:
- **Equipment Malfunction**: Quick Action TN 12 to clear
- **Tactical Disadvantage**: -2 Defense until next turn
- **Ammunition Waste**: Use 2x normal ammunition

---

## Quick Combat Resolution

### For New Players
1. Roll initiative (1d10 + COO + AWA)
2. Attack: 2d10 + attribute + (combat ÷ 2) vs Defense
3. Damage: Weapon dice + (combat ÷ 2)
4. Apply to Hit Points
5. Check health status

### For Experienced Players
- Add range, cover, and positioning modifiers
- Use special maneuvers and coordinated attacks
- Consider status effects and environmental factors
- Implement level gap rules for mixed encounters

---

## Designer Notes

The balanced system maintains:
- **Consistent 85% hit rates** across all levels
- **Tactical positioning** remains important throughout play
- **Combat skill affects both offense and defense**
- **Damage scaling** prevents combat from becoming tedious
- **Level gaps** create dramatic moments without breaking gameplay

Use this reference for quick combat resolution while learning the new balanced system!