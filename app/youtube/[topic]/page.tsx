import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { CTABanner } from '@/components/CTABanner';
import { youtubeClusterTopics } from '@/data/clusters/youtube';
import { FAQAccordion } from '@/components/FAQAccordion';

export async function generateStaticParams() {
  return youtubeClusterTopics.map((topic) => ({
    topic: topic.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { topic: string };
}): Promise<Metadata> {
  const item = youtubeClusterTopics.find((t) => t.slug === params.topic);
  if (!item) return {};

  return {
    title: item.metaTitle,
    description: item.metaDescription,
    alternates: {
      canonical: `https://www.rashidazam.me/youtube/${item.slug}`,
    },
  };
}

export default function YoutubeTopicPage({ params }: { params: { topic: string } }) {
  const topic = youtubeClusterTopics.find((t) => t.slug === params.topic);

  if (!topic) {
    notFound();
  }

  const siblingTopics = youtubeClusterTopics.filter((t) => t.slug !== topic.slug);

  return (
    <div className="py-12 space-y-16">
      <Container>
        <Breadcrumbs
          items={[
            { label: 'YouTube Growth Hub', href: '/youtube' },
            { label: topic.title },
          ]}
        />

        <div className="max-w-4xl space-y-6 pt-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#b45309] bg-[#d97706]/10 px-3 py-1 rounded-full border border-[#d97706]/20">
            YouTube Cluster Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-[#f3f4f6] tracking-tight leading-tight">
            {topic.h1}
          </h1>
          <p className="text-base sm:text-lg text-[#9ca3af] leading-relaxed">
            {topic.intro}
          </p>

          <QuickAnswer title={`Quick Answer: ${topic.title}`} text={topic.quickAnswer} />
        </div>
      </Container>

      {/* Guide Body Content */}
      <Container size="small">
        <div className="space-y-12 text-[#9ca3af] leading-relaxed">
          {topic.sections.map((sec, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#f3f4f6]">
                {sec.heading}
              </h2>
              {sec.body.map((p, pIdx) => (
                <p key={pIdx} className="text-base text-[#9ca3af]">
                  {p}
                </p>
              ))}
            </div>
          ))}


          {/* Guide FAQs */}
          {topic.faqs && topic.faqs.length > 0 && (
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#f3f4f6]">
                Frequently Asked Questions
              </h2>
              <FAQAccordion items={topic.faqs} />
            </div>
          )}

          {/* Contextual Link to Primary Service */}
          <div className="bg-[#17181c] border border-[#d97706]/30 p-6 rounded-xl space-y-3 my-8">
            <h3 className="font-heading font-semibold text-lg text-[#f3f4f6]">
              Need Full YouTube Channel Automation?
            </h3>
            <p className="text-xs text-[#9ca3af]">
              I provide complete end-to-end{' '}
              <Link
                href="/services/youtube-automation"
                className="text-[#b45309] font-medium underline hover:text-[#b45309]"
              >
                YouTube Automation Services
              </Link>{' '}
              handling niche research, voiceovers, video editing, and custom thumbnails.
            </p>
          </div>
        </div>
      </Container>

      {/* Sibling Topics */}
      <section className="bg-[#17181c] py-16 border-y border-[#272a30]">
        <Container>
          <SectionHeading
            kicker="Related Guides"
            title="More YouTube Cluster Topics"
            className="mb-8"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {siblingTopics.map((sib) => (
              <Link
                key={sib.slug}
                href={`/youtube/${sib.slug}`}
                className="bg-[#0f1012] border border-[#272a30] hover:border-[#d97706]/40 p-6 rounded-xl space-y-2 group transition-all"
              >
                <span className="text-xs text-[#b45309] font-medium uppercase tracking-wider block">
                  YouTube Guide
                </span>
                <h3 className="font-heading font-semibold text-base text-[#f3f4f6] group-hover:text-[#b45309] transition-colors">
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
          title="Turn YouTube Into a Reliable Income Stream"
          description="Let's build a content creation pipeline that maximizes CPMs, viewer retention, and subscriber growth."
          buttonText="Start YouTube Automation"
          href="/contact"
        />
      </Container>
    </div>
  );
}
