# ThemeToggle Component

Light/dark theme toggle with persistence and smooth transitions.

## Files

| File | Purpose |
|------|---------|
| `src/components/ThemeToggle.astro` | Toggle button UI and click handler |
| `src/components/BaseHead.astro` | Inline script for flash prevention |
| `src/styles/global.css` | Dark theme CSS variables |

## How It Works

### Theme Detection (priority order)
1. **localStorage** - User's saved preference
2. **System preference** - `prefers-color-scheme: dark`
3. **Time-based** - Dark mode 7pm-7am if no other preference

### Flash Prevention (CRITICAL)
The theme MUST be set before the page renders to prevent a white flash.

**Solution:** Inline script in `<head>` via BaseHead.astro:
```html
<script is:inline>
  (function() {
    // Check localStorage, system pref, or time
    // Set data-theme="dark" on <html> if needed
  })();
</script>
```

The `is:inline` directive ensures Astro doesn't bundle/defer this script.

### CSS Variables
Dark theme uses `[data-theme='dark']` selector in global.css:
```css
[data-theme='dark'] {
  --bg: #2d2d2d;
  --bg-subtle: #3a3a3a;
  --text: #e8e4de;
  /* etc */
}
```

### Transitions
Smooth fade on theme switch via CSS transitions on `body`:
```css
body {
  transition: background-color 0.3s ease, color 0.3s ease;
}
```

## Common Issues

### Flash on page navigation
**Cause:** Theme script runs too late (after render)
**Fix:** Use `is:inline` script in BaseHead, not in component

### Toggle not working after navigation
**Cause:** Event listeners not re-attached after Astro page swap
**Fix:** Listen for `astro:after-swap` event to re-setup toggle

## Modifying Theme Colors

Edit the `[data-theme='dark']` section in `src/styles/global.css`. Current palette:
- Background: `#2d2d2d` (lighter dark, not pure black)
- Text: `#e8e4de` (warm off-white)
- Links: `#c9a68a` (warm tan, adjusted for dark bg)
