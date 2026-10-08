import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PillarService } from '@/data/servicesData';

export function ServiceCard({ service, icon }: { service: PillarService; icon?: React.ReactNode }) {
  return (
    <div className="bg-[#17181c] border border-[#272a30] hover:border-[#d97706]/40 p-8 rounded-xl transition-all duration-200 flex flex-col justify-between group shadow-sm hover:shadow-md">
      <div className="space-y-4">
        {icon && (
          <div className="w-12 h-12 rounded-lg bg-[#0f1012] border border-[#272a30] flex items-center justify-center">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-heading font-semibold text-[#f3f4f6] group-hover:text-[#d97706] transition-colors">
          {service.name}
        </h3>
        <p className="text-sm text-[#9ca3af] leading-relaxed line-clamp-3">
          {service.intro}
        </p>
      </div>
      <div className="pt-6 border-t border-[#272a30]/50 mt-6">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#d97706] hover:text-[#b45309] group-hover:translate-x-1 transition-transform"
        >
          <span>Explore {service.name}</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
