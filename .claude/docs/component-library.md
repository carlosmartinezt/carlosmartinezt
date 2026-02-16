# Component Library

DO NOT create new components for these patterns. Use what exists.

## CSS Variables

Defined in `src/styles/global.css`:

| Variable | Value | Purpose |
|----------|-------|---------|
| `--bg` | `#faf8f5` | Page background (warm paper) |
| `--bg-subtle` | `#f5f2ed` | Code blocks, subtle backgrounds |
| `--text` | `#2d2a26` | Primary text |
| `--text-secondary` | `#6b6560` | Dates, metadata, muted text |
| `--border` | `#e8e4de` | Dividers, blockquote borders |
| `--link` | `#8b5a3c` | Link color (warm brown) |
| `--link-hover` | `#6b4530` | Link hover state |

## Layout Components

### Header (`src/components/Header.astro`)
Navy bar with site title, nav links, search, and theme toggle.
```astro
<Header />
```

### Footer (`src/components/Footer.astro`)
Simple footer with "For my kids." tagline.
```astro
<Footer />
```

### BlogPost Layout (`src/layouts/BlogPost.astro`)
Full page wrapper for entries. Includes:
- BaseHead for meta tags
- Header
- Hero image (optional)
- Entry header (date, title)
- Content slot
- Prev/next navigation
- Back link
- Footer

Props: `title`, `description`, `pubDate`, `updatedDate?`, `heroImage?`, `prevEntry?`, `nextEntry?`

## UI Components

### BaseHead (`src/components/BaseHead.astro`)
HTML head with meta tags, fonts, global styles.
```astro
<BaseHead title="Page Title" description="..." />
```

### FormattedDate (`src/components/FormattedDate.astro`)
Formats dates consistently.
```astro
<FormattedDate date={pubDate} />
<FormattedDate date={pubDate} format="long" />
```

### HeaderLink (`src/components/HeaderLink.astro`)
Active-aware navigation link.
```astro
<HeaderLink href="/about">About</HeaderLink>
```

### Search (`src/components/Search.astro`)
Client-side search with build-time JSON index. Renders a magnifying glass icon button in the header that opens a search overlay.
```astro
<Search />
```
See: `docs/ai/components/search.md`

## Typography Classes

| Class | Usage |
|-------|-------|
| `.prose` | Article content wrapper (adds spacing to p, h2, h3) |
| `.sr-only` | Screen reader only (visually hidden) |

## Entry Navigation Pattern

In `BlogPost.astro`, prev/next nav uses:
- `.entry-nav` - Flex container for nav links
- `.nav-link` - Individual link wrapper
- `.nav-prev` / `.nav-next` - Alignment modifiers
- `.nav-label` - "Older" / "Newer" text
- `.nav-title` - Entry title

## Color Conventions

| Purpose | CSS Variable | When to use |
|---------|--------------|-------------|
| Main text | `var(--text)` | Body copy, headings |
| Muted text | `var(--text-secondary)` | Dates, captions, metadata |
| Links | `var(--link)` | All interactive links |
| Dividers | `var(--border)` | Section separators, blockquotes |
| Backgrounds | `var(--bg-subtle)` | Code blocks, cards |
