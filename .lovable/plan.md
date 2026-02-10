
# Restructure Contact Page

## Overview
Rebuild the Contact page with a clean 50/50 two-column layout: contact info on the left, contact form on the right. On mobile, the form appears first with contact info below. Remove the Calendly/consultation section entirely.

## Layout Structure

**Desktop (lg and up):**
- Left column: "Get In Touch" heading, subtitle, then contact info items stacked vertically (Email, Phone/WhatsApp, Areas Served, Business Hours)
- Right column: "Send Us a Message" heading, form with Name, Email, Phone, Message fields, and submit button

**Mobile:**
- Form section first (appears on top)
- Contact info section second (appears below)
- Achieved using `order-2 lg:order-1` / `order-1 lg:order-2` classes

## Content Changes

1. **Remove**: "Book a Free Consultation" / Calendly section entirely
2. **Remove**: Service dropdown from the form
3. **Update contact info**:
   - Email: `contact@coolwebstudio.com` (mailto link)
   - Phone/WhatsApp: `+34 697 76 04 18` (tel link, label changed to "Phone / WhatsApp")
   - Areas Served (replaces Location): "Spain, France, Portugal, United States" (uses Globe icon instead of MapPin)
   - Business Hours: keep as-is
4. **Simplify form fields**: Name, Email, Phone, Message only (remove service dropdown)
5. **Remove `service` from formData state**

## Technical Details

### File: `src/pages/Contact.tsx`
- Update `contactInfo` array with new data (email, phone, areas served, hours)
- Remove `Calendar` import, add `Globe` from lucide-react
- Remove `service` from form state
- Restructure the grid: contact info column gets `order-2 lg:order-1`, form column gets `order-1 lg:order-2`
- Remove the entire Calendly embed block (lines 195-221)
- Contact info items displayed as a vertical stack (not 2x2 grid), each with icon, title, and content
- Each contact info item styled as a card with icon box, similar to current but stacked vertically for a cleaner left-column look
