# Hacking System Workshop

## Design Goals

1. **Complexity without overwhelming detail** - Elegant action economy
2. **Hybrid approach** - Best of Shadowrun flexibility + Cyberpunk architecture
3. **Character investment payoff** - Specialists can dominate networked environments
4. **Scale progression** - Personal → Vehicle → Starship → Capital networks
5. **Parallel combat** - Hacking runs alongside physical/ship combat
6. **Meaningful impact** - Disable systems, control robotics, ship infiltration

## Core Concepts

### Network Architecture
Instead of rigid "nodes," networks have **Zones** with flexible connections:

**Network Zones**:
- **Public Zone**: Open access (websites, public terminals)
- **Secure Zone**: Restricted access (employee systems, ship sensors)
- **Admin Zone**: High security (financial, weapons control)
- **Core Zone**: Maximum security (life support, reactor control)
- **Black Zone**: Off-limits (AI cores, classified systems)

### Access Levels
Your current permission level determines what you can do:
- **Guest**: Basic functions only
- **User**: Standard operations
- **Admin**: System control
- **Root**: Complete access
- **God Mode**: Unrestricted (dangerous!)

### Heat vs Trace
Two parallel threat tracks:
- **Heat**: System stress from your actions
- **Trace**: Security hunting you specifically

---

## Hacking Fundamentals

### Core Stats
**Hack Rating**: Intellect + Tech + Cyberdeck/Software
**ICE Defense**: 10 + System Rating + Active Defenses

### Basic Resolution
```
2d10 + Hack Rating vs ICE Defense or System TN
```

### Action Economy
**Hack Turn = 6 seconds** (same as combat)
- **1 Standard Action**: Major hack attempt
- **1 Move Action**: Navigate, analyze, prepare
- **Multiple Quick Actions**: Minor operations
- **Free Actions**: Passive monitoring

### Parallel Processing
Hackers can maintain multiple operations:
- **Primary Process**: Main hack (full attention)
- **Background Daemons**: Automated routines (-2 effectiveness)
- **Passive Monitoring**: Watch for threats

---

## Network Navigation

### Zone Movement
Moving between network zones requires permissions:

**Open Movement**: 
- Public → Secure: User credentials
- Secure → Admin: Admin credentials
- Any → Any: Root access

**Forced Entry**:
- Hack check vs Zone's ICE Defense
- Success: Gain temporary access
- Failure: Generate Heat/Trace
- Critical Failure: Trigger active defenses

### Zone Mapping
**Network Analysis** (Move Action):
- Map connected zones
- Identify valuable targets
- Spot ICE signatures
- Estimate security levels

### Stealth Navigation
**Ghost Protocol** (ongoing):
- +3 to stealth, -2 to all other actions
- Leave minimal traces
- Slower but safer

---

## Hacking Actions

### Standard Actions

**Intrusion** (Attack):
- Gain access to higher zone
- vs ICE Defense + Zone modifier
- Success: Access for scene
- Generates Heat equal to zone level

**System Control**:
- Take over target system
- vs System TN (see scales below)
- Effect depends on system type
- Major Heat generation

**Code Injection**:
- Plant malicious software
- Delayed/triggered effects
- Requires Admin+ access
- Can persist after logout

**Data Mining**:
- Extract specific information
- vs Data Protection TN
- Quality of success = data detail
- Moderate Heat

### Move Actions

**Trace Route**:
- Follow network connections
- Find hidden systems
- Map security architecture

**Analyze ICE**:
- Study defensive programs
- Learn vulnerabilities
- +2 to next attack vs that ICE

**Deploy Daemon**:
- Launch background program
- Monitor, defend, or attack
- Runs independently with -2

**Crash Space**:
- Emergency disconnection
- Avoid trace/damage
- Lose all current access

### Quick Actions

**Status Check**: Monitor all processes
**Signal Boost**: +1 to next roll
**Cache Clear**: Remove 1 Heat
**Spoof ID**: Change apparent credentials

---

## Scale Integration

### Personal Scale Networks
**Devices**: Phones, terminals, basic security
- **TN Range**: 11-17
- **Typical ICE**: 12-15
- **Max Access**: Admin
- **Effects**: Door locks, cameras, personal data

**Examples**:
- Unlock smart lock: TN 11
- Hack security camera: TN 14
- Access personal files: TN 17

### Vehicle Scale Networks
**Systems**: Cars, boats, aircraft, mechs
- **TN Range**: 14-20
- **Typical ICE**: 15-18
- **Max Access**: Root
- **Effects**: Engine control, weapons, life support

**Examples**:
- Override autopilot: TN 14
- Disable weapons: TN 17
- Full vehicle control: TN 20

### Starship Scale Networks
**Ship Systems**: Fighters to cruisers
- **TN Range**: 17-23
- **Typical ICE**: 18-21
- **Max Access**: God Mode (dangerous!)
- **Effects**: Navigation, weapons, shields, life support

**Examples**:
- Jam sensors: TN 17
- Disable shields: TN 20
- Reactor shutdown: TN 23 (potentially fatal!)

### Capital Scale Networks
**Massive Systems**: Space stations, planetary networks
- **TN Range**: 20-26
- **Typical ICE**: 21-25
- **Max Access**: God Mode (extremely dangerous!)
- **Effects**: City infrastructure, orbital defenses, fleet control

**Examples**:
- Traffic control: TN 20
- Power grid: TN 23
- Planetary defense: TN 26

---

## ICE & Defenses

### Types of ICE (Intrusion Countermeasures Electronics)

**Passive ICE** (Always active):
- **Firewall**: Base defense rating
- **Encryption**: Requires decryption before access
- **Audit Trail**: Tracks all actions for later investigation
- **Honeypot**: False system that traps intruders

**Active ICE** (Responds to intrusion):
- **Trace**: Hunts for hacker's real location
- **Scramble**: Attacks hacker's equipment
- **Lockout**: Removes access permissions
- **Feedback**: Causes physical damage to hacker

**Adaptive ICE** (Learns and evolves):
- **Learning Algorithm**: Gets +1 vs repeated tactics
- **Pattern Recognition**: Spots known attack signatures
- **Countermeasure**: Deploys specific anti-hacker tools
- **Sentinel**: Calls for human intervention

### ICE Ratings by Era
| Era | Basic ICE | Military ICE | Cutting Edge |
|-----|-----------|--------------|--------------|
| Information | 12-15 | 16-18 | 19-20 |
| Fusion | 15-18 | 19-21 | 22-23 |
| Stellar | 18-21 | 22-24 | 25-26 |
| Cosmic | 21-24 | 25-27 | 28-30 |

---

## Heat & Trace Systems

### Heat (System Stress)
Represents how much you're disrupting the network:
- **Sources**: Failed hacks, major operations, time spent
- **Effects**: ICE gets stronger, triggers alerts
- **Range**: 0-20+
- **Cooling**: Automatic over time, or special actions

**Heat Thresholds**:
- **5**: Minor glitches, +1 to ICE
- **10**: System alerts, +2 to ICE
- **15**: Active response, ICE attacks
- **20**: Emergency protocols, maximum response

### Trace (Hunter Programs)
Represents security actively hunting you:
- **Sources**: Critical failures, staying too long, attacking ICE
- **Effects**: Real-world consequences if traced
- **Range**: 0-10
- **Persistence**: Doesn't cool down easily

**Trace Consequences**:
- **3**: Location narrowed to district
- **6**: Physical address identified
- **9**: Security dispatched
- **10**: Full tactical response

### Managing Threats

**Cool Down** (Standard Action):
- Reduce Heat by 1d3
- Requires stealth/deception
- Can't be used if Trace active

**Crash & Burn** (Quick Action):
- Emergency disconnection
- Clear all Heat/Trace
- Burn out equipment (degradation)
- Can't reconnect for scene

**False Flag** (Move Action):
- Redirect Trace to false target
- Deception + Tech vs Trace level
- Success: Reset Trace to 0

---

## Hacking Combat

### ICE Initiative
ICE acts on Initiative 15 (fast but predictable)
Can interrupt on successful countermeasure

### ICE Attacks
**Trace Program**:
- Increase Trace by 1
- Special: Can't be stopped, only misdirected

**Scramble Attack**:
- vs Hacker's Electronic Defense
- Success: 1d6 damage to equipment
- Critical: Temporary system shutdown

**Feedback Pulse**:
- vs Hacker's Mental Defense
- Success: 1d6 mental damage + stunned
- Represents neural feedback through interface

**Lockout Protocol**:
- Reduce hacker's access level
- Admin → User → Guest → Disconnected
- Can be restored with new intrusion

### Hacker Counters
**Kill Process** (Standard):
- Attack ICE directly
- vs ICE Defense
- Success: Disable ICE program

**Viral Injection** (Standard):
- Turn ICE against itself
- vs ICE + operator's skill
- Success: ICE helps you instead

**Spoofing** (Move):
- Fake credentials/signatures
- vs System's detection
- Success: Appear as legitimate user

---

## Advanced Hacking

### Specialization Integration

**Tech Specialist - Hacker Tree**:
- **Basic: Script Kiddie**: +2 vs basic security
- **Advanced: Code Warrior**: Can write custom viruses
- **Master: Ghost in the Machine**: Leave no traces

**Tech Specialist - Netrunner Tree**:
- **Basic: Jack In**: Direct neural interface
- **Advanced: Virtual Embodiment**: Exist primarily in networks
- **Master: Digital Transcendence**: Consciousness uploading

### Equipment Tiers

**Handheld Device** (Personal):
- Basic hacking capability
- -2 to all rolls vs military systems
- Easily concealed

**Cyberdeck** (Professional):
- Standard hacking platform
- No penalties
- Obvious when in use

**Server Farm** (Vehicle/Ship):
- Massive processing power
- +3 to all hacking rolls
- Requires installation

**Quantum Array** (Capital):
- Bleeding-edge technology
- +5 to rolls, ignore encryption
- Requires dedicated facility

### Group Hacking
Multiple hackers can coordinate:
- **Tag Team**: +1 per additional hacker
- **Parallel Processing**: Multiple simultaneous targets
- **ICE Swarm**: Overwhelm defenses with numbers
- **Specialist Roles**: Each hacker handles different aspects

---

## Parallel Combat Integration

### Shipboard Hacking
While ship combat rages, hacker can:

**Standard Actions**:
- **System Infiltration**: Hack enemy ship systems
- **Network Warfare**: Support allied EW operations
- **Drone Control**: Take over enemy drones/fighters
- **Intelligence Gathering**: Learn enemy capabilities

**Move Actions**:
- **Signal Boost**: +1 to allied electronic actions
- **Counterhack**: Defend against enemy hackers
- **System Monitoring**: Detect infiltration attempts

**Quick Actions**:
- **Firewall Boost**: +1 Electronic Defense
- **Priority Routing**: Improve ally communications
- **Data Burst**: Share tactical information

### Coordination with EW
Hackers and EW specialists synergize:
- **Combined Operations**: Hacker provides intel, EW provides jamming
- **Electronic Supremacy**: Control both information and transmission
- **System Takeover**: Hack first, then maintain control with EW

### Scaling Effects
**Personal Hack in Ship Combat**:
- Hack individual crew's equipment
- Access personal devices
- Limited ship impact

**Ship System Hack**:
- Major ship systems vulnerable
- Can disable shields, weapons, engines
- Requires overcoming military ICE

**Fleet Network Hack** (Epic level):
- Penetrate command networks
- Coordinate multiple ship attacks
- Potentially cripple entire fleets

---

## Example Hacking Scenarios

### Scenario 1: Corporate Infiltration
**Goal**: Steal financial data
**Network**: Corporate intranet (Secure → Admin zones)
**Challenges**: Active monitoring, time pressure
**Parallel Action**: Security approaching physical location

### Scenario 2: Ship Boarding
**Goal**: Disable ship defenses
**Network**: Military vessel (Admin → Core zones)
**Challenges**: Combat ICE, redundant systems
**Parallel Action**: Boarding party needs door access

### Scenario 3: Station Takeover
**Goal**: Control traffic/docking
**Network**: Space station (Capital scale)
**Challenges**: Multiple ICE types, human operators
**Parallel Action**: Physical assault on other sections

---

## Design Analysis

### Complexity Management
- **Zone system**: Simpler than rigid node maps
- **Two-threat system**: Heat vs Trace creates tension
- **Parallel processing**: Hackers stay engaged
- **Scale integration**: Consistent across all levels

### Character Investment Payoff
- **Specialization trees**: Clear advancement path
- **Equipment scaling**: Better gear = better results
- **Network dominance**: High-level hackers reshape encounters
- **Group coordination**: Team tactics matter

### Combat Integration
- **Same time scale**: Hacking turns = combat rounds
- **Meaningful impact**: Disabled systems affect combat
- **Risk/Reward**: Powerful hacks generate more Heat
- **Support role**: Hackers enable other specialists

### Avoiding Pitfalls
- **GM monopolization**: Clear rules prevent arbitrary difficulty
- **Action paralysis**: Limited options prevent analysis paralysis
- **Isolation**: Parallel systems keep hackers engaged
- **Power scaling**: High-level limits prevent god-mode

---

## Next Steps

1. **Detailed system lists** by scale
2. **ICE stat blocks** for common scenarios
3. **Hacking equipment** with specific capabilities
4. **Integration examples** with ship/personal combat
5. **Quick reference tables** for GMs

The foundation provides flexible, scalable hacking that rewards investment while maintaining engagement across all types of encounters.