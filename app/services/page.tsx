import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Search, Code, Video, Bot, PenTool, TrendingUp, Layers, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ServiceCard } from '@/components/ServiceCard';
import { CTABanner } from '@/components/CTABanner';
import { ProofStrip } from '@/components/ProofStrip';
import { pillarServices } from '@/data/servicesData';

export const metadata: Metadata = {
  title: 'Digital Services & Growth Solutions | Rashid Azam',
  description: 'Explore full-stack web development, technical SEO, YouTube automation, digital marketing, AI automation, and SEO content writing by Rashid Azam.',
  alternates: {
    canonical: 'https://rashidazam.me/services',
  },
};

export default function ServicesPage() {
  const serviceIcons: Record<string, React.ReactNode> = {
    'seo-services': <Search className="w-6 h-6 text-[#d97706]" />,
    'digital-marketing': <TrendingUp className="w-6 h-6 text-[#d97706]" />,
    'youtube-automation': <Video className="w-6 h-6 text-[#d97706]" />,
    'web-development': <Code className="w-6 h-6 text-[#d97706]" />,
    'ai-automation': <Bot className="w-6 h-6 text-[#d97706]" />,
    'content-writing': <PenTool className="w-6 h-6 text-[#d97706]" />,
  };

  return (
    <div className="py-12 space-y-20">
      <Container>
        <Breadcrumbs items={[{ label: 'Services' }]} />

        {/* Hero Section */}
        <div className="max-w-3xl space-y-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#d97706] bg-[#d97706]/10 px-3 py-1 rounded-full border border-[#d97706]/20">
            Connected Growth System
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-[#f3f4f6] tracking-tight">
            Digital Services & Technical Execution
          </h1>
          <p className="text-lg text-[#9ca3af] leading-relaxed">
            Six pillar capabilities designed to work as an integrated growth engine. From code architecture and search authority to video production pipelines and paid advertising.
          </p>
        </div>
      </Container>

      {/* Services Grid */}
      <section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillarServices.map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
                icon={serviceIcons[service.slug]}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* How Services Connect Section */}
      <section className="bg-[#17181c] py-20 border-y border-[#272a30]">
        <Container>
          <SectionHeading
            kicker="System Architecture"
            title="How These Services Connect Together"
            description="Standalone tactics rarely work long-term. Here is how code, search, content, and paid ads compound your business growth."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0f1012] border border-[#272a30] p-6 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded bg-[#d97706]/10 text-[#d97706] flex items-center justify-center font-bold text-lg font-heading">
                01
              </div>
              <h3 className="font-heading font-semibold text-lg text-[#f3f4f6]">
                Code & Technical Foundation
              </h3>
              <p className="text-xs text-[#9ca3af] leading-relaxed">
                Custom Next.js web development or streamlined WordPress themes ensure lightning speed, mobile UX, and 100% crawlability for search engines.
              </p>
            </div>

            <div className="bg-[#0f1012] border border-[#272a30] p-6 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded bg-[#d97706]/10 text-[#d97706] flex items-center justify-center font-bold text-lg font-heading">
                02
              </div>
              <h3 className="font-heading font-semibold text-lg text-[#f3f4f6]">
                Search Authority & Intent Copy
              </h3>
              <p className="text-xs text-[#9ca3af] leading-relaxed">
                Technical SEO audits and conversion-focused content writing rank your pages for high-intent search terms that produce qualified business leads.
              </p>
            </div>

            <div className="bg-[#0f1012] border border-[#272a30] p-6 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded bg-[#d97706]/10 text-[#d97706] flex items-center justify-center font-bold text-lg font-heading">
                03
              </div>
              <h3 className="font-heading font-semibold text-lg text-[#f3f4f6]">
                Multi-Channel Scaling
              </h3>
              <p className="text-xs text-[#9ca3af] leading-relaxed">
                Paid Meta/Google Search campaigns drive immediate volume while YouTube automation pipelines and AI chatbots scale customer acquisition.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Proof Strip */}
      <ProofStrip />

      {/* CTA Banner */}
      <Container>
        <CTABanner
          title="Not Sure Which Service You Need First?"
          description="Let's analyze your site performance and business goals to prioritize the highest-ROI roadmap for your budget."
          buttonText="Schedule a Consultation"
          href="/contact"
        />
      </Container>
    </div>
  );
}
