# Level 1-20 Combat Scaling Analysis

## Advancement Point Progression

Based on typical RPG advancement:
- **Level 1**: 0 AP (starting character)
- **Level 5**: 200 AP (4 sessions + milestones)
- **Level 10**: 500 AP (experienced)
- **Level 15**: 750 AP (veteran)
- **Level 20**: 1000 AP (master)

## Current System Scaling

### Attack Progression (2d10 + Attribute + Skill)

**Level 1 Fighter**
- Might 6, Combat 3
- Attack: +9, Roll: 11-29, Average: 20

**Level 5 Fighter** 
- Might 7, Combat 5
- Attack: +12, Roll: 14-32, Average: 23

**Level 10 Fighter**
- Might 8, Combat 7
- Attack: +15, Roll: 17-35, Average: 26

**Level 15 Fighter**
- Might 8, Combat 9
- Attack: +17, Roll: 19-37, Average: 28

**Level 20 Fighter**
- Might 9, Combat 10
- Attack: +19, Roll: 21-39, Average: 30

### Defense Progression

**Level 1 Defender**
- Coordination 6
- Defense: 16

**Level 5 Defender**
- Coordination 7
- Defense: 17

**Level 10 Defender**
- Coordination 8, Combat 7 (defensive)
- Defense: 18 + 7 = 25

**Level 15 Defender**
- Coordination 9, Combat 9
- Defense: 19 + 9 = 28

**Level 20 Defender**
- Coordination 10, Combat 10
- Defense: 20 + 10 = 30

## Hit Probability Analysis

### Level 5 vs Level 5
- Attacker: +12, Defender: 17
- Hit on 5+, Success rate: 80%
- **BALANCED**

### Level 10 vs Level 10
- Attacker: +15, Defender: 25
- Hit on 10+, Success rate: 60%
- **STILL CHALLENGING**

### Level 15 vs Level 15
- Attacker: +17, Defender: 28
- Hit on 11+, Success rate: 55%
- **SLIGHTLY FAVORS DEFENSE**

### Level 20 vs Level 20
- Attacker: +19, Defender: 30
- Hit on 11+, Success rate: 55%
- **DEFENSE WINS**

## Problem Analysis

### When Combat Becomes Trivial

**Against Lower-Level Opponents:**

**Level 10 vs Level 1**
- Attack +15 vs Defense 16
- Minimum roll hits, Success rate: 100%
- **TRIVIAL AT LEVEL 10**

**Level 15 vs Level 5**
- Attack +17 vs Defense 17
- Minimum roll hits, Success rate: 100%
- **TRIVIAL AT LEVEL 15**

**Level 20 vs Level 10**
- Attack +19 vs Defense 25
- Hit on 6+, Success rate: 85%
- **STILL MANAGEABLE**

### The Critical Breakpoint

**Combat becomes trivial around Level 8-10** when facing enemies more than 5 levels below the character.

## Proposed Revised System

### Attack Formula: 2d10 + Attribute + (Skill ÷ 2)

**Level 1 Fighter**
- Might 6, Combat 3
- Attack: +8 (6 + 1.5), Roll: 10-28, Average: 19

**Level 5 Fighter**
- Might 7, Combat 5
- Attack: +10 (7 + 2.5), Roll: 12-30, Average: 21

**Level 10 Fighter**
- Might 8, Combat 7
- Attack: +12 (8 + 3.5), Roll: 14-32, Average: 23

**Level 15 Fighter**
- Might 9, Combat 9
- Attack: +14 (9 + 4.5), Roll: 16-34, Average: 25

**Level 20 Fighter**
- Might 10, Combat 10
- Attack: +15 (10 + 5), Roll: 17-35, Average: 26

### Defense with Combat Skill: 10 + Coordination + (Combat ÷ 2)

**Level 1**: Defense 13 (10 + 6 + 1.5)
**Level 5**: Defense 15 (10 + 7 + 2.5)
**Level 10**: Defense 17 (10 + 8 + 3.5)
**Level 15**: Defense 19 (10 + 9 + 4.5)
**Level 20**: Defense 20 (10 + 10 + 5)

## Revised Hit Probabilities

### Same Level Combat
- **Level 1 vs 1**: +8 vs 13, Hit on 5+, 85% success
- **Level 5 vs 5**: +10 vs 15, Hit on 5+, 85% success
- **Level 10 vs 10**: +12 vs 17, Hit on 5+, 85% success
- **Level 15 vs 15**: +14 vs 19, Hit on 5+, 85% success
- **Level 20 vs 20**: +15 vs 20, Hit on 5+, 85% success

### Cross-Level Combat
- **Level 10 vs 1**: +12 vs 13, Hit on 1+, 100% success
- **Level 15 vs 5**: +14 vs 15, Hit on 1+, 100% success
- **Level 20 vs 10**: +15 vs 17, Hit on 2+, 95% success

## When Combat Becomes Trivial (Revised)

**Problem Point: Level gap of 10+ levels**
- 10+ level advantage = near-guaranteed hits
- But damage still matters for HP scaling

## HP and Damage Scaling

### HP Progression
- **Level 1**: ~80 HP (Might 6, Resolve 4)
- **Level 5**: ~100 HP (Might 7, Resolve 5)
- **Level 10**: ~120 HP (Might 8, Resolve 6)
- **Level 15**: ~140 HP (Might 9, Resolve 7)
- **Level 20**: ~160 HP (Might 10, Resolve 8)

### Damage Progression
- **Basic Weapon**: 1d8 (4.5 avg)
- **Enhanced Weapon**: 2d6 (7 avg)
- **Master Weapon**: 2d8 (9 avg)
- **Legendary Weapon**: 3d6 (10.5 avg)

### Combat Duration
- Level 1: 80 HP ÷ 7 damage = ~11 rounds
- Level 10: 120 HP ÷ 9 damage = ~13 rounds
- Level 20: 160 HP ÷ 10.5 damage = ~15 rounds

**Problem**: Combat gets LONGER at higher levels!

## Additional Solutions

### 1. Damage Scaling with Skill
Add (Skill ÷ 2) to damage:
- Level 1: 1d8 + 1.5 = 6 average
- Level 10: 2d6 + 3.5 = 10.5 average
- Level 20: 3d6 + 5 = 15.5 average

This reduces high-level combat to 10-11 rounds.

### 2. Minion Rules
- Enemies 5+ levels below take double damage
- Enemies 10+ levels below are one-shot
- Keeps "mook sweeping" fun

### 3. Elite Scaling
- Boss enemies get +level to Defense
- Legendary enemies immune to level gap advantages
- Maintains challenge at all levels

## Final Recommendations

1. **Use revised formula**: 2d10 + Attribute + (Skill ÷ 2)
2. **Add defensive Combat**: Defense = 10 + COO + (Combat ÷ 2)
3. **Scale damage with skill**: Weapon + (Skill ÷ 2)
4. **Minion rules**: Double damage vs 5+ level gap
5. **Elite modifiers**: Bosses get level-based bonuses

This creates:
- Consistent 85% hit rates at same level
- Meaningful progression without breaking math
- Faster combat at higher levels
- Special rules for extreme level gaps

## Critical Insight

**Combat becomes trivial around Level 10** in the current system when facing significantly lower-level opponents. The revised system pushes this to Level 15+ and adds minion rules to handle the edge cases.