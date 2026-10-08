import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function AuthorBox() {
  return (
    <div className="bg-[#17181c] border border-[#272a30] p-6 sm:p-8 rounded-xl my-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-[#d97706]/40 shrink-0 bg-[#0f1012]">
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
            <h4 className="font-heading font-bold text-lg text-[#f3f4f6]">
              Written by Rashid Azam
            </h4>
            <p className="text-xs text-[#d97706] font-medium">
              Web Developer & Technical SEO Specialist (BS IT)
            </p>
          </div>
          <Link
            href="/about"
            className="text-xs font-medium text-[#9ca3af] hover:text-[#f3f4f6] inline-flex items-center gap-1 bg-[#202228] px-3 py-1.5 rounded-lg border border-[#272a30]"
          >
            <span>Full Bio</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
          Rashid Azam is a web developer and technical SEO consultant with 3+ years of experience helping businesses in Pakistan and UAE build fast web apps, scale organic traffic, and automate video pipelines.
        </p>
      </div>
    </div>
  );
}
