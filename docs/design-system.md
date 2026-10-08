# Design System & Visual Direction Brief — rashidazam.me

**Date**: October 8, 2026  
**Core Aesthetic Goal**: Wow the user at first glance with a human-crafted, premium, editorial aesthetic. Strictly avoid generic AI portfolio tropes (glowing blue/purple blobs, glassmorphism overload, generic card grids).

---

## 1. Visual Aesthetics & Design System Tokens

### 1.1 Palette & Color System (Warm Editorial Dark/Light Dual Mode)

```css
:root {
  /* Warm Editorial Dark Theme (Default) */
  --bg-primary: #0f1012;         /* Deep charcoal off-black background */
  --bg-secondary: #17181c;       /* Elevated dark charcoal for cards & containers */
  --bg-tertiary: #202228;        /* Subtle hover state background */
  
  --text-primary: #f3f4f6;       /* Crisp off-white primary typography */
  --text-secondary: #9ca3af;     /* Muted slate gray secondary typography */
  --text-muted: #6b7280;         /* Subtle caption & timestamp text */
  
  --accent-primary: #d97706;      /* Confident Amber / Warm Ochre accent */
  --accent-hover: #b45309;        /* Deep amber hover state */
  --accent-subtle: rgba(217, 119, 6, 0.12); /* Subtle accent tint background */
  
  --border-subtle: #272a30;       /* Thin, precise border lines */
  --border-strong: #374151;       /* Active input and focused element borders */
  
  --font-heading: 'Outfit', 'Plus Jakarta Sans', sans-serif;
  --font-body: 'Inter', 'Geist', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

### 1.2 Anti-Design & Visual Tropes Banned
- ❌ NO neon purple/blue glowing gradients.
- ❌ NO blurry glassmorphism cards with heavy frosted backdrops.
- ❌ NO centered generic hero layout with floating cards.
- ❌ NO emoji as icons (use precise, clean Lucide SVG icons only).
- ❌ NO "Welcome to my portfolio" intro text.
- ❌ NO animated counters counting up to unverifiable fake numbers.

### 1.3 Craft Touches & Interactive Details
- Hand-crafted SVG accent underlines for key headline words.
- Asymmetric 2-column editorial layouts with generous whitespace (rem-based scaling).
- Real photography of Rashid Azam with refined rounded corners (`rounded-xl`) and subtle border frames.
- Micro-interactions: Subtle card lift on hover (`translate-y-[-2px]`), crisp focus rings (`focus-visible:ring-2`), and native system transitions respecting `prefers-reduced-motion`.

---

## 2. Typography Hierarchy

- **Display Headings (`H1`)**: Font `Outfit` (700 Bold), size `clamp(2.5rem, 5vw, 4rem)`, line-height 1.1, tracking `-0.02em`.
- **Section Headings (`H2`)**: Font `Outfit` (600 SemiBold), size `clamp(1.75rem, 3vw, 2.5rem)`, line-height 1.2, tracking `-0.01em`.
- **Card Headings (`H3`)**: Font `Outfit` (600 SemiBold), size `1.25rem` (20px).
- **Body Text**: Font `Inter` (400 Regular), size `1rem` (16px), line-height 1.65 for optimal editorial readability.
- **Badges & Labels**: Font `Inter` (500 Medium), size `0.875rem` (14px), uppercase tracking `0.05em`.

---

## 3. PROPOSED VISUAL DIRECTIONS (FOR RASHID'S PICK)

We propose 3 distinct visual directions for `rashidazam.me`. All three feel human-crafted, premium, and free of AI portfolio tropes:

### Option A: Warm Editorial & Ochre (Recommended)
- **Vibe**: Tech-forward publication meets high-end independent agency.
- **Colors**: Deep Charcoal (`#0f1012`), Warm Off-White (`#f3f4f6`), and Confident Warm Amber/Ochre (`#d97706`).
- **Typography**: `Outfit` (Display) + `Inter` (Body).
- **Layout**: Asymmetric editorial grids, thin subtle dividers, prominent typography, real photography.

### Option B: Swiss Minimal & Emerald Accent
- **Vibe**: Clean, structured, highly technical, software-engineer focused.
- **Colors**: Matte Black (`#09090b`), Crisp Pure White (`#fafafa`), and Precise Emerald Green (`#10b981`).
- **Typography**: `Plus Jakarta Sans` (Display) + `Geist` (Body).
- **Layout**: Strict grid alignment, high contrast, technical metric badges, monospaced code elements.

### Option C: Warm Sand & Espresso (Modern Classic)
- **Vibe**: High-end consultant & personal branding authority.
- **Colors**: Dark Espresso (`#181614`), Warm Cream Off-White (`#f4f1ea`), and Burnt Terracotta (`#c85a32`).
- **Typography**: `Cabinet Grotesk` / `Outfit` + `Inter`.
- **Layout**: Magazine editorial spread feel, large quotation blocks, clean border cards.

---

## 4. Shared UI Primitives to Build (Phase 3)

1. `Container`: Max-width wrapper (`max-w-6xl` or `max-w-7xl`) with responsive padding.
2. `SectionHeading`: Standardized H2 + kicker badge + intro paragraph with editorial spacing.
3. `Button`: Primary (Amber accent), Secondary (Outlined dark), Ghost.
4. `ServiceCard`: Distinct 2-column or hover-elevated service summary card.
5. `ProjectCard`: Screenshot container + category tag + live link badge + stack badges.
6. `QuickAnswer`: Styled GEO box with amber border accent for direct AI search summaries.
7. `AuthorBox`: Bio card with profile photo, name, credentials, and link to `/about`.
8. `Breadcrumbs`: Clean semantic breadcrumb list with JSON-LD schema integration.
