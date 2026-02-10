

# Plan: Multiple UI Fixes and Updates

## 1. Performance Section Stats - Fairweather Font

Add `font-display` class to the stat values and labels in `PerformanceSection.tsx` (lines 64-71) to use Fairweather font.

## 2. Pricing Cards Alignment and Fixes

### Card Structure Consistency (PricingPreview.tsx)

The misalignment is caused by the featured card having different header padding (`px-6 py-4`) vs non-featured (`px-6 pt-6`). Unify all cards to use the same structure:
- All cards: same header padding (`px-6 pt-6`)
- Move features list into the flex-grow area so price and button are pushed to the bottom consistently
- Use `mt-auto` on the price+button container to pin them to the bottom

### Euro Symbol Position

Update pricing data (lines 21-22, 42, 62-63):
- `"€1,000"` becomes `"1.000€"`
- `"+€25/mo hosting"` becomes `"+25€/mo hosting"`
- `"€100"` becomes `"100€"`
- `"/month"` stays as-is
- `"€25/month Hosting"` becomes `"25€/month Hosting"` (in features)

### Border Radius

Change `rounded-2xl` to `rounded-xl` on the card containers (line 253) for medium radius.

## 3. Portfolio Preview - Move "View All Projects" Button

Move the "View All Projects" button from below the grid (lines 112-128) to below the right-side description text (after line 68), inside the right column of the header.

## 4. Services Page - Remove Hero "Get Started" Button

Delete lines 115-120 in `Services.tsx` (the Button+Link in the hero section).

## 5. Portfolio Images - Replace with Uploaded Images

Copy the 3 uploaded images to `src/assets/`:
- `user-uploads://1-webp.webp` to `src/assets/portfolio-gaston.webp`
- `user-uploads://7-webp.webp` to `src/assets/portfolio-4dhues.webp`
- `user-uploads://3-webp.webp` to `src/assets/portfolio-briet.webp`

Update `portfolioProjects.ts` to import and use these images for the first 3 projects (replacing the Unsplash URLs on lines 85, 137, 189).

## Technical Details

### Files to Modify

| File | Changes |
|------|---------|
| `src/components/sections/PerformanceSection.tsx` | Add `font-display` to stat value and label divs |
| `src/components/sections/PricingPreview.tsx` | Unify card structure for alignment, euro symbol position, `rounded-xl` border radius, push price+button to bottom with `mt-auto` |
| `src/components/sections/PortfolioPreview.tsx` | Move "View All Projects" button under description text |
| `src/pages/Services.tsx` | Remove hero "Get Started" button |
| `src/data/portfolioProjects.ts` | Import and use new portfolio images, fix euro symbol positions |

### Pricing Card Alignment Fix Detail

All 3 cards will share this structure:
```text
+------------------+
| Title (h3)       |  <- same padding for all
| Description      |
+------------------+
| Features (grow)  |  <- flex-grow pushes rest down
|                  |
| Price            |  <- mt-auto pins to bottom
| Button           |
+------------------+
```

