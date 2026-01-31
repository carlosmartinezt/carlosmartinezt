# Setup Instructions

## Fix NPM Cache Issue

Before you can run the development server, you need to fix npm cache permissions:

```bash
sudo chown -R $(id -u):$(id -g) "$HOME/.npm"
```

## Install Dependencies

```bash
npm install
```

## Add Images

Add the following images to `public/images/`:

1. **hero.jpg** - NYC skyline or similar background image (1920x1080px or larger)
2. **profile.jpg** - Your profile photo (300x300px or larger, square format)

## Run Development Server

```bash
npm run dev
```

Visit http://localhost:4321 to see your site!

## Build for Production

```bash
npm run build
```

## Deploy to GitHub Pages

1. Create a GitHub repository:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   gh repo create carlosmartinezt --public --source=. --push
   ```

2. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Source: GitHub Actions
   - Save

3. Configure custom domain (optional):
   - In GitHub repo: Settings → Pages → Custom domain
   - Enter: carlosmartinezt.com
   - Update DNS with A records or CNAME (see README.md)

## Customize Content

- Edit blog posts in `src/content/blog/`
- Update site info in `src/consts.ts`
- Modify styles in component files
- Add more pages in `src/pages/`

Your site is ready to go!
