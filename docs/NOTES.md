# Personal Notes

Things I don't want to forget about this project.

---

## Deploying Updates

The site auto-deploys when you push to `main`:

```bash
git add .
git commit -m "Your message"
git push
```

Check deployment status at: https://github.com/carlosmartinezt/carlosmartinezt/actions

Live site: https://carlosmartinezt.github.io/carlosmartinezt/

---

## Creating a New Entry

**Option A: GitHub Web Interface**
1. Go to `github.com/carlosmartinezt/carlosmartinezt`
2. Navigate to `src/content/`
3. Click "Add file" → "Create new file"
4. Name it `my-post.md`, paste content with frontmatter below
5. Commit — site auto-deploys

**Option B: Local**
1. Create a new `.md` file in `src/content/`
2. Add frontmatter at the top:

```markdown
---
title: 'Your Title'
description: 'A short description'
pubDate: '2024-01-15'
author: 'Carlos Martinez Tuanama'
---

Your content here...
```

3. The entry will be available at `/{filename}/` (without the .md extension)

---

## Adding a Hero Image

1. Put your image in `src/assets/images/`
2. Add to frontmatter:

```markdown
---
title: 'Your Title'
description: 'A short description'
pubDate: '2024-01-15'
author: 'Carlos Martinez Tuanama'
heroImage: '../assets/images/your-image.png'
---
```

---

## Formatting Code

```bash
npm run format
```

---

## Running Locally

```bash
npm run dev
```

Site runs at http://localhost:4321

Note: The base path (`/carlosmartinezt`) is only applied in CI/production, so localhost works at the root.

---

## When Switching to Custom Domain (carlosmartinezt.com)

Update `astro.config.mjs` to remove the conditional logic:

```js
export default defineConfig({
  site: 'https://carlosmartinezt.com',
  integrations: [mdx(), sitemap()],
});
```

No `base` path needed with a custom domain.

---

## Project Structure

```
src/
  content/           <- All journal entries go here
  assets/images/     <- Images for entries
  pages/             <- Route handling
  layouts/           <- BlogPost layout
  components/        <- Header, Footer, etc.
  styles/            <- global.css
```

---

## Future Features (when needed)

**Tags**: Add `tags: ['clarity', 'chess']` to frontmatter, create `/tags/[tag]` page

**Archive by year/month**: Create `/archive/[year]` routes

**Search**: Use [Pagefind](https://pagefind.app/) — lightweight static search for Astro

**Headless CMS**: [Decap CMS](https://decapcms.org/) or [Tina](https://tina.io/) for a web-based editor
