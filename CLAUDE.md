# CLAUDE.md - Cosmos Engine RPG Project Guide

This file provides guidance to Claude Code when working with the Cosmos Engine RPG project.

## Project Overview

Cosmos Engine RPG is a science fiction tabletop role-playing game system with the following key features:
- Scales from personal combat to galactic fleet operations
- Uses unified 2d10 + modifiers mechanics
- Emphasizes tactical choices over complex tracking
- Technology integration creates "sci-fi crunch"
- Specialization is rewarded over generalization

## Directory Structure

- `/docs/` - All game documentation organized by system
- `/tools/` - Digital tools for online/assisted play
- `/resources/` - Templates, references, and play aids
- `/playtesting/` - Testing data and feedback
- `/development/` - Work-in-progress mechanics

## Key Design Principles

1. **Complexity Budget**: Different systems target different complexity levels (2-6/10)
2. **Meaningful Choices**: Binary decisions over graduated tracking
3. **Cross-Scale Consistency**: Same mechanics at all scales
4. **Technology Integration**: Equipment and enhancements matter
5. **Specialization Focus**: Deep investment provides exponential benefits

## Development Guidelines

### When Working on Rules
- Always check existing mechanics in `/docs/core-rules/` first
- Use templates from `/resources/templates/`
- Include examples for every mechanic
- Validate probability math in `/development/calculations/`
- Document design decisions in `/docs/design-notes/`

### When Creating Tools
- Each tool gets its own directory under `/tools/`
- Include a README with setup instructions
- Use sample data from game documentation
- Consider both offline and online play scenarios
- Share common code in `/tools/shared/`

### Mathematical Constants
- Base roll: 2d10 (mean 11.0, std dev 2.87)
- Modifier caps: +8 maximum, -6 minimum
- Target numbers: 8 (Easy) to 20 (Legendary)
- Success rates: 85% (Easy) to 5% (Legendary) for competent characters

### Current Focus Areas
1. Attribute system definition (6 attributes, 0-5 range)
2. Social/exploration mechanics (2/10 complexity target)
3. Equipment catalogs by technology era
4. Digital tool development

## Testing Reminders

- All mechanics need probability validation
- Combat should resolve in reasonable time
- Character creation target: 30-45 minutes
- Rules should be learnable in one session

## Version Control

- Main branch is stable/playtest-ready
- Development branch for active work
- Feature branches for new systems
- Always update version history

## Common Tasks

### Adding a New Rule System
1. Create draft in `/development/mechanics-workshop/`
2. Validate math in `/development/calculations/`
3. Write formal rules using template
4. Add to appropriate `/docs/` subdirectory
5. Create reference sheet in `/resources/reference-sheets/`
6. Plan playtest scenarios

### Running a Playtest
1. Use session template from `/resources/templates/`
2. Focus on specific mechanics to test
3. Log results in `/playtesting/session-logs/`
4. Gather feedback using feedback templates
5. Update balance data if applicable
6. Create action items for improvements

### Creating Digital Tools
1. Set up tool directory structure
2. Create README with purpose and usage
3. Implement core functionality
4. Test with various game scenarios
5. Add error handling for edge cases
6. Document API if applicable

## Important Files

- `README_cosmosenginerpg_summary.md` - Complete system overview
- `docs/core-rules/system_summary.md` - Core mechanics reference
- `resources/templates/` - All document templates
- Development status tracked in main README.md