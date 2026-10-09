import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rashidazam.me';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/styleguide', '/thank-you', '/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
