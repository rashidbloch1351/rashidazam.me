import { MetadataRoute } from 'next';
import { pillarServices } from '@/data/servicesData';
import { seoClusterTopics } from '@/data/clusters/seo';
import { youtubeClusterTopics } from '@/data/clusters/youtube';
import { marketingClusterTopics } from '@/data/clusters/marketing';
import { locationsData } from '@/data/locationsData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rashidazam.me';
  const currentDate = new Date().toISOString().split('T')[0];

  // 1. Core Top-Level Routes
  const coreRoutes = [
    { route: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { route: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/seo', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/locations', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { route: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { route: '/youtube', priority: 0.8, changeFrequency: 'weekly' as const },
    { route: '/marketing', priority: 0.8, changeFrequency: 'weekly' as const },
    { route: '/tools', priority: 0.8, changeFrequency: 'monthly' as const },
    { route: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
    { route: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' as const },
  ].map((item) => ({
    url: `${baseUrl}${item.route}`,
    lastModified: currentDate,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));

  // 2. All Location Hubs (Lahore, Islamabad, Karachi, Faisalabad, Multan, USA, UK, Germany, UAE, Worldwide)
  const locationRoutes = Object.keys(locationsData).map((slug) => ({
    url: `${baseUrl}/locations/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: (slug === 'lahore' || slug === 'islamabad') ? 0.9 : 0.8,
  }));

  // 3. All Pillar Service Pages
  const serviceRoutes = pillarServices.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // 4. SEO Cluster Guides & Topics
  const seoClusterRoutes = seoClusterTopics.map((t) => ({
    url: `${baseUrl}/seo/${t.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // 5. YouTube Cluster Guides & Topics
  const youtubeClusterRoutes = youtubeClusterTopics.map((t) => ({
    url: `${baseUrl}/youtube/${t.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // 6. Digital Marketing Cluster Guides & Topics
  const marketingClusterRoutes = marketingClusterTopics.map((t) => ({
    url: `${baseUrl}/marketing/${t.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...coreRoutes,
    ...locationRoutes,
    ...serviceRoutes,
    ...seoClusterRoutes,
    ...youtubeClusterRoutes,
    ...marketingClusterRoutes,
  ];
}
