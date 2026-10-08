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
    { id: 'proj-wiserank', url: '/projects/seo-blog-project', anchorText: 'WiseRank Case Study', description: 'See how we ranked WiseRank #1 on Google in the UK.', category: 'project' },
    { id: 'blog-onpage', url: '/blog/on-page-seo-checklist-every-page', anchorText: 'On-Page SEO Checklist', description: 'Comprehensive checklist for optimizing on-page elements.', category: 'blog' },
  ],
  'digital-marketing': [
    { id: 'marketing-cluster', url: '/marketing', anchorText: 'Digital Marketing Growth Hub', description: 'Guides on Google Search Ads, Meta scaling, and CRO playbooks.', category: 'cluster' },
    { id: 'proj-meta-ads', url: '/projects/digital-marketing-campaign', anchorText: 'Meta Ads Performance Results', description: 'Case study demonstrating $1.5M revenue generated from paid campaigns.', category: 'project' },
    { id: 'blog-marketing', url: '/blog/digital-marketing-strategies-2025', anchorText: 'Digital Marketing Strategies', description: 'Modern multi-channel marketing tactics.', category: 'blog' },
  ],
  'youtube-automation': [
    { id: 'youtube-cluster', url: '/youtube', anchorText: 'YouTube Growth & Automation Hub', description: 'Strategies for high-CPM niches, retention, and monetization.', category: 'cluster' },
    { id: 'proj-esha-malik', url: '/projects/youtube-automation', anchorText: 'Esha Malik Channel Case Study', description: 'Grew faceless channel to 8.6K subscribers with 65+ videos.', category: 'project' },
    { id: 'blog-youtube', url: '/blog/faceless-youtube-channel-2025', anchorText: 'Faceless YouTube Guide', description: 'Step-by-step setup for faceless YouTube channels.', category: 'blog' },
  ],
  'web-development': [
    { id: 'proj-uacgs', url: '/projects/corporate-website', anchorText: 'UACGS Web Platform', description: 'Custom university career guidance system built for speed.', category: 'project' },
    { id: 'proj-bloom', url: '/projects/e-commerce-store', anchorText: 'Bloom & Mist E-Commerce', description: 'Luxury perfume e-commerce store with modern UI.', category: 'project' },
    { id: 'blog-webdev', url: '/blog/high-converting-business-website', anchorText: 'High-Converting Website Guide', description: 'Design & architecture principles for conversions.', category: 'blog' },
  ],
  'ai-automation': [
    { id: 'proj-nextgenmind', url: '/projects/vibecoding-projects', anchorText: 'NextGenMind AI Platform', description: 'Multi-tool AI chatbot and content generator web app.', category: 'project' },
    { id: 'blog-ai-biz', url: '/blog/ai-automation-for-small-business', anchorText: 'AI Automation for Business', description: 'How small businesses automate repetitive workflows.', category: 'blog' },
  ],
  'content-writing': [
    { id: 'blog-geo', url: '/blog/what-is-geo-generative-engine-optimization-2026', anchorText: 'Generative Engine Optimization (GEO)', description: 'Writing content optimized for AI search engine answers.', category: 'blog' },
    { id: 'blog-copywriting', url: '/blog/content-creation-strategy-businesses', anchorText: 'Content Creation Strategy', description: 'Framework for high-conversion business copy.', category: 'blog' },
  ]
};
