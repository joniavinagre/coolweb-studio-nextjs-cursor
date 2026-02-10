

# Fix Hero Image Size and Horizontal Overflow

## Problem 1: Hero image too large on mobile
The hero image has `max-w-xs` but no `w-full`, so if the image's natural width exceeds the container it can overflow.

## Problem 2: Horizontal overflow causing side-scrolling
Two root causes:
- **`App.css`** contains leftover Vite boilerplate styles (`#root { max-width: 1280px; padding: 2rem }`) that conflict with the full-width layout
- Several sections use framer-motion `x: -30` / `x: 30` animations without `overflow-hidden` on their parent containers, which creates momentary horizontal overflow during animation

## Changes

### File: `src/App.css`
Remove or clear the `#root` styles (max-width, padding, text-align) -- these are Vite defaults that shouldn't be here.

### File: `src/components/sections/Hero.tsx` (line 74)
Change the image classes from:
`max-w-xs sm:max-w-sm lg:max-w-full drop-shadow-2xl`
to:
`w-full max-w-xs sm:max-w-sm lg:max-w-full drop-shadow-2xl`

Adding `w-full` ensures the image scales down within its container on small screens.

### File: `src/components/layout/Layout.tsx`
Add `overflow-x-hidden` to the root wrapper `div` to prevent any horizontal scroll caused by motion animations across all pages (Home, About, Contact).

