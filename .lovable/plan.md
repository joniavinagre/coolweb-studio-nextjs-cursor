

# Contact Page Visual Refinements

## Changes

### 1. Form card with background differentiation
Wrap the entire form column (heading + form) in a card-style container with a light gray background (`bg-muted/30` or similar), rounded corners of size xl, padding, and a subtle border -- matching the reference screenshot's elevated card look.

### 2. Remove Business Hours
Delete the Business Hours entry from the `contactInfo` array and remove the `Clock` import.

### 3. Consolidate contact info into a single card
Instead of rendering 3 separate cards (Email, Phone, Areas Served), group all three into one card. Each item will be a row inside the card with its icon and text, separated by dividers.

### 4. Reduce icon sizes
Change the icon container from `w-11 h-11` to `w-8 h-8` and the icon itself from `w-5 h-5` to `w-3.5 h-3.5` (roughly half).

## Technical Details

### File: `src/pages/Contact.tsx`

- **Remove** `Clock` from the lucide-react import
- **Update `contactInfo`**: Remove the Business Hours object, keeping only Email, Phone/WhatsApp, and Areas Served (3 items)
- **Form column** (lines 136-176): Wrap content in a container with classes like `bg-muted/30 rounded-2xl p-6 md:p-8 border border-border`; move the heading inside
- **Contact info section** (lines 116-132): Replace the `.map()` rendering individual cards with a single card containing all 3 items as rows, separated by `border-b` dividers (last item has no divider)
- **Icons**: Reduce icon box to `w-8 h-8 rounded-md` and icon to `w-3.5 h-3.5`

