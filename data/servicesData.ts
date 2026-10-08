/**
 * Pillar service pages powering the site's topical clusters.
 * Body text supports inline internal links written as [anchor](/path).
 * Anchors are varied on purpose — no exact-match repetition.
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
  projectCategories: string[];
  blogPosts: string[];
}

export const pillarServices: PillarService[] = [
  {
    slug: "seo-services",
    name: "SEO Services",
    navLabel: "SEO Services",
    metaTitle: "SEO Services in Pakistan | Technical & Local SEO Expert | Rashid Azam",
    metaDescription:
      "SEO services in Pakistan by Rashid Azam — technical SEO, on-page optimisation, keyword research, local SEO and link building for businesses that need real organic growth.",
    h1: "SEO Services in Pakistan",
    tagline: "Technical foundations, on-page depth and search intent — not guesswork.",
    intro:
      "I work with businesses and founders across Pakistan who want search traffic that converts, not vanity rankings. Every engagement starts with a crawl of your site, a look at how Google currently understands it, and a prioritised plan you can actually action.",
    capabilities: [
      {
        title: "Technical SEO",
        description:
          "Crawlability, indexation, site architecture, Core Web Vitals, canonical handling and structured data so search engines can read every page correctly.",
      },
      {
        title: "On-Page SEO",
        description:
          "Keyword mapping, title and meta optimisation, heading hierarchy, internal linking and content depth aligned to real search intent.",
      },
      {
        title: "Keyword Research",
        description:
          "Intent-grouped keyword sets and topic clusters so each page has one clear job instead of competing with your own pages.",
      },
      {
        title: "Local SEO",
        description:
          "Google Business Profile optimisation, location landing pages, citations and review strategy for businesses serving specific cities.",
      },
      {
        title: "Off-Page SEO & Link Building",
        description:
          "Digital PR, relevant outreach and clean link acquisition — quality and topical fit over volume.",
      },
      {
        title: "SEO Audits & Reporting",
        description:
          "Full technical and content audits with plain-English fixes, plus Search Console and Analytics reporting that tracks the metrics that matter.",
      },
    ],
    sections: [
      {
        heading: "Technical SEO comes first",
        body: [
          "Technical SEO provides the foundation for a site's crawlability, indexing and performance. Before touching content, I check how pages render, how internal links pass authority, whether canonicals point where they should, and how quickly the site loads on mobile connections.",
          "If the site is slow or fragile, the fix is often structural rather than cosmetic — which is where my [custom web development](/services/web-development) work overlaps with search. Rebuilding templates properly usually beats patching a bloated theme.",
        ],
      },
      {
        heading: "On-page work and content that answers the query",
        body: [
          "Rankings follow pages that answer a question better than the alternatives. I map each target query to a single page, tighten the heading hierarchy, and expand thin sections with information a real visitor needs.",
          "High-quality [SEO content writing](/services/content-writing) is what turns keyword research into pages worth ranking, so the two workstreams normally run together.",
        ],
      },
      {
        heading: "Local visibility across Pakistan",
        body: [
          "For service businesses, most revenue comes from a handful of cities. Local optimisation focuses on your Google Business Profile, consistent business information, genuinely useful location pages, and review generation — not thin duplicate pages for every town.",
        ],
      },
      {
        heading: "Search inside a wider growth plan",
        body: [
          "Organic search compounds slowly, so it works best alongside paid and social channels. If you need coverage while rankings build, my [digital marketing services](/services/digital-marketing) cover Google Ads, Meta Ads and social campaigns.",
          "Video is part of search too — [YouTube SEO and channel growth](/services/youtube-automation) can put you in front of buyers who never open a blue link.",
        ],
      },
      {
        heading: "Proof, not promises",
        body: [
          "You can review real [SEO project results](/projects/seo-blog-project) and the wider [portfolio of client work](/projects) before we speak. When you're ready, [tell me about your website](/contact) and I'll send back an honest read on what's holding it back.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer:
          "Technical fixes can show within weeks. Competitive commercial rankings usually take three to six months of consistent work, depending on the site's history and competition.",
      },
      {
        question: "Do you work with businesses outside Pakistan?",
        answer:
          "Yes. I'm based in Pakistan and work remotely with clients internationally, mostly in English-language markets.",
      },
      {
        question: "Do you provide an SEO audit before starting?",
        answer:
          "Yes. Every engagement begins with a technical and content audit so the priorities are clear before any implementation work starts.",
      },
    ],
    relatedServices: ["content-writing", "web-development", "digital-marketing"],
    projectCategories: ["seo-blog-project", "corporate-website", "personal-branding-portfolio"],
    blogPosts: [
      "seo-strategy-2026-rank-higher-google",
      "on-page-seo-checklist-every-page",
      "wordpress-seo-guide-speed-rankings",
      "what-is-geo-generative-engine-optimization-2026",
    ],
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    navLabel: "Digital Marketing",
    metaTitle: "Digital Marketing Services in Pakistan | Ads & Growth | Rashid Azam",
    metaDescription:
      "Digital marketing services in Pakistan — Google Ads, Meta Ads, social media marketing, content marketing and conversion tracking managed by Rashid Azam.",
    h1: "Digital Marketing Services in Pakistan",
    tagline: "Campaigns measured in leads and revenue, not impressions.",
    intro:
      "Paid and social channels give you demand today while organic assets build in the background. I plan, run and report on campaigns with clear tracking so you always know what a lead actually costs.",
    capabilities: [
      {
        title: "Google Ads",
        description:
          "Search, Performance Max and remarketing campaigns structured around commercial intent and negative-keyword hygiene.",
      },
      {
        title: "Meta Ads",
        description:
          "Facebook and Instagram campaigns with creative testing, audience structure and pixel/conversion API tracking.",
      },
      {
        title: "Social Media Marketing",
        description:
          "Content calendars, platform-native creative and community management that keeps a brand visible between campaigns.",
      },
      {
        title: "Lead Generation",
        description:
          "Offer design, landing pages and follow-up flows built so paid traffic turns into booked conversations.",
      },
      {
        title: "Conversion Optimisation",
        description:
          "Landing page testing, funnel analysis and friction removal to lift the value of the traffic you already pay for.",
      },
      {
        title: "Analytics & Reporting",
        description:
          "GA4, Search Console and ads reporting joined up into one view of channel performance.",
      },
    ],
    sections: [
      {
        heading: "Paid and organic pull in the same direction",
        body: [
          "Organic search visibility is the cheapest long-term acquisition channel a business can own, so paid campaigns should complement it rather than replace it. Ads reveal which messages convert; those winners then shape the pages built through my [search engine optimisation work](/services/seo-services).",
        ],
      },
      {
        heading: "Where campaigns actually break",
        body: [
          "Most underperforming accounts are not an ads problem — they're a destination problem. Slow pages, unclear offers and broken forms waste spend before targeting ever matters, which is why [landing page and website development](/services/web-development) is often the first fix.",
          "Messaging matters just as much, and strong [copywriting and content](/services/content-writing) usually moves cost-per-lead further than another round of audience tests.",
        ],
      },
      {
        heading: "Video as a performance channel",
        body: [
          "Short and long-form video keeps getting cheaper per view than static placements. If video is a fit for your market, [YouTube channel management](/services/youtube-automation) gives you an owned audience instead of rented attention.",
          "Repetitive reporting, lead routing and follow-up can be handled by [workflow automation](/services/ai-automation) so your team spends time on conversations, not spreadsheets.",
        ],
      },
      {
        heading: "Real campaign results",
        body: [
          "You can see anonymised ad account dashboards and outcomes in my [digital marketing campaign case studies](/projects/digital-marketing-campaign). If you'd like a look at your own account, [get in touch](/contact).",
        ],
      },
    ],
    relatedServices: ["seo-services", "youtube-automation", "web-development"],
    projectCategories: ["digital-marketing-campaign", "e-commerce-store", "shopify-store"],
    blogPosts: [
      "digital-marketing-strategies-2025",
      "google-ads-ppc-campaign-guide",
      "social-media-marketing-strategy-2025",
      "small-business-digital-marketing-guide",
    ],
  },
  {
    slug: "youtube-automation",
    name: "YouTube Automation",
    navLabel: "YouTube Automation",
    metaTitle: "YouTube Automation Services in Pakistan | Faceless Channels | Rashid Azam",
    metaDescription:
      "YouTube automation services in Pakistan — faceless channel setup, YouTube SEO, scripting, editing, thumbnails and monetisation strategy by Rashid Azam.",
    h1: "YouTube Automation Services in Pakistan",
    tagline: "Faceless channels built on research, systems and consistency.",
    intro:
      "YouTube automation means running a channel as a production system: research, scripting, voice-over, editing, thumbnails and publishing, handled by a repeatable process instead of one person filming everything.",
    capabilities: [
      {
        title: "Channel Setup & Management",
        description:
          "Niche selection, branding, playlists, upload cadence and the operational routine that keeps a channel publishing.",
      },
      {
        title: "YouTube SEO",
        description:
          "Titles, descriptions, tags, chapters and metadata built from actual search and suggested-video demand.",
      },
      {
        title: "Keyword & Topic Research",
        description:
          "Demand validation before a script is written, so production effort goes into topics with an audience.",
      },
      {
        title: "Script Writing",
        description:
          "Retention-focused scripts with strong hooks, clear structure and pacing built for watch time.",
      },
      {
        title: "Editing & Thumbnails",
        description:
          "Clean edits, motion, subtitles and click-worthy thumbnail design tested against real click-through data.",
      },
      {
        title: "Monetisation & Analytics",
        description:
          "Route to monetisation, sponsorship readiness and analytics reviews that decide what to make next.",
      },
    ],
    sections: [
      {
        heading: "Production is only half the job",
        body: [
          "Successful faceless channels need more than video production; disciplined [keyword research and search optimisation](/services/seo-services) is what gets a finished upload in front of the right viewer. Discovery on YouTube behaves like a search engine, and the same intent thinking applies.",
        ],
      },
      {
        heading: "Scripts carry the channel",
        body: [
          "Retention starts in the first fifteen seconds. My [script and content writing](/services/content-writing) process focuses on a hook that states the payoff, a structure viewers can follow, and no filler between the useful parts.",
        ],
      },
      {
        heading: "Scale with automation",
        body: [
          "Research, transcript drafting, asset organisation and publishing checklists can all be systemised with [AI and workflow automation](/services/ai-automation), which is how a small team keeps a weekly upload schedule without burning out.",
          "Once a channel has an audience, it becomes a distribution asset for the rest of your [online marketing](/services/digital-marketing) — launches, offers and remarketing all get cheaper.",
        ],
      },
      {
        heading: "Channels I've worked on",
        body: [
          "See the [YouTube automation channel case studies](/projects/youtube-automation) for examples of niches, formats and growth. To discuss a channel of your own, [start a conversation](/contact).",
        ],
      },
    ],
    relatedServices: ["content-writing", "seo-services", "ai-automation"],
    projectCategories: ["youtube-automation", "digital-marketing-campaign"],
    blogPosts: ["faceless-youtube-channel-2025", "content-creation-strategy-businesses"],
  },
  {
    slug: "web-development",
    name: "Web Development",
    navLabel: "Web Development",
    metaTitle: "Web Development Services in Pakistan | WordPress & Shopify | Rashid Azam",
    metaDescription:
      "Web development services in Pakistan — business websites, WordPress, Shopify and WooCommerce stores, landing pages and speed optimisation built SEO-ready by Rashid Azam.",
    h1: "Web Development Services in Pakistan",
    tagline: "Fast, responsive websites built to be found and to convert.",
    intro:
      "I build business websites and stores that load quickly, work on every screen size and are structured so search engines can index them properly from day one.",
    capabilities: [
      {
        title: "Business Websites",
        description:
          "Corporate and service sites with clear structure, strong messaging and a maintainable content model.",
      },
      {
        title: "WordPress Development",
        description:
          "Custom themes, block editing, plugin hygiene and clean permalinks — easy for your team to run.",
      },
      {
        title: "Shopify & WooCommerce",
        description:
          "Product architecture, checkout flow and store performance for e-commerce that has to sell every day.",
      },
      {
        title: "Landing Pages",
        description:
          "Single-purpose pages built for ad traffic, with fast loads and measurable conversion tracking.",
      },
      {
        title: "Speed Optimisation",
        description:
          "Image handling, script trimming, caching and Core Web Vitals work on existing sites.",
      },
      {
        title: "Responsive Design",
        description:
          "Mobile-first layouts and accessible components tested across real device widths.",
      },
    ],
    sections: [
      {
        heading: "SEO-friendly by construction",
        body: [
          "A site that can't be crawled can't rank. Semantic markup, one clear H1 per page, sensible URLs, structured data and fast rendering are part of the build, not a later retrofit — the same standards I apply in my [technical SEO work](/services/seo-services).",
        ],
      },
      {
        heading: "Built for the traffic you'll send it",
        body: [
          "If a site is going to receive paid traffic, the page has to earn the click. I build templates alongside the [performance marketing plan](/services/digital-marketing) so campaigns land somewhere that converts.",
          "Launch content — service pages, product descriptions and blog foundations — is covered by my [website copywriting](/services/content-writing).",
        ],
      },
      {
        heading: "Automate the boring parts",
        body: [
          "Enquiry routing, CRM handoff, invoicing triggers and internal notifications can be wired up with [business automation](/services/ai-automation) so the website does administrative work for you.",
        ],
      },
      {
        heading: "Recent builds",
        body: [
          "Browse [corporate website projects](/projects/corporate-website), [e-commerce builds](/projects/e-commerce-store) and [Shopify stores](/projects/shopify-store), or [request a quote](/contact) for your own project.",
        ],
      },
    ],
    relatedServices: ["seo-services", "digital-marketing", "ai-automation"],
    projectCategories: ["corporate-website", "e-commerce-store", "shopify-store", "ngo-website"],
    blogPosts: [
      "high-converting-business-website",
      "wordpress-vs-custom-website-development",
      "ecommerce-website-development-tips",
      "ui-ux-design-principles-conversions",
    ],
  },
  {
    slug: "ai-automation",
    name: "AI Automation",
    navLabel: "AI Automation",
    metaTitle: "AI Automation Services | Chatbots, Agents & Workflows | Rashid Azam",
    metaDescription:
      "AI automation services — chatbots, AI agents, n8n workflow automation and content automation that remove repetitive work from small teams. Built by Rashid Azam.",
    h1: "AI Automation Services",
    tagline: "Remove the repetitive work before you hire for it.",
    intro:
      "Most small teams lose hours every week to copy-paste work: moving data between tools, answering the same enquiries, formatting reports. Automation handles those tasks reliably and gives you the time back.",
    capabilities: [
      {
        title: "AI Chatbots",
        description:
          "Assistants trained on your own content to answer customer questions and qualify enquiries around the clock.",
      },
      {
        title: "AI Agents",
        description:
          "Task-focused agents that research, summarise and draft inside a defined, reviewable scope.",
      },
      {
        title: "Workflow Automation",
        description:
          "n8n and API-based pipelines connecting forms, CRMs, spreadsheets, email and messaging tools.",
      },
      {
        title: "Business Process Automation",
        description:
          "Onboarding, reporting and follow-up sequences mapped and rebuilt so nothing depends on someone remembering.",
      },
      {
        title: "Content Automation",
        description:
          "Assisted drafting, repurposing and publishing pipelines with a human review step that stays mandatory.",
      },
      {
        title: "AI Product Builds",
        description:
          "Lightweight SaaS tools and internal apps that put a usable interface over an automated process.",
      },
    ],
    sections: [
      {
        heading: "Start with the process, not the tool",
        body: [
          "Automation fails when it's bolted onto a broken process. I map what actually happens today, remove the steps nobody needs, and only then automate what's left.",
        ],
      },
      {
        heading: "Where automation earns its keep",
        body: [
          "Marketing teams get the fastest payback: campaign reporting, lead routing and follow-up across [paid and social channels](/services/digital-marketing) are highly repeatable.",
          "Media production is another strong fit — research, transcripts and publishing checklists behind [faceless YouTube channels](/services/youtube-automation) run far more smoothly on rails.",
        ],
      },
      {
        heading: "Automation needs somewhere to live",
        body: [
          "Chatbots, dashboards and internal tools usually need an interface, which is handled through my [custom development work](/services/web-development). Content pipelines still need an editorial standard, and that comes from [content strategy](/services/content-writing) — AI drafts, humans approve.",
        ],
      },
      {
        heading: "Applications I've built",
        body: [
          "See working tools in the [AI and vibe coding projects](/projects/vibecoding-projects) collection, or [describe your workflow](/contact) and I'll tell you what's worth automating first.",
        ],
      },
    ],
    relatedServices: ["web-development", "youtube-automation", "digital-marketing"],
    projectCategories: ["vibecoding-projects", "corporate-website"],
    blogPosts: ["ai-automation-for-small-business", "ai-web-development-2025"],
  },
  {
    slug: "content-writing",
    name: "Content Writing",
    navLabel: "Content Writing",
    metaTitle: "Content Writing Services | SEO Blogs & Web Copy | Rashid Azam",
    metaDescription:
      "SEO content writing services — blog articles, website copy, product descriptions and YouTube scripts written around search intent and conversion by Rashid Azam.",
    h1: "Content Writing Services",
    tagline: "Writing built around search intent and the next action.",
    intro:
      "Good content answers a specific question for a specific person and makes the next step obvious. I write for search engines and readers at the same time — no filler, no padding to hit a word count.",
    capabilities: [
      {
        title: "SEO Blog Writing",
        description:
          "Research-backed articles mapped to keyword clusters, with clean structure and internal links that guide readers deeper.",
      },
      {
        title: "Website Copywriting",
        description:
          "Home, service and about pages that explain what you do, who it's for and why it's credible.",
      },
      {
        title: "Product Descriptions",
        description:
          "Store copy that covers specifications, benefits and objections while staying scannable.",
      },
      {
        title: "YouTube Scripts",
        description:
          "Hook-led scripts written for retention and a natural call to action.",
      },
      {
        title: "Content Strategy",
        description:
          "Topic clusters, publishing calendars and internal linking plans that build authority over time.",
      },
      {
        title: "Editing & Refresh",
        description:
          "Rewriting and consolidating older posts that have decayed or now compete with each other.",
      },
    ],
    sections: [
      {
        heading: "Content and search are one workstream",
        body: [
          "Keyword research decides what to write; content decides whether it ranks. Articles here are planned alongside my [SEO strategy work](/services/seo-services), so every piece supports a commercial page instead of floating on its own.",
        ],
      },
      {
        heading: "Copy that respects the funnel",
        body: [
          "A blog reader and an ad click need different things. Landing copy for [paid campaigns](/services/digital-marketing) is written for a single decision, while educational articles are written to build trust first.",
          "For video, [channel scripting](/services/youtube-automation) follows the same rule — earn the next thirty seconds before asking for anything.",
        ],
      },
      {
        heading: "Published properly",
        body: [
          "Content only performs if it's presented well: readable typography, fast images and clean templates, which is part of every [website build](/services/web-development) I deliver.",
        ],
      },
      {
        heading: "Read the work",
        body: [
          "My own [articles and guides](/blog) are the clearest sample of how I write, and the [SEO blog project](/projects/seo-blog-project) shows content built for a client site. [Send me a brief](/contact) when you're ready.",
        ],
      },
    ],
    relatedServices: ["seo-services", "youtube-automation", "digital-marketing"],
    projectCategories: ["seo-blog-project", "personal-branding-portfolio"],
    blogPosts: ["content-creation-strategy-businesses", "on-page-seo-checklist-every-page"],
  },
];

export const getService = (slug?: string) =>
  pillarServices.find((s) => s.slug === slug);

/** Map a portfolio category slug to the services used to deliver it. */
export const projectCategoryServices: Record<string, string[]> = {
  "e-commerce-store": ["web-development", "seo-services", "digital-marketing"],
  "shopify-store": ["web-development", "digital-marketing", "content-writing"],
  "corporate-website": ["web-development", "seo-services", "content-writing"],
  "ngo-website": ["web-development", "content-writing"],
  "seo-blog-project": ["seo-services", "content-writing"],
  "youtube-automation": ["youtube-automation", "content-writing", "seo-services"],
  "digital-marketing-campaign": ["digital-marketing", "seo-services"],
  "personal-branding-portfolio": ["web-development", "seo-services"],
  "vibecoding-projects": ["ai-automation", "web-development"],
};

/** Map a blog category to the commercial pillar it supports. */
export const blogCategoryServices: Record<string, string[]> = {
  SEO: ["seo-services", "content-writing"],
  "Web Development": ["web-development", "seo-services"],
  "Web Design": ["web-development", "seo-services"],
  "AI & Automation": ["ai-automation", "web-development"],
  Technology: ["ai-automation", "seo-services"],
  Marketing: ["digital-marketing", "seo-services"],
  "YouTube Automation": ["youtube-automation", "content-writing"],
  Freelancing: ["web-development", "digital-marketing"],
  "Freelancing & Business": ["web-development", "seo-services"],
  Career: ["content-writing"],
};
