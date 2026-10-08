import React from 'react';
import Image from 'next/image';

export function ProofStrip() {
  return (
    <section className="bg-slate-50 border-y border-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Verified Freelance Platforms & Credentials
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          <a
            href="https://fiverr.com/rashidazam1351"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white border border-gray-200 px-5 py-3 rounded-xl shadow-xs hover:border-amber-500 hover:shadow-md transition-all group"
          >
            <Image
              src="/images/icons/fiverr.png"
              alt="Fiverr Verified Freelancer"
              width={28}
              height={28}
              className="object-contain"
            />
            <div>
              <span className="font-heading font-semibold text-sm text-slate-900 group-hover:text-amber-600 transition-colors block">
                Fiverr Seller
              </span>
              <span className="text-xs text-slate-500">
                Web & SEO Services (@rashidazam1351)
              </span>
            </div>
          </a>

          <a
            href="https://www.freelancer.com/u/rashidazam1351"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white border border-gray-200 px-5 py-3 rounded-xl shadow-xs hover:border-amber-500 hover:shadow-md transition-all group"
          >
            <Image
              src="/images/icons/freelancer.png"
              alt="Freelancer.com Verified Profile"
              width={28}
              height={28}
              className="object-contain"
            />
            <div>
              <span className="font-heading font-semibold text-sm text-slate-900 group-hover:text-amber-600 transition-colors block">
                Freelancer.com
              </span>
              <span className="text-xs text-slate-500">
                Digital Marketing (@rashidazam1351)
              </span>
            </div>
          </a>

          <div className="flex items-center gap-3 bg-white border border-gray-200 px-5 py-3 rounded-xl shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center font-bold text-xs text-amber-700">
              AD
            </div>
            <div>
              <span className="font-heading font-semibold text-sm text-slate-900 block">
                Arham Digital Agency
              </span>
              <span className="text-xs text-slate-500">
                Founder & Lead Consultant
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
