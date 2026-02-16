

## Pre-Rendering for SEO: Full Implementation Plan

### Why `vite-prerender-plugin`

After evaluating all viable options:

| Solution | Verdict |
|---|---|
| **react-snap** | Uses Puppeteer/Chrome at build time. Not available in Lovable's build environment. Unmaintained since 2020. |
| **prerender-spa-plugin** | Also requires Puppeteer. Same build environment limitation. Designed for Webpack, not Vite. |
| **TanStack Router SSR** | Would require full router migration away from React Router. Overkill. |
| **vite-plugin-ssr / Vike** | Heavy SSR framework migration. Far more complexity than needed. |
| **React Router v7 Framework Mode** | Requires migrating from v6 to v7's framework architecture. Major rewrite. |
| **vite-prerender-plugin** | Runs inside Vite's build pipeline (no browser needed). Framework-agnostic. Works with React 18 + React Router v6. Lightweight. Actively maintained (latest release Sep 2025). |

**Winner: `vite-prerender-plugin`** -- it hooks directly into `vite build`, generates static HTML for every route, and requires zero infrastructure changes.

### How It Works

1. During `vite build`, the plugin imports your app entry module
2. It calls an exported `prerender()` function you define
3. That function uses React's `renderToString` + `StaticRouter` to produce HTML
4. The plugin writes the HTML into separate files per route (e.g., `dist/services/index.html`)
5. When a crawler or user hits `/services`, the server delivers pre-rendered HTML with full content
6. React then hydrates the page client-side, making it interactive

### What Gets Pre-Rendered

18 total routes:

- `/` (Home)
- `/services`
- `/portfolio`
- `/about`
- `/contact`
- `/portfolio/masajes-gaston-molina`
- `/portfolio/4dhues-led-panels`
- `/portfolio/centro-clinico-vicente-briet`
- `/portfolio/tropical-travel-agency`
- `/portfolio/nails-by-anabela`
- `/portfolio/quiver-and-quill`
- `/portfolio/ongles-fantaisies`
- `/portfolio/club-de-espanol`
- `/portfolio/coffee-and-bakery-marseille`
- `/portfolio/tailang-ramen-restaurant`
- `/portfolio/raiz-de-salud`
- `/portfolio/chico-diez-barber-club`
- 404 page

### Implementation Steps

#### 1. Install packages
- `vite-prerender-plugin` (build-time prerendering)
- `react-helmet-async` (per-page meta tags that get pre-rendered into the HTML)

#### 2. Refactor App for dual rendering

**Split routing from App shell**: Create an `AppRoutes` component that accepts either `BrowserRouter` (client) or `StaticRouter` (server) as a wrapper. This is the standard pattern for SSR-compatible React apps.

- `src/App.tsx` -- exports `AppRoutes` (pure routes) and `App` (wrapped with BrowserRouter for client)
- Add `HelmetProvider` wrapping the entire app so meta tags are captured during prerender

#### 3. Update `main.tsx` for hydration + prerender export

```typescript
// Client-side: use hydrateRoot for pre-rendered pages
import { hydrateRoot, createRoot } from "react-dom/client";

const root = document.getElementById("root")!;
if (root.innerHTML.trim().length > 0) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}

// Build-time: export prerender function
export async function prerender() {
  // Uses renderToString + StaticRouter
  // Returns { html, links } for each route
}
```

#### 4. SSR-safe guards

- `LanguageContext`: Guard `localStorage.getItem()` with `typeof window !== "undefined"` check. During prerender, defaults to English.
- `ScrollToTop`: Guard `window.scrollTo` similarly.
- `framer-motion`: Works with SSR out of the box.
- `@tanstack/react-query`: Works with SSR (just creates a new QueryClient per render).

#### 5. Configure `vite.config.ts`

Add the plugin with `renderTarget: "#root"` so the pre-rendered HTML is injected into the correct container.

#### 6. Per-page SEO meta tags

Add `<Helmet>` tags to each page component with:
- Unique `<title>` per page
- Unique `<meta name="description">` per page
- Open Graph tags (og:title, og:description, og:url)
- Canonical URLs

These get pre-rendered into the static HTML, so crawlers see them without executing JavaScript.

#### 7. Sitemap generation

Create `public/sitemap.xml` listing all 18 routes with proper `<lastmod>`, `<changefreq>`, and `<priority>` values. This helps search engines discover all pages.

#### 8. Update `robots.txt`

Add a `Sitemap:` directive pointing to the sitemap URL.

### Before vs After

| Aspect | Before (SPA) | After (Pre-rendered) |
|---|---|---|
| HTML served to crawlers | Empty `<div id="root"></div>` | Full page content with headings, text, links |
| Meta tags | Single global title/description | Unique per-page title, description, OG tags |
| Social media previews | Generic or broken | Rich previews with correct title/description per page |
| Sitemap | None | Complete sitemap with all 18 routes |
| Time to first content | Waits for JS bundle to download + execute | Instant HTML content, then JS hydrates |
| Client-side interactivity | Unchanged | Unchanged (hydration preserves everything) |

### Files Changed

| File | Change |
|---|---|
| `package.json` | Add `vite-prerender-plugin`, `react-helmet-async` |
| `vite.config.ts` | Add `vitePrerenderPlugin()` |
| `src/main.tsx` | Add `prerender()` export + smart hydration |
| `src/App.tsx` | Extract `AppRoutes`, add `HelmetProvider`, export for server use |
| `src/contexts/LanguageContext.tsx` | SSR-safe `localStorage` guard |
| `src/pages/Index.tsx` | Add `<Helmet>` with unique meta tags |
| `src/pages/Services.tsx` | Add `<Helmet>` with unique meta tags |
| `src/pages/Portfolio.tsx` | Add `<Helmet>` with unique meta tags |
| `src/pages/CaseStudy.tsx` | Add `<Helmet>` with unique meta tags |
| `src/pages/About.tsx` | Add `<Helmet>` with unique meta tags |
| `src/pages/Contact.tsx` | Add `<Helmet>` with unique meta tags |
| `src/pages/NotFound.tsx` | Add `<Helmet>` with noindex tag |
| `public/sitemap.xml` | New -- complete sitemap for all 18 routes |
| `public/robots.txt` | Add Sitemap directive |

### Risk Assessment

- **Low risk**: The app structure stays the same. All changes are additive. If prerendering fails, the app falls back to normal SPA behavior (createRoot path).
- **Hydration mismatches**: Minor warnings may appear if localStorage language differs from the prerendered English default. These are cosmetic and resolve instantly after hydration.
- **No breaking changes**: All existing routing, animations, and functionality remain identical.

