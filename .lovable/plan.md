

## Add Language Selector and Spanish Translation

### Overview

Create a lightweight i18n (internationalization) system using React Context to support English and Spanish (Spain). Add a language dropdown button in the header, and translate every piece of text across the entire website.

### Language Selector Placement

- **Desktop**: To the left of the "Get Started" button in the header nav bar
- **Mobile/Tablet**: To the left of the hamburger menu icon
- The selector will be a small dropdown button showing a globe icon + language code (EN/ES), with a dropdown to switch

### Architecture

A React Context-based approach (no external library needed):

```text
src/
  contexts/
    LanguageContext.tsx        -- Context provider, hook, and language state (persisted to localStorage)
  i18n/
    en.ts                      -- All English strings
    es.ts                      -- All Spanish strings
    index.ts                   -- Export helper
```

### Components to Update

Every component with visible text will use a `useLanguage()` hook that returns a `t` function for translations:

1. **Header** -- nav links (Home, Services, Portfolio, About, Contact), "Get Started" button, "Open menu" sr-only text, + add language selector
2. **Footer** -- tagline, navigation heading, contact heading, copyright, link labels
3. **Hero** -- topper, headline, description, CTA buttons
4. **ServicesPreview** -- topper, headline, description, service cards (titles, descriptions, CTAs), "View All Services" button
5. **WhyChooseUs** -- topper, headline, description, feature titles and descriptions, CTA button, founder card text
6. **PortfolioPreview** -- topper, headline, description, "View All Projects" button, "Visit Website" button
7. **PerformanceSection** -- topper, headline, stat labels, description, benefit titles and descriptions, CTA button
8. **PricingPreview** -- topper, headline, tier names/descriptions/features/CTAs, price notes
9. **Testimonials** -- topper, headline, testimonial content (names/locations stay as-is since they're proper nouns)
10. **Index page** -- CTA section heading and button
11. **Services page** -- hero heading, category headers, all tier names/descriptions/features/CTAs, bottom CTA
12. **Portfolio page** -- hero heading, "Visit Website" buttons, CTA section
13. **About page** -- hero, story section, process section, values section, CTA section
14. **Contact page** -- hero, form labels/placeholders/headings, contact info titles, toast messages
15. **CaseStudy page** -- "Back to Portfolio", info bar labels (Location, Category, Services), section toppers/headings, CTA section
16. **NotFound page** -- 404 text and link
17. **Portfolio data** -- project descriptions, taglines, about text, challenges, solutions, feature titles/descriptions, testimonial quotes (note: project titles stay as-is since they're brand names)

### Technical Details

**New files:**

- `src/contexts/LanguageContext.tsx` -- React context with `LanguageProvider` wrapping the app, `useLanguage` hook returning `{ language, setLanguage, t }`. Language persisted in `localStorage`.
- `src/i18n/en.ts` -- Flat key-value object with all English strings organized by section (e.g., `"header.home"`, `"hero.topper"`, `"services.webDev.title"`, etc.)
- `src/i18n/es.ts` -- Matching Spanish (Spain) translations for every key
- `src/i18n/index.ts` -- Exports translations map
- `src/components/LanguageSelector.tsx` -- Dropdown component using Radix DropdownMenu, showing globe icon + "EN"/"ES", with two options. Styled to match the site (navy theme for mobile sheet variant).

**Files to modify:**

- `src/App.tsx` -- Wrap with `LanguageProvider`
- `src/components/layout/Header.tsx` -- Add `LanguageSelector` in desktop (left of Get Started) and mobile (left of burger icon)
- `src/components/layout/Footer.tsx` -- Use `t()` for all text
- `src/components/sections/Hero.tsx` -- Use `t()` for all text
- `src/components/sections/ServicesPreview.tsx` -- Use `t()` for all text
- `src/components/sections/WhyChooseUs.tsx` -- Use `t()` for all text
- `src/components/sections/PortfolioPreview.tsx` -- Use `t()` for all text
- `src/components/sections/PerformanceSection.tsx` -- Use `t()` for all text
- `src/components/sections/PricingPreview.tsx` -- Use `t()` for all text
- `src/components/sections/Testimonials.tsx` -- Use `t()` for all text
- `src/pages/Index.tsx` -- Use `t()` for CTA section
- `src/pages/Services.tsx` -- Use `t()` for all text
- `src/pages/Portfolio.tsx` -- Use `t()` for all text
- `src/pages/About.tsx` -- Use `t()` for all text
- `src/pages/Contact.tsx` -- Use `t()` for all text, including form labels, placeholders, toast messages
- `src/pages/CaseStudy.tsx` -- Use `t()` for all static UI text (labels, toppers, headings, CTAs)
- `src/pages/NotFound.tsx` -- Use `t()` for all text
- `src/data/portfolioProjects.ts` -- Export a function that accepts language and returns translated project data, or use translation keys for translatable fields

**Translation scope (Spanish from Spain):**

All user-facing text will be translated to Castilian Spanish (Spain), using "vosotros" form where appropriate, and Spanish conventions (e.g., "Empezar" not "Comenzar" for casual CTAs). Proper nouns (brand names, person names, city names) will remain unchanged.

**No layout or styling changes** -- only text content swaps via the translation system.

