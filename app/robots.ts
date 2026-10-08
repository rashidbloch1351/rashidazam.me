import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/styleguide', '/thank-you', '/api/'],
      },
    ],
    sitemap: 'https://rashidazam.me/sitemap.xml',
  };
}
