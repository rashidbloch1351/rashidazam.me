import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Search, FileText, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { CTABanner } from '@/components/CTABanner';
import { seoClusterTopics } from '@/data/clusters/seo';

export const metadata: Metadata = {
  title: 'SEO Knowledge Hub & Technical Guides | Rashid Azam',
  description: 'In-depth SEO tutorials, technical audit guides, local search strategies for Pakistan & UAE, and schema markup implementation.',
  alternates: {
    canonical: 'https://rashidazam.me/seo',
  },
};

export default function SeoClusterHubPage() {
  return (
    <div className="py-12 space-y-16">
      <Container>
        <Breadcrumbs items={[{ label: 'SEO Knowledge Hub' }]} />

        <div className="max-w-3xl space-y-4 pt-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#d97706] bg-[#d97706]/10 px-3 py-1 rounded-full border border-[#d97706]/20">
            Topic Cluster Hub
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-[#f3f4f6] tracking-tight">
            SEO Knowledge & Technical Strategy Hub
          </h1>
          <p className="text-lg text-[#9ca3af] leading-relaxed">
            Practical guides and frameworks on technical SEO audits, local map pack rankings, structured JSON-LD schema, and keyword intent mapping.
          </p>

          <div className="pt-2">
            <Button href="/services/seo-services" variant="primary" showArrow>
              Explore Paid SEO Services
            </Button>
          </div>
        </div>
      </Container>

      {/* Topics Grid */}
      <section>
        <Container>
          <SectionHeading
            kicker="Cluster Topics"
            title="Technical SEO & Ranking Guides"
            description="Explore step-by-step technical guides designed for search engines and real human visitors."
            className="mb-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seoClusterTopics.map((topic) => (
              <div
                key={topic.slug}
                className="bg-[#17181c] border border-[#272a30] hover:border-[#d97706]/40 p-8 rounded-xl space-y-4 flex flex-col justify-between group transition-all"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0f1012] border border-[#272a30] flex items-center justify-center text-[#d97706]">
                    <Search className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-[#f3f4f6] group-hover:text-[#d97706] transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-xs text-[#9ca3af] leading-relaxed line-clamp-3">
                    {topic.metaDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#272a30]/50">
                  <Link
                    href={`/seo/${topic.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#d97706] hover:text-[#b45309] group-hover:translate-x-1 transition-transform"
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
          title="Need a Full Technical SEO Audit for Your Business?"
          description="I perform deep-dive technical audits, keyword mapping, and local search strategies for businesses in Pakistan and UAE."
          buttonText="View SEO Services"
          href="/services/seo-services"
        />
      </Container>
    </div>
  );
}
