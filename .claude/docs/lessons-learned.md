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

### Lesson: Astro cache causes stale references after renaming content files
**Problem:** After renaming or moving content files, Astro's `.astro/` cache retains old file paths, causing build failures with "Rollup failed to resolve import" errors referencing the old filenames.

**Fix:** Clear both cache locations: `rm -rf .astro node_modules/.astro` then rebuild.

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

## Deployment

### Lesson: GitHub Pages can silently become disabled
**Problem:** Site returned 404 even though the deploy workflow was succeeding. The GitHub API showed `"has_pages": false`, meaning Pages was disabled on the repo while the workflow kept running successfully.

**Fix:** Re-enable Pages via the API or repo Settings > Pages. Then verify the custom domain is set (may require domain verification at the account level if GitHub says "domain already taken"). Finally, re-trigger the deploy workflow. Key diagnostic: check `gh api repos/OWNER/REPO/pages` and look for `has_pages` in the repo info.

---

### Lesson: "Custom domain already taken" on GitHub Pages
**Problem:** After re-enabling Pages, setting the custom domain fails with "already taken" even though you own it.

**Fix:** Go to GitHub account Settings > Pages > Verified domains, add and verify the domain (requires adding a TXT DNS record). Once verified, the domain can be assigned to the repo's Pages site.

---

## Template for New Lessons

```markdown
### Lesson: [Short title]
**Problem:** [What went wrong]

**Fix:** [How to fix it]
```
