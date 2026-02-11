

## Fix Font Flash (FOUT) and Logo Issues

### Problem 1: Font flash on page refresh

**Root cause:** Two things are causing the brief flash of fallback fonts:

1. **Poppins is loaded via a CSS `@import` inside `src/index.css`** (line 6). This means the browser only discovers and starts downloading Poppins *after* it has downloaded and parsed the CSS file, which itself is loaded via JavaScript. This creates a waterfall delay where fallback fonts render first.

2. **Fairweather fonts are preloaded in `index.html`, but only 3 of the 9 weights.** The ExtraBold (800) weight -- used heavily for headings, buttons, nav links, and toppers -- is NOT preloaded. So the most visually prominent font weight still flashes.

**Fix:**
- Move the Poppins Google Font loading from the CSS `@import` to a `<link>` tag in `index.html` with `rel="preload"` so the browser discovers it immediately.
- Add preload for the ExtraBold weight of Fairweather (the most commonly used weight).
- Add `<link rel="preconnect">` for Google Fonts to speed up the connection.

### Problem 2: Old logo showing in Lovable preview

**Root cause:** Both Header and Footer correctly import from `src/assets/coolweb-logo-full.webp` using ES6 imports. The old logo appearing is likely a caching issue in the preview environment. To force cache-busting, we can re-copy the correct logo file over the asset to ensure Vite generates a new hashed filename in the build.

**Fix:**
- Re-copy the current correct logo to `src/assets/coolweb-logo-full.webp` to force a new build hash.

---

### Technical Changes

**`index.html`** -- Add font preloading and preconnect:
- Add `<link rel="preconnect" href="https://fonts.googleapis.com">` and `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`
- Add `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap">` directly in the `<head>`
- Add preload for `Fairweather-ExtraBold.otf`

**`src/index.css`** -- Remove the CSS `@import` for Poppins (line 6), since it will now be loaded from `index.html` directly.

**`src/assets/coolweb-logo-full.webp`** -- Re-copy the current uploaded logo to bust the cache.

