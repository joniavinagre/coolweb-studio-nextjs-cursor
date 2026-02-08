

# Plan: Styling Refinements Across Homepage

## Overview

This plan addresses 7 styling changes across the homepage:
1. Pricing cards: Fairweather font for prices, move price to bottom, smaller bullet points with tighter spacing
2. Middle pricing card: Add featured dark navy header styling like screenshot
3. Toppers: Make all toppers use Fairweather font and be bolded
4. CTA buttons: Make all button text bolded
5. Trust Indicators: Use Fairweather font
6. Portfolio "View All Projects" button: Convert to pill button style
7. Performance section: Move stats next to headline, reposition per screenshot

---

## Change 1: Pricing Cards Styling

### Current State
- Price is positioned at the top of the card after the tier name
- Bullet points use `text-sm` with `space-y-3` spacing
- Price uses default font

### Target State
- Price number uses Fairweather font explicitly
- Price moves to bottom of card, just above "Get Started" button
- Bullet points use `text-xs` with `space-y-2` spacing

### File: `src/components/sections/PricingPreview.tsx`

**Changes:**
- Move the price section (lines 204-212) to after the features list, before the button
- Add `font-display` class to price span to ensure Fairweather font
- Change features list spacing from `space-y-3` to `space-y-2`
- Change feature text from `text-sm` to `text-xs`

---

## Change 2: Middle Card Featured Styling (Monthly Card)

### Current State
The featured card only has a primary border and ring effect

### Target State (per Screenshot 1)
- Dark navy/blue header background at the top of the card containing the tier name
- White text on navy header
- Clean card body below

### File: `src/components/sections/PricingPreview.tsx`

**Changes:**
- Add conditional rendering for featured cards:
  - Wrap the tier name in a dark navy header container with negative margin
  - Apply `bg-navy text-primary-foreground` to the header area
  - Extend the header full-width with rounded top corners
  - Keep the button as primary blue with swipe animation

---

## Change 3: Toppers with Fairweather Font (Bolded)

### Current State
The `.topper` class uses `font-bold` but relies on body font inheritance

### Target State
All toppers explicitly use Fairweather font and are bolded

### File: `src/index.css`

**Changes:**
- Update the `.topper` class to explicitly include `font-family: 'Fairweather'`
- Ensure `font-bold` is applied

```css
.topper {
  @apply text-sm uppercase tracking-[0.3em] text-primary mb-4;
  font-family: 'Fairweather', system-ui, sans-serif;
  font-weight: 700;
}
```

---

## Change 4: Bold Text in All CTA Buttons

### Current State
Buttons use `font-semibold` in various places

### Target State
All buttons use `font-bold` for stronger text weight

### File: `src/index.css`

**Changes:**
- Add font-weight rule to button styling in base layer:
```css
button, a.btn, [role="button"], .btn-swipe-primary, .btn-swipe-navy, .btn-swipe-card {
  font-family: 'Fairweather', system-ui, sans-serif;
  font-weight: 700;
}
```

This ensures all buttons across the entire site are bolded automatically.

---

## Change 5: Trust Indicators with Fairweather Font

### Current State
Trust indicator text uses default body font (Poppins)

### Target State
Trust indicator text ("50+ Happy Clients", "5.0 Rating") uses Fairweather font

### File: `src/components/sections/Hero.tsx`

**Changes:**
- Add `font-display` class to the trust indicator span elements (lines 58 and 66)
- This class maps to Fairweather font family

---

## Change 6: Portfolio "View All Projects" Button

### Current State
- Styled as inline text link with hover gap animation
- Uses `inline-flex items-center gap-2 text-primary font-semibold uppercase tracking-wider`

### Target State
- Convert to regular pill button like other CTA buttons
- Use `btn-swipe-navy` style with navy background

### File: `src/components/sections/PortfolioPreview.tsx`

**Changes:**
- Wrap the Link in a Button component
- Apply `bg-navy text-primary-foreground btn-swipe-navy font-bold uppercase tracking-wider` classes
- Change icon from ExternalLink to ArrowRight for consistency

---

## Change 7: Performance Section Stats Repositioning

### Current State
- Stats row is positioned at the top of the section, separate from the headline
- Stats are centered/right-aligned above the main content

### Target State (per Screenshot 2)
- Stats are positioned inline with the headline
- Layout: Left has "PERFORMANCE" topper + headline, Right has the 3 stats
- Stats appear at the same horizontal level as the headline
- Stats should have expanded labels like "Satisfaction Guaranteed", "Page Speed Scores", "Google Reviews"

### File: `src/components/sections/PerformanceSection.tsx`

**Changes:**
- Remove the separate stats row at the top
- Create a new header row with 2 columns:
  - Left: Topper + Headline
  - Right: 3 stats in a row
- Update stat labels to match screenshot:
  - "100%" → "Satisfaction Guaranteed"
  - "100" → "Page Speed Scores"  
  - "5/5" → "Google Reviews"
- Keep the PageSpeed mockup in the right column below

**New Structure:**
```text
┌───────────────────────────────────────────────────────────┐
│  PERFORMANCE              │  100%        100        5/5   │
│  WE BUILD BETTER          │  Satisfaction Page Speed Google│
│  WEBSITES THAT            │  Guaranteed  Scores     Reviews│
│  PERFORM                  │                               │
├───────────────────────────────────────────────────────────┤
│  [description]                │                           │
│                              │   [PageSpeed Dashboard]    │
│  ⚡ Benefit 1                │                           │
│  ⚡ Benefit 2                │                           │
│  ⚡ Benefit 3                │                           │
│                              │                           │
│  [GET STARTED TODAY]         │                           │
└───────────────────────────────────────────────────────────┘
```

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/index.css` | Update `.topper` class with Fairweather font; add `font-weight: 700` to all button selectors |
| `src/components/sections/PricingPreview.tsx` | Move price to bottom; reduce bullet spacing; add featured header styling for Monthly card |
| `src/components/sections/Hero.tsx` | Add `font-display` class to trust indicator text |
| `src/components/sections/PortfolioPreview.tsx` | Convert "View All Projects" link to Button component with pill styling |
| `src/components/sections/PerformanceSection.tsx` | Restructure layout to place stats next to headline; update stat labels |

---

## Technical Notes

### Font Classes
- `font-display` → Fairweather font family
- `font-body` → Poppins font family
- `font-bold` → 700 weight

### Featured Card Styling
The Monthly card will have a structure like:
```tsx
<div className="bg-card rounded-2xl border-primary ring-2 ring-primary/20 flex flex-col h-full overflow-hidden">
  {/* Featured Header */}
  <div className="bg-navy px-8 py-6">
    <h3 className="text-2xl font-bold text-primary-foreground uppercase tracking-wider">
      Monthly
    </h3>
    <p className="text-primary-foreground/70 text-sm">...</p>
  </div>
  
  {/* Card Body */}
  <div className="p-8 flex flex-col flex-grow">
    {/* Features, Price, Button */}
  </div>
</div>
```

### Button Bold Enforcement
By adding `font-weight: 700` to the CSS rule that already applies Fairweather to buttons, all buttons will automatically be bold without needing to update individual components.

