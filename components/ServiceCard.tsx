import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PillarService } from '@/data/servicesData';

export function ServiceCard({ service, icon }: { service: PillarService; icon?: React.ReactNode }) {
  return (
    <div className="bg-white border border-gray-200 hover:border-amber-400 p-8 rounded-2xl transition-all duration-200 flex flex-col justify-between group shadow-xs hover:shadow-md">
      <div className="space-y-4">
        {icon && (
          <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-heading font-semibold text-slate-900 group-hover:text-[#b45309] transition-colors">
          {service.name}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
          {service.intro}
        </p>
      </div>
      <div className="pt-6 border-t border-gray-100 mt-6">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#b45309] hover:text-[#b45309] group-hover:translate-x-1 transition-transform"
        >
          <span>Explore {service.name}</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
