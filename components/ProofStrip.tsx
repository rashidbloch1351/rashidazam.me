import React from 'react';
import Image from 'next/image';

export function ProofStrip() {
  return (
    <section className="bg-[#17181c] border-y border-[#272a30] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#6b7280]">
            Verified Freelance Platforms & Credentials
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-90">
          <div className="flex items-center gap-3 bg-[#0f1012] border border-[#272a30] px-5 py-2.5 rounded-lg">
            <Image
              src="/images/icons/fiverr.png"
              alt="Fiverr Verified Freelancer"
              width={28}
              height={28}
              className="object-contain"
            />
            <div>
              <span className="font-heading font-semibold text-sm text-[#f3f4f6] block">
                Fiverr Seller
              </span>
              <span className="text-[11px] text-[#9ca3af]">
                Web & SEO Services (@rashidazam1351)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-[#0f1012] border border-[#272a30] px-5 py-2.5 rounded-lg">
            <Image
              src="/images/icons/freelancer.png"
              alt="Freelancer.com Verified Profile"
              width={28}
              height={28}
              className="object-contain"
            />
            <div>
              <span className="font-heading font-semibold text-sm text-[#f3f4f6] block">
                Freelancer.com
              </span>
              <span className="text-[11px] text-[#9ca3af]">
                Digital Marketing (@rashidazam1351)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-[#0f1012] border border-[#272a30] px-5 py-2.5 rounded-lg">
            <div className="w-7 h-7 rounded bg-[#d97706]/20 border border-[#d97706]/40 flex items-center justify-center font-bold text-xs text-[#d97706]">
              AD
            </div>
            <div>
              <span className="font-heading font-semibold text-sm text-[#f3f4f6] block">
                Arham Digital Agency
              </span>
              <span className="text-[11px] text-[#9ca3af]">
                Digital Agency Founder
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
