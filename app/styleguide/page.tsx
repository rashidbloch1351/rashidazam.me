import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { ProjectCard } from '@/components/ProjectCard';
import { BlogCard } from '@/components/BlogCard';
import { FAQAccordion } from '@/components/FAQAccordion';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { RelatedLinks } from '@/components/RelatedLinks';
import { CTABanner } from '@/components/CTABanner';
import { ProofStrip } from '@/components/ProofStrip';
import { pillarServices } from '@/data/servicesData';
import { projectCategories } from '@/data/projectsData';
import { blogPosts } from '@/data/blogPosts';

export const metadata: Metadata = {
  title: 'Design System & Component Styleguide',
  robots: {
    index: false,
    follow: false,
  },
};

export default function StyleguidePage() {
  const sampleFaq = [
    { question: 'What technical SEO services do you offer?', answer: 'Crawl diagnostics, indexation fixes, Core Web Vitals optimization, schema integration, and internal link structure audits.' },
    { question: 'How do engagement models work?', answer: 'Projects can be billed as a fixed milestone scope or as an ongoing monthly technical retainer.' },
  ];

  return (
    <div className="py-16 space-y-16">
      <Container>
        <SectionHeading
          kicker="Design System"
          title="rashidazam.me Component Styleguide"
          description="A complete showcase of all shared UI primitives, typography standards, color tokens, and layout blocks."
        />
      </Container>

      {/* Buttons */}
      <Container className="space-y-6">
        <h3 className="text-xl font-heading font-semibold border-b border-[#272a30] pb-2">
          1. Buttons & Action Links
        </h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary" showArrow>Primary Amber</Button>
          <Button variant="secondary">Secondary Outlined</Button>
          <Button variant="outline">Outline Amber</Button>
          <Button variant="ghost">Ghost Text</Button>
          <Button variant="primary" size="sm" showArrow>Small Button</Button>
          <Button variant="primary" size="lg" showArrow>Large Button</Button>
        </div>
      </Container>

      {/* Quick Answer */}
      <Container className="space-y-4">
        <h3 className="text-xl font-heading font-semibold border-b border-[#272a30] pb-2">
          2. GEO / AI Search Quick Answer Box
        </h3>
        <QuickAnswer text="Generative Engine Optimization (GEO) ensures your site content provides clear, factual, direct answers that AI engines like Perplexity, ChatGPT, and Claude can summarize in response to user queries." />
      </Container>

      {/* Cards */}
      <Container className="space-y-6">
        <h3 className="text-xl font-heading font-semibold border-b border-[#272a30] pb-2">
          3. Service, Project, and Blog Cards
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard service={pillarServices[0]} />
          <ProjectCard project={projectCategories[0].projects[0]} categorySlug={projectCategories[0].slug} />
          <BlogCard post={blogPosts[0]} />
        </div>
      </Container>

      {/* Proof Strip */}
      <div>
        <Container className="mb-4">
          <h3 className="text-xl font-heading font-semibold border-b border-[#272a30] pb-2">
            4. Social Proof & Platform Credentials Strip
          </h3>
        </Container>
        <ProofStrip />
      </div>

      {/* Accordion */}
      <Container className="space-y-6">
        <h3 className="text-xl font-heading font-semibold border-b border-[#272a30] pb-2">
          5. FAQ Accordion (with JSON-LD Schema)
        </h3>
        <FAQAccordion items={sampleFaq} />
      </Container>

      {/* Author Box */}
      <Container className="space-y-6">
        <h3 className="text-xl font-heading font-semibold border-b border-[#272a30] pb-2">
          6. Author Credibility Bio Box
        </h3>
        <AuthorBox />
      </Container>

      {/* Related Links */}
      <Container className="space-y-6">
        <h3 className="text-xl font-heading font-semibold border-b border-[#272a30] pb-2">
          7. Data-Driven Related Internal Links
        </h3>
        <RelatedLinks pageId="seo-services" />
      </Container>

      {/* CTA Banner */}
      <Container>
        <h3 className="text-xl font-heading font-semibold border-b border-[#272a30] pb-4 mb-4">
          8. Conversion CTA Banner
        </h3>
        <CTABanner />
      </Container>
    </div>
  );
}
