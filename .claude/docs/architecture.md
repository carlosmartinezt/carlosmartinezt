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
| Entry with images | `content/my-post/index.md` | `/my-post/` |
| Nested (year) | `content/2024/my-post.md` | `/my-post/` |

Folder structure does not affect URLs. Only filename (or frontmatter `slug`) determines the URL.

## External APIs

None. This is a static site with no external dependencies.
