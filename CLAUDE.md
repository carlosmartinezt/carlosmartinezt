# CLAUDE.md

## Quick Context
Personal journal - preserving lessons about growth, relationships, and values for my kids.

**Key Principle**: Durability and clarity over impressiveness. Low friction, editorial restraint.

**Production**: https://carlosmartinezt.com

## Before You Start
Read these docs for context:
- `docs/ai/architecture.md` - Data flow and content system
- `docs/ai/component-library.md` - UI primitives (DO NOT reinvent)
- `docs/ai/lessons-learned.md` - Hard bugs (CHECK BEFORE DEBUGGING)
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
docs/ai/              # AI documentation
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

## Compounding Context
At session end, update `docs/ai/lessons-learned.md` with bugs fixed and patterns discovered.
