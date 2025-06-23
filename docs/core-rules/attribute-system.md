# Cosmos Engine Attribute System (PRIMAC)

## Overview

Six core attributes define every character, vehicle, and organization in Cosmos Engine. These attributes scale seamlessly from personal actions to galactic operations, maintaining consistent mechanics while adapting to context.

**PRIMAC**: Presence, Resolve, Intellect, Might, Awareness, Coordination

## The Six Attributes (PRIMAC Order)

### PRESENCE - Influence & Command (0-5)
Force of personality and leadership across scales.

**Personal Scale**: Charisma, leadership, and social influence. Essential for negotiations and inspiring others.

**Vehicle Scale**: Crew coordination, passenger management, and authority projection.

**Starship Scale**: Command presence, crew morale, and fleet inspiration.

**Capital Scale**: Political influence, alliance building, and cultural impact.

### RESOLVE - Will & Stability (0-5)
Mental fortitude and system stability under pressure.

**Personal Scale**: Willpower, stress resistance, and mental resilience. Resists fear and maintains focus.

**Vehicle Scale**: System stability, emergency response, and damage control.

**Starship Scale**: Combat composure, crisis management, and crew steadiness.

**Capital Scale**: Strategic patience, institutional stability, and long-term focus.

### INTELLECT - Analysis & Processing (0-5)
Information processing and strategic thinking across domains.

**Personal Scale**: Reasoning, education, and tactical analysis. Drives skill acquisition and technical tasks.

**Vehicle Scale**: System diagnostics, route optimization, and tactical planning.

**Starship Scale**: Strategic analysis, sensor interpretation, and computational power.

**Capital Scale**: Grand strategy, intelligence synthesis, and predictive modeling.

### MIGHT - Force & Power (0-5)
The application of raw force and system power across all scales.

**Personal Scale**: Physical strength, endurance, and constitution. Determines carrying capacity, melee damage, and physical resilience.

**Vehicle Scale**: Engine output, structural integrity, and power generation. Affects acceleration, towing capacity, and damage resistance.

**Starship Scale**: Engineering systems, reactor output, and power allocation. Influences shield strength, weapon charging, and structural durability.

**Capital Scale**: Industrial capacity, resource mobilization, and logistical force projection.

### AWARENESS - Detection & Intuition (0-5)
Perception and intuitive understanding at all levels.

**Personal Scale**: Sensory perception, empathy, and danger sense. Vital for avoiding ambush and reading people.

**Vehicle Scale**: Environmental awareness, hazard detection, and situational assessment.

**Starship Scale**: Sensor operation, threat detection, and battlefield awareness.

**Capital Scale**: Intelligence networks, strategic reconnaissance, and trend detection.

### COORDINATION - Precision & Control (0-5)
Fine control and synchronized action at every level.

**Personal Scale**: Dexterity, reflexes, and hand-eye coordination. Essential for ranged combat, delicate tasks, and acrobatics.

**Vehicle Scale**: Piloting finesse, system synchronization, and maneuvering precision. Critical for evasion and complex maneuvers.

**Starship Scale**: Navigation precision, tactical positioning, and multi-system coordination.

**Capital Scale**: Fleet formations, operational timing, and strategic coordination.

## Attribute Ranges & Advancement

### Base Ranges
- **0**: Deficient (significant impairment)
- **1**: Poor (below average)
- **2-3**: Average (human normal)
- **4**: Excellent (professional level)
- **5**: Peak (human maximum)
- **6**: Legendary (level 20 only, one attribute)

### Advancement Costs
| Character Level | AP Cost per +1 | Maximum Value |
|-----------------|----------------|---------------|
| 1-5 | 3 AP | 4 |
| 6-10 | 4 AP | 5 |
| 11-15 | 5 AP | 5 |
| 16-20 | 6 AP | 6 (one only) |

### Technology Enhancement
Technology amplifies but never replaces base attributes:
- **Primitive/Industrial**: No attribute enhancement
- **Advanced**: +1 effective attribute (temporary)
- **Stellar**: +2 effective attribute (temporary)
- **Cosmic**: +3 effective attribute (temporary)

## Derived Statistics

### Hit Points
```
10 + (Might × 2) + Resolve
```
- Starting range: 10-25
- Maximum range: 10-30

### Initiative
```
2d10 + Coordination + Awareness
```
- Maintains core 2d10 mechanic
- Range: 2-30 before equipment

### Defense Values
**Physical Defense**: 10 + Coordination + Armor
**Mental Defense**: 10 + Resolve + (Intellect ÷ 2)
**Electronic Defense**: 10 + Intellect + Systems

### Strain Capacity
```
3 + (Resolve × 2)
```
- Tracks exhaustion from technology use
- Range: 3-13

### Skill Points
```
2 + (Intellect ÷ 2) per level
```
- Minimum 2 per level
- Maximum 4 per level

## Common Attribute Applications

### Combat
- **Melee Attack**: Might + Combat Skill
- **Ranged Attack**: Coordination + Combat Skill
- **Tactical Assessment**: Intellect + Combat Skill
- **Spot Ambush**: Awareness + Combat Skill

### Vehicle Operation
- **Piloting**: Coordination + Pilot Skill
- **Navigation**: Intellect + Pilot Skill
- **Hazard Detection**: Awareness + Pilot Skill
- **Crew Coordination**: Presence + Pilot Skill

### Social Encounters
- **Persuasion**: Presence + Social Skill
- **Deception**: Intellect + Social Skill
- **Intimidation**: Might or Presence + Social Skill
- **Sense Motive**: Awareness + Social Skill

### Technology Use
- **Hacking**: Intellect + Tech Skill
- **Repair**: Coordination + Tech Skill
- **Power Management**: Might + Tech Skill
- **System Analysis**: Awareness + Tech Skill

## Scale Modifier Adjustments

While attributes function identically at all scales, modifier caps adjust:

| Scale | Maximum Total Modifier | Rationale |
|-------|------------------------|-----------|
| Personal | +8 | Standard cap |
| Vehicle | +8 | Standard cap |
| Starship | +10 | Crew assistance |
| Capital | +12 | Infrastructure support |

## Equipment Requirements

Many items require minimum attributes:

| Equipment Type | Typical Requirement |
|----------------|-------------------|
| Heavy Weapons | Might 3+ |
| Precision Tools | Coordination 3+ |
| Advanced Tech | Intellect 3+ |
| Sensor Arrays | Awareness 3+ |
| Command Systems | Presence 3+ |
| Stress Gear | Resolve 3+ |

## Design Notes

### No Dump Stats
Every attribute has critical applications:
- **Might**: Health, equipment use, physical tasks
- **Coordination**: Initiative, defense, piloting
- **Intellect**: Skills, technology, analysis
- **Awareness**: Initiative, perception, sensors
- **Presence**: Leadership, morale, social
- **Resolve**: Strain, mental defense, stability

### Cross-Scale Consistency
Same attributes represent different but analogous concepts at each scale, maintaining mechanical consistency while supporting varied fiction.

### Technology Integration
Higher technology eras provide temporary effective attribute increases through enhancement, not permanent changes to base attributes. This maintains human-centered gameplay while showcasing technological advancement.

---

## Version History
- **v3.2.0** (2025-01-23): Initial attribute system definition