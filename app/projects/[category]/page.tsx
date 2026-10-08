import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { CTABanner } from '@/components/CTABanner';
import { projectCategories } from '@/data/projectsData';

export async function generateStaticParams() {
  return projectCategories.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {
  const cat = projectCategories.find((c) => c.slug === params.category);
  if (!cat) return {};

  return {
    title: `${cat.title} Case Studies | Rashid Azam Portfolio`,
    description: cat.description,
    alternates: {
      canonical: `https://rashidazam.me/projects/${cat.slug}`,
    },
  };
}

export default function ProjectCategoryPage({ params }: { params: { category: string } }) {
  const category = projectCategories.find((c) => c.slug === params.category);

  if (!category) {
    notFound();
  }

  return (
    <div className="py-12 space-y-16">
      <Container>
        <Breadcrumbs
          items={[
            { label: 'Projects', href: '/projects' },
            { label: category.title },
          ]}
        />

        <div className="max-w-3xl space-y-4 pt-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#d97706] bg-[#d97706]/10 px-3 py-1 rounded-full border border-[#d97706]/20">
            Case Study Category
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-[#f3f4f6] tracking-tight">
            {category.title} Projects
          </h1>
          <p className="text-lg text-[#9ca3af] leading-relaxed">
            {category.description}
          </p>
        </div>
      </Container>

      {/* Projects List */}
      <section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {category.projects.map((project) => (
              <div
                key={project.projectSlug}
                className="bg-[#17181c] border border-[#272a30] rounded-xl overflow-hidden flex flex-col justify-between group hover:border-[#d97706]/40 transition-all"
              >
                <div className="space-y-4">
                  <div className="relative aspect-video w-full overflow-hidden bg-[#0f1012]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-medium bg-[#202228] text-[#9ca3af] px-2.5 py-0.5 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-heading font-semibold text-[#f3f4f6]">
                      {project.title}
                    </h3>

                    <p className="text-xs text-[#9ca3af] leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between gap-4 border-t border-[#272a30]/50 mt-4">
                  <Link
                    href={`/projects/${category.slug}/${project.projectSlug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#d97706] hover:text-[#b45309]"
                  >
                    <span>Read Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-[#9ca3af] hover:text-[#f3f4f6]"
                    >
                      <span>Visit Live Site</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <Container>
        <CTABanner
          title={`Need a Project Built Like These ${category.title} Case Studies?`}
          description="Let's build a tailored technical roadmap for your business."
          buttonText="Start Your Project"
          href="/contact"
        />
      </Container>
    </div>
  );
}
