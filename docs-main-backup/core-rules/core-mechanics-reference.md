# Cosmos Engine Core Mechanics Reference
*The Source of Truth for All Rules*

## The Universal Resolution Mechanic

### Formula
```
2d10 + Attribute + Skill + Equipment + Situation vs Target Number
```

### Always Remember
- **Only 2d10**: Never change the dice
- **Four Modifiers**: Never add new modifier categories  
- **Capped Totals**: +8 maximum, -6 minimum
- **Fixed TNs**: 8 to 20 only

## Component Ranges

### Attributes (0-5, max 6 at level 20)
- Human average: 2-3
- Peak human: 5
- Enhanced maximum: 6 (level 20 only, one attribute)

**The Six Attributes (PRIMAC):**
- **Presence**: Influence & Command (charisma, leadership, authority)
- **Resolve**: Will & Stability (willpower, stress resistance, focus)
- **Intellect**: Analysis & Processing (reasoning, knowledge, tactics)
- **Might**: Force & Power (strength, endurance, system power)
- **Awareness**: Detection & Intuition (perception, sensors, empathy)
- **Coordination**: Precision & Control (dexterity, reflexes, piloting)

### Skills (0-5 natural, 0-7 enhanced)
- Untrained: 0
- Novice: 1
- Competent: 2-3
- Expert: 4-5
- Enhanced: 6-7

### Equipment (0-5 by Technology Era)
| Era | Maximum | Example |
|-----|---------|---------|
| Primitive | +1 | Simple tools |
| Industrial | +2 | Modern gear |
| Advanced | +3 | Near-future tech |
| Stellar | +4 | Far-future tech |
| Cosmic | +5 | Physics-defying tech |

### Situation (-3 to +3)
Consolidated modifier covering:
- Range/distance
- Cover/concealment
- Environmental conditions
- Tactical advantage
- Any other circumstances

## Target Numbers

| TN | Difficulty | Success Rate* | Use For |
|----|------------|---------------|---------|
| 8 | Easy | 85% | Routine tasks under pressure |
| 11 | Moderate | 65% | Standard challenges |
| 14 | Hard | 35% | Difficult tasks |
| 17 | Extreme | 15% | Heroic efforts |
| 20 | Legendary | 5% | Nearly impossible |

*For competent character (total +6 modifiers)*

## Critical Results

### Natural 20 (rolled exactly 20 on 2d10)
- Always succeeds
- Gain bonus effect
- 1% chance

### Natural 2 (rolled exactly 2 on 2d10)  
- Always fails
- Suffer complication
- 1% chance

### Perfect 40 (total result exactly 40)
- Legendary critical
- Choose bonus effect
- Extremely rare

## Initiative
```
2d10 + Coordination + Awareness
```
- Uses same 2d10 base as all rolls
- Represents reflexes + perception

## Derived Statistics

### Hit Points
```
10 + (Might × 2) + Resolve
```
- Starting range: 10-25
- Maximum range: 10-30

### Defense Values
- **Physical Defense**: 10 + Coordination + Armor
- **Mental Defense**: 10 + Resolve + (Intellect ÷ 2)
- **Electronic Defense**: 10 + Intellect + Systems

### Strain Capacity
```
3 + (Resolve × 2)
```
- Tracks exhaustion from technology use
- Range: 3-13

## Probability Mathematics

### 2d10 Distribution
- **Range**: 2-20
- **Mean**: 11.0
- **Standard Deviation**: 2.87
- **Mode**: 11 (most common)

### Success Chances by Total Modifier
| Modifier | TN 8 | TN 11 | TN 14 | TN 17 | TN 20 |
|----------|------|-------|-------|-------|-------|
| +0 | 45% | 15% | 3% | 0% | 0% |
| +3 | 72% | 37% | 12% | 2% | 0% |
| +6 | 91% | 64% | 30% | 8% | 1% |
| +8 (max) | 97% | 79% | 45% | 16% | 3% |

## Scale System Integration

### Universal Scales
1. **Personal**: Individuals, power armor
2. **Vehicle**: Tanks, aircraft  
3. **Starship**: Fighters to corvettes
4. **Capital**: Battleships, stations

### Scale Modifiers
- **Same scale**: No modifier
- **Per scale difference**: ±2 to hit
- **Damage effects**: Higher scales cause status effects

## Design Principles Hierarchy

### Tier 1: Inviolable
1. 2d10 resolution
2. Four modifier types  
3. Capped modifiers (+8/-6)
4. Universal mechanics across scales
5. Specialization over generalization

### Tier 2: Core Features
1. Technology Era limits
2. Complexity budget per system
3. Binary choices over tracking
4. Status effects (3 categories)
5. Meaningful equipment

### Tier 3: Implementation Guidelines
1. Consistent terminology
2. Examples for every rule
3. Cross-scale compatibility
4. Tactical without complexity
5. Sci-fi through technology

## Quick Validation Test

Before adding any new rule, verify:

✅ **Uses 2d10?**
✅ **Only 4 modifier types?**
✅ **Respects +8/-6 caps?**
✅ **Works at all scales?**
✅ **TNs between 8-20?**
✅ **Maintains bell curve?**
✅ **Favors specialists?**
✅ **Respects complexity budget?**

If any answer is "No", the rule needs revision.

## Common Pitfalls to Avoid

### ❌ Don't Add
- New dice types (d6, d12, etc. for resolution)
- Fifth modifier category
- Modifiers beyond caps
- Scale-specific resolution
- Auto-success below Natural 20

### ✅ Do Instead
- Use 2d10 for everything
- Fold into existing modifiers
- Respect mathematical limits
- Scale modifiers, not mechanics
- Preserve probability curve

## Integration Checklist

When adding new subsystems:

1. **Define in 2d10 terms**: How does it use the core mechanic?
2. **Assign modifiers**: Which of the 4 categories apply?
3. **Set TNs**: Use standard difficulty scale
4. **Consider scale**: Works Personal through Capital?
5. **Check complexity**: Within budget for this system?
6. **Write examples**: Show the math clearly

---

## Version History
- **v3.0.0** (2025-01-23): Initial core mechanics documentation
- **v3.1.0** (2025-01-23): Added reference sheet with validation framework