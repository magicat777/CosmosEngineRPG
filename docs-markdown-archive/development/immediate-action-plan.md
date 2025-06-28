# Immediate Action Plan - Cosmos Engine Second Edition

## Quick Decision Point

We need to decide between two approaches:

### Option A: Quick Migration
- Create `/docs/second-edition/` directory
- Move updated chapters immediately  
- Continue development in new structure
- **Time: 1-2 hours setup**

### Option B: Complete Chapter 5 First
- Finish the critical Skills chapter
- Then migrate everything together
- **Time: 1-2 days for skills, then migrate**

## Recommended: Option B + Gradual Migration

### Step 1: Set Up Directory Structure (30 minutes)
```bash
mkdir -p docs/second-edition/core-book/{part-1-welcome,part-2-characters,part-3-rules,part-4-cosmos,part-5-advanced,part-6-references}
mkdir -p docs/first-edition
mkdir -p docs/second-edition/{player-guide,gm-guide,quick-start,digital-tools}
```

### Step 2: Preserve Current Version (15 minutes)
```bash
# Copy current chapters to first-edition
cp docs/chapters/*.md docs/first-edition/
```

### Step 3: Complete Chapter 5 - Skills (Priority 1)
This is the most critical missing piece. Without complete skill progressions, the tag system isn't fully implemented.

**Chapter 5 Needs:**
- [ ] 15 complete skill progression tables (Ranks 1-10)
- [ ] 4 tag options per rank = 420 total tags
- [ ] Scale integration examples for each skill
- [ ] Cross-skill synergy examples
- [ ] Tag manifestation guidelines

### Step 4: Begin Migration (After Ch 5)
1. Start with updated chapters (2, 3, 4, 5, 11)
2. Reorganize into new structure
3. Update remaining chapters with tags
4. Create new content (quick start, etc.)

## Why This Order?

1. **Complete Core System First**: Skills are the heart of the tag system
2. **Clean Migration**: Move complete, working content
3. **Maintain Playability**: Current version remains intact
4. **Clear Progress**: Each migrated chapter is fully updated

## Directory Structure Ready to Create:

```
/docs/
├── /chapters/              (Current working files)
├── /first-edition/         (Preserved original)
└── /second-edition/        (New structure)
    ├── /core-book/
    │   ├── /part-1-welcome/
    │   │   ├── ch01-universe-awaits.md
    │   │   ├── ch02-character-60-seconds.md
    │   │   └── ch03-galaxy-explore.md
    │   ├── /part-2-characters/
    │   │   ├── ch04-building-character.md
    │   │   ├── ch05-skills-and-tags.md
    │   │   └── ch06-character-advancement.md
    │   └── ...
    └── /quick-reference/
        ├── all-tags-reference.md
        ├── skill-progression-tables.md
        └── rules-summary.md
```

## The Critical Question:

**Should we complete Chapter 5 (Skills) first, or set up the new structure and migrate what we have now?**

Given that skills are central to the tag system and affect all other chapters, I recommend completing Chapter 5 first, then doing a clean migration to the second edition structure.

## If You Choose "Complete Chapter 5 First":

I can immediately begin working on:
1. Full skill progression tables (all 15 skills, ranks 1-10)
2. Tag options for each rank (4 per rank)
3. Scale integration examples
4. Synergy documentation

This would give us a complete, working tag system before reorganization.

## If You Choose "Migrate Now":

I can:
1. Set up the directory structure
2. Move updated chapters to new locations
3. Create placeholder files for missing content
4. Begin updating remaining chapters in the new structure

What would you prefer?