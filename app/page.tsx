import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Search, Code, Video, Bot, PenTool, TrendingUp, Linkedin, Github, Youtube, Instagram, Facebook, Globe } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { ServiceCard } from '@/components/ServiceCard';
import { FAQAccordion } from '@/components/FAQAccordion';
import { ProofStrip } from '@/components/ProofStrip';
import { CTABanner } from '@/components/CTABanner';
import { Testimonials } from '@/components/Testimonials';
import { pillarServices } from '@/data/servicesData';
import { socialLinks } from '@/data/socialLinks';

export const metadata: Metadata = {
  title: 'Rashid Azam | SEO Expert in Pakistan & Web Developer',
  description: 'Rashid Azam is a Technical SEO Expert and Full-Stack Web Developer based in Pakistan. Specializing in SEO services, WordPress SEO, local SEO, and web development for Pakistan businesses and international clients.',
  alternates: {
    canonical: 'https://www.rashidazam.me',
  },
  openGraph: {
    title: 'Rashid Azam | SEO Expert in Pakistan & Web Developer',
    description: 'Technical SEO specialist and full-stack web developer. SEO services for Lahore, Islamabad, Karachi, and international markets.',
    url: 'https://www.rashidazam.me',
    type: 'website',
  },
};

export default function HomePage() {
  const serviceIcons: Record<string, React.ReactNode> = {
    'seo-services': <Search className="w-6 h-6 text-[#d97706]" />,
    'digital-marketing': <TrendingUp className="w-6 h-6 text-[#d97706]" />,
    'youtube-automation': <Video className="w-6 h-6 text-[#d97706]" />,
    'web-development': <Code className="w-6 h-6 text-[#d97706]" />,
    'ai-automation': <Bot className="w-6 h-6 text-[#d97706]" />,
    'content-writing': <PenTool className="w-6 h-6 text-[#d97706]" />,
  };

  const getSocialIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case 'linkedin':
        return <Linkedin className="w-5 h-5 text-blue-600" />;
      case 'github':
        return <Github className="w-5 h-5 text-slate-800" />;
      case 'youtube':
        return <Youtube className="w-5 h-5 text-red-600" />;
      case 'instagram':
        return <Instagram className="w-5 h-5 text-pink-600" />;
      case 'facebook':
        return <Facebook className="w-5 h-5 text-blue-500" />;
      default:
        return <Globe className="w-5 h-5 text-amber-600" />;
    }
  };

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Site Audit',
      description: 'I review your existing website, crawl logs, Google Search Console data, and keyword gaps to understand exactly where your organic growth is being blocked.',
    },
    {
      number: '02',
      title: 'Strategy & Roadmap',
      description: 'I build a prioritized action plan covering technical fixes, keyword mapping, content structure, and internal link architecture — specific to your market and goals.',
    },
    {
      number: '03',
      title: 'Implementation & Engineering',
      description: 'I execute directly: fixing crawl errors, implementing JSON-LD schema, building clean Next.js or WordPress pages, and optimizing for Core Web Vitals.',
    },
    {
      number: '04',
      title: 'Monitoring & Iteration',
      description: 'After deployment, I track keyword rankings, organic traffic trends, and indexation health in Search Console, refining the strategy based on real performance data.',
    },
  ];

  const homeFaqs = [
    {
      question: 'What SEO and web development services do you offer in Pakistan?',
      answer: 'I offer technical SEO audits, local SEO and Google Maps optimization, WordPress SEO, on-page optimization, and full-stack web development across Pakistan — including Lahore, Islamabad, Karachi, Faisalabad, and Multan. I also serve international clients remotely.',
    },
    {
      question: 'Do you work with businesses outside Pakistan?',
      answer: 'Yes. I work directly with businesses, startups, and digital agencies in the USA, UK, UAE, Germany, and worldwide as a remote technical SEO consultant and web developer.',
    },
    {
      question: 'How is your SEO approach different from a standard agency?',
      answer: 'Rather than delegating to account managers, I handle every project personally — from crawl analysis and schema implementation to content optimization and Core Web Vitals fixes. That means faster execution, direct communication, and accountable results.',
    },
    {
      question: 'What does an SEO audit from you cover?',
      answer: 'A full SEO audit covers technical site health (crawlability, indexation, speed, schema), on-page optimization (titles, headings, content structure, internal links), and an actionable priority roadmap. Audits typically take 3 to 7 business days depending on site size.',
    },
    {
      question: 'How do you price your services?',
      answer: 'Pricing depends on scope. One-time audits and project builds use fixed-cost milestones. Ongoing SEO and development retainers are available for clients needing continued execution. Contact me for a transparent quote based on your specific situation.',
    },
  ];

  // Phase E Homepage JSON-LD Entity Graph
  const homeEntitySchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://www.rashidazam.me/#person',
        name: 'Rashid Azam',
        alternateName: ['Muhammad Rashid Azam', 'M Rashid Azam'],
        url: 'https://www.rashidazam.me',
        jobTitle: 'Technical SEO Expert & Web Developer',
        description: 'Technical SEO expert and full-stack web developer based in Pakistan, serving businesses in Lahore, Islamabad, Karachi, and internationally.',
        sameAs: socialLinks.map((s) => s.url),
        knowsAbout: ['Technical SEO', 'Local SEO', 'WordPress SEO', 'SEO Audits', 'E-Commerce SEO', 'Web Development', 'Next.js', 'React', 'AI SEO', 'Answer Engine Optimization'],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.rashidazam.me/#website',
        name: 'Rashid Azam',
        url: 'https://www.rashidazam.me',
        publisher: { '@id': 'https://www.rashidazam.me/#person' },
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://www.rashidazam.me/#service',
        name: 'Rashid Azam - Web Developer & Technical SEO Specialist',
        url: 'https://www.rashidazam.me',
        provider: { '@id': 'https://www.rashidazam.me/#person' },
        areaServed: ['Pakistan', 'United States', 'United Kingdom', 'Germany', 'United Arab Emirates', 'Worldwide'],
        serviceType: ['Web Development', 'Technical SEO', 'Local SEO', 'WordPress SEO', 'AI SEO'],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeEntitySchema) }}
      />

      <div className="space-y-20 pb-16 bg-white">
        {/* Hero Section */}
        <section className="relative pt-12 lg:pt-20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-[#d97706] text-xs font-semibold uppercase tracking-wider">
                  Pakistan &amp; International SEO &amp; Web Development
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-slate-900 leading-[1.1] tracking-tight">
                  SEO Expert in Pakistan &amp; Full-Stack Web Developer
                </h1>
                
                <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                  I&apos;m Rashid Azam — a Technical SEO specialist and web developer helping businesses in Lahore, Islamabad, Karachi, and internationally rank higher on Google, fix technical site issues, and build fast, conversion-focused websites.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Button href="/contact" variant="primary" size="lg" showArrow>
                    Start Your Project
                  </Button>
                  <Button href="/services" variant="secondary" size="lg">
                    Explore All Services
                  </Button>
                </div>

                {/* 4-Stat Credentials Grid */}
                <div className="pt-8 border-t border-gray-200 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs text-slate-500">
                  <div className="space-y-1">
                    <span className="font-heading font-bold text-2xl text-slate-900 block">5+ Years</span>
                    <span className="font-medium text-slate-600">SEO & Web Experience</span>
                  </div>
                  <div className="space-y-1">
                    <span className="font-heading font-bold text-2xl text-slate-900 block">50+ Projects</span>
                    <span className="font-medium text-slate-600">Sites Built & Audited</span>
                  </div>
                  <div className="space-y-1">
                    <span className="font-heading font-bold text-2xl text-slate-900 block">5 Cities</span>
                    <span className="font-medium text-slate-600">Pakistan Coverage</span>
                  </div>
                  <div className="space-y-1">
                    <span className="font-heading font-bold text-2xl text-slate-900 block">Global</span>
                    <span className="font-medium text-slate-600">Remote Clients</span>
                  </div>
                </div>
              </div>

              {/* Personal Photograph Showcase */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden border border-amber-500/20 bg-gradient-to-b from-amber-50/40 to-slate-50 p-3.5 shadow-xl shadow-slate-200/60">
                  <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-100">
                    <Image
                      src="/images/branding/rashid-azam-portrait.jpg"
                      alt="Rashid Azam - Technical SEO Consultant and Full-Stack Web Developer"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 500px"
                      className="object-cover object-center transform hover:scale-[1.02] transition-transform duration-500 ease-out"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Proof Strip */}
        <ProofStrip />

        {/* Pillar Services Showcase */}
        <section className="bg-slate-50 py-16 border-y border-gray-200">
          <Container>
            <SectionHeading
              kicker="Core Expertise"
              title="SEO & Web Development Services in Pakistan"
              description="Technical SEO, local SEO, WordPress SEO, web development, and digital marketing services for Pakistan businesses and international clients."
              className="mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pillarServices.map((service) => (
                <ServiceCard
                  key={service.slug}
                  service={service}
                  icon={serviceIcons[service.slug] || <Code className="w-6 h-6 text-[#d97706]" />}
                />
              ))}
            </div>
          </Container>
        </section>

        {/* Process Section */}
        <section>
          <Container>
            <SectionHeading
              kicker="Execution Model"
              title="How an SEO Engagement Works"
              description="A clear, step-by-step process from initial site audit through technical implementation to ranking and reporting."
              align="center"
              className="mb-14"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step) => (
                <div key={step.number} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-2xs space-y-3 relative">
                  <span className="text-3xl font-heading font-bold text-amber-500/30 block">
                    {step.number}
                  </span>
                  <h3 className="font-heading font-bold text-slate-900 text-lg">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* Home FAQs */}
        <section>
          <Container size="small">
            <SectionHeading
              kicker="Common Questions"
              title="Frequently Asked Questions"
              description="Clear answers about SEO services, web development, pricing, and how remote collaboration works."
              align="center"
              className="mb-10"
            />
            <FAQAccordion items={homeFaqs} />
          </Container>
        </section>

        {/* CTA Banner */}
        <Container>
          <CTABanner
            title="Need an SEO Expert in Pakistan or a Custom Web Developer?"
            description="Work directly with Rashid Azam on technical SEO, WordPress optimization, or a custom web application. Serving clients in Lahore, Islamabad, Karachi, and internationally."
            buttonText="Get in Touch"
            href="/contact"
          />
        </Container>
      </div>
    </>
  );
}
