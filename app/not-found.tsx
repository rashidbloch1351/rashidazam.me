import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Search, Home, MapPin, Code } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export default function NotFoundPage() {
  return (
    <div className="py-20 bg-white">
      <Container size="small" className="text-center space-y-8">
        <div className="space-y-3">
          <span className="font-heading font-bold text-6xl text-[#b45309] block">
            404
          </span>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-slate-900">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            The page you are looking for does not exist or may have moved. Use the quick links below to explore the site.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto text-left pt-4">
          <Link
            href="/"
            className="bg-slate-50 border border-slate-200 hover:border-[#d97706]/40 p-4 rounded-xl flex items-center gap-3 group transition-all"
          >
            <div className="w-9 h-9 rounded bg-amber-50 border border-amber-200/60 flex items-center justify-center text-[#b45309]">
              <Home className="w-4 h-4" />
            </div>
            <div>
              <span className="font-heading font-semibold text-sm text-slate-900 group-hover:text-[#b45309] transition-colors block">
                Homepage
              </span>
              <span className="text-[11px] text-slate-500">Return to main page</span>
            </div>
          </Link>

          <Link
            href="/services"
            className="bg-slate-50 border border-slate-200 hover:border-[#d97706]/40 p-4 rounded-xl flex items-center gap-3 group transition-all"
          >
            <div className="w-9 h-9 rounded bg-amber-50 border border-amber-200/60 flex items-center justify-center text-[#b45309]">
              <Search className="w-4 h-4" />
            </div>
            <div>
              <span className="font-heading font-semibold text-sm text-slate-900 group-hover:text-[#b45309] transition-colors block">
                Pillar Services
              </span>
              <span className="text-[11px] text-slate-500">SEO, Dev & Marketing</span>
            </div>
          </Link>

          <Link
            href="/seo"
            className="bg-slate-50 border border-slate-200 hover:border-[#d97706]/40 p-4 rounded-xl flex items-center gap-3 group transition-all"
          >
            <div className="w-9 h-9 rounded bg-amber-50 border border-amber-200/60 flex items-center justify-center text-[#b45309]">
              <Code className="w-4 h-4" />
            </div>
            <div>
              <span className="font-heading font-semibold text-sm text-slate-900 group-hover:text-[#b45309] transition-colors block">
                SEO Knowledge Hub
              </span>
              <span className="text-[11px] text-slate-500">SEO guides & audits</span>
            </div>
          </Link>

          <Link
            href="/locations"
            className="bg-slate-50 border border-slate-200 hover:border-[#d97706]/40 p-4 rounded-xl flex items-center gap-3 group transition-all"
          >
            <div className="w-9 h-9 rounded bg-amber-50 border border-amber-200/60 flex items-center justify-center text-[#b45309]">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="font-heading font-semibold text-sm text-slate-900 group-hover:text-[#b45309] transition-colors block">
                Locations Directory
              </span>
              <span className="text-[11px] text-slate-500">Pakistan & global hubs</span>
            </div>
          </Link>
        </div>
      </Container>
    </div>
  );
}
