# CLAUDE.md

---
## CRITICAL: Document Your Work
**After ANY technical code change, you MUST document learnings immediately:**

1. **Component-specific docs** - Create/update `.claude/docs/components/<component-name>.md`
2. **Patterns & gotchas** - Add to `.claude/docs/lessons-learned.md`
3. **Architecture changes** - Update `.claude/docs/architecture.md`

This is NOT optional. Future sessions depend on this context. Be proactive.

---

## Style Guide (for all content)

**Never use hyphens (-)** in prose. Use alternative punctuation:
- Instead of em dashes (—), use periods, commas, or restructure the sentence
- Instead of en dashes (–), spell out ranges ("2020 to 2022")
- Hyphens in compound words are acceptable only when grammatically required

---

## Quick Context
Personal journal - preserving lessons about growth, relationships, and values for my kids.

**Key Principle**: Durability and clarity over impressiveness. Low friction, editorial restraint.

**Production**: https://carlosmartinezt.com

## Before You Start
Read these docs for context:
- `.claude/docs/architecture.md` - Data flow and content system
- `.claude/docs/component-library.md` - UI primitives (DO NOT reinvent)
- `.claude/docs/components/` - Component-specific documentation
- `.claude/docs/lessons-learned.md` - Hard bugs (CHECK BEFORE DEBUGGING)
- `docs/ethos.md` - Core mission and constraints
- `docs/principles.md` - Design principles

## Commands
```bash
npm run dev          # Dev server at localhost:4321
npm run build        # Build to ./dist/
npm run preview      # Preview production build
npm run format       # Format with Prettier
```

## Tech Stack
Astro 5.x + MDX, deployed to GitHub Pages via GitHub Actions.

## Project Structure
```
content/              # Journal entries (MD/MDX + images)
.claude/docs/         # AI documentation
src/
├── components/       # Astro components
├── layouts/          # Page layouts
├── pages/            # Routes
├── styles/           # Global CSS
└── content.config.ts # Content schema
public/               # Static assets
```

## Critical Files
| What | Where |
|------|-------|
| Content schema | `src/content.config.ts` |
| Entry layout | `src/layouts/BlogPost.astro` |
| CSS variables | `src/styles/global.css` |
| Site constants | `src/consts.ts` |

## Content Patterns
- Simple: `content/my-entry.md` → `/my-entry/`
- With images: `content/my-entry/index.md` + images → `/my-entry/`
- Override URL: add `slug: custom-url` to frontmatter

Folder structure doesn't affect URLs. Filenames must be unique.
