import project1 from "@/assets/projects/project1.jpg";
import uacgs from "@/assets/projects/uacgs.jpg";
import project2 from "@/assets/projects/project2.jpg";
import project3 from "@/assets/projects/project3.jpg";
import project4 from "@/assets/projects/project4.jpg";
import project5 from "@/assets/projects/project5.jpg";
import project6 from "@/assets/projects/project6.jpg";
import project7 from "@/assets/projects/project7.jpg";
import project8 from "@/assets/projects/project8.jpg";
import bloomAndMist from "@/assets/projects/bloom-and-mist.jpg";
import arhamDigital from "@/assets/projects/arham-digital.jpg";
import wiserank from "@/assets/projects/wiserank.jpg";
import thearhamDigital from "@/assets/projects/thearham-digital.jpg";
import imranKhadim from "@/assets/projects/imran-khadim.jpg";
import eshaMalikYt from "@/assets/projects/esha-malik-yt.jpg";
import wildRescueYt from "@/assets/projects/wild-rescue-yt.jpg";
import nextgenmind from "@/assets/projects/nextgenmind.jpg";
import vibeCoding from "@/assets/projects/vibe-coding.png";
import faceTraceLive from "@/assets/projects/facetrace-live.png";
import swiftpkrConverter from "@/assets/projects/swiftpkr-converter.png";
import cricketpro from "@/assets/projects/cricketpro.png";
import quantilink from "@/assets/projects/quantilink.png";
import mamjadPortfolio from "@/assets/projects/mamjad-portfolio.jpg";
import metaAdsCampaign from "@/assets/projects/meta-ads-campaign.jpg";
import googleAdsCampaign from "@/assets/projects/google-ads-campaign.jpg";
import metaAdsPerformance from "@/assets/projects/meta-ads-performance.jpg";
import campaignAnalytics from "@/assets/projects/campaign-analytics.jpg";
import soundsphere from "@/assets/projects/soundsphere.jpg";
import qrcrafts from "@/assets/projects/qrcrafts.jpg";

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  url?: string;
  tags: string[];
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
    description: "WordPress + Elementor store that boosted sales by 200%. Complete with payment integration and inventory management.",
    image: project1,
    tags: ["WordPress", "E-Commerce", "Design"],
    projects: [
      {
        title: "Bloom & Mist",
        description: "A luxury perfume e-commerce store with elegant dark gold theme, advanced product filtering, and seamless checkout experience. Built with modern design principles and optimized for conversions.",
        image: bloomAndMist,
        url: "https://bloomandmist.vercel.app/",
        tags: ["E-Commerce", "Luxury", "Perfumes"]
      },
      {
        title: "Arham Digital Agency Store",
        description: "A premium digital tools and services marketplace. Complete e-commerce setup with product catalog, cart system, and secure payment gateway integration.",
        image: arhamDigital,
        url: "https://arhamdigitalagency.vercel.app/",
        tags: ["E-Commerce", "Digital Products", "Agency"]
      }
    ]
  },
  {
    slug: "youtube-automation",
    title: "YouTube Automation Channel",
    description: "Grew faceless channel from 0 to 10K subscribers in 6 months. Fully automated content creation and SEO optimization.",
    image: project2,
    tags: ["YouTube", "Automation", "Content"],
    projects: [
      {
        title: "Esha Malik",
        description: "A faceless YouTube channel focused on animal rescue content. Grew to 8.62K subscribers with 65+ videos. Fully automated content pipeline with SEO-optimized titles and thumbnails.",
        image: eshaMalikYt,
        url: "https://www.youtube.com/@eshamalik1589",
        tags: ["YouTube", "Animal Content", "8.6K Subs"]
      },
      {
        title: "WildRescue",
        description: "A wildlife-focused YouTube channel sharing rescue-themed content. Engaging animal rescue stories with viral potential. Professional thumbnails and SEO-driven video titles.",
        image: wildRescueYt,
        url: "https://www.youtube.com/@wildrescue54",
        tags: ["YouTube", "Wildlife", "Rescue"]
      }
    ]
  },
  {
    slug: "corporate-website",
    title: "Corporate Website",
    description: "Modern, fully responsive corporate site with booking system and CRM integration. Professional and user-friendly.",
    image: project3,
    tags: ["Web Design", "Corporate", "CMS"],
    projects: [
      {
        title: "UACGS - University Admission & Career Guidance System",
        description: "A comprehensive platform for finding the perfect university and career path in Pakistan. Features aggregate calculators, merit comparisons, university exploration, and AI-powered career guidance agent.",
        image: uacgs,
        url: "https://uacgs.vercel.app/",
        tags: ["Education", "Career Guidance", "AI Agent"]
      },
      {
        title: "SwiftPKR Converter",
        description: "A fast and reliable USDT to PKR converter with real-time exchange rates from trusted sources. Features live market rates, instant conversions, and a clean modern UI. Zero hidden fees with 24/7 availability.",
        image: swiftpkrConverter,
        url: "https://swiftpkrconverter.vercel.app/",
        tags: ["Finance", "Crypto", "Converter"]
      },
      {
        title: "CricketPro - Smart Scoring",
        description: "A smart cricket scoring platform for managing matches, teams, and players. Features live match tracking, real-time scoring, and comprehensive match statistics. Built for cricket lovers.",
        image: cricketpro,
        url: "https://cricketpro.lovable.app/",
        tags: ["Sports", "Cricket", "Live Scoring"]
      },
      {
        title: "QRCrafts - QR Code Generator",
        description: "A modern QR code generator platform that lets users create custom, stylish QR codes for URLs, text, contact info, and more. Features clean UI, instant generation, and downloadable high-quality QR codes for personal and business use.",
        image: qrcrafts,
        url: "https://qrcrafts.lovable.app/",
        tags: ["QR Codes", "Generator", "Tools"]
      }
    ]
  },
  {
    slug: "seo-blog-project",
    title: "SEO Blog Project",
    description: "50+ high-quality blog articles ranked on Google's first page. Strategic keyword targeting and content optimization.",
    image: project4,
    tags: ["SEO", "Content", "Blogging"],
    projects: [
      {
        title: "WiseRank",
        description: "Top rated SEO agency website in the UK. Comprehensive SEO services platform with free audit tools, location-based targeting, and industry-specific solutions. Ranked on Google's first page for multiple high-competition keywords.",
        image: wiserank,
        url: "https://wiserank.co.uk/",
        tags: ["SEO Agency", "UK", "Google Ranked"]
      }
    ]
  },
  {
    slug: "personal-branding-portfolio",
    title: "Personal Branding Portfolio",
    description: "Stylish, animated portfolio with high conversion rate. Modern design with smooth interactions and animations.",
    image: project5,
    tags: ["Portfolio", "Animation", "Design"],
    projects: [
      {
        title: "The Arham Digital",
        description: "A modern digital agency portfolio with blue-purple gradient design. Features animated stats, service showcases, and project galleries. Empowering businesses with digital solutions that deliver results.",
        image: thearhamDigital,
        url: "https://thearhamdigital.vercel.app/",
        tags: ["Agency Portfolio", "Modern Design", "Animated"]
      },
      {
        title: "Imran Khadim - SEO Expert",
        description: "Personal branding website for an SEO freelancer in Lahore. Professional portfolio with appointment booking, service pages, and client testimonials. Ranked #1 for local SEO keywords.",
        image: imranKhadim,
        url: "https://imrankhadim.com",
        tags: ["Personal Brand", "SEO Expert", "Portfolio"]
      },
      {
        title: "Muhammad Amjad - Accounting Expert",
        description: "Professional personal branding portfolio for an accounting and data entry expert. Features animated stats, service showcases, and a clean modern design with navy-gold theme. Built to establish authority and attract clients.",
        image: mamjadPortfolio,
        url: "https://mamjad.lovable.app/",
        tags: ["Personal Brand", "Accounting", "Portfolio"]
      }
    ]
  },
  {
    slug: "shopify-store",
    title: "Shopify Store",
    description: "Complete Shopify setup with payment gateways, shipping integration, and product management system.",
    image: project6,
    tags: ["Shopify", "E-Commerce", "Setup"],
    projects: [
      {
        title: "Shopify Dropshipping Store",
        description: "Built a fully functional Shopify dropshipping store with automated order fulfillment, integrated payment gateways (Stripe & PayPal), custom theme design, and optimized product pages for maximum conversions.",
        image: project6,
        url: "https://rashidazam.me/",
        tags: ["Shopify", "Dropshipping", "Payments"]
      },
      {
        title: "SoundSphere - Headphones Store",
        description: "A premium headphones e-commerce store with sleek dark theme and blue accents. Features product categories, customer reviews, and a modern shopping experience. Trusted by 100K+ customers worldwide with a 4.8★ rating.",
        image: soundsphere,
        url: "https://soundspheres.vercel.app/",
        tags: ["Shopify", "Headphones", "E-Commerce"]
      }
    ]
  },
  {
    slug: "digital-marketing-campaign",
    title: "Digital Marketing Campaign",
    description: "Achieved 150% ROI through targeted advertising campaigns. Data-driven strategy with continuous optimization.",
    image: project7,
    tags: ["Marketing", "Ads", "ROI"],
    projects: [
      {
        title: "Meta Ads Campaign — Multi-Client Results",
        description: "Managed Meta Ads campaigns across multiple clients generating 2,814 clicks, 302K impressions, and 248K reach. Achieved a strong 7.23% CTR with an average CPC of just $3.00 and CPM of $0.99, all within a $1,270 ad spend.",
        image: metaAdsCampaign,
        tags: ["Meta Ads", "Facebook", "Instagram"]
      },
      {
        title: "Google Ads Search Campaign",
        description: "Ran a highly optimized Google Search campaign achieving a 92% optimization score. Delivered 5.12K impressions with an average CPC of $0.45 and a 3.50% CTR, maximizing results on a lean A$10/month budget.",
        image: googleAdsCampaign,
        tags: ["Google Ads", "Search", "PPC"]
      },
      {
        title: "Meta Ads — High ROAS Performance Campaign",
        description: "Scaled a Meta Ads campaign to $190,236 in ad spend generating $1,535,393 in revenue — a 10.82x ROAS. Maintained a CPC of $0.35, CPM of $2.47, and 0.71% CTR across Instagram and Facebook over a 2-year period.",
        image: metaAdsPerformance,
        tags: ["Meta Ads", "ROAS 10.82x", "Revenue $1.5M"]
      },
      {
        title: "Full Campaign Analytics Dashboard",
        description: "Built comprehensive campaign analytics dashboards for clients to track real-time performance. Consolidated data from multiple ad platforms into a single view with conversion tracking, audience segmentation, and ROI reporting.",
        image: campaignAnalytics,
        tags: ["Analytics", "Dashboard", "Reporting"]
      }
    ]
  },
  {
    slug: "ngo-website",
    title: "NGO Website",
    description: "Donation system with impact storytelling and volunteer management. Secure payment processing and CRM integration.",
    image: project8,
    tags: ["Non-Profit", "Donations", "Impact"],
    projects: [
      {
        title: "NGO Donation & Volunteer Platform",
        description: "Developed a fully responsive NGO website with an online donation system, volunteer registration portal, impact storytelling pages, and a CRM integration for donor management. Secure payment processing via Stripe.",
        image: project8,
        url: "https://rashidazam.me/",
        tags: ["Non-Profit", "Donations", "Volunteer"]
      }
    ]
  },
  {
    slug: "vibecoding-projects",
    title: "Vibe Coding Projects",
    description: "Innovative AI-powered applications built with cutting-edge technology. Modern web apps that push the boundaries of what's possible.",
    image: vibeCoding,
    tags: ["AI", "Vibe Coding", "Innovation"],
    projects: [
      {
        title: "NextGenMind",
        description: "An advanced AI platform where you can chat with AI, generate images, write blogs, create code, build resumes, write emails, generate logos, and use powerful free AI tools — all in one place. The future of artificial intelligence.",
        image: nextgenmind,
        url: "https://www.nextgenmind.site/",
        tags: ["AI Platform", "Chatbot", "Multi-Tool"]
      },
      {
        title: "FaceTrace Live",
        description: "A real-time AI face tracking application that detects 468 facial landmarks using your camera. Features mesh, eyes, lips, and jawline tracking — all processed locally in the browser for privacy. Works on Chrome, Safari, Edge on both desktop and mobile.",
        image: faceTraceLive,
        url: "https://facetracelive.vercel.app/",
        tags: ["AI", "Face Tracking", "Real-Time"]
      },
      {
        title: "QuantamLink",
        description: "A lightweight Quantum Physics & Equation Visualization Platform. Diagram-driven explanations with step-by-step solving for students, instructors, and researchers. Modern UI with interactive learning tools.",
        image: quantilink,
        url: "https://quantilink.vercel.app/",
        tags: ["Physics", "Education", "Visualization"]
      }
    ]
  }
];
