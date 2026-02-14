

## Two Fixes

### 1. Portfolio Headline Spacing

The Portfolio section headline has extra line spacing compared to all other headlines on the site.

**Why it happens**: The `section-title` CSS class already applies `leading-none md:leading-tight` (tight on mobile, slightly relaxed on desktop). But the Portfolio headline explicitly overrides this with `leading-tight md:leading-tight`, which loosens the mobile spacing from `leading-none` (line-height: 1) to `leading-tight` (line-height: 1.25). That 25% difference is very visible on large uppercase text.

**Fix**: In `src/components/sections/PortfolioPreview.tsx` (line 34), change the `h2` className from `leading-tight md:leading-tight` to `leading-none md:leading-tight` so it matches every other headline on the site.

### 2. Language Dropdown Purple Hover

The language selector dropdown items turn purple on hover/focus.

**Why it happens**: The default `DropdownMenuItem` component uses `focus:bg-accent`, and the `--accent` CSS variable is set to purple (`263 70% 50%`). The `LanguageSelector` component does not override this.

**Fix**: In `src/components/LanguageSelector.tsx`, add a hover/focus override class to each `DropdownMenuItem` so the hover background is light blue instead of purple: `hover:bg-primary/20 focus:bg-primary/20`.

### Files Changed

| File | Change |
|------|--------|
| `src/components/sections/PortfolioPreview.tsx` | Line 34: `leading-tight` to `leading-none` |
| `src/components/LanguageSelector.tsx` | Add `hover:bg-primary/20 focus:bg-primary/20` to both `DropdownMenuItem` elements |

