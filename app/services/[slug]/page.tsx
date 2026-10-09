import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedLinks } from '@/components/RelatedLinks';
import { FAQAccordion } from '@/components/FAQAccordion';
import { AuthorBox } from '@/components/AuthorBox';
import { CTABanner } from '@/components/CTABanner';
import { ProjectCard } from '@/components/ProjectCard';
import { pillarServices } from '@/data/servicesData';
import { projectCategories } from '@/data/projectsData';

export async function generateStaticParams() {
  return pillarServices.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = pillarServices.find((s) => s.slug === params.slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://rashidazam.me/services/${service.slug}`,
    },
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = pillarServices.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const matchedProjects = projectCategories.flatMap((c) =>
    c.projects.map((p) => ({ ...p, categorySlug: c.slug }))
  ).slice(0, 3);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    provider: {
      '@type': 'Person',
      name: 'Rashid Azam',
      url: 'https://rashidazam.me',
    },
    description: service.metaDescription,
    areaServed: ['Pakistan', 'United Arab Emirates', 'Worldwide'],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="py-12 space-y-16 bg-white">
        {/* Breadcrumb & Hero */}
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services' },
              { label: service.name },
            ]}
          />

          <div className="max-w-3xl space-y-6 pt-4">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#d97706] bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Pillar Service
            </span>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-slate-900 tracking-tight">
              {service.h1 || service.name}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed font-normal">
              {service.tagline}
            </p>
            {service.intro && (
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {service.intro}
              </p>
            )}
          </div>
        </Container>

        {/* Capabilities Grid */}
        {service.capabilities && service.capabilities.length > 0 && (
          <section>
            <Container>
              <SectionHeading
                kicker="Core Capabilities"
                title={`What We Deliver in ${service.name}`}
                description="Engineered to deliver high search visibility, clean code standards, and quantifiable business return."
                className="mb-10"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.capabilities.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 border border-slate-200/90 p-6 rounded-2xl space-y-3 hover:border-amber-400/80 transition-all shadow-2xs"
                  >
                    <div className="flex items-center gap-2 text-[#d97706]">
                      <CheckCircle2 className="w-5 h-5 shrink-0" />
                      <h3 className="font-heading font-semibold text-slate-900 text-base">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* Sections */}
        {service.sections && service.sections.length > 0 && (
          <section className="bg-slate-50 py-16 border-y border-gray-200">
            <Container size="small">
              <div className="space-y-10">
                {service.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-4">
                    <h2 className="text-2xl font-heading font-bold text-slate-900">
                      {sec.heading}
                    </h2>
                    {sec.body.map((para, pIdx) => (
                      <p key={pIdx} className="text-sm text-slate-600 leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* Related Projects */}
        {matchedProjects.length > 0 && (
          <Container>
            <SectionHeading
              kicker="Proven Output"
              title={`Related ${service.name} Case Studies`}
              description="Explore real work built using these exact technical standards."
              className="mb-10"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {matchedProjects.map((project, idx) => (
                <ProjectCard
                  key={idx}
                  project={project}
                  categorySlug={project.categorySlug}
                />
              ))}
            </div>
          </Container>
        )}

        {/* Internal Linking Engine */}
        <Container>
          <RelatedLinks pageId={service.slug} />
        </Container>

        {/* FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <Container size="small">
            <SectionHeading
              kicker="FAQ"
              title={`Frequently Asked Questions About ${service.name}`}
              className="mb-8"
            />
            <FAQAccordion items={service.faqs} />
          </Container>
        )}

        {/* Author Bio */}
        <Container size="small">
          <AuthorBox />
        </Container>

        {/* CTA Banner */}
        <Container>
          <CTABanner
            title={`Ready to Scale with ${service.name}?`}
            description="Discuss your technical requirements directly with Rashid Azam."
            buttonText="Schedule a Consultation"
            href="/contact"
          />
        </Container>
      </div>
    </>
  );
}
