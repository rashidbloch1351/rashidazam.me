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
    { id: 'proj-tech-seo', url: '/services/technical-seo', anchorText: 'Technical SEO Services', description: 'Deep crawl audits, Core Web Vitals, and structured data implementation.', category: 'service' },
    { id: 'guide-tech-audit', url: '/seo/technical-seo-audit-guide', anchorText: 'Technical SEO Audit Guide', description: 'Comprehensive checklist for optimizing technical on-page elements.', category: 'cluster' },
  ],
  'technical-seo': [
    { id: 'seo-audit-link', url: '/services/seo-audit', anchorText: 'SEO Audit Services', description: 'Full technical health checks and priority issue diagnostic logs.', category: 'service' },
    { id: 'speed-link', url: '/services/web-development', anchorText: 'Web Performance & Speed Optimization', description: 'Eliminating render-blocking scripts and optimizing Core Web Vitals.', category: 'service' },
    { id: 'tech-guide', url: '/seo/technical-seo-audit-guide', anchorText: 'Technical SEO Guide', description: 'Step-by-step crawlability and indexation framework.', category: 'cluster' },
  ],
  'wordpress-seo': [
    { id: 'wp-dev', url: '/services/wordpress-development', anchorText: 'WordPress Development', description: 'Custom Gutenberg block themes built for speed and search reach.', category: 'service' },
    { id: 'local-seo-link', url: '/services/local-seo', anchorText: 'Local SEO Services', description: 'Google Business Profile and local search optimization.', category: 'service' },
    { id: 'wp-guide', url: '/seo/on-page-seo-schema-markup', anchorText: 'Schema Markup Guide', description: 'Structured JSON-LD schema implementation for WordPress.', category: 'cluster' },
  ],
  'local-seo': [
    { id: 'lahore-link', url: '/locations/lahore', anchorText: 'SEO Services in Lahore', description: 'Commercial core search optimization for Lahore businesses.', category: 'cluster' },
    { id: 'islamabad-link', url: '/locations/islamabad', anchorText: 'SEO Services in Islamabad', description: 'Capital territory local search & technical optimization.', category: 'cluster' },
    { id: 'local-guide', url: '/seo/local-seo-pakistan-uae', anchorText: 'Local SEO Pakistan & UAE Guide', description: 'Map pack rankings and local search citations framework.', category: 'cluster' },
  ],
  'digital-marketing': [
    { id: 'marketing-cluster', url: '/marketing', anchorText: 'Digital Marketing Growth Hub', description: 'Guides on Google Search Ads, Meta scaling, and CRO playbooks.', category: 'cluster' },
    { id: 'gads-guide', url: '/marketing/google-ads-search-campaign-setup', anchorText: 'Google Search Ads Setup Guide', description: 'High-intent campaign structure, match types, and Quality Score.', category: 'cluster' },
    { id: 'meta-guide', url: '/marketing/meta-ads-scaling-framework', anchorText: 'Meta Ads Scaling Guide', description: 'Creative testing pipelines and ROAS scaling mechanics.', category: 'cluster' },
    { id: 'cro-guide', url: '/marketing/conversion-rate-optimization-playbook', anchorText: 'CRO Playbook', description: 'High-ROI landing page optimization engineered for conversion.', category: 'cluster' },
  ],
  'youtube-automation': [
    { id: 'youtube-cluster', url: '/youtube', anchorText: 'YouTube Growth & Automation Hub', description: 'Strategies for high-CPM niches, retention, and monetization.', category: 'cluster' },
    { id: 'yt-guide-niche', url: '/youtube/faceless-channel-niche-selection', anchorText: 'Faceless Niche Selection Guide', description: 'High-CPM niche validation framework and 90-day testing checklist.', category: 'cluster' },
    { id: 'yt-guide-seo', url: '/youtube/youtube-seo-ranking-algorithm', anchorText: 'YouTube SEO & Algorithm Guide', description: 'CTR, thumbnail psychology, and retention scripting framework.', category: 'cluster' },
    { id: 'yt-guide-monetization', url: '/youtube/youtube-monetization-strategies', anchorText: 'YouTube Monetization Guide', description: 'Multi-stream revenue: AdSense, affiliates, products, sponsorships.', category: 'cluster' },
    { id: 'ai-auto-link', url: '/services/ai-automation', anchorText: 'AI Automation Workflows', description: 'Automated video scripting, generation, and channel architecture.', category: 'service' },
  ],
  'web-development': [
    { id: 'wp-dev-link', url: '/services/wordpress-development', anchorText: 'WordPress Development', description: 'Custom WordPress themes and Gutenberg block systems.', category: 'service' },
    { id: 'tech-seo-link', url: '/services/technical-seo', anchorText: 'Technical SEO Services', description: 'High-performance web architecture with structured data.', category: 'service' },
  ],
  'ai-automation': [
    { id: 'ai-seo-link', url: '/services/ai-seo', anchorText: 'AI SEO Services', description: 'AI search engine optimization and generative search strategy.', category: 'service' },
    { id: 'aeo-link', url: '/services/answer-engine-optimization', anchorText: 'Answer Engine Optimization', description: 'Optimize brand visibility across ChatGPT, Claude, and Perplexity.', category: 'service' },
  ],
  'content-writing': [
    { id: 'aeo-content-link', url: '/services/answer-engine-optimization', anchorText: 'Answer Engine Optimization', description: 'Writing content optimized for AI search engine answers.', category: 'service' },
    { id: 'seo-hub-link', url: '/seo', anchorText: 'SEO Knowledge Hub', description: 'Framework for high-conversion technical content.', category: 'cluster' },
  ],
};
