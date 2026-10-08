import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { BlogCard } from '@/components/BlogCard';
import { CTABanner } from '@/components/CTABanner';
import { blogPosts } from '@/data/blogPosts';

export const metadata: Metadata = {
  title: 'Web Development & SEO Insights Blog | Rashid Azam',
  description: 'Practical guides and tutorials on technical SEO, Next.js web development, YouTube channel automation, and AI workflows by Rashid Azam.',
  alternates: {
    canonical: 'https://rashidazam.me/blog',
  },
};

export default function BlogHubPage() {
  const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

  return (
    <div className="py-12 space-y-16">
      <Container>
        <Breadcrumbs items={[{ label: 'Blog & Technical Insights' }]} />

        <div className="max-w-3xl space-y-4 pt-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#d97706] bg-[#d97706]/10 px-3 py-1 rounded-full border border-[#d97706]/20">
            Technical Articles & Guides
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-[#f3f4f6] tracking-tight">
            Web Development & SEO Insights
          </h1>
          <p className="text-lg text-[#9ca3af] leading-relaxed">
            Practical tutorials on technical SEO strategy, Next.js architecture, YouTube automation, and digital marketing execution.
          </p>

          {/* Category Filter Badges */}
          <div className="flex items-center gap-2 flex-wrap pt-4">
            <span className="text-xs font-medium text-[#f3f4f6] bg-[#d97706] px-3 py-1 rounded-full">
              All Posts ({blogPosts.length})
            </span>
            {categories.map((cat) => (
              <span
                key={cat}
                className="text-xs font-medium text-[#9ca3af] bg-[#17181c] border border-[#272a30] px-3 py-1 rounded-full"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </Container>

      {/* Blog Posts Grid */}
      <section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Banner */}
      <Container>
        <CTABanner
          title="Want Custom Strategy Tailored for Your Business?"
          description="Schedule a technical consultation to discuss custom web development or an in-depth SEO audit."
          buttonText="Contact Rashid Azam"
          href="/contact"
        />
      </Container>
    </div>
  );
}
