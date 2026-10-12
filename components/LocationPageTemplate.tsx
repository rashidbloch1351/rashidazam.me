import React from 'react';
import Link from 'next/link';
import { LocationInfo } from '@/data/locationsData';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { FAQAccordion } from '@/components/FAQAccordion';
import { CTABanner } from '@/components/CTABanner';
import { ProofStrip } from '@/components/ProofStrip';
import { 
  Globe, MapPin, Search, Code, CheckCircle2, ArrowUpRight, 
  Zap, Bot, Building2, ShieldCheck, Cpu, ArrowRight, Layers, Sparkles, TrendingUp
} from 'lucide-react';

interface LocationPageTemplateProps {
  location: LocationInfo;
}

export function LocationPageTemplate({ location }: LocationPageTemplateProps) {
  // Structured Data (JSON-LD)
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.rashidazam.me',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Locations',
        item: 'https://www.rashidazam.me/locations',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: location.name,
        item: location.canonical,
      },
    ],
  };



  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: location.h1,
    description: location.metaDescription,
    provider: {
      '@type': 'Person',
      name: 'Rashid Azam',
      jobTitle: 'Full-Stack Web Developer & Technical SEO Specialist',
      url: 'https://www.rashidazam.me',
    },
    areaServed: location.name,
    serviceType: ['SEO Services', 'Technical SEO', 'Web Development', 'WordPress SEO', 'E-Commerce SEO'],
    url: location.canonical,
  };

  return (
    <>
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="py-10 space-y-20 bg-white">
        {/* Hero Section */}
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Locations', href: '/locations' },
              { label: location.name },
            ]}
          />

          <div className="max-w-4xl space-y-6 pt-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#b45309] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/60">
                <MapPin className="w-3.5 h-3.5" />
                <span>{location.tagline}</span>
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-slate-900 tracking-tight leading-tight">
              {location.h1}
            </h1>

            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl">
              {location.introParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button href="/contact" variant="primary" size="lg" showArrow>
                Discuss Your {location.name} Project
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Explore Services
              </Button>
              <Button href="/locations" variant="outline" size="lg">
                All Locations
              </Button>
            </div>
          </div>
        </Container>

        {/* Proof Strip */}
        <ProofStrip />

        {/* Services Grid */}
        <section className="bg-slate-50 py-16 border-y border-slate-200/80">
          <Container>
            <SectionHeading
              kicker="Specialized Capabilities"
              title={`SEO & Web Development Services for ${location.name}`}
              description={`Custom search optimization, technical auditing, and full-stack web builds engineered for businesses targeting ${location.name}.`}
              className="mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {location.services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-7 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md hover:border-amber-400/80 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-[#b45309]">
                      {index === 0 && <Search className="w-5 h-5" />}
                      {index === 1 && <Code className="w-5 h-5" />}
                      {index === 2 && <Zap className="w-5 h-5" />}
                      {index === 3 && <Bot className="w-5 h-5" />}
                    </div>

                    <h3 className="text-xl font-heading font-bold text-slate-900">
                      {service.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <ul className="mt-6 pt-4 border-t border-slate-100 space-y-2.5">
                    {service.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-center gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#b45309] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Phase F Contextual Internal Link Strip */}
        <section className="bg-amber-50/50 py-8 border-b border-amber-200/60">
          <Container>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <span className="font-semibold text-slate-800">
                Related Core Services for {location.name}:
              </span>
              <div className="flex flex-wrap gap-3">
                <Link href="/services/local-seo" className="font-medium text-[#b45309] hover:underline bg-white px-3 py-1.5 rounded-md border border-amber-200">
                  Local SEO Services →
                </Link>
                <Link href="/services/wordpress-seo" className="font-medium text-[#b45309] hover:underline bg-white px-3 py-1.5 rounded-md border border-amber-200">
                  WordPress SEO Services →
                </Link>
                <Link href="/services/technical-seo" className="font-medium text-[#b45309] hover:underline bg-white px-3 py-1.5 rounded-md border border-amber-200">
                  Technical SEO Audits →
                </Link>
                <Link href="/services/web-development" className="font-medium text-[#b45309] hover:underline bg-white px-3 py-1.5 rounded-md border border-amber-200">
                  Web Development →
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* Local Market Challenges & Opportunities */}
        <section>
          <Container>
            <SectionHeading
              kicker="Market Context"
              title={`Search Challenges & Growth Opportunities in ${location.name}`}
              description={`Addressing technical bottlenecks and organic competition specific to ${location.name} businesses.`}
              className="mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {location.localChallenges.map((item, index) => (
                <div key={index} className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-3">
                  <div className="text-xs font-semibold text-[#b45309] uppercase tracking-wider">
                    Challenge 0{index + 1}
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 text-lg">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Technical SEO & Performance Highlights */}
        <section className="bg-slate-900 text-white py-16">
          <Container>
            <div className="max-w-3xl space-y-4 mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30">
                Engineering Standards
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
                Technical SEO & Website Performance for {location.name}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Clean code, zero bloat, and fast response times are fundamental to high organic search rankings and superior user experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {location.techPerformance.map((tech, index) => (
                <div key={index} className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-7 space-y-3">
                  <div className="flex items-center gap-3 text-amber-400">
                    <ShieldCheck className="w-5 h-5 shrink-0" />
                    <h3 className="font-heading font-bold text-lg text-white">{tech.title}</h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{tech.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Process Section */}
        <section>
          <Container>
            <SectionHeading
              kicker="Methodology"
              title="Service Delivery Process"
              description="A clear, structured 4-step execution framework ensuring project transparency and measurable organic growth."
              align="center"
              className="mb-14"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {location.deliveryProcess.map((proc, index) => (
                <div key={index} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 relative flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="text-3xl font-heading font-bold text-amber-500/40 block">
                      {proc.step}
                    </span>
                    <h3 className="font-heading font-bold text-slate-900 text-base">
                      {proc.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {proc.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Why Work With Us */}
        <section className="bg-slate-50 py-16 border-y border-slate-200">
          <Container size="small">
            <div className="space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-semibold text-[#b45309] uppercase tracking-wider">
                  Direct Expert Advantage
                </span>
                <h2 className="text-3xl font-heading font-bold text-slate-900">
                  Why Work With Rashid Azam for {location.name}?
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {location.whyWorkWithUs.map((why, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-amber-50 text-[#b45309] shrink-0 mt-0.5">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-slate-900 text-base mb-1">
                        {why.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {why.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* FAQs */}
        <section>
          <Container size="small">
            <SectionHeading
              kicker="Questions & Answers"
              title={`Frequently Asked Questions — ${location.name}`}
              description={`Clear answers about SEO services, technical audits, and web development for ${location.name} businesses.`}
              align="center"
              className="mb-10"
            />
            <FAQAccordion items={location.faqs} />
          </Container>
        </section>

        {/* Internal Link Hub / Related Locations */}
        <section className="bg-slate-50 py-12 border-t border-slate-200">
          <Container>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-heading font-bold text-slate-900 text-lg">
                  Explore Other Location Hubs
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Discover dedicated SEO and web development services across Pakistan and international markets.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Link href="/locations" className="text-xs font-semibold text-[#b45309] bg-amber-50 hover:bg-amber-100 px-3.5 py-2 rounded-lg border border-amber-200/60 transition-colors">
                  All Locations Directory →
                </Link>
                <Link href="/locations/worldwide" className="text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 px-3.5 py-2 rounded-lg border border-slate-200 transition-colors">
                  Worldwide Remote →
                </Link>
                <Link href="/locations/lahore" className="text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 px-3.5 py-2 rounded-lg border border-slate-200 transition-colors">
                  Lahore →
                </Link>
                <Link href="/locations/islamabad" className="text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 px-3.5 py-2 rounded-lg border border-slate-200 transition-colors">
                  Islamabad →
                </Link>
                <Link href="/locations/usa" className="text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 px-3.5 py-2 rounded-lg border border-slate-200 transition-colors">
                  USA →
                </Link>
                <Link href="/locations/uae" className="text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 px-3.5 py-2 rounded-lg border border-slate-200 transition-colors">
                  UAE →
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <Container>
          <CTABanner
            title={`Ready to Grow Your Presence in ${location.name}?`}
            description={`Work with Rashid Azam on a high-performing technical SEO and web development project tailored for ${location.name}.`}
            buttonText={`Start Your ${location.name} Project`}
            href="/contact"
          />
        </Container>
      </div>
    </>
  );
}
