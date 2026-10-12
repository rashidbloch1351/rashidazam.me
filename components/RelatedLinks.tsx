import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { relatedLinksMap } from '@/data/links';

export function RelatedLinks({ pageId }: { pageId: string }) {
  const links = relatedLinksMap[pageId] || [];

  if (links.length === 0) return null;

  return (
    <section className="my-12 bg-slate-50 border border-slate-200/90 p-6 sm:p-8 rounded-2xl space-y-6 shadow-2xs">
      <h3 className="text-xl font-heading font-bold text-slate-900">
        Related Resources & Case Studies
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {links.map((item) => (
          <Link
            key={item.id}
            href={item.url}
            className="bg-white border border-slate-200 hover:border-amber-400 p-5 rounded-xl space-y-2 group transition-all shadow-2xs hover:shadow-xs"
          >
            <div className="flex items-center justify-between text-xs text-[#b45309] font-semibold uppercase tracking-wider">
              <span>{item.category}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
            <h4 className="font-heading font-semibold text-base text-slate-900 group-hover:text-[#b45309] transition-colors">
              {item.anchorText}
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
              {item.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
