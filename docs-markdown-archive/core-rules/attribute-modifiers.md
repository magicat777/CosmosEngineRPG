# Attribute Modifiers (1-10 System)

## Overview

In the Cosmos Engine 1-10 attribute system, attributes provide direct modifiers to rolls. Unlike some RPG systems that use a separate modifier table, Cosmos Engine uses the attribute value itself as the modifier.

## Direct Attribute Modifiers

**The attribute value IS the modifier you add to rolls.**

| Attribute Rating | Modifier | Description | Example Character |
|-----------------|----------|-------------|-------------------|
| **1** | +1 | Severely below average | Frail, sickly, impaired |
| **2** | +2 | Below average | Weak, untrained, disadvantaged |
| **3** | +3 | Low average | Sedentary, minimal capability |
| **4** | +4 | Average | Normal human baseline |
| **5** | +5 | Above average | Fit, trained, educated |
| **6** | +6 | Exceptional | Professional athlete, expert |
| **7** | +7 | Peak human | Olympic athlete, genius |
| **8** | +8 | Cinematic hero | Action movie protagonist |
| **9** | +9 | Mythic | Demigod, superhuman |
| **10** | +10 | Divine | Godlike being, cosmic entity |

## How Modifiers Work

### Basic Roll Formula
```
2d10 + Attribute + Skill + Equipment + Situation = Total
```

### Example Calculations

**Starting Character** (Might 5)
- Melee Attack: 2d10 + 5 (Might) + 1 (Combat) + 1 (weapon) = 2d10 + 7
- Average roll: 11 + 7 = 18

**Veteran Character** (Might 8)
- Melee Attack: 2d10 + 8 (Might) + 4 (Combat) + 3 (weapon) = 2d10 + 15
- Average roll: 11 + 15 = 26

**Legendary Character** (Might 10)
- Melee Attack: 2d10 + 10 (Might) + 5 (Combat) + 6 (weapon) = 2d10 + 21
- Average roll: 11 + 21 = 32

## Comparison to Other Systems

### Traditional d20 Systems
Many d20 systems use a derived modifier:
- Attribute 10-11 = +0 modifier
- Attribute 12-13 = +1 modifier
- Attribute 14-15 = +2 modifier
- etc.

### Cosmos Engine Direct System
Our system is more intuitive:
- Attribute 1 = +1 modifier
- Attribute 5 = +5 modifier
- Attribute 10 = +10 modifier

This eliminates the need to reference a table or remember conversions.

## Modifier Ranges by Character Type

### Starting Characters (30 points)
- **Primary Attributes**: 5-6 (+5 to +6)
- **Secondary Attributes**: 3-4 (+3 to +4)
- **Weak Attributes**: 1-3 (+1 to +3)
- **Total Modifier Range**: +1 to +6

### Mid-Level Characters (Level 10)
- **Primary Attributes**: 7-8 (+7 to +8)
- **Secondary Attributes**: 5-6 (+5 to +6)
- **Weak Attributes**: 3-4 (+3 to +4)
- **Total Modifier Range**: +3 to +8

### High-Level Characters (Level 20)
- **Primary Attributes**: 9-10 (+9 to +10)
- **Secondary Attributes**: 7-8 (+7 to +8)
- **Weak Attributes**: 5-6 (+5 to +6)
- **Total Modifier Range**: +5 to +10

## Derived Statistics Using Modifiers

### Hit Points
```
40 + (Might modifier × 8) + (Resolve modifier × 4)
```
Example with Might 6, Resolve 4:
40 + (6 × 8) + (4 × 4) = 40 + 48 + 16 = 104 HP

### Initiative
```
2d10 + Coordination modifier + Awareness modifier
```
Example with Coordination 5, Awareness 5:
2d10 + 5 + 5 = 2d10 + 10

### Defense Values
**Physical Defense**: 10 + Coordination modifier + Armor
**Mental Defense**: 10 + Resolve modifier + (Intellect modifier ÷ 2)
**Electronic Defense**: 10 + Intellect modifier + Systems

## Why Direct Modifiers Work

### Advantages
1. **Intuitive**: No conversion needed - the number is what you add
2. **Fast**: No table lookup or math required during play
3. **Scalable**: Works seamlessly from 1-10 without breakpoints
4. **Clear Growth**: Each attribute point is meaningful advancement

### Design Intent
The 1-10 scale with direct modifiers creates:
- Clear progression from weak to godlike
- Meaningful choices in character creation
- Satisfying advancement throughout 20 levels
- Easy math at the table

## Quick Reference

**Remember**: In Cosmos Engine, your attribute IS your modifier!

- See attribute 5? Add +5 to your roll.
- See attribute 8? Add +8 to your roll.
- See attribute 10? Add +10 to your roll.

No conversion, no table, no confusion.

---

## Version History

- **v4.0.0** (2025-01-24): Clarified attribute modifier system for 1-10 scale