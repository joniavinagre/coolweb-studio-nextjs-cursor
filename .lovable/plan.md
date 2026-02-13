

## Fix Disappearing Cards After Language Switch

### Root Cause

The issue is that **translated text is used as React `key` props** on elements inside framer-motion containers that have `viewport={{ once: true }}`.

Here's what happens:
1. On first load, framer-motion animates cards from `opacity: 0` to `opacity: 1` using `whileInView` with `once: true`
2. When the language switches, the `key` prop changes (e.g., `key="Web Development"` becomes `key="Desarrollo Web"`)
3. React treats a changed key as a completely new element -- it **unmounts** the old one and **mounts** a fresh one
4. The fresh element starts at `initial="hidden"` (opacity: 0)
5. But the parent container's `whileInView` already fired and won't fire again (`once: true`)
6. Result: the new element is stuck at opacity 0 -- invisible

### Affected Components

Every component that uses `key={translatedText}` inside a framer-motion staggered container:

| File | Current key | Fix |
|------|------------|-----|
| `ServicesPreview.tsx` (line 53) | `key={service.title}` | `key={service.href}` (stable) |
| `PricingPreview.tsx` (line 91) | `key={tier.name}` | `key={index}` |
| `PricingPreview.tsx` (line 98) | `key={feature.text}` | `key={index}` |
| `WhyChooseUs.tsx` (line 55) | `key={feature.title}` | `key={index}` |
| `PerformanceSection.tsx` (line 48) | `key={stat.label}` | `key={index}` |
| `PerformanceSection.tsx` (line 59) | `key={benefit.title}` | `key={index}` |
| `Testimonials.tsx` | `key={testimonial.name}` | `key={index}` (names are stable, but for consistency) |
| `Services.tsx` (line 199) | `key={tier.name}` | `key={tierIndex}` |
| `Services.tsx` (line 206) | `key={feature.text}` | `key={featureIndex}` |
| `About.tsx` (line 118) | `key={value.title}` | `key={index}` |

### The Fix

Replace all translated-text-based `key` props with **stable keys** -- either array indices or non-translated identifiers (like `href` or `id`). Since these are static lists that never reorder or change length, using index as key is perfectly safe and correct.

### No Layout or Styling Changes

Only `key` props change. No visual, layout, or animation behavior changes.

