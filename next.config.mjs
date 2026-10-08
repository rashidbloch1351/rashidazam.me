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
      // 301 Redirect rules if needed in future
    ];
  },
};

export default nextConfig;
