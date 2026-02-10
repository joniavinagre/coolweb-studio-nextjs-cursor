

# Plan: Three fixes to the About Us page

## 1. Add stock image to "What Drives Us" section (right column)

The "Why Us" section currently only has a left column with content. Add a right column with a stock image using the same pattern as the Story section above it -- `aspect-[4/5]` image in a `rounded-xl` container with a floating card overlay.

Image: `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=750&fit=crop` (laptop with analytics/work setup).
Floating card text: "Your Digital Partner" / "Committed to Your Growth".

## 2. Add description text beside "How We Work" headline

Change the Process section header from a single `div` to a two-column grid (`grid-cols-1 lg:grid-cols-2`) with:
- Left: topper + headline (as-is)
- Right: a 2-sentence description in `text-primary-foreground/70 font-body text-sm`, aligned to the bottom of the column using `flex items-end`

Text: "We follow a proven four-step process to bring your vision to life. From initial discovery to launch and beyond, every step is designed for your success."

## 3. Replace CTASection with Portfolio-style CTA

Replace `<CTASection />` with an inline CTA section matching the Portfolio page's style:
- `bg-muted/30` background (light, not navy)
- Centered layout with `section-title` class headline
- Subtitle paragraph in `text-muted-foreground text-lg`
- `btn-swipe-navy` button with navy background
- Wave divider SVG at the bottom (navy fill) to transition into the footer

Headline: "Ready To Work With Us?" with accent on "With Us?"
Subtitle: "Let's create something amazing together. Book a free consultation to discuss your project."
Button: "Start Your Project"

## Technical details

### File: `src/pages/About.tsx`

**Change 1** (lines 144-189): Restore the 2-column grid and add right column with image after the left column's closing `</motion.div>`.

**Change 2** (lines 197-202): Replace the single-div header with a 2-column grid containing headline left and description right.

**Change 3** (lines 224-225): Replace `<CTASection />` with the inline Portfolio-style CTA section (light bg, wave divider, navy button).

