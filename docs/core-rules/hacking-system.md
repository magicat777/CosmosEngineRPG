# Hacking System

## Overview

The Cosmos Engine hacking system allows characters to infiltrate and control networked systems across all scales - from personal devices to starship networks to planetary infrastructure. The system uses flexible network zones and parallel threat tracking to create engaging digital infiltration that runs alongside physical action.

**Design Principles**:
- Elegant complexity without overwhelming detail
- Meaningful character investment payoff
- Parallel action with combat systems
- Consistent scale progression
- Risk/reward decision making

---

## Core Mechanics

### Basic Resolution
**Hacking Check**: 2d10 + Intellect + Tech + Equipment vs Target Number

### Key Statistics
- **Hack Rating**: Your total hacking bonus
- **Heat**: System stress from your activities (0-20)
- **Trace**: Active security hunting you (0-10)
- **Access Level**: Your permissions in current system

### Action Economy
Hacking uses the same 6-second rounds as combat:
- **1 Standard Action**: Major hack attempt
- **1 Move Action**: Navigation, analysis, preparation
- **Multiple Quick Actions**: Minor operations
- **Free Actions**: Passive monitoring

---

## Network Architecture

### Zone System
Networks are organized into security zones rather than rigid node structures:

**Zone Types**:
- **Public**: Open access (websites, public terminals)
- **Secure**: Restricted access (employee systems, sensors)
- **Admin**: High security (financial data, weapons control)
- **Core**: Maximum security (life support, reactor control)
- **Black**: Off-limits (AI cores, classified military)

### Access Levels
Your current permissions determine available actions:
- **Guest**: Basic functions, public information
- **User**: Standard operations, personal files
- **Admin**: System control, configuration changes
- **Root**: Complete access, critical systems
- **God Mode**: Unrestricted access (dangerous!)

### Zone Navigation
**Zone Movement** requires appropriate permissions:
- **Credentials**: Move freely with proper access
- **Social Engineering**: Trick users into granting access
- **Brute Force**: Hack through security (generates Heat)

---

## Scale Integration

### Personal Scale (Device Hacking)
**Target Systems**: Phones, terminals, smart locks, cameras
- **Typical TNs**: 11-17
- **ICE Defense**: 12-15
- **Max Safe Access**: Admin
- **Heat Generation**: 1-2 per action

**Common Targets**:
| System | TN | Effect |
|--------|----|---------| 
| Smart Lock | 11 | Unlock/lock doors |
| Security Camera | 14 | Access feeds, loop footage |
| Personal Terminal | 17 | Access files, send messages |
| Biometric Scanner | 20 | Bypass or spoof identity |

### Vehicle Scale (System Hacking)
**Target Systems**: Cars, aircraft, mechs, small vessels
- **Typical TNs**: 14-20
- **ICE Defense**: 15-18
- **Max Safe Access**: Root
- **Heat Generation**: 2-3 per action

**Common Targets**:
| System | TN | Effect |
|--------|----|---------| 
| Navigation | 14 | Change destination, disable autopilot |
| Communications | 17 | Eavesdrop, jam, spoof messages |
| Weapons | 20 | Disable or redirect fire |
| Life Support | 23 | Control atmosphere (potentially lethal) |

### Starship Scale (Network Warfare)
**Target Systems**: Fighters to cruisers, space stations
- **Typical TNs**: 17-23
- **ICE Defense**: 18-21
- **Max Safe Access**: God Mode (extremely dangerous!)
- **Heat Generation**: 3-5 per action

**Common Targets**:
| System | TN | Effect |
|--------|----|---------| 
| Sensors | 17 | Blind, feed false data |
| Shields | 20 | Lower specific facings |
| Weapons | 23 | Disable or friendly fire |
| Reactor | 26 | Emergency shutdown (ship disabled) |

### Capital Scale (Infrastructure Hacking)
**Target Systems**: Planetary networks, fleet command, city infrastructure
- **Typical TNs**: 20-26
- **ICE Defense**: 21-25
- **Max Safe Access**: God Mode (catastrophic potential!)
- **Heat Generation**: 4-6 per action

**Common Targets**:
| System | TN | Effect |
|--------|----|---------| 
| Traffic Control | 20 | Reroute vehicles, cause delays |
| Power Grid | 23 | Blackouts, power surges |
| Communications | 26 | Planetary comm blackout |
| Defense Network | 29 | Disable orbital platforms |

---

## Heat & Trace Management

### Heat System
Represents how much you're stressing the target system:
- **Generation**: Failed hacks, major operations, time
- **Effects**: Stronger ICE responses, security alerts
- **Natural Cooling**: 1 point per 10 minutes offline

**Heat Thresholds**:
| Heat Level | Effect |
|------------|--------|
| 1-4 | Normal operation |
| 5-9 | Minor glitches, +1 to ICE Defense |
| 10-14 | System alerts, +2 to ICE Defense |
| 15-19 | Active response, ICE attacks |
| 20+ | Emergency protocols, maximum security |

### Trace System
Represents security actively hunting your real location:
- **Generation**: Critical failures, attacking ICE, staying too long
- **Persistence**: Doesn't cool down naturally
- **Consequences**: Real-world security response

**Trace Consequences**:
| Trace Level | Effect |
|-------------|--------|
| 1-2 | Suspicious activity logged |
| 3-5 | Location narrowed to district |
| 6-8 | Physical address identified |
| 9-10 | Security/law enforcement dispatched |

---

## Hacking Actions

### Standard Actions

**System Intrusion**:
- Gain access to higher security zone
- Roll vs ICE Defense + Zone modifier
- Success: Access level for current session
- Failure: Generate Heat, potential Trace

**Control System**:
- Take over specific system or device
- Roll vs System TN (varies by scale)
- Success: Direct control for scene
- High Heat generation

**Data Mining**:
- Extract specific information or files
- Roll vs Data Protection TN
- Margin of success determines data quality
- Moderate Heat generation

**Code Injection**:
- Plant virus, backdoor, or malicious code
- Requires Admin+ access
- Effects can be delayed or triggered
- Persists after disconnection

### Move Actions

**Network Analysis**:
- Map network topology and defenses
- Identify valuable targets and ICE
- Learn system architecture
- No Heat generation

**Deploy Daemon**:
- Launch background program
- Operates independently at -2 effectiveness
- Can monitor, defend, or attack
- Continues until destroyed or recalled

**Trace Route**:
- Follow network connections
- Find hidden systems or backdoors
- Requires technical knowledge
- Can reveal unexpected access paths

### Quick Actions

**Status Check**: Monitor all active processes
**Signal Boost**: +1 to next hacking roll
**Cache Clear**: Reduce Heat by 1
**Spoof Signature**: Change apparent identity
**Priority Queue**: Boost daemon effectiveness

### Free Actions

**Passive Monitor**: Watch for ICE activity
**Data Stream**: Maintain connection quality
**Background Noise**: Minor obfuscation

---

## ICE & Network Defenses

### ICE Types

**Passive ICE** (Always Active):
- **Firewall**: Base defense rating
- **Encryption**: Must decrypt before accessing
- **Audit Log**: Tracks all access for investigation
- **Honeypot**: Fake system that traps intruders

**Active ICE** (Responds to Threats):
- **Trace**: Hunts hacker's real location (+1 Trace)
- **Scramble**: Attacks hacker's equipment (1d6 damage)
- **Lockout**: Reduces access permissions
- **Feedback**: Mental damage through neural interface

**Adaptive ICE** (Learning Systems):
- **Pattern Match**: +1 vs repeated tactics
- **Evolution**: Adapts to common attack methods
- **Countermeasure**: Deploys specific anti-hacker tools
- **Sentinel**: Alerts human operators

### ICE Combat
**ICE Initiative**: 15 (fast but predictable)
**ICE Actions**: Typically one per type per round

**Hacker Countermeasures**:
- **Kill Process**: Attack ICE directly
- **Viral Injection**: Turn ICE against itself
- **Spoofing**: Appear as legitimate user
- **ICE Breaker**: Specialized anti-ICE programs

---

## Equipment & Advancement

### Hacking Equipment

**Personal Device** (Information Era):
- Basic smartphone or tablet
- Hack Rating: +1
- Obvious when used for hacking
- -2 vs military/corporate systems

**Cyberdeck** (Fusion Era):
- Professional hacking platform
- Hack Rating: +3
- Multiple connection types
- Built-in ICE protection

**Neural Interface** (Stellar Era):
- Direct brain-computer link
- Hack Rating: +5
- Thought-speed operation
- Risk of feedback damage

**Quantum Array** (Cosmic Era):
- Reality-level computation
- Hack Rating: +7
- Can hack quantum-encrypted systems
- Requires massive power supply

### Hacking Specializations

**Tech Specialist - Hacker Tree**:
- **Basic: Script Kiddie**: +2 vs basic security, automated tools
- **Advanced: Code Warrior**: Write custom viruses, +1 damage to ICE
- **Master: Ghost Protocol**: Leave no traces, immune to most Trace

**Tech Specialist - Netrunner Tree**:
- **Basic: Neural Jack**: Direct interface, +1 to all hacking
- **Advanced: Digital Native**: Exist in networks, +2 vs ICE
- **Master: Transcendence**: Upload consciousness, become living program

---

## Parallel Combat Integration

### Hacking During Ship Combat
While ship combat proceeds, hacker contributes:

**Ship System Targets**:
- **Sensors**: Blind enemy, feed false data
- **Weapons**: Misfire, target wrong ships
- **Shields**: Lower specific facings
- **Navigation**: Alter course, disable autopilot
- **Communications**: Break coordination

**Supporting Allies**:
- **Signal Boost**: +1 to ally electronic actions
- **Counter-Hack**: Defend against enemy hackers
- **Data Mining**: Learn enemy ship capabilities
- **Network Relay**: Improve team coordination

### Hacking During Personal Combat
While team fights, hacker manipulates environment:

**Environmental Control**:
- **Lights**: Blind enemies, create darkness
- **Doors**: Lock/unlock, trap enemies
- **Security**: Turn cameras, disable alarms
- **Elevators**: Control movement, trap floors

**Combat Support**:
- **Drone Control**: Take over security drones
- **Weapon Systems**: Disable enemy gear
- **Medical**: Access health scanners
- **Communications**: Jam enemy coordination

---

## Advanced Techniques

### Group Hacking
Multiple hackers can coordinate:

**Tag Team Hacking**:
- +1 per additional hacker (max +3)
- Each hacker attempts different aspect
- Share Heat burden across team

**Parallel Processing**:
- Each hacker targets different systems
- Coordinate timing for maximum effect
- Overwhelm defenses with multiple vectors

**Specialist Roles**:
- **Point**: Primary intrusion specialist
- **Overwatch**: Monitor for ICE and trace
- **Support**: Maintain daemons and connections
- **Cleaner**: Remove traces after operation

### Long-Range Hacking
**Network Topology**: Follow connection chains
- Personal → Corporate → Government
- Ship → Fleet → Command network
- Terminal → Station → Planetary grid

**Relay Attacks**: Bounce through multiple systems
- Harder to trace back to source
- Each relay adds +1 TN
- Broken chain alerts all systems

### Persistent Access
**Backdoors**: Hidden access for later use
- Requires Root access to install
- Survive system reboots and updates
- Can be triggered remotely

**Sleeper Programs**: Dormant code awaiting activation
- No ongoing Heat generation
- Activates on specific triggers
- Can provide instant access later

---

## GM Guidelines

### Determining TNs
**Base TN by Scale**:
- Personal: 8 + Tech Era + Security Level
- Vehicle: 11 + Tech Era + Security Level  
- Starship: 14 + Tech Era + Security Level
- Capital: 17 + Tech Era + Security Level

**Security Levels**:
- Civilian: +0 to +2
- Corporate: +2 to +4
- Military: +4 to +6
- Black Ops: +6 to +8

### Managing Heat and Trace
**Heat Generation Guidelines**:
- Simple access: 1 Heat
- System control: 2-3 Heat
- Critical systems: 4-5 Heat
- Failed attempts: +1 Heat

**Trace Triggers**:
- Critical failure: +1 Trace
- Attacking ICE: +1 Trace
- Staying too long: +1/hour
- High Heat: +1 at Heat 15+

### Pacing Hacking Scenes
**Quick Hacks**: Single roll resolution
**Standard Hacks**: 3-5 rolls over scene
**Complex Infiltration**: Extended challenge

**Maintain Tension**:
- Time pressure from parallel action
- Rising Heat threatens discovery
- ICE countermeasures escalate
- Real-world consequences loom

---

## Quick Reference

### Common TNs by Scale
| Target | Personal | Vehicle | Starship | Capital |
|--------|----------|---------|----------|---------|
| Basic System | 11 | 14 | 17 | 20 |
| Secure System | 14 | 17 | 20 | 23 |
| Military System | 17 | 20 | 23 | 26 |

### Heat Effects
- **5+**: +1 ICE Defense
- **10+**: +2 ICE Defense, alerts
- **15+**: ICE attacks, +1 Trace
- **20+**: Maximum security response

### Action Summary
- **Standard**: Intrusion, Control, Mining, Code Injection
- **Move**: Analysis, Daemon, Trace Route
- **Quick**: Status, Boost, Clear, Spoof
- **Free**: Monitor, Stream, Noise

---

## Example Scenarios

### Corporate Heist
**Goal**: Steal financial records
**Network**: Corporate intranet (Secure → Admin)
**Parallel Action**: Physical infiltration team
**Challenge**: Time limit before discovery

### Ship Boarding
**Goal**: Disable enemy defenses
**Network**: Military cruiser (Admin → Core)
**Parallel Action**: Boarding party combat
**Challenge**: Military ICE, redundant systems

### Station Liberation
**Goal**: Control docking and defense
**Network**: Space station (Capital scale)
**Parallel Action**: Multiple assault teams
**Challenge**: Multiple human operators, adaptive ICE

The hacking system provides meaningful digital warfare that enhances rather than replaces physical action, allowing specialist characters to reshape encounters through technological superiority.

---

## Version History

- **v4.1.0** (2025-01-25): Created comprehensive hacking system