import React from 'react';
import Image from 'next/image';

export function ProofStrip() {
  const platforms = [
    {
      name: 'Fiverr Seller',
      description: 'Web & SEO Services (@rashidazam1351)',
      url: 'https://fiverr.com/rashidazam1351',
      iconType: 'image',
      iconSrc: '/images/icons/fiverr.png',
      alt: 'Fiverr Verified Freelancer Profile',
    },
    {
      name: 'Freelancer.com',
      description: 'Digital Marketing (@rashidazam1351)',
      url: 'https://www.freelancer.com/u/rashidazam1351',
      iconType: 'image',
      iconSrc: '/images/icons/freelancer.png',
      alt: 'Freelancer.com Verified Profile',
    },
    {
      name: 'Upwork',
      description: 'Web & Technical SEO Solutions',
      url: 'https://www.upwork.com/',
      iconType: 'upwork',
      alt: 'Upwork Official Platform Profile',
    },
    {
      name: 'LinkedIn Profile',
      description: 'M. Rashid Azam (Professional Network)',
      url: 'https://www.linkedin.com/in/mrashid1351/',
      iconType: 'linkedin',
      alt: 'LinkedIn Official Profile - M. Rashid Azam',
    },
  ];

  return (
    <section className="bg-slate-50 border-y border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 bg-white px-3.5 py-1.5 rounded-full border border-gray-200 shadow-2xs">
            Professional Platforms &amp; Profiles
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit Rashid Azam on ${platform.name}`}
              className="flex items-center gap-4 bg-white border border-gray-200 p-5 rounded-2xl shadow-xs hover:border-[#d97706] hover:shadow-md transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d97706] h-full"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-gray-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                {platform.iconType === 'image' && platform.iconSrc ? (
                  <Image
                    src={platform.iconSrc}
                    alt={platform.alt}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                ) : platform.iconType === 'upwork' ? (
                  <svg className="w-7 h-7 text-[#14a800]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.396-2.138 1.584-3.208 3.513-3.208 1.48 0 2.443.91 2.443 2.766 0 1.83-.984 2.787-3.118 2.787zm.052-7.514c-3.123 0-4.992 1.944-5.69 4.356-1.082-.958-1.907-2.183-2.457-3.56H8.05v5.772c0 1.944-1.264 3.098-3.02 3.098-1.756 0-3.02-1.154-3.02-3.098V6.444H0v5.772c0 3.056 2.164 5.434 5.03 5.434 2.866 0 5.03-2.378 5.03-5.434v-1.15c.571 1.258 1.417 2.41 2.529 3.376l-1.393 6.558h2.396l.994-4.673c1.139.73 2.383 1.136 3.868 1.136 3.541 0 5.545-2.02 5.545-5.38 0-3.328-1.921-5.328-5.387-5.328z"/>
                  </svg>
                ) : (
                  <svg className="w-7 h-7 text-[#0a66c2]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                )}
              </div>

              <div className="min-w-0">
                <span className="font-heading font-semibold text-sm text-slate-900 group-hover:text-[#b45309] transition-colors block truncate">
                  {platform.name}
                </span>
                <span className="text-xs text-slate-500 block truncate mt-0.5">
                  {platform.description}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
