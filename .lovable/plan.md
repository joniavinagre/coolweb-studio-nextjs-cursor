

# Replace Hero Mockup with Uploaded Image

## Overview
Replace the placeholder laptop/phone mockup in the Hero section with the uploaded `hero_image.webp`. The image will be visible on all screen sizes -- on desktop it stays in the right column, and on mobile/tablet it appears below the social proof indicators.

## Changes

### 1. Copy the uploaded image into `src/assets/`
Copy `user-uploads://hero_image.webp` to `src/assets/hero_image.webp` so it can be imported as an ES6 module.

### 2. Update `src/components/sections/Hero.tsx`

**Import the image:**
Add `import heroImage from "@/assets/hero_image.webp";` at the top.

**Replace the right-column mockup (lines 71-117):**
Remove the entire device mockup block (laptop frame, phone frame, decorative blurs) and replace it with a simple `img` tag rendering `heroImage`.

**Make it visible on all screens:**
Change the container class from `hidden lg:block` to always visible. On mobile/tablet it will appear below the left content (naturally, since it's the second grid item in a `grid-cols-1 lg:grid-cols-2`).

**Move it below social proof on mobile:**
The current grid structure already places the right column after the left column on mobile (`grid-cols-1`). Since the social proof indicators are the last element in the left column, the image will naturally appear below them on mobile. No reordering needed.

**Styling the image:**
- Use `max-w-md lg:max-w-full mx-auto` to keep it reasonably sized on mobile
- Add `drop-shadow-2xl` for a polished floating effect against the dark navy background

## Technical Details

### File: `src/components/sections/Hero.tsx`

- **Line 1-4**: Add `import heroImage from "@/assets/hero_image.webp";`
- **Lines 71-117**: Replace the entire `motion.div` block containing the laptop/phone mockups with:

```tsx
<motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative flex justify-center lg:justify-end">
  <img src={heroImage} alt="Website design showcase on laptop and mobile" className="max-w-xs sm:max-w-sm lg:max-w-full drop-shadow-2xl" />
</motion.div>
```

Key differences from the old block:
- Removed `hidden lg:block` so it shows on all screens
- Replaced all mockup HTML with a single `img` tag
- `max-w-xs sm:max-w-sm lg:max-w-full` keeps the image compact on mobile, medium on tablet, full on desktop
- `drop-shadow-2xl` gives a nice floating effect on the dark background
