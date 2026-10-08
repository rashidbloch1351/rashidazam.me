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
  title: 'Case Studies & Selected Work Worldwide | Rashid Azam Portfolio',
  description: 'Explore verified web development, technical SEO, YouTube automation, and AI application case studies delivered for clients worldwide by Rashid Azam.',
  alternates: {
    canonical: 'https://rashidazam.me/projects',
  },
};

export default function ProjectsHubPage() {
  return (
    <div className="py-12 space-y-16 bg-white">
      <Container>
        <Breadcrumbs items={[{ label: 'Projects & Case Studies' }]} />

        <div className="max-w-3xl space-y-4 pt-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#d97706] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/60">
            Verified Case Studies
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-slate-900 tracking-tight">
            Selected Work & Verified Output
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
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
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-amber-400 hover:shadow-md transition-all shadow-xs"
              >
                <div className="space-y-4">
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-100 border-b border-gray-100">
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
                          className="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md border border-gray-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-heading font-semibold text-slate-900 group-hover:text-[#d97706] transition-colors">
                      {cat.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {cat.description}
                    </p>

                    <div className="text-xs text-slate-500 font-medium">
                      {cat.projects.length} Verified Case Stud{cat.projects.length > 1 ? 'ies' : 'y'}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/projects/${cat.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d97706] hover:text-[#b45309] group-hover:translate-x-1 transition-transform"
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
