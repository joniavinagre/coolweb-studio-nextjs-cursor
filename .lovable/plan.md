

## Fix Portfolio Headline Spacing on Desktop and Tablet

### Why It's Still Happening

The previous fix changed the class to `leading-none md:leading-tight`. This fixed **mobile only** because:

- Below 768px: `leading-none` applies (line-height: 1.0) -- tight, correct
- At 768px and above: `md:leading-tight` kicks in (line-height: 1.25) -- 25% extra spacing still visible

Since this headline wraps across multiple lines on desktop and tablet, the 1.25 line-height creates noticeable gaps between lines.

### The Fix

In `src/components/sections/PortfolioPreview.tsx` (line 34), change:

```
leading-none md:leading-tight
```

to just:

```
leading-none
```

This applies tight line spacing (1.0) across all screen sizes, matching how other headlines on the site appear.

### Files Changed

| File | Change |
|------|--------|
| `src/components/sections/PortfolioPreview.tsx` | Line 34: Remove `md:leading-tight`, keep only `leading-none` |

