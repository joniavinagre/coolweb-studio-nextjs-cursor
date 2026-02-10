
# Plan: Replicate Home Page Pricing Cards to Services Page

## Overview

Replace the current Web Development section in the Services page with the same 3-card layout (Lump Sum, Monthly, Custom) from the Home page's `PricingPreview` component. Also update the section header to be left-aligned with a "Get Started" button on the right, matching the screenshot reference.

## Changes

### File: `src/pages/Services.tsx`

**1. Replace the Web Development category data** (lines 20-36)

Replace the current `web-development` entry in `serviceCategories` with the same pricing tiers used in `PricingPreview.tsx` (Lump Sum, Monthly, Custom). This requires changing the data structure to match the `PricingPreview` format with `included` boolean per feature, `description`, `featured`, and `cta` fields.

Update the `PricingTier` and `ServiceCategory` interfaces to support:
- `features` as `{ text: string; included: boolean }[]` instead of `string[]`
- `description` on each tier
- `featured` boolean
- `cta` string

**2. Update the Web Development section header layout** (lines 128-146)

For the `web-development` category only, change the header from centered to a flex row layout:
- Left side: title (left-aligned, no icon box) + description
- Right side: "Get Started" button aligned to the bottom

For other categories (Google Business, Local SEO), keep the current centered layout.

**3. Update the Web Development card rendering** (lines 148-200)

For the `web-development` category, render cards using the same structure as `PricingPreview`:
- 3-column grid with `rounded-xl`
- Featured card (Monthly) gets `bg-navy border-primary ring-2 ring-primary/20`
- Features show Check/X icons based on `included` boolean
- Price and button pinned to bottom with `mt-auto`
- Custom card uses "Reach Out" CTA with outline style

For other categories, keep the current simple card rendering.

### Detailed Card Structure (matching PricingPreview)

```
+------------------+
| Title (h3)       |  px-6 pt-6
| Description      |
+------------------+
| Features (grow)  |  p-6, flex-grow
|  Check/X icons   |
|                  |
| Price            |  mt-auto
| Button           |
+------------------+
```

### Data for Web Development Cards

| Card | Price | Note | Featured | CTA |
|------|-------|------|----------|-----|
| Lump Sum | 1.000€ | +25€/mo hosting | No | Get Started |
| Monthly | 100€ | /month | Yes (navy bg) | Get Started |
| Custom | Let's Talk! | - | No | Reach Out |

Features match exactly what's in `PricingPreview.tsx`.

## Summary

| File | Changes |
|------|---------|
| `src/pages/Services.tsx` | Update interfaces, replace web-dev data with 3-tier pricing, left-align header with button for web-dev section, render cards with Check/X icons and featured styling |
