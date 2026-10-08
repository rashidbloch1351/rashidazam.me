import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { relatedLinksMap } from '@/data/links';

export function RelatedLinks({ pageId }: { pageId: string }) {
  const links = relatedLinksMap[pageId] || [];

  if (links.length === 0) return null;

  return (
    <section className="my-12 bg-[#17181c] border border-[#272a30] p-6 sm:p-8 rounded-xl space-y-6">
      <h3 className="text-xl font-heading font-bold text-[#f3f4f6]">
        Related Resources & Case Studies
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {links.map((item) => (
          <Link
            key={item.id}
            href={item.url}
            className="bg-[#0f1012] border border-[#272a30] hover:border-[#d97706]/40 p-5 rounded-lg space-y-2 group transition-all"
          >
            <div className="flex items-center justify-between text-xs text-[#d97706] font-medium uppercase tracking-wider">
              <span>{item.category}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
            <h4 className="font-heading font-semibold text-base text-[#f3f4f6] group-hover:text-[#d97706] transition-colors">
              {item.anchorText}
            </h4>
            <p className="text-xs text-[#9ca3af] leading-relaxed line-clamp-2">
              {item.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
