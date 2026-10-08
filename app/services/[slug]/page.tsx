import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2, ArrowUpRight, ShieldCheck, Wrench } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { QuickAnswer } from '@/components/QuickAnswer';
import { FAQAccordion } from '@/components/FAQAccordion';
import { RelatedLinks } from '@/components/RelatedLinks';
import { CTABanner } from '@/components/CTABanner';
import { AuthorBox } from '@/components/AuthorBox';
import { ProjectCard } from '@/components/ProjectCard';
import { pillarServices, PillarService } from '@/data/servicesData';
import { projectCategories } from '@/data/projectsData';

export async function generateStaticParams() {
  return pillarServices.map((service) => ({
    slug: service.slug,
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
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://rashidazam.me/services/${service.slug}`,
      type: 'website',
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = pillarServices.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    provider: {
      '@type': 'Person',
      name: 'Rashid Azam',
      url: 'https://rashidazam.me',
    },
    serviceType: service.name,
    description: service.metaDescription,
    areaServed: ['Pakistan', 'United Arab Emirates'],
  };

  // Find related project items
  const matchedProjects = projectCategories
    .filter((cat) => service.projectCategories.includes(cat.slug))
    .flatMap((cat) => cat.projects.map((p) => ({ ...p, categorySlug: cat.slug })))
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="py-12 space-y-16">
        {/* Hero Header */}
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services' },
              { label: service.name },
            ]}
          />

          <div className="max-w-4xl space-y-6 pt-4">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#d97706] bg-[#d97706]/10 px-3 py-1 rounded-full border border-[#d97706]/20">
              Pillar Service
            </span>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-[#f3f4f6] tracking-tight leading-tight">
              {service.h1}
            </h1>
            <p className="text-xl text-[#d97706] font-heading font-medium">
              {service.tagline}
            </p>
            <p className="text-base sm:text-lg text-[#9ca3af] leading-relaxed">
              {service.intro}
            </p>

            {/* GEO Quick Answer Box */}
            <QuickAnswer
              title={`Quick Answer: ${service.name} Overview`}
              text={`${service.name} by Rashid Azam delivers technical audit, strategic execution, on-page optimization, and measurable growth metrics tailored for businesses in Pakistan and the UAE.`}
            />
          </div>
        </Container>

        {/* Capabilities Breakdown */}
        <section className="bg-[#17181c] py-16 border-y border-[#272a30]">
          <Container>
            <SectionHeading
              kicker="Deliverables & Scope"
              title={`What Is Included in ${service.name}`}
              description="Specific capabilities and outputs delivered during each engagement."
              className="mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="bg-[#0f1012] border border-[#272a30] p-6 rounded-xl space-y-3"
                >
                  <div className="flex items-center gap-2 text-[#d97706]">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <h3 className="font-heading font-semibold text-lg text-[#f3f4f6]">
                      {cap.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#9ca3af] leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Core Strategy Sections */}
        <Container size="small">
          <div className="space-y-12 text-[#9ca3af] leading-relaxed">
            {service.sections.map((sec, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#f3f4f6]">
                  {sec.heading}
                </h2>
                {sec.body.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-base text-[#9ca3af]">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </Container>

        {/* Pricing Approach Section */}
        <section className="bg-[#17181c] py-16 border-y border-[#272a30]">
          <Container size="small">
            <div className="space-y-6">
              <SectionHeading
                kicker="Transparent Models"
                title="Engagement & Pricing Approach"
                description="Flexible engagement models designed for transparency and real business return."
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="bg-[#0f1012] border border-[#272a30] p-6 rounded-xl space-y-3">
                  <h3 className="font-heading font-semibold text-lg text-[#f3f4f6]">
                    Fixed Milestone Scope
                  </h3>
                  <p className="text-xs text-[#9ca3af] leading-relaxed">
                    Best for custom Next.js web builds, single-time technical SEO audits, or initial channel automation setups. Clear timelines and fixed deliverables.
                  </p>
                </div>
                <div className="bg-[#0f1012] border border-[#272a30] p-6 rounded-xl space-y-3">
                  <h3 className="font-heading font-semibold text-lg text-[#f3f4f6]">
                    Monthly Performance Retainer
                  </h3>
                  <p className="text-xs text-[#9ca3af] leading-relaxed">
                    Best for ongoing SEO optimization, weekly YouTube video production pipelines, and multi-channel Meta/Google ad management.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Related Projects */}
        {matchedProjects.length > 0 && (
          <Container>
            <SectionHeading
              kicker="Proven Output"
              title={`Related ${service.name} Projects`}
              description="Explore real case studies built using these exact technical standards."
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
            title={`Start Your ${service.name} Engagement`}
            description="Let's audit your current setup and build a high-ROI strategy tailored for your target audience in Pakistan or UAE."
            buttonText={`Get Started with ${service.name}`}
            href="/contact"
          />
        </Container>
      </div>
    </>
  );
}
