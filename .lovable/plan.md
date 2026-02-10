

# Fix: White gap between wave SVG and footer on mobile

## Root Cause

The wave container is positioned 60px above the footer (`-top-[60px]`), but the SVG inside uses `h-auto` with a 1440:120 viewBox. On narrow mobile screens, the SVG scales down proportionally -- on a 390px screen it's only ~32px tall, not 60px. This leaves a visible white gap between the bottom of the SVG and the top of the footer's navy background.

On desktop (1440px wide), the SVG renders at ~120px tall, so 60px is plenty and no gap appears.

## Solution

Force the SVG to always fill the full 60px height of its container by adding a fixed height (`h-[60px]`) to the SVG element. Combined with `preserveAspectRatio="none"` (already set), this stretches the wave to always cover the full gap.

## File change

### `src/components/layout/Footer.tsx` (line 9)

Change the SVG class from:

```
w-full h-auto
```

to:

```
w-full h-[60px]
```

This single change ensures the wave always fills the 60px gap on all screen sizes.
