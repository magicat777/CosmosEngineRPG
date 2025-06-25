# Saving Throws System

## Overview

When characters face effects that bypass normal defenses or inflict conditions beyond simple damage, they make saving throws. These represent a character's ability to resist, endure, or overcome harmful effects through physical resilience, mental fortitude, or quick reflexes.

**Core Mechanic**: 2d10 + Attribute + Situational Modifiers vs Effect TN

**Design Philosophy**:
- Different attributes defend against different threats
- Active resistance creates player agency
- Scaling difficulty reflects threat severity
- Conditions create tactical complexity without death spirals

---

## The Six Saving Throws

Each PRIMAC attribute provides defense against specific threat types:

### MIGHT Save - Physical Resilience
**Defends Against**: Poison, disease, exhaustion, physical transformation
**Examples**:
- Resist poison (TN 14)
- Shake off paralysis (TN 17)
- Endure extreme gravity (TN 20)
- Fight off nanoplague infection (TN 23)

### COORDINATION Save - Reflexive Avoidance
**Defends Against**: Area effects, explosions, environmental hazards
**Examples**:
- Dodge explosion blast (TN 14)
- Avoid collapsing ceiling (TN 17)
- Escape gravitational anomaly (TN 20)
- Evade reality fracture (TN 23)

### AWARENESS Save - Sensory Resistance
**Defends Against**: Illusions, stealth attacks, sensory overload
**Examples**:
- See through hologram (TN 14)
- Detect ambush (TN 17)
- Resist hallucinogens (TN 20)
- Pierce reality deception (TN 23)

### INTELLECT Save - Mental Processing
**Defends Against**: Confusion, mind control, logic traps, hacking
**Examples**:
- Resist mental intrusion (TN 14)
- Break programming loop (TN 17)
- Solve paradox trap (TN 20)
- Comprehend cosmic truth (TN 23)

### RESOLVE Save - Willpower
**Defends Against**: Fear, stress, mental influence, corruption
**Examples**:
- Resist intimidation (TN 14)
- Overcome terror (TN 17)
- Maintain sanity (TN 20)
- Defy divine command (TN 23)

### PRESENCE Save - Force of Personality
**Defends Against**: Social manipulation, possession, identity loss
**Examples**:
- Resist charm effect (TN 14)
- Maintain leadership under pressure (TN 17)
- Prevent possession (TN 20)
- Assert existence against erasure (TN 23)

---

## Saving Throw Mechanics

### Basic Save Formula
```
2d10 + Attribute + Bonuses - Penalties vs Effect TN
```

### Effect Target Numbers

| Threat Level | TN | Example Sources |
|--------------|----|-----------------| 
| **Minor** | 11 | Weak poison, flash grenade, basic fear |
| **Moderate** | 14 | Standard effects, toxins, psychic probes |
| **Major** | 17 | Powerful drugs, advanced tech, strong magic |
| **Extreme** | 20 | Lethal toxins, reality effects, divine power |
| **Legendary** | 23+ | Cosmic forces, absolute effects |

### Save Modifiers

#### Positive Modifiers
- **Prepared**: +2 (knew it was coming)
- **Protected**: +2 (equipment or abilities)
- **Resistant**: +4 (species/background immunity)
- **Experienced**: +1 per previous exposure

#### Negative Modifiers
- **Surprised**: -2 (no warning)
- **Compromised**: -2 (already affected)
- **Vulnerable**: -4 (species/background weakness)
- **Exhausted**: -1 per fatigue level

---

## Condition Application

### Save Results

#### Success (Meet or Beat TN)
- **Basic Success**: Avoid effect entirely
- **Success by 5+**: Gain advantage against similar effects (1 scene)
- **Success by 10+**: Become immune to source (1 scene)

#### Failure (Below TN)
- **Basic Failure**: Suffer full effect
- **Failure by 5+**: Suffer enhanced effect or duration
- **Failure by 10+**: Suffer critical effect

### Graduated Effects

Some effects scale based on save margin:

#### Poison Example
**Toxin (TN 14 Might Save)**:
- **Success**: No effect
- **Failure by 1-4**: Physical Impaired (1 scene)
- **Failure by 5-9**: Physical Disabled (10 minutes)
- **Failure by 10+**: Physical Critical (ongoing damage)

#### Fear Example
**Terror (TN 17 Resolve Save)**:
- **Success**: Shake it off
- **Failure by 1-4**: Mental Impaired (3 rounds)
- **Failure by 5-9**: Must flee (1 minute)
- **Failure by 10+**: Catatonic (scene)

---

## Status Effect Categories

### Physical Conditions (Might/Coordination Saves)

#### Impaired (-2 physical actions)
- **Sources**: Minor wounds, fatigue, mild toxins
- **Duration**: Scene or until treated
- **Save**: Usually Might TN 14

#### Disabled (No physical actions)
- **Sources**: Paralysis, severe pain, restraints
- **Duration**: Minutes to hours
- **Save**: Might TN 17

#### Critical (Ongoing physical crisis)
- **Sources**: Severe poison, bleeding, system failure
- **Effect**: 1d6 damage/round or escalating penalties
- **Save**: Might TN 20 to stabilize

### Mental Conditions (Intellect/Resolve Saves)

#### Impaired (-2 mental actions)
- **Sources**: Confusion, mild fear, sensory overload
- **Duration**: Rounds to scene
- **Save**: Resolve or Intellect TN 14

#### Disabled (Cannot think clearly)
- **Sources**: Stunning, terror, mind control
- **Duration**: Rounds to minutes
- **Save**: Resolve TN 17

#### Critical (Mental breakdown)
- **Sources**: Madness, possession, identity crisis
- **Effect**: Loss of agency or personality
- **Save**: Resolve TN 20

### System Conditions (Awareness/Intellect Saves)

#### Impaired (-2 electronic actions)
- **Sources**: Interference, mild hacking, power fluctuation
- **Duration**: Scene
- **Save**: Intellect TN 14

#### Disabled (Systems offline)
- **Sources**: EMP, virus, power loss
- **Duration**: Until repaired
- **Save**: Intellect TN 17

#### Critical (Cascade failure)
- **Sources**: Critical hacking, quantum disruption
- **Effect**: Progressive system corruption
- **Save**: Intellect TN 20

---

## Special Save Situations

### Area Effects

When caught in area effects, characters may attempt saves to reduce impact:

#### Explosion (Coordination Save)
- **Full Damage Zone**: No save
- **Blast Zone**: Save to halve damage
- **Shockwave Zone**: Save to avoid knockdown

#### Gas Cloud (Might Save)
- **Dense Core**: Save at -4
- **Standard Area**: Normal save
- **Edges**: Save at +2

### Ongoing Effects

Some conditions allow repeated saves:

#### Poison
- **Initial**: Might save when exposed
- **Ongoing**: New save each interval
- **Recovery**: Save at +1 per successful save

#### Mind Control
- **Initial**: Resolve save to resist
- **Commands**: New save if ordered to harm allies
- **Breaking Free**: Save when damaged or each scene

### Environmental Hazards

Environmental threats often allow saves to mitigate:

#### Radiation (Might Save)
- **Low Level**: Save per day
- **Moderate**: Save per hour
- **Extreme**: Save per minute
- **Lethal**: Save per round

#### Zero Gravity (Coordination Save)
- **Initial**: Save to avoid disorientation
- **Actions**: Save to perform complex maneuvers
- **Adaptation**: +1 per day in environment

---

## Technology & Saves

### Equipment Bonuses

#### Protective Gear
- **Respirator**: +2 vs airborne toxins
- **Rad Suit**: +4 vs radiation
- **Psi Shield**: +2 vs mental intrusion
- **Stabilizers**: +2 vs knockdown

#### Medical Enhancement
- **Toxin Filters**: +3 vs poison
- **Neural Shielding**: +2 vs mind effects
- **Reflex Boosters**: +1 vs area effects
- **Immune Enhancement**: +2 vs disease

### Technology Era Modifiers

Higher tech provides better save bonuses:
- **Primitive**: No bonuses, rely on natural resistance
- **Industrial**: +1 with proper equipment
- **Information**: +2 with advanced gear
- **Fusion**: +3 with integrated systems
- **Stellar**: +4 with quantum enhancement
- **Cosmic**: +5 with reality manipulation

---

## Critical Saves

### Natural 20 - Legendary Resistance
When rolling natural 20 on a save:
- **Immunity**: Become immune to that specific effect for scene
- **Inspiration**: Gain +2 to all saves for 1 round
- **Rally**: Allies gain +1 to similar saves
- **Reversal**: May reflect effect back at source

### Natural 2 - Catastrophic Failure
When rolling natural 2 on a save:
- **Enhanced Effect**: Suffer maximum possible effect
- **Contagion**: Effect may spread to nearby allies
- **Trauma**: Gain vulnerability to similar effects
- **Lasting Impact**: Effect duration doubles

---

## Saving Throw Examples

### Combat Situations

**Flash Grenade** (Awareness Save TN 14)
- Success: Momentary blink, no effect
- Failure: Blinded for 3 rounds

**Knockout Gas** (Might Save TN 17)
- Success: Hold breath, escape area
- Failure: Unconscious for 10 minutes

**Neural Disruptor** (Intellect Save TN 17)
- Success: Headache but functional
- Failure: Mental Disabled for scene

### Environmental Hazards

**Explosive Decompression** (Coordination Save TN 14)
- Success: Grab hold, take half damage
- Failure: Blown out, full damage + knockdown

**Extreme Heat** (Might Save TN 17)
- Success: Function normally for 10 minutes
- Failure: Physical Impaired, 1d6 damage/minute

**Psychic Storm** (Resolve Save TN 20)
- Success: Maintain sanity
- Failure: Mental Critical, possible permanent effects

### Social Encounters

**Intimidation** (Resolve Save TN = Intimidator's roll)
- Success: Stand your ground
- Failure: Mental Impaired or must comply

**Seduction** (Presence Save TN = Seducer's roll)
- Success: Recognize manipulation
- Failure: Favorably disposed, may reveal information

**Fast Talk** (Intellect Save TN = Speaker's roll)
- Success: See through deception
- Failure: Believe false information

---

## Quick Reference

### Save Summary by Attribute
- **Might**: Poison, disease, physical transformation
- **Coordination**: Explosions, area effects, environmental
- **Awareness**: Illusions, ambush, sensory attacks
- **Intellect**: Confusion, hacking, logic traps
- **Resolve**: Fear, stress, willpower tests
- **Presence**: Charm, possession, identity

### Common Save TNs
- **Easy**: 11 (weak effects)
- **Moderate**: 14 (standard threats)
- **Hard**: 17 (serious dangers)
- **Extreme**: 20 (legendary perils)
- **Impossible**: 23+ (divine/cosmic forces)

### Status Duration Guidelines
- **Instant**: Effect and gone
- **Brief**: 1-3 rounds
- **Short**: 1 scene/encounter
- **Extended**: 1 day
- **Long**: 1 week+
- **Permanent**: Until cured

---

## Design Notes

This saving throw system provides:
- **Attribute Relevance**: Every attribute defends against something
- **Player Agency**: Active rolls create engagement
- **Graduated Effects**: Failure severity matters
- **Tactical Options**: Equipment and preparation help
- **Drama**: Natural 20s and 2s create memorable moments

The system integrates seamlessly with the expanded HP pools and 1-10 attribute scale, creating survivable but consequential combat where conditions matter more than raw damage.

---

## Version History

- **v3.5.0** (2025-01-24): Created comprehensive saving throw system
- **v3.5.0** (2025-01-24): Integrated with 1-10 attribute scale
- **v3.5.0** (2025-01-24): Established graduated effect framework