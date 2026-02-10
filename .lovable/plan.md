
# Fix: Visual gap between CTA wave and footer on mobile

## Problem

The footer has a navy wave SVG positioned at `absolute -top-[60px]`, which is meant to overlap into the section above it. However, the CTA sections only have `py-14` padding, which doesn't leave enough room on mobile for the wave to overlap seamlessly. This creates a visible gap/line between the CTA section and the footer.

## Solution

Two changes:

1. **Footer (`src/components/layout/Footer.tsx`)**: Add `mt-[60px]` to the footer element so the absolutely positioned wave at `-top-[60px]` doesn't create a gap. This ensures the wave visually sits flush against the previous section.

2. **All CTA sections**: Add extra bottom padding (`pb-24`) to give the wave enough room to overlap without crowding the button. Update the class from `py-14` to `pt-14 pb-24` on the final CTA sections in:
   - `src/pages/Index.tsx` (line 26)
   - `src/pages/Services.tsx` (line 281)
   - `src/pages/Portfolio.tsx` (line 99)
   - `src/pages/About.tsx` (line 251)
   - `src/pages/Contact.tsx` -- check if it has a similar CTA or if the footer directly follows

This ensures the wave transition looks seamless on all screen sizes.
