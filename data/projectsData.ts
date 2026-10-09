export interface ProjectItem {
  projectSlug: string;
  title: string;
  description: string;
  image: string;
  url?: string;
  tags: string[];
  challenge?: string;
  solution?: string;
  results?: string[];
}

export interface ProjectCategory {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  projects: ProjectItem[];
}

export const projectCategories: ProjectCategory[] = [
  {
    slug: "e-commerce-store",
    title: "E-Commerce Store",
    description: "WordPress + Elementor and custom e-commerce setups with payment integration and inventory management.",
    image: "/images/projects/project1.jpg",
    tags: ["WordPress", "E-Commerce", "Design"],
    projects: [
      {
        projectSlug: "bloom-and-mist",
        title: "Bloom & Mist",
        description: "A luxury perfume e-commerce store with elegant dark gold theme, advanced product filtering, and seamless checkout experience.",
        image: "/images/projects/bloom-and-mist.jpg",
        url: "https://bloomandmist.vercel.app/",
        tags: ["E-Commerce", "Luxury", "Perfumes"],
        challenge: "Creating an ultra-fast luxury shopping experience with instant filtering for premium fragrances.",
        solution: "Designed a dark-gold theme with optimized WebP product galleries, instant category filtering, and mobile-first checkout.",
        results: ["Mobile page load under 1.8s", "Increased product page engagement", "Seamless multi-currency checkout"]
      },
      {
        projectSlug: "digital-services-store",
        title: "Digital Tools & Services Marketplace",
        description: "A premium digital tools and services marketplace. Complete e-commerce setup with product catalog and payment gateway.",
        image: "/images/projects/arham-digital.jpg",
        url: "https://arhamdigitalagency.vercel.app/",
        tags: ["E-Commerce", "Digital Products", "Marketplace"],
        challenge: "Building a scalable digital product marketplace with instant download fulfillment.",
        solution: "Integrated automated checkout with instant digital delivery and automated invoice generation.",
        results: ["100% automated order fulfillment", "Zero cart abandonment technical errors"]
      }
    ]
  },
  {
    slug: "youtube-automation",
    title: "YouTube Automation Channel",
    description: "End-to-end faceless YouTube channel pipelines, SEO optimization, and audience retention scripting.",
    image: "/images/projects/project2.jpg",
    tags: ["YouTube", "Automation", "Content"],
    projects: [
      {
        projectSlug: "esha-malik",
        title: "Esha Malik YT Channel",
        description: "A faceless YouTube channel focused on animal rescue content. Grew to 8.62K subscribers with 65+ videos.",
        image: "/images/projects/esha-malik-yt.jpg",
        url: "https://www.youtube.com/@eshamalik1589",
        tags: ["YouTube", "Animal Content", "8.6K Subs"],
        challenge: "Establishing consistent content production for animal rescue stories in a high-viewership niche.",
        solution: "Built an automated video pipeline with viral retention scripting, custom high-contrast thumbnails, and SEO title tags.",
        results: ["8.62K+ organic subscribers", "65+ uploaded videos", "Sustained view velocity"]
      },
      {
        projectSlug: "wild-rescue",
        title: "WildRescue YT Channel",
        description: "A wildlife-focused YouTube channel sharing rescue-themed content with viral thumbnail strategy.",
        image: "/images/projects/wild-rescue-yt.jpg",
        url: "https://www.youtube.com/@wildrescue54",
        tags: ["YouTube", "Wildlife", "Rescue"],
        challenge: "Maximizing Click-Through Rate (CTR) in competitive wildlife content recommendations.",
        solution: "Designed visual curiosity-gap thumbnails paired with retention-optimized voiceovers.",
        results: ["Consistent algorithm recommendations", "High impression click-through rate"]
      }
    ]
  },
  {
    slug: "corporate-website",
    title: "Corporate Website & Tools",
    description: "Modern, fully responsive corporate platforms, career guidance systems, and real-time financial tools.",
    image: "/images/projects/project3.jpg",
    tags: ["Web Design", "Corporate", "CMS"],
    projects: [
      {
        projectSlug: "uacgs",
        title: "UACGS - University Admission & Career Guidance System",
        description: "A comprehensive platform for finding the perfect university and career path in Pakistan with aggregate calculators and AI career guidance agent.",
        image: "/images/projects/uacgs.jpg",
        tags: ["Education", "Career Guidance", "AI Agent"],
        challenge: "Simplifying complex Pakistani university aggregate calculations and merit eligibility comparisons for students.",
        solution: "Built custom aggregate formulas for medical, engineering, and IT universities alongside an AI guidance chatbot.",
        results: ["Comprehensive merit calculation tool", "Instant AI career advice responses"]
      },
      {
        projectSlug: "swiftpkr-converter",
        title: "SwiftPKR USDT to PKR Converter",
        description: "A fast and reliable USDT to PKR converter with real-time exchange rates from trusted market sources.",
        image: "/images/projects/swiftpkr-converter.png",
        url: "https://swiftpkrconverter.vercel.app/",
        tags: ["Finance", "Crypto", "Converter"],
        challenge: "Providing zero-latency USDT to PKR exchange rates without reliance on heavy paid financial APIs.",
        solution: "Engineered a lightweight Next.js app fetching live P2P rates with instant state updates.",
        results: ["Sub-second conversion response", "Zero monthly API hosting cost"]
      },
      {
        projectSlug: "cricketpro",
        title: "CricketPro - Smart Scoring",
        description: "A smart cricket scoring platform for managing matches, teams, and players in real time.",
        image: "/images/projects/cricketpro.png",
        url: "https://cricketpro.lovable.app/",
        tags: ["Sports", "Cricket", "Live Scoring"],
        challenge: "Handling complex live cricket score updating and ball-by-ball statistics.",
        solution: "Built a reactive web UI for match managers to log runs, wickets, and overs with live stat displays.",
        results: ["Real-time match tracking", "Clean mobile-friendly scoring interface"]
      },
      {
        projectSlug: "qrcrafts",
        title: "QRCrafts - QR Code Generator",
        description: "A modern QR code generator platform for custom URLs, text, contact cards, and downloadable high-res QR codes.",
        image: "/images/projects/qrcrafts.jpg",
        url: "https://qrcrafts.lovable.app/",
        tags: ["QR Codes", "Generator", "Tools"],
        challenge: "Allowing users to generate and customize QR codes instantly in the browser without server latency.",
        solution: "Implemented client-side SVG rendering with custom color themes, logo inserts, and PNG/SVG exports.",
        results: ["Instant client-side QR generation", "High-resolution vector exports"]
      }
    ]
  },
  {
    slug: "seo-blog-project",
    title: "SEO Blog Project",
    description: "High-quality blog content and technical SEO architecture ranked on Google's first page.",
    image: "/images/projects/project4.jpg",
    tags: ["SEO", "Content", "Blogging"],
    projects: [
      {
        projectSlug: "wiserank-uk",
        title: "WiseRank UK SEO Agency",
        description: "SEO agency website platform with free audit tools, location-based targeting, and industry-specific solutions.",
        image: "/images/projects/wiserank.jpg",
        tags: ["SEO Agency", "UK", "Google Ranked"],
        challenge: "Ranking an SEO agency website for highly competitive UK search queries.",
        solution: "Executed technical Core Web Vitals fixes, structured JSON-LD schema, and intent-grouped service landing pages.",
        results: ["Page 1 Google rankings", "Increased inbound agency lead inquiries"]
      }
    ]
  },
  {
    slug: "personal-branding-portfolio",
    title: "Personal Branding Portfolio",
    description: "Modern personal branding portfolios built for authority, client bookings, and conversion.",
    image: "/images/projects/project5.jpg",
    tags: ["Portfolio", "Animation", "Design"],
    projects: [
      {
        projectSlug: "digital-marketing-portfolio",
        title: "Digital Marketing & Development Showcase",
        description: "A modern portfolio showcase featuring animated stats, service showcases, and project galleries.",
        image: "/images/projects/thearham-digital.jpg",
        url: "https://thearhamdigital.vercel.app/",
        tags: ["Portfolio Showcase", "Modern Design", "Animated"],
        challenge: "Establishing brand authority for an independent technical consultant.",
        solution: "Designed an editorial layout showcasing verified project case studies, client reviews, and direct booking links.",
        results: ["Enhanced professional credibility", "Direct lead capture"]
      },
      {
        projectSlug: "imran-khadim",
        title: "Imran Khadim - SEO Expert Portfolio",
        description: "Personal branding website for an SEO freelancer in Lahore with appointment booking and service showcases.",
        image: "/images/projects/imran-khadim.jpg",
        url: "https://imrankhadim.com",
        tags: ["Personal Brand", "SEO Expert", "Portfolio"],
        challenge: "Positioning a freelance consultant for high-ticket local SEO clients.",
        solution: "Built a fast, search-optimized personal site integrated with appointment scheduling.",
        results: ["Ranked #1 for targeted local SEO keywords", "Automated client consultation bookings"]
      },
      {
        projectSlug: "muhammad-amjad",
        title: "Muhammad Amjad - Accounting Portfolio",
        description: "Professional personal branding portfolio for an accounting and data entry expert.",
        image: "/images/projects/mamjad-portfolio.jpg",
        url: "https://mamjad.lovable.app/",
        tags: ["Personal Brand", "Accounting", "Portfolio"],
        challenge: "Creating a clean, trustworthy web presence for an accounting specialist.",
        solution: "Built a navy-gold themed portfolio highlighting verified skill sets, past client projects, and contact forms.",
        results: ["Professional online portfolio presence", "Streamlined client inquiries"]
      }
    ]
  },
  {
    slug: "shopify-store",
    title: "Shopify Store",
    description: "Complete Shopify store setups with payment gateways, shipping integration, and optimized product pages.",
    image: "/images/projects/project6.jpg",
    tags: ["Shopify", "E-Commerce", "Setup"],
    projects: [
      {
        projectSlug: "shopify-dropshipping-store",
        title: "Shopify Dropshipping Store Setup",
        description: "Built a fully functional Shopify dropshipping store with automated order fulfillment, integrated payment gateways, custom theme design, and conversion-optimized product pages.",
        image: "/images/projects/project6.jpg",
        tags: ["Shopify", "Dropshipping", "Payments"],
        challenge: "Building a high-conversion dropshipping store with seamless checkout for international buyers.",
        solution: "Configured custom theme templates, integrated Stripe/PayPal checkout, and optimized mobile product pages.",
        results: ["Automated order fulfillment pipeline", "Optimized mobile conversion path"]
      },
      {
        projectSlug: "soundsphere",
        title: "SoundSphere - Headphones Store",
        description: "A premium headphones e-commerce store with dark theme, product categories, and modern shopping experience.",
        image: "/images/projects/soundsphere.jpg",
        url: "https://soundspheres.vercel.app/",
        tags: ["Shopify", "Headphones", "E-Commerce"],
        challenge: "Creating an immersive audio store experience with high visual appeal.",
        solution: "Designed a sleek dark UI with product comparison tables and customer review embeds.",
        results: ["High engagement average session duration", "Mobile-optimized checkout"]
      }
    ]
  },
  {
    slug: "digital-marketing-campaign",
    title: "Digital Marketing Campaign",
    description: "Targeted Meta and Google advertising campaigns with continuous ROAS and lead tracking.",
    image: "/images/projects/project7.jpg",
    tags: ["Marketing", "Ads", "ROI"],
    projects: [
      {
        projectSlug: "meta-ads-multi-client",
        title: "Meta Ads Campaign — Multi-Client Results",
        description: "Managed Meta Ads campaigns generating 2,814 clicks, 302K impressions, and 248K reach with 7.23% CTR at $3.00 CPC.",
        image: "/images/projects/meta-ads-campaign.jpg",
        tags: ["Meta Ads", "Facebook", "Instagram"],
        challenge: "Maintaining high CTR and low CPC across diverse client ad accounts.",
        solution: "Implemented rigorous A/B creative testing, video hook variations, and audience exclusions.",
        results: ["7.23% average CTR", "2,814 qualified clicks", "Low $3.00 average CPC"]
      },
      {
        projectSlug: "google-ads-search",
        title: "Google Ads Search Campaign Optimization",
        description: "Ran a Google Search campaign achieving a 92% optimization score and 3.50% CTR on a lean budget.",
        image: "/images/projects/google-ads-campaign.jpg",
        tags: ["Google Ads", "Search", "PPC"],
        challenge: "Maximizing search impression share and Quality Score on a strict client monthly budget.",
        solution: "Structured tight exact-match ad groups with extensive negative keyword lists and compelling ad copy extensions.",
        results: ["92% Google Optimization Score", "3.50% Search CTR", "Zero wasted ad spend"]
      },
      {
        projectSlug: "meta-ads-high-roas",
        title: "Meta Ads — High ROAS Performance Campaign",
        description: "Scaled a Meta Ads campaign to $190K ad spend generating $1.53M in revenue — a 10.82x ROAS.",
        image: "/images/projects/meta-ads-performance.jpg",
        tags: ["Meta Ads", "ROAS 10.82x", "Revenue $1.5M"],
        challenge: "Scaling ad spend past $100K while preserving profitability and ROAS.",
        solution: "Built broad lookalike audience funnels and retargeted high-intent cart abandoners with dynamic product ads.",
        results: ["$1,535,393 total revenue", "10.82x overall ROAS", "$190,236 scaled ad spend"]
      }
    ]
  },
  {
    slug: "ngo-website",
    title: "NGO Website",
    description: "Donation platforms with impact storytelling, volunteer portals, and secure payment processing.",
    image: "/images/projects/project8.jpg",
    tags: ["Non-Profit", "Donations", "Impact"],
    projects: [
      {
        projectSlug: "ngo-donation-platform",
        title: "NGO Donation & Volunteer Platform",
        description: "Developed an NGO website with online donation system, volunteer registration portal, impact storytelling, and CRM donor integration.",
        image: "/images/projects/project8.jpg",
        tags: ["Non-Profit", "Donations", "Volunteer"],
        challenge: "Providing a secure, trustworthy online donation experience for non-profit supporters.",
        solution: "Integrated Stripe payment processing, transparent impact metrics, and automated volunteer registration forms.",
        results: ["Secure online donation processing", "Streamlined volunteer onboarding"]
      }
    ]
  },
  {
    slug: "vibecoding-projects",
    title: "Vibe Coding AI Projects",
    description: "Innovative AI-powered web applications, face-tracking apps, and equation visualizers.",
    image: "/images/projects/vibe-coding.png",
    tags: ["AI", "Vibe Coding", "Innovation"],
    projects: [
      {
        projectSlug: "nextgenmind",
        title: "NextGenMind AI Platform",
        description: "An advanced AI platform featuring multi-tool chatbots, AI image generators, code writers, and resume builders.",
        image: "/images/projects/nextgenmind.jpg",
        tags: ["AI Platform", "Chatbot", "Multi-Tool"],
        challenge: "Unifying multiple AI generation pipelines into a cohesive, fast user dashboard.",
        solution: "Integrated OpenAI API endpoints with a responsive React UI for chat, code generation, and image synthesis.",
        results: ["All-in-one AI multi-tool dashboard", "Fast API stream responses"]
      },
      {
        projectSlug: "facetrace-live",
        title: "FaceTrace Live Face Tracking AI",
        description: "Real-time AI face tracking application detecting 468 facial landmarks locally in the browser.",
        image: "/images/projects/facetrace-live.png",
        url: "https://facetracelive.vercel.app/",
        tags: ["AI", "Face Tracking", "Real-Time"],
        challenge: "Achieving 60 FPS real-time face landmark tracking without sending camera feeds to a remote server.",
        solution: "Engineered MediaPipe WebAssembly landmark detection running 100% locally in client browser memory.",
        results: ["468 real-time landmark mesh detection", "100% client privacy", "60 FPS rendering"]
      },
      {
        projectSlug: "quantamlink",
        title: "QuantamLink Quantum Physics Visualizer",
        description: "Lightweight Quantum Physics & Equation Visualization Platform with step-by-step solving.",
        image: "/images/projects/quantilink.png",
        url: "https://quantilink.vercel.app/",
        tags: ["Physics", "Education", "Visualization"],
        challenge: "Visualizing complex quantum equations and probability states for physics students.",
        solution: "Built interactive Canvas and SVG equation diagrams with real-time parameter controls.",
        results: ["Interactive physics step-by-step solver", "Clean educational interface"]
      }
    ]
  }
];
