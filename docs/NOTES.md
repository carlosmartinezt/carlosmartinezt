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
