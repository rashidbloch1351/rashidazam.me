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
  title: 'About Rashid Azam | Web Developer & SEO Consultant',
  description: 'Learn about Rashid Azam — BS IT student, web developer, technical SEO consultant, founder of Arham Digital Agency, and creator of TechByRash.',
  alternates: {
    canonical: 'https://rashidazam.me/about',
  },
};

export default function AboutPage() {
  const skillCategories = [
    {
      title: 'Languages & Core',
      skills: ['TypeScript', 'JavaScript (ES6+)', 'Python', 'HTML5 & Semantic Markup', 'CSS3 & HSL Tokens', 'SQL'],
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
      description: 'Built 50+ client websites, executed technical SEO audits, and managed paid advertising campaigns for businesses in Pakistan and UAE.',
    },
    {
      year: '2023 - Present',
      title: 'Founder & Technical Director',
      organization: 'Arham Digital Agency',
      description: 'Launched a digital agency brand offering complete web development, store setups, and search engine optimization services.',
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
    <div className="py-12 space-y-20">
      <Container>
        <Breadcrumbs items={[{ label: 'About Rashid Azam' }]} />

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#d97706] bg-[#d97706]/10 px-3 py-1 rounded-full border border-[#d97706]/20">
              The Story Behind the Code
            </span>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-[#f3f4f6] tracking-tight leading-tight">
              About Rashid Azam
            </h1>
            <p className="text-lg text-[#9ca3af] leading-relaxed">
              I&apos;m a Web Developer, Technical SEO Specialist, and Digital Marketer based in Pakistan. I combine computer science fundamentals with real-world client execution to build fast web applications and drive sustainable organic growth.
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
            <div className="relative rounded-2xl overflow-hidden border border-[#272a30] bg-[#17181c] p-3 shadow-2xl">
              <Image
                src="/images/branding/rashid-azam-hero-portrait.webp"
                alt="Rashid Azam - Web Developer and SEO Consultant"
                width={500}
                height={600}
                priority
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </Container>

      {/* Proof Strip */}
      <ProofStrip />

      {/* First Person Narrative */}
      <section className="bg-[#17181c] py-20 border-y border-[#272a30]">
        <Container size="small">
          <div className="space-y-8 text-[#9ca3af] text-base leading-relaxed">
            <h2 className="text-3xl font-heading font-bold text-[#f3f4f6]">
              Building Web Apps and Search Authority
            </h2>

            <p>
              My journey started with a deep interest in computer systems and web architecture. While studying for my BS in Information Technology, I realized that many business websites look visually decent on the surface but are fundamentally broken underneath — slow loading speeds, poor mobile rendering, broken crawlability, and zero clear strategy for converting visitors into clients.
            </p>

            <p>
              To solve this, I started freelancing on platforms like Fiverr and Freelancer.com under the brand <strong className="text-[#f3f4f6]">Arham Digital Agency</strong>. Over the past 3+ years, I have worked directly with business owners across Pakistan (Lahore, Karachi, Islamabad) and the UAE (Dubai, Abu Dhabi) to build fast web applications, optimize Google search rankings, and automate business processes.
            </p>

            <p>
              Alongside client work, I share technical knowledge through my YouTube brand <strong className="text-[#f3f4f6]">TechByRash</strong>, where I teach web development, AI automation tools, and practical freelancing workflows.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#272a30]">
              <div className="bg-[#0f1012] p-5 rounded-xl border border-[#272a30]">
                <h3 className="font-heading font-semibold text-lg text-[#f3f4f6] mb-2">
                  My Core Philosophy
                </h3>
                <p className="text-xs text-[#9ca3af]">
                  No corporate jargon, no fluff. I believe in empirical log data, clean code standards, explicit search intent mapping, and measurable conversion goals.
                </p>
              </div>

              <div className="bg-[#0f1012] p-5 rounded-xl border border-[#272a30]">
                <h3 className="font-heading font-semibold text-lg text-[#f3f4f6] mb-2">
                  Regional Focus
                </h3>
                <p className="text-xs text-[#9ca3af]">
                  Deep understanding of regional consumer behavior, localized SEO dynamics, and payment/currency setups across Pakistan and the UAE.
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
                className="bg-[#17181c] border border-[#272a30] p-6 rounded-xl space-y-4"
              >
                <h3 className="font-heading font-semibold text-lg text-[#f3f4f6] border-b border-[#272a30] pb-3">
                  {category.title}
                </h3>
                <ul className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-xs text-[#9ca3af]">
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
      <section className="bg-[#17181c] py-20 border-y border-[#272a30]">
        <Container>
          <SectionHeading
            kicker="Experience & Growth"
            title="Career Timeline"
            description="Key milestones in freelancing, agency development, content creation, and education."
            className="mb-14"
          />

          <div className="space-y-8 max-w-3xl">
            {milestones.map((item, idx) => (
              <div key={idx} className="relative pl-8 border-l-2 border-[#d97706]/40 space-y-2">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#d97706] border-4 border-[#17181c]" />
                <span className="text-xs font-semibold text-[#d97706] uppercase tracking-wider block">
                  {item.year}
                </span>
                <h3 className="text-xl font-heading font-bold text-[#f3f4f6]">
                  {item.title} <span className="text-[#9ca3af] font-normal text-sm">| {item.organization}</span>
                </h3>
                <p className="text-sm text-[#9ca3af] leading-relaxed">
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
