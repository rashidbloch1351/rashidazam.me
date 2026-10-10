import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ArrowUpRight, Search, Code, Video, Bot, PenTool, TrendingUp, Layers, CheckCircle2,
  Globe, MapPin, FileSearch, Cpu, ShoppingCart, Zap, MessageSquare
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ServiceCard } from '@/components/ServiceCard';
import { CTABanner } from '@/components/CTABanner';
import { ProofStrip } from '@/components/ProofStrip';
import { Testimonials } from '@/components/Testimonials';
import { pillarServices } from '@/data/servicesData';

export const metadata: Metadata = {
  title: 'SEO & Web Development Services in Pakistan | Rashid Azam',
  description: 'Technical SEO, local SEO, WordPress SEO, web development, YouTube automation, and digital marketing services by Rashid Azam. Serving businesses in Pakistan and internationally.',
  alternates: {
    canonical: 'https://rashidazam.me/services',
  },
  openGraph: {
    title: 'SEO & Web Development Services | Rashid Azam',
    description: 'Full-service SEO and web development expert serving Pakistan businesses and international clients. Technical SEO, local SEO, WordPress optimization, and custom Next.js development.',
    url: 'https://rashidazam.me/services',
    type: 'website',
  },
};

export default function ServicesPage() {
  const serviceIcons: Record<string, React.ReactNode> = {
    'web-development': <Code className="w-6 h-6 text-[#d97706]" />,
    'wordpress-seo': <Zap className="w-6 h-6 text-[#d97706]" />,
    'local-seo': <MapPin className="w-6 h-6 text-[#d97706]" />,
    'technical-seo': <Code className="w-6 h-6 text-[#d97706]" />,
    'seo-audit': <FileSearch className="w-6 h-6 text-[#d97706]" />,
    'ai-seo': <Cpu className="w-6 h-6 text-[#d97706]" />,
    'answer-engine-optimization': <MessageSquare className="w-6 h-6 text-[#d97706]" />,
    'ecommerce-seo': <ShoppingCart className="w-6 h-6 text-[#d97706]" />,
    'seo-services': <Search className="w-6 h-6 text-[#d97706]" />,
    'digital-marketing': <TrendingUp className="w-6 h-6 text-[#d97706]" />,
    'youtube-automation': <Video className="w-6 h-6 text-[#d97706]" />,
    'ai-automation': <Bot className="w-6 h-6 text-[#d97706]" />,
    'content-writing': <PenTool className="w-6 h-6 text-[#d97706]" />,
    'wordpress-development': <Globe className="w-6 h-6 text-[#d97706]" />,
  };

  return (
    <div className="py-12 space-y-20 bg-white">
      <Container>
        <Breadcrumbs items={[{ label: 'Services' }]} />

        {/* Hero Section */}
        <div className="max-w-3xl space-y-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#d97706] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/60">
            Complete Digital Growth System
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-slate-900 tracking-tight">
            SEO &amp; Web Development Services
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Comprehensive SEO services and web development for businesses in Pakistan and worldwide. From technical SEO audits and local SEO to custom web applications, YouTube automation, and AI workflows — every service is delivered personally and built to produce measurable results.
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
                Technical Foundation First
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Custom Next.js web development or streamlined WordPress optimization ensures your site loads in under 1.8 seconds, is fully crawlable, and converts mobile visitors efficiently.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-2xl space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#d97706] border border-amber-200 flex items-center justify-center font-bold text-lg font-heading">
                02
              </div>
              <h3 className="font-heading font-semibold text-lg text-slate-900">
                Search Authority & Intent Targeting
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Technical SEO audits, on-page optimization, and structured data implementation rank your pages for high-intent keywords in Pakistan and internationally, converting search traffic into qualified enquiries.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-2xl space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#d97706] border border-amber-200 flex items-center justify-center font-bold text-lg font-heading">
                03
              </div>
              <h3 className="font-heading font-semibold text-lg text-slate-900">
                Automated & Paid Channel Scaling
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                YouTube automation pipelines, Meta/Google Ads campaigns, and custom AI chatbot integrations compound and accelerate organic growth beyond search alone.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Proof Strip */}
      <ProofStrip />

      {/* Reusable Testimonials Component */}
      <Testimonials
        title="Client Reviews & Service Feedback"
        kicker="Verified Google Reviews"
        description="Client endorsements covering Web Development, Technical SEO, WordPress, Shopify, and AI Automation engagements."
      />

      {/* CTA Banner */}
      <Container>
        <CTABanner
          title="Need a Technical SEO Audit or Custom Web Development?"
          description="Let Rashid Azam review your site, identify high-impact fixes, and build a clear roadmap for SEO growth or web development in Pakistan or internationally."
          buttonText="Get in Touch"
          href="/contact"
        />
      </Container>
    </div>
  );
}
