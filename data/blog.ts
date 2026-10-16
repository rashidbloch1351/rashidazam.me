import { seoClusterTopics, type ClusterTopic } from './clusters/seo';

/**
 * Centralized blog data layer.
 *
 * Article body content lives in `data/clusters/seo.ts` (single source of truth).
 * This module enriches each guide with blog-specific metadata: category,
 * publication date, reading time, and featured flags. Only published posts
 * are exported for public pages and the sitemap.
 */

export interface BlogCategory {
  slug: string;
  label: string;
  description: string;
}

export interface BlogPost extends ClusterTopic {
  category: string;
  categorySlug: string;
  /** ISO date used in structured data. */
  publishedDate: string;
  /** Human-readable display label. */
  publishedLabel: string;
  /** ISO date used in structured data. */
  modifiedDate: string;
  readingTimeMinutes: number;
  featured?: boolean;
  published: boolean;
}

export const blogCategories: BlogCategory[] = [
  {
    slug: 'technical-seo',
    label: 'Technical SEO',
    description: 'Crawlability, site speed, and indexation diagnostics.',
  },
  {
    slug: 'on-page-seo',
    label: 'On-Page SEO',
    description: 'Content structure, intent matching, and schema markup.',
  },
  {
    slug: 'local-seo',
    label: 'Local SEO',
    description: 'Map Pack rankings and Google Business Profile optimization.',
  },
  {
    slug: 'keyword-research',
    label: 'Keyword Research',
    description: 'Finding topics worth targeting and matching search intent.',
  },
  {
    slug: 'wordpress-seo',
    label: 'WordPress SEO',
    description: 'Themes, plugins, and settings that make or break rankings.',
  },
  {
    slug: 'ecommerce-seo',
    label: 'E-Commerce SEO',
    description: 'Category pages, product SEO, and indexation control.',
  },
  {
    slug: 'ai-automation',
    label: 'AI & Automation',
    description: 'Visibility in AI answers and answer engines.',
  },
];

const categoryBySlug: Record<string, { category: string; categorySlug: string }> = {
  'technical-seo-audit-guide': { category: 'Technical SEO', categorySlug: 'technical-seo' },
  'local-seo-pakistan-uae': { category: 'Local SEO', categorySlug: 'local-seo' },
  'on-page-seo-schema-markup': { category: 'On-Page SEO', categorySlug: 'on-page-seo' },
  'keyword-research-intent': { category: 'Keyword Research', categorySlug: 'keyword-research' },
  'wordpress-seo-guide': { category: 'WordPress SEO', categorySlug: 'wordpress-seo' },
  'ecommerce-seo-guide': { category: 'E-Commerce SEO', categorySlug: 'ecommerce-seo' },
  'answer-engine-optimization-guide': { category: 'AI & Automation', categorySlug: 'ai-automation' },
};

/**
 * Accurately calculated from the actual article text (intro + all section
 * bodies + FAQ answers) at ~200 words per minute, rounded up.
 */
function calculateReadingTime(topic: ClusterTopic): number {
  const words = [
    topic.intro,
    topic.quickAnswer,
    ...topic.sections.flatMap((s) => [s.heading, ...s.body]),
    ...(topic.faqs ?? []).flatMap((f) => [f.question, f.answer]),
  ]
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function toBlogPost(topic: ClusterTopic): BlogPost {
  const cat = categoryBySlug[topic.slug] ?? {
    category: 'SEO',
    categorySlug: 'technical-seo',
  };
  return {
    ...topic,
    category: cat.category,
    categorySlug: cat.categorySlug,
    // Guides were substantially written and expanded in October 2026
    // (content expansion + FAQ work). Displayed as month/year to avoid
    // implying false day-level precision.
    publishedDate: '2026-10-12',
    publishedLabel: 'October 2026',
    modifiedDate: '2026-10-16',
    readingTimeMinutes: calculateReadingTime(topic),
    featured: topic.slug === 'technical-seo-audit-guide',
    published: true,
  };
}

const allPosts: BlogPost[] = seoClusterTopics.map(toBlogPost);

/** Only published posts appear on public pages and in the sitemap. */
export const blogPosts: BlogPost[] = allPosts.filter((p) => p.published);

export const featuredPost: BlogPost | undefined = blogPosts.find((p) => p.featured);

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return blogPosts.filter((p) => p.categorySlug === categorySlug);
}

/** Related posts: same category first, then the rest by original order. */
export function getRelatedPosts(slug: string, count = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return [];
  const others = blogPosts.filter((p) => p.slug !== slug);
  const sameCategory = others.filter((p) => p.categorySlug === current.categorySlug);
  const rest = others.filter((p) => p.categorySlug !== current.categorySlug);
  return [...sameCategory, ...rest].slice(0, count);
}

/** Categories that actually have published posts. */
export function getActiveCategories(): BlogCategory[] {
  const active = new Set(blogPosts.map((p) => p.categorySlug));
  return blogCategories.filter((c) => active.has(c.slug));
}
