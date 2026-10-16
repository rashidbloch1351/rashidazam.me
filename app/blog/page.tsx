import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CTABanner } from '@/components/CTABanner';
import { BlogListing } from '@/components/BlogListing';
import { blogPosts } from '@/data/blog';

export const metadata: Metadata = {
  title: 'Blog & Insights | SEO, Marketing & Web Development Guides',
  description:
    'Practical guides on SEO, digital marketing, web development, and AI automation — written by Rashid Azam from direct client experience. No fluff, no skipped steps.',
  alternates: {
    canonical: 'https://www.rashidazam.me/blog',
  },
  openGraph: {
    title: 'Blog & Insights | Rashid Azam',
    description:
      'SEO strategies, digital marketing insights, practical tutorials, and web development guides — from real client work.',
    url: 'https://www.rashidazam.me/blog',
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

export default function BlogPage() {
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': 'https://www.rashidazam.me/blog#blog',
    name: 'Blog & Insights — Rashid Azam',
    description:
      'Practical guides on SEO, digital marketing, web development, and AI automation.',
    url: 'https://www.rashidazam.me/blog',
    author: {
      '@type': 'Person',
      '@id': 'https://www.rashidazam.me/#person',
      name: 'Rashid Azam',
      url: 'https://www.rashidazam.me',
    },
    blogPost: blogPosts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `https://www.rashidazam.me/blog/${post.slug}`,
      datePublished: post.publishedDate,
      dateModified: post.modifiedDate,
      author: { '@id': 'https://www.rashidazam.me/#person' },
    })),
  };

  return (
    <div className="py-12 space-y-12 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <Container>
        <Breadcrumbs items={[{ label: 'Blog' }]} />

        <div className="max-w-3xl space-y-4 pt-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#b45309] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/60">
            Blog & Insights
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-slate-900 tracking-tight leading-tight">
            Blog & Insights
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed font-normal">
            SEO strategies, digital marketing insights, practical tutorials, and web
            development guides — sharing practical knowledge about SEO, digital
            marketing, web development, AI automation, and online growth.
          </p>
          <p className="text-base text-slate-600 leading-relaxed">
            Every article is written by Rashid Azam based on direct experience
            auditing and ranking websites for clients across Pakistan and
            internationally. No fluff, no generic advice, and no skipped steps —
            just processes you can apply directly to your own website.
          </p>
        </div>
      </Container>

      <Container>
        <Suspense fallback={<div className="py-16 text-center text-sm text-slate-500">Loading articles…</div>}>
          <BlogListing />
        </Suspense>
      </Container>

      <Container>
        <CTABanner
          title="Need Help Improving Your Website's SEO?"
          description="Rashid Azam provides technical SEO audits, local SEO for Pakistan businesses, and WordPress optimization. Contact directly for a consultation."
          buttonText="Discuss Your SEO Project"
          href="/contact"
        />
      </Container>
    </div>
  );
}
