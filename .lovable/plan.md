
# Plan: Unify Google Business & Local SEO Sections with Web Development Layout

## Overview

Update the Google Business Profile and Local SEO sections to use the same card structure and header layout as the Web Development section. The only difference: 2 cards instead of 3, same card width, centered in the grid.

## Changes

### File: `src/pages/Services.tsx`

**1. Convert feature data from `string[]` to `PricingFeature[]`**

Update the Google Business and Local SEO tier data (lines 133-159) so features use `{ text, included: true }` format instead of plain strings. Add `description` and `cta` fields to each tier.

**2. Unify the header layout for all sections**

Remove the `category.id === "web-development"` conditional for the header (lines 217-257). All sections will use the same left-aligned flex row layout with title, description on the left and "Get Started" button on the right.

**3. Unify the card rendering for all sections**

Remove the `category.id === "web-development"` conditional for card rendering (lines 260-323). All sections will use the same card structure:
- Header: `px-6 pt-6` with title and description
- Body: `p-6 flex-col flex-grow` with Check icons for features, price pinned to bottom with `mt-auto`, and full-width CTA button
- `priceNote` for web-dev tiers, `priceLabel` converted to `priceNote` for other tiers

**4. Grid layout: 3 cols for web-dev, 2 cols centered for others**

Use `md:grid-cols-3` for web-development and `md:grid-cols-3` with only 2 cards for others (cards will naturally be same width and left-aligned in a 3-col grid). Alternatively, use `md:grid-cols-2 max-w-[calc(66.666%+0.75rem)] mx-auto` to center 2 cards at the same width as 3-col cards. The simplest approach: keep all grids as `md:grid-cols-3` and the 2 cards will just occupy the first 2 columns -- but that won't center them.

Best approach: Use `md:grid-cols-3` for 3-tier sections, and for 2-tier sections use a wrapper with `flex justify-center gap-6` where each card has the same `w-full md:w-[calc(33.333%-1rem)]` width, keeping them identical in size to the 3-card layout and centered.

## Technical Details

### Header (all sections, same layout)
```
flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10
  Left: section-title + description (left-aligned)
  Right: Get Started button (navy, btn-swipe-navy)
```

### Card structure (all sections, identical)
```
rounded-xl border flex flex-col h-full overflow-hidden
  px-6 pt-6: tier name (h3) + description
  p-6 flex-col flex-grow:
    features with Check icons (flex-grow)
    price + priceNote (mt-auto)
    CTA button (w-full)
```

### Grid for 2-card sections
```
flex flex-col md:flex-row justify-center gap-6
  Each card: w-full md:w-[calc(33.333%-0.5rem)]
```

This ensures the 2 cards are the exact same width as the 3-card grid columns and horizontally centered.

### Data updates

Google Business tiers get `description` and `cta: "Get Started"`, features converted to `PricingFeature[]` format. Same for Local SEO tiers.
