import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Search } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { CTABanner } from '@/components/CTABanner';
import { seoClusterTopics } from '@/data/clusters/seo';

export const metadata: Metadata = {
  title: 'SEO Knowledge Hub | Technical Guides & Local SEO Resources',
  description: 'Free SEO guides covering technical SEO audits, local SEO for Pakistan, schema markup, keyword research, and WordPress optimization. Educational resource by Rashid Azam.',
  alternates: {
    canonical: 'https://www.rashidazam.me/seo',
  },
  openGraph: {
    title: 'SEO Knowledge Hub | Rashid Azam',
    description: 'Technical SEO guides, local SEO strategies for Pakistan, schema markup, and keyword research frameworks. Free educational content for business owners and SEO practitioners.',
    url: 'https://www.rashidazam.me/seo',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rashid Azam - Web Developer & Technical SEO Expert',
      },
    ],
  },
};

export default function SeoClusterHubPage() {
  return (
    <div className="py-12 space-y-16 bg-white">
      <Container>
        <Breadcrumbs items={[{ label: 'SEO Knowledge Hub' }]} />

        <div className="max-w-3xl space-y-4 pt-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#d97706] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/60">
            Free Educational Resource
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-slate-900 tracking-tight leading-tight">
            SEO Knowledge Hub
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed font-normal">
            Practical, technical guides on SEO — covering technical site audits, local SEO for Pakistan, schema markup, keyword research, and WordPress optimization. Written by Rashid Azam based on direct experience auditing and ranking websites for clients across Pakistan and internationally.
          </p>

          <div className="pt-2">
            <Button href="/services/seo-services" variant="primary" showArrow>
              Explore SEO Services
            </Button>
          </div>
        </div>
      </Container>

      {/* Topics Grid */}
      <section>
        <Container>
          <SectionHeading
            kicker="Topic Guides"
            title="Technical SEO & Local Search Guides"
            description="Step-by-step guides written to help business owners and SEO practitioners understand and implement search optimization correctly."
            className="mb-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seoClusterTopics.map((topic) => (
              <div
                key={topic.slug}
                className="bg-slate-50 border border-slate-200/90 hover:border-amber-400/60 p-8 rounded-2xl space-y-4 flex flex-col justify-between group transition-all shadow-2xs hover:shadow-xs"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-[#d97706]">
                    <Search className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-slate-900 group-hover:text-[#d97706] transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {topic.metaDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80">
                  <Link
                    href={`/seo/${topic.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d97706] hover:text-[#b45309] group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Topic Guide</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Primary Pillar CTA */}
      <Container>
        <CTABanner
          title="Need Professional SEO Services Rather Than a DIY Guide?"
          description="Rashid Azam provides technical SEO audits, local SEO for Pakistan businesses, and WordPress optimization. Contact directly for a consultation."
          buttonText="Discuss Your SEO Project"
          href="/contact"
        />
      </Container>
    </div>
  );
}
