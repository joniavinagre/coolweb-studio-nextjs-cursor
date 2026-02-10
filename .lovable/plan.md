

# Fix Page Transitions, Button Hover Colors, and Mobile Menu Styling

## 1. Snap-to-top on page navigation

**File: `src/App.tsx`**

Create a `ScrollToTop` component that listens to route changes via `useLocation` and scrolls to the top on every navigation. Place it inside `BrowserRouter`.

## 2. Remove purple hover from "About Us" button in hero

**File: `src/components/sections/Hero.tsx` (line 48)**

The "About Us" button uses `variant="outline"`, which applies `hover:bg-accent` (purple). Remove `variant="outline"` and keep the existing explicit classes (`bg-navy border-2 border-primary-foreground/40 text-primary-foreground ... btn-swipe-navy`). The `btn-swipe-navy` class already handles the light-blue swipe hover effect, so no purple should appear.

## 3. Remove purple hover from burger menu icon

**File: `src/components/layout/Header.tsx` (line 106)**

The burger menu button uses `variant="ghost"`, which applies `hover:bg-accent` (purple). Replace `variant="ghost"` with an unstyled approach: remove the variant and add `hover:bg-primary/20` (light blue tint) instead.

## 4. Make mobile menu more compact and close button visible

**File: `src/components/layout/Header.tsx`**

- **Line 112**: Reduce `gap-8` to `gap-4` and `mt-8` to `mt-4` in the inner flex container
- **Line 124**: Reduce nav link `gap-2` to `gap-1` and link padding `py-3` to `py-2`
- **Line 142-144**: Reduce CTA button `mt-4` to `mt-2`

**File: `src/components/ui/sheet.tsx`**

- Update the close button `X` icon: add `text-white` class so it's visible against the navy background. This applies globally but since the sheet is only used for the mobile menu, it's appropriate.

Alternatively, pass a custom class in `Header.tsx` by using `SheetClose` or styling via CSS. The simplest approach: in `sheet.tsx`, the close button `X` currently has no explicit text color -- add a conditional or just ensure it inherits. Since the `SheetContent` in the Header has `bg-navy`, we should override the close button color directly in `Header.tsx` by adding a custom class to `SheetContent` and styling the close button via CSS.

**Simpler approach**: In `sheet.tsx` line 64, the close button has `opacity-70`. Add `text-primary-foreground` won't work universally. Instead, in `Header.tsx`, after `SheetContent`, we can style the close button by targeting it. The cleanest fix: update the `SheetContent` in `Header.tsx` to include a class that makes the X white, or override in `index.css`.

**Chosen approach**: Add a `[&>button]:text-white` utility class to the `SheetContent` in `Header.tsx` (line 111) to make the close button white.

## Technical Summary

| File | Change |
|------|--------|
| `src/App.tsx` | Add `ScrollToTop` component inside `BrowserRouter` |
| `src/components/sections/Hero.tsx` line 48 | Remove `variant="outline"` from About Us button |
| `src/components/layout/Header.tsx` line 106 | Replace `variant="ghost"` with `variant="ghost"` + override: `hover:bg-primary/20 hover:text-primary` |
| `src/components/layout/Header.tsx` line 111 | Add `[&>button]:text-white` to SheetContent className |
| `src/components/layout/Header.tsx` line 112 | `gap-8 mt-8` to `gap-4 mt-4` |
| `src/components/layout/Header.tsx` line 124 | `gap-2` to `gap-1`, link `py-3` to `py-2` |
| `src/components/layout/Header.tsx` line 142-144 | `mt-4` to `mt-2` on CTA button |
