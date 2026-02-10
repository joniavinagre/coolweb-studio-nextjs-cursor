

# Mobile-Only Hero Section Refinements

All changes are in `src/components/sections/Hero.tsx` and apply only on mobile (using responsive prefixes).

## Changes

### 1. Subheadline font size -- XS on mobile only (line 36)
Change from `text-base` to `text-xs md:text-base` so it's smaller on mobile but normal on tablet/desktop.

### 2. H1 spacing -- reduce gap between "Small Business" and "Web Designer" (line 30)
Change `mb-4` to `mb-1 md:mb-4` and reduce `leading-tight` to `leading-none md:leading-tight` to close the vertical gap on mobile.

### 3. Reduce overall spacing between hero elements on mobile
- Topper (line 27): The `.topper` class has `mb-2` by default -- that's fine.
- H1 `mb-4` becomes `mb-1 md:mb-4` (covered above).
- Description `mb-6` becomes `mb-3 md:mb-6` (line 36).
- CTA buttons container `gap-3` becomes `gap-2 md:gap-3` (line 41).
- Trust indicators `mt-8` becomes `mt-4 md:mt-8` (line 54).
- Grid `gap-8` becomes `gap-4 lg:gap-8` (line 15).
- Container `pt-28 pb-16` becomes `pt-24 pb-10 md:pt-28 md:pb-16` (line 14).

### 4. Center-align "50+ Happy Clients, 5.0 Rating" on mobile (line 54)
Change `justify-start` to `justify-center lg:justify-start`.

## Technical Details

### File: `src/components/sections/Hero.tsx`

**Line 14** -- container padding:
`pt-28 pb-16 md:pb-24` --> `pt-24 pb-10 md:pt-28 md:pb-16 lg:pb-24`

**Line 15** -- grid gap:
`gap-8` --> `gap-4 lg:gap-8`

**Line 30** -- H1 classes:
`text-5xl md:text-6xl ... leading-tight mb-4 ...` --> `text-5xl md:text-6xl ... leading-none md:leading-tight mb-1 md:mb-4 ...`

**Line 36** -- description:
`mb-6 ... text-base` --> `mb-3 md:mb-6 ... text-xs md:text-base`

**Line 41** -- CTA buttons:
`gap-3` --> `gap-2 md:gap-3`

**Line 54** -- trust indicators:
`mt-8 ... justify-start` --> `mt-4 md:mt-8 ... justify-center lg:justify-start`

