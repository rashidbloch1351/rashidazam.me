import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function CTABanner({
  title = "Ready to Build or Rank Your Platform?",
  description = "Get a detailed technical audit and actionable execution roadmap tailored for your business, startup, or agency.",
  buttonText = "Schedule a Strategy Call",
  href = "/contact",
}: {
  title?: string;
  description?: string;
  buttonText?: string;
  href?: string;
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 p-8 sm:p-12 rounded-3xl my-16 text-center space-y-6 relative overflow-hidden shadow-xl">
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-2xl mx-auto space-y-3 relative z-10">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          {description}
        </p>
      </div>
      <div className="relative z-10 pt-2">
        <Link
          href={href}
          className="inline-flex items-center gap-2 bg-[#b45309] hover:bg-[#92400e] text-white font-medium px-8 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105"
        >
          <span>{buttonText}</span>
          <ArrowUpRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
