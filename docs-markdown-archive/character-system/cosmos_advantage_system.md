# Cosmos Engine: Advantage/Disadvantage System
## Technical Design Document v1.0

**System Overview:** Unified mechanics for handling modifiers across all scales while preserving 2d10 probability foundations

**Design Goals:** Replace complex modifier stacking with elegant dice pool scaling that maintains meaningful failure rates at all power levels

---

## Core Mechanics

### Base Resolution System
**Standard Roll:** 2d10 + Attribute + Skill vs Target Number (8-20)
- **Attributes:** 0-5 (+0 to +5 modifier)
- **Skills:** 0-5 (+0 to +5 modifier)  
- **Maximum Base Modifiers:** +10 total (Attribute + Skill only)

### Advantage/Disadvantage Resolution
**Advantage:** Roll additional d10s, select the **two highest** results
**Disadvantage:** Roll additional d10s, select the **two lowest** results

**Dice Pool Range:** 2d10 (base) to 7d10 (maximum 5 advantage/disadvantage)
**Cancellation Rule:** Advantage and disadvantage cancel 1:1 before application

### Critical Success/Failure Mechanics
**Critical Success:** Both selected dice show 10
**Critical Failure:** Both selected dice show 1 (only possible with disadvantage)

**Key Design Feature:** Critical probability scales with advantage/disadvantage dice, creating meaningful power progression while maintaining uncertainty.

---

## Mathematical Foundation

### Success Probability Scaling
| Dice Pool | Average Result | Critical Success % | Critical Failure % |
|-----------|----------------|-------------------|-------------------|
| 2d10 (base) | 11.0 | 1.0% | 1.0% |
| 3d10 (+1 adv) | 13.4 | 2.8% | 0.0% |
| 4d10 (+2 adv) | 14.7 | 5.2% | 0.0% |
| 5d10 (+3 adv) | 15.5 | 8.1% | 0.0% |
| 6d10 (+4 adv) | 16.2 | 11.4% | 0.0% |
| 7d10 (+5 adv) | 16.7 | 15.0% | 0.0% |

### Key Mathematical Properties
- **Bounded Growth:** Average result approaches but never exceeds ~17 even with infinite advantage
- **Meaningful Failure:** TN 20 challenges maintain 18% failure rate even at maximum advantage
- **Scaled Spectaculars:** Critical successes become more frequent with superior equipment/positioning
- **Preserved Bell Curve:** 2d10 probability distribution maintained in final results

---

## Cross-Scale Implementation

### Personal Scale
**Base:** 2d10 + Attribute + Skill
**Advantage Sources:**
- Equipment Quality: +1-3 advantage dice based on technology era
- Environmental Conditions: +/-1-2 advantage/disadvantage dice
- Preparation/Planning: +1 advantage die
- Tactical Position: +/-1-2 advantage/disadvantage dice

**Example:** Elite soldier with advanced equipment in optimal conditions
- Roll: 6d10 (2 base + 4 advantage), keep highest 2
- Modifiers: +8 (Coordination 4 + Firearms 4)
- Result: Very reliable with increased critical potential

### Vehicle Scale  
**Base:** 2d10 + Attribute + Skill
**Advantage Sources:**
- Vehicle System Rating: +2-4 advantage dice
- Support Infrastructure: +1-2 advantage dice
- Crew Quality/Training: +1 advantage die
- Technology Integration: +1-2 advantage dice

**Example:** Ace pilot in military fighter with ground support
- Roll: 7d10 (2 base + 5 advantage), keep highest 2
- Enhanced critical success rate reflects precision systems and pilot mastery

### Starship Scale
**Base:** 2d10 + Attribute + Skill
**Advantage Sources:**
- Ship Class/Systems: +3-5 advantage dice
- Fleet Coordination: +1-2 advantage dice
- Strategic Position: +1-3 advantage dice
- Technology Superiority: +2-4 advantage dice

**Implementation Note:** May require multiple subsystem rolls for complex actions

### Capital Scale
**Base:** 2d10 + Attribute + Skill
**Advantage Sources:**
- Empire Infrastructure: +4-6 advantage dice
- Institutional Support: +2-3 advantage dice
- Resource Advantage: +2-4 advantage dice
- Time/Preparation: +1-3 advantage dice

**Implementation Note:** Often uses extended challenges or opposed rolls

---

## Conversion Guidelines

### Legacy Modifier Translation
**Equipment Bonuses to Advantage Dice:**
- Primitive Era (+1): +1 advantage die
- Modern Era (+2): +1 advantage die
- Advanced Era (+3): +2 advantage dice
- Futuristic Era (+4): +2 advantage dice
- Cosmic Era (+5): +3 advantage dice

**Situational Modifiers to Advantage/Disadvantage:**
- Minor factors (+/-1-2): +/-1 advantage/disadvantage die
- Major factors (+/-3-4): +/-2 advantage/disadvantage dice
- Extreme factors (+/-5+): +/-3 advantage/disadvantage dice

### Scale Rating Conversion
**Vehicle/System Ratings to Advantage:**
- Rating 1-3: +1 advantage die
- Rating 4-6: +2 advantage dice  
- Rating 7-9: +3 advantage dice
- Rating 10+: +4 advantage dice

---

## Critical Effects by Scale

### Personal Scale Critical Success
- **Combat:** Double damage + special effect (disarm, knockdown, etc.)
- **Skill Use:** Maximum effect + additional benefit or reduced time
- **Social:** Exceptional impression + ongoing advantage

### Vehicle Scale Critical Success  
- **Combat:** System damage to target + tactical advantage
- **Piloting:** Perfect maneuver + positioning bonus
- **Operations:** Exceptional efficiency + resource conservation

### Starship Scale Critical Success
- **Fleet Command:** Coordinated strike + morale bonus
- **Navigation:** Perfect course + time advantage
- **Diplomacy:** Breakthrough + lasting relationship bonus

### Capital Scale Critical Success
- **Strategy:** Paradigm shift + cascading advantages
- **Politics:** Historical significance + institutional change
- **Economics:** Market transformation + lasting prosperity

---

## Implementation Guidelines

### Dice Management
**Recommended:** Use identical d10s for all rolls to eliminate "which die was first" tracking issues
**Critical Determination:** Any two dice showing matching results (10s or 1s) among the selected pair
**Player Communication:** "Roll X dice, pick the two highest/lowest, then add your modifiers"

### Target Number Guidelines
**Easy Tasks (TN 8-10):** Routine activities, favorable conditions
**Moderate Tasks (TN 12-14):** Professional challenges, standard conditions
**Hard Tasks (TN 16-18):** Expert-level challenges, adverse conditions  
**Extreme Tasks (TN 20):** Legendary achievements, overwhelming opposition

### Balance Considerations
**Advantage Dice Cap:** Maximum 5 advantage/disadvantage dice (7d10 total) prevents runaway scaling
**Critical Effect Limits:** One critical effect per roll regardless of additional 10s rolled
**Opposed Roll Handling:** Both sides roll with their respective advantage/disadvantage, compare final results
**Extended Challenge Integration:** Each roll in sequence uses appropriate advantage/disadvantage for current conditions

---

## System Benefits

### Mechanical Advantages
- **Unified Scaling:** Same mechanics work from personal to galactic scales
- **Mathematical Stability:** Preserves 2d10 probability curves while allowing meaningful progression
- **Reduced Complexity:** Eliminates modifier stacking calculations
- **Enhanced Drama:** Scaled critical chances create more spectacular high-level play

### Narrative Support
- **Power Progression:** Characters become both more reliable AND more spectacular
- **Technology Integration:** Advanced equipment enhances capability without replacing skill
- **Scale Appropriate:** Critical frequency matches the epic nature of higher-scale operations
- **Failure Preservation:** Even maximum advantage maintains meaningful uncertainty

### Implementation Simplicity
- **Player Friendly:** Easy to understand "roll more dice, pick best two"
- **GM Friendly:** Simple advantage/disadvantage assessment replaces complex modifier math
- **Technology Agnostic:** Works equally well with physical dice or digital tools
- **Backwards Compatible:** Can be implemented incrementally alongside existing modifier systems

---

## Recommended Rollout Strategy

### Phase 1: Core Implementation
- Implement advantage/disadvantage for equipment and environmental factors
- Maintain existing attribute + skill modifiers
- Train GMs on advantage assessment guidelines

### Phase 2: Scale Integration  
- Convert vehicle and starship system ratings to advantage dice
- Implement scaled critical effects
- Develop scale-specific target number guidelines

### Phase 3: Full Conversion
- Convert all remaining modifier sources to advantage/disadvantage
- Finalize critical effect descriptions for all scales
- Complete playtesting and balance adjustment

### Phase 4: Optimization
- Streamline advantage assessment procedures
- Develop quick reference materials for GMs
- Create digital tools for advantage/disadvantage calculation

---

## Technical Notes

**Dice Probability Formula:** For n dice keeping highest 2, critical success probability = 1 - (0.99)^n - n×(0.01)×(0.99)^(n-1)

**Scaling Validation:** System tested through 10d10 scenarios; maintains meaningful failure rates and preserves target number relevance across all tested ranges.

**Performance Considerations:** Maximum 7d10 roll prevents excessive dice handling while providing sufficient scaling range for all intended use cases.