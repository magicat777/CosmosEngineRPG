# Cosmos Engine RPG HTML Deployment - Comprehensive Todo List

Generated: 2025-06-28

## Overview
This document outlines all tasks needed to complete and polish the GitHub Pages deployment of the Cosmos Engine RPG HTML rulebook, based on systematic review of all chapters.

---

## 🚨 CRITICAL FIXES (Blockers)

### 1. Create Quick Reference Page
- **Issue**: `/reference/quick-reference/index.html` returns 404
- **Location**: Referenced from multiple chapters and main index
- **Solution**: Create comprehensive quick reference with:
  - Core mechanics summary (2d10 + modifiers)
  - PRIMAC attributes quick list
  - Target Number table
  - Tag synergy rules
  - Common modifiers
  - Status effects
  - Scale conversion chart

### 2. Replace Terrain Movement Infographic Placeholder
- **Issue**: Chapter 6 contains placeholder text "📊 [INFOGRAPHIC: Terrain Types and Movement]"
- **Location**: `/chapters/ch06-personal-combat/index.html`
- **Solution**: Create HTML/CSS infographic showing:
  - Terrain types (Open, Difficult, Hazardous, Impassable)
  - Movement costs per terrain
  - Cover values
  - Environmental effects

### 3. Complete Universal Tag Glossary
- **Issue**: Appendix A only covers tags A-O
- **Location**: `/appendices/appendix-a-universal-tag-glossary.html`
- **Solution**: Add all tags P-Z with full descriptions and mechanical effects

---

## 📊 IMPORTANT: Infographic Development

### Core System Infographics Needed

#### 1. Dice Probability Distribution Chart
- **Purpose**: Visualize 2d10 vs tag synergy probability curves
- **Contents**:
  - Base 2d10 bell curve
  - 3d10k2, 4d10k2, 5d10k2, 6d10k2, 7d10k2 curves
  - Success rate percentages for each TN
  - Interactive hover states showing exact percentages

#### 2. Tag Synergy Flow Diagram
- **Purpose**: Show how tags create bonus dice
- **Contents**:
  - Character tags + Equipment tags + Situational tags
  - Visual flow showing dice pool creation
  - Example: [Military] + [Enhanced] + [Tactical] = 3 bonus dice
  - Maximum synergy illustration (7d10k2)

#### 3. Combat Action Flowchart
- **Purpose**: Quick visual reference for combat sequence
- **Contents**:
  - Initiative → Actions → Resolution → Consequences
  - Decision points for players
  - Status effect applications
  - Defensive options

#### 4. Scale Progression Graphic
- **Purpose**: Visualize scale differences and conversions
- **Contents**:
  - Personal → Vehicle → Starship → Capital → Fleet
  - Damage multipliers (×10 per step)
  - Visual size comparisons
  - Example conversions

#### 5. PRIMAC Attribute Wheel
- **Purpose**: Visual representation of the six attributes
- **Contents**:
  - Hexagonal arrangement of attributes
  - Icons for each attribute
  - Common skill associations
  - Interactive tooltips with descriptions

#### 6. Equipment Technology Era Timeline
- **Purpose**: Show tech progression and bonuses
- **Contents**:
  - Primitive (0) → Modern (3) → Advanced (5)
  - Visual examples of each era
  - Bonus progression
  - Tag evolution examples

---

## 🎨 VISUAL DESIGN & STYLING

### 1. Standardize Navigation Components
- **Current Issue**: Inconsistent navigation between chapters
- **Solution**:
  - Create standard navigation template
  - Include: Home | Previous Chapter | Chapter List | Next Chapter | Quick Ref
  - Add chapter progress indicator (e.g., "Chapter 6 of 16")
  - Implement breadcrumb navigation

### 2. Logo Standardization
- **Current Issue**: Logo appears inconsistently
- **Solution**:
  - Place logo in same position on all pages
  - Consistent size and drop-shadow effects
  - Link logo to home page

### 3. Enhanced Visual Hierarchy
- **Improvements Needed**:
  - Better section dividers with visual elements
  - Consistent use of color coding:
    - Gold: Core mechanics
    - Blue: Examples
    - Green: GM content
    - Red: Warnings/important notes
  - Add visual icons for different content types

### 4. Responsive Design Improvements
- **Current Issue**: Basic responsive design
- **Solution**:
  - Test and optimize for mobile devices
  - Improve table responsiveness
  - Add collapsible sections for mobile
  - Ensure infographics scale properly

---

## 📝 CONTENT COMPLETION

### 1. Add Missing Chapter Elements
- **Chapter 2**: Add visual representation of modifier caps
- **Chapter 5**: Add skill progression visualization
- **Chapter 8**: Add vehicle scale comparison graphic
- **Chapter 9**: Add FTL travel visualization
- **Chapter 10**: Add hacking interface mockup
- **Chapter 14**: Add unit formation diagrams

### 2. Create "Coming Soon" Replacements
- **Issue**: Several "Coming Soon" sections
- **Solution**: Either complete content or remove references

### 3. Expand Examples
- **Add to each chapter**:
  - "In Play" example boxes
  - Common questions/edge cases
  - Designer notes on implementation

---

## 🔧 TECHNICAL IMPROVEMENTS

### 1. Interactive Elements
- **Dice Roller Widget**: Add to relevant pages
- **Collapsible Rules Sections**: For detailed subsystems
- **Hover Tooltips**: For game terms and abbreviations
- **Search Functionality**: Implement across all pages

### 2. Print Stylesheet
- **Create print.css** for clean printing
- Remove navigation elements
- Optimize page breaks
- Black and white friendly design

### 3. Accessibility Improvements
- **Alt Text**: Add to all visual elements
- **ARIA Labels**: Improve screen reader support
- **Keyboard Navigation**: Ensure all interactive elements are keyboard accessible
- **Color Contrast**: Verify WCAG compliance

### 4. Performance Optimization
- **Optimize Images**: Compress any graphics
- **Lazy Loading**: Implement for images
- **CSS/JS Minification**: Reduce file sizes
- **Cache Headers**: Configure for GitHub Pages

---

## 📋 QUALITY ASSURANCE

### 1. Cross-Reference Verification
- Verify all internal links work
- Check all chapter-to-chapter references
- Validate rule references are accurate
- Test navigation paths

### 2. Content Consistency Audit
- Final review of all mechanical descriptions
- Verify PRIMAC always defined the same way
- Check Universal Tag System consistency
- Ensure TN scales match everywhere

### 3. Browser Testing
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome)
- Check print preview in each browser
- Verify infographic rendering

### 4. User Testing
- Get feedback on navigation flow
- Test rules comprehension
- Identify confusing sections
- Mobile usability testing

---

## 🚀 IMPLEMENTATION PHASES

### Phase 1: Critical Fixes (Week 1)
1. Create Quick Reference page
2. Replace terrain movement placeholder
3. Complete Tag Glossary
4. Fix all broken links

### Phase 2: Core Infographics (Week 2-3)
1. Dice probability chart
2. Tag synergy diagram
3. Combat flowchart
4. Scale progression graphic

### Phase 3: Visual Polish (Week 4)
1. Standardize navigation
2. Implement consistent styling
3. Add PRIMAC wheel and tech timeline
4. Mobile optimization

### Phase 4: Enhancement (Week 5)
1. Interactive elements
2. Print stylesheet
3. Accessibility improvements
4. Performance optimization

### Phase 5: QA & Launch (Week 6)
1. Complete content audit
2. Cross-browser testing
3. User feedback integration
4. Final deployment

---

## 📊 Success Metrics

- [ ] Zero 404 errors
- [ ] Zero placeholder content
- [ ] All infographics implemented
- [ ] Consistent navigation on 100% of pages
- [ ] Mobile responsive on all devices
- [ ] Print stylesheet functional
- [ ] Accessibility score > 90
- [ ] Page load time < 3 seconds
- [ ] Positive user feedback on clarity

---

## 🔄 Maintenance Plan

### Regular Updates
- Review for rule consistency monthly
- Update based on playtesting feedback
- Add new examples as needed
- Expand infographics based on user requests

### Version Control
- Tag each major update
- Maintain changelog
- Archive previous versions
- Document all rule clarifications

---

This comprehensive todo list addresses all identified issues and provides a clear roadmap for completing the Cosmos Engine RPG HTML deployment.