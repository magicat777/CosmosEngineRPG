# Electronic Warfare Systems

## Overview

Electronic Warfare (EW) and Electronic Defense (EDEF) create a parallel battlefield where information, sensors, and ship systems become weapons. Small specialized ships can disable larger vessels, but become vulnerable when doing so. Counter-EW vessels protect fleets from total suppression.

**Core Concepts**:
- EW actions require **Focus** - limiting other actions
- Each EW system has specific **Counters**
- **Signature Radius** affects targeting
- **Electronic Warfare Rating** vs **Electronic Defense Rating**

---

## EW Fundamentals

### Electronic Warfare Rating (EWR)
**Base EWR**: Intellect + Tech + Ship's EW Suite
- Fighter: +0 to +2
- Corvette: +2 to +4
- Cruiser: +3 to +5
- Specialized EW: +5 to +8

### Electronic Defense Rating (EDR)
**Base EDR**: 10 + Intellect + Ship's EDEF Systems
- Modified by signature radius
- Enhanced by counter-EW modules
- Reduced while using active sensors

### Signature Radius
How "loud" your ship appears electronically:
| Ship State | Signature Modifier |
|------------|-------------------|
| Silent Running | -3 EDR (harder to target) |
| Normal Operation | +0 EDR |
| Active Sensors | +2 EDR (easier to target) |
| Overcharged Systems | +3 EDR |
| Using Jump Drive | +5 EDR |

### Focus Requirements
Most EW requires **Focus** - dedicating ship resources:
- **Light Focus**: Can still take Move actions
- **Heavy Focus**: Only Free actions allowed
- **Total Focus**: No other actions, +2 EW bonus

---

## Offensive EW Systems

### Warp Disruptor (Jump Inhibitor)
Prevents FTL escape - the pirate's friend.

**Activation**: Standard Action + Heavy Focus
**Check**: EWR vs target's EDR
**Range**: Short to Medium
**Effect**: Target cannot jump/warp
**Duration**: Maintain with Heavy Focus
**Counter**: Warp Core Stabilizers (+3 EDR vs disruption)
**Heat**: 2 per round maintained

**Variants**:
- **Warp Scrambler**: Close range, harder to counter (+2 EWR)
- **Interdiction Sphere**: Area effect, affects all ships
- **Focused Point**: Single target, extreme range

**Risk/Reward**: Disruptor ship is vulnerable while maintaining lock. Perfect for ambushes but dangerous against superior firepower.

### Target Painter
Makes enemies easier to hit.

**Activation**: Move Action + Light Focus
**Check**: EWR vs EDR
**Range**: Medium to Long
**Effect**: Target gains +3 signature radius
**Duration**: 3 rounds or until countered
**Counter**: Signature Dampeners
**Heat**: 1 per activation

**Tactical Use**: Force stealth ships visible, help missiles track, enable long-range sniping.

### ECM Suite (Jamming)
Breaks target locks and blinds sensors.

**Activation**: Standard Action + Heavy Focus
**Check**: EWR vs EDR
**Range**: Long
**Effect Options** (choose one):
- **Sensor Jam**: Target -4 to detection/targeting
- **Lock Breaker**: Break all current target locks
- **Comms Jam**: No coordination between ships
- **Navigation Jam**: -2 to Pilot checks

**Duration**: While focused
**Counter**: ECCM modules (+3 EDR vs ECM)
**Heat**: 3 per round

**Racial Variants** (optional flavor):
- **Gravitic**: Best vs larger ships
- **Ladar**: Best vs missiles
- **Magnetometric**: Best vs drones
- **Radar**: Best vs targeting computers

### Tracking Disruptor
Reduces weapon accuracy.

**Activation**: Move Action + Light Focus
**Check**: EWR vs EDR
**Range**: Medium
**Effect**: Target -3 to weapon attacks
**Duration**: Concentration
**Counter**: Tracking Computers (+2 to resist)
**Heat**: 2 per round

### Sensor Dampener
Reduces enemy sensor range and targeting speed.

**Activation**: Standard Action + Light Focus
**Check**: EWR vs EDR
**Range**: Long
**Effect**: 
- Sensor range halved
- -2 to Initiative
- Cannot achieve missile lock
**Duration**: Concentration
**Counter**: Sensor Boosters
**Heat**: 1 per round

### Neutralizer/Nosferatu
Drains power from enemy systems.

**Activation**: Standard Action + Heavy Focus
**Check**: EWR vs EDR
**Range**: Close to Short
**Effect**: Drain 1d6 power points
**Special**: Nosferatu variant transfers power to your ship
**Counter**: Capacitor Batteries
**Heat**: 4 per use

---

## Defensive EW Systems

### Warp Core Stabilizer
Prevents warp disruption.

**Passive Effect**: +3 EDR vs disruption
**Drawback**: -2 to targeting range
**Stacking**: Multiple stabilizers stack

### ECCM (Electronic Counter-Countermeasures)
Protects against jamming.

**Active Mode**: Free Action
**Effect**: +3 EDR vs ECM, +1 to break jams
**Heat**: 1 per round active

### Signal Distortion
Creates false sensor echoes.

**Activation**: Move Action
**Effect**: Creates 1d3 false signatures
**Duration**: 1 minute
**Counter**: High-level sensor analysis

### Burst Jammer
Area denial ECM.

**Activation**: Full Round + Total Focus
**Check**: EWR vs all ships in Medium range
**Effect**: All affected -2 to actions
**Duration**: Instant
**Heat**: 8 (massive spike)
**Risk**: Affects allies too!

---

## EW Roles in Fleet Combat

### EW Specialist Roles

**Interdictor**
- Focus: Warp disruption
- Fit: Multiple disruptors, reinforced tank
- Tactic: Lock down high-value targets
- Vulnerability: Close range required

**Jammer Ship**
- Focus: ECM suites
- Fit: Long-range, multiple racial jammers
- Tactic: Blind enemy logistics/snipers
- Vulnerability: Fragile, high signature when active

**Dampener Platform**
- Focus: Range reduction
- Fit: Sensor dampeners, range bonuses
- Tactic: Neutralize long-range threats
- Vulnerability: Weak to fast tackle

**Support Frigate**
- Focus: Target painting, tracking disruption
- Fit: Fast, multiple EW modules
- Tactic: Enhance fleet damage, protect allies
- Vulnerability: Paper-thin defenses

### Counter-EW Ships

**EDEF Cruiser**
- Provides fleet-wide bonuses:
  - All allies +2 EDR within Medium range
  - Can "project" ECCM to targeted ally
  - Multiple counter-EW suites

**Command Ship**
- **Information Warfare Link**: Fleet +1 to EW/EDEF
- **Electronic Superiority**: Ignore first jam per round
- **Coordinated Countermeasures**: Share EDEF bonuses

---

## Tactical EW Gameplay

### Ambush Tactics
Small gang waits at jump point:
1. **Scout** identifies target
2. **Interdictor** warps in, activates disruptor
3. **DPS** ships engage trapped target
4. **Risk**: Target might have greater firepower
5. **Counter**: Warp core stabilizers, counter-tackle

### Fleet EW Doctrine

**Opening Gambit**:
- Dampeners reduce enemy range
- ECM jams enemy logistics
- Target painters mark primaries

**Counter-Play**:
- EDEF cruisers project protection
- Fast tackle eliminates jammers
- Snipers focus on EW platforms

### Solo EW Tactics
**Kiting Dampener**:
- Stay at maximum range
- Dampen pursuer's targeting range
- Slowly destroy with long-range weapons

**Brawling Neutralizer**:
- Get close, drain capacitor
- Without power, enemy helpless
- Risk: Must survive approach

---

## EW Equipment

### EW Modules (Tech Level 3+)

**Offensive Modules**:
| Module | Power | Heat | Effect |
|--------|-------|------|--------|
| Warp Disruptor I | 2 | 2/round | Basic jump prevention |
| Warp Scrambler II | 3 | 3/round | Close range, +2 strength |
| ECM Burst | 4 | 8 | Area jamming |
| Target Painter | 1 | 1 | +3 signature |
| Tracking Disruptor | 2 | 2/round | -3 to attacks |
| Stasis Webifier | 2 | 1/round | Half target speed |

**Defensive Modules**:
| Module | Power | Passive Bonus |
|--------|-------|---------------|
| Warp Core Stabilizer | 1 | +3 vs disruption |
| ECCM Array | 2 | +3 vs jamming |
| Signature Suppressor | 1 | -2 signature |
| Sensor Booster | 2 | +2 sensor range |

### Ship Bonuses

**EW Specialized Hulls**:
- **Blackbird-class**: +2 to ECM, +50% ECM range
- **Crucifier-class**: +2 to tracking disruption
- **Maulus-class**: +2 to sensor dampening
- **Vigil-class**: +3 to target painting

**Counter-EW Hulls**:
- **Scorpion-class**: Fleet EDEF bonuses
- **Falcon-class**: Cloaked EW platform
- **Rook-class**: Heavy EW with combat capability

---

## Advanced EW Concepts

### Signature Tanking
Using signature radius for defense:
- Small signature = harder to hit
- Signature suppressors stack
- Speed + small sig = near immunity to large weapons

### Damp-Kiting
Combination of:
- Sensor dampeners (reduce lock range)
- Long-range weapons
- High speed
- Result: Enemy can't lock you

### ECM Burst Bombing
Risky tactic:
- Cloak near enemy fleet
- Decloak and burst jam
- Flee before retaliation
- Disrupts entire enemy formation

### Power Warfare
Neutralizer-focused tactics:
- Drain enemy capacitor
- Without power: No weapons, no tank, no escape
- Effective vs active-tanked ships

---

## EW in Different Eras

### Information Era (Tech 3)
- Basic jammers and sensors
- Wire-guided missiles
- Radar/Ladar systems

### Fusion Era (Tech 4)
- Gravitic sensors
- Plasma-based EW
- Quantum encryption

### Stellar Era (Tech 5)
- Subspace jammers
- Tachyon sensors
- Probability scramblers

### Cosmic Era (Tech 6)
- Reality distortion fields
- Causal inhibitors
- Omniscient sensors

---

## Quick EW Reference

### Action Economy
- **Light EW** (Target Paint, Track Disrupt): Move Action
- **Heavy EW** (Jam, Disrupt, Dampen): Standard Action
- **Burst EW**: Full Round Action

### Range Bands for EW
- **Neutralizers**: Close only
- **Scramblers**: Close to Short
- **Disruptors**: Short to Medium
- **Jammers**: Medium to Long
- **Dampeners**: Long to Extreme

### Heat Management
- Most EW generates moderate heat
- Burst effects cause heat spikes
- Overheating disables EW first

### Counter Priority
1. Protect logistics/healers
2. Counter enemy jammers
3. Maintain tackle on targets
4. Boost fleet sensors

---

## EW Success

This system creates emergent gameplay where:
- Small ships can meaningfully threaten large ones
- EW specialists are valuable but vulnerable
- Counter-EW prevents total battlefield control
- Risk/reward choices drive tactics
- Information warfare runs parallel to damage race

The result: Every fleet composition benefits from EW consideration, creating deeper tactical gameplay beyond "shoot the red things."

---

## Version History

- **v4.1.0** (2025-01-25): Created comprehensive Electronic Warfare system