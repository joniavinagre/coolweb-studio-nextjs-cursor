
# Multi-Update Plan: Icons, Layout, Content, and Contact Form

## 1. Replace service card icons in "Never Worry About Your Website Again"

**File: `src/components/sections/ServicesPreview.tsx`**

- Remove Lucide icon imports (Globe, MapPin, Search)
- Replace the service icon rendering with `<img>` tags pointing to SVG files in `public/icons/`
- Web Development card: `web-development.svg` (2nd uploaded SVG)
- Google Business Profile card: `googlemybusiness.svg` (1st uploaded SVG)
- Local SEO card: `seo.svg` (3rd uploaded SVG)
- All SVGs will have their fill set to white


**New files:**
- `public/icons/web-development.svg` (white fill)
- `public/icons/googlemybusiness.svg` (white fill)
- `public/icons/seo.svg` (white fill)

**File: `src/index.css`**

- Change `.service-icon-swipe` from `rounded-2xl` to `rounded-xl` (Medium radius)
- Check that the left-to-right hover animation stays as it is, making the background light blue when hovering it.

## 2. H1 line break in hero section

**File: `src/components/sections/Hero.tsx`**

- Add an explicit `<br />` tag after "Small Business" so the H1 renders as:
  - Line 1: "Small Business"
  - Line 2: "Web Designer"

## 3. Swap portfolio preview: Replace Briet with Nails by Anabela

**File: `src/components/sections/PortfolioPreview.tsx`**

- Instead of `projects.slice(0, 3)` (which shows Gaston, 4DHUES, Briet), change to pick projects by specific IDs: 1 (Gaston), 2 (4DHUES), and 5 (Nails by Anabela)

## 4. Reduce line spacing on portfolio section headline

**File: `src/components/sections/PortfolioPreview.tsx`**

- The `.section-title` class already has `leading-none md:leading-tight` from a previous update, but verify it applies here. If the h2 has additional leading classes, ensure it uses `leading-none md:leading-tight`.

## 5. Replace PageSpeed mockup with uploaded image in Performance section

**File: `src/components/sections/PerformanceSection.tsx`**

- Replace the entire PageSpeed dashboard mockup (the card with circles, metrics grid, and decorative elements on lines 144-201) with an `<img>` tag using the uploaded image
- Copy `user-uploads://Untitled_design_4.webp` to `src/assets/performance-dashboard.webp`
- Apply `rounded-xl` for Medium border radius

## 6. Remove Testimonials section from Home page

**File: `src/pages/Index.tsx`**

- Remove the `<Testimonials />` component from the page
- Remove the Testimonials import

## 7. Swap section order on About page

**File: `src/pages/About.tsx`**

- Move the "Our Process" section (lines 212-248) above the "Why Us" section (lines 140-210)
- The order will become: Hero, Story, Our Process, Why Us, CTA

## 8. Connect Contact form to Resend

This requires:
- A Supabase/Cloud edge function to send emails via Resend
- The `RESEND_API_KEY` secret stored securely

Before implementing this, I need your Resend API key. Here is what you need to do:

1. Go to [resend.com](https://resend.com) and sign up if you haven't already
2. Verify your email domain at [resend.com/domains](https://resend.com/domains)
3. Create an API key at [resend.com/api-keys](https://resend.com/api-keys)

Once you provide the API key, I will:
- Create an edge function (`send-contact-email`) that receives the form data and sends an email via Resend to your business email (contact@coolwebstudio.com)
- Update the Contact page form to call this edge function instead of the current simulated delay
- Add proper error handling and validation

---

### Technical Summary

| File | Change |
|---|---|
| `public/icons/web-development.svg` | New file - white SVG icon |
| `public/icons/googlemybusiness.svg` | New file - white SVG icon |
| `public/icons/seo.svg` | New file - white SVG icon |
| `src/assets/performance-dashboard.webp` | New file - uploaded image |
| `src/index.css` | Change `.service-icon-swipe` to `rounded-xl` |
| `src/components/sections/ServicesPreview.tsx` | Replace Lucide icons with custom SVG images |
| `src/components/sections/Hero.tsx` | Add line break in H1 |
| `src/components/sections/PortfolioPreview.tsx` | Swap Briet for Nails by Anabela; verify headline spacing |
| `src/components/sections/PerformanceSection.tsx` | Replace PageSpeed mockup with uploaded image |
| `src/pages/Index.tsx` | Remove Testimonials section |
| `src/pages/About.tsx` | Swap "Why Us" and "Our Process" section order |
| `src/pages/Contact.tsx` | Connect form to Resend edge function (pending API key) |
| `supabase/functions/send-contact-email/index.ts` | New edge function for Resend (pending API key) |
