# Cosmos Engine Mechanical Drift Analysis Framework

## Purpose
This framework helps identify when new rules or mechanics drift from the core 2d10 system principles, enabling consistent game design decisions.

## Core Mechanics Reference (The Source of Truth)

### Fundamental Resolution
```
2d10 + Attribute + Skill + Equipment + Situation vs Target Number (8-20)
```

### Immutable Design Principles
1. **2d10 Base Roll**: Always use 2d10, never change dice type
2. **Modifier Range**: Total modifiers capped at +8/-6
3. **Target Numbers**: 8 (Easy) to 20 (Legendary)
4. **Bell Curve**: Preserve probability distribution (mean 11.0, std dev 2.87)
5. **Unified Mechanics**: Same resolution at all scales

### Component Limits
- **Attributes**: 0-5 (6 at level 20 max)
- **Skills**: 0-5 natural (0-7 enhanced)
- **Equipment**: 0-5 (by Technology Era)
- **Situation**: -3 to +3 (consolidated modifier)

## Drift Detection Checklist

### Level 1: Core Violation (Red Flags) 🚨
These indicate fundamental drift from the system:

- [ ] Uses dice other than 2d10
- [ ] Total modifiers exceed +8/-6 caps
- [ ] Target numbers outside 8-20 range
- [ ] Introduces separate resolution mechanics
- [ ] Breaks probability curve (auto-success/fail outside natural 2/20)

**Action**: These must be corrected or require core system revision

### Level 2: Design Principle Drift (Yellow Flags) ⚠️
These suggest departure from design philosophy:

- [ ] Adds modifier types beyond the core 4
- [ ] Creates exception-based rules
- [ ] Increases complexity beyond target (check complexity budget)
- [ ] Introduces graduated tracking when binary would work
- [ ] Favors generalization over specialization

**Action**: Evaluate if the benefit justifies the drift

### Level 3: Implementation Variance (Blue Flags) 🔵
Minor variations that may be acceptable:

- [ ] Different modifier names but same function
- [ ] Subsystem-specific applications (e.g., vehicle conditions)
- [ ] Flavor variations that don't change math
- [ ] Scale-specific implementations

**Action**: Document clearly, ensure consistency within subsystem

## Drift Analysis Process

### Step 1: Identify the Mechanic
- What system/rule is being evaluated?
- What problem does it solve?
- Where in the rules does it belong?

### Step 2: Core Compliance Check
Run through Level 1 checklist. Any red flags = immediate review.

### Step 3: Design Alignment Check
Run through Level 2 checklist. Yellow flags = design discussion needed.

### Step 4: Implementation Review
Run through Level 3 checklist. Blue flags = documentation focus.

### Step 5: Decision Matrix

| Drift Type | Keep Drift | Modify Rule | Change Core | 
|------------|------------|-------------|-------------|
| **Improves Play** | Consider if isolated | Preferred | Only if universal improvement |
| **Solves Problem** | If no other solution | Try first | If problem is systemic |
| **Adds Complexity** | Rarely | Usually | Never |
| **Player Request** | Evaluate carefully | If possible | Requires strong consensus |

### Step 6: Documentation
Record decision in:
1. `/docs/design-notes/drift-decisions.md`
2. Update relevant rule files
3. Note in version history

## Common Drift Patterns to Watch

### 1. Modifier Creep
**Symptom**: New sources of bonuses/penalties
**Example**: Adding "Morale" as 5th modifier type
**Solution**: Fold into existing categories (Situation)

### 2. Exception Proliferation
**Symptom**: "Except when..." rules multiply
**Example**: "This works differently for psionics"
**Solution**: Find unified approach or accept subsystem

### 3. Resolution Alternatives
**Symptom**: "For this, roll differently..."
**Example**: "Social conflicts use 3d6"
**Solution**: Adapt to 2d10 framework

### 4. Complexity Creep
**Symptom**: Simple systems gain detailed tracking
**Example**: Status effects expand from 3 to 10 types
**Solution**: Return to design complexity targets

### 5. Scale Inconsistency
**Symptom**: Different scales use different rules
**Example**: Capital ships use completely different combat
**Solution**: Apply same mechanics with scale modifiers

## Evaluation Questions

When reviewing a potential drift:

1. **Does this make the game more fun?**
2. **Does this solve a real problem?**
3. **Can the same goal be achieved within core mechanics?**
4. **Is the added complexity worth the benefit?**
5. **Will players understand why this is different?**
6. **Does this enhance the sci-fi feel appropriately?**

## Preferred Solutions for Common Issues

### Need More Granularity
❌ Add more modifier types
✅ Use Advantage/Disadvantage system
✅ Utilize Technology Era distinctions

### Need Subsystem Uniqueness  
❌ Create entirely new resolution
✅ Use same roll, interpret differently
✅ Apply scale or era modifiers

### Need Tactical Options
❌ Add complex action economy
✅ Use Enhancement Modes (Standard/Boosted/Overcharged)
✅ Add binary tactical choices

### Need Character Distinction
❌ Add more attributes/skills
✅ Deepen specialization trees
✅ Use Mastery bonuses

## Drift Decision Log Template

```markdown
## [Date] - [Mechanic Name]

### Proposed Mechanic
[Description of the new rule/change]

### Drift Analysis
- Level 1 Violations: [None/List]
- Level 2 Concerns: [None/List]  
- Level 3 Variances: [None/List]

### Justification
[Why this drift might be acceptable]

### Alternatives Considered
1. [Alternative approach]
2. [Alternative approach]

### Decision
[ ] Implement as proposed
[ ] Modify to align with core
[ ] Revise core mechanics
[ ] Reject proposal

### Rationale
[Explanation of decision]

### Implementation Notes
[How to integrate if approved]
```

## Review Schedule

- **Weekly**: Review new mechanics for drift
- **Monthly**: Audit existing rules for consistency
- **Quarterly**: Evaluate if core mechanics need revision
- **Annually**: Full system consistency check

---

*Remember: Drift isn't always bad, but it should always be intentional.*