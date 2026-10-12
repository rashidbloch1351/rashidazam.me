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
  description: 'Free SEO guides: technical SEO audits, local SEO for Pakistan, schema markup, keyword research and WordPress optimization. Practical, no-fluff tutorials.',
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

const coreAreas = [
  {
    title: 'Technical SEO',
    body: 'The foundation everything else stands on: how search engines crawl, render, and index your site. Covers site speed, Core Web Vitals, mobile usability, and fixing the errors that silently block rankings.',
  },
  {
    title: 'On-Page SEO',
    body: 'How individual pages are structured and written — titles, headings, internal links, and content depth — so both readers and search engines immediately understand what each page is about.',
  },
  {
    title: 'Keyword Research',
    body: 'Finding the actual phrases your audience types into Google, then grouping them by topic and intent so every page targets something real instead of guessing.',
  },
  {
    title: 'Search Intent',
    body: 'The "why" behind every query. A searcher wanting to learn needs a guide; one ready to buy needs a product or service page. Matching page type to intent is what separates ranking content from ignored content.',
  },
  {
    title: 'Schema Markup',
    body: 'Structured data that explicitly tells search engines what your content means — articles, FAQs, products, local business details — which can also qualify pages for rich results in search.',
  },
  {
    title: 'Local SEO',
    body: 'Visibility where customers actually are: Google Business Profile optimization, local citations, reviews, and location pages for businesses serving specific cities or regions.',
  },
];

const startHere = [
  {
    situation: 'Your site has traffic drops, or was never properly optimized',
    guide: { slug: 'technical-seo-audit-guide', label: 'Technical SEO Audit Guide' },
    why: 'Start with the foundations — crawl errors and technical issues can cap everything else.',
  },
  {
    situation: 'You serve customers in a specific city or region',
    guide: { slug: 'local-seo-pakistan-uae', label: 'Local SEO Framework for Pakistan & UAE' },
    why: 'Local visibility has its own playbook: Business Profile, citations, and reviews.',
  },
  {
    situation: 'You are planning new content or a blog',
    guide: { slug: 'keyword-research-intent', label: 'Keyword Research and Search Intent' },
    why: 'Research before writing. This guide shows how to find topics worth targeting and match them to intent.',
  },
  {
    situation: 'Your site runs on WordPress',
    guide: { slug: 'wordpress-seo-guide', label: 'WordPress SEO Optimization Guide' },
    why: 'Platform-specific: themes, plugins, and settings that make or break WordPress rankings.',
  },
  {
    situation: 'You sell products online',
    guide: { slug: 'ecommerce-seo-guide', label: 'E-Commerce SEO Guide' },
    why: 'Stores face unique problems — faceted navigation, thin product pages, indexation bloat — covered step by step.',
  },
  {
    situation: 'You want visibility in AI answers, not just blue links',
    guide: { slug: 'answer-engine-optimization-guide', label: 'Answer Engine Optimization (AEO) and GEO Guide' },
    why: 'How to get cited in AI Overviews and assistants — plus honest limits of what AEO can do.',
  },
  {
    situation: 'You want richer search results for existing pages',
    guide: { slug: 'on-page-seo-schema-markup', label: 'On-Page SEO and Schema Markup' },
    why: 'On-page structure plus schema implementation, with a testing workflow to validate your markup.',
  },
];

export default function SeoClusterHubPage() {
  return (
    <div className="py-12 space-y-16 bg-white">
      <Container>
        <Breadcrumbs items={[{ label: 'SEO Knowledge Hub' }]} />

        <div className="max-w-3xl space-y-4 pt-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#b45309] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/60">
            Free Educational Resource
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-slate-900 tracking-tight leading-tight">
            SEO Knowledge Hub
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed font-normal">
            Practical, technical guides on SEO — covering technical site audits, local SEO for Pakistan, schema markup, keyword research, and WordPress optimization. Written by Rashid Azam based on direct experience auditing and ranking websites for clients across Pakistan and internationally.
          </p>
          <p className="text-base text-slate-600 leading-relaxed">
            The hub is organized the way SEO actually works in practice: technical foundations first, then content and on-page optimization, then local visibility and measurement. Every guide is a standalone deep-dive you can apply directly to your own website — no fluff, no generic advice, and no skipped steps. Whether you are a business owner doing SEO yourself or a practitioner sharpening your process, start with the area that matches your biggest bottleneck.
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
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-[#b45309]">
                    <Search className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-slate-900 group-hover:text-[#b45309] transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {topic.metaDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80">
                  <Link
                    href={`/seo/${topic.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#b45309] hover:text-[#b45309] group-hover:translate-x-1 transition-transform"
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

      {/* Core topic areas */}
      <section className="bg-slate-50 py-16 border-y border-gray-200">
        <Container>
          <SectionHeading
            kicker="Foundations"
            title="The Six Areas Every SEO Strategy Needs"
            description="Before opening any guide, it helps to see how the pieces fit together. Most SEO problems — and most wasted effort — come from working on the wrong area first."
            className="mb-10"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreAreas.map((area) => (
              <div
                key={area.title}
                className="bg-white border border-slate-200/90 p-6 rounded-2xl space-y-2 shadow-2xs"
              >
                <h3 className="text-lg font-heading font-semibold text-slate-900">
                  {area.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{area.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Which guide first */}
      <section>
        <Container>
          <SectionHeading
            kicker="Start Here"
            title="Which Guide Should You Read First?"
            description="Pick the guide that matches your situation right now. Each one is self-contained, so you can read in any order — but starting with your actual bottleneck saves time."
            className="mb-10"
          />
          <div className="max-w-3xl space-y-4">
            {startHere.map((item) => (
              <div
                key={item.guide.slug}
                className="bg-slate-50 border border-slate-200/90 p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center gap-3 justify-between"
              >
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-slate-900">{item.situation}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.why}</p>
                </div>
                <Link
                  href={`/seo/${item.guide.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#b45309] hover:text-[#b45309] whitespace-nowrap shrink-0"
                >
                  <span>{item.guide.label}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* When to hire a professional */}
      <section className="bg-slate-50 py-16 border-y border-gray-200">
        <Container size="small">
          <SectionHeading
            kicker="Beyond DIY"
            title="When to Bring in a Professional"
            description="These guides cover what a careful site owner can implement directly. Some situations genuinely benefit from specialist help — not as a sales pitch, but as practical guidance."
            className="mb-8"
          />
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              A full <Link href="/services/seo-audit" className="font-semibold text-[#b45309] hover:text-[#b45309]">technical SEO audit</Link> is worth it when traffic has dropped and you cannot isolate the cause, when you are migrating or redesigning a site, or when you compete in a crowded niche where small technical edges compound. An audit gives you a prioritized fix list instead of months of guessing.
            </p>
            <p>
              Ongoing <Link href="/services/seo-services" className="font-semibold text-[#b45309] hover:text-[#b45309]">SEO services</Link> make sense when optimization needs consistent execution — content publishing, link building, and technical maintenance — that you do not have time to run in-house. And if your customers come from a specific area, <Link href="/services/local-seo" className="font-semibold text-[#b45309] hover:text-[#b45309]">local SEO</Link> work on your Business Profile and local citations typically pays back faster than broad national targeting.
            </p>
            <p>
              For everything else, the guides above are a solid starting point — and they will also help you evaluate any SEO provider you talk to, because you will know what good work looks like.
            </p>
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
