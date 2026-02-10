
# Plan: Update Portfolio Page Layout and Images

## Overview

1. Simplify the Portfolio page cards to match the Home page's PortfolioPreview style (plain image, title, description, "Visit Website" button only)
2. Switch to a 3-column grid layout
3. Replace stock images with uploaded images for existing projects
4. Add 3 new projects (Tailang, Raiz de Salud, Chico Diez)

## Changes

### 1. Copy uploaded images to project assets

Copy these files into `src/assets/`:
- `user-uploads://11-webp.webp` to `src/assets/portfolio-tropical.webp`
- `user-uploads://2-webp.webp` to `src/assets/portfolio-nails.webp`
- `user-uploads://6-webp.webp` to `src/assets/portfolio-quiver.webp`
- `user-uploads://4-webp.webp` to `src/assets/portfolio-ongles.webp`
- `user-uploads://10-webp.png` to `src/assets/portfolio-coffee.png`
- `user-uploads://12-webp.webp` to `src/assets/portfolio-tailang.webp`
- `user-uploads://9-webp.webp` to `src/assets/portfolio-raiz.webp`
- `user-uploads://8-webp.webp` to `src/assets/portfolio-chico.webp`

### 2. Update `src/data/portfolioProjects.ts`

- Add imports for all new image assets
- Replace stock image URLs for: Tropical Travel (id 4), Nails by Anabela (id 5), Quiver and Quill (id 6), Ongles Fantaisies (id 7), Coffee and Bakery (id 9)
- Keep Club de Espanol (id 8) with placeholder image
- Add 3 new project entries at the end:
  - **Tailang Ramen Restaurant** (id 10): website `https://tailang.coolwebstudio.com/`, image from `portfolio-tailang.webp`
  - **Raiz de Salud** (id 11): website `https://test-preview-raizdesalud.lovable.app/`, image from `portfolio-raiz.webp`
  - **Chico Diez Barber Club** (id 12): website `https://chicodiezbarberclub.coolwebstudio.com/`, image from `portfolio-chico.webp`

### 3. Simplify `src/pages/Portfolio.tsx`

Replace the current 2-column grid using `ProjectCard` with a 3-column grid using the same simple card structure as `PortfolioPreview`:

```text
grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8
  Each card:
    - rounded-xl image (aspect-[16/10]), hover scale
    - Title (h3, uppercase, extrabold, hover:text-primary)
    - Description (text-xs, line-clamp-2)
    - "Visit Website" button (btn-swipe-card)
```

Remove the `ProjectCard` import. The `ProjectCard` component file can remain for the case study pages.

Ensure the cards have consistent height. Align the Visit Website button to the bottom of the card.

### 4. No changes to `src/components/sections/PortfolioPreview.tsx`

The Home page section already has the correct layout and will automatically pick up image changes from the data file.

## Summary of Files

| File | Changes |
|------|---------|
| 8 image files | Copy uploaded images to src/assets/ |
| `src/data/portfolioProjects.ts` | Add image imports, replace stock URLs, add 3 new projects |
| `src/pages/Portfolio.tsx` | Replace ProjectCard grid with simple 3-col card layout matching Home page |
