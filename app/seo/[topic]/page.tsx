import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { CTABanner } from '@/components/CTABanner';
import { seoClusterTopics } from '@/data/clusters/seo';

export async function generateStaticParams() {
  return seoClusterTopics.map((topic) => ({
    topic: topic.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { topic: string };
}): Promise<Metadata> {
  const item = seoClusterTopics.find((t) => t.slug === params.topic);
  if (!item) return {};

  return {
    title: item.metaTitle,
    description: item.metaDescription,
    alternates: {
      canonical: `https://www.rashidazam.me/seo/${item.slug}`,
    },
  };
}

export default function SeoTopicPage({ params }: { params: { topic: string } }) {
  const topic = seoClusterTopics.find((t) => t.slug === params.topic);

  if (!topic) {
    notFound();
  }

  const siblingTopics = seoClusterTopics.filter((t) => t.slug !== topic.slug);

  return (
    <div className="py-12 space-y-16 bg-white">
      <Container>
        <Breadcrumbs
          items={[
            { label: 'SEO Knowledge Hub', href: '/seo' },
            { label: topic.title },
          ]}
        />

        <div className="max-w-4xl space-y-6 pt-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#d97706] bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60">
            SEO Cluster Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-slate-900 tracking-tight leading-tight">
            {topic.h1}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {topic.intro}
          </p>

          {/* GEO Quick Answer Box */}
          <QuickAnswer title={`Quick Answer: ${topic.title}`} text={topic.quickAnswer} />
        </div>
      </Container>

      {/* Guide Body Content */}
      <Container size="small">
        <div className="space-y-12 text-slate-700 leading-relaxed">
          {topic.sections.map((sec, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">
                {sec.heading}
              </h2>
              {sec.body.map((p, pIdx) => (
                <p key={pIdx} className="text-base text-slate-700 leading-relaxed font-normal">
                  {p}
                </p>
              ))}
            </div>
          ))}

          {/* Mandatory Contextual Link to Primary Service */}
          <div className="bg-amber-50/80 border border-amber-200 p-6 rounded-2xl space-y-3 my-8 shadow-2xs">
            <h3 className="font-heading font-semibold text-lg text-slate-900">
              Looking for Done-For-You SEO Execution?
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              I provide comprehensive{' '}
              <Link
                href="/services/seo-services"
                className="text-[#d97706] font-semibold underline hover:text-[#b45309]"
              >
                Technical SEO Services
              </Link>{' '}
              covering full site audits, schema markup, and on-page optimization for clients worldwide.
            </p>
          </div>
        </div>
      </Container>

      {/* Sibling Topics in Cluster */}
      <section className="bg-slate-50 py-16 border-y border-gray-200">
        <Container>
          <SectionHeading
            kicker="Related Guides"
            title="More SEO Cluster Topics"
            className="mb-8"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siblingTopics.map((sib) => (
              <Link
                key={sib.slug}
                href={`/seo/${sib.slug}`}
                className="bg-white border border-gray-200 hover:border-amber-400 p-6 rounded-2xl space-y-2 group transition-all shadow-2xs hover:shadow-xs"
              >
                <span className="text-xs text-[#d97706] font-semibold uppercase tracking-wider block">
                  SEO Guide
                </span>
                <h3 className="font-heading font-semibold text-base text-slate-900 group-hover:text-[#d97706] transition-colors">
                  {sib.title}
                </h3>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Author Credibility */}
      <Container size="small">
        <AuthorBox />
      </Container>

      {/* CTA */}
      <Container>
        <CTABanner
          title="Boost Your Google Rankings With Technical Precision"
          description="Let's diagnose your site's crawl health and build a search strategy that drives real revenue."
          buttonText="Schedule an SEO Audit"
          href="/contact"
        />
      </Container>
    </div>
  );
}
