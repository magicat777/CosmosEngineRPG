# Attribute Block Changelog

## [2.0.0] - 2024-12-27
### Changed
- Modifier scale changed from +1 to +10 to -2 to +7
- Attribute 3 now provides +0 modifier (average human)
- More dramatic scaling at extremes

### Attribute Modifier Table
```
Score 1: -2    Score 6: +3
Score 2: -1    Score 7: +4
Score 3: +0    Score 8: +5
Score 4: +1    Score 9: +6
Score 5: +2    Score 10: +7
```

### Notes
- Major balance improvement
- Starting characters have +3 total modifiers instead of +21
- Makes equipment and tags more meaningful
- Compatible with all skill block versions

---

## [1.0.0] - 2024-12-01
### Added
- PRIMAC attribute system
- Six attributes: Presence, Resolve, Intellect, Might, Awareness, Coordination
- Simple 1:1 modifier scale (attribute 1-10 = modifier +1 to +10)
- Derived values (Health, Stress, Defense, etc.)

### Issues Identified
- Starting characters too powerful (+21 total modifiers)
- Little room for advancement
- Equipment bonuses negligible

### Notes
- Original release version
- Mathematically broken at higher levels