# Combat Skill - Complete Branching Example

## Visual Tree Structure

```
                                    COMBAT (Rank 1)
                                "Basic Combat Training"
                                         |
                    ┌────────────────────┴────────────────────┐
                    |                                         |
            MELEE COMBAT (R2)                         RANGED COMBAT (R2)
           "Close & Personal"                        "Death from Afar"
                    |                                         |
                    |                                         |
         [Ranks 3-5 Development]                   [Ranks 3-5 Development]
            Vehicle Scale                             Vehicle Scale
                    |                                         |
        ┌───────────┴───────────┐                 ┌───────────┴───────────┐
        |                       |                 |                       |
   DUELIST (R6)            BRAWLER (R6)      SNIPER (R6)         GUNSLINGER (R6)
  "Blade Artist"         "Unstoppable"      "One Shot"          "Bullet Storm"
        |                       |                 |                       |
        |                       |                 |                       |
 [Ranks 7-10 Development]  [Ranks 7-10]     [Ranks 7-10]        [Ranks 7-10]
   Starship → Fleet         Starship → Fleet  Starship → Fleet   Starship → Fleet
        |                       |                 |                       |
   BLADE SAINT           UNSTOPPABLE FORCE    GOD'S EYE         STORM OF LEAD
   "Legendary"              "Legendary"        "Legendary"         "Legendary"

                            UNIVERSAL COMBAT (R2-10)
                           "Jack of All Trades"
                                    |
                            WEAPON MASTER
                              "Legendary"
```

## Detailed Progression

### Base Skill: COMBAT (Rank 1)
- **Scale**: Personal
- **Abilities**: Basic attack, basic defense, weapon familiarity
- **Description**: Every character can fight, but not everyone is a warrior

### Branch Point at Rank 2

#### Path A: MELEE COMBAT (Ranks 2-5)
- **Rank 2** (Personal): Blade Training - +2 damage with melee weapons
- **Rank 3** (Vehicle): Mech Blade Systems - Pilot melee-equipped vehicles
- **Rank 4** (Vehicle): Boarding Specialist - Expert at ship-to-ship assault
- **Rank 5** (Vehicle): Elite Shock Trooper - Lead boarding teams

#### Path B: RANGED COMBAT (Ranks 2-5)
- **Rank 2** (Personal): Marksman - +2 accuracy at range
- **Rank 3** (Vehicle): Vehicle Gunner - Operate mounted weapons
- **Rank 4** (Vehicle): Artillery Expert - Indirect fire specialist
- **Rank 5** (Vehicle): Suppression Specialist - Area denial tactics

### Second Branch Point at Rank 6

#### From MELEE Path:

**DUELIST (Ranks 6-10)**
- **Rank 6** (Starship): Zero-G Swordmaster - Fight in any environment
- **Rank 7** (Starship): Defensive Perfection - Negate multiple attacks
- **Rank 8** (Starship): Blade Barrier - Protect entire corridors
- **Rank 9** (Fleet): Boarding Fleet Marshal - Coordinate thousands
- **Rank 10** (Fleet): **BLADE SAINT** - Your blade can cut starships

**BRAWLER (Ranks 6-10)**
- **Rank 6** (Starship): Titan Armor Pilot - Wear capital-grade armor
- **Rank 7** (Starship): Hull Breacher - Punch through anything
- **Rank 8** (Starship): Rampage Mode - Unstoppable for 1 scene
- **Rank 9** (Fleet): Assault Commander - Lead army groups
- **Rank 10** (Fleet): **UNSTOPPABLE FORCE** - Literally unkillable

#### From RANGED Path:

**SNIPER (Ranks 6-10)**
- **Rank 6** (Starship): Main Gun Operator - Fire capital weapons
- **Rank 7** (Starship): Predictive Targeting - Hit FTL targets
- **Rank 8** (Starship): Surgical Strike - Disable specific systems
- **Rank 9** (Fleet): Fleet Target Coordinator - Mark for entire fleet
- **Rank 10** (Fleet): **GOD'S EYE** - See and shoot across star systems

**GUNSLINGER (Ranks 6-10)**
- **Rank 6** (Starship): Point Defense Master - Never miss intercepting
- **Rank 7** (Starship): Weapon Array Control - Fire all guns at once
- **Rank 8** (Starship): Overlapping Fields - Create kill zones
- **Rank 9** (Fleet): Defense Grid Commander - Protect whole fleets
- **Rank 10** (Fleet): **STORM OF LEAD** - Unlimited rate of fire

### Universal Path: COMBAT GENERALIST (Ranks 2-10)
For those who don't specialize at Rank 2:
- **Ranks 2-5**: Balanced combat development, all scales
- **Ranks 6-8**: Advanced tactical flexibility
- **Ranks 9-10**: Master of all combat forms
- **Rank 10**: **WEAPON MASTER** - Equal skill with everything

## Key Design Elements

1. **Meaningful Choice at Rank 2**: This early decision shapes your entire combat career
2. **Scale Progression**: Natural evolution from personal to fleet command
3. **Five Endgames**: Each combat style has a legendary capstone
4. **No Going Back**: Once you choose, you're committed to that path
5. **Universal Option**: Flexibility for those who want it, but missing specialized power

## Skill Point Costs

### Standard Progression
- Rank 1→2: 2 AP (choosing your path)
- Rank 2→3: 3 AP
- Rank 3→4: 4 AP
- Rank 4→5: 5 AP
- Rank 5→6: 8 AP (major commitment)
- Rank 6→7: 10 AP
- Rank 7→8: 12 AP
- Rank 8→9: 15 AP
- Rank 9→10: 20 AP

**Total to Grandmaster**: 79 AP (significant investment)

### Universal Path
- Costs +20% more AP at each rank
- Flexibility has a price
- Total to Weapon Master: ~95 AP