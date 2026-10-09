import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Globe, MapPin, Search, Code, CheckCircle2, ArrowUpRight, Zap, Bot, Building2, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { FAQAccordion } from '@/components/FAQAccordion';
import { CTABanner } from '@/components/CTABanner';
import { ProofStrip } from '@/components/ProofStrip';

export const metadata: Metadata = {
  title: 'SEO & Web Development Services Worldwide | Locations Directory',
  description: 'Full-stack web development, technical SEO audits, and digital growth services worldwide. Dedicated location hubs across Pakistan (Lahore, Islamabad, Karachi, Faisalabad, Multan), USA, UK, Germany, UAE, and global remote.',
  alternates: {
    canonical: 'https://rashidazam.me/locations',
  },
  openGraph: {
    title: 'SEO & Web Development Services Worldwide | Locations Directory',
    description: 'Explore dedicated location hubs for SEO services, WordPress optimization, and web development across Pakistan and international markets.',
    url: 'https://rashidazam.me/locations',
    type: 'website',
  },
};

export default function LocationsPage() {
  const allLocationCards = [
    {
      name: 'Worldwide Remote',
      tagline: 'Global Engagements',
      href: '/locations/worldwide',
      description: 'Delivering Next.js web applications, technical SEO audits, and AI growth workflows for founders, startups, and agencies across international time zones.',
      badge: 'Global Remote',
      icon: <Globe className="w-5 h-5 text-[#d97706]" />,
    },
    {
      name: 'Pakistan Market',
      tagline: 'National Reach',
      href: '/locations',
      description: 'Helping Pakistani enterprises, software houses, retail brands, and e-commerce stores build high-performance web platforms and capture national search market share.',
      badge: 'National Hub',
      icon: <Building2 className="w-5 h-5 text-[#d97706]" />,
    },
    {
      name: 'Lahore',
      tagline: 'Commercial Core',
      href: '/locations/lahore',
      description: 'Targeted local map pack rankings, WordPress speed optimization, and technical search strategy for businesses in Gulberg, Johar Town, DHA, and Arfa Software Park.',
      badge: 'Pakistan City',
      icon: <MapPin className="w-5 h-5 text-[#d97706]" />,
    },
    {
      name: 'Islamabad',
      tagline: 'Capital Territory',
      href: '/locations/islamabad',
      description: 'Data-backed technical SEO audits, corporate Next.js site development, and search engine optimization for tech firms and consultancies in Blue Area and NIC.',
      badge: 'Pakistan City',
      icon: <Search className="w-5 h-5 text-[#d97706]" />,
    },
    {
      name: 'Karachi',
      tagline: 'Financial Capital',
      href: '/locations/karachi',
      description: 'High-velocity technical SEO, e-commerce catalog optimization, and local map pack rankings across Clifton, DHA, PECHS, Saddar, and II Chundrigar Road.',
      badge: 'Pakistan City',
      icon: <Building2 className="w-5 h-5 text-[#d97706]" />,
    },
    {
      name: 'Faisalabad',
      tagline: 'Industrial Powerhouse',
      href: '/locations/faisalabad',
      description: 'B2B export search optimization, website development, and local SEO for industrial manufacturers, textile exporters, and retailers in D Ground & Clock Tower.',
      badge: 'Pakistan City',
      icon: <Zap className="w-5 h-5 text-[#d97706]" />,
    },
    {
      name: 'Multan',
      tagline: 'Regional Commercial Hub',
      href: '/locations/multan',
      description: 'Local Google Maps ranking, WordPress SEO, and modern web application builds for regional service providers, clinics, and businesses across Gulgasht & Bosan Road.',
      badge: 'Pakistan City',
      icon: <MapPin className="w-5 h-5 text-[#d97706]" />,
    },
    {
      name: 'USA',
      tagline: 'North America',
      href: '/locations/usa',
      description: 'Technical SEO audits, Core Web Vitals optimization, Next.js frontend engineering, and AI SEO workflows for US-based startups, SaaS brands, and digital agencies.',
      badge: 'International',
      icon: <Globe className="w-5 h-5 text-[#d97706]" />,
    },
    {
      name: 'UK',
      tagline: 'United Kingdom',
      href: '/locations/uk',
      description: 'Technical SEO diagnostics, local search positioning, WordPress speed tuning, and web engineering for UK SMEs and agencies in London, Manchester, and Birmingham.',
      badge: 'International',
      icon: <Globe className="w-5 h-5 text-[#d97706]" />,
    },
    {
      name: 'Germany',
      tagline: 'European Union',
      href: '/locations/germany',
      description: 'International SEO, technical architecture audits, multi-region hreflang setups, and Next.js web application development for German tech firms and exporters.',
      badge: 'International',
      icon: <Globe className="w-5 h-5 text-[#d97706]" />,
    },
    {
      name: 'UAE & Gulf',
      tagline: 'Dubai & GCC Region',
      href: '/locations/uae',
      description: 'Google Business Maps rankings, bilingual local search architecture, e-commerce SEO, and high-converting web apps for Dubai, Abu Dhabi, and GCC brands.',
      badge: 'International',
      icon: <Zap className="w-5 h-5 text-[#d97706]" />,
    },
  ];

  const pakistanCityLinks = [
    { name: 'Lahore', href: '/locations/lahore', focus: 'Commercial core, Gulberg, DHA & tech agencies' },
    { name: 'Islamabad', href: '/locations/islamabad', focus: 'Capital territory, Blue Area & SaaS startups' },
    { name: 'Karachi', href: '/locations/karachi', focus: 'Financial capital, Clifton, Saddar & E-Commerce' },
    { name: 'Faisalabad', href: '/locations/faisalabad', focus: 'Industrial hub, textile exports & B2B growth' },
    { name: 'Multan', href: '/locations/multan', focus: 'Regional commercial center & local search maps' },
  ];

  const pakistaniServices = [
    { title: 'Technical SEO', desc: 'Eliminate crawl errors, resolve indexation bugs, and achieve top Core Web Vitals performance.' },
    { title: 'Local SEO', desc: 'Dominate Google Business Map Pack rankings and localized search results across target cities.' },
    { title: 'WordPress SEO', desc: 'Strip out plugin bloat, optimize database queries, and speed up WordPress sites.' },
    { title: 'Website Development', desc: 'Engineer ultra-fast, modern Next.js and React web applications built with TypeScript.' },
    { title: 'E-Commerce SEO', desc: 'Optimize product taxonomy, category pages, and rich schema markup for online stores.' },
    { title: 'AI SEO & Workflows', desc: 'Prepare your web content for AI search engine overviews and automated digital pipelines.' },
  ];

  const locationFaqs = [
    {
      question: 'Do all location pages represent actual implemented services?',
      answer: 'Yes. Each location page (Lahore, Islamabad, Karachi, Faisalabad, Multan, USA, UK, Germany, UAE, and Worldwide) is a fully implemented, independent page with tailored content, specific keyword targets, and distinct FAQs.',
    },
    {
      question: 'Can you work with international clients outside Pakistan?',
      answer: 'Yes, the majority of client engagements are remote contracts for clients, startups, and digital agencies across the USA, UK, UAE, Europe, and Australia.',
    },
    {
      question: 'Do you provide dedicated SEO services across Pakistani cities?',
      answer: 'Yes, I provide targeted local SEO, Google Business Profile map pack ranking, technical search auditing, and custom web development across Lahore, Islamabad, Karachi, Faisalabad, and Multan.',
    },
    {
      question: 'How do you collaborate remotely with international teams?',
      answer: 'Engagements are managed via structured video calls (Google Meet/Zoom), email, Slack, and Loom video walkthroughs, with GitHub repositories for clean code delivery.',
    },
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rashidazam.me' },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://rashidazam.me/locations' },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="py-10 space-y-20 bg-white">
        {/* Hero Section */}
        <Container>
          <Breadcrumbs items={[{ label: 'Locations Directory' }]} />

          <div className="max-w-4xl space-y-6 pt-4">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#d97706] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/60">
              Global & National Locations Directory
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-slate-900 tracking-tight leading-tight">
              SEO & Web Development Services Worldwide
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal max-w-3xl">
              Rashid Azam helps businesses improve organic search visibility, build high-speed Next.js websites, improve technical SEO performance, optimize WordPress websites, and integrate AI-powered search workflows across local, national, and international markets.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="/contact" variant="primary" size="lg" showArrow>
                Get Started
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Explore Services
              </Button>
            </div>
          </div>
        </Container>

        {/* Proof Strip */}
        <ProofStrip />

        {/* Location Cards Directory (All 11 Locations) */}
        <section className="bg-slate-50 py-16 border-y border-slate-200">
          <Container>
            <SectionHeading
              kicker="Complete Footprint"
              title="Explore Our Location Hubs"
              description="Select a location to discover city-specific and market-tailored SEO and web development services."
              className="mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allLocationCards.map((card) => (
                <div
                  key={card.name}
                  className="bg-white border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between space-y-5 shadow-2xs hover:shadow-md hover:border-amber-400/80 transition-all group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200/60 shrink-0">
                        {card.icon}
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#d97706] bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60">
                        {card.badge}
                      </span>
                    </div>

                    <div>
                      <span className="text-xs font-medium text-slate-500 block">{card.tagline}</span>
                      <h3 className="text-xl font-heading font-bold text-slate-900 group-hover:text-[#d97706] transition-colors">
                        {card.name}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <Link
                      href={card.href}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d97706] group-hover:underline"
                    >
                      <span>Explore {card.name} Hub</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Pakistan Section with Five City Links */}
        <section>
          <Container>
            <div className="bg-gradient-to-br from-amber-50/60 via-white to-slate-50 border border-amber-200/80 rounded-3xl p-8 sm:p-12 space-y-8">
              <div className="max-w-3xl space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#d97706] bg-amber-100/80 px-3.5 py-1.5 rounded-full border border-amber-200">
                  Pakistan Services
                </span>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-900">
                  SEO & Web Development Services Across Pakistan
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  We empower Pakistani enterprises, startups, e-commerce stores, and service firms to capture organic search rankings, optimize page speed, and engineer custom Next.js applications.
                </p>
              </div>

              {/* Service Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {pakistaniServices.map((s, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
                    <h4 className="font-heading font-bold text-slate-900 text-sm mb-1">{s.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>

              {/* Five Dedicated City Pages Cards */}
              <div className="pt-6 border-t border-amber-200/60 space-y-4">
                <h3 className="font-heading font-bold text-slate-900 text-lg">
                  Dedicated Pakistani City Hubs:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {pakistanCityLinks.map((city) => (
                    <Link
                      key={city.name}
                      href={city.href}
                      className="bg-white p-4 rounded-xl border border-amber-200/80 hover:border-amber-500 hover:shadow-xs transition-all group flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-heading font-bold text-slate-900 text-sm group-hover:text-[#d97706] transition-colors">
                            {city.name}
                          </span>
                          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#d97706] transition-colors" />
                        </div>
                        <p className="text-[11px] text-slate-500 leading-normal">
                          {city.focus}
                        </p>
                      </div>
                      <span className="text-[11px] font-semibold text-[#d97706] mt-3 block">
                        View {city.name} SEO →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* International Section */}
        <section className="bg-slate-900 text-white py-16">
          <Container>
            <div className="max-w-3xl space-y-4 mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30">
                International Remote Markets
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
                Remote SEO & Web Engineering for Global Clients
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Seamless remote collaboration delivering senior-level technical SEO, Next.js web application builds, and performance optimization for businesses across international target markets.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/locations/usa" className="bg-slate-800/90 border border-slate-700 hover:border-amber-400 p-6 rounded-2xl transition-all group">
                <div className="text-xs text-amber-400 font-semibold uppercase tracking-wider mb-2">USA Hub</div>
                <h3 className="text-xl font-heading font-bold text-white group-hover:text-amber-400 transition-colors">United States</h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">Technical SEO, Core Web Vitals, and Next.js engineering for US startups & agencies.</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 mt-4">
                  <span>Explore USA Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>

              <Link href="/locations/uk" className="bg-slate-800/90 border border-slate-700 hover:border-amber-400 p-6 rounded-2xl transition-all group">
                <div className="text-xs text-amber-400 font-semibold uppercase tracking-wider mb-2">UK Hub</div>
                <h3 className="text-xl font-heading font-bold text-white group-hover:text-amber-400 transition-colors">United Kingdom</h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">Technical SEO audits, local UK rankings, and web development for UK businesses.</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 mt-4">
                  <span>Explore UK Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>

              <Link href="/locations/germany" className="bg-slate-800/90 border border-slate-700 hover:border-amber-400 p-6 rounded-2xl transition-all group">
                <div className="text-xs text-amber-400 font-semibold uppercase tracking-wider mb-2">Germany Hub</div>
                <h3 className="text-xl font-heading font-bold text-white group-hover:text-amber-400 transition-colors">Germany</h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">International SEO, multi-region hreflang setups, and fast web apps for DACH markets.</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 mt-4">
                  <span>Explore Germany Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>

              <Link href="/locations/uae" className="bg-slate-800/90 border border-slate-700 hover:border-amber-400 p-6 rounded-2xl transition-all group">
                <div className="text-xs text-amber-400 font-semibold uppercase tracking-wider mb-2">UAE Hub</div>
                <h3 className="text-xl font-heading font-bold text-white group-hover:text-amber-400 transition-colors">UAE & Dubai</h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">Google Business Maps, local landing pages, and e-commerce SEO for Dubai & GCC.</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 mt-4">
                  <span>Explore UAE Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </div>
          </Container>
        </section>

        {/* FAQs */}
        <section>
          <Container size="small">
            <SectionHeading
              kicker="Clear Guidance"
              title="Location & Remote Collaboration FAQs"
              description="Common questions about remote engagements, local SEO targeting, and international delivery."
              align="center"
              className="mb-10"
            />
            <FAQAccordion items={locationFaqs} />
          </Container>
        </section>

        {/* Final CTA Banner */}
        <Container>
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              Ready to Grow Your Online Presence?
            </h2>
            <p className="text-slate-300 text-base max-w-2xl mx-auto">
              Work with Rashid Azam on a professional digital growth project tailored for your target market.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Button href="/contact" variant="primary" size="lg" showArrow>
                Discuss Your Project
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Explore Services
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
