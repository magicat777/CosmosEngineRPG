# Cosmos Engine RPG - Revised Skill System

## Core Concept
- All skills start at Rank 1 (no more Rank 0)
- Skills branch at Rank 2 and Rank 6, creating specialized paths
- Each skill category has 5 total grandmaster archetypes (instead of 4)
- Creates a prerequisite tree for deep specialization

## Skill Progression Structure

```
BASE SKILL (Rank 1)
│
├── RANK 2 BRANCH POINT → Two Specialization Paths
│   ├── Path A (Ranks 2-5) → Continues to...
│   │   └── RANK 6 BRANCH → Two Sub-specializations
│   │       ├── Path A1 (Ranks 6-10) → Grandmaster Archetype 1
│   │       └── Path A2 (Ranks 6-10) → Grandmaster Archetype 2
│   │
│   └── Path B (Ranks 2-5) → Continues to...
│       └── RANK 6 BRANCH → Two Sub-specializations
│           ├── Path B1 (Ranks 6-10) → Grandmaster Archetype 3
│           └── Path B2 (Ranks 6-10) → Grandmaster Archetype 4
│
└── UNIVERSAL PATH (Ranks 2-10) → Grandmaster Archetype 5
    (For those who don't specialize early)
```

## Scale Integration
- **Ranks 1-2**: Personal Scale abilities
- **Ranks 3-5**: Vehicle Scale abilities
- **Ranks 6-8**: Starship Scale abilities
- **Ranks 9-10**: Fleet Scale abilities

## Example: Combat Skill Tree Revision

### COMBAT (Rank 1)
Basic combat training - all characters can fight at personal scale

### Rank 2 Branch Point
Choose specialization:

**MELEE COMBAT** (Ranks 2-5)
- Rank 2: Close quarters specialist (Personal)
- Rank 3: Mech pilot melee combat (Vehicle)
- Rank 4: Boarding specialist (Vehicle)
- Rank 5: Elite assault trooper (Vehicle)

**RANGED COMBAT** (Ranks 2-5)
- Rank 2: Marksman training (Personal)
- Rank 3: Vehicle gunner (Vehicle)
- Rank 4: Artillery specialist (Vehicle)
- Rank 5: Precision targeting (Vehicle)

### Rank 6 Branch Points

From MELEE COMBAT:
- **DUELIST** (Ranks 6-10)
  - Rank 6: Legendary swordsman (Starship boarding)
  - Rank 7: Zero-G combat master (Starship)
  - Rank 8: Multi-opponent specialist (Starship scale)
  - Rank 9: Fleet boarding coordinator (Fleet)
  - Rank 10: **Grandmaster - Blade Saint** (Fleet)

- **BRAWLER** (Ranks 6-10)
  - Rank 6: Powered armor specialist (Starship)
  - Rank 7: Titan suit pilot (Starship)
  - Rank 8: Breach and clear expert (Starship)
  - Rank 9: Assault fleet commander (Fleet)
  - Rank 10: **Grandmaster - Unstoppable Force** (Fleet)

From RANGED COMBAT:
- **SNIPER** (Ranks 6-10)
  - Rank 6: Capital ship gunner (Starship)
  - Rank 7: Orbital bombardment specialist (Starship)
  - Rank 8: Long-range engagement expert (Starship)
  - Rank 9: Fleet fire coordinator (Fleet)
  - Rank 10: **Grandmaster - God's Eye** (Fleet)

- **GUNSLINGER** (Ranks 6-10)
  - Rank 6: Multi-weapon platform operator (Starship)
  - Rank 7: Point defense specialist (Starship)
  - Rank 8: Rapid response commander (Starship)
  - Rank 9: Fleet defense coordinator (Fleet)
  - Rank 10: **Grandmaster - Storm of Lead** (Fleet)

**UNIVERSAL COMBAT** (Ranks 2-10)
- For those who don't specialize at Rank 2
- Rank 10: **Grandmaster - Weapon Master** (All scales)

## Benefits of This System

1. **Early Choice Matters**: Specializing at Rank 2 opens specific paths
2. **Late Bloomers Welcome**: Universal path for flexible builds
3. **Deep Specialization**: Five distinct grandmaster outcomes per skill
4. **Clear Prerequisites**: Must follow the tree to reach higher abilities
5. **Scale Integration**: Natural progression through all four scales

## Skill Point Investment

### Specialization Costs
- Rank 1: Free with skill selection
- Ranks 2-5: Normal advancement cost
- Ranks 6-8: Increased cost (requires deep investment)
- Ranks 9-10: Premium cost (true masters only)

### Switching Paths
- Cannot switch after choosing at Rank 2
- Must develop new branch from scratch
- Encourages commitment to specialization

## Complete Skill List (Expanded)

With this system, each base skill expands to effectively 5 sub-skills:

### Combat
1. Combat → Melee → Duelist
2. Combat → Melee → Brawler
3. Combat → Ranged → Sniper
4. Combat → Ranged → Gunslinger
5. Combat → Universal → Weapon Master

### Pilot
1. Pilot → Ground → Racer
2. Pilot → Ground → Combat Driver
3. Pilot → Aerospace → Fighter Ace
4. Pilot → Aerospace → Capital Commander
5. Pilot → Universal → Master Pilot

### Tech
1. Tech → Hardware → Engineer
2. Tech → Hardware → Scientist
3. Tech → Software → Hacker
4. Tech → Software → AI Specialist
5. Tech → Universal → Technomancer

[Continue for all 14 base skills...]

## Implementation Notes

1. **Character Sheets**: Need to track which branch was chosen
2. **VTT Integration**: Visual tree showing locked/unlocked paths
3. **Advancement**: Can only advance along chosen path
4. **Prerequisites**: Must have required rank to access abilities
5. **Retroactive Choices**: No changing early specialization decisions