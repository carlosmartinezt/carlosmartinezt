# Search Component

Client-side search with a build-time JSON index. No external dependencies.

## Files

| File | Purpose |
|------|---------|
| `src/components/Search.astro` | Search icon button, overlay UI, and client-side filtering logic |
| `src/pages/search-index.json.ts` | Static API route generating `/search-index.json` at build time |

## How It Works

### Build-time Index

`search-index.json.ts` uses `getCollection('entries')` to produce a JSON array of all entries with `id`, `title`, `description`, and `date` fields. This file is generated once at build time as a static endpoint.

### Client-side Search

1. User clicks the magnifying glass icon in the header.
2. A full-screen overlay opens with a text input.
3. On first open, the component fetches `/search-index.json` (cached after first load).
4. As the user types (minimum 2 characters), entries are filtered by case-insensitive substring match against `title` and `description`.
5. Up to 5 results are displayed with title, date, and a truncated description.
6. Clicking a result navigates to that entry's page.
7. Pressing Escape or clicking the backdrop closes the overlay.

### Script Pattern

Follows the same `setupFunction()` + `astro:after-swap` pattern used by ThemeToggle to survive Astro page transitions.

## Styling

- The search icon button matches ThemeToggle styling (transparent background, white color, same dimensions).
- The overlay uses a fixed backdrop with `rgba(0, 0, 0, 0.4)`.
- The search panel uses CSS variables (`--bg`, `--border`, `--text`, `--text-secondary`, `--link`, `--bg-subtle`) so it works in both light and dark mode.

## Common Issues

### Search index not updating
**Cause:** The JSON endpoint is generated at build time.
**Fix:** Rebuild the site (`npm run build`) to pick up new or changed entries.

### Search not working after navigation
**Cause:** Event listeners not re-attached after Astro page swap.
**Fix:** Already handled via `astro:after-swap` listener in the component script.
