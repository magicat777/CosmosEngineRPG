# Skill System Design Options for Cosmos Engine

## The Challenge
- Want: Deep skill trees for optimizer engagement
- Need: Printable format that doesn't sprawl across 50+ pages
- Goal: Elegant presentation that supports both novices and experts

## Option 1: Modular Skill Pages (Recommended)

### Structure
Each skill gets **one page** with:
- Basic skill description
- PRIMAC attribute pairings
- 5-10 specialization options (not a tree, but a menu)
- Mastery bonus at 25/50/75 AP invested

### Example Page Layout
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMBAT SKILL                          [ICON]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Primary: Coordination (ranged) / Might (melee)
Secondary: Intellect (tactics) / Awareness (defense)

BASIC USE: Add skill rank to combat rolls
SCALES: Personal → Capital (commanding fleets)

SPECIALIZATIONS (Choose any, 10 AP each):
□ Marksman: +1 die when aiming (take extra time)
□ Dual Wield: Use two weapons without penalty  
□ Heavy Weapons: Use Might for all combat rolls
□ Sniper: Ignore 2 range increments
□ Suppression Expert: Area attacks cost less ammo

ADVANCED (Requires 25+ AP in Combat):
□ Tactical Genius: Grant allies +1 to hit
□ Killing Machine: Critical on 19-20
□ Untouchable: +2 Defense when moving

MASTERY BONUSES:
• 25 AP: +1 to all combat rolls
• 50 AP: Choose signature weapon (+2 with it)
• 75 AP: Once per scene, turn miss into hit
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Print Advantages
- 20-30 skills = 20-30 pages (manageable)
- Each page is self-contained
- Easy to reference during play
- Can print only what you need

---

## Option 2: Tag-Based Synergy System

### Structure
Skills have **tags** that create emergent complexity:
- Each specialization adds tags
- Tags interact across skills
- Combos discovered through play

### Example
```
PILOT SKILL
Basic: Add to vehicle operation
Tags Available:
- [Ace]: Reroll 1s on pilot checks
- [Daredevil]: +2 when attempting dangerous maneuvers
- [Formation]: Coordinate multiple vehicles

COMBAT SKILL  
Basic: Add to attack rolls
Tags Available:
- [Ace]: +1 damage with vehicle weapons
- [Precise]: Ignore cover penalties
- [Suppression]: Pin enemies

SYNERGY: [Ace] + [Ace] = "Ace Gunner" (vehicle combat mastery)
```

### Print Advantages
- Core rules: 5-10 pages
- Skill list: 10 pages  
- Tag combinations: 2-3 pages
- Total: ~20 pages

---

## Option 3: Pyramid Progression

### Structure
Instead of trees, use pyramids:
- Must have 2 Basic before taking 1 Advanced
- Must have 2 Advanced before taking 1 Master
- Must have 2 Master before taking 1 Grandmaster

### Visual Example
```
                 [GRANDMASTER]
              [MASTER] [MASTER]
      [ADVANCED] [ADVANCED] [ADVANCED]
[BASIC] [BASIC] [BASIC] [BASIC] [BASIC]
```

### Implementation
Each skill has:
- 5-8 Basic options (5 AP)
- 3-5 Advanced options (10 AP)
- 2-3 Master options (20 AP)
- 1 Grandmaster option (50 AP)

### Print Advantages
- Natural progression limits sprawl
- Can fit 2-3 skills per page
- Total: 10-15 pages for all skills

---

## Option 4: Career Framework + Wildcards

### Structure
- 6 Career Frameworks (matching your 6 skill trees)
- Each has a "spine" of 10 recommended purchases
- Plus "wildcard" slots for any skill

### Example Career Page
```
COMBAT SPECIALIST FRAMEWORK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CORE PATH (Follow for guaranteed build):
Level 1-5: Combat 3, Marksman, Tactical Awareness
Level 6-10: Combat 5, Heavy Weapons, Suppression
Level 11-15: Master Tactician, Killing Machine
Level 16-20: Legendary Warrior

WILDCARD SLOTS (Customize here):
Level 1-5: ■ ■ □ (2 slots, 20 AP)
Level 6-10: ■ ■ ■ (3 slots, 45 AP)
Level 11-15: ■ ■ ■ ■ (4 slots, 80 AP)
Level 16-20: ■ ■ ■ ■ ■ (5 slots, 125 AP)

SYNERGY SUGGESTIONS:
+ Pilot → Ace Gunner build
+ Leadership → Officer build
+ Tech → Cyber-warrior build
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Print Space Analysis

### Fantasy Flight Comparison
Force & Destiny: ~30 pages for Force powers alone
- Very visual but space-intensive
- Hard to see all options at once
- Beautiful but impractical for deep systems

### Cosmos Engine Estimates

**Option 1 (Modular)**: 30-40 pages
- Most comprehensive
- Easiest to use at table
- Best for PDF/digital

**Option 2 (Tags)**: 15-20 pages  
- Most elegant
- Highest emergent complexity
- Best for creative players

**Option 3 (Pyramid)**: 10-15 pages
- Most compact
- Natural progression
- Best for print

**Option 4 (Career)**: 12-18 pages
- Best of both worlds
- Guided + customization
- Best for new players

---

## Recommendation

**Primary**: Option 1 (Modular Skill Pages)
**Why**: 
- Matches your depth goals
- Each skill feels complete
- Optimizers can theory-craft
- Novices follow specialization paths
- Digital-friendly (hyperlinks between skills)

**Enhancement**: Add Option 2's tags
- Tags on specializations create hidden depth
- Doesn't add pages
- Rewards system mastery

**Result**: ~30-35 pages of skills that feel infinitely deep

Would you like me to prototype a few skills using this approach?