# Attribute Point Buy Workshop

## Current System Analysis

### Point Buy Costs (20 points total)
- Rating 0: Not allowed (represents complete disability)
- Rating 1: 1 point (below average)
- Rating 2: 2 points (average)
- Rating 3: 4 points (good)
- Rating 4: 7 points (excellent)

### Possible Starting Arrays

**Super Specialist**: 4, 3, 3, 3, 3, 1 (7+4+4+4+4+1 = 24 points) - INVALID, over budget
**Dual Specialist**: 4, 4, 3, 2, 1, 1 (7+7+4+2+1+1 = 22 points) - INVALID, over budget
**Balanced High**: 3, 3, 3, 3, 3, 3 (4×6 = 24 points) - INVALID, over budget
**Actual Maximum**: 4, 3, 3, 2, 2, 2 (7+4+4+2+2+2 = 21 points) - INVALID, over budget

Wait, let me recalculate valid arrays with exactly 20 points:

**Valid Arrays**:
1. **Specialist**: 4, 3, 3, 2, 2, 1 (7+4+4+2+2+1 = 20)
2. **Dual Focus**: 4, 3, 2, 2, 2, 2 (7+4+2+2+2+2 = 19) + 1 leftover
3. **Balanced**: 3, 3, 3, 3, 2, 1 (4+4+4+4+2+1 = 19) + 1 leftover
4. **Generalist**: 3, 3, 2, 2, 2, 2 (4+4+2+2+2+2 = 16) + 4 leftover
5. **True Balance**: 3, 2, 2, 2, 2, 2 (4+2+2+2+2+2 = 14) + 6 leftover

The math shows we have leftover points with many builds. Let me create proper 20-point arrays:

**Corrected Valid Arrays (20 points exactly)**:
1. **Specialist**: 4, 3, 3, 2, 2, 1 (7+4+4+2+2+1 = 20)
2. **Focused**: 4, 3, 2, 2, 2, 2 (7+4+2+2+2+2 = 19) → Add 1 to make a 3
3. **Dual High**: 3, 3, 3, 3, 2, 2 (4+4+4+4+2+2 = 20)
4. **Balanced**: 3, 3, 3, 2, 2, 2 (4+4+4+2+2+2 = 18) → Needs 2 more points

Let me properly calculate valid 20-point arrays:

### Actual Valid 20-Point Arrays

1. **Super Specialist**: 4, 3, 3, 2, 2, 1 = 7+4+4+2+2+1 = 20 ✓
2. **Dual Focus**: 4, 3, 2, 2, 2, 2 = 7+4+2+2+2+2 = 19 (add 1 somewhere)
3. **Triple High**: 3, 3, 3, 3, 2, 2 = 4+4+4+4+2+2 = 20 ✓
4. **Balanced Plus**: 3, 3, 3, 2, 2, 2 = 4+4+4+2+2+2 = 18 (need 2 more)
5. **All Average**: 2, 2, 2, 2, 2, 2 = 2×6 = 12 (8 points left!)

---

## Character Build Examples

Let's test these arrays at different advancement levels:

### Build 1: Combat Specialist
**Attributes**: Might 4, Coordination 3, Awareness 3, Resolve 2, Intellect 2, Presence 1
**Concept**: Elite soldier focused on physical combat

### Build 2: Tech Expert
**Attributes**: Intellect 4, Coordination 3, Awareness 3, Resolve 2, Might 2, Presence 1
**Concept**: Master hacker and engineer

### Build 3: Balanced Leader
**Attributes**: Presence 3, Intellect 3, Coordination 3, Awareness 3, Resolve 2, Might 2
**Concept**: Well-rounded officer

---

## Roll Analysis at Different Levels

### Level 1 (Starting Character)
- **Attributes**: As above
- **Skills**: 0-1 (just starting)
- **Equipment**: +1 (Primitive) to +3 (Information Era)

#### Combat Specialist Attack Rolls
**Melee Attack** (Might 4 + Combat 1 + Weapon +1):
- Base bonus: +6
- Roll range: 8-26 (2d10 + 6)
- Average: 17
- vs Defense 8-11: Hits 90%+ of the time

**Ranged Attack** (Coordination 3 + Combat 1 + Weapon +1):
- Base bonus: +5
- Roll range: 7-25 
- Average: 16
- vs Defense 8-11: Hits 85%+ of the time

#### Tech Expert Hack Attempts
**Hacking** (Intellect 4 + Tech 1 + Equipment +3):
- Base bonus: +8
- Roll range: 10-28
- Average: 19
- vs TN 11 (Moderate): Success 95%+ of the time
- vs TN 14 (Hard): Success 80%+ of the time

#### Balanced Leader Social Rolls
**Persuasion** (Presence 3 + Social 1 + Equipment +0):
- Base bonus: +4
- Roll range: 6-24
- Average: 15
- vs TN 11: Success 75% of the time

### Level 5 (End of Tier 1)
- **Attributes**: One at 5, others improved
- **Skills**: 2-3 in specialties
- **Equipment**: +2 to +3
- **AP Spent**: ~50 total

#### Combat Specialist (Might→5, Combat→3)
**Melee Attack** (Might 5 + Combat 3 + Weapon +3):
- Base bonus: +11
- Roll range: 13-31
- Average: 22
- vs Defense 11-14: Near automatic success

#### Tech Expert (Intellect→5, Tech→3)
**Hacking** (Intellect 5 + Tech 3 + Equipment +3):
- Base bonus: +11
- Roll range: 13-31
- Average: 22
- vs TN 17 (Extreme): Success 80%+ of the time

### Level 10 (End of Tier 2)
- **Attributes**: Primary at 5, secondary at 4
- **Skills**: 4-5 in specialties
- **Equipment**: +3 to +4
- **AP Spent**: ~125 total

#### Combat Specialist
**Melee Attack** (Might 5 + Combat 5 + Weapon +4 + Mastery +2):
- Base bonus: +16
- Roll range: 18-36
- Average: 27
- Literally cannot miss Defense 17 or lower

### Level 15 (End of Tier 3)
- **Attributes**: Multiple at 5
- **Skills**: 5 (maxed)
- **Equipment**: +4 to +5
- **AP Spent**: ~225 total

#### Tech Expert
**Hacking** (Intellect 5 + Tech 5 + Equipment +5 + Mastery +3):
- Base bonus: +18
- Roll range: 20-38
- Average: 29
- Can succeed at "impossible" tasks (TN 20+)

### Level 20 (Maximum)
- **Attributes**: One at 6, others at 5
- **Skills**: 5 (maxed)
- **Equipment**: +5 to +6
- **AP Spent**: 350 total

#### Combat Specialist
**Melee Attack** (Might 6 + Combat 5 + Weapon +6 + Grandmaster +4):
- Base bonus: +21
- Roll range: 23-41
- Average: 32
- God-like combat ability

---

## Problem Analysis

### Issues with Current System

1. **Starting Power Level Too High**
   - Level 1 characters with 4 in primary attribute + 1 skill + equipment are hitting 75-90% of the time
   - This leaves little room for growth excitement
   - Starting characters feel too competent

2. **Bonus Stacking**
   - By level 5, characters are near-automatic successes
   - By level 10, failure becomes nearly impossible for specialized tasks
   - By level 20, bonuses reach +21, making even "impossible" tasks routine

3. **Narrow Growth Band**
   - Attributes go from 4→5→6 (only 2 points of growth)
   - Most growth comes from equipment and mastery bonuses
   - Less satisfying than broader attribute growth

---

## Proposed Solutions

### Option 1: Reduce Starting Points
**15 points** instead of 20:
- Maximum starting attribute: 3
- Typical arrays:
  - Specialist: 3, 3, 2, 2, 2, 1 (4+4+2+2+2+1 = 15)
  - Balanced: 3, 2, 2, 2, 2, 2 (4+2+2+2+2+2 = 14) +1
  - Generalist: 2, 2, 2, 2, 2, 2 (12) +3 for two 3s

### Option 2: Adjust Point Costs
Keep 20 points but make higher ratings more expensive:
- Rating 1: 1 point
- Rating 2: 2 points
- Rating 3: 5 points (was 4)
- Rating 4: 9 points (was 7)

This would allow:
- Specialist: 4, 2, 2, 2, 2, 1 (9+2+2+2+2+1 = 18) +2
- High Dual: 3, 3, 2, 2, 2, 1 (5+5+2+2+2+1 = 17) +3
- Balanced: 3, 2, 2, 2, 2, 2 (5+2+2+2+2+2 = 15) +5

### Option 3: Lower Attribute Cap
Start with maximum 3, not 4:
- Keeps 20 points but caps starting attributes at 3
- Allows more even distribution
- More room for advancement

### Option 4: Reduce Other Bonuses
Keep high starting attributes but:
- Reduce skill maximum from 5 to 3
- Reduce equipment bonuses by era
- Remove or reduce mastery bonuses

---

## Recommendation

### Hybrid Approach: Lower Starting Points + Adjusted Costs

**New Point Buy System (15 points)**:
- Rating 0: Not allowed
- Rating 1: 1 point
- Rating 2: 3 points (was 2)
- Rating 3: 6 points (was 4)
- Rating 4: 10 points (was 7)
- Starting cap: 3

**Sample Arrays**:
1. **Focused**: 3, 2, 2, 2, 1, 1 = 6+3+3+3+1+1 = 17 (over)
2. **Focused**: 3, 2, 2, 1, 1, 1 = 6+3+3+1+1+1 = 15 ✓
3. **Balanced**: 2, 2, 2, 2, 2, 1 = 3+3+3+3+3+1 = 16 (over)
4. **Balanced**: 2, 2, 2, 2, 1, 1 = 3+3+3+3+1+1 = 14 (+1 left)

Actually, let me recalculate with simpler costs:

**Simplified System (15 points)**:
- Rating 1: 1 point
- Rating 2: 2 points
- Rating 3: 4 points
- Rating 4: Not available at start

**Sample Arrays**:
1. **Specialist**: 3, 3, 2, 2, 1, 1 = 4+4+2+2+1+1 = 14 (+1)
2. **Focused**: 3, 2, 2, 2, 2, 2 = 4+2+2+2+2+2 = 14 (+1)
3. **Balanced**: 2, 2, 2, 2, 2, 2 = 2×6 = 12 (+3 for one 3)

### Impact on Rolls

**Level 1 Specialist** (Attribute 3 + Skill 1 + Equipment +1):
- Base bonus: +5
- Roll range: 7-25
- Average: 16
- vs Defense 11: Success 75% (feels heroic but not automatic)

**Level 5 Specialist** (Attribute 4 + Skill 3 + Equipment +3):
- Base bonus: +10
- Roll range: 12-30
- Average: 21
- Clear growth from level 1

**Level 20 God** (Attribute 6 + Skill 5 + Equipment +6):
- Base bonus: +17
- Still godlike but not as extreme

---

## Final Recommendation

**Reduce starting points from 20 to 15** with these costs:
- Rating 1: 1 point
- Rating 2: 2 points  
- Rating 3: 4 points
- Rating 4: 8 points (not recommended at start)

**Typical Starting Arrays**:
- **Specialist**: 3, 3, 2, 2, 1, 1 (Hero with clear strengths and weaknesses)
- **Balanced**: 3, 2, 2, 2, 2, 2 (Competent all-arounder)
- **Dual Focus**: 3, 3, 2, 1, 1, 1 (Two strong areas, several weak)

This creates:
- Starting bonuses of +4 to +6 (instead of +6 to +8)
- 65-75% success rates on moderate tasks (instead of 85-95%)
- More meaningful advancement progression
- Clearer character weaknesses for roleplay