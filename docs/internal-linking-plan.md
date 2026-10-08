# Internal Linking Architecture & Plan — rashidazam.me

**Date**: October 8, 2026  
**Core Goal**: Establish a strict Hub-and-Spoke internal link graph where every page has at least 3 inbound contextual internal links and 3 outbound contextual links, eliminating orphan pages and distributing PageRank effectively.

---

## 1. High-Level Site Graph & Link Flow

```
[ Homepage / ]
   ├──> All 6 Pillar Services (/services/*)
   ├──> 3 Topic Cluster Hubs (/seo, /youtube, /marketing)
   ├──> 4 Featured Verified Projects (/projects/*)
   ├──> 3 Featured Blog Articles (/blog/*)
   └──> Contact Page (/contact)

[ Pillar Service Page ] (Money Page)
   ├──> Primary Cluster Hub (e.g. /services/seo-services -> /seo)
   ├──> 3-5 Specific Cluster Topic Pages
   ├──> 2-3 Relevant Verified Projects
   ├──> 2-3 Related Blog Posts
   ├──> Related Services (Max 2)
   └──> Direct Lead Contact CTA (/contact)

[ Topic Cluster Hub ] (Topic Gateway)
   ├──> Every Topic Sub-Page in the Cluster
   └──> Primary Pillar Service (Primary CTA)

[ Cluster Topic Page ] (Spoke Content)
   ├──> 2-3 Sibling Topic Pages in Cluster
   ├──> Primary Pillar Service (Contextual Link in Body)
   ├──> 1 Relevant Project Case Study
   └──> Direct Contact CTA

[ Project Category Page ] & [ Case Study ]
   ├──> Parent Category & Projects Hub
   ├──> Service Page that produced the project
   ├──> 1-2 Related Blog Posts
   ├──> External Live URL (rel="noopener", new tab)
   └──> Contact CTA

[ Blog Article ]
   ├──> 1 Primary Pillar Service (Descriptive Anchor)
   ├──> 1 Topic Cluster Sub-Page
   ├──> 2 Related Blog Posts
   ├──> Author Box (/about)
   └──> Contact CTA
```

---

## 2. Centralized Link Mapping Engine (`/data/links.ts`)

Instead of hardcoding link URLs inline inside JSX text, all contextual link relationships will be driven by a strongly-typed data file located at `/data/links.ts`:

```typescript
export interface LinkRelationship {
  id: string;
  url: string;
  anchorText: string;
  description: string;
  category: 'service' | 'cluster' | 'project' | 'blog';
}

export const relatedLinksMap: Record<string, LinkRelationship[]> = {
  'seo-services': [
    { id: 'seo-cluster', url: '/seo', anchorText: 'SEO Knowledge Hub', description: 'Explore deep guides on crawl budgets, technical audits, and schema.', category: 'cluster' },
    { id: 'proj-wiserank', url: '/projects/seo-blog-project', anchorText: 'WiseRank Case Study', description: 'See how we ranked WiseRank #1 on Google UK.', category: 'project' },
    { id: 'blog-onpage', url: '/blog/on-page-seo-checklist-every-page', anchorText: 'On-Page SEO Checklist', description: 'Step-by-step checklist for on-page optimization.', category: 'blog' },
  ],
  // Maps defined for all routes
};
```

---

## 3. Automated Link Audit Script (`scripts/link-audit.ts`)

During every build (`npm run build`), a custom TypeScript script will scan all generated routes and verify the following rules:

1. **Zero Orphan Pages**: Every static HTML page must have $\ge 3$ inbound internal links.
2. **Outbound Contextual Links**: Every static HTML page must have $\ge 3$ outbound internal links in the main content area (excluding header/footer navigation).
3. **Zero Broken Internal Links**: Every internal `href` must match a valid generated route.
4. **Anchor Diversity Check**: Ensure target pages are linked with descriptive anchor text (e.g. "technical SEO audit" instead of "click here" or repetitive exact-match spam).

The script will produce a report file at `/docs/link-audit.md` before site launch.

---

## 4. Anchor Text Guidelines

- **Allowed**: "View our custom Next.js web development portfolio", "read our technical SEO audit checklist", "learn about YouTube channel automation".
- **Banned**: "Click here", "read more", "link", "here", "this article", or repeated identical exact-match keywords on every page.
- **Contextual Placement**: Inbound links MUST appear within natural paragraph sentences, inside "Related Services" cards, or in author bio cards.
