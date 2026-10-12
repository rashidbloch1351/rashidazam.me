/**
 * Pillar service pages powering the site's topical clusters.
 * Fully aligned with Step 9 (Services Architecture) & Step 10 (SEO Keyword Integration).
 */

export interface ServiceSection {
  heading: string;
  body: string[];
}

export interface PillarService {
  slug: string;
  name: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  tagline: string;
  intro: string;
  capabilities: { title: string; description: string }[];
  sections: ServiceSection[];
  faqs?: { question: string; answer: string }[];
  relatedServices: string[];
}

export const pillarServices: PillarService[] = [
  {
    slug: "web-development",
    name: "Web Development",
    navLabel: "Web Development",
    metaTitle: "Custom Web Development Services Worldwide | Next.js, WordPress & Shopify",
    metaDescription:
      "Web development services: fast Next.js applications, responsive WordPress themes, Shopify stores and clean, SEO-ready code built for conversions.",
    h1: "Custom Web Development Services",
    tagline: "Fast, responsive web architecture built for organic reach and conversion.",
    intro:
      "I build custom web applications and performance websites for clients, startups, and growth agencies worldwide. Every site is engineered from day one for sub-second loading speed, mobile usability, clean search engine crawlability, and seamless conversion design.",
    capabilities: [
      {
        title: "Next.js & React Web Apps",
        description: "Modern full-stack Web Application Development using server-side rendering, static generation, and TypeScript for maximum speed and security.",
      },
      {
        title: "WordPress Development",
        description: "Custom Gutenberg themes, headless WordPress builds, and speed-optimized WordPress site architectures without plugin bloat.",
      },
      {
        title: "Shopify & E-Commerce",
        description: "Custom Shopify store builds and WooCommerce setups optimized for rapid checkout, mobile UX, and high average order value.",
      },
      {
        title: "Speed & Core Web Vitals",
        description: "Eliminating render-blocking assets, lazy-loading media, and tuning performance to hit top Google Lighthouse scores.",
      },
      {
        title: "Responsive Mobile UX",
        description: "Mobile-first user interfaces tested across 320px to 4K resolutions with WCAG-friendly contrast and smooth tap interactions.",
      },
      {
        title: "Technical SEO Integration",
        description: "Built-in dynamic sitemaps, canonical tags, JSON-LD structured data, and clean semantic HTML hierarchy.",
      },
    ],
    sections: [
      {
        heading: "Engineering Web Architecture That Ranks & Converts",
        body: [
          "A beautiful website is useless if search engine bots cannot crawl it or if mobile users abandon it due to slow load times. My web development methodology combines modern frontend frameworks with technical SEO best practices right from the first line of code.",
          "Whether building a custom Next.js web application or a bespoke WordPress theme, I ensure clean DOM hierarchy, fast asset delivery, and proper canonical structures that search engines love.",
        ],
      },
      {
        heading: "WordPress vs. Custom Modern Web Frameworks",
        body: [
          "Choosing between WordPress and custom frameworks like Next.js depends on your business goals. For content creators and marketing teams needing intuitive CMS access, WordPress SEO services and custom Gutenberg block development offer unmatched publishing flexibility.",
          "For high-traffic SaaS apps, enterprise platforms, or web applications requiring custom API integrations, Next.js provides unmatched performance, zero server overload, and top-tier security.",
        ],
      },
    ],
    faqs: [
      {
        question: "What web frameworks and CMS platforms do you specialize in?",
        answer: "I specialize in Next.js, React, TypeScript, custom WordPress development, WooCommerce, and Shopify stores.",
      },
      {
        question: "Are your website builds optimized for search engines?",
        answer: "Yes, 100%. Every website includes semantic HTML5 structure, schema markup, Core Web Vitals optimization, and clean URL routing out of the box.",
      },
      {
        question: "Do you work with international clients remotely?",
        answer: "Yes, I work with businesses, agencies, and founders worldwide across North America, Europe, UAE, and Asia.",
      },
    ],
    relatedServices: ["technical-seo", "wordpress-seo", "ai-seo"],
  },
  {
    slug: "wordpress-seo",
    name: "WordPress SEO",
    navLabel: "WordPress SEO",
    metaTitle: "WordPress SEO Services Worldwide | Optimization Specialist",
    metaDescription:
      "Professional WordPress SEO services by Rashid Azam. Optimization for WordPress sites, plugin hygiene, speed tuning, local SEO WordPress, and content structure.",
    h1: "WordPress SEO Services & Optimization",
    tagline: "Unlocking organic traffic for WordPress sites through technical precision.",
    intro:
      "As a WordPress SEO specialist and technical SEO expert, I help business owners, e-commerce stores, and agencies turn slow, cluttered WordPress sites into search engine powerhouses. From speed tuning to on-page strategy, I deliver real rank improvements.",
    capabilities: [
      {
        title: "WordPress Technical Audit",
        description: "Uncovering theme bloat, database overhead, plugin conflicts, broken internal links, and indexation bottlenecks.",
      },
      {
        title: "WordPress On-Page SEO",
        description: "Optimizing titles, meta tags, H1-H6 heading structure, internal linking, and content depth for high-intent keywords.",
      },
      {
        title: "WordPress Image SEO",
        description: "Converting assets to WebP/AVIF, automated alt-tag structuring, and lazy-loading for instantaneous visual render.",
      },
      {
        title: "Local SEO for WordPress",
        description: "Building dedicated local service pages, schema markup, and Google Business Profile sync for local dominance.",
      },
      {
        title: "WordPress SEO Plugins Setup",
        description: "Expert configuration of Yoast SEO, Rank Math, or SEOPress without adding unnecessary bloat or speed penalties.",
      },
      {
        title: "AI SEO for WordPress",
        description: "Integrating AI-assisted content optimization, schema generators, and automated internal linking workflows.",
      },
    ],
    sections: [
      {
        heading: "Why Most WordPress Sites Fail at SEO",
        body: [
          "WordPress powers over 40% of the web, but out-of-the-box configurations often suffer from slow themes, excessive plugins, duplicate taxonomy archives, and weak internal link flow. Without expert tuning, search engine crawlers struggle to index key money pages.",
          "My WordPress search engine optimization process cleans up index bloat, fixes canonical loops, optimizes images, and structures your site so every page targets a clear search intent.",
        ],
      },
      {
        heading: "Comprehensive On-Page & Image Optimization",
        body: [
          "Effective WordPress SEO goes far beyond green lights in an SEO plugin. I execute deep keyword research to target high-intent phrases like 'best seo for wordpress' and 'wordpress seo specialist', aligning your content with what your ideal buyers are searching for.",
          "In addition, I implement proper WordPress image SEO, structured data markup, and clear breadcrumb paths to maximize your search visibility and click-through rate.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you fix speed issues on existing WordPress websites?",
        answer: "Yes. I optimize database queries, disable unnecessary scripts, configure caching servers, and compress media to achieve sub-second load times.",
      },
      {
        question: "Which WordPress SEO plugin do you recommend?",
        answer: "Rank Math and SEOPress are light, modern choices, but proper technical optimization matters far more than the specific plugin used.",
      },
    ],
    relatedServices: ["web-development", "technical-seo", "seo-audit"],
  },
  {
    slug: "local-seo",
    name: "Local SEO",
    navLabel: "Local SEO",
    metaTitle: "Local SEO Services & Optimization Worldwide",
    metaDescription:
      "Local SEO services that drive customer inquiries: Google Business Profile optimization, local pack rankings, hyper-local SEO and city landing pages.",
    h1: "Local SEO Services & Local Search Optimization",
    tagline: "Dominating local map packs and high-intent city searches.",
    intro:
      "Local business SEO services designed to get your brand noticed in the Google 3-Pack and rank for city-specific commercial searches. Whether you operate locally in Lahore, Islamabad, UAE, or internationally, I build hyper-local search visibility.",
    capabilities: [
      {
        title: "Google Business Profile Optimization",
        description: "Complete GBP setup, category optimization, service listings, photo publishing, and review management strategy.",
      },
      {
        title: "Local Pack SEO Services",
        description: "Tactical signals to get your business into the top 3 Google Maps results for local searchers.",
      },
      {
        title: "Hyper-Local Citation Building",
        description: "Consistent NAP (Name, Address, Phone) distributions across authoritative local directories.",
      },
      {
        title: "City & Service Landing Pages",
        description: "Structuring conversion-oriented location pages with structured local business schema and relevant content.",
      },
      {
        title: "Local Search Content Marketing",
        description: "Writing blog content and local guides that capture geo-specific long-tail buyer queries.",
      },
      {
        title: "Review & Reputation Strategy",
        description: "Ethical strategies for gathering client reviews that improve search signals and trust.",
      },
    ],
    sections: [
      {
        heading: "Connecting Local Customers to Your Business",
        body: [
          "When users search for 'seo services near me' or specific regional terms like 'seo expert in lahore' or 'seo services in islamabad', Google prioritizes localized search signals. A strong local SEO marketing strategy ensures your company stands out above competitors.",
          "I build comprehensive local listing SEO services, optimize geo-targeted keywords naturally, and build authentic local backlinks to ensure top local pack rankings.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long does local SEO take to show map pack results?",
        answer: "Initial local pack improvements often appear within 30 to 60 days following Google Business Profile optimization and citation fixes.",
      },
      {
        question: "Do you build location pages for multi-city businesses?",
        answer: "Yes, I create distinct, content-rich location pages that adhere to search guidelines without triggering duplicate content penalties.",
      },
    ],
    relatedServices: ["wordpress-seo", "technical-seo", "seo-services"],
  },
  {
    slug: "technical-seo",
    name: "Technical SEO",
    navLabel: "Technical SEO",
    metaTitle: "Technical SEO Services & Code Architecture Worldwide",
    metaDescription:
      "Expert technical SEO services by Rashid Azam. Fix crawl errors, indexation issues, JavaScript SEO, canonical bugs, schema markup, and Core Web Vitals.",
    h1: "Technical SEO Services & Architecture",
    tagline: "Laying the flawless technical foundation search engines require.",
    intro:
      "Technical SEO is the backbone of organic growth. I audit, debug, and optimize complex site structures, JavaScript rendering, crawl budgets, and server headers to ensure Google indexes every valuable page on your site.",
    capabilities: [
      {
        title: "Crawlability & Indexation Tuning",
        description: "Fixing robots.txt, sitemaps, orphan pages, crawl bloat, and canonical tag misconfigurations.",
      },
      {
        title: "JavaScript SEO Optimization",
        description: "Ensuring single-page applications built with React, Next.js, or Vue render completely for Googlebot.",
      },
      {
        title: "Core Web Vitals & Speed Tuning",
        description: "Optimizing LCP, INP, and CLS scores for peak UX and search engine ranking priority.",
      },
      {
        title: "Structured Data & JSON-LD Schema",
        description: "Implementing Organization, Person, Service, Article, FAQPage, and BreadcrumbList schema.",
      },
      {
        title: "Site Architecture & Internal Links",
        description: "Designing semantic topic clusters and link hierarchies that distribute page authority effectively.",
      },
      {
        title: "International SEO (Hreflang)",
        description: "Setting up multi-regional and multi-lingual targeting tags for global markets.",
      },
    ],
    sections: [
      {
        heading: "Eliminating Technical Obstacles to Organic Ranking",
        body: [
          "Even the best content will fail if search engine spiders encounter 404 loops, unindexed JavaScript components, slow response times, or conflicting canonical headers. Technical SEO resolves these hidden roadblocks.",
          "As a Technical SEO Expert, I perform deep log file analysis and code reviews to streamline crawl efficiency, improve indexing rates, and ensure your site outpaces competitors.",
        ],
      },
    ],
    faqs: [
      {
        question: "What tools do you use for technical SEO audits?",
        answer: "I use Screaming Frog, Google Search Console, Lighthouse, Chrome DevTools, and custom server log scripts.",
      },
    ],
    relatedServices: ["seo-audit", "web-development", "ai-seo"],
  },
  {
    slug: "seo-audit",
    name: "SEO Audit",
    navLabel: "SEO Audit",
    metaTitle: "Comprehensive Technical & Content SEO Audit",
    metaDescription:
      "In-depth SEO audit services by Rashid Azam. Uncover technical flaws, penalty causes, indexation bottlenecks, and prioritized growth roadmaps.",
    h1: "Comprehensive SEO Audit & Strategy",
    tagline: "Actionable, plain-English roadmap to diagnose and fix search issues.",
    intro:
      "A thorough SEO audit provides complete clarity on why your website is underperforming in search engines. I analyze technical health, on-page optimization, content gaps, backlink profiles, and competitor strategies.",
    capabilities: [
      {
        title: "Technical Health Inspection",
        description: "Crawl analysis, status codes, canonicals, redirect chains, mobile usability, and speed bottlenecks.",
      },
      {
        title: "On-Page & Keyword Gap Analysis",
        description: "Reviewing title tags, headings, search intent alignment, and missing keyword opportunities.",
      },
      {
        title: "Indexation & Duplicate Content Check",
        description: "Identifying thin content, parameter URLs, duplicate pages, and search index bloat.",
      },
      {
        title: "Penalty & Recovery Diagnosis",
        description: "Diagnosing sudden traffic drops caused by Google Core Updates or algorithmic adjustments.",
      },
      {
        title: "Prioritized Action Plan",
        description: "Delivering a clear, step-by-step technical task list categorized by ROI and urgency.",
      },
    ],
    sections: [
      {
        heading: "Real Insights Instead of Automated PDF Dumps",
        body: [
          "Generic automated audit tools spit out hundreds of trivial warnings without explaining what actually matters for your business. My manual SEO audit focuses on high-impact issues that directly affect traffic, leads, and revenue.",
          "Whether you need a WordPress SEO audit, e-commerce review, or custom web app check, you receive a video walkthrough and an actionable remediation plan.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long does a full website SEO audit take?",
        answer: "A complete manual technical and content SEO audit takes between 3 to 7 business days depending on site size.",
      },
    ],
    relatedServices: ["technical-seo", "wordpress-seo", "seo-services"],
  },
  {
    slug: "ai-seo",
    name: "AI SEO",
    navLabel: "AI SEO",
    metaTitle: "AI SEO Services & AI-Powered Optimization",
    metaDescription:
      "Next-generation AI SEO services by Rashid Azam. Leverage AI tools, AI-powered SEO audits, automated workflows, and Google AI Overview optimization.",
    h1: "AI SEO Services & Search Optimization",
    tagline: "Combining artificial intelligence with human technical expertise.",
    intro:
      "AI is revolutionizing search engine optimization. As an AI Automation Specialist and Technical SEO Expert, I help businesses utilize AI tools, AI-assisted keyword mapping, and intelligent search workflows to scale organic growth safely.",
    capabilities: [
      {
        title: "AI-Powered SEO Audits",
        description: "Using machine learning models to analyze top-ranking content signals and structural patterns.",
      },
      {
        title: "AI Content Strategy & Workflows",
        description: "Designing human-in-the-loop content generation and editing pipelines that pass E-E-A-T standards.",
      },
      {
        title: "Google AI Overviews Optimization",
        description: "Structuring content so your website gets cited in Google's AI-generated search summaries.",
      },
      {
        title: "AI SEO for WordPress",
        description: "Integrating AI plugins and custom API scripts directly into WordPress publishing workflows.",
      },
      {
        title: "Entity & Semantic Keyword Mapping",
        description: "Using natural language processing (NLP) to enrich content with related topical entities.",
      },
    ],
    sections: [
      {
        heading: "Smarter Organic Search with AI Technology",
        body: [
          "Modern search engines evaluate content based on entity relationships, semantic relevance, and user experience. Leveraging AI for SEO enables deeper competitive analysis and faster content iteration.",
          "I help brands adopt AI SEO software, setup AI-assisted search workflows, and optimize for Google AI features while maintaining absolute quality and brand safety.",
        ],
      },
    ],
    faqs: [
      {
        question: "Will AI-generated content get penalized by Google?",
        answer: "Google rewards helpful, high-quality content regardless of how it is produced. AI content with human expert editing and original insights ranks exceptionally well.",
      },
    ],
    relatedServices: ["answer-engine-optimization", "technical-seo", "ai-automation"],
  },
  {
    slug: "answer-engine-optimization",
    name: "Answer Engine Optimization (AEO)",
    navLabel: "AEO / GEO",
    metaTitle: "Answer Engine Optimization (AEO) & GEO Services",
    metaDescription:
      "Answer Engine Optimization (AEO) & Generative Engine Optimization (GEO) services: get your brand cited in ChatGPT, Perplexity and Google AI Overviews.",
    h1: "Answer Engine Optimization (AEO) & GEO Services",
    tagline: "Positioning your content as the primary answer for AI models.",
    intro:
      "Search is evolving beyond traditional blue links. Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) ensure your business is recommended when users query AI assistants like ChatGPT, Claude, Perplexity, and Google AI Overviews.",
    capabilities: [
      {
        title: "Generative Engine Optimization (GEO)",
        description: "Structuring brand assets and data sources to ensure generative AI models cite your business accurately.",
      },
      {
        title: "Direct Answer Formatting",
        description: "Designing concise, authoritative Quick Answer blocks, tables, and bulleted summaries for AI parsers.",
      },
      {
        title: "Brand Entity Building",
        description: "Strengthening Knowledge Graph presence, Wikidata connections, and authoritative press citations.",
      },
      {
        title: "Voice Search Optimization",
        description: "Optimizing conversational, long-tail queries for Siri, Google Assistant, and voice devices.",
      },
      {
        title: "FAQ & Schema Engineering",
        description: "Deploying valid FAQPage and Speakable schema to capture featured snippets and direct answers.",
      },
    ],
    sections: [
      {
        heading: "Preparing Your Business for the Future of Search",
        body: [
          "Millions of consumers now ask AI engines directly for recommendations instead of scrolling through search results. AEO focuses on entity authority, direct answers, and structured data so your business is featured as the definitive answer.",
          "By implementing GEO strategies alongside traditional SEO, your brand maintains visibility across both legacy search engines and modern AI search platforms.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the difference between SEO and AEO?",
        answer: "SEO targets search engine result page (SERP) rankings and click-throughs. AEO targets direct citations and answers inside AI chatbots and search overviews.",
      },
    ],
    relatedServices: ["ai-seo", "technical-seo", "seo-services"],
  },
  {
    slug: "ecommerce-seo",
    name: "E-Commerce SEO",
    navLabel: "E-Commerce SEO",
    metaTitle: "E-Commerce SEO Services | Shopify & WooCommerce",
    metaDescription:
      "Drive organic sales with E-Commerce SEO services by Rashid Azam. Optimization for Shopify, WooCommerce, category pages, product schema, and faceted navigation.",
    h1: "E-Commerce SEO Services & Store Optimization",
    tagline: "Turn online product catalogs into high-converting search assets.",
    intro:
      "E-Commerce SEO requires specialized technical strategy. I help Shopify and WooCommerce store owners optimize product category pages, clean up faceted filter indexing, implement product schema, and drive high-intent shoppers to checkout.",
    capabilities: [
      {
        title: "Category Page Optimization",
        description: "Structuring high-level category and subcategory landing pages for high-volume commercial keywords.",
      },
      {
        title: "Faceted Navigation Fixes",
        description: "Managing canonicals and robots directives for product filter variations to eliminate duplicate content.",
      },
      {
        title: "Product Schema & Rich Snippets",
        description: "Adding structured Product, Offer, AggregateRating, and InStock markup for enhanced Google SERP badges.",
      },
      {
        title: "Shopify & WooCommerce Tuning",
        description: "Custom app/plugin optimization, theme code cleanup, and mobile checkout performance enhancement.",
      },
      {
        title: "E-Commerce Content Strategy",
        description: "Writing engaging buying guides and comparison posts that capture top-of-funnel shoppers.",
      },
    ],
    sections: [
      {
        heading: "Scaling Organic Revenue for Online Stores",
        body: [
          "E-Commerce websites frequently struggle with thousands of auto-generated filter URLs, thin product descriptions, and slow mobile loading speeds. My E-Commerce SEO strategy eliminates technical debt while building sustainable keyword rankings across your entire catalog.",
        ],
      },
      {
        heading: "The Problems That Hold Most Stores Back",
        body: [
          "Most e-commerce sites I audit share the same issues: product pages using manufacturer descriptions identical to dozens of competitors, category pages with no unique content, faceted navigation generating thousands of near-duplicate URLs that waste crawl budget, and thin pages competing against each other for the same keywords.",
          "These are fixable systematically. Duplicate product copy gets rewritten around real differentiators: use cases, materials, compatibility. Faceted filters get crawl controls so search engines see the valuable pages, not every combination. Category pages get genuine introductory content that targets the broader buying intent behind them.",
        ],
      },
      {
        heading: "From Audit to Implementation",
        body: [
          "Work starts with a crawl and indexation audit: what Google actually sees, what is indexed that should not be, and where crawl budget is being wasted. Fixes are prioritized by impact. Robots rules, canonical tags, and internal linking structure come before cosmetic tweaks.",
          "Then category and product optimization: metadata rewritten for click-through, internal links connecting related products and categories, and product schema markup for rich results. You receive a prioritized audit report, the implemented fixes, and documentation of what changed and why, plus Search Console guidance for tracking results yourself.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you optimize both Shopify and WooCommerce stores?",
        answer: "Yes, I specialize in technical SEO for Shopify, WooCommerce, Magento, and custom headless e-commerce builds.",
      },
      {
        question: "Should every product page be indexed by Google?",
        answer: "No, and indexing everything is a common mistake. Thin variants, discontinued items, and near-duplicate options are usually better consolidated, canonicalized, or noindexed so your crawl budget goes to pages that can actually rank and convert.",
      },
      {
        question: "How should out-of-stock products be handled?",
        answer: "It depends on whether the product will return. Temporarily out-of-stock items should stay live with clear availability messaging and alternative suggestions. Permanently discontinued products should redirect to the closest relevant category or successor product, never left as dead ends.",
      },
    ],
    relatedServices: ["web-development", "technical-seo", "seo-services"],
  },
  {
    slug: "seo-services",
    name: "SEO Services",
    navLabel: "SEO Services",
    metaTitle: "Full-Scale SEO Services Worldwide | Organic Search Specialist",
    metaDescription:
      "Full-scale SEO services: technical SEO, on-page optimization, content strategy, link building and conversion tracking for businesses worldwide.",
    h1: "Full-Scale SEO Services & Organic Growth",
    tagline: "End-to-end organic search strategy engineered for business revenue.",
    intro:
      "I partner with businesses, startups, and agencies worldwide to build long-term search engine dominance. From technical foundations to intent-focused content and link authority, my SEO services deliver measurable ROI.",
    capabilities: [
      {
        title: "Technical SEO Foundation",
        description: "Comprehensive site health, crawl budget optimization, indexation fixes, and Core Web Vitals performance.",
      },
      {
        title: "Search Intent Keyword Strategy",
        description: "Mapping high-value buyer queries to specific landing pages and topic clusters.",
      },
      {
        title: "On-Page & Content Optimization",
        description: "Refining headers, meta copy, image SEO, and body content for topical authority.",
      },
      {
        title: "Authority Link Acquisition",
        description: "Ethical outreach and digital PR strategies to earn high-quality, topically relevant backlinks.",
      },
    ],
    sections: [
      {
        heading: "Data-Driven Organic Growth Strategy",
        body: [
          "Organic search is a compounding digital growth engine. By aligning technical site architecture with deep keyword intent and authoritative content, your website becomes an asset that generates qualified leads continuously.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long until we see significant SEO traffic increases?",
        answer: "Technical improvements yield quick indexation gains within weeks; competitive keyword rankings typically compound within 3 to 6 months.",
      },
    ],
    relatedServices: ["technical-seo", "wordpress-seo", "local-seo"],
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    navLabel: "Digital Marketing",
    metaTitle: "Digital Marketing & Performance Ads Services Worldwide",
    metaDescription:
      "Global digital marketing services by Rashid Azam — Google Ads, Meta Ads, social media strategy, conversion rate optimization, and multi-channel growth.",
    h1: "Digital Marketing & Paid Ads Services",
    tagline: "Multi-channel advertising campaigns measured in leads and revenue.",
    intro:
      "Combine paid ad campaigns with organic search assets for immediate and sustainable revenue growth. I design, run, and scale Google Search Ads, Meta performance campaigns, and conversion funnels for international clients.",
    capabilities: [
      {
        title: "Google Search & Shopping Ads",
        description: "Commercial intent campaigns built with negative keyword isolation and high quality scores.",
      },
      {
        title: "Meta Ads (Facebook & Instagram)",
        description: "Audience targeting, creative testing, and Conversion API setup for maximum ROAS.",
      },
      {
        title: "Conversion Rate Optimization (CRO)",
        description: "Landing page design, copy tweaks, and UX friction removal to maximize lead conversion.",
      },
    ],
    sections: [
      {
        heading: "Maximizing ROI Across Paid & Organic Channels",
        body: [
          "Digital marketing yields peak return when paid campaigns feed insights directly into your organic SEO and web development strategy. I track every click to ensure profitable customer acquisition.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you manage advertising budgets for international campaigns?",
        answer: "Yes, I manage campaigns targeting audiences across US, UK, UAE, Pakistan, and worldwide markets.",
      },
    ],
    relatedServices: ["web-development", "seo-services", "content-writing"],
  },
  {
    slug: "youtube-automation",
    name: "YouTube Automation",
    navLabel: "YouTube Automation",
    metaTitle: "YouTube Automation Services Worldwide | Faceless Channels",
    metaDescription:
      "Global YouTube automation services — faceless channel setup, YouTube SEO, scripting, video editing, thumbnails, and monetization strategy by Rashid Azam.",
    h1: "YouTube Automation & Channel Growth Services",
    tagline: "Faceless channels engineered as scalable video production pipelines.",
    intro:
      "Turn video content into a predictable traffic and revenue generator. I manage YouTube channel setup, niche validation, retention scripting, thumbnail creation, and YouTube SEO for client channels worldwide.",
    capabilities: [
      {
        title: "YouTube SEO & Optimization",
        description: "Keyword-rich titles, metadata, tags, and chapter markers to rank in YouTube and Google Search.",
      },
      {
        title: "Script Writing & Storyboarding",
        description: "Retention-engineered scripts with high-hook intro sequences built for watch time.",
      },
      {
        title: "Thumbnail & Click-Through Design",
        description: "High-contrast visual design designed to maximize CTR in suggested video feeds.",
      },
    ],
    sections: [
      {
        heading: "Systemized Channel Management",
        body: [
          "YouTube automation treats video publishing as a structured system. By pairing keyword research with production workflows, your channel gains consistent views and subscriber growth.",
        ],
      },
      {
        heading: "How a Channel Pipeline Actually Works",
        body: [
          "A sustainable channel runs like a production system: niche research validates demand and competition before anything is produced, content pillars define what the channel covers, and each video follows a repeatable pipeline of scripting built around retention, voiceover and editing, thumbnail and title design, metadata optimization, and a consistent publishing schedule.",
          "Then comes the part most automation sellers skip: performance review. Analytics reveal which topics and formats retain viewers, and that feedback reshapes the next batch of content. Automation handles the repeatable production work; strategy stays human, because the algorithm rewards channels that adapt.",
        ],
      },
      {
        heading: "Originality, Copyright, and Monetization Policy",
        body: [
          "Every video must add original value: commentary, analysis, or transformation that makes the content yours. Reuploading others' footage, using unlicensed music, or mass-producing low-effort compilations risks copyright strikes and, critically, YouTube's reused-content policy, which blocks monetization for channels without original contribution.",
          "All assets used are properly licensed, and every video passes human quality control before publishing. I am direct about the limits: nobody can promise YouTube Partner Program approval, specific view counts, or revenue. Monetization depends on meeting YouTube's thresholds, passing their review, and consistently publishing content viewers actually watch.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is a faceless YouTube automation channel?",
        answer: "A channel operated using professional voiceovers, stock media, animations, and scripts without needing the owner on camera.",
      },
      {
        question: "Is the content really original, or just repackaged?",
        answer: "Original. Scripts are written fresh for each video around the channel's niche, with human review before anything publishes. Repackaging existing videos without transformation is exactly what triggers reused-content rejections, so it is not part of the process.",
      },
      {
        question: "How long until a channel can earn money?",
        answer: "That depends on niche competition, publishing consistency, and YouTube's own review, so there is no honest fixed timeline. What I can promise is a properly built foundation: compliant content, clean channel setup, and SEO-optimized publishing that gives the channel its best chance.",
      },
    ],
    relatedServices: ["content-writing", "ai-automation", "digital-marketing"],
  },
  {
    slug: "ai-automation",
    name: "AI Automation",
    navLabel: "AI Automation",
    metaTitle: "AI Automation Services | Chatbots, Agents & Workflows",
    metaDescription:
      "AI automation services — custom AI chatbots, n8n automated workflows, CRM integrations, and automated lead routing by Rashid Azam.",
    h1: "AI Automation & Workflow Engineering",
    tagline: "Eliminate repetitive tasks and streamline operations with custom AI workflows.",
    intro:
      "As an AI Automation Specialist, I build custom AI chatbots, automated lead processing pipelines, n8n integrations, and AI agent workflows that save time and reduce operating costs for modern businesses.",
    capabilities: [
      {
        title: "Custom AI Chatbots",
        description: "Trained on your business documentation to answer client inquiries 24/7 and capture leads.",
      },
      {
        title: "Workflow Automation (n8n / Make)",
        description: "Connecting website forms, CRMs, email tools, and databases into seamless automated flows.",
      },
      {
        title: "AI Business Operations",
        description: "Automating reporting, invoice generation, lead qualification, and customer onboarding.",
      },
    ],
    sections: [
      {
        heading: "Streamlining Business Processes with AI",
        body: [
          "AI automation replaces manual copy-pasting and repetitive administrative tasks with automated workflows. This allows your team to focus on high-value strategy while automated systems handle routine execution.",
        ],
      },
      {
        heading: "Where AI Automation Fits, and Where It Does Not",
        body: [
          "Automation pays off fastest on high-volume, rule-based work: routing new leads to the right salesperson instantly, following up on inquiries, moving data between your CRM, spreadsheets, and email tools, sending notifications when something needs attention, and drafting first-pass content for human review. These are the workflows I build most often.",
          "It is a poor fit where judgment, empathy, or accountability matter: final hiring decisions, sensitive customer complaints, anything where a mistake is expensive. Every automation I ship includes human review checkpoints for customer-facing output, because AI is confident even when it is wrong. I will tell you directly if a process should not be automated.",
        ],
      },
      {
        heading: "From Discovery to Maintained Workflow",
        body: [
          "We start with a discovery session to map the workflow as it runs today: triggers, steps, tools involved, and where time is actually lost. Then I design the automation, typically in n8n or Make, or custom code where those do not fit, and build it against your real tools, not demos.",
          "Before handover, the workflow is tested with real data, including failure cases: what happens when an API is down, when data is malformed, or when a step times out. You get error notifications, fallback paths, and logs, plus documentation. Automations need maintenance as tools change their APIs, so ongoing support is available rather than assumed.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can AI chatbots integrate directly into existing websites?",
        answer: "Yes, I integrate custom AI bots seamlessly into Next.js apps, WordPress sites, and Shopify stores.",
      },
      {
        question: "Do you integrate with tools beyond n8n and Make?",
        answer: "My core offering is n8n and Make workflows plus custom integrations where those platforms fall short. If your stack uses something unusual, I will assess feasibility honestly during discovery rather than promising compatibility I cannot deliver.",
      },
      {
        question: "What happens when an automation fails?",
        answer: "Every workflow ships with error handling: failed runs trigger notifications to you, critical steps have fallback paths, and execution logs show exactly what went wrong. The goal is that failures are visible and recoverable, never silent.",
      },
    ],
    relatedServices: ["web-development", "ai-seo", "youtube-automation"],
  },
  {
    slug: "content-writing",
    name: "Content Writing",
    navLabel: "Content Writing",
    metaTitle: "SEO Content Writing & Copywriting Services",
    metaDescription:
      "Professional SEO content writing services by Rashid Azam. Intent-focused blog articles, website copy, product descriptions, and conversion landing page copy.",
    h1: "SEO Content Writing & Strategic Copywriting",
    tagline: "Content written for search engines and engineered for human conversion.",
    intro:
      "High-ranking content requires a balance between keyword placement and engaging copywriting. I craft blog posts, service page copy, product descriptions, and landing page content that rank high and drive action.",
    capabilities: [
      {
        title: "SEO Blog Article Writing",
        description: "In-depth, research-backed posts optimized for intent keywords and topical authority.",
      },
      {
        title: "Website Copywriting",
        description: "Clear, persuasive homepage, about, and service page copy that communicates your value proposition.",
      },
      {
        title: "Content Strategy & Clustering",
        description: "Planning comprehensive topic clusters to build domain authority across your target niche.",
      },
    ],
    sections: [
      {
        heading: "Content That Converts Searchers into Clients",
        body: [
          "Quality content is the fuel of organic search. By structuring articles with scannable subheadings, semantic entities, and clear calls to action, your content drives measurable business outcomes.",
        ],
      },
      {
        heading: "How Content Actually Supports SEO",
        body: [
          "Content earns search visibility by doing three things: matching what searchers want, covering the topic thoroughly enough to be the best answer, and earning the links and engagement that signal quality. Well-structured articles and service pages give Google clear reasons to rank you for queries your audience genuinely searches.",
          "What content cannot do is guarantee rankings. Search results also depend on technical site health, competition, and your site's overall authority. Honest content strategy means targeting topics you can realistically win, writing the definitive page for each, and measuring what moves, then iterating.",
        ],
      },
      {
        heading: "From Research to Published Draft",
        body: [
          "Every piece starts with research: analyzing what already ranks for the target topic, mapping the questions readers actually ask, and outlining a structure with clear headings before a single paragraph is drafted. This prevents the rambling, unfocused articles that neither readers nor search engines reward.",
          "Drafts go through editing for clarity, factual consistency, and natural keyword placement: keywords appear where a human would expect them, never stuffed. You receive formatted copy with heading structure and meta title and description suggestions, plus one revision round to fine-tune tone.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you include keyword research with content writing services?",
        answer: "Yes, every writing engagement includes search intent research, entity mapping, and competitive analysis.",
      },
      {
        question: "How long should a blog post or service page be?",
        answer: "As long as it needs to fully answer the searcher's question, no longer. Some topics need 800 words, others need 2,000. I write to cover the intent completely rather than hitting an arbitrary word count, because thin filler hurts more than brevity helps.",
      },
      {
        question: "Can you match our brand's tone of voice?",
        answer: "Yes. Before writing, I review your existing materials and ask about your audience. A law firm and a streetwear brand should not sound the same, and the revision round exists specifically to dial the voice in until it feels like you.",
      },
    ],
    relatedServices: ["seo-services", "wordpress-seo", "digital-marketing"],
  },
  {
    slug: "wordpress-development",
    name: "WordPress Development",
    navLabel: "WordPress Development",
    metaTitle: "Custom WordPress Development Services",
    metaDescription:
      "Custom WordPress development services by Rashid Azam. Fast Gutenberg themes, Elementor customization, WooCommerce setups, and clean code built for SEO.",
    h1: "Custom WordPress Development & Theme Customization",
    tagline: "Fast, custom WordPress websites engineered for organic reach and mobile conversion.",
    intro:
      "I build custom WordPress websites, tailored Gutenberg block layouts, and WooCommerce e-commerce stores. Every site is optimized for sub-second page load speeds, clean mobile rendering, and effortless search engine indexing.",
    capabilities: [
      {
        title: "Custom Gutenberg & Theme Building",
        description: "Building lightweight custom themes and blocks without heavy page builder bloat or slow code.",
      },
      {
        title: "WooCommerce E-Commerce Setups",
        description: "Setting up secure, mobile-friendly WooCommerce stores with instant product filtering and custom payment gateways.",
      },
      {
        title: "WordPress Maintenance & Security",
        description: "Updating core plugins, securing database backups, fixing PHP errors, and hardening WordPress security.",
      },
    ],
    sections: [
      {
        heading: "High-Performance WordPress Without Plugin Bloat",
        body: [
          "My WordPress builds eliminate unnecessary plugins, resulting in rapid page load times and superior Google Lighthouse performance.",
        ],
      },
      {
        heading: "Development Process: From Requirements to Launch",
        body: [
          "Every project starts with a discovery call to map your requirements: page structure, content types, integrations like payment gateways or booking systems, and any existing site to migrate. Your hosting setup is reviewed at this stage too, because server configuration affects everything from speed to security.",
          "The build happens on a staging environment you can preview. I develop a custom Gutenberg theme with responsive layouts that adapt cleanly from mobile to desktop, integrate only the plugins your site genuinely needs, and connect forms, analytics, and third-party tools. Nothing goes live until it has been tested across devices and browsers.",
          "Launch includes careful migration with proper redirects so you keep your existing search rankings, final checks on forms and checkout flows, and a handover walkthrough so you know how to manage content. Ongoing maintenance plans are available if you want updates, backups, and security monitoring handled for you.",
        ],
      },
      {
        heading: "What You Receive, and What I Need From You",
        body: [
          "Every build ships with a custom lightweight theme, configured plugins limited to what the site actually uses, security hardening, automated backup setup, and straightforward documentation on managing your content. The codebase stays clean and commented so any competent developer can maintain it later.",
          "From you, I need your page content or a rough draft of it, your logo and brand assets, access to your domain and hosting, and clarity on what the site must do: sell, generate leads, or take bookings. The clearer the requirements up front, the smoother the build.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you build custom WordPress sites or use templates?",
        answer: "I specialize in lightweight custom Gutenberg builds as well as tailored Elementor setups based on project requirements.",
      },
      {
        question: "How long does a custom WordPress build take?",
        answer: "It depends on scope: page count, custom functionality, and whether your content is ready. A focused business site moves faster than a WooCommerce store with custom checkout logic. After the discovery call you get a realistic timeline before any work starts.",
      },
      {
        question: "Will I be able to update the site myself after launch?",
        answer: "Yes. The Gutenberg block layouts are designed for non-technical editing: updating text, images, and pages does not require touching code. The handover walkthrough covers everything you need, and the documentation stays with the site.",
      },
    ],
    relatedServices: ["web-development", "wordpress-seo", "technical-seo"],
  },
];

export const getService = (slug?: string) =>
  pillarServices.find((s) => s.slug === slug);
