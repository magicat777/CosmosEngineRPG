# Hit Point & Damage Scaling Workshop

## Design Goals

1. **Larger HP/Damage Ratio**: Big hits should be dramatic but not instantly lethal
2. **Conditions Over Death**: Major damage triggers status effects, not instant defeat
3. **Tactical Combat**: Multiple hits required to defeat opponents
4. **Meaningful Criticals**: Critical hits feel impactful without being save-or-die
5. **Avoid Death Spirals**: But still have consequences for taking damage

## Current System Analysis

### Current HP (1-5 attributes)
- **Formula**: 10 + (Might × 2) + Resolve
- **Level 1 Range**: 13-30 HP
- **Average**: ~18 HP

### Current Damage
- **Personal Weapons**: 1d10 (avg 5.5)
- **Critical Hit**: Double damage (avg 11)
- **Max Possible**: 20 on a critical

### The Problem
With 18 HP and potential 20 damage crits, characters can be one-shot. This is too swingy.

---

## Proposed HP Scaling Options

### Option 1: Multiply by 3
**Formula**: 30 + (Might × 6) + (Resolve × 3)
- **Level 1 Range**: 39-90 HP (1-10 attributes)
- **Average**: ~54 HP
- **Growth**: +6 HP per Might, +3 per Resolve

### Option 2: Multiply by 5
**Formula**: 50 + (Might × 10) + (Resolve × 5)
- **Level 1 Range**: 65-150 HP
- **Average**: ~90 HP
- **Growth**: +10 HP per Might, +5 per Resolve

### Option 3: Base 100 System
**Formula**: 100 + (Might × 5) + (Resolve × 5)
- **Level 1 Range**: 110-200 HP
- **Average**: ~150 HP
- **Growth**: +5 HP per Might, +5 per Resolve

### Recommendation: Modified Option 2
**Formula**: 40 + (Might × 8) + (Resolve × 4)
- **Level 1 Range**: 52-120 HP (with 1-10 attributes)
- **Average Starting HP**: ~80 HP
- **Typical Arrays**:
  - Warrior (Might 6, Resolve 4): 40 + 48 + 16 = 104 HP
  - Specialist (Might 4, Resolve 3): 40 + 32 + 12 = 84 HP
  - Scholar (Might 3, Resolve 5): 40 + 24 + 20 = 84 HP

---

## Damage Scaling

### Weapon Damage by Tech Era

#### Primitive Era (+1)
- **Light**: 1d6 (3.5 avg)
- **Standard**: 1d8 (4.5 avg)
- **Heavy**: 1d10 (5.5 avg)

#### Industrial Era (+2)
- **Light**: 1d8 (4.5 avg)
- **Standard**: 1d10 (5.5 avg)
- **Heavy**: 2d6 (7 avg)

#### Information Era (+3)
- **Light**: 1d10 (5.5 avg)
- **Standard**: 2d6 (7 avg)
- **Heavy**: 2d8 (9 avg)

#### Fusion Era (+4)
- **Light**: 2d6 (7 avg)
- **Standard**: 2d8 (9 avg)
- **Heavy**: 2d10 (11 avg)

#### Stellar Era (+5)
- **Light**: 2d8 (9 avg)
- **Standard**: 2d10 (11 avg)
- **Heavy**: 3d8 (13.5 avg)

#### Cosmic Era (+6)
- **Light**: 2d10 (11 avg)
- **Standard**: 3d8 (13.5 avg)
- **Heavy**: 3d10 (16.5 avg)

### Damage Bonuses
- **Might Bonus**: +Might/3 to melee damage (rounded down)
- **Success Margin**: +1 damage per 3 over defense
- **Equipment**: Built into weapon base

---

## Critical Hit Rework

Instead of double damage, critical hits trigger EFFECTS:

### Critical Hit Options (Attacker Chooses)
1. **Maximum Damage**: Deal maximum possible on dice (no roll)
2. **Brutal Strike**: Normal damage + inflict Physical Impaired
3. **Precise Strike**: Normal damage + bypass armor
4. **Devastating Blow**: Normal damage + trigger Wound Threshold

### Wound Thresholds (New System)

When you lose HP equal to these percentages in a single hit:

#### Minor Wound (10% of max HP in one hit)
- No immediate effect
- Visible injury for roleplay

#### Moderate Wound (20% of max HP in one hit)
- **Save or Effect**: Resolve check (TN 14) or Physical Impaired for scene
- Bleeding/burning possible

#### Major Wound (30% of max HP in one hit)
- **Automatic Effect**: Physical Impaired
- **Save or Worse**: Resolve check (TN 17) or Physical Disabled for 1 round

#### Grievous Wound (40% of max HP in one hit)
- **Automatic Effect**: Physical Disabled for 1 round
- **Save or Critical**: Resolve check (TN 20) or Critical condition
- Immediate medical attention needed

---

## Worst-Case Scenario Analysis

### Level 1 Party (4 players) vs 4 Equal Opponents

**Assumptions**:
- Characters have ~80-100 HP
- Weapons deal 1d8 (Industrial era)
- Defense is 10 + Coordination (5) + Armor (2) = 17

### GM Targets One Player (Focus Fire)

**Attack Sequence**:
1. Enemy 1 attacks: 2d10 + 7 vs Defense 17 (30% hit chance)
2. Enemy 2 attacks: Same
3. Enemy 3 attacks: Same
4. Enemy 4 attacks: Same

**If All Hit** (0.3^4 = 0.81% chance):
- 4 hits × 1d8 (avg 4.5) = 18 damage
- 18 damage vs 80 HP = 22.5% (triggers Moderate Wound)

**If All Critical** (0.01^4 = 0.000001% chance):
- 4 crits × 8 (max damage) = 32 damage
- 32 damage vs 80 HP = 40% (triggers Grievous Wound)
- Character is Physical Disabled, not dead

### Player Fumbles Defense

**Critical Fumble Rule** (Natural 2 on defense):
- Attacker gains advantage (reroll lowest die)
- Or attacker gets free bonus damage die
- Does NOT mean automatic hit

### Maximum Possible Damage

**Perfect Storm** (virtually impossible):
- Critical hit (1% chance)
- Maximum damage roll (12.5% on d8)
- Target fumbles defense (1% chance)
- Combined: 0.0125% chance

**Damage**: 8 (max d8) + 3 (might bonus) + bonus d8 (avg 4.5) = 15.5
- 15.5 vs 80 HP = 19% (not even Moderate Wound threshold)

---

## Health Threshold Adjustments

With higher HP, adjust thresholds:

### New Health States
- **Healthy**: 100-75% HP (no penalties)
- **Bloodied**: 74-50% HP (visible injuries, no penalties)
- **Wounded**: 49-25% HP (-1 to all actions)
- **Critical**: 24-10% HP (-2 to all actions, Resolve check for strenuous)
- **Defeated**: 9-0% HP (choose: unconscious/dying/dramatically wounded)

### Death & Dying Adjustments

**0 HP Options**:
1. **Heroic**: Unconscious but stable
2. **Gritty**: Dying, death saves at -10 HP
3. **Cinematic**: Conscious but can only take dramatic final actions

**Negative HP** (Gritty Mode):
- 0 to -10: Dying but saveable
- -11 to -20: Dead unless immediate intervention
- -21+: Instant death

---

## Armor Scaling

With higher damage, armor needs adjustment:

### Armor Values
- **No Armor**: +0 Defense
- **Light**: +1-2 Defense
- **Medium**: +3-4 Defense  
- **Heavy**: +5-6 Defense

### Damage Reduction (Optional)
Instead of just Defense bonuses:
- **Light**: -1 damage
- **Medium**: -2 damage
- **Heavy**: -3 damage

---

## Example Combat Round

**Warrior** (104 HP) vs **Thug** (80 HP)

**Round 1**:
- Warrior attacks: 2d10+8 vs Defense 15 = Hit!
- Damage: 1d10+2 = 7 damage
- Thug at 73/80 HP (91%, still Healthy)

**Round 2**:
- Thug attacks: 2d10+6 vs Defense 17 = Miss
- Warrior attacks: Critical hit!
- Chooses Brutal Strike: 7 damage + Physical Impaired
- Thug at 66/80 HP (82%, still Healthy but Impaired)

**Round 3-5**:
- Combat continues with meaningful choices
- No one-shot kills, but conditions accumulate
- Tactical decisions matter

---

## Recovery & Healing Adjustments

With higher HP pools:

### Natural Recovery
- **Light Activity**: 5 HP/day
- **Full Rest**: 10 HP/day
- **Medical Care**: 15 HP/day

### Medical Treatment
- **First Aid** (TN 11): 2d6 HP
- **Field Medicine** (TN 14): 3d8 HP
- **Surgery** (TN 17): 5d10 HP or restore to 50%

### Quick Recovery (Heroic Option)
- **Short Rest** (10 min): Spend Resolve to heal Resolve × 5 HP
- **Long Rest** (1 hour): Heal 25% of max HP
- **Full Rest** (8 hours): Heal 50% of max HP

---

## Final Recommendations

### 1. Hit Point Formula
**40 + (Might × 8) + (Resolve × 4)**
- Creates 52-120 HP range at level 1
- Average ~80 HP
- Scales well through 20 levels

### 2. Damage Scaling
**By weapon type and era** (see tables above)
- Light/Standard/Heavy categories
- 1d6 to 3d10 progression
- Might adds +1 damage per 3 points

### 3. Critical Hits
**Choose effect over raw damage**:
- Maximum damage (reliable)
- Inflict condition (tactical)
- Bypass defenses (anti-armor)
- Trigger wound threshold (brutal)

### 4. Wound Thresholds
**Percentage-based effects**:
- 20% = Save or Impaired
- 30% = Auto Impaired
- 40% = Auto Disabled

### 5. Combat Length
With these numbers:
- Average combat: 5-8 rounds
- Tough fight: 10-15 rounds
- Boss battle: 15-20 rounds

This creates tactical, meaningful combat where:
- No one gets one-shot at full health
- Big hits matter through conditions
- Player choice remains paramount
- Death is possible but not random