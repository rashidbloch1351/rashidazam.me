# rashidazam.me — Next.js 14 App Router Portfolio & Authority Engine

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![Deployment](https://img.shields.io/badge/Vercel-Deployed-000000?logo=vercel)](https://vercel.com/)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-98%2F100-brightgreen)](https://developers.google.com/web/tools/lighthouse)

The official personal portfolio and digital authority platform for **M. Rashid Azam** — Technical SEO Consultant, Full-Stack Web Developer, and YouTube Educator.

Rebuilt from a legacy Vite client-side single-page application into a high-performance, **88-page static site generation (SSG)** Next.js 14 App Router architecture deployed on Vercel.

---

## Table of Contents

1. [Features & Highlights](#features--highlights)
2. [Tech Stack](#tech-stack)
3. [Project Directory Architecture](#project-directory-architecture)
4. [Environment Setup & Installation](#environment-setup--installation)
5. [Available Scripts](#available-scripts)
6. [Data Editing Guide](#data-editing-guide)
7. [Vercel Deployment Guide](#vercel-deployment-guide)
8. [Redirects & SEO Strategy](#redirects--seo-strategy)
9. [Documentation Index](#documentation-index)

---

## Features & Highlights

- **88 SSG URLs**: Fully static prerendering for instant global CDN delivery.
- **Topic Cluster Hubs**: Dedicated silo architecture for `/seo`, `/youtube`, `/marketing`, and `/tools`.
- **Verified Proof Matrix**: 21 deep case studies with verified deliverables, live project links, tech tags, and schema.
- **Server Action Lead Capture**: Form submission with Resend email delivery and honeypot anti-spam verification.
- **Comprehensive Schema**: Embedded JSON-LD (`Person`, `Organization`, `Service`, `CreativeWork`, `BlogPosting`, `FAQPage`, `BreadcrumbList`).
- **Core Web Vitals Optimized**: Lighthouse 98/100 Performance, 100/100 Accessibility, 100/100 Best Practices, 100/100 SEO.
- **Technical SEO Native**: Dynamic `sitemap.ts` (88 URLs), `robots.ts`, and AI crawler friendly `public/llms.txt`.
- **WCAG 2.1 AA Accessible**: Keyboard navigation, screen-reader focus skip links, and compliant color contrast ratios.

---

## Tech Stack

- **Framework**: Next.js 14 (App Router, SSG)
- **Language**: TypeScript (Strict mode)
- **Styling**: Tailwind CSS, CSS Custom Properties (Warm Editorial Dark Theme)
- **Icons**: Lucide React
- **Email Delivery**: Resend API (`resend` SDK) + React Server Actions
- **Font Optimization**: Google Fonts (`Outfit` display font, `Inter` body font via `next/font/google`)
- **Image Optimization**: `next/image` with WebP/AVIF output formats
- **Code Quality**: ESLint, PostCSS, Custom Link Audit Suite

---

## Project Directory Architecture

```
portfolio/
├── app/                        # Next.js 14 App Router
│   ├── actions/                # Server Actions (contact.ts)
│   ├── about/                  # About Me page
│   ├── blog/                   # Blog Hub & [slug] dynamic post pages (23 posts)
│   ├── contact/                # Contact page with Resend lead form
│   ├── marketing/              # Digital Marketing cluster hub & [topic] pages
│   ├── privacy-policy/         # Legal Privacy Policy page
│   ├── projects/               # Projects Hub, [category] hubs, & [project] case studies
│   ├── seo/                    # SEO cluster hub & [topic] pages
│   ├── services/               # Services Hub & [slug] pillar pages (6 pillars)
│   ├── terms-of-service/       # Legal Terms of Service page
│   ├── thank-you/              # Form submission confirmation page (noindex)
│   ├── tools/                  # Free Marketing & SEO Tools Hub
│   ├── youtube/                # YouTube cluster hub & [topic] pages
│   ├── favicon.ico             # Site favicon
│   ├── globals.css             # Global Tailwind directives & custom CSS tokens
│   ├── layout.tsx              # Root HTML shell, metadata, Header & Footer
│   ├── not-found.tsx           # Custom 404 error page
│   ├── page.tsx                # Homepage
│   ├── robots.ts               # Dynamic robots.txt handler
│   └── sitemap.ts              # Dynamic sitemap.xml generator (88 static URLs)
├── components/                 # Shared UI Components
│   ├── AuthorBox.tsx           # Article author box component
│   ├── BlogCard.tsx            # Blog post snippet card
│   ├── Button.tsx              # Dynamic CTA button component
│   ├── Container.tsx           # Standardized width wrapper
│   ├── CTABanner.tsx           # Global high-converting lead banner
│   ├── FAQAccordion.tsx        # Accessible interactive FAQ accordion
│   ├── Footer.tsx              # Site-wide navigation footer
│   ├── Header.tsx              # Responsive navigation header with mobile drawer
│   ├── ProjectCard.tsx         # Verified case study card
│   ├── ProofStrip.tsx          # Key metric counter strip
│   ├── QuickAnswer.tsx         # Generative engine (GEO) quick answer box
│   ├── RelatedLinks.tsx        # Cross-silo contextual linking component
│   ├── SectionHeading.tsx     # Typography section header
│   ├── ServiceCard.tsx        # Pillar service card
│   └── WhatsAppButton.tsx      # Floating quick-chat widget
├── data/                       # Content Store & Static Schemas
│   ├── blog.ts                 # 23 verified blog post articles & metadata
│   ├── faqs.ts                 # Categorized FAQ data store
│   ├── projects.ts             # 21 verified client case studies with metrics
│   ├── services.ts             # 6 pillar services content data
│   └── clusters/               # Cluster sub-topic data definitions
│       ├── marketing.ts        # Digital marketing sub-topic data
│       ├── seo.ts              # SEO sub-topic data
│       └── youtube.ts          # YouTube automation sub-topic data
├── docs/                       # Project Documentation & Strategy Manifests
│   ├── audit.md                # Phase 0 asset & URL audit
│   ├── blog-audit.md           # Blog inventory & title modernization audit
│   ├── content-calendar.md     # 12-month post-launch content strategy
│   ├── content-plan.md         # Content architecture & GEO strategy
│   ├── design-system.md        # Warm Editorial design system tokens
│   ├── internal-linking-plan.md# Topical cluster linking matrix
│   ├── keyword-map.md          # 88-page primary/secondary keyword map
│   ├── link-audit.md           # 0 orphan URL verification report
│   ├── performance-qa-report.md# Core Web Vitals & accessibility audit
│   ├── project-verification.md # 21 case study proof matrix
│   ├── redirects.md            # Legacy URL 301 mapping table
│   ├── seo-audit.md            # Technical SEO compliance report
│   └── todo-rashid.md          # Client asset checklist
├── public/                     # Static Public Assets
│   ├── images/                 # Optimized portfolio & project WebP assets
│   ├── llms.txt                # AI LLM context documentation file
│   └── robots.txt              # Standard robots file fallback
├── scripts/                    # Maintenance & QA Automation
│   └── run-link-audit.js       # Internal link & orphan page analyzer
├── .env.example                # Template for required environment variables
├── next.config.mjs             # Next.js config & 301 permanent redirects
├── package.json                # Project dependencies & scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.ts          # Custom color palette & typography theme
└── tsconfig.json               # TypeScript configuration with `@/*` aliases
```

---

## Environment Setup & Installation

### Prerequisites

- **Node.js**: `v18.17.0` or higher
- **npm**: `v9.0.0` or higher
- **Git**: installed locally

### Quick Start

1. **Clone the repository**:
   ```bash
   git clone https://github.com/rashidazam/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

   Fill in your Resend API key and email recipient:
   ```env
   RESEND_API_KEY=re_your_actual_resend_api_key
   CONTACT_RECIPIENT_EMAIL=rashidbloch1351@gmail.com
   NEXT_PUBLIC_SITE_URL=https://www.rashidazam.me
   ```

4. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| **Development** | `npm run dev` | Starts local development server on port 3000 |
| **Production Build** | `npm run build` | Compiles production bundle & generates 88 static pages |
| **Start Production** | `npm run start` | Launches built production server locally |
| **Linting** | `npm run lint` | Runs ESLint and checks TypeScript code validity |
| **Link Audit** | `node scripts/run-link-audit.js` | Audits internal links across all 88 URLs for zero orphans |

---

## Data Editing Guide

All text content, blog posts, case studies, and services are decoupled from UI components and stored in clean TypeScript arrays under `/data/`.

### 1. Adding or Editing a Service
Edit [`data/services.ts`](file:///d:/portfolio/data/services.ts):
```typescript
export const services: Service[] = [
  {
    slug: 'seo-services',
    title: 'SEO Services',
    // Edit features, FAQs, process steps, schema properties...
  },
];
```

### 2. Adding a New Case Study
Edit [`data/projects.ts`](file:///d:/portfolio/data/projects.ts):
Add your project object under the relevant category (`e-commerce-store`, `youtube-automation`, `corporate-website`, etc.). The page will automatically prerender at `/projects/[category]/[project-slug]`.

### 3. Publishing a New Blog Post
Edit [`data/blog.ts`](file:///d:/portfolio/data/blog.ts):
Add your article object with `slug`, `title`, `excerpt`, `content`, `author`, `publishedAt`, `readingTime`, and `tags`. The dynamic route `/blog/[slug]` will statically compile it on the next build.

---

## Vercel Deployment Guide

Deploying `rashidazam.me` on Vercel requires zero complex server setups:

### 1. Import Repository
1. Log into your [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **Add New** > **Project**.
3. Select your Git repository `portfolio` (branch `main` or `rebuild-next`).

### 2. Configure Project Settings
- **Framework Preset**: `Next.js`
- **Root Directory**: `./`
- **Build Command**: `npm run build`
- **Output Directory**: `.next`

### 3. Add Environment Variables
Under **Environment Variables**, add:
- `RESEND_API_KEY`: *(Your secret Resend API key starting with `re_`)*
- `CONTACT_RECIPIENT_EMAIL`: `rashidbloch1351@gmail.com`
- `NEXT_PUBLIC_SITE_URL`: `https://www.rashidazam.me`

### 4. Deploy & Connect Domain
1. Click **Deploy**. Vercel will run `npm run build` and generate all 88 static pages automatically.
2. Under **Project Settings** > **Domains**, add `rashidazam.me` and `www.rashidazam.me`.
3. Update your domain DNS records:
   - `A` Record: `@` -> `76.76.21.21`
   - `CNAME` Record: `www` -> `cname.vercel-dns.com`

---

## Redirects & SEO Strategy

All 41 original sitemap URLs from the legacy site have been preserved 1:1. Additionally, permanent 301 redirects are configured in [`next.config.mjs`](file:///d:/portfolio/next.config.mjs) for legacy `.html` extensions:

- `/index.html` -> `/`
- `/about.html` -> `/about`
- `/services.html` -> `/services`
- `/projects.html` -> `/projects`
- `/blog.html` -> `/blog`
- `/contact.html` -> `/contact`
- `/privacy-policy.html` -> `/privacy-policy`
- `/terms-of-service.html` -> `/terms-of-service`

---

## Documentation Index

For detailed architectural specifications, review the docs in [`docs/`](file:///d:/portfolio/docs/):

- [`docs/audit.md`](file:///d:/portfolio/docs/audit.md) — Initial asset, image, and route discovery audit.
- [`docs/keyword-map.md`](file:///d:/portfolio/docs/keyword-map.md) — 88-page target keyword & meta title mapping.
- [`docs/internal-linking-plan.md`](file:///d:/portfolio/docs/internal-linking-plan.md) — Topic cluster internal linking architecture.
- [`docs/content-plan.md`](file:///d:/portfolio/docs/content-plan.md) — GEO answer box & content pillar plan.
- [`docs/design-system.md`](file:///d:/portfolio/docs/design-system.md) — Color palette, typography & component tokens.
- [`docs/project-verification.md`](file:///d:/portfolio/docs/project-verification.md) — 21 case study proof matrix.
- [`docs/blog-audit.md`](file:///d:/portfolio/docs/blog-audit.md) — Blog post inventory & modernization log.
- [`docs/content-calendar.md`](file:///d:/portfolio/docs/content-calendar.md) — 12-month post-launch expansion calendar.
- [`docs/link-audit.md`](file:///d:/portfolio/docs/link-audit.md) — Internal link audit & orphan page audit report.
- [`docs/seo-audit.md`](file:///d:/portfolio/docs/seo-audit.md) — Complete technical SEO & schema verification.
- [`docs/performance-qa-report.md`](file:///d:/portfolio/docs/performance-qa-report.md) — Core Web Vitals & accessibility report.

---

© 2026 M. Rashid Azam | Deployed with Next.js 14 & Vercel
