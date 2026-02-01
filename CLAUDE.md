# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Purpose

This is a public journal—not a blog, not a portfolio. The core mission:

> Preserve and clarify what I'm learning about growth, relationships, and values—primarily for my kids, and secondarily for anyone I care about who might need it.

**What this rules out:** Being timely, complete, impressive, or growing an audience.

**What this requires:** Durability, clarity, low friction, editorial restraint.

See `docs/` for full documentation:

- `docs/ethos.md` — Core mission and constraints
- `docs/principles.md` — Six guiding principles for content and design
- `docs/about-content.md` — Source text for the About page

## Commands

```bash
npm run dev          # Start dev server at localhost:4321
npm run build        # Build production site to ./dist/
npm run preview      # Preview production build locally
npm run format       # Format all files with Prettier
npm run format:check # Check formatting without modifying
```

## Architecture

Astro 5.x site with MDX support, deployed to GitHub Pages via GitHub Actions.

**Content System:**

- Entries live in `src/content/` as `.md` or `.mdx` files
- Content schema defined in `src/content.config.ts` — entries require `title`, `description`, `pubDate`; optional `updatedDate`
- Use `getCollection('entries')` to query entries

**Key Files:**

- `src/consts.ts` - Site title and description constants
- `src/layouts/BlogPost.astro` - Layout wrapper for journal entries
- `astro.config.mjs` - Site URL and integrations (mdx, sitemap)

**Routing:**

- `src/pages/index.astro` - Homepage with entry list
- `src/pages/about.astro` - About page
- `src/pages/[...slug].astro` - Dynamic route for entries (e.g., `/my-entry/`)
- `src/pages/rss.xml.js` - RSS feed

## Deployment

Pushes to `main` trigger automatic deployment to GitHub Pages via `.github/workflows/deploy.yml`.

**Live URLs:**

- Default: https://carlosmartinezt.github.io/carlosmartinezt/
- Custom domain: https://carlosmartinezt.com

**GitHub Pages base path:** Since the site is deployed to a subdirectory (`/carlosmartinezt/`), `astro.config.mjs` must include `base: '/carlosmartinezt'`. Without this, all internal links will be broken. If a custom domain is configured later, remove the `base` setting and update `site` to the custom domain.
