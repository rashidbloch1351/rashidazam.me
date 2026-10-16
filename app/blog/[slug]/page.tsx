import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowUpRight, CalendarDays, Clock3 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { CTABanner } from '@/components/CTABanner';
import { FAQAccordion } from '@/components/FAQAccordion';
import { blogPosts, getPostBySlug, getRelatedPosts } from '@/data/blog';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `https://www.rashidazam.me/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://www.rashidazam.me/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.publishedDate,
      modifiedTime: post.modifiedDate,
      authors: ['Rashid Azam'],
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `https://www.rashidazam.me/blog/${post.slug}#article`,
    headline: post.title,
    description: post.metaDescription,
    url: `https://www.rashidazam.me/blog/${post.slug}`,
    datePublished: post.publishedDate,
    dateModified: post.modifiedDate,
    author: {
      '@type': 'Person',
      '@id': 'https://www.rashidazam.me/#person',
      name: 'Rashid Azam',
      url: 'https://www.rashidazam.me/about',
    },
    publisher: {
      '@type': 'Person',
      '@id': 'https://www.rashidazam.me/#person',
      name: 'Rashid Azam',
    },
    image: 'https://www.rashidazam.me/og-image.png',
    mainEntityOfPage: `https://www.rashidazam.me/blog/${post.slug}`,
    articleSection: post.category,
    inLanguage: 'en',
  };

  return (
    <div className="py-12 space-y-16 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Container>
        <Breadcrumbs
          items={[
            { label: 'Blog', href: '/blog' },
            { label: post.title },
          ]}
        />

        <div className="max-w-4xl space-y-6 pt-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#b45309] bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
              <CalendarDays className="w-3.5 h-3.5" />
              {post.publishedLabel}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
              <Clock3 className="w-3.5 h-3.5" />
              {post.readingTimeMinutes} min read
            </span>
            <span className="text-xs text-slate-500">By Rashid Azam</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-slate-900 tracking-tight leading-tight">
            {post.h1}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {post.intro}
          </p>

          {/* GEO Quick Answer Box */}
          <QuickAnswer title={`Quick Answer: ${post.title}`} text={post.quickAnswer} />
        </div>
      </Container>

      {/* Article Body Content */}
      <Container size="small">
        <div className="space-y-12 text-slate-700 leading-relaxed">
          {post.sections.map((sec, idx) => (
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

          {/* Article FAQs */}
          {post.faqs && post.faqs.length > 0 && (
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">
                Frequently Asked Questions
              </h2>
              <FAQAccordion items={post.faqs} />
            </div>
          )}

          {/* Contextual Link to Primary Service */}
          <div className="bg-amber-50/80 border border-amber-200 p-6 rounded-2xl space-y-3 my-8 shadow-2xs">
            <h3 className="font-heading font-semibold text-lg text-slate-900">
              Looking for Done-For-You SEO Execution?
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              I provide comprehensive{' '}
              <Link
                href="/services/seo-services"
                className="text-[#b45309] font-semibold underline hover:text-[#b45309]"
              >
                Technical SEO Services
              </Link>{' '}
              covering full site audits, schema markup, and on-page optimization for clients worldwide.
            </p>
          </div>
        </div>
      </Container>

      {/* Related Articles */}
      <section className="bg-slate-50 py-16 border-y border-gray-200">
        <Container>
          <SectionHeading
            kicker="Keep Reading"
            title="Related Articles"
            className="mb-8"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((rel) => (
              <Link
                key={rel.slug}
                href={`/blog/${rel.slug}`}
                className="bg-white border border-gray-200 hover:border-amber-400 p-6 rounded-2xl space-y-2 group transition-all shadow-2xs hover:shadow-xs"
              >
                <span className="text-xs text-[#b45309] font-semibold uppercase tracking-wider block">
                  {rel.category}
                </span>
                <h3 className="font-heading font-semibold text-base text-slate-900 group-hover:text-[#b45309] transition-colors">
                  {rel.title}
                </h3>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#b45309] pt-1">
                  Read Article
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
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
