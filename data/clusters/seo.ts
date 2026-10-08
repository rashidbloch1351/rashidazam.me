export interface ClusterTopic {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  quickAnswer: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
  relatedTopics: string[];
  relatedServices: string[];
  relatedProjects: string[];
}

export const seoClusterTopics: ClusterTopic[] = [
  {
    slug: "technical-seo-audit-guide",
    title: "Technical SEO Audit Guide",
    h1: "Step-by-Step Technical SEO Audit Guide (2026)",
    metaTitle: "Technical SEO Audit Guide 2026 | Step-by-Step Checklist",
    metaDescription: "Learn how to conduct a thorough technical SEO audit. Covers crawl errors, indexability, site speed, schema markup, and canonical structure.",
    quickAnswer: "A technical SEO audit evaluates a website's infrastructure, crawlability, indexation, speed, and architecture to ensure search engines can properly discover, parse, and rank all important pages.",
    intro: "Before creating content or building backlinks, your site's technical health must be clean. Crawl errors, canonical conflicts, or broken rendering pipelines actively suppress organic performance.",
    sections: [
      {
        heading: "1. Crawlability & Indexation Diagnostics",
        body: [
          "Start by inspecting Google Search Console's Page Indexing report. Identify pages blocked by robots.txt, noindex directives, or 404 response codes.",
          "Run a full site crawl using Screaming Frog or Sitebulb to catch redirect chains, orphan URLs, and non-canonical pages receiving internal links."
        ]
      },
      {
        heading: "2. Core Web Vitals & Performance Optimization",
        body: [
          "Evaluate Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) on real mobile devices.",
          "Optimize server response time (TTFB), leverage AVIF/WebP image formats, and minimize render-blocking JavaScript bundles."
        ]
      },
      {
        heading: "3. Schema & Entity Structured Data",
        body: [
          "Validate JSON-LD structured data implementation across key templates. Ensure Organization, Person, Service, and BreadcrumbList schemas render cleanly without errors."
        ]
      }
    ],
    relatedTopics: ["on-page-seo-schema-markup", "local-seo-pakistan-uae", "keyword-research-intent"],
    relatedServices: ["seo-services", "web-development"],
    relatedProjects: ["seo-blog-project"]
  },
  {
    slug: "local-seo-pakistan-uae",
    title: "Local SEO Strategy for Pakistan & UAE",
    h1: "Local SEO Guide for Pakistan & UAE Service Businesses",
    metaTitle: "Local SEO Guide Pakistan & UAE | Rank in Google Map Pack",
    metaDescription: "Master local SEO in Pakistan and UAE. Learn Google Business Profile optimization, localized landing pages, and review strategies for higher conversions.",
    quickAnswer: "Local SEO optimizes online presence to attract local customers searching in specific geographic areas like Lahore, Dubai, Karachi, or Abu Dhabi through map packs and localized search queries.",
    intro: "For brick-and-mortar stores and local service providers in Pakistan and the UAE, local search rankings drive immediate phone calls, WhatsApp inquiries, and walk-in leads.",
    sections: [
      {
        heading: "1. Google Business Profile Optimization",
        body: [
          "Claim and fully optimize your Google Business Profile with accurate primary category, localized description, operating hours, and high-resolution geotagged photos.",
          "Maintain NAP (Name, Address, Phone number) consistency across all local directories and business citations in Pakistan and the UAE."
        ]
      },
      {
        heading: "2. City-Specific Service Landing Pages",
        body: [
          "Build dedicated, highly relevant landing pages for core operational areas (e.g. Dubai, Abu Dhabi, Lahore, Islamabad) featuring unique testimonials and local case studies."
        ]
      }
    ],
    relatedTopics: ["technical-seo-audit-guide", "on-page-seo-schema-markup"],
    relatedServices: ["seo-services", "digital-marketing"],
    relatedProjects: ["personal-branding-portfolio"]
  },
  {
    slug: "on-page-seo-schema-markup",
    title: "On-Page SEO & Schema Markup",
    h1: "On-Page SEO Optimization & JSON-LD Schema Integration",
    metaTitle: "On-Page SEO & JSON-LD Schema Guide | Ranking Framework",
    metaDescription: "Master on-page SEO optimization. Title tag crafting, heading structure, internal contextual linking, and structured JSON-LD schema implementation.",
    quickAnswer: "On-page SEO involves structuring page elements — title tags, headings, internal links, media, and JSON-LD schema — to match user search intent and maximize semantic understanding for search engines.",
    intro: "On-page optimization transforms raw content into indexed search authority. By structuring semantic HTML and JSON-LD schema, search engines parse exact entity relationships.",
    sections: [
      {
        heading: "1. Intent-Driven Heading Hierarchy",
        body: [
          "Structure your document with a single descriptive H1 tag followed by logical H2 and H3 subsections that address primary and secondary search intents."
        ]
      },
      {
        heading: "2. JSON-LD Schema Implementation",
        body: [
          "Embed validated JSON-LD schema markup directly into the page HEAD to communicate entity types such as Person, Article, WebSite, and FAQPage."
        ]
      }
    ],
    relatedTopics: ["technical-seo-audit-guide", "keyword-research-intent"],
    relatedServices: ["seo-services", "content-writing"],
    relatedProjects: ["seo-blog-project"]
  },
  {
    slug: "keyword-research-intent",
    title: "Keyword Research & Search Intent",
    h1: "Keyword Research & Search Intent Mapping Framework",
    metaTitle: "Keyword Research & Search Intent Guide 2026 | Content Strategy",
    metaDescription: "Discover how to conduct keyword research and map search intent (informational, transactional, commercial) to prevent page cannibalization.",
    quickAnswer: "Search intent mapping categorizes target keywords into informational, commercial, transactional, or navigational buckets to ensure each URL serves the exact user requirement without competing internally.",
    intro: "Targeting high-volume keywords without understanding search intent leads to high bounce rates and low conversion. Intent alignment is the core of sustainable search growth.",
    sections: [
      {
        heading: "1. Intent Categorization Framework",
        body: [
          "Map target search queries into Informational (guides, blog posts), Commercial Investigation (comparison, reviews), and Transactional (hire, pricing, contact) buckets."
        ]
      }
    ],
    relatedTopics: ["on-page-seo-schema-markup", "technical-seo-audit-guide"],
    relatedServices: ["seo-services", "content-writing"],
    relatedProjects: ["seo-blog-project"]
  }
];
