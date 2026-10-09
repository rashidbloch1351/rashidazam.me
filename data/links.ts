export interface LinkItem {
  id: string;
  url: string;
  anchorText: string;
  description: string;
  category: 'service' | 'cluster' | 'project' | 'blog' | 'tool';
}

export const relatedLinksMap: Record<string, LinkItem[]> = {
  'seo-services': [
    { id: 'seo-cluster', url: '/seo', anchorText: 'SEO Knowledge Hub', description: 'Deep technical SEO guides, schema tutorials, and local ranking frameworks.', category: 'cluster' },
    { id: 'proj-wiserank', url: '/services/technical-seo', anchorText: 'Technical SEO Optimization', description: 'Deep crawl audits, Core Web Vitals, and structured data implementation.', category: 'service' },
    { id: 'blog-onpage', url: '/seo/technical-seo-checklist-2026', anchorText: 'Technical SEO Checklist', description: 'Comprehensive checklist for optimizing technical on-page elements.', category: 'cluster' },
  ],
  'digital-marketing': [
    { id: 'marketing-cluster', url: '/marketing', anchorText: 'Digital Marketing Growth Hub', description: 'Guides on Google Search Ads, Meta scaling, and CRO playbooks.', category: 'cluster' },
    { id: 'proj-meta-ads', url: '/services/digital-marketing', anchorText: 'Paid Advertising Solutions', description: 'High-ROI Meta and Google Ads campaigns engineered for conversion.', category: 'service' },
    { id: 'blog-marketing', url: '/marketing', anchorText: 'Digital Marketing Frameworks', description: 'Modern multi-channel marketing tactics.', category: 'cluster' },
  ],
  'youtube-automation': [
    { id: 'youtube-cluster', url: '/youtube', anchorText: 'YouTube Growth & Automation Hub', description: 'Strategies for high-CPM niches, retention, and monetization.', category: 'cluster' },
    { id: 'proj-esha-malik', url: '/services/ai-automation', anchorText: 'AI Video & Automation Workflows', description: 'Automated video scripting, generation, and channel architecture.', category: 'service' },
    { id: 'blog-youtube', url: '/youtube', anchorText: 'YouTube Automation Playbook', description: 'Step-by-step setup for scalable YouTube channels.', category: 'cluster' },
  ],
  'web-development': [
    { id: 'proj-uacgs', url: '/services/full-stack-web-development', anchorText: 'Full-Stack Web Development', description: 'Custom Next.js & React platforms built for maximum speed.', category: 'service' },
    { id: 'proj-bloom', url: '/services/e-commerce-seo', anchorText: 'E-Commerce SEO & Architecture', description: 'High-performance e-commerce platforms with structured data.', category: 'service' },
    { id: 'blog-webdev', url: '/services/wordpress-development', anchorText: 'Custom WordPress Development', description: 'Tailored WordPress themes and Gutenberg block systems.', category: 'service' },
  ],
  'ai-automation': [
    { id: 'proj-nextgenmind', url: '/services/ai-automation', anchorText: 'AI Systems & Workflows', description: 'Custom AI agent integration and operational automation.', category: 'service' },
    { id: 'blog-ai-biz', url: '/services/ai-seo-aeo-geo', anchorText: 'AI SEO & Answer Engine Optimization', description: 'Optimize brand visibility across ChatGPT, Claude, and Perplexity.', category: 'service' },
  ],
  'content-writing': [
    { id: 'blog-geo', url: '/services/ai-seo-aeo-geo', anchorText: 'Generative Engine Optimization (GEO)', description: 'Writing content optimized for AI search engine answers.', category: 'service' },
    { id: 'blog-copywriting', url: '/seo', anchorText: 'SEO & Content Strategy', description: 'Framework for high-conversion technical content.', category: 'cluster' },
  ]
};
