import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, GraduationCap, Briefcase, Youtube, Award, Code, Globe, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { CTABanner } from '@/components/CTABanner';
import { ProofStrip } from '@/components/ProofStrip';

export const metadata: Metadata = {
  title: 'About Rashid Azam | Web Developer & SEO Consultant Worldwide',
  description: 'Learn about Rashid Azam — BS IT background, full-stack web developer, technical SEO consultant, founder of Arham Digital Agency, and creator of TechByRash serving clients worldwide.',
  alternates: {
    canonical: 'https://rashidazam.me/about',
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
      title: 'Founder & Technical Director',
      organization: 'Arham Digital Agency',
      description: 'Launched a digital agency brand offering complete web development, store setups, and search engine optimization services globally.',
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
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#d97706] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/60">
              The Story Behind the Code
            </span>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-slate-900 tracking-tight leading-tight">
              About Rashid Azam
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              I&apos;m a Web Developer, Technical SEO Specialist, and Digital Marketer. I combine computer science fundamentals with real-world client execution to build fast web applications and drive sustainable organic search growth for clients worldwide.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" showArrow>
                Work With Me
              </Button>
              <Button href="/projects" variant="secondary">
                View Case Studies
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-gray-200 bg-slate-50 p-3 shadow-xl">
              <Image
                src="/images/branding/rashid-azam-hero-portrait.webp"
                alt="Rashid Azam - Web Developer and SEO Consultant"
                width={500}
                height={600}
                priority
                className="rounded-2xl w-full h-auto object-cover"
              />
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
              Building Web Apps and Search Authority
            </h2>

            <p>
              My journey started with a deep interest in computer systems and web architecture. While studying for my BS in Information Technology, I realized that many business websites look visually decent on the surface but are fundamentally broken underneath — slow loading speeds, poor mobile rendering, broken crawlability, and zero clear strategy for converting visitors into clients.
            </p>

            <p>
              To solve this, I started freelancing on platforms like Fiverr and Freelancer.com under the brand <strong className="text-slate-900">Arham Digital Agency</strong>. Over the past 5+ years, I have worked directly with business owners, startups, and agency partners worldwide to build fast web applications, optimize Google search rankings, and automate business processes.
            </p>

            <p>
              Alongside client work, I share technical knowledge through my YouTube brand <strong className="text-slate-900">TechByRash</strong>, where I teach web development, AI automation tools, and practical freelancing workflows.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gray-200">
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs">
                <h3 className="font-heading font-semibold text-lg text-slate-900 mb-2">
                  My Core Philosophy
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  No corporate jargon, no fluff. I believe in empirical log data, clean code standards, explicit search intent mapping, and measurable conversion goals.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs">
                <h3 className="font-heading font-semibold text-lg text-slate-900 mb-2">
                  Global Reach & Context
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Proven experience delivering projects across international markets, handling global SEO dynamics, multi-currency setups, and remote collaboration.
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
                      <CheckCircle2 className="w-4 h-4 text-[#d97706] shrink-0" />
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
                <span className="text-xs font-semibold text-[#d97706] uppercase tracking-wider block">
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

      {/* CTA Banner */}
      <Container>
        <CTABanner
          title="Let's Discuss Your Web Development or SEO Goals"
          description="Whether you need a custom Next.js web application, a technical SEO audit, or a complete digital growth plan, I'm ready to help."
          buttonText="Contact Rashid Azam"
          href="/contact"
        />
      </Container>
    </div>
  );
}
