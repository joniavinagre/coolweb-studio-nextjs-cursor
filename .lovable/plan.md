

# Plan: Restructure About Us Page to Match Home Page Design

## Overview

Completely restructure the About Us page to follow the same design language as the Home page: navy hero with left-aligned text, consistent topper/headline styling, proper button classes, and section patterns from existing Home components. Inspired by the Oak Harbor about page layout (hero, founder story with image, features with check icons, numbered process steps, CTA).

## Layout Structure

The page will follow this section flow, matching Oak Harbor's about page and your Home page design system:

1. **Hero** - Navy background, left-aligned topper + h1 + description + CTA button (matches Home Hero pattern)
2. **Story Section** - Two-column: left = image with floating card, right = topper + headline + paragraphs (mirrors WhyChooseUs layout)
3. **Why Choose Us / Values** - Two-column: left = topper + headline + 2x3 grid of CheckCircle features, right = stats card (reuses WhyChooseUs feature pattern)
4. **Process Section** - Full-width navy background, 4-column numbered steps (matches PerformanceSection dark styling)
5. **CTA Section** - Reuse the existing CTASection component directly

## Detailed Changes to `src/pages/About.tsx`

### 1. Hero Section
**Current**: `gradient-hero` bg, centered text, `gradient-text` span, no CTA button, wave divider
**New**: `bg-navy` with `bg-hero-pattern opacity-20` overlay, left-aligned text in a 2-column grid (text left, decorative right on lg), `topper` class for "About Us", `text-primary` for accent span instead of `gradient-text`, body text as `font-body text-base text-primary-foreground`, "Get In Touch" button with `btn-swipe-primary`, wave divider kept

### 2. Story Section (replaces current "Our Story")
**Current**: `inline-block px-4 py-1.5 rounded-full bg-primary/10` topper pill, `gradient-text` span, `rounded-3xl` cards, `bg-muted/50` stat boxes
**New**: Two-column layout mirroring WhyChooseUs:
- Left column: image with `aspect-[4/5]` and floating card overlay (same as WhyChooseUs), using a professional stock image
- Right column: `.topper` class for "Our Story", `text-4xl md:text-5xl font-extrabold uppercase tracking-wide` headline with `text-primary` accent span, `font-body text-sm text-card-foreground` paragraphs
- Remove the stats grid card entirely from this section (stats will move to section 3)

### 3. Values / Why Us Section (replaces current "Values" 4-card grid)
**Current**: Centered topper, 4 icon cards with rounded-2xl, bg-card
**New**: `bg-muted/30` background, two-column layout:
- Left column: `.topper` for "Why Us", headline with `text-primary` accent, 2x3 grid of features using `CheckCircle` icon + title (extrabold uppercase) + description (font-body text-xs), "Schedule A Call" button with `btn-swipe-navy`
- Right column: Stats in a bordered card with 2x2 grid showing 50+ Clients, 100+ Projects, 5+ Years, 100% Satisfaction using `font-extrabold text-primary text-5xl` for values (matching PerformanceSection stat style, not gradient-text)
- Values data: keep Results-Driven, Client-Focused, Innovation, Passion but restructure as CheckCircle feature items (no icon boxes)

### 4. Process Section (keep structure, update styling)
**Current**: `bg-background`, centered topper, 4 cards with `bg-card rounded-2xl shadow-lg border`
**New**: `bg-navy` dark background (like PerformanceSection), `bg-hero-pattern opacity-10` overlay:
- Left-aligned `.topper` (text shows as primary on dark bg) and headline in `text-primary-foreground` with `text-primary` accent
- 4 step cards rendered as `bg-card/10 backdrop-blur-sm border-primary-foreground/10 rounded-xl` (glass-style on dark bg)
- Step number in `text-primary text-5xl font-extrabold`, title in `text-primary-foreground font-extrabold uppercase`, description in `text-primary-foreground/70 font-body text-xs`

### 5. CTA Section
**Current**: Inline CTA with `bg-navy`
**New**: Import and use the existing `CTASection` component directly (same as Home page does), removing the duplicated inline CTA code

## Summary of Style Alignments

| Element | Current About | New (matches Home) |
|---------|--------------|-------------------|
| Hero bg | `gradient-hero` | `bg-navy` + pattern |
| Hero text | Centered | Left-aligned |
| Hero accent | `gradient-text` | `text-primary` |
| Toppers | Mixed (pill, centered) | `.topper` class everywhere |
| Headlines | Mixed weights | `font-extrabold uppercase tracking-wide` |
| Body text | `text-lg`, `text-muted-foreground` | `font-body text-sm text-card-foreground` |
| Buttons | `btn-swipe-primary` only | `btn-swipe-primary` + `btn-swipe-navy` |
| Cards | `rounded-3xl`, `rounded-2xl` | `rounded-xl` |
| Stats | `gradient-text` | `text-primary font-extrabold` |
| Dark sections | None (except CTA) | Process section in navy |
| CTA | Inline code | Reuse `CTASection` component |

## File Changes

| File | Action |
|------|--------|
| `src/pages/About.tsx` | Complete rewrite of JSX and data structures |

