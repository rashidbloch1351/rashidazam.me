import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Calendar, ArrowUpRight, List } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { AuthorBox } from '@/components/AuthorBox';
import { BlogCard } from '@/components/BlogCard';
import { CTABanner } from '@/components/CTABanner';
import { blogPosts, BlogPost } from '@/data/blogPosts';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = blogPosts.find((p) => p.id === params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://rashidazam.me/blog/${post.id}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://rashidazam.me/blog/${post.id}`,
      type: 'article',
      images: [
        {
          url: post.image,
          alt: post.title,
        },
      ],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.id === params.slug);

  if (!post) {
    notFound();
  }

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `https://rashidazam.me${post.image}`,
    datePublished: post.date,
    dateModified: '2026-08-01',
    author: {
      '@type': 'Person',
      name: 'Rashid Azam',
      url: 'https://rashidazam.me',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Rashid Azam Portfolio',
      url: 'https://rashidazam.me',
    },
  };

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  // Fallback if not enough category matches
  const displayRelated = relatedPosts.length > 0 ? relatedPosts : blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

      <div className="py-12 space-y-16">
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Blog', href: '/blog' },
              { label: post.title },
            ]}
          />

          <div className="max-w-4xl space-y-6 pt-4">
            <div className="flex items-center gap-3 text-xs text-[#9ca3af]">
              <span className="bg-[#d97706]/10 text-[#d97706] font-semibold px-3 py-1 rounded-full border border-[#d97706]/20">
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#f3f4f6] tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-[#9ca3af] leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </Container>

        {/* Featured Blog Image */}
        <Container>
          <div className="relative aspect-[16/9] max-w-4xl mx-auto w-full rounded-2xl overflow-hidden border border-[#272a30] bg-[#17181c] shadow-2xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
              className="object-cover"
            />
          </div>
        </Container>

        {/* Article Content */}
        <Container size="small">
          <article className="space-y-10 text-[#9ca3af] leading-relaxed">
            {/* Table of Contents Box */}
            {post.content.sections.length > 0 && (
              <div className="bg-[#17181c] border border-[#272a30] p-6 rounded-xl space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d97706]">
                  <List className="w-4 h-4" />
                  <span>Table of Contents</span>
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm text-[#9ca3af]">
                  {post.content.sections.map((sec, idx) => (
                    <li key={idx} className="hover:text-[#f3f4f6]">
                      • {sec.heading}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Introduction */}
            <div className="space-y-4 text-base text-[#f3f4f6] leading-relaxed font-medium">
              <p>{post.content.introduction}</p>
            </div>

            {/* Main Sections */}
            {post.content.sections.map((section, idx) => (
              <div key={idx} className="space-y-4 pt-4">
                <h2 className="text-2xl font-heading font-bold text-[#f3f4f6]">
                  {section.heading}
                </h2>

                <p className="text-base text-[#9ca3af] leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>

                {section.image && (
                  <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-[#272a30] bg-[#0f1012] my-6">
                    <Image
                      src={section.image}
                      alt={section.imageAlt || section.heading}
                      fill
                      sizes="(max-width: 768px) 100vw, 768px"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            ))}

            {/* Conclusion */}
            {post.content.conclusion && (
              <div className="pt-6 border-t border-[#272a30] space-y-3">
                <h2 className="text-2xl font-heading font-bold text-[#f3f4f6]">
                  Conclusion & Key Takeaways
                </h2>
                <p className="text-base text-[#9ca3af] leading-relaxed">
                  {post.content.conclusion}
                </p>
              </div>
            )}

            {/* Contextual Link to Primary Services */}
            <div className="bg-[#17181c] border border-[#d97706]/30 p-6 rounded-xl space-y-3 my-8">
              <h3 className="font-heading font-semibold text-lg text-[#f3f4f6]">
                Need Professional Web Development or Technical SEO?
              </h3>
              <p className="text-xs text-[#9ca3af]">
                I help businesses in Pakistan and UAE build fast Next.js applications and execute data-backed SEO audits.{' '}
                <Link
                  href="/contact"
                  className="text-[#d97706] font-medium underline hover:text-[#b45309]"
                >
                  Schedule a Consultation
                </Link>
              </p>
            </div>
          </article>
        </Container>

        {/* Author Bio */}
        <Container size="small">
          <AuthorBox />
        </Container>

        {/* Related Posts */}
        <Container>
          <SectionHeading
            kicker="Recommended Reading"
            title="Related Technical Articles"
            className="mb-10"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayRelated.map((relPost) => (
              <BlogCard key={relPost.id} post={relPost} />
            ))}
          </div>
        </Container>

        {/* CTA */}
        <Container>
          <CTABanner
            title="Ready to Transform Your Online Presence?"
            description="Contact Rashid Azam for custom web development, technical SEO audits, or digital ad strategy."
            buttonText="Get in Touch"
            href="/contact"
          />
        </Container>
      </div>
    </>
  );
}
