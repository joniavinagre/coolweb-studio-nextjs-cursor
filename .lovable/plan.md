

# Plan: Typography and Styling Fixes

## Overview

This plan addresses four main issues:
1. Topper font size/weight conflict and hero section topper styling
2. Monthly pricing card color scheme (matching reference)
3. H2 headline sizing across all pages
4. Button font weight to Extrabold

---

## Issue 1: Topper Font Size Not Appearing as XL/Extrabold

### Root Cause

The `.topper` utility class in `src/index.css` defines `text-sm` at line 182, which conflicts with inline `text-xl font-extrabold` classes on components. Additionally, the base layer at line 171-174 only sets `font-weight: 700` (Bold), not 800 (Extrabold).

### Solution

Update the `.topper` class to use `text-xl` and `font-weight: 800` (Extrabold) instead of `text-sm` and 700. This ensures all toppers display at the intended size and weight without needing inline overrides.

### File: `src/index.css`

**Lines 171-183 - Modify:**
```css
.topper {
  font-family: 'Fairweather', system-ui, sans-serif;
  font-weight: 800;
}

/* ... */

.topper {
  @apply text-xl uppercase tracking-[0.3em] text-primary mb-4;
  font-weight: 800;
}
```

**Then remove inline `text-xl font-extrabold` from all section components** since the `.topper` class will handle it.

### Files to Update for Hero Section Toppers

Hero sections need explicit topper styling. Update the following files to use `topper` class or explicit Fairweather font:

| File | Line | Change |
|------|------|--------|
| `src/components/sections/Hero.tsx` | 26 | Add `topper` class or `font-display` to ensure Fairweather |
| `src/pages/Services.tsx` | 107 | Add `topper` class |
| `src/pages/Contact.tsx` | 87 | Add `topper` class |
| `src/pages/Portfolio.tsx` | 36 | Add `topper` class |
| `src/pages/About.tsx` | 78-79 | Update to use `topper` class |

---

## Issue 2: Monthly Pricing Card Color Scheme

### Reference Design Analysis

Based on the uploaded reference image:
- Background: Dark navy (entire card)
- Title ("MONTHLY"): White, italic styling
- All text (features, price): White
- Checkmarks: Light blue (primary color)
- Button: Light blue background with white text

### Current State

The Monthly card has a navy header but white card body below. Need full dark background.

### Solution

Update the featured card in `PricingPreview.tsx` to:
- Apply `bg-navy` to entire card
- Change all text colors to white (`text-primary-foreground`)
- Keep checkmarks as `text-primary` (light blue)
- Style the button as light blue

### File: `src/components/sections/PricingPreview.tsx`

**Lines 151-217 - Modify featured card styling:**
- For featured cards: entire card background is `bg-navy`
- Header text: `text-primary-foreground` (white)
- Feature text: `text-primary-foreground` (white)
- Price: `text-primary-foreground` (white)
- Checkmarks: `text-primary` (light blue)
- Button: `bg-primary text-primary-foreground`

---

## Issue 3: H2 Headlines - 5XL on Desktop/Tablet, Extrabold on All

### Current State

H2 headlines use `text-4xl md:text-5xl lg:text-6xl font-bold` - size varies but weight is only Bold.

### Target State

- Desktop/Tablet (md and up): `text-5xl font-extrabold`
- Mobile: Keep current size but change to `font-extrabold`

### Solution

Update the `.section-title` utility class to use `font-extrabold` and ensure proper responsive sizing. Also update individual H2s that don't use `.section-title`.

### File: `src/index.css`

**Line 186-188 - Modify:**
```css
.section-title {
  @apply text-4xl md:text-5xl font-extrabold uppercase tracking-wide text-foreground leading-tight;
}
```

### Files Requiring H2 Updates

Many H2s don't use `.section-title` and need individual updates:

| File | Line | Current | Update To |
|------|------|---------|-----------|
| `src/pages/About.tsx` | 109, 230 | `font-bold` | `font-extrabold` + add `md:text-5xl` |
| `src/pages/Services.tsx` | 149, 225 | `font-bold` | `font-extrabold` + ensure `md:text-5xl` |
| `src/pages/Contact.tsx` | 114, 214 | `font-bold` | `font-extrabold md:text-5xl` |
| `src/pages/CaseStudy.tsx` | 222 | `font-bold` | `font-extrabold md:text-5xl` |
| `src/components/sections/CTASection.tsx` | 21 | `font-bold` | `font-extrabold` |
| `src/components/sections/PerformanceSection.tsx` | 46 | `font-bold` | `font-extrabold` |
| `src/components/sections/WhyChooseUs.tsx` | 86 | `font-bold` | `font-extrabold md:text-5xl` |

---

## Issue 4: Button Font Weight to Extrabold (Except Nav)

### Current State

Buttons use `font-semibold` (600) or `font-bold` (700) in various places.

### Target State

All buttons should use `font-extrabold` (800) **except** navigation links in header and footer.

### Solution

1. Update CSS base layer to set `font-weight: 800` for buttons
2. Exclude nav-specific classes from this rule
3. Update individual Button components that have `font-semibold` or `font-bold` inline

### File: `src/index.css`

**Lines 166-169 - Modify:**
```css
button, .btn-swipe-primary, .btn-swipe-navy, .btn-swipe-card {
  font-family: 'Fairweather', system-ui, sans-serif;
  font-weight: 800;
}
```

Note: This excludes `nav a` and `.nav-link-fixed` from the extrabold rule.

### Component Updates

Update all Button components to use `font-extrabold` instead of `font-semibold` or `font-bold`:

| File | Lines to Update |
|------|-----------------|
| `src/components/sections/Hero.tsx` | 41, 47 |
| `src/components/sections/ServicesPreview.tsx` | 126 |
| `src/components/sections/WhyChooseUs.tsx` | 112 |
| `src/components/sections/PerformanceSection.tsx` | 120 |
| `src/components/sections/PricingPreview.tsx` | 138, 190, 210 |
| `src/components/sections/CTASection.tsx` | 32 |
| `src/pages/About.tsx` | 236 |
| `src/pages/Services.tsx` | 117, 183, 201, 231 |
| `src/pages/Contact.tsx` | 190, 271 |
| `src/pages/Portfolio.tsx` | 120 |
| `src/pages/CaseStudy.tsx` | 46, 230 |
| `src/components/layout/Header.tsx` | Keep as-is (nav buttons excluded) |

---

## Summary of Changes

| File | Type of Change |
|------|----------------|
| `src/index.css` | Update `.topper` to text-xl/extrabold, `.section-title` to font-extrabold, button base styles to font-weight 800 |
| `src/components/sections/Hero.tsx` | Ensure topper uses correct class, update button font weight |
| `src/components/sections/ServicesPreview.tsx` | Remove inline topper overrides, update button |
| `src/components/sections/WhyChooseUs.tsx` | Update H2 and button |
| `src/components/sections/PortfolioPreview.tsx` | Update button |
| `src/components/sections/PerformanceSection.tsx` | Update H2 and button |
| `src/components/sections/PricingPreview.tsx` | Featured card full dark theme, update buttons |
| `src/components/sections/Testimonials.tsx` | Remove inline topper overrides |
| `src/components/sections/CTASection.tsx` | Update H2 and button |
| `src/pages/About.tsx` | Update hero topper, H2s, and buttons |
| `src/pages/Services.tsx` | Update hero topper, H2s, and buttons |
| `src/pages/Contact.tsx` | Update hero topper, H2s, and buttons |
| `src/pages/Portfolio.tsx` | Update hero topper and button |
| `src/pages/CaseStudy.tsx` | Update H2s and buttons |

---

## Technical Notes

### Font Weight Values
- `font-bold` = 700 (current button weight)
- `font-extrabold` = 800 (target button weight)

### Tailwind Responsive Breakpoints
- `md:` applies to screens 768px and wider (tablet + desktop)
- No prefix applies to mobile (default)

### Header/Footer Navigation
The header and footer navigation links should remain at their current font weight since they are excluded from the button extrabold rule.

