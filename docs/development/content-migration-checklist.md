# Content Migration Checklist - Second Edition

## Existing Chapters Status

### Updated with Tag System (Ready for Migration)
- [x] Chapter 2: Core Mechanics - **UPDATED** with tag integration
- [x] Chapter 3: Character Creation - **UPDATED** with tag selection (Step 5)
- [x] Chapter 4: Character Advancement - **COMPLETE OVERHAUL** with 10-rank/7-tier system
- [x] Chapter 5: Actions and Skills - **Needs full rewrite** (only have framework)
- [x] Chapter 11: Running Cosmos Engine - **UPDATED** with comprehensive tag GM guidance

### Original Chapters (Need Tag Integration)
- [ ] Chapter 1: Welcome to Cosmos Engine
- [ ] Chapter 6: Personal Combat
- [ ] Chapter 7: Equipment and Gear  
- [ ] Chapter 8: Vehicles and Chases
- [ ] Chapter 9: Starships and Space Travel
- [ ] Chapter 10: Electronic Warfare and Hacking
- [ ] Chapter 12: Creating Adventures
- [ ] Chapter 13: Campaign Building
- [ ] Chapter 14: Mass Combat
- [ ] Chapter 15: Organizations and Factions
- [ ] Chapter 16: Advanced Options

### Content Categories

#### Ready to Migrate (Tag-Updated)
1. **Core Mechanics** (Ch 2)
   - Basic dice resolution ✓
   - Tag bonuses integrated ✓
   - Synergy mechanics ✓

2. **Character Creation** (Ch 3)
   - 10 species ✓
   - 15-skill system ✓
   - Tag selection process ✓
   - Example with tags ✓

3. **Character Advancement** (Ch 4)
   - 10-rank progression ✓
   - Fibonacci costs ✓
   - Tag evolution ✓

4. **GM Guidance** (Ch 11)
   - Tag adjudication ✓
   - NPC tags ✓
   - Campaign integration ✓

#### Needs Major Revision
1. **Skills Chapter** (Ch 5)
   - Has list of 15 skills
   - Missing detailed progressions
   - Missing tag options per rank
   - Missing scale integration examples

2. **Combat** (Ch 6)
   - Needs tag combat options
   - Balanced system integration
   - Tag-based maneuvers

3. **Equipment** (Ch 7)
   - Tag synergies with gear
   - Tech level integration
   - Enhanced equipment options

#### Needs Minor Updates
- Chapters 8-10, 12-16: Add tag examples and integration points

### New Content Needed

#### For Second Edition Structure
1. **Quick Start Chapter** (New Ch 2)
   - 60-second character creation
   - Archetype templates with tags
   - Tutorial encounter

2. **Galaxy Overview** (New Ch 3)
   - Setting primer
   - Major factions
   - Technology overview

3. **Skill Details** (Complete Ch 5)
   - Full progression tables
   - 4 tags per rank (7 ranks = 28 tags per skill)
   - Scale examples
   - Synergy combinations

4. **Advanced Options** (New Ch 15-17)
   - Mass combat (move from Ch 14)
   - Cosmic horror rules
   - Variant systems

### Migration Priority

#### Phase 1: Core Player Content
1. Migrate updated character creation (Ch 3)
2. Migrate advancement (Ch 4)
3. Migrate core mechanics (Ch 2)
4. **Complete Skills chapter (Ch 5)**

#### Phase 2: Play Systems  
1. Update combat with tags (Ch 6)
2. Update equipment (Ch 7)
3. Update vehicles/starships (Ch 8-9)

#### Phase 3: GM Content
1. Migrate updated GM guidance (Ch 11)
2. Update adventure creation (Ch 12)
3. Update campaign building (Ch 13)

#### Phase 4: Advanced/Optional
1. Reorganize mass combat
2. Create cosmic horror rules
3. Develop alternate systems

### File Organization

Current:
```
/docs/chapters/
├── chapter-01-welcome.md
├── chapter-02-core-mechanics.md (UPDATED)
├── chapter-02-backup.md
├── chapter-03-character-creation.md (UPDATED)
├── chapter-03-backup.md
├── chapter-04-character-advancement.md (UPDATED)
├── chapter-04-backup.md
├── chapter-05-actions-and-skills.md (NEEDS REWRITE)
├── chapter-06-personal-combat.md
├── chapter-07-equipment-and-gear.md
├── chapter-08-vehicles-and-chases.md
├── chapter-09-starships-and-space-travel.md
├── chapter-10-electronic-warfare-and-hacking.md
├── chapter-11-running-cosmos-engine.md (UPDATED)
├── chapter-11-backup.md
├── chapter-12-creating-adventures.md
├── chapter-13-campaign-building.md
├── chapter-14-mass-combat.md
├── chapter-15-organizations-and-factions.md
├── chapter-16-advanced-options.md
```

### Critical Missing Content

1. **Complete Skill Progressions** (Ch 5)
   - Need full 10-rank progressions for all 15 skills
   - 4 tag options per rank
   - Scale integration examples

2. **Tag Quick Reference**
   - Alphabetical tag list
   - Synergy compatibility matrix
   - Common combinations

3. **Character Archetypes**
   - Pre-built characters with tags
   - Quick-start options
   - Build examples

### Recommendation

Given the scope of changes, I recommend:

1. **Create Second Edition structure** in `/docs/second-edition/`
2. **Preserve current version** in `/docs/first-edition/`
3. **Migrate updated content** to new structure
4. **Complete missing content** (especially Skills)
5. **Update remaining chapters** with tag integration

This approach:
- Maintains version history
- Allows parallel development
- Enables clean organization
- Supports modern RPG structure