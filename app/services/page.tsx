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
  title: 'Digital Services & Growth Solutions Worldwide | Rashid Azam',
  description: 'Explore full-stack web development, technical SEO, YouTube automation, digital marketing, AI automation, and SEO content writing by Rashid Azam for clients worldwide.',
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
    <div className="py-12 space-y-20 bg-white">
      <Container>
        <Breadcrumbs items={[{ label: 'Services' }]} />

        {/* Hero Section */}
        <div className="max-w-3xl space-y-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#d97706] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/60">
            Connected Growth System
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-slate-900 tracking-tight">
            Digital Services & Technical Execution
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Six pillar capabilities designed to work as an integrated growth engine for clients worldwide. From code architecture and search authority to video production pipelines and performance advertising.
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
      <section className="bg-slate-50 py-20 border-y border-gray-200">
        <Container>
          <SectionHeading
            kicker="System Architecture"
            title="How These Services Connect Together"
            description="Standalone tactics rarely work long-term. Here is how code, search, content, and paid ads compound your business growth."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 p-6 rounded-2xl space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#d97706] border border-amber-200 flex items-center justify-center font-bold text-lg font-heading">
                01
              </div>
              <h3 className="font-heading font-semibold text-lg text-slate-900">
                Code & Technical Foundation
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Custom Next.js web development or streamlined WordPress themes ensure lightning speed, mobile UX, and 100% crawlability for search engines.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-2xl space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#d97706] border border-amber-200 flex items-center justify-center font-bold text-lg font-heading">
                02
              </div>
              <h3 className="font-heading font-semibold text-lg text-slate-900">
                Search Authority & Intent Copy
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Technical SEO audits and conversion-focused content writing rank your pages for high-intent search terms that produce qualified business leads.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-2xl space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#d97706] border border-amber-200 flex items-center justify-center font-bold text-lg font-heading">
                03
              </div>
              <h3 className="font-heading font-semibold text-lg text-slate-900">
                Multi-Channel Scaling
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
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
