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

## Template for New Lessons

```markdown
### Lesson: [Short title]
**Problem:** [What went wrong]

**Fix:** [How to fix it]
```
