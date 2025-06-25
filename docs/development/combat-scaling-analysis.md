# Combat Scaling Analysis

## Current Math Problem

With 2d10 + 14 attack:
- Minimum roll: 2 + 14 = 16
- Average roll: 11 + 14 = 25
- Maximum roll: 20 + 14 = 34

Common Defense values:
- Low (COO 3): 10 + 3 = 13
- Average (COO 5): 10 + 5 = 15  
- High (COO 7): 10 + 7 = 17
- Very High (COO 9): 10 + 9 = 19

**Problem**: SecUnit-7 automatically hits anyone with Defense 16 or less (most characters)!

## Skill Scaling Analysis

### Starting Character (30 AP)
- Combat 3 (6 points)
- Primary Attribute 6
- Attack: 2d10 + 6 + 3 = +9
- Roll range: 11-29, average 20

### Experienced Character (100 AP) 
- Combat 4 (10 points from start)
- Primary Attribute 6
- Attack: 2d10 + 6 + 4 = +10
- Roll range: 12-30, average 21

### Veteran Character (250 AP)
- Combat 5 (15 points from start)
- Primary Attribute 7 (enhanced)
- Attack: 2d10 + 7 + 5 = +12
- Roll range: 14-32, average 23

### Master Character (500+ AP)
- Combat 7
- Primary Attribute 8
- Attack: 2d10 + 8 + 7 = +15
- Roll range: 17-35, average 26

## Defense Scaling

### Natural Defense Progression
- Starting: Defense 13-15 (COO 3-5)
- Experienced: Defense 15-17 (COO 5-7)
- Veteran: Defense 17-19 (COO 7-9)
- Maximum: Defense 20 (COO 10)

### With Modifiers
- Cover: +2 to +4
- Shields: +1 to +2
- Specializations: +1
- Total possible: ~25-26 maximum

## THE PROBLEM

By level 5-6, skilled combatants (+12 bonus) only miss on critical failures against average opponents. This makes combat predictable.

## Proposed Solutions

### Option 1: Cap Skill at Character Level
- Maximum skill = Character level (AP/50)
- Level 5 character = Combat 5 maximum
- Reduces SecUnit-7 to +11 attack (+13 with specialization)

### Option 2: Reduce Attribute + Skill Stacking
- Use higher of Attribute OR Skill, not both
- Add half of the lower value
- Example: ATT 8, Skill 6 = 8 + 3 = +11 total

### Option 3: Bounded Accuracy (D&D 5e Style)
- Cap all bonuses at +10 total
- Specializations give advantage (roll 3d10, keep best 2)
- Focus on tactical choices over numbers

### Option 4: Escalating Defense
- Defense = 10 + COO + Skill rank in Combat
- Experienced fighters harder to hit
- Makes Combat skill valuable for defense too

## Recommended Solution: Modified Skill System

### Attack Calculation
**2d10 + Attribute + (Skill/2, rounded up)**

This gives:
- Starting (ATT 6, Skill 3): +8 attack
- Experienced (ATT 7, Skill 5): +10 attack  
- Veteran (ATT 8, Skill 6): +11 attack
- Master (ATT 9, Skill 8): +13 attack

### Defense Options
1. **Dodge**: 10 + Coordination
2. **Parry**: 10 + Coordination + (Combat/2)
3. **Cover**: +2 to +4 bonus
4. **Shields**: +1 to +2 bonus

### Revised SecUnit-7 Stats

With new system:
- Coordination 8, Combat 6
- **Attack**: 2d10 + 8 + 3 = +11
- Roll range: 13-31, average 22
- Still formidable but not automatic

Hit chances vs Defense:
- Defense 13: 90% hit chance
- Defense 15: 80% hit chance
- Defense 17: 70% hit chance
- Defense 19: 60% hit chance
- Defense 21: 50% hit chance

## Damage Scaling

Current damage seems appropriate:
- Light weapons: 1d6 (3.5 avg)
- Medium weapons: 1d8 (4.5 avg)
- Heavy weapons: 2d6 (7 avg)
- Very Heavy: 2d8 (9 avg)

With average HP of 80-100, this creates 3-5 round combats.

## Alternative: Success Degree System

Instead of binary hit/miss:
- Beat Defense by 0-4: Normal damage
- Beat by 5-9: +1d6 damage
- Beat by 10+: Critical hit
- Miss by 1-4: Glancing blow (half damage)
- Miss by 5+: Complete miss

This makes high attack bonuses create more damage rather than guaranteed hits.

## Final Recommendation

Implement **Attack = 2d10 + Attribute + (Skill/2)** with these additional rules:

1. **Combat Skill Defensive Use**: Can add Combat/2 to Defense as reaction
2. **Specialization Benefits**: +1 to hit OR +1d6 damage, not both
3. **Cover Importance**: Make cover/tactics essential
4. **Skill Cap**: No skill above 10, ever

This creates:
- Meaningful progression without breaking math
- Tactical choices matter more than pure numbers
- Defense can scale with offense
- Combat stays exciting at all levels

## SecUnit-7 Revised Stats

**With new system:**
- Attack: 2d10 + 8 + 3 = +11 (not +14)
- Defense: 18 base, 21 with Combat defense
- Still very competent but not untouchable
- 70% hit rate vs Defense 17 opponents