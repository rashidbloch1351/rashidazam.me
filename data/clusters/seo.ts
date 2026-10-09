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
    quickAnswer: "A technical SEO audit evaluates a website infrastructure, crawlability, indexation, speed, and architecture to ensure search engines can properly discover, parse, and rank all important pages.",
    intro: "Before creating content or building backlinks, your site technical health must be clean. Crawl errors, canonical conflicts, or broken rendering pipelines actively suppress organic performance. This guide walks through a complete technical SEO audit process, from crawl diagnostics to structured data validation.",
    sections: [
      {
        heading: "1. Crawlability and Indexation Diagnostics",
        body: [
          "Start by inspecting Google Search Console Page Indexing report. Identify pages blocked by robots.txt, noindex directives, or 404 response codes.",
          "Run a full site crawl using Screaming Frog or Sitebulb to catch redirect chains, orphan URLs, and non-canonical pages receiving internal links.",
          "Check your XML sitemap for accuracy: all listed URLs should return 200 status codes, have canonical self-references, and should not be noindexed."
        ]
      },
      {
        heading: "2. Core Web Vitals and Performance Optimization",
        body: [
          "Evaluate Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) on real mobile devices using Google PageSpeed Insights.",
          "Optimize server response time (TTFB), leverage AVIF/WebP image formats, and minimize render-blocking JavaScript bundles to achieve LCP under 2.5 seconds.",
          "For WordPress sites, caching plugins, lazy-loading, and database optimization are frequently the highest-impact fixes. For Next.js sites, SSG and static asset optimization deliver near-perfect Lighthouse scores."
        ]
      },
      {
        heading: "3. Schema and Entity Structured Data",
        body: [
          "Validate JSON-LD structured data implementation across key templates. Ensure Organization, Person, Service, and BreadcrumbList schemas render cleanly without errors.",
          "Use Google Rich Results Test to confirm FAQ, Article, and Product schemas are valid and eligible for enhanced SERP features.",
          "Entity-aligned structured data directly strengthens your brand Knowledge Graph presence and improves AI search engine citation likelihood."
        ]
      },
      {
        heading: "4. Canonical Tags and URL Architecture",
        body: [
          "Verify that every indexable page has a self-referencing canonical tag and that paginated, filtered, or duplicated pages use proper canonical or noindex directives.",
          "Review internal link architecture to ensure that the highest-priority pages receive the greatest internal PageRank flow through strategic anchor text and linking structure."
        ]
      }
    ],
    relatedTopics: ["on-page-seo-schema-markup", "local-seo-pakistan-guide", "keyword-research-intent"],
    relatedServices: ["seo-services", "web-development", "technical-seo"],
    relatedProjects: []
  },
  {
    slug: "local-seo-pakistan-guide",
    title: "Local SEO for Pakistan Businesses",
    h1: "Local SEO Guide for Pakistan: Rank in Lahore, Islamabad and Karachi",
    metaTitle: "Local SEO Guide for Pakistan | Rank in Google Map Pack 2026",
    metaDescription: "How to implement local SEO for businesses in Lahore, Islamabad, Karachi, Faisalabad, and Multan. Google Business Profile optimization, citations, and local landing pages explained.",
    quickAnswer: "Local SEO in Pakistan means optimizing your Google Business Profile, building local citations with consistent NAP data, creating city-specific landing pages, and earning local reviews so your business appears in the Google Map Pack for local searches.",
    intro: "For businesses in Lahore, Islamabad, Karachi, Faisalabad, and Multan, local SEO is often the highest-ROI search investment available. When a potential customer searches for a service in a specific area, Google prioritizes the top three Map Pack results. This guide explains how to secure those positions.",
    sections: [
      {
        heading: "1. Google Business Profile Optimization",
        body: [
          "Claim and fully verify your Google Business Profile for every physical location. Select the most precise primary business category, which is the strongest local ranking signal.",
          "Write a compelling, keyword-rich business description that naturally includes your city and service type. Maintain consistent NAP data across your profile and all online directories.",
          "Upload high-resolution photos of your premises, team, and products. Regular photo updates signal an active business and improve profile engagement rates."
        ]
      },
      {
        heading: "2. City-Specific Service Landing Pages",
        body: [
          "Create dedicated, content-rich pages for each city or district you serve. A page targeting SEO services in Lahore should include unique content about the local market, specific service offerings in that area, and local business schema markup.",
          "Avoid duplicating content across city pages with only the city name changed. Each page should contain unique section headings, locally relevant context, and specific service descriptions tailored to that city."
        ]
      },
      {
        heading: "3. Citation Building for Pakistan Directories",
        body: [
          "Build consistent citations across Pakistan business directories including Pak Wheels Business, Zameen, OLX Business, and industry-specific platforms.",
          "Ensure your NAP data is identical across all platforms. Inconsistencies in phone number format, business name abbreviations, or address variations damage local ranking signals."
        ]
      }
    ],
    relatedTopics: ["technical-seo-audit-guide", "on-page-seo-schema-markup"],
    relatedServices: ["local-seo", "seo-services", "wordpress-seo"],
    relatedProjects: []
  },
  {
    slug: "on-page-seo-schema-markup",
    title: "On-Page SEO and Schema Markup",
    h1: "On-Page SEO Optimization and JSON-LD Schema Integration",
    metaTitle: "On-Page SEO and JSON-LD Schema Guide | Ranking Framework",
    metaDescription: "Master on-page SEO optimization. Title tag crafting, heading structure, internal contextual linking, and structured JSON-LD schema implementation.",
    quickAnswer: "On-page SEO involves structuring page elements including title tags, headings, internal links, media, and JSON-LD schema to match user search intent and maximize semantic understanding for search engines.",
    intro: "On-page optimization transforms raw content into indexed search authority. By structuring semantic HTML and JSON-LD schema, search engines parse exact entity relationships and assign precise topical relevance. This framework goes beyond basic plugin checks to cover the key elements that actually move rankings.",
    sections: [
      {
        heading: "1. Intent-Driven Heading Hierarchy",
        body: [
          "Structure your document with a single descriptive H1 tag followed by logical H2 and H3 subsections that address primary and secondary search intents.",
          "Use exact-match and close-variant keyword phrases in H1 and H2 tags. Avoid generic headings in favor of descriptive headings that answer specific user questions."
        ]
      },
      {
        heading: "2. Title Tags and Meta Descriptions",
        body: [
          "Write title tags of 50-60 characters that front-load the primary keyword. For local pages, include the city name early in the title.",
          "Write compelling meta descriptions of 140-155 characters that summarize the page value proposition and include a natural call-to-action phrase."
        ]
      },
      {
        heading: "3. JSON-LD Schema Implementation",
        body: [
          "Embed validated JSON-LD schema markup directly into the page HEAD to communicate entity types such as Person, Article, WebSite, Service, LocalBusiness, and FAQPage.",
          "For service businesses, implement Service schema with ServiceType, areaServed, and provider references to strengthen entity associations in the Knowledge Graph."
        ]
      },
      {
        heading: "4. Internal Linking Strategy",
        body: [
          "Use descriptive, keyword-rich anchor text for internal links. Link from high-authority hub pages to relevant pillar pages to distribute PageRank effectively.",
          "Every page should receive at least one internal link from a relevant page. Orphan pages with no internal links are often poorly ranked or excluded from crawl budgets."
        ]
      }
    ],
    relatedTopics: ["technical-seo-audit-guide", "keyword-research-intent", "wordpress-seo-guide"],
    relatedServices: ["seo-services", "content-writing", "technical-seo"],
    relatedProjects: []
  },
  {
    slug: "keyword-research-intent",
    title: "Keyword Research and Search Intent",
    h1: "Keyword Research and Search Intent Mapping Framework",
    metaTitle: "Keyword Research and Search Intent Guide 2026 | Content Strategy",
    metaDescription: "Discover how to conduct keyword research and map search intent (informational, transactional, commercial) to prevent page cannibalization.",
    quickAnswer: "Search intent mapping categorizes target keywords into informational, commercial, transactional, or navigational buckets to ensure each URL serves the exact user requirement without competing internally.",
    intro: "Targeting high-volume keywords without understanding search intent leads to high bounce rates and low conversion. Intent alignment is the core of sustainable search growth. This framework explains how to research, categorize, and assign keywords across your site architecture.",
    sections: [
      {
        heading: "1. Intent Categorization Framework",
        body: [
          "Map target search queries into four buckets: Informational, Commercial Investigation, Transactional, and Navigational. Each URL should serve exactly one primary intent.",
          "Mixing informational and transactional content on the same page confuses both users and search engines and results in pages that rank poorly for both intent types."
        ]
      },
      {
        heading: "2. Pakistan-Specific Keyword Research",
        body: [
          "For Pakistan markets, use Ahrefs or Semrush to identify localized search queries. High-opportunity terms like seo services in lahore (3,600/mo, KD 22) or seo expert in islamabad (KD 9) represent high-ROI targets with relatively low competition.",
          "For new or growing websites, prioritize keywords with KD under 25 and volume above 100 monthly searches before pursuing more competitive head terms."
        ]
      },
      {
        heading: "3. Keyword Mapping and URL Assignment",
        body: [
          "Create a keyword map spreadsheet assigning a primary keyword, secondary keywords, target URL, page type, and intent category for every key page.",
          "Prevent keyword cannibalization by ensuring no two pages target the same primary keyword. If overlap exists, consolidate pages or use canonical tags to designate the authoritative version."
        ]
      }
    ],
    relatedTopics: ["on-page-seo-schema-markup", "technical-seo-audit-guide", "local-seo-pakistan-guide"],
    relatedServices: ["seo-services", "content-writing", "seo-audit"],
    relatedProjects: []
  },
  {
    slug: "wordpress-seo-guide",
    title: "WordPress SEO Optimization Guide",
    h1: "WordPress SEO Guide: Optimize Your WordPress Site for Google (2026)",
    metaTitle: "WordPress SEO Guide 2026 | Speed, Schema and On-Page Optimization",
    metaDescription: "Step-by-step WordPress SEO guide covering plugin setup, speed optimization, image SEO, internal linking, and structured data for WordPress websites.",
    quickAnswer: "WordPress SEO requires configuring an SEO plugin such as Rank Math or Yoast, optimizing site speed through caching and image compression, structuring content with proper headings and internal links, and implementing JSON-LD schema markup.",
    intro: "WordPress powers over 40% of the web, but out-of-the-box WordPress configurations have several SEO weaknesses: slow page builders, excessive plugins, duplicate taxonomy archives, and minimal structured data. This guide covers the specific technical steps to make a WordPress site perform at the highest search engine level.",
    sections: [
      {
        heading: "1. WordPress SEO Plugin Configuration",
        body: [
          "Install Rank Math or Yoast SEO and configure XML sitemap generation, robots.txt settings, breadcrumb schema, and title tag templates for posts, pages, categories, and archives.",
          "Disable the plugin social media modules and focus exclusively on the technical SEO and schema features. Unnecessary plugin features add database load without SEO benefit."
        ]
      },
      {
        heading: "2. WordPress Speed Optimization",
        body: [
          "Install a server-side caching plugin such as WP Rocket or LiteSpeed Cache, configure object caching, and enable page-level HTML minification.",
          "Convert all images to WebP format, enable lazy loading for below-the-fold media, and defer non-critical JavaScript.",
          "Target LCP under 2.5s and INP under 200ms on mobile. A typical WordPress site can improve Lighthouse Performance scores by 20-40 points with proper caching and image optimization."
        ]
      },
      {
        heading: "3. WordPress Architecture and Internal Linking",
        body: [
          "Disable or noindex low-value taxonomy archives including tag archives, date archives, and author archives to prevent index bloat and thin content penalties.",
          "Build an intentional internal link structure where every service page receives links from the homepage, services index, and at least two relevant supporting pages."
        ]
      }
    ],
    relatedTopics: ["technical-seo-audit-guide", "on-page-seo-schema-markup", "keyword-research-intent"],
    relatedServices: ["wordpress-seo", "technical-seo", "web-development"],
    relatedProjects: []
  },
  {
    slug: "ecommerce-seo-guide",
    title: "E-Commerce SEO Guide",
    h1: "E-Commerce SEO: Optimize Shopify and WooCommerce for Organic Sales",
    metaTitle: "E-Commerce SEO Guide 2026 | Shopify and WooCommerce Optimization",
    metaDescription: "Complete e-commerce SEO guide for Shopify and WooCommerce. Covers category pages, product schema, faceted navigation, and high-intent keyword targeting.",
    quickAnswer: "E-commerce SEO focuses on optimizing product category pages for high-intent keywords, implementing Product schema markup, managing faceted navigation canonicals, and building strong internal link structures across large product catalogs.",
    intro: "E-commerce websites have unique SEO challenges that most general guides overlook: faceted filter URL proliferation, thin product descriptions, duplicate category structures, and massive crawl budget demands. This guide addresses the technical and content strategies required to rank an online store sustainably.",
    sections: [
      {
        heading: "1. Category Page Optimization",
        body: [
          "Category pages are the highest-priority pages in an e-commerce SEO strategy. Each category page should target a specific, high-volume commercial keyword and include unique introductory content and proper H1-H2 structure.",
          "Add 150-300 words of unique editorial content above or below the product grid, covering the category key benefits, popular uses, and buying considerations."
        ]
      },
      {
        heading: "2. Faceted Navigation and Canonical Management",
        body: [
          "Faceted filters such as size, color, and price range can generate thousands of duplicate URLs. Use canonical tags pointing to the main category page for filtered URLs.",
          "For high-volume filter combinations that have genuine search demand, consider creating dedicated sub-category pages rather than using filter URLs."
        ]
      },
      {
        heading: "3. Product Schema and Rich Snippets",
        body: [
          "Implement Product schema with Price, PriceCurrency, Availability, and AggregateRating properties on every product page to become eligible for Google Shopping graph results.",
          "Schema data must match what is visibly displayed on the page, or Google will suppress rich result eligibility."
        ]
      }
    ],
    relatedTopics: ["technical-seo-audit-guide", "keyword-research-intent", "on-page-seo-schema-markup"],
    relatedServices: ["ecommerce-seo", "technical-seo", "web-development"],
    relatedProjects: []
  },
  {
    slug: "answer-engine-optimization-guide",
    title: "Answer Engine Optimization (AEO) and GEO Guide",
    h1: "Answer Engine Optimization: How to Rank in AI Search Results",
    metaTitle: "Answer Engine Optimization (AEO) and GEO Guide 2026 | AI Search",
    metaDescription: "How to optimize your website for ChatGPT, Perplexity, Google AI Overviews, and voice search. AEO and GEO strategies explained for 2026.",
    quickAnswer: "Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) involve structuring your website content, entities, and schema so AI-powered search engines like ChatGPT, Perplexity, and Google AI Overviews cite your brand as the authoritative answer to user queries.",
    intro: "Traditional SEO targets Google blue-link search results. AEO and GEO target the next generation of search where AI assistants and generative search summaries answer questions directly rather than listing pages. As of 2026, optimizing for these channels is increasingly important for brand visibility.",
    sections: [
      {
        heading: "1. Entity Authority and Brand Consistency",
        body: [
          "AI search engines build entity models from structured data, authoritative press citations, and Knowledge Graph records. Ensure your brand has consistent NAP, a verified Google Business Profile, and references on reputable third-party sites.",
          "Create a comprehensive Person or Organization schema on your homepage with sameAs properties linking to all authoritative brand profiles including LinkedIn and official social accounts."
        ]
      },
      {
        heading: "2. Direct Answer Content Formatting",
        body: [
          "Structure key content pages to contain clear, concise answers to frequently asked questions in the first 150 words. AI systems parse content that directly answers a specific query without requiring the reader to scroll through preamble.",
          "Use structured FAQ sections with schema markup, clear question headings, and complete answers that stand alone without requiring additional context."
        ]
      },
      {
        heading: "3. Google AI Overviews Optimization",
        body: [
          "Google AI Overviews draw from pages that already rank in the top 10 for a query and have clear, authoritative content. The primary prerequisite is strong traditional SEO: technical site health, topical authority, and quality inbound links.",
          "Mark your highest-quality Q and A content with Speakable schema to signal suitability for voice search and AI summary extraction."
        ]
      }
    ],
    relatedTopics: ["on-page-seo-schema-markup", "technical-seo-audit-guide", "keyword-research-intent"],
    relatedServices: ["answer-engine-optimization", "ai-seo", "technical-seo"],
    relatedProjects: []
  }
];
