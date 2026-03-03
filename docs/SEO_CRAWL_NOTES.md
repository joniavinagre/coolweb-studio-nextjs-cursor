# SEO and crawlability – diagnosis notes

## 1. Crawl behavior and environment (verified)

- **Preview vs Production:** The “working” deployment you tested is a Vercel **Preview** deployment. SEO crawlers hitting that preview URL receive Vercel’s **“Authentication Required”** page instead of your site content. That is why the crawl simulator reported minimal content (title “Authentication Required”, no H2/H3, no real keywords).
- **Action:** Run all SEO crawls and checks against the **production** domain (`https://coolwebstudio.com`), not preview URLs (e.g. `coolweb-studio-nextjs-cursor-92rv-….vercel.app`). Ensure the Production deployment is not behind Vercel’s deployment protection.

## 2. Initial HTML (verified)

- Fetched `http://localhost:3000/` after `npm run build` and `npm run start`. The response HTML contains:
  - Correct `<title>` and `<meta name="description">`
  - Canonical, Open Graph, and Twitter Card meta tags
  - Full body content: one `<h1>` (“Small Business Web Designer”), multiple `<h2>` section titles, paragraph text, portfolio project names, pricing copy, and navigation
- **Conclusion:** The app is server-rendering meaningful content in the initial HTML. Crawlers will see the real content when they hit a **public** URL (e.g. production domain).

## 3. robots.txt and sitemap (before fix)

- **public/robots.txt:** Allows all user-agents; `Sitemap` points to `https://coolwebstudionew.lovable.app/sitemap.xml` (legacy domain).
- **public/sitemap.xml:** All `<loc>` URLs use `https://coolwebstudionew.lovable.app/...` (legacy domain).
- **Done:** App Router `src/app/robots.ts` and `src/app/sitemap.ts` use `NEXT_PUBLIC_SITE_URL`; static `public/robots.txt` and `public/sitemap.xml` updated to `https://coolwebstudio.com`.

## 4. Production configuration (your checklist)

- **Vercel Production domain:** In Vercel → Project → Settings → Domains, add and set **coolwebstudio.com** as the Production domain. Ensure the deployment that serves this domain is **Production**, not Preview.
- **Deployment Protection:** In Vercel → Project → Settings → Deployment Protection, ensure **Production** deployments are **not** behind "Vercel Authentication" (or crawlers will see the auth page). Preview deployments can stay protected.
- **Environment variable:** In Vercel → Project → Settings → Environment Variables, set `NEXT_PUBLIC_SITE_URL` = `https://coolwebstudio.com` for **Production** so metadata, canonicals, sitemap, and robots use the correct domain.
- **SEO crawls:** Run crawls and simulators only against `https://coolwebstudio.com`, not preview URLs (e.g. `*.vercel.app`).

## 5. QA (done locally)

- `npm run build` succeeds; routes include `/robots.txt` and `/sitemap.xml`.
- With `npm run start`, `http://localhost:3000/robots.txt` returns rules and `Sitemap: https://coolwebstudio.com/sitemap.xml`.
- `http://localhost:3000/sitemap.xml` returns XML with all static and portfolio URLs under `https://coolwebstudio.com`.
- After deploying to Vercel Production with `NEXT_PUBLIC_SITE_URL=https://coolwebstudio.com`, repeat the same checks on the live domain and run an SEO crawler against it to confirm titles, descriptions, and content are indexable.
