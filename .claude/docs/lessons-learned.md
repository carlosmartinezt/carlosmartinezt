# Lessons Learned

Critical fixes and patterns. Add new lessons here.

---

## Content System

### Lesson: Content folder moved to root
**Problem:** Content was in `src/content/` but needed to be separate from source code for easier management.

**Fix:** Content now lives in `content/` at project root. The glob loader in `src/content.config.ts` points to `./content`.

---

### Lesson: Image paths after content restructure
**Problem:** When moving content from `src/content/` to `content/`, image paths broke.

**Fix:** For co-located images, use relative paths like `./image.jpg`. For images in `src/assets/`, use `../src/assets/images/filename.jpg`.

---

### Lesson: Astro cache causes duplicate ID warnings
**Problem:** After moving files, Astro showed "Duplicate id" warnings during build.

**Fix:** Clear the Astro cache: `rm -rf node_modules/.astro` then rebuild.

---

## Theme System

### Lesson: Theme flash on page load/navigation
**Problem:** When using dark mode, page flashes white before theme applies.

**Fix:** Add an inline script in `<head>` (via BaseHead.astro) that sets `data-theme` BEFORE any content renders. Must use `is:inline` directive so Astro doesn't defer it.

See: `.claude/docs/components/theme-toggle.md`

---

## Favicon

### Note: Favicon generation from photo
Favicon uses the profile photo (`src/assets/images/carlos_profile_pic.jpeg`). Generated with macOS `sips`:

```bash
sips -z 32 32 -s format png SOURCE --out public/favicon.png
sips -z 16 16 -s format png SOURCE --out public/favicon-16x16.png
sips -z 180 180 -s format png SOURCE --out public/apple-touch-icon.png
```

Files in `public/`: `favicon.png`, `favicon-16x16.png`, `apple-touch-icon.png`
Links defined in: `src/components/BaseHead.astro`

---

## Template for New Lessons

```markdown
### Lesson: [Short title]
**Problem:** [What went wrong]

**Fix:** [How to fix it]
```
