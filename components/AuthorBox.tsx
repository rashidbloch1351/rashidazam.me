import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function AuthorBox() {
  return (
    <div className="bg-slate-50 border border-slate-200/90 p-6 sm:p-8 rounded-2xl my-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-2xs">
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-amber-400 shrink-0 bg-slate-100">
        <Image
          src="/images/branding/profile-hero.jpg"
          alt="Rashid Azam"
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>
      <div className="space-y-2 flex-grow">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h4 className="font-heading font-bold text-lg text-slate-900">
              Written by Rashid Azam
            </h4>
            <p className="text-xs text-[#d97706] font-semibold">
              Web Developer & Technical SEO Specialist (BS IT)
            </p>
          </div>
          <Link
            href="/about"
            className="text-xs font-semibold text-slate-700 hover:text-slate-900 inline-flex items-center gap-1 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs hover:border-amber-400 transition-all"
          >
            <span>Full Bio</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#d97706]" />
          </Link>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
          Rashid Azam is a web developer and technical SEO consultant with extensive experience helping businesses, startups, and agencies worldwide build fast web applications and scale organic search traffic.
        </p>
      </div>
    </div>
  );
}
