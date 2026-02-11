

## Favicon System and Logo Cleanup

### 1. Favicon System Setup

Copy all uploaded favicon files to `public/myfavicon/`:
- `favicon-96x96.png`
- `favicon.svg`
- `favicon.ico`
- `apple-touch-icon.png`
- `web-app-manifest-192x192.png`
- `web-app-manifest-512x512.png`
- `site.webmanifest`

Update `index.html`:
- Remove the existing `<link rel="icon" href="/favicon.ico">` reference
- Add the full favicon link set provided:
  - PNG 96x96, SVG, ICO shortcut, Apple touch icon, and manifest link
- Update the `site.webmanifest` name/short_name to "COOLWEB Studio" / "COOLWEB"

### 2. Delete Old Logo

Remove `src/assets/logo.webp` (the old small icon-only logo used in the footer). The header already uses `coolweb-logo-full.webp` which is the correct latest logo.

### 3. Update Footer Logo

In `src/components/layout/Footer.tsx`:
- Replace the import of `logo.webp` with `coolweb-logo-full.webp`
- Replace the old logo icon + "COOLWEB" text span with a single `<img>` tag using the full logo (matching the header pattern)
- Apply `brightness-0 invert` filter so it displays white on the navy background

### Technical Details

**Files to create:**
- `public/myfavicon/favicon-96x96.png` (copy from upload)
- `public/myfavicon/favicon.svg` (copy from upload)
- `public/myfavicon/favicon.ico` (copy from upload)
- `public/myfavicon/apple-touch-icon.png` (copy from upload)
- `public/myfavicon/web-app-manifest-192x192.png` (copy from upload)
- `public/myfavicon/web-app-manifest-512x512.png` (copy from upload)
- `public/myfavicon/site.webmanifest` (copy from upload, update names)

**Files to modify:**
- `index.html` -- replace favicon link with the full favicon set
- `src/components/layout/Footer.tsx` -- swap logo import and remove text, use full logo image

**Files to delete:**
- `src/assets/logo.webp`
- `public/favicon.ico` (replaced by `public/myfavicon/favicon.ico`)

