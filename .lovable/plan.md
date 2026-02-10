

# Multi-Section Updates: Image, Icons, Content, and Portfolio Cards

## 1. Replace image in "Why Choose Us" section and update name card

**File: `src/components/sections/WhyChooseUs.tsx`**

- Replace the Unsplash stock photo URL with the uploaded selfie image (copy `user-uploads://503328122_18031425833664346_1030377851877931299_n..webp` to `src/assets/joni-vinagre.webp`)
- Move the floating name card from `bottom-6` to `top-6`
- Reduce vertical padding from `p-4` to `px-4 py-2`
- Update text from "Owner, Web Developer" to "Founder, Web Developer"
- Change outer container from `rounded-2xl` to `rounded-xl` (Medium radius)
- Change inner name card from `rounded-xl` to `rounded-xl` (already correct)
- Ensure image itself uses `rounded-xl` instead of `rounded-md`

## 2. Replace Zap icons with custom SVGs in Performance section

**File: `src/components/sections/PerformanceSection.tsx`**

- Copy the three SVG files to `public/icons/stat1.svg`, `public/icons/stat2.svg`, `public/icons/stat3.svg`
- Update the SVG files to use `fill="white"` instead of `fill="#001f3f"`
- Replace the Lucide `Zap` icon for each benefit with an `<img>` tag referencing the corresponding SVG
- Benefit 1 ("Better load times...") uses stat1.svg (hourglass)
- Benefit 2 ("Faster websites...") uses stat2.svg (star/trophy)
- Benefit 3 ("Our sites load instantly...") uses stat3.svg (devices)
- Size the SVG icons to match current `w-5 h-5` sizing
- Remove the `Zap` import if no longer needed

## 3. Update feature text in "Why Choose Us" section

**File: `src/components/sections/WhyChooseUs.tsx`**

Replace three features in the `features` array:

| Original Title | New Title | New Description |
|---|---|---|
| "100% Secure" | "Mobile First Design" | "We build your site for mobile devices first, ensuring lean, optimized code with no bloated waste for a fast, responsive experience." |
| "100 PageSpeed Scores" | "Optimized Page Speed" | "If your site takes more than 3 seconds to load you can lose up to 50% of your traffic. Our sites load in under 1 second." |
| "Money Back Guarantee" | "Fully Responsive" | "Your website will fit all screen sizes -- mobile, tablet, and desktop -- so visitors see a beautiful site no matter the device." |

## 4. Portfolio card descriptions: remove line-clamp and ensure equal card heights

**Files: `src/components/sections/PortfolioPreview.tsx` and `src/pages/Portfolio.tsx`**

- Remove `line-clamp-2` from the description `<p>` tags in both files so descriptions are always fully visible
- Add `flex flex-col` to the `motion.article` in PortfolioPreview (Portfolio.tsx already has it)
- Add `flex-grow` to the description paragraph in PortfolioPreview (Portfolio.tsx already has it)
- Add `mt-auto self-start` to the Button in PortfolioPreview to pin it to the bottom (matching Portfolio.tsx)
- This flex pattern ensures all cards stretch to the same height within each grid row

### Technical Details

**Files modified:**
- `src/assets/joni-vinagre.webp` (new file, copied from upload)
- `public/icons/stat1.svg` (new file, white-colored SVG)
- `public/icons/stat2.svg` (new file, white-colored SVG)
- `public/icons/stat3.svg` (new file, white-colored SVG)
- `src/components/sections/WhyChooseUs.tsx` (image source, name card position/text, feature content, border radius)
- `src/components/sections/PerformanceSection.tsx` (replace Zap icons with custom SVG images)
- `src/components/sections/PortfolioPreview.tsx` (remove line-clamp, add flex layout for equal heights)
- `src/pages/Portfolio.tsx` (remove line-clamp)
