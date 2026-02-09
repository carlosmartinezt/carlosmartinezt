# Architecture

## System Overview

```
content/                    Markdown entries + images
    ↓
src/content.config.ts       Schema validation + ID generation
    ↓
src/pages/[...slug].astro   Dynamic routing + prev/next nav
    ↓
src/layouts/BlogPost.astro  Entry layout wrapper
    ↓
dist/                       Static HTML (GitHub Pages)
```

## Data Flow

### Entry Rendering
```
1. getCollection('entries') fetches all content
    → 2. Sort by pubDate descending
        → 3. Generate prev/next navigation links
            → 4. Render MDX to HTML via BlogPost layout
```

### URL Slug Resolution
```
1. Check frontmatter `slug` field
    → 2. If missing, use filename (without extension)
        → 3. For index.md, use parent folder name
```

## Key Files

| Layer | File | Purpose |
|-------|------|---------|
| Content Config | `src/content.config.ts` | Schema, glob loader, ID generation |
| Dynamic Route | `src/pages/[...slug].astro` | Entry pages with navigation |
| Layout | `src/layouts/BlogPost.astro` | Entry wrapper with header/footer |
| Styles | `src/styles/global.css` | CSS variables and typography |
| Constants | `src/consts.ts` | Site title and description |

## Content Organization

| Pattern | Example | URL |
|---------|---------|-----|
| Simple entry | `content/my-post.md` | `/my-post/` |
| Entry with images | `content/my-post/my-post.md` + images in same folder | `/my-post/` |
| Nested (year) | `content/2024/my-post.md` | `/my-post/` |

### Naming Convention

Content files that need co-located assets (images, etc.) live in a folder. The markdown file inside uses the **same name as the folder**, not `index.md`. For example: `content/my-post/my-post.md`, not `content/my-post/index.md`.

Folder structure does not affect URLs. Only filename (or frontmatter `slug`) determines the URL.

## Tags System

Posts can have tags via `tags: [tag1, tag2]` in frontmatter. Defaults to `[]`.

| Route | File | Purpose |
|-------|------|---------|
| `/tags/[tag]/` | `src/pages/tags/[tag].astro` | Tag archive page, lists matching posts |

Tags render as `.tag` pill links in:
- `BlogPost.astro` (below date, above title)
- `index.astro` (inline in entry header, after date)
- `tags/[tag].astro` (inline in entry header, active tag highlighted)

Current tags: `ai`, `career`, `thinking`, `parenting`.

## External APIs

None. This is a static site with no external dependencies.
