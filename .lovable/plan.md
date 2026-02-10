

# Fix Portfolio Cards and Update Grid Layout

## Issue 1: Hover animation removal and clickable images not applied everywhere

The previous fix only updated `ProjectCard.tsx`, but portfolio cards are rendered **inline** in two other files that were not changed:
- `src/components/sections/PortfolioPreview.tsx` (homepage preview, line 87)
- `src/pages/Portfolio.tsx` (full portfolio page, line 69)

Both still have `group-hover:scale-105 transition-transform duration-700` on images, and the images are not wrapped in links.

### Fix for `PortfolioPreview.tsx` (lines 84-89)
- Wrap the image container in an `<a>` tag linking to `project.website` (opens in new tab)
- Remove `group-hover:scale-105 transition-transform duration-700` from the `<img>`

### Fix for `Portfolio.tsx` (lines 63-73)
- Same changes: wrap image in `<a>` tag to `project.website`, remove hover animation classes from `<img>`

---

## Issue 2: Grid layout update to 12-column, 32px gutter, 1120px content width

The user wants:
- Content width: 1120px
- Gutters (side padding): 32px each side (total container = 1184px)
- Grid gutter between columns: 32px (which is Tailwind's `gap-8`)

### Changes in `tailwind.config.ts` (lines 8-14)
Update the container config:
- Change `padding` from `"2rem"` to `"2rem"` (32px = 2rem, already correct)
- Change the `2xl` screen max-width from `"1400px"` to `"1184px"`

### Changes in grid classes
Update the portfolio grids to use `gap-8` consistently:
- `PortfolioPreview.tsx` line 82: change `gap-6 lg:gap-8` to `gap-8`
- `Portfolio.tsx` line 55: change `gap-6 lg:gap-8` to `gap-8`

Note: The 3-column layout (`md:grid-cols-3`) effectively creates a 12-column system where each card spans 4 columns, which matches standard 12-column grids.

---

## Summary of file changes

### `src/components/sections/PortfolioPreview.tsx`
1. Wrap image div (lines 84-89) in `<a href={project.website} target="_blank" rel="noopener noreferrer">`
2. Remove `group-hover:scale-105 transition-transform duration-700` from img (line 87)
3. Change grid gap to `gap-8` (line 82)

### `src/pages/Portfolio.tsx`
1. Wrap image div (lines 63-73) in `<a href={project.website} target="_blank" rel="noopener noreferrer">`
2. Remove `group-hover:scale-105 transition-transform duration-700` from img (line 69)
3. Change grid gap to `gap-8` (line 55)

### `tailwind.config.ts`
1. Change container max-width from `"1400px"` to `"1184px"` (line 13)

