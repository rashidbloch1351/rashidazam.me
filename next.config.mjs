/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'bloomandmist.vercel.app' },
      { protocol: 'https', hostname: 'arhamdigitalagency.vercel.app' },
      { protocol: 'https', hostname: 'thearhamdigital.vercel.app' },
      { protocol: 'https', hostname: 'swiftpkrconverter.vercel.app' },
      { protocol: 'https', hostname: 'uacgs.vercel.app' },
      { protocol: 'https', hostname: 'wiserank.co.uk' },
      { protocol: 'https', hostname: 'imrankhadim.com' },
      { protocol: 'https', hostname: 'soundspheres.vercel.app' },
      { protocol: 'https', hostname: 'nextgenmind.site' },
      { protocol: 'https', hostname: 'facetracelive.vercel.app' },
      { protocol: 'https', hostname: 'quantilink.vercel.app' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about.html',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/services.html',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/projects',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/projects/:path*',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/projects.html',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/seo',
        permanent: true,
      },
      {
        source: '/blog/:path*',
        destination: '/seo',
        permanent: true,
      },
      {
        source: '/blog.html',
        destination: '/seo',
        permanent: true,
      },
      {
        source: '/contact.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/privacy-policy.html',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/terms-of-service.html',
        destination: '/terms-of-service',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
