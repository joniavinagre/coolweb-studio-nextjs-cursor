
## Fix Translation System Bugs and Spanish Text Issues

### Problem Summary

Three related issues are causing content to disappear and translations to display incorrectly:

1. **Critical bug in the translation function** -- empty Spanish translations incorrectly fall back to English text
2. **Incorrect Spanish wording** in the "What We Do" section headline
3. **Wrong word order** in the Services page section titles when displayed in Spanish

### Root Cause

The `t()` function in `LanguageContext.tsx` uses the `||` operator to check for translations:

```text
return dict[key] || translations.en[key] || key
```

The problem: JavaScript's `||` treats empty strings (`""`) as falsy. When a Spanish translation is intentionally set to `""` (e.g., `services.headline3` which should be empty because Spanish doesn't need "Again"), the function skips it and returns the English value instead. This causes mixed-language output like "No Te Preocupes Mas Por Tu Pagina Web **Again**".

This same bug can cause other subtle rendering issues when translations return unexpected values.

### Changes

**1. `src/contexts/LanguageContext.tsx`** -- Fix the `t()` function

Replace `||` with proper undefined checks so that empty strings are treated as valid translations. Change from:
```text
return dict[key] || translations.en[key] || key
```
To logic that checks if the key exists (is not undefined) rather than if the value is truthy.

**2. `src/i18n/es.ts`** -- Fix Spanish translations

- Change `services.headline1` from "No Te Preocupes Mas Por Tu " to "Nunca Mas Te Preocupes Por Tu "
- Add new keys for the Services page section titles that use correct Spanish word order

**3. `src/i18n/en.ts`** -- Add matching English keys for the Services page section title pattern

Add new keys like `servicesPage.webDev.packagesTitle`, `servicesPage.gbp.packagesTitle`, `servicesPage.seo.packagesTitle` so each language can have its own full section title.

**4. `src/pages/Services.tsx`** -- Use the new per-section title keys

Instead of the current pattern `{category.title} + "Packages"`, use a single translation key per section that contains the full, properly ordered title for each language.

### Technical Details

- English section titles: "Web Development Packages", "Google Business Profile Packages", "Local SEO Packages"
- Spanish section titles: "Paquetes de Desarrollo Web", "Paquetes de Perfiles de Google Business", "Paquetes de SEO Local"
- The `t()` fix uses `!== undefined` checks instead of `||` to properly handle empty string translations
- No layout or styling changes -- only translation logic and text content
