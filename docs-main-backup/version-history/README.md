# Version History Guide

This directory tracks all changes to documentation in the Cosmos Engine RPG project.

## Quick Start

1. **Before making changes**: Note the current version in the file
2. **After making changes**: 
   - Add version entry at bottom of modified file
   - Update `changelog.md` with summary
   - Use appropriate version number increment

## Files in this Directory

### `changelog.md`
Master change log for all `/docs` modifications. Updated with every release.

### `version-template.md`
Templates and guidelines for version tracking. Reference this when making changes.

### `README.md`
This file - Quick reference for version control process.

## Version Control Process

### For Minor Edits (Patches)
1. Fix typos/clarify text in document
2. Add version line at bottom: `- **v3.0.1** (2025-01-23): Fixed typos in examples`
3. No need to update changelog for minor patches

### for Content Changes (Minor/Major)
1. Make your changes to the document
2. Add detailed version block at bottom of file
3. Update `changelog.md` with summary
4. Commit with descriptive message

### Version Number Rules
- Current base version: **3.0.0**
- Patch: `3.0.x` - Fixes and clarifications
- Minor: `3.x.0` - New features or significant changes
- Major: `x.0.0` - Breaking changes or overhauls

## Quick Version Block Template

Add this to the bottom of any changed file:

```markdown
---
## Version History
- **v3.0.0** (2025-01-23): Initial documentation release
- **v3.0.1** (YYYY-MM-DD): [Your changes here]
```

## Important Notes

- All files start at v3.0.0 (matching the system version)
- Always increment from the file's current version, not the system version
- Date format: YYYY-MM-DD
- Keep changes brief in file, detailed in changelog

## Review Checklist

Before committing documentation changes:
- [ ] Version number incremented appropriately
- [ ] Date is correct
- [ ] Changes summarized in file
- [ ] Changelog updated (if minor/major change)
- [ ] Examples still accurate
- [ ] No conflicts with other systems