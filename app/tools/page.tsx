import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, Wrench, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CTABanner } from '@/components/CTABanner';
import { toolsData } from '@/data/toolsData';

export const metadata: Metadata = {
  title: 'Free Web & Developer Tools Hub',
  description: 'Explore live web tools, cryptocurrency currency converters, QR code generators, and aggregate calculators built by Rashid Azam.',
  alternates: {
    canonical: 'https://www.rashidazam.me/tools',
  },
};

export default function ToolsHubPage() {
  return (
    <div className="py-12 space-y-16">
      <Container>
        <Breadcrumbs items={[{ label: 'Free Tools Hub' }]} />

        <div className="max-w-3xl space-y-4 pt-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#d97706] bg-[#d97706]/10 px-3 py-1 rounded-full border border-[#d97706]/20">
            Free Online Utilities
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-[#f3f4f6] tracking-tight">
            Free Web Applications & Calculators
          </h1>
          <p className="text-lg text-[#9ca3af] leading-relaxed">
            Live web tools and financial utility converters created and hosted by Rashid Azam for instant, registration-free use.
          </p>
        </div>
      </Container>

      {/* Tools Grid */}
      <section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {toolsData.map((tool) => (
              <div
                key={tool.id}
                className="bg-[#17181c] border border-[#272a30] hover:border-[#d97706]/40 p-8 rounded-xl space-y-4 flex flex-col justify-between group transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#d97706]">
                    <span className="font-semibold uppercase tracking-wider">{tool.category}</span>
                    <Wrench className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-[#f3f4f6] group-hover:text-[#d97706] transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-[#9ca3af] leading-relaxed">
                    {tool.description}
                  </p>
                  <div className="flex items-center gap-1.5 flex-wrap pt-2">
                    {tool.tags.map((tag) => (
                      <span key={tag} className="text-[10px] bg-[#0f1012] border border-[#272a30] text-[#9ca3af] px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#272a30]/50">
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#d97706] hover:text-[#b45309]"
                  >
                    <span>Launch Live Tool</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Banner */}
      <Container>
        <CTABanner
          title="Need a Custom Web Application Built for Your Business?"
          description="I build fast, responsive Next.js and React web applications, custom API integrations, and web utilities."
          buttonText="Discuss Your Web Project"
          href="/contact"
        />
      </Container>
    </div>
  );
}
