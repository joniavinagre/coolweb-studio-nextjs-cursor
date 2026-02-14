

## Four Fixes

### 1. Portfolio Headline Spacing (Desktop/Tablet) -- Still Happening

**Root cause**: The `section-title` CSS class (in `index.css` line 191) applies `md:leading-tight` via `@apply`. The h2 in `PortfolioPreview.tsx` only has `leading-none`, which works on mobile but gets overridden at the `md:` breakpoint by `section-title`'s `md:leading-tight` (line-height 1.25). To win at the md breakpoint, we need an explicit `md:leading-none`.

**Fix**: In `src/components/sections/PortfolioPreview.tsx` line 34, change `leading-none` to `leading-none md:leading-none`.

---

### 2. Language Dropdown Hover Color

The current `hover:bg-primary/20` produces a very faint light blue. The user wants the full solid primary blue.

**Fix**: In `src/components/LanguageSelector.tsx`, change both `DropdownMenuItem` hover/focus classes from `hover:bg-primary/20 focus:bg-primary/20` to `hover:!bg-primary hover:!text-primary-foreground focus:!bg-primary focus:!text-primary-foreground` so the background becomes solid blue and text turns white for contrast.

---

### 3. Remove Logo Hover Animation

The logo in the header has `group-hover:scale-105 transition-transform` which causes a scale-up animation on hover.

**Fix**: In `src/components/layout/Header.tsx` line 59-64, remove the `group` class from the Link wrapper and remove `group-hover:scale-105 transition-transform` from the img element.

---

### 4. Mobile Spacing Between Headline and Description (Portfolio Section)

On mobile, the Portfolio section splits the headline and description into a two-column grid that stacks vertically. The grid's `gap-8` creates excessive space between the headline block and the description block on mobile. In comparison, other sections (like the Pricing section) keep headline and description closer together.

**Fix**: In `src/components/sections/PortfolioPreview.tsx` line 26, change `gap-8 lg:gap-12` to `gap-4 lg:gap-12` to tighten the mobile spacing.

---

### Files Changed

| File | Change |
|------|--------|
| `src/components/sections/PortfolioPreview.tsx` | Line 34: Add `md:leading-none` to override section-title's md breakpoint |
| `src/components/sections/PortfolioPreview.tsx` | Line 26: Change `gap-8` to `gap-4` for tighter mobile spacing |
| `src/components/LanguageSelector.tsx` | Change dropdown item hover to solid primary blue with white text |
| `src/components/layout/Header.tsx` | Remove hover scale animation from logo |

