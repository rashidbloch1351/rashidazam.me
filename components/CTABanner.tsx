import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function CTABanner({
  title = "Ready to Build or Rank Your Platform?",
  description = "Get a detailed technical audit and actionable execution roadmap tailored for your business in Pakistan or UAE.",
  buttonText = "Schedule a Strategy Call",
  href = "/contact",
}: {
  title?: string;
  description?: string;
  buttonText?: string;
  href?: string;
}) {
  return (
    <div className="bg-gradient-to-r from-[#17181c] to-[#202228] border border-[#d97706]/30 p-8 sm:p-12 rounded-2xl my-16 text-center space-y-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#d97706]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-2xl mx-auto space-y-3 relative z-10">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#f3f4f6] tracking-tight">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-[#9ca3af] leading-relaxed">
          {description}
        </p>
      </div>
      <div className="relative z-10 pt-2">
        <Link
          href={href}
          className="inline-flex items-center gap-2 bg-[#d97706] hover:bg-[#b45309] text-white font-medium px-8 py-3.5 rounded-lg transition-all shadow-lg hover:shadow-xl"
        >
          <span>{buttonText}</span>
          <ArrowUpRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
