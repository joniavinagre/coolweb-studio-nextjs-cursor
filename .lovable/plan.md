

# Plan: Multiple UI Refinements

## 1. Portfolio Preview - Remove Mac Frames

**File: `src/components/sections/PortfolioPreview.tsx`** (lines 85-99)

Remove the laptop frame (dark gray bars, colored dots, bottom bar, stand) and replace with a simple rounded image container:

```
<div className="relative mb-4">
  <div className="rounded-xl overflow-hidden aspect-[16/10]">
    <img ... />
  </div>
</div>
```

Remove: `bg-slate-800` frame, colored dots, `bg-slate-700` bar, `bg-slate-600` stand.

## 2. Pricing Card Price Note Size

**File: `src/components/sections/PricingPreview.tsx`** (line 296)

Change the `priceNote` text from `text-sm` to `text-xs`.

## 3. Global Card Border Radius

**File: `src/index.css`**

Add a global utility rule in the base layer to set all cards to `rounded-xl`:

```css
.rounded-2xl {
  border-radius: 0.75rem; /* override to match rounded-xl */
}
```

Alternatively, update individual card components. Files with `rounded-2xl` on cards:
- `src/components/sections/PerformanceSection.tsx` line 141 - change to `rounded-xl`
- `src/components/portfolio/ProjectCard.tsx` line 33 - change to `rounded-xl`

These are the only components using `rounded-2xl` on cards. Other cards already use `rounded-xl`.

## 4. Performance Section Stats Updates

**File: `src/components/sections/PerformanceSection.tsx`**

**Font size increase** (line 65): Change stat values from `text-4xl md:text-5xl` to `text-5xl md:text-6xl` and change `font-bold` to `font-extrabold`.

**Font size increase for labels** (line 68): Change from `text-xs` to `text-sm` and add `font-extrabold`.

**Line breaks in labels** (lines 15-24): Update the stat labels to use line breaks:

```js
const stats = [{
  value: "100%",
  label: "Satisfaction\nGuaranteed"
}, {
  value: "100",
  label: "Page Speed\nScores"
}, {
  value: "5/5",
  label: "Google\nReviews"
}];
```

Then add `whitespace-pre-line` to the label div (line 68).

**Alignment** (line 32): Change grid alignment from `items-start` to `items-center` so the stats row is vertically centered with the headline.

## 5. Footer Nav and Contact Styling

**File: `src/components/layout/Footer.tsx`**

**Nav links** (lines 33-39): Change from horizontal flex (`flex-wrap gap-x-6 gap-y-2`) to vertical stack (`flex flex-col gap-2`). Change link size from `text-base` to `text-sm`. Change color from `text-primary-foreground/60` to `text-primary-foreground`.

**Contact info** (lines 46-57): Change text size from `text-base` to `text-sm`. Change color from `text-primary-foreground/60` to `text-primary-foreground`.

## 6. Portfolio Page - Remove Filters

**File: `src/pages/Portfolio.tsx`**

- Remove the filter tabs (lines 53-64): Delete the entire filter buttons `motion.div` block.
- Remove the `activeCategory` state and `filteredProjects` logic (lines 21-22). Just use `projects` directly.
- Remove `categories` import (line 8).

**File: `src/components/portfolio/ProjectCard.tsx`**

- Remove the category badge (lines 47-51): Delete the `span` with the category badge overlay.
- Remove the `categoryColors` map (lines 11-20) since it's no longer needed.

## 7. Hero Section Bottom Spacing (Desktop/Tablet Only)

Add more bottom padding on `md:` breakpoint to all hero sections:

| File | Current | New |
|------|---------|-----|
| `src/components/sections/Hero.tsx` line 13 | `pb-16` | `pb-16 md:pb-24` |
| `src/pages/About.tsx` line 70 | `pb-12` | `pb-12 md:pb-20` |
| `src/pages/Services.tsx` line 97 | `pb-12` | `pb-12 md:pb-20` |
| `src/pages/Contact.tsx` line 74 | `pb-12` | `pb-12 md:pb-20` |
| `src/pages/Portfolio.tsx` line 25 | `pb-12` | `pb-12 md:pb-20` |

## Summary of Files to Modify

| File | Changes |
|------|---------|
| `src/components/sections/PortfolioPreview.tsx` | Remove Mac frame, show plain images |
| `src/components/sections/PricingPreview.tsx` | priceNote text-xs |
| `src/components/sections/PerformanceSection.tsx` | Stats: bigger font, extrabold, line breaks, centered alignment; card rounded-xl |
| `src/components/portfolio/ProjectCard.tsx` | Remove category badge + colors; rounded-xl |
| `src/components/layout/Footer.tsx` | Vertical nav links, text-sm, white color for nav and contact |
| `src/pages/Portfolio.tsx` | Remove filter tabs and state |
| `src/components/sections/Hero.tsx` | Add md:pb-24 |
| `src/pages/About.tsx` | Add md:pb-20 |
| `src/pages/Services.tsx` | Add md:pb-20 |
| `src/pages/Contact.tsx` | Add md:pb-20 |
| `src/pages/Portfolio.tsx` | Add md:pb-20 |

