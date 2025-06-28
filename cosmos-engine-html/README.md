# Cosmos Engine RPG - Second Edition HTML Rulebook

This directory contains the complete HTML version of the Cosmos Engine RPG Second Edition Core Rulebook, designed for deployment via GitHub Pages.

## Overview

This is the full Second Edition rulebook featuring the Universal Tag System, streamlined chapters based on copy editor feedback, and interactive skill trees for all 18 core skills.

## Key Features

### ✅ Corrected Skill Progression
- **7-Rank System**: Skills now have exactly 7 ranks at levels 1, 2, 3, 4, 6, 8, 10
- **4 Mastery Tiers**: Basic (1) → Journeyman (2-3) → Master (4-6) → Grandmaster (7-10)
- **Consistent Scaling**: Personal → Vehicle → Starship → Fleet

### ✅ Expanded Skill Set
- **18 Core Skills**: Added Performance, Craft, and Commerce skills
- **95%+ Archetype Coverage**: Supports all major sci-fi character concepts
- **Gap Analysis Complete**: No more missing archetypes like galactic pop stars or master crafters

### ✅ Universal Tag System Integration
- **4 Tags per Rank**: Each skill rank offers 4 thematic tag choices
- **Synergy Mechanics**: Tags combine for bonus dice (1-5 dice scaling)
- **Cross-Skill Synergies**: Tags from different skills create unique combinations
- **Archetype Support**: Ultimate tag combinations define character archetypes

## Directory Structure

```
cosmos-engine-html/
├── index.html                    # Main rulebook index (entry point)
├── chapters/                     # All 16 core chapters
│   ├── ch01-introduction/
│   ├── ch02-core-mechanics/
│   ├── ch03-character-creation/
│   ├── ch04-character-advancement/
│   ├── ch05-actions-and-skills/
│   ├── ch06-personal-combat/
│   └── ... (16 chapters total)
├── reference/                    # Reference materials
│   └── skill-trees/             # Interactive skill tree visualizations
│       ├── index.html
│       └── [18 skill trees]
├── appendices/                   # Appendices and glossaries
│   └── appendix-a-universal-tag-glossary.html
├── assets/                       # CSS, JavaScript, and images
│   ├── css/
│   │   └── cosmos-engine.css
│   ├── js/
│   │   └── cosmos-engine.js
│   └── images/
│       └── cosmos-engine-logo.png
└── _config.yml                  # GitHub Pages configuration
```

## GitHub Pages Deployment

### Setup

1. Push this branch to GitHub
2. Go to Settings > Pages in your repository
3. Select source: "Deploy from a branch"
4. Select branch: "second-edition-html"
5. Select folder: "/cosmos-engine-html"
6. Save and wait for deployment

Your rulebook will be available at:
- `https://[username].github.io/[repository-name]/`

### Local Testing

```bash
# Using Python 3
cd cosmos-engine-html
python -m http.server 8000

# Using Node.js
npx http-server

# Using Ruby
ruby -run -e httpd . -p 8000
```

Then visit `http://localhost:8000` in your browser.

## System Corrections Made

### Before (Inconsistent)
- ❌ Some skills had 10 ranks, others had 7
- ❌ Five mastery tiers created confusion
- ❌ Missing archetypes (performers, crafters, traders)
- ❌ Inconsistent tag progression

### After (Standardized)
- ✅ All skills have exactly 7 ranks at standardized levels
- ✅ Four clear mastery tiers with logical progression
- ✅ Complete archetype coverage with 18 skills
- ✅ Unified tag system with synergy mechanics

## Technical Implementation

### Visual Features
- **Responsive Design**: Works on desktop and mobile
- **Interactive Elements**: Hover effects and smooth animations
- **Tier Color Coding**: Visual distinction between mastery levels
- **Consistent Styling**: Unified design language across all trees

### Tag System Features
- **Tag Categories**: Foundation, Style, Method, Power, etc.
- **Synergy Examples**: Built-in examples showing tag combinations
- **Cross-References**: Links between related skills and tags
- **Scale Integration**: Tags align with Personal/Vehicle/Starship/Fleet scales

## Character Archetypes Now Supported

### Combat & Military
- Melee Striker, Ranged Striker, Tactical Commander, Elite Operative

### Social & Cultural  
- Face/Negotiator, Galactic Pop Star, Cultural Ambassador, Trade Baron

### Technical & Creative
- Mechanic/Engineer, Master Crafter, Hacker/Technician, Starship Designer

### Specialist & Unique
- Psionic Adept, Explorer/Scout, Corporate Executive, Action Movie Star

## Development Status

- **Phase**: Prototype Complete
- **System Mechanic Drift**: ✅ Resolved
- **Skill Coverage**: ✅ 95%+ archetype support achieved
- **Tag Integration**: ✅ Universal system implemented
- **Visual Documentation**: ✅ All 18 skills documented

## Next Steps

1. **Playtesting**: Test the 7-rank progression in actual gameplay
2. **Balance Review**: Validate tag synergy power levels
3. **Chapter Integration**: Update Chapter 5 with final skill descriptions
4. **Equipment Alignment**: Ensure equipment tags align with skill tags

## Files Origin

All skill trees in this prototype are corrected versions derived from:
- Original skill trees in `/docs/diagrams/skill-trees/`
- System mechanics defined in Chapter 5: Actions and Skills
- Universal Tag System specifications
- Character archetype gap analysis recommendations

## Features

- 📱 **Mobile-Responsive Design**: Works on all devices
- 🎯 **Interactive Skill Trees**: Visual skill progression with Universal Tag System
- 🔍 **Built-in Search**: Quick navigation through all content
- 🔖 **Bookmark System**: Save your place and quick-access important sections
- 🌙 **Sci-Fi Aesthetic**: Custom CSS with animated effects and glass-morphism design
- ⚡ **Fast Loading**: Pure HTML/CSS/JS with no external dependencies

## Version

This is the Second Edition (v2.0.0) featuring:
- Universal Tag System throughout
- Condensed chapters (5-6 pages each) based on copy editor feedback
- Complete combat mechanics in Chapter 6
- Professional infographics and visualizations
- Comprehensive tag glossary with 200+ tags

## License

Copyright © 2024 Cosmos Engine RPG. All rights reserved.