# Cosmos Engine Skill System - Technical Development Guide

## System Architecture Overview

The Cosmos Engine skill system represents a hybrid approach between traditional skill trees and modern narrative mechanics, designed to maximize depth while minimizing page count and complexity overhead.

### Core Design Principles

1. **Modular Independence**: Each skill exists as a self-contained module
2. **Emergent Complexity**: Simple components combine for complex outcomes
3. **Discovery-Based Mastery**: Players uncover synergies through play
4. **Print-Efficient Depth**: Maximum options in minimum space
5. **Scale Agnostic**: Same skills work Personal through Capital

## Component Analysis

### 1. Base Skill Framework

#### Structure
Each skill contains:
- **Name & Thematic Statement**: One-line flavor
- **Primary/Secondary Attributes**: 2-4 PRIMAC options
- **Basic Use**: Core application across scales
- **Specializations**: 10-15 purchasable options
- **Mastery Bonuses**: Automatic rewards at AP thresholds

#### Mathematical Model
```
Total Skill Options = Base Use + Specializations + Mastery Bonuses + Tag Synergies
Example (Combat): 1 + 12 + 5 + ~50 synergies = 68+ unique configurations
```

#### Design Rationale
Traditional trees create prerequisite chains that:
- Lock players into paths
- Create "trap" choices
- Require extensive documentation
- Limit experimentation

Our modular approach:
- Any specialization available with AP investment
- No prerequisites within tiers
- Natural progression through cost scaling
- Encourages experimentation

### 2. Advancement Point (AP) Economy

#### Tier Structure
```
Basic Tier:       10 AP per specialization
Advanced Tier:    20 AP per specialization (requires 25+ AP in skill)
Master Tier:      40 AP per specialization (requires 50+ AP in skill)
Grandmaster:      100 AP (requires 100+ AP in skill)
```

#### Investment Breakpoints
- **25 AP**: Unlock advanced options + first mastery bonus
- **50 AP**: Unlock master options + second mastery bonus
- **75 AP**: Third mastery bonus
- **100 AP**: Grandmaster technique + fourth mastery bonus
- **150 AP**: Final mastery bonus

#### Economic Balance
A character pursuing deep specialization:
- Level 1-5 (50 AP): Can max one skill's basic tier
- Level 6-10 (125 AP): Can reach master tier in primary skill
- Level 11-15 (225 AP): Can achieve grandmaster in one skill
- Level 16-20 (350 AP): Can grandmaster one, master another

### 3. Tag System Architecture

#### Tag Categories

**Action Tags** (How you approach tasks):
- Describe method: [Precise], [Brutal], [Subtle], [Reckless]
- Modify success consequences
- Create personality through mechanics

**Style Tags** (Your methodology):
- Describe approach: [Tactical], [Intuitive], [Technical], [Creative]
- Affect problem-solving options
- Enable alternative solutions

**Domain Tags** (Where you excel):
- Describe expertise: [Digital], [Mechanical], [Social], [Enhancement]
- Open unique interaction options
- Gate certain advanced techniques

**Power Tags** (Earned through mastery):
- Describe excellence: [Ace], [Leadership], [Lethal], [Transcendent]
- Provide multiplicative benefits
- Mark character growth milestones

#### Synergy Mathematics

**Single Tag Benefits**:
- Narrative permissions (do things others can't)
- Situational bonuses (+1 when applicable)
- Unique interaction options

**Double Tag Synergies**:
```
If Tag A appears 2+ times across all specializations:
- Gain "Greater [Tag]" benefits
- Unlock tag-specific techniques
- Numerical bonuses increase to +2
```

**Cross-Tag Combinations**:
```
If Tag A + Tag B appear together:
- Check synergy matrix for combo effects
- GM adjudicates novel combinations
- Players document discovered synergies
```

**Mathematical Explosion**:
- 30 total tags
- Average 3 tags per character build
- Possible combinations: 30C3 = 4,060 unique triple-tag sets
- With order mattering for some: exponentially more

### 4. Specialization Design Patterns

#### Basic Tier Patterns
Each basic specialization:
- Costs 10 AP (accessible immediately)
- Provides one clear mechanical benefit
- Grants 1 tag
- Works at all scales

Example Template:
```
□ SPECIALIZATION NAME (10 AP) [Tag]
  One sentence of mechanical benefit.
  One sentence of clarification or scope.
```

#### Advanced Tier Patterns
Each advanced specialization:
- Costs 20 AP (requires investment)
- Provides two related benefits OR one powerful benefit
- Grants 2 tags (enabling synergies)
- May modify basic specializations

Example Template:
```
□ ADVANCED NAME (20 AP) [Tag1] [Tag2]
  Primary mechanical benefit with numerical bonus.
  Secondary benefit or condition that enhances primary.
```

#### Master Tier Patterns
Each master specialization:
- Costs 40 AP (significant investment)
- Provides paradigm-shifting ability
- Grants 1-2 tags (often including power tags)
- Fundamentally changes skill use

#### Grandmaster Patterns
The grandmaster technique:
- Costs 100 AP (primary focus character)
- Provides scene-defining ability
- Grants 2 power tags
- Represents pinnacle of skill mastery

### 5. Mastery Bonus Progression

#### Design Philosophy
Mastery bonuses reward deep investment without requiring specific builds:
- Automatic at AP thresholds
- Stack with all specializations
- Provide universal benefits
- Scale numerically

#### Standard Progression
```
25 AP:  +1 to all skill rolls
50 AP:  Signature element (weapon/vehicle/technique)
75 AP:  Resource recovery (reroll/refresh/restore)
100 AP: Reality break (auto-success option)
150 AP: Legendary status (reputation effects)
```

#### Balancing Considerations
- Linear numerical scaling (+1 per tier)
- Exponential narrative scaling (reputation/influence)
- Resource mechanics prevent abuse
- "Once per scene" limitations on powerful effects

### 6. Career Path Architecture

#### Purpose
Career paths serve as:
- New player guidance
- Optimization templates
- Thematic packages
- Quick-build options

#### Structure
Each career path includes:
- Thematic name and concept
- Recommended attributes
- 50 AP basic build
- 125 AP advanced build
- 225 AP master build
- Synergy highlights

#### Design Principles
- Follow single skill to mastery
- Branch into 1-2 supporting skills
- Highlight 2-3 key synergies
- Remain viable at all levels

### 7. Scale Integration

#### Universal Application
Every skill operates across all four scales:
- Personal (individual actions)
- Vehicle (crew coordination)
- Starship (department management)
- Capital (fleet/army command)

#### Mechanical Consistency
Same roll at all scales:
```
2d10 + Attribute + Skill + Equipment + Situation vs TN
```

#### Narrative Scaling
What changes is interpretation:
- Personal Combat: Firing a rifle
- Vehicle Combat: Coordinating tank guns
- Starship Combat: Managing weapon batteries
- Capital Combat: Directing fleet bombardments

### 8. Page Layout Optimization

#### Information Hierarchy
1. Skill name (immediate recognition)
2. Attribute associations (build planning)
3. Basic use (core understanding)
4. Specializations by tier (advancement options)
5. Mastery bonuses (long-term goals)
6. Tag synergies (discovery space)

#### Visual Design Principles
- Clear tier separation (visual breaks)
- Consistent tag formatting [Brackets]
- Checkbox squares for tracking □
- Cost clarity (AP in consistent position)
- White space for readability

#### Print Efficiency Metrics
- 300-400 words per skill page
- 10-15 specializations per skill
- 5-8 synergy examples per skill
- 35 total pages for complete system
- 68% space efficiency vs traditional trees

## Implementation Guidelines

### For Game Designers

#### When Adding New Skills
1. Define core use across all scales
2. Create 10-15 specializations following tier patterns
3. Assign tags that enable cross-skill synergies
4. Write mastery bonuses that feel impactful
5. Test career path viability

#### When Adding Specializations
1. Ensure it provides unique mechanical benefit
2. Assign appropriate tags for its tier
3. Check for unintended synergy breaks
4. Price according to power level
5. Write clear, concise description

#### Tag Creation Guidelines
- Use single, evocative words
- Ensure broad applicability
- Avoid overlapping meanings
- Create clear opposites when appropriate
- Limit total tags to ~30

### For GMs

#### Adjudicating Synergies
When players discover new combinations:
1. Does it make narrative sense?
2. Is the power level appropriate?
3. Would it enhance fun?
4. Is it replicable by others?

If yes to all: Document and allow

#### Scaling Challenges
- Personal: Individual skill checks
- Vehicle: Add crew quality modifiers
- Starship: Add department efficiency
- Capital: Add organizational modifiers

#### Power Level Management
- Basic tier: Competent professionals
- Advanced tier: Exceptional specialists
- Master tier: Legendary figures
- Grandmaster: Setting-defining heroes

### For Players

#### Build Strategies

**Specialist Build** (Recommended):
- 150+ AP in primary skill
- 50-75 AP in secondary skill
- 25 AP in tertiary skill
- Deep tag synergies

**Generalist Build** (Challenging):
- 50-75 AP in 3-4 skills
- Fewer synergies
- More versatile
- Less powerful peak

**Hybrid Build** (Optimal):
- 100 AP in primary
- 75 AP in secondary  
- 50 AP in tertiary
- Balanced power/versatility

#### Discovery Documentation
Players should maintain:
- List of purchased specializations
- Active tags across all skills
- Discovered synergies
- Planned advancement path

## System Metrics

### Complexity Analysis
- Core mechanic: 2/10 (roll + skill)
- Specialization choice: 4/10 (multiple options)
- Tag synergies: 6/10 (emergent complexity)
- Overall system: 4/10 (matches target)

### Depth Metrics
- Total specializations: ~150-200
- Unique tags: ~30
- Possible synergies: 1000+
- Build variations: Effectively infinite

### Page Efficiency
- Traditional tree system: 100+ pages
- Cosmos Engine system: 35 pages
- Efficiency gain: 65% reduction
- Depth retained: 100%+

## Future Expansion Considerations

### Digital Enhancements
- Tag search functionality
- Synergy calculator
- Build planner
- Discovery journal

### Supplemental Products
- Expanded specialization packs
- New tag categories
- Advanced synergy matrices
- Career path compendiums

### System Evolution
- Monitor discovered synergies
- Collect player feedback
- Refine tag interactions
- Balance through play

## Conclusion

The Cosmos Engine skill system achieves its design goals through:
- Modular architecture enabling mix-and-match builds
- Tag system creating emergent complexity
- Print-efficient layout maximizing content density
- Discovery-based gameplay rewarding experimentation
- Mathematical depth supporting optimizer engagement

This creates a system that is simultaneously accessible to newcomers following career paths and endlessly deep for players who enjoy mechanical exploration, all within a remarkably compact page count.

---

## Version History
- **v1.0.0** (2025-01-24): Initial technical guide