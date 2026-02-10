
# Plan: Add Portfolio-style CTA section to Services and Home pages

## Overview

Replace the navy-background CTA sections on the Services page and Home page with the same light-background CTA pattern used on the Portfolio and About pages. This includes the `bg-muted/30` background, `section-title` headline, subtitle, navy button, and proper spacing so the footer's wave divider transitions smoothly.

## Changes

### 1. Services page (`src/pages/Services.tsx`)

**Lines 280-304**: Replace the current navy `bg-navy` CTA section with the Portfolio-style CTA:
- `bg-muted/30` background
- `section-title` headline: "Ready To **Get Started?**"
- Subtitle: "Let's create something amazing together. Book a free consultation to discuss your project."
- Navy button with `btn-swipe-navy` class
- Button text: "Book Free Consultation"

### 2. Home page (`src/pages/Index.tsx`)

**Line 22**: Replace `<CTASection />` with an inline Portfolio-style CTA section (same pattern as above):
- `bg-muted/30` background
- `section-title` headline: "Ready To Get The Site **You Always Wanted?**"
- Subtitle: "Let's create something amazing together. Book a free consultation to discuss your project."
- Navy button with `btn-swipe-navy`, text: "Get Started Today"

Remove the `CTASection` import since it will no longer be used on the Home page.

### 3. Optional cleanup: `src/components/sections/CTASection.tsx`

Check if `CTASection` is still imported anywhere else. If not, it can be deleted. If it is still used elsewhere, leave it.

## Result

All four sub-pages (Home, Services, Portfolio, About) will end with a consistent light-background CTA section that flows naturally into the footer's navy wave divider.
