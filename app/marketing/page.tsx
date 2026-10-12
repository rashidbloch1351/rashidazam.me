import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { CTABanner } from '@/components/CTABanner';
import { marketingClusterTopics } from '@/data/clusters/marketing';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Digital Marketing & PPC Growth Hub',
  description: 'Guides on high-intent Google Search Ads, scaling Meta Facebook/Instagram campaigns, and conversion rate optimization (CRO).',
  alternates: {
    canonical: 'https://www.rashidazam.me/marketing',
  },
  openGraph: {
    url: 'https://www.rashidazam.me/marketing',
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

export default function MarketingClusterHubPage() {
  return (
    <div className="py-12 space-y-16">
      <Container>
        <Breadcrumbs items={[{ label: 'Marketing Growth Hub' }]} />

        <div className="max-w-3xl space-y-4 pt-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#b45309] bg-[#d97706]/10 px-3 py-1 rounded-full border border-[#d97706]/20">
            Topic Cluster Hub
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-[#f3f4f6] tracking-tight">
            Digital Marketing & Paid Ads Growth Hub
          </h1>
          <p className="text-lg text-[#9ca3af] leading-relaxed">
            Data-backed playbooks on launching Google Search campaigns, scaling Meta Ads with high ROAS, and eliminating conversion friction on landing pages.
          </p>

          <div className="pt-2">
            <Button href="/services/digital-marketing" variant="primary" showArrow>
              Explore Digital Marketing Services
            </Button>
          </div>
        </div>
      </Container>


      {/* Paid Growth System */}
      <section>
        <Container>
          <SectionHeading
            kicker="Start Here"
            title="The Paid Growth System: Three Pillars"
            description="Profitable paid advertising rests on three pillars working together. Weakness in any one pillar taxes the other two — diagnose before you spend."
            className="mb-10"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#17181c] border border-[#272a30] p-8 rounded-xl space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#b45309]">Pillar 1</span>
              <h3 className="text-xl font-heading font-semibold text-[#f3f4f6]">Capture Intent</h3>
              <p className="text-sm text-[#9ca3af] leading-relaxed">
                Google Search Ads buy customers at the moment of decision — but only if your account structure separates intent tiers, your match types stay tight, and negative keywords filter the waste. The{' '}
                <Link href="/marketing/google-ads-search-campaign-setup" className="text-[#b45309] hover:underline font-medium">
                  Google Search Ads setup guide
                </Link>{' '}
                covers the full framework from account structure to conversion tracking.
              </p>
            </div>
            <div className="bg-[#17181c] border border-[#272a30] p-8 rounded-xl space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#b45309]">Pillar 2</span>
              <h3 className="text-xl font-heading font-semibold text-[#f3f4f6]">Scale Creative</h3>
              <p className="text-sm text-[#9ca3af] leading-relaxed">
                On Meta, creative is the targeting. Winning hooks, systematic creative testing pipelines, and broad-audience scaling mechanics decide ROAS more than any audience trick. The{' '}
                <Link href="/marketing/meta-ads-scaling-framework" className="text-[#b45309] hover:underline font-medium">
                  Meta Ads scaling framework
                </Link>{' '}
                details the testing pipeline, horizontal vs vertical scaling, and honest measurement.
              </p>
            </div>
            <div className="bg-[#17181c] border border-[#272a30] p-8 rounded-xl space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#b45309]">Pillar 3</span>
              <h3 className="text-xl font-heading font-semibold text-[#f3f4f6]">Convert Traffic</h3>
              <p className="text-sm text-[#9ca3af] leading-relaxed">
                Doubling conversion rate halves customer acquisition cost across every channel at once. Dedicated landing pages, friction removal, and trust signals near the decision point multiply ad spend efficiency. The{' '}
                <Link href="/marketing/conversion-rate-optimization-playbook" className="text-[#b45309] hover:underline font-medium">
                  CRO playbook
                </Link>{' '}
                gives you the research process, testing discipline, and common mistakes to avoid.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Topics Grid */}
      <section>
        <Container>
          <SectionHeading
            kicker="PPC & CRO Playbooks"
            title="Digital Marketing Cluster Topics"
            description="Proven frameworks for generating leads and scaling return on ad spend."
            className="mb-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketingClusterTopics.map((topic) => (
              <div
                key={topic.slug}
                className="bg-[#17181c] border border-[#272a30] hover:border-[#d97706]/40 p-8 rounded-xl space-y-4 flex flex-col justify-between group transition-all"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0f1012] border border-[#272a30] flex items-center justify-center text-[#b45309]">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-[#f3f4f6] group-hover:text-[#b45309] transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-xs text-[#9ca3af] leading-relaxed line-clamp-3">
                    {topic.metaDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#272a30]/50">
                  <Link
                    href={`/marketing/${topic.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#b45309] hover:text-[#b45309] group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Marketing Guide</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>


      {/* Hub FAQs */}
      <section>
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            <SectionHeading
              kicker="Common Questions"
              title="Digital Marketing FAQs"
              className="mb-8"
            />
            <FAQAccordion
              items={[
                {
                  question: "Should I start with Google Ads or Meta Ads?",
                  answer: "It depends on demand type. If customers actively search for what you sell, Google Search Ads capture that existing intent fastest. If you need to create demand — new products, visual categories, impulse purchases — Meta's discovery feed works better. Many businesses eventually run both: Google harvests intent, Meta creates it.",
                },
                {
                  question: "How much should I budget for paid ads as a beginner?",
                  answer: "Budget what you can sustain for 60-90 days of learning without panic, because the first weeks buy data, not profit. You need enough daily spend to generate meaningful test data — a handful of clicks a day teaches nothing. Start with one platform and one clear offer rather than spreading thin across three.",
                },
                {
                  question: "Do you manage ad campaigns for clients?",
                  answer: "Yes — Google Ads and Meta Ads management including account setup, creative direction, landing page CRO, and conversion tracking, for businesses targeting customers in Pakistan, the UAE, and international markets. The engagement starts with auditing what's already running before spending more.",
                },
                {
                  question: "Why do my ads get clicks but no sales?",
                  answer: "The usual suspects in order: landing page mismatch (the page doesn't deliver what the ad promised), weak offer or unclear next step, slow mobile experience, or unqualified traffic (wrong keywords or audiences). Diagnose with the funnel: check bounce rate by source, then fix the biggest leak first — it's usually the landing page, not the ad.",
                },
                {
                  question: "Is SEO or paid ads better for my business?",
                  answer: "They solve different problems. Paid ads buy immediate, controllable traffic — ideal for testing offers and generating quick wins. SEO builds compounding, lower-marginal-cost traffic over months. Businesses that can afford both use ads for speed and SEO for durability; businesses that must choose should match the channel to their timeline and cash flow.",
                },
              ]}
            />
          </div>
        </Container>
      </section>

      {/* Primary Pillar CTA */}
      <Container>
        <CTABanner
          title="Ready to Scale Your Paid Advertising ROAS?"
          description="I manage Google Ads, Meta Ads, and landing page CRO for businesses targeting customers in Pakistan and the UAE."
          buttonText="Explore Paid Ad Services"
          href="/services/digital-marketing"
        />
      </Container>
    </div>
  );
}
