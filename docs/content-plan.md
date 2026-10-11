# RASHID AZAM — CONTENT ARCHITECTURE & ON-PAGE PLAN (`/docs/content-plan.md`)

This document outlines the content architecture, heading hierarchy (H1, H2, H3), schema structured data specifications, internal linking rules, and conversion elements for the **Rashid Azam Personal Portfolio website (`https://www.rashidazam.me`)**.

---

## 1. CONTENT ARCHITECTURE & DESIGN SYSTEM

- **Design Tokens**:
  - Background: Clean white (`#ffffff`) and soft slate background (`bg-slate-50`).
  - Text: Dark readable slate (`#0f172a` headers, `#475569` body).
  - Accent Color: Premium warm amber (`#d97706` / `text-[#d97706]`).
- **Typography & Accessibility**:
  - Semantic HTML5 heading hierarchy: Single `<h1>` per page.
  - Interactive elements with `min-h-[44px]` touch targets.

---

## 2. STRUCTURAL PAGE PLANS

### 2.1 Homepage (`/`)
- **H1 Header**: `Full-Stack Web Developer & Technical SEO Specialist in Pakistan`
- **Target Keywords**: `seo expert in pakistan`, `technical seo expert pakistan`, `web developer pakistan`
- **Key Sections**:
  1. Hero section with genuine photo ([`public/images/branding/profile-hero.jpg`](file:///d:/portfolio/public/images/branding/profile-hero.jpg)), verified credential badges, call-to-action buttons.
  2. Proof Strip (Verified skills, tech stack: Next.js, TypeScript, Tailwind, Node.js, Python, Schema.org).
  3. Services Overview Grid (Technical SEO, Web Development, Local SEO, AI SEO, etc.).
  4. Pakistan Cities & Markets Directory section.
  5. FAQ Accordion section.
  6. Author Box & CTA Banner.
- **Schema Types**: `Person`, `WebSite`, `FAQPage`, `BreadcrumbList`.

### 2.2 About Page (`/about`)
- **H1 Header**: `About Rashid Azam — Technical SEO Engineer & Full-Stack Developer`
- **Key Sections**:
  1. Founder Bio & Professional Background.
  2. Core Engineering Principles & Technical Philosophy.
  3. Proven Track Record & Verification.
  4. Work History & Client Work Summary.
  5. Direct Consultation Call to Action.
- **Schema Types**: `Person`, `AboutPage`, `BreadcrumbList`.

### 2.3 Locations Hubs (`/locations/[slug]`)
- **H1 Header Pattern**: `{City/Market} SEO Services & Technical Web Development`
- **Key Sections**:
  1. Geo-specific Breadcrumbs (`Home > Locations > {City/Market}`).
  2. Local Hero Section with geo-specific value propositions.
  3. Local Search & Business Growth Capabilities (Local Pack, Technical Audits, Core Web Vitals).
  4. Regional City & Market Context (e.g. Arfa Software Park in Lahore, Blue Area in Islamabad, Saddar/Clifton in Karachi, D-Ground in Faisalabad, Gulgasht in Multan).
  5. FAQ Accordion for Local Clients.
  6. Internal Link Engine to other local hubs and pillar services.
- **Schema Types**: `LocalBusiness` / `ProfessionalService`, `FAQPage`, `BreadcrumbList`.

### 2.4 Pillar Service Pages (`/services/[slug]`)
- **H1 Header Pattern**: `{Service Name} Services`
- **Key Sections**:
  1. Pillar Service Badge & High-Intent H1 Title.
  2. Executive Summary & Value Proposition.
  3. Core Technical Capabilities Grid.
  4. Comprehensive Service Methodology / Process.
  5. Interlinked Case Studies & Proof Points.
  6. Contextual Related Links Engine ([`components/RelatedLinks.tsx`](file:///d:/portfolio/components/RelatedLinks.tsx)).
  7. Service FAQ Accordion & Author Bio.
- **Schema Types**: `Service`, `FAQPage`, `BreadcrumbList`.

### 2.5 SEO Knowledge Hub (`/seo`, `/seo/[topic]`)
- **H1 Header Pattern**: `SEO Knowledge Hub — Technical SEO Guides & Local Ranking Playbooks`
- **Key Sections**:
  1. Technical Guide Categories (Technical Audits, Local Maps, Schema Markup, Keyword Intent).
  2. Deep In-Depth Engineering Guides with Code Examples (JSON-LD snippets, robots.txt, Core Web Vitals).
  3. Author Bio & Consultation CTA.
- **Schema Types**: `CollectionPage` / `TechArticle`, `FAQPage`, `BreadcrumbList`.

---

## 3. INTERNAL LINKING ENGINE RULES

1. **No Orphan Pages**: Every static page must receive at least 3 inbound internal contextual links from relevant parent, sibling, or cluster pages.
2. **Contextual Anchor Text**: Anchor text must reflect actual keyword targets (e.g., `Technical SEO Audit Guide`, `Local SEO Services in Lahore`, `WordPress Development Services`).
3. **Location Cross-Linking**: Every location page links to nearby city hubs (e.g., Lahore links to Islamabad and Karachi) as well as the main Services hub and contact form.
4. **No Legacy Links**: Zero links to deleted `/blog` or `/projects` routes exist in the codebase.
