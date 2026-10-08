import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Search, Home, FileText, Briefcase } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFoundPage() {
  return (
    <div className="py-20">
      <Container size="small" className="text-center space-y-8">
        <div className="space-y-3">
          <span className="font-heading font-bold text-6xl text-[#d97706] block">
            404
          </span>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-[#f3f4f6]">
            Page Not Found
          </h1>
          <p className="text-sm text-[#9ca3af] max-w-md mx-auto leading-relaxed">
            The page you are looking for does not exist or may have moved. Use the quick links below to explore the site.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto text-left pt-4">
          <Link
            href="/"
            className="bg-[#17181c] border border-[#272a30] hover:border-[#d97706]/40 p-4 rounded-xl flex items-center gap-3 group transition-all"
          >
            <div className="w-9 h-9 rounded bg-[#0f1012] flex items-center justify-center text-[#d97706]">
              <Home className="w-4 h-4" />
            </div>
            <div>
              <span className="font-heading font-semibold text-sm text-[#f3f4f6] group-hover:text-[#d97706] transition-colors block">
                Homepage
              </span>
              <span className="text-[11px] text-[#9ca3af]">Return to main page</span>
            </div>
          </Link>

          <Link
            href="/services"
            className="bg-[#17181c] border border-[#272a30] hover:border-[#d97706]/40 p-4 rounded-xl flex items-center gap-3 group transition-all"
          >
            <div className="w-9 h-9 rounded bg-[#0f1012] flex items-center justify-center text-[#d97706]">
              <Search className="w-4 h-4" />
            </div>
            <div>
              <span className="font-heading font-semibold text-sm text-[#f3f4f6] group-hover:text-[#d97706] transition-colors block">
                Pillar Services
              </span>
              <span className="text-[11px] text-[#9ca3af]">SEO, Dev & Marketing</span>
            </div>
          </Link>

          <Link
            href="/projects"
            className="bg-[#17181c] border border-[#272a30] hover:border-[#d97706]/40 p-4 rounded-xl flex items-center gap-3 group transition-all"
          >
            <div className="w-9 h-9 rounded bg-[#0f1012] flex items-center justify-center text-[#d97706]">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <span className="font-heading font-semibold text-sm text-[#f3f4f6] group-hover:text-[#d97706] transition-colors block">
                Case Studies
              </span>
              <span className="text-[11px] text-[#9ca3af]">Verified live projects</span>
            </div>
          </Link>

          <Link
            href="/blog"
            className="bg-[#17181c] border border-[#272a30] hover:border-[#d97706]/40 p-4 rounded-xl flex items-center gap-3 group transition-all"
          >
            <div className="w-9 h-9 rounded bg-[#0f1012] flex items-center justify-center text-[#d97706]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <span className="font-heading font-semibold text-sm text-[#f3f4f6] group-hover:text-[#d97706] transition-colors block">
                Technical Blog
              </span>
              <span className="text-[11px] text-[#9ca3af]">SEO & Dev articles</span>
            </div>
          </Link>
        </div>
      </Container>
    </div>
  );
}
