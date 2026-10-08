import { MetadataRoute } from 'next';
import { pillarServices } from '@/data/servicesData';
import { projectCategories } from '@/data/projectsData';
import { blogPosts } from '@/data/blogPosts';
import { seoClusterTopics } from '@/data/clusters/seo';
import { youtubeClusterTopics } from '@/data/clusters/youtube';
import { marketingClusterTopics } from '@/data/clusters/marketing';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rashidazam.me';
  const currentDate = new Date().toISOString().split('T')[0];

  // Core Pages
  const coreRoutes = [
    '',
    '/about',
    '/services',
    '/seo',
    '/youtube',
    '/marketing',
    '/projects',
    '/blog',
    '/tools',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Service Pages
  const serviceRoutes = pillarServices.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // SEO Cluster Sub-Pages
  const seoClusterRoutes = seoClusterTopics.map((t) => ({
    url: `${baseUrl}/seo/${t.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // YouTube Cluster Sub-Pages
  const youtubeClusterRoutes = youtubeClusterTopics.map((t) => ({
    url: `${baseUrl}/youtube/${t.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Marketing Cluster Sub-Pages
  const marketingClusterRoutes = marketingClusterTopics.map((t) => ({
    url: `${baseUrl}/marketing/${t.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Project Category Routes
  const projectCategoryRoutes = projectCategories.map((c) => ({
    url: `${baseUrl}/projects/${c.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Individual Case Study Routes
  const caseStudyRoutes = projectCategories.flatMap((c) =>
    c.projects.map((p) => ({
      url: `${baseUrl}/projects/${c.slug}/${p.projectSlug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  );

  // Blog Post Routes
  const blogRoutes = blogPosts.map((p) => ({
    url: `${baseUrl}/blog/${p.id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...coreRoutes,
    ...serviceRoutes,
    ...seoClusterRoutes,
    ...youtubeClusterRoutes,
    ...marketingClusterRoutes,
    ...projectCategoryRoutes,
    ...caseStudyRoutes,
    ...blogRoutes,
  ];
}
