

# Fix: White gap between CTA section and footer wave on mobile

## Problem

The `mt-[60px]` margin on the footer creates a 60px gap with **no background behind it**. The wave SVG sits in that gap but has transparent areas (the curve shape), so the raw page background (white) shows through, creating a visible seam on mobile.

## Solution

Remove `mt-[60px]` from the footer. The wave (positioned at `-top-[60px]`) will overlap upward into the CTA section's existing `pb-24` bottom padding instead, where `bg-muted/30` fills behind the transparent parts of the wave seamlessly.

## File changes

### `src/components/layout/Footer.tsx` (line 6)

Remove `mt-[60px]` from the footer's class. Change:

```
bg-navy text-primary-foreground relative mt-[60px]
```

to:

```
bg-navy text-primary-foreground relative
```

That is the only change needed. All CTA sections already have `pb-24` (96px of bottom padding), which is more than enough room for the 60px wave overlap.

