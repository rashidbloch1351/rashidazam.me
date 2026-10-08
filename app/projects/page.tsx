import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { CTABanner } from '@/components/CTABanner';
import { ProofStrip } from '@/components/ProofStrip';
import { projectCategories } from '@/data/projectsData';

export const metadata: Metadata = {
  title: 'Case Studies & Selected Work | Rashid Azam Portfolio',
  description: 'Explore verified web development, technical SEO, YouTube automation, and AI application case studies by Rashid Azam.',
  alternates: {
    canonical: 'https://rashidazam.me/projects',
  },
};

export default function ProjectsHubPage() {
  return (
    <div className="py-12 space-y-16">
      <Container>
        <Breadcrumbs items={[{ label: 'Projects & Case Studies' }]} />

        <div className="max-w-3xl space-y-4 pt-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#d97706] bg-[#d97706]/10 px-3 py-1 rounded-full border border-[#d97706]/20">
            Verified Case Studies
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-[#f3f4f6] tracking-tight">
            Selected Work & Verified Output
          </h1>
          <p className="text-lg text-[#9ca3af] leading-relaxed">
            Real live web applications, e-commerce stores, YouTube channel automation pipelines, and digital marketing performance dashboards.
          </p>
        </div>
      </Container>

      {/* Proof Strip */}
      <ProofStrip />

      {/* Project Categories Grid */}
      <section>
        <Container>
          <SectionHeading
            kicker="Categories"
            title="Explore Case Studies by Category"
            description="Filter through web development, YouTube automation, digital marketing, and AI applications."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectCategories.map((cat) => (
              <div
                key={cat.slug}
                className="bg-[#17181c] border border-[#272a30] rounded-xl overflow-hidden flex flex-col justify-between group hover:border-[#d97706]/40 transition-all"
              >
                <div className="space-y-4">
                  <div className="relative aspect-video w-full overflow-hidden bg-[#0f1012]">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      {cat.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-medium bg-[#202228] text-[#9ca3af] px-2.5 py-0.5 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-heading font-semibold text-[#f3f4f6] group-hover:text-[#d97706] transition-colors">
                      {cat.title}
                    </h3>

                    <p className="text-xs text-[#9ca3af] leading-relaxed line-clamp-3">
                      {cat.description}
                    </p>

                    <div className="text-xs text-[#6b7280] font-medium">
                      {cat.projects.length} Verified Case Stud{cat.projects.length > 1 ? 'ies' : 'y'}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/projects/${cat.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#d97706] hover:text-[#b45309] group-hover:translate-x-1 transition-transform"
                  >
                    <span>View Category Projects</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Banner */}
      <Container>
        <CTABanner
          title="Have a Custom Project in Mind?"
          description="Let's build a fast, search-optimized web platform or scale your digital ad campaigns."
          buttonText="Discuss Your Project"
          href="/contact"
        />
      </Container>
    </div>
  );
}
