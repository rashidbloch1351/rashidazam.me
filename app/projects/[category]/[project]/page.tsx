import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { CTABanner } from '@/components/CTABanner';
import { AuthorBox } from '@/components/AuthorBox';
import { projectCategories } from '@/data/projectsData';

export async function generateStaticParams() {
  const params: { category: string; project: string }[] = [];

  projectCategories.forEach((cat) => {
    cat.projects.forEach((proj) => {
      params.push({
        category: cat.slug,
        project: proj.projectSlug,
      });
    });
  });

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { category: string; project: string };
}): Promise<Metadata> {
  const cat = projectCategories.find((c) => c.slug === params.category);
  const proj = cat?.projects.find((p) => p.projectSlug === params.project);

  if (!cat || !proj) return {};

  return {
    title: `${proj.title} Case Study | Rashid Azam Portfolio`,
    description: proj.description,
    alternates: {
      canonical: `https://rashidazam.me/projects/${cat.slug}/${proj.projectSlug}`,
    },
  };
}

export default function IndividualCaseStudyPage({
  params,
}: {
  params: { category: string; project: string };
}) {
  const cat = projectCategories.find((c) => c.slug === params.category);
  const proj = cat?.projects.find((p) => p.projectSlug === params.project);

  if (!cat || !proj) {
    notFound();
  }

  const creativeWorkSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: proj.title,
    description: proj.description,
    author: {
      '@type': 'Person',
      name: 'Rashid Azam',
      url: 'https://rashidazam.me',
    },
    ...(proj.url ? { url: proj.url } : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
      />

      <div className="py-12 space-y-16">
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Projects', href: '/projects' },
              { label: cat.title, href: `/projects/${cat.slug}` },
              { label: proj.title },
            ]}
          />

          <div className="max-w-4xl space-y-6 pt-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#d97706] bg-[#d97706]/10 px-3 py-1 rounded-full border border-[#d97706]/20">
                {cat.title} Case Study
              </span>
              {proj.tags.map((tag) => (
                <span key={tag} className="text-xs bg-[#17181c] border border-[#272a30] text-[#9ca3af] px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-[#f3f4f6] tracking-tight leading-tight">
              {proj.title}
            </h1>

            <p className="text-lg text-[#9ca3af] leading-relaxed">
              {proj.description}
            </p>

            {proj.url && (
              <div className="pt-2">
                <Button href={proj.url} external variant="primary" showArrow>
                  Visit Live Site
                </Button>
              </div>
            )}
          </div>
        </Container>

        {/* Featured Case Study Screenshot */}
        <Container>
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#272a30] bg-[#17181c] shadow-2xl">
            <Image
              src={proj.image}
              alt={proj.title}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
              className="object-cover object-top"
            />
          </div>
        </Container>

        {/* Challenge, Solution, Results */}
        <Container size="small">
          <div className="space-y-12 text-[#9ca3af] leading-relaxed">
            {proj.challenge && (
              <div className="space-y-3">
                <h2 className="text-2xl font-heading font-bold text-[#f3f4f6]">
                  The Challenge
                </h2>
                <p className="text-base">{proj.challenge}</p>
              </div>
            )}

            {proj.solution && (
              <div className="space-y-3">
                <h2 className="text-2xl font-heading font-bold text-[#f3f4f6]">
                  The Solution & Execution
                </h2>
                <p className="text-base">{proj.solution}</p>
              </div>
            )}

            {proj.results && proj.results.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-[#f3f4f6]">
                  Verified Results
                </h2>
                <ul className="space-y-3">
                  {proj.results.map((res, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-base text-[#f3f4f6]">
                      <CheckCircle2 className="w-5 h-5 text-[#d97706] shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Cross-Link Back To Category & Services */}
            <div className="pt-6 border-t border-[#272a30] flex flex-wrap items-center justify-between gap-4">
              <Link
                href={`/projects/${cat.slug}`}
                className="text-xs font-medium text-[#d97706] hover:underline inline-flex items-center gap-1"
              >
                <span>Back to {cat.title} Category</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="text-xs font-medium text-[#9ca3af] hover:text-[#f3f4f6] inline-flex items-center gap-1"
              >
                <span>Explore Technical Services</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>

        {/* Author Bio */}
        <Container size="small">
          <AuthorBox />
        </Container>

        {/* CTA */}
        <Container>
          <CTABanner
            title={`Want a Similar Project Built for Your Business?`}
            description="Let's build a fast, search-optimized platform or digital strategy tailored to your market."
            buttonText="Start Your Project"
            href="/contact"
          />
        </Container>
      </div>
    </>
  );
}
