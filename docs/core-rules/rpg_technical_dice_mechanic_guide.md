# 2d10 Sci-Fi RPG Technical Guide

## Table of Contents
1. [Core Resolution Mechanic](#core-resolution-mechanic)
2. [Probability Mathematics](#probability-mathematics)
3. [Scale System](#scale-system)
4. [Technology Level System](#technology-level-system)
5. [Defense Mechanics](#defense-mechanics)
6. [Power Management](#power-management)
7. [Cross-Scale Interactions](#cross-scale-interactions)
8. [Implementation Guidelines](#implementation-guidelines)
9. [GM Quick Reference](#gm-quick-reference)

---

## Core Resolution Mechanic

### Basic Formula
**2d10 + Attribute + Skill vs Target Number**

### Core Components
- **Dice Roll**: 2d10 (2-20, bell curve distribution)
- **Attributes**: 0-5 (Human average: 2-3)
- **Skills**: 0-5 (Professional level: 3-4)
- **Total Bonus Range**: +3 to +9 (typical)
- **Target Numbers**: 8 (Easy), 11 (Moderate), 14 (Hard), 17 (Extreme)

### Critical Results
- **Natural 20**: Always succeeds + bonus effect
- **Natural 2**: Always fails + complication
- **Success Degrees**:
  - **Critical Success**: Beat TN by 8+ or natural 20
  - **Success**: Meet or beat TN
  - **Failure**: Miss TN by 1-7
  - **Critical Failure**: Miss TN by 8+ or natural 2

### Design Goals Achieved
- ✅ 60-70% success rate at moderate difficulty
- ✅ Bell curve probability (reduces swing variance)
- ✅ Easy mental math (+/-1 to +/-5 typical modifiers)
- ✅ Extreme results <10% of the time

---

## Probability Mathematics

### Base Probability Table
| Target Number | Success Rate | Use Case |
|---------------|--------------|----------|
| 8 | 85% | Easy tasks |
| 11 | 65% | Moderate tasks (default) |
| 14 | 35% | Hard tasks |
| 17 | 15% | Extreme tasks |

*Based on 2d10 + 6 average total bonus*

### Modifier Impact
| Modifier | Success Rate Change |
|----------|-------------------|
| +1 | +10% |
| +2 | +19% |
| +3 | +27% |
| -1 | -10% |
| -2 | -19% |
| -3 | -27% |

### 2d10 Distribution
- **Mean**: 11.0
- **Standard Deviation**: 2.87
- **Range**: 2-20
- **Most Common**: 11 (10% chance)
- **Extreme Results** (2-3, 18-20): 9% total

---

## Scale System

### Scale Tiers
| Scale | Examples | Damage Multiplier | Health Range | Engagement Range |
|-------|----------|------------------|--------------|------------------|
| **1: Personal** | Infantry, Power Armor | ×1 | 10-50 HP | Close-Medium |
| **2: Vehicle** | Tanks, Gunships | ×10 | 100-500 HP | Medium-Long |
| **3: Starship** | Fighters, Corvettes | ×100 | 1,000-5,000 HP | Long-Extreme |
| **4: Capital** | Battleships, Stations | ×1,000 | 10,000-50,000 HP | Strategic |

### Resolution Consistency
**All scales use identical mechanics:**
- Same 2d10 + attribute + skill resolution
- Same target numbers (8-17)
- Same success rates and probability curves
- Only damage output and health pools scale

### Damage Scaling Examples
| Weapon | Scale 1 | Scale 2 | Scale 3 | Scale 4 |
|--------|---------|---------|---------|---------|
| Light Weapon | 1d6 (1-6) | 1d6×10 (10-60) | 1d6×100 (100-600) | 1d6×1000 (1k-6k) |
| Medium Weapon | 2d6 (2-12) | 2d6×10 (20-120) | 2d6×100 (200-1.2k) | 2d6×1000 (2k-12k) |
| Heavy Weapon | 3d6 (3-18) | 3d6×10 (30-180) | 3d6×100 (300-1.8k) | 3d6×1000 (3k-18k) |

### Cross-Scale Modifiers
- **+1 Scale advantage**: +2 to hit (larger targets)
- **-1 Scale disadvantage**: -2 to hit (smaller targets)
- **±2 Scale difference**: ±4 to hit
- **±3+ Scale difference**: Generally cannot engage effectively

---

## Technology Level System

### Equipment Caps Approach
Technology Level limits maximum equipment bonuses while keeping skills unlimited.

### TL Scale (1-12)
| TL | Era | Max Equipment Bonus | Example Technologies |
|----|-----|-------------------|---------------------|
| **1** | Stone Age | +0 | Stone tools, bows |
| **2** | Gunpowder | +1 | Muskets, cannons |
| **3** | Industrial | +1 | Rifles, steam power |
| **4** | Early Modern | +2 | Automatic weapons |
| **5** | Modern | +2 | Guided missiles, electronics |
| **6** | Information Age | +3 | Smart weapons, satellites |
| **7** | Near Future | +3 | Plasma weapons, cybernetics |
| **8** | Biotech Era | +4 | Nano-enhancement, AI assistance |
| **9** | Far Future | +4 | Exotic matter, gravity manipulation |
| **10** | Transcendent | +5 | Reality alteration |
| **11** | Godtech | +5 | Physics breaking |
| **12** | Cosmic | +6 | Universal control |

### Implementation Rules
1. **Equipment Bonus Cap**: Cannot exceed TL maximum
2. **Skill Unlimited**: Character abilities always matter
3. **Upgrade Path**: Higher TL equipment provides better bonuses
4. **Availability**: Equipment above campaign TL is rare/unique

### Mixed-TL Combat Example
**Scenario**: TL 2 Colonial Marine vs TL 8 Future Soldier

| Combatant | Skill | Equipment | Total | Notes |
|-----------|-------|-----------|-------|-------|
| Colonial Marine | +5 | +1 (musket) | +6 | Experienced veteran |
| Future Soldier | +3 | +4 (plasma rifle) | +7 | Green recruit with advanced gear |

**Result**: Nearly equal hit chances, but dramatically different damage output

---

## Defense Mechanics

### Base Defense Rating
Defense uses Target Number system with stacking modifiers.

### Defense Components
| Component | Type | Effect | Example |
|-----------|------|--------|---------|
| **Base TN** | Fixed | 8-12 | Ship class baseline |
| **Armor Systems** | Passive | +1 to +3 | Reinforced hull, ablative plates |
| **Shield Systems** | Active | +1 to +3 | Energy barriers, deflector screens |
| **ECM/Stealth** | Electronic | +1 to +3 | Jamming, cloaking |
| **Pilot Skill** | Active | +1 to +3 | Evasive maneuvers |
| **AI Assistance** | Enhancement | +1 to +3 | Predictive systems |

### Defense Stacking Rules
1. **Maximum Total**: +8 defense bonus (keeps TN ≤ 20)
2. **Type Restrictions**: Maximum +3 from any single category
3. **Situational Modifiers**: Environmental conditions can modify

### Specialized Defense Example
**Medium Cruiser Defensive Suite**:
- Base TN: 12
- Reinforced Hull: +2 vs Kinetic, +1 vs Energy
- Ablative Armor: +3 vs Energy, +1 vs Kinetic  
- Multi-Spectral Shields: +2 vs Energy, +2 vs Missiles, +1 vs Kinetic
- Enhanced AI: +2 vs All Attacks

**Result**: TN 15-18 depending on attack type

---

## Power Management

### Universal Power Allocation
Players can reallocate power between defensive and offensive systems.

### Power Settings
| Setting | Defense Modifier | Damage Modifier | Tactical Use |
|---------|------------------|-----------------|--------------|
| **Max Shields (+3)** | +3 Defense | -3 Damage Dice | Survival, retreat |
| **Shields (+2)** | +2 Defense | -2 Damage Dice | Cautious advance |
| **Shields (+1)** | +1 Defense | -1 Damage Dice | Conservative |
| **Balanced (0)** | No modifier | No modifier | Standard ops |
| **Weapons (+1)** | -1 Defense | +1 Damage Dice | Aggressive |
| **Weapons (+2)** | -2 Defense | +2 Damage Dice | High-risk offense |
| **Max Weapons (+3)** | -3 Defense | +3 Damage Dice | Glass cannon |

### Scale-Independent Implementation
Power management works identically across all scales:
- Personal: Power armor energy allocation
- Vehicle: Engine/weapons/defense balance  
- Starship: Reactor output distribution
- Capital: Massive power grid management

### Example: Starfighter Power Management
**Standard Configuration**: 2d6×100 damage, TN 11 defense
**Weapons +2**: 4d6×100 damage, TN 9 defense
**Risk/Reward**: 66% more damage potential, but 20% easier to hit

---

## Cross-Scale Interactions

### Engagement Matrix
| Attacker Scale | Target Scale | Hit Modifier | Damage Effect |
|---------------|--------------|--------------|---------------|
| 1 vs 2 | Personal vs Vehicle | -2 | Minimum damage |
| 2 vs 1 | Vehicle vs Personal | +2 | Normal damage |
| 2 vs 3 | Vehicle vs Starship | -2 | Minimum damage |
| 3 vs 2 | Starship vs Vehicle | +2 | Normal damage |
| 3 vs 4 | Starship vs Capital | -2 | Chip damage |
| 4 vs 3 | Capital vs Starship | +2 | Devastating |

### Special Weapon Types
- **Anti-Vehicle**: Personal weapons that can damage vehicles
- **Anti-Ship**: Vehicle weapons that can damage starships  
- **Anti-Capital**: Starship weapons designed for capital ships
- **Point Defense**: Capital weapons that can target smaller scales

### Squadron Rules
Multiple smaller scale units can combine attacks against larger targets:
- **Coordinated Attack**: +1 per additional attacker (max +3)
- **Focus Fire**: Combine damage rolls from successful hits
- **Formation Bonus**: +1 defense when in formation

---

## Implementation Guidelines

### Character Creation
1. **Attributes**: Point-buy or random (2d6-7, minimum 0)
2. **Skills**: Point allocation based on background
3. **Equipment**: Limited by campaign Technology Level
4. **Scale**: Determine primary operating scale for campaign

### Advancement
- **Skills**: Increase through use and training
- **Attributes**: Rare increases (cybernetics, mutation, etc.)
- **Equipment**: Upgrade within TL limits
- **Scale**: Campaign progression (personal → vehicle → starship)

### Encounter Design
1. **Choose Primary Scale**: Match to campaign focus
2. **Set Technology Level**: Uniform or mixed as appropriate  
3. **Apply Modifiers**: Environmental, tactical, equipment
4. **Consider Cross-Scale**: Plan for mixed engagements

### Difficulty Scaling
- **Easy Encounters**: TN 8-11, equipment advantage
- **Moderate Encounters**: TN 11-14, equal technology
- **Hard Encounters**: TN 14-17, disadvantaged
- **Extreme Encounters**: TN 17+, vastly outmatched

---

## GM Quick Reference

### Target Number Guidelines
- **Routine**: TN 8 (don't roll unless stressed)
- **Easy**: TN 8-10 (85-75% success)
- **Moderate**: TN 11-13 (65-45% success)  
- **Hard**: TN 14-16 (35-20% success)
- **Extreme**: TN 17+ (15% or less success)

### Common Modifiers
| Situation | Modifier |
|-----------|----------|
| Excellent conditions | +1 to +2 |
| Poor conditions | -1 to -2 |
| Extreme conditions | -3 to -4 |
| Superior equipment | +1 to TL max |
| Inferior equipment | -1 to -2 |
| Rushed action | -1 to -3 |
| Extra time/care | +1 to +2 |

### Technology Level Adjudication
1. **Check Equipment TL**: Does it exceed character's access level?
2. **Apply Caps**: Maximum bonus = TL rating
3. **Consider Availability**: Higher TL equipment is rare
4. **Maintenance**: Advanced tech may require specialized care

### Scale Combat Flow
1. **Determine Scales**: Identify all participants
2. **Apply Cross-Scale Modifiers**: Size difference penalties/bonuses
3. **Calculate Defense**: Base TN + modifiers + power allocation
4. **Roll Attacks**: 2d10 + skill + equipment vs defense TN
5. **Apply Damage**: Base dice × scale multiplier

### Balancing Encounters
- **Same Scale + TL**: Balanced encounters
- **Scale Advantage**: Offset with number disadvantage
- **TL Advantage**: Offset with skill/tactical disadvantage  
- **Mixed Groups**: Use specialist weapons and formations

### Problem Solving
- **TN Too High**: Review modifier stacking, consider different approach
- **TN Too Low**: Add environmental factors, increase opposition quality
- **Damage Imbalance**: Check scale interactions, consider special defenses
- **Complexity Overload**: Strip to core 2d10 + skill vs TN, add complexity gradually

---

## Design Philosophy

This system prioritizes:
1. **Mathematical Consistency**: Same mechanics across all scales
2. **Tactical Depth**: Meaningful choices without overwhelming complexity
3. **Narrative Flexibility**: Framework supports story over simulation
4. **Scalable Complexity**: Easy basics, optional advanced systems
5. **Future-Proof Design**: Accommodates any sci-fi setting or technology level

The 2d10 core provides the stability needed for reliable gameplay while the scaling systems handle the vast scope of science fiction gaming from personal combat to galactic warfare.