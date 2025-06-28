# Immediate HTML Deployment Fixes - Priority Task List

## 🚨 Day 1: Critical Blockers (Must Fix)

### 1. Create Quick Reference Page
```bash
Location: /docs/reference/quick-reference/index.html
```

**Minimum Viable Content:**
```html
- Core Mechanic: 2d10 + Attribute + Skill + Equipment vs TN
- PRIMAC: Presence, Resolve, Intellect, Might, Awareness, Coordination (0-5)
- Target Numbers: 8 (Trivial), 11 (Easy), 14 (Moderate), 17 (Hard), 20 (Extreme)
- Tag Synergy: +1d10 per matching tag, keep best 2 (max 7d10k2)
- Modifier Caps: +8/-6 (replaced by tag synergy)
- Status Effects: Stunned, Wounded, Exhausted, Dying
- Scale Steps: Personal → Vehicle (×10) → Starship (×100) → Capital (×1000)
```

### 2. Fix Chapter 6 Terrain Placeholder
```bash
Location: /docs/chapters/ch06-personal-combat/index.html
Search for: "📊 [INFOGRAPHIC: Terrain Types and Movement]"
```

**Replace with HTML Table:**
```html
<div class="terrain-reference glass-card p-lg">
    <h4>Terrain Types & Movement</h4>
    <table>
        <tr>
            <th>Terrain</th>
            <th>Movement Cost</th>
            <th>Cover Value</th>
            <th>Special Rules</th>
        </tr>
        <tr>
            <td>Open</td>
            <td>Normal</td>
            <td>None</td>
            <td>—</td>
        </tr>
        <tr>
            <td>Difficult</td>
            <td>Double</td>
            <td>Light (+1)</td>
            <td>-1 die to physical actions</td>
        </tr>
        <tr>
            <td>Hazardous</td>
            <td>Triple</td>
            <td>Heavy (+2)</td>
            <td>Environmental damage possible</td>
        </tr>
        <tr>
            <td>Impassable</td>
            <td>—</td>
            <td>Total (+3)</td>
            <td>Requires special movement</td>
        </tr>
    </table>
</div>
```

### 3. Complete Tag Glossary P-Z
```bash
Location: /docs/appendices/appendix-a-universal-tag-glossary.html
```

**Add these tags:**
- [Precise] - +1 die when accuracy matters more than power
- [Quick] - +1 die for speed-based actions and initiative
- [Resilient] - +1 die to resist damage, fatigue, or conditions
- [Stealthy] - +1 die for covert operations and avoiding detection
- [Tactical] - +1 die for planning and coordinated actions
- [Unyielding] - +1 die to maintain position or resist forced movement
- [Versatile] - +1 die when adapting to unexpected situations
- [Wealthy] - +1 die for resource acquisition and social influence
- [Xenophile] - +1 die for alien interactions and cultural understanding
- [Zealous] - +1 die when pursuing ideological goals

---

## 📊 Day 2-3: Create Essential Infographics

### 1. Dice Probability Chart (HTML/CSS)
```html
<!-- Create at: /docs/assets/infographics/dice-probability.html -->
<div class="probability-chart">
    <h3>Tag Synergy Success Rates</h3>
    <div class="chart-bars">
        <!-- Use CSS gradients and transforms for visual bars -->
        <!-- Show 2d10, 3d10k2, 4d10k2, 5d10k2, 6d10k2, 7d10k2 -->
    </div>
</div>
```

### 2. Tag Synergy Flow Diagram
```html
<!-- Create at: /docs/assets/infographics/tag-synergy.html -->
<div class="synergy-flow">
    <div class="tag-source">Character Tags</div>
    <div class="plus">+</div>
    <div class="tag-source">Equipment Tags</div>
    <div class="plus">+</div>
    <div class="tag-source">Situation Tags</div>
    <div class="equals">=</div>
    <div class="dice-pool">Bonus Dice Pool</div>
</div>
```

---

## 🎨 Day 4: Standardize Navigation

### Navigation Template
```html
<!-- Add to every chapter -->
<nav class="chapter-navigation">
    <div class="nav-top">
        <a href="/CosmosEngineRPG/">Home</a> | 
        <a href="/CosmosEngineRPG/chapters/">Chapters</a> | 
        <a href="/CosmosEngineRPG/reference/quick-reference/">Quick Ref</a>
    </div>
    <div class="nav-progress">
        Chapter X of 16: [Chapter Title]
    </div>
    <div class="nav-buttons">
        <a href="[previous]" class="btn-prev">← Previous</a>
        <a href="[next]" class="btn-next">Next →</a>
    </div>
</nav>
```

---

## 🔧 Day 5: Technical Improvements

### 1. Add to cosmos-engine.css
```css
/* Responsive tables */
@media (max-width: 768px) {
    table { display: block; overflow-x: auto; }
}

/* Print styles */
@media print {
    .nav-primary, .chapter-navigation { display: none; }
    .glass-panel { border: 1px solid #000; }
}

/* Infographic styles */
.infographic { 
    margin: 2rem 0; 
    padding: 2rem; 
    background: var(--glass-bg); 
    border-radius: 12px; 
}
```

### 2. Create Missing Logo File
```bash
# Ensure logo exists at:
/docs/assets/images/cosmos-engine-logo.png
# If missing, create a simple SVG placeholder
```

---

## ✅ Verification Checklist

After each fix, verify:
- [ ] Links work correctly
- [ ] Mobile display is readable  
- [ ] Print preview looks clean
- [ ] No console errors
- [ ] Content matches game rules

---

## 🚀 Quick Implementation Script

```bash
#!/bin/bash
# Run from /docs directory

# Create missing directories
mkdir -p reference/quick-reference
mkdir -p assets/infographics

# Create quick reference stub
touch reference/quick-reference/index.html

# Find and report all placeholders
grep -r "PLACEHOLDER\|Coming Soon\|TODO" chapters/

# Check for broken links
find . -name "*.html" -exec grep -l "404\|not found" {} \;

# Report missing images
find . -name "*.html" -exec grep -o 'src="[^"]*"' {} \; | sort | uniq
```

---

This immediate fix list focuses on the absolute essentials that can be implemented quickly to resolve the critical issues.