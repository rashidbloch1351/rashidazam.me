import React from 'react';
import type { Metadata } from 'next';
import { ogImages } from '@/lib/seo';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, GraduationCap, Briefcase, Youtube, Award, Code, Globe, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { CTABanner } from '@/components/CTABanner';
import { ProofStrip } from '@/components/ProofStrip';
import { Testimonials } from '@/components/Testimonials';

export const metadata: Metadata = {
  title: 'About Rashid Azam | Technical SEO Consultant & Web Developer in Pakistan',
  description: 'About Rashid Azam: technical SEO specialist & web developer in Pakistan. SEO, WordPress optimization and web development for local & global clients.',
  alternates: {
    canonical: 'https://www.rashidazam.me/about',
  },
  openGraph: {
    title: 'About Rashid Azam | Technical SEO Consultant & Web Developer',
    description: 'SEO consultant and web developer serving businesses across Pakistan and internationally. Expert in technical SEO, local SEO, and WordPress optimization.',
    url: 'https://www.rashidazam.me/about',
    type: 'profile',
    images: ogImages,
  },
};

export default function AboutPage() {
  const skillCategories = [
    {
      title: 'Languages & Core',
      skills: ['TypeScript', 'JavaScript (ES6+)', 'Python', 'HTML5 & Semantic Markup', 'CSS3 & Custom Tokens', 'SQL'],
    },
    {
      title: 'Frameworks & Frontend',
      skills: ['Next.js (App Router)', 'React 18', 'Tailwind CSS', 'Node.js', 'REST APIs & Webhooks'],
    },
    {
      title: 'CMS & E-Commerce',
      skills: ['WordPress Custom & Elementor', 'Shopify Dropshipping & Themes', 'WooCommerce', 'Headless CMS'],
    },
    {
      title: 'Technical SEO & Analytics',
      skills: ['Google Search Console', 'Ahrefs & Semrush', 'Screaming Frog Crawling', 'Google Analytics 4', 'JSON-LD Schema'],
    },
    {
      title: 'AI & Automation',
      skills: ['OpenAI & Claude APIs', 'Supabase Database', 'YouTube Automation Scripts', 'Custom AI Chatbots'],
    },
  ];

  const milestones = [
    {
      year: '2023 - Present',
      title: 'Freelance Web Developer & SEO Specialist',
      organization: 'Fiverr & Freelancer.com',
      description: 'Built 50+ client websites, executed technical SEO audits, and managed growth campaigns for startups, businesses, and agencies worldwide.',
    },
    {
      year: '2023 - Present',
      title: 'Lead Consultant & Full-Stack Developer',
      organization: 'Rashid Azam Practice',
      description: 'Delivering end-to-end web development, store setups, technical audits, and organic search engine optimization for clients globally.',
    },
    {
      year: '2024 - Present',
      title: 'Content Creator & Educator',
      organization: 'TechByRash (YouTube)',
      description: 'Publishing practical tutorials on technical web development, AI automation tools, and freelancing strategy.',
    },
    {
      year: 'Ongoing',
      title: 'BS Information Technology Degree',
      organization: 'University IT Program',
      description: 'Combining rigorous academic computer science foundations with hands-on full-stack software development.',
    },
  ];

  return (
    <div className="py-12 space-y-20 bg-white">
      <Container>
        <Breadcrumbs items={[{ label: 'About Rashid Azam' }]} />

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#b45309] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/60">
              The Story Behind the Code
            </span>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-slate-900 tracking-tight leading-tight">
              About Rashid Azam
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              I&apos;m a Technical SEO Consultant and Web Developer based in Pakistan. I help businesses rank higher on Google through dedicated <Link href="/services/technical-seo" className="text-[#b45309] font-medium hover:underline">technical SEO services</Link>, fix complex crawling issues, and build fast, modern web applications with custom <Link href="/services/web-development" className="text-[#b45309] font-medium hover:underline">web development</Link> for clients in Pakistan and worldwide.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" showArrow>
                Work With Me
              </Button>
              <Button href="/services" variant="secondary">
                Explore Services
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 relative mb-10 lg:mb-6">
            <div className="relative rounded-3xl border border-amber-500/20 bg-gradient-to-b from-amber-50/40 to-slate-50 p-3.5 shadow-xl shadow-slate-200/60">
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src="/images/branding/rashid-azam-portrait.jpg"
                  alt="Rashid Azam, web developer and technical SEO specialist"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover object-center transform hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
              </div>
              {/* Second photograph accent */}
              <div className="absolute -bottom-6 -left-3 sm:-left-5 w-32 sm:w-40 -rotate-6 bg-white p-2 pb-7 rounded-xl shadow-xl shadow-slate-900/20 border border-slate-200">
                <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden bg-slate-100">
                  <Image
                    src="/images/branding/rashid-azam-about.webp"
                    alt="Rashid Azam portrait"
                    fill
                    sizes="160px"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Proof Strip */}
      <ProofStrip />

      {/* First Person Narrative */}
      <section className="bg-slate-50 py-20 border-y border-gray-200">
        <Container size="small">
          <div className="space-y-8 text-slate-600 text-base leading-relaxed">
            <h2 className="text-3xl font-heading font-bold text-slate-900">
              Technical SEO Expertise & Web Development Background
            </h2>

            <p>
              My work started with a straightforward observation: most business websites look presentable on the surface but fail at a technical level. Slow page speeds, poor mobile rendering, crawlability issues, and no clear search strategy mean that many sites simply do not appear when customers search for exactly what the business offers.
            </p>

            <p>
              To address this, I built my practice around technical precision. Studying for my BS in Information Technology while freelancing on platforms like Fiverr and Freelancer.com as a dedicated <strong className="text-slate-900">Web Developer &amp; Technical SEO Specialist</strong>, I focused on the areas that produce measurable search improvements: crawl architecture, structured data, Core Web Vitals, on-page content structure, and full-scale <Link href="/services/seo-services" className="text-[#b45309] font-medium hover:underline">SEO services</Link>.
            </p>

            <p>
              Over five years of client work across Pakistan — Lahore, Islamabad, Karachi, Faisalabad, and Multan — and internationally in the USA, UK, and UAE, I have built and audited websites across sectors including e-commerce, professional services, healthcare, technology, and education.
            </p>

            <p>
              Alongside client work, I share practical knowledge through my YouTube channel <strong className="text-slate-900">TechByRash</strong>, covering web development tutorials, technical SEO concepts, and practical digital growth strategies.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gray-200">
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs">
                <h3 className="font-heading font-semibold text-lg text-slate-900 mb-2">
                  Approach to SEO
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  No speculative tactics. Every recommendation is grounded in crawl data, Search Console analysis, keyword intent research, and measurable technical implementation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs">
                <h3 className="font-heading font-semibold text-lg text-slate-900 mb-2">
                  How Remote Engagements Work
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  All projects are managed remotely via email, Google Meet, WhatsApp, or Slack. Pakistani clients and international clients in the USA, UK, UAE, and Germany are served with the same directness and technical rigor.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Technical Stack Grid */}
      <section>
        <Container>
          <SectionHeading
            kicker="Technical Tooling"
            title="Skills & Technologies"
            description="The languages, frameworks, CMS platforms, and search tools I use daily."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="bg-white border border-gray-200 p-6 rounded-2xl space-y-4 shadow-xs"
              >
                <h3 className="font-heading font-semibold text-lg text-slate-900 border-b border-gray-100 pb-3">
                  {category.title}
                </h3>
                <ul className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-[#b45309] shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Career Milestones */}
      <section className="bg-slate-50 py-20 border-y border-gray-200">
        <Container>
          <SectionHeading
            kicker="Experience & Growth"
            title="Career Timeline"
            description="Key milestones in freelancing, agency development, content creation, and education."
            className="mb-14"
          />

          <div className="space-y-8 max-w-3xl">
            {milestones.map((item, idx) => (
              <div key={idx} className="relative pl-8 border-l-2 border-amber-500/40 space-y-2">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#d97706] border-4 border-slate-50" />
                <span className="text-xs font-semibold text-[#b45309] uppercase tracking-wider block">
                  {item.year}
                </span>
                <h3 className="text-xl font-heading font-bold text-slate-900">
                  {item.title} <span className="text-slate-500 font-normal text-sm">| {item.organization}</span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Client Endorsements & Testimonials */}
      <Testimonials
        title="Client Endorsements & Track Record"
        kicker="Global Collaborations"
        description="Feedback from international clients and business owners who have partnered with Rashid Azam on software builds and organic growth."
      />

      {/* CTA Banner */}
      <Container>
        <CTABanner
          title="Looking for an SEO Consultant or Web Developer in Pakistan?"
          description="Whether you need a technical SEO audit, WordPress optimization, local SEO for Lahore or Islamabad, or a custom Next.js web application, I\'m ready to help directly."
          buttonText="Contact Rashid Azam"
          href="/contact"
        />
      </Container>
    </div>
  );
}
