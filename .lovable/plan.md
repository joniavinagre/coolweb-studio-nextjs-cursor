
# Plan: Reduce Spacing Across the Website

## Overview

This plan addresses the excessive spacing throughout the website by implementing tighter, more compact spacing similar to the Oak Harbor reference design. The goal is to reduce scrolling, improve content density, and create a more cohesive visual flow across all pages.

## Reference Analysis

The Oak Harbor reference shows:
- Very tight spacing between topper, headline, description, and buttons
- Content feels grouped together as a cohesive unit
- Minimal vertical padding on sections
- Hero section does NOT fill the entire viewport

---

## Part 1: Global CSS Changes

### File: `src/index.css`

Update the `.topper` utility class to reduce bottom margin:

| Current | New |
|---------|-----|
| `mb-4` | `mb-2` |

This ensures all toppers site closer to headlines.

---

## Part 2: Hero Section (Homepage)

### File: `src/components/sections/Hero.tsx`

| Element | Current | New |
|---------|---------|-----|
| Section height | `min-h-screen` | Remove (auto height) |
| Container padding | `pt-24 pb-32` | `pt-28 pb-16` |
| Grid gap | `gap-12` | `gap-8` |
| H1 margin | `mb-6` | `mb-4` |
| Description margin | `mb-8` | `mb-6` |
| Button gap | `gap-4` | `gap-3` |
| Trust indicators margin | `mt-12` | `mt-8` |
| Trust indicators internal gap | `gap-8` | `gap-6` |

---

## Part 3: Content Sections (Homepage)

### File: `src/components/sections/ServicesPreview.tsx`

| Element | Current | New |
|---------|---------|-----|
| Section padding | `py-24 md:py-32` | `py-16 md:py-20` |
| Header container margin | `mb-16` | `mb-10` |
| H2 margin | `mb-6` | `mb-4` |
| Cards grid gap | `gap-8` | `gap-6` |
| Card padding | `p-8` | `p-6` |
| Service icon margin | `mb-6` (in CSS) | `mb-4` |
| H3 margin | `mb-3` | `mb-2` |
| Description margin | `mb-6` | `mb-4` |
| CTA section margin | `mt-16` | `mt-10` |

### File: `src/components/sections/WhyChooseUs.tsx`

| Element | Current | New |
|---------|---------|-----|
| Section padding | `py-24 md:py-32` | `py-16 md:py-20` |
| Grid gap | `gap-12 lg:gap-16` | `gap-8 lg:gap-12` |
| H2 margin | `mb-4` | `mb-3` |
| Description margin | `mb-8` | `mb-6` |
| Features grid gap | `gap-6` | `gap-4` |
| Features grid margin | `mb-8` | `mb-6` |
| Feature item gap | `gap-3` | `gap-2` |
| Feature title margin | `mb-1` | Keep as-is (already tight) |

### File: `src/components/sections/PortfolioPreview.tsx`

| Element | Current | New |
|---------|---------|-----|
| Section padding | `py-24 md:py-32` | `py-16 md:py-20` |
| Header margin | `mb-16` | `mb-10` |
| Grid gap | `gap-8 lg:gap-12` | `gap-6 lg:gap-8` |
| Device mockup margin | `mb-6` | `mb-4` |
| H3 margin | `mb-2` | Keep as-is |
| Description margin | `mb-4` | `mb-3` |
| View All margin | `mt-16` | `mt-10` |

### File: `src/components/sections/PerformanceSection.tsx`

| Element | Current | New |
|---------|---------|-----|
| Section padding | `py-24 md:py-32` | `py-16 md:py-20` |
| Header row margin | `mb-12` | `mb-8` |
| Stats gap | `gap-6 lg:gap-10` | `gap-4 lg:gap-8` |
| Grid gap | `gap-12 lg:gap-16` | `gap-8 lg:gap-12` |
| Description margin | `mb-8` | `mb-6` |
| Benefits list spacing | `space-y-6` | `space-y-4` |
| Benefits list margin | `mb-8` | `mb-6` |
| Benefit item gap | `gap-4` | `gap-3` |

### File: `src/components/sections/PricingPreview.tsx`

| Element | Current | New |
|---------|---------|-----|
| Section padding | `py-24 md:py-32` | `py-16 md:py-20` |
| Header margin | `mb-16` | `mb-10` |
| Cards grid gap | `gap-8` | `gap-6` |
| Card header padding | `px-8 py-6` / `px-8 pt-8` | `px-6 py-4` / `px-6 pt-6` |
| Card body padding | `p-8` | `p-6` |
| Features list spacing | `space-y-2` | Keep as-is |
| Features list margin | `mb-6` | `mb-4` |
| Price margin | `mb-6` | `mb-4` |

### File: `src/components/sections/Testimonials.tsx`

| Element | Current | New |
|---------|---------|-----|
| Section padding | `py-24 md:py-32` | `py-16 md:py-20` |
| Header margin | `mb-16` | `mb-10` |
| H2 margin | `mb-6` | `mb-4` |
| Cards grid gap | `gap-8` | `gap-6` |
| Card padding | `p-8` | `p-6` |
| Quote icon margin | `mb-4` | `mb-3` |
| Content margin | `mb-6` | `mb-4` |
| Border padding | `pt-4` | `pt-3` |

### File: `src/components/sections/CTASection.tsx`

| Element | Current | New |
|---------|---------|-----|
| Section padding | `py-24 md:py-32` | `py-16 md:py-20` |
| H2 margin | `mb-6` | `mb-4` |
| Description margin | `mb-10` | `mb-6` |

---

## Part 4: Page-Level Hero Sections

All page hero sections need consistent tighter spacing:

### Files to Update
- `src/pages/About.tsx`
- `src/pages/Services.tsx`
- `src/pages/Contact.tsx`
- `src/pages/Portfolio.tsx`

| Element | Current | New |
|---------|---------|-----|
| Hero padding | `pt-32 pb-20` | `pt-28 pb-12` |
| H1 margin | `mb-6` | `mb-4` |
| Description margin (if present) | `mb-8` | `mb-6` |

---

## Part 5: Inner Page Sections

### File: `src/pages/About.tsx`

| Section | Element | Current | New |
|---------|---------|---------|-----|
| Story | Section padding | `py-20 md:py-32` | `py-16 md:py-20` |
| Story | Grid gap | `gap-16` | `gap-10` |
| Story | H2 margin | `mb-6` | `mb-4` |
| Story | Text spacing | `space-y-4` | `space-y-3` |
| Values | Section padding | `py-24 md:py-32` | `py-16 md:py-20` |
| Values | Header margin | `mb-16` | `mb-10` |
| Values | Cards grid gap | `gap-8` | `gap-6` |
| Values | Card padding | `p-6` | `p-5` |
| Values | Icon margin | `mb-4` | `mb-3` |
| Values | Title margin | `mb-2` | Keep as-is |
| Process | Section padding | `py-24 md:py-32` | `py-16 md:py-20` |
| Process | Header margin | `mb-16` | `mb-10` |
| Process | Cards grid gap | `gap-8` | `gap-6` |
| Process | Step number margin | `mb-4` | `mb-2` |
| CTA | Section padding | `py-20` | `py-16` |
| CTA | H2 margin | `mb-6` | `mb-4` |
| CTA | Description margin | `mb-8` | `mb-6` |

### File: `src/pages/Services.tsx`

| Section | Element | Current | New |
|---------|---------|---------|-----|
| Hero | Button margin | `mb-8` | `mb-6` |
| Categories | Section padding | `py-20 md:py-28` | `py-14 md:py-18` |
| Categories | Header margin | `mb-12` | `mb-8` |
| Categories | Icon margin | `mb-6` | `mb-4` |
| Categories | H2 margin | `mb-4` | `mb-3` |
| Cards | Padding | `p-8` | `p-6` |
| Cards | Title margin | `mb-6` | `mb-4` |
| Cards | Features spacing | `space-y-4` | `space-y-3` |
| Cards | Features margin | `mb-8` | `mb-6` |
| Cards | Border padding | `pt-6` | `pt-4` |
| Cards | Price margin | `mb-4` | `mb-3` |
| Bottom CTA | Section padding | `py-24` | `py-16` |
| Bottom CTA | H2 margin | `mb-6` | `mb-4` |
| Bottom CTA | Description margin | `mb-8` | `mb-6` |

### File: `src/pages/Contact.tsx`

| Section | Element | Current | New |
|---------|---------|---------|-----|
| Contact | Section padding | `py-24 md:py-32` | `py-16 md:py-20` |
| Contact | Grid gap | `gap-16` | `gap-10` |
| Contact | H2 margin | `mb-6` | `mb-4` |
| Form | Field spacing | `space-y-6` | `space-y-4` |
| Form | Grid gap | `gap-6` | `gap-4` |
| Cards | Gap | `gap-4` | `gap-3` |
| Cards | Padding | `p-4` | `p-3` |
| Calendly | Padding | `p-6` | `p-5` |
| Calendly | Header margin | `mb-4` | `mb-3` |

### File: `src/pages/Portfolio.tsx`

| Section | Element | Current | New |
|---------|---------|---------|-----|
| Filter section | Padding | `py-24` | `py-16` |
| Filter | Margin | `mb-12` | `mb-8` |
| Projects grid | Gap | `gap-8` | `gap-6` |
| CTA section | Padding | `py-20` | `py-14` |
| CTA | H2 margin | `mb-6` | `mb-4` |
| CTA | Description margin | `mb-8` | `mb-6` |

---

## Part 6: CSS Utility Updates

### File: `src/index.css`

Update global utility classes for service icons:

| Class | Current Property | New Value |
|-------|-----------------|-----------|
| `.service-icon` | `mb-6` | `mb-4` |
| `.service-icon-swipe` | `mb-6` | `mb-4` |

---

## Summary of Changes

| File | Changes |
|------|---------|
| `src/index.css` | Reduce `.topper` margin, reduce service icon margins |
| `src/components/sections/Hero.tsx` | Remove min-h-screen, reduce all spacing |
| `src/components/sections/ServicesPreview.tsx` | Reduce section/card/grid spacing |
| `src/components/sections/WhyChooseUs.tsx` | Reduce section/grid/feature spacing |
| `src/components/sections/PortfolioPreview.tsx` | Reduce section/grid/card spacing |
| `src/components/sections/PerformanceSection.tsx` | Reduce section/list/grid spacing |
| `src/components/sections/PricingPreview.tsx` | Reduce section/card spacing |
| `src/components/sections/Testimonials.tsx` | Reduce section/card spacing |
| `src/components/sections/CTASection.tsx` | Reduce section/content spacing |
| `src/pages/About.tsx` | Reduce all section spacing |
| `src/pages/Services.tsx` | Reduce all section spacing |
| `src/pages/Contact.tsx` | Reduce form/section spacing |
| `src/pages/Portfolio.tsx` | Reduce filter/CTA spacing |

---

## Expected Results

After implementing these changes:
- Content will feel more grouped and cohesive
- Less scrolling required to view page content
- Hero sections will no longer fill entire viewport
- Sections will flow into each other more naturally
- Mobile experience will be significantly improved with less scrolling
- Overall look will match the compact, professional feel of the Oak Harbor reference
