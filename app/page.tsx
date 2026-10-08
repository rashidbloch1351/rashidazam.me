import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Search, Code, Video, Bot, PenTool, TrendingUp, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { ServiceCard } from '@/components/ServiceCard';
import { ProjectCard } from '@/components/ProjectCard';
import { BlogCard } from '@/components/BlogCard';
import { FAQAccordion } from '@/components/FAQAccordion';
import { ProofStrip } from '@/components/ProofStrip';
import { CTABanner } from '@/components/CTABanner';
import { pillarServices } from '@/data/servicesData';
import { projectCategories } from '@/data/projectsData';
import { blogPosts } from '@/data/blogPosts';

export const metadata: Metadata = {
  title: 'Rashid Azam | Web Developer & Technical SEO Expert Pakistan',
  description: 'Full-stack web developer and technical SEO specialist based in Pakistan, serving PK & UAE markets. Custom Next.js apps, WordPress sites, YouTube automation, and AI workflows.',
  alternates: {
    canonical: 'https://rashidazam.me',
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

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Audit',
      description: 'I start by inspecting your current site infrastructure, search performance, crawl issues, and conversion roadblocks.',
    },
    {
      number: '02',
      title: 'Custom Strategy',
      description: 'I map targeted intent-based keywords, architectural fixes, and content pipelines tailored for your specific market in PK or UAE.',
    },
    {
      number: '03',
      title: 'Execution & Development',
      description: 'I build clean Next.js/WordPress templates, optimize on-page schema, craft copy, or deploy custom AI workflows.',
    },
    {
      number: '04',
      title: 'Launch & Measurement',
      description: 'We publish, verify indexability in Search Console, track real conversions, and refine performance based on live data.',
    },
  ];

  const homeFaqs = [
    {
      question: 'What core services do you specialize in?',
      answer: 'I specialize in full-stack web development (Next.js, WordPress, Shopify), technical SEO audits and on-page optimization, YouTube faceless channel growth pipelines, digital marketing (Google/Meta Ads), and custom AI chatbots.',
    },
    {
      question: 'Do you work with clients in Pakistan and the UAE?',
      answer: 'Yes, I work directly with business owners, founders, and agency partners across Pakistan (Lahore, Karachi, Islamabad) and the UAE (Dubai, Abu Dhabi) as a freelancer and through Arham Digital Agency.',
    },
    {
      question: 'How do you price web development and SEO projects?',
      answer: 'Projects are quoted either as fixed-scope milestones for custom builds and audits or as transparent monthly retainers for ongoing technical SEO and marketing campaigns.',
    },
    {
      question: 'Why choose custom Next.js over standard website builders?',
      answer: 'Next.js delivers static site generation (SSG) with instant page loads, 100% crawlable raw HTML for search engines, zero heavy plugin bloat, and maximum security.',
    },
  ];

  const featuredProjects = [
    projectCategories[0].projects[0], // Bloom & Mist
    projectCategories[2].projects[0], // UACGS
    projectCategories[1].projects[0], // Esha Malik YT
    projectCategories[3].projects[0], // WiseRank
  ];

  return (
    <div className="space-y-20 pb-16">
      {/* Hero Section */}
      <section className="relative pt-12 lg:pt-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d97706]/10 border border-[#d97706]/30 text-[#d97706] text-xs font-semibold uppercase tracking-wider">
                Available for Freelance & Contract Engagements
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[#f3f4f6] leading-[1.1] tracking-tight">
                Web Developer & Technical SEO Expert
              </h1>
              
              <p className="text-lg text-[#9ca3af] max-w-2xl leading-relaxed">
                Hi, I&apos;m Rashid Azam. I build high-performance web applications, execute data-backed technical SEO audits, scale YouTube automation channels, and build AI workflows for businesses in Pakistan and the UAE.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button href="/contact" variant="primary" size="lg" showArrow>
                  Start Your Project
                </Button>
                <Button href="/projects" variant="secondary" size="lg">
                  Explore Selected Work
                </Button>
              </div>

              {/* Quick Metrics Strip */}
              <div className="pt-8 border-t border-[#272a30] grid grid-cols-3 gap-4 text-xs text-[#9ca3af]">
                <div>
                  <span className="font-heading font-bold text-2xl text-[#f3f4f6] block">3+ Years</span>
                  <span>Digital Experience</span>
                </div>
                <div>
                  <span className="font-heading font-bold text-2xl text-[#f3f4f6] block">BS IT</span>
                  <span>Computer Science</span>
                </div>
                <div>
                  <span className="font-heading font-bold text-2xl text-[#f3f4f6] block">PK & UAE</span>
                  <span>Core Markets</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden border border-[#272a30] bg-[#17181c] p-3 shadow-2xl">
                <Image
                  src="/images/branding/profile-new.png"
                  alt="Rashid Azam - Web Developer & Technical SEO Expert"
                  width={500}
                  height={600}
                  priority
                  className="rounded-xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Proof Strip */}
      <ProofStrip />

      {/* Services Grid Section */}
      <section>
        <Container>
          <SectionHeading
            kicker="Core Competencies"
            title="Technical Services & Solutions"
            description="Built on real code, search engine mechanics, video pipelines, and measurable conversion goals."
            align="center"
            className="mb-14"
          />

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

      {/* 4-Step Process Section */}
      <section className="bg-[#17181c] py-20 border-y border-[#272a30]">
        <Container>
          <SectionHeading
            kicker="Execution Model"
            title="How I Work With Clients"
            description="A structured 4-step workflow that delivers predictable technical quality and search growth."
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="bg-[#0f1012] border border-[#272a30] p-6 rounded-xl space-y-3 relative group hover:border-[#d97706]/40 transition-colors"
              >
                <span className="font-heading font-bold text-3xl text-[#d97706]/40 group-hover:text-[#d97706] transition-colors block">
                  {step.number}
                </span>
                <h3 className="font-heading font-semibold text-lg text-[#f3f4f6]">
                  {step.title}
                </h3>
                <p className="text-xs text-[#9ca3af] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Projects Showcase */}
      <section>
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
            <SectionHeading
              kicker="Verified Output"
              title="Selected Case Studies"
              description="Real live web applications, YouTube channels, and technical search projects."
            />
            <Button href="/projects" variant="outline" size="sm" showArrow>
              View All Projects
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, idx) => (
              <ProjectCard
                key={idx}
                project={project}
                categorySlug={projectCategories[idx % projectCategories.length].slug}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Blog Posts Section */}
      <section className="bg-[#17181c] py-20 border-y border-[#272a30]">
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
            <SectionHeading
              kicker="Technical Insights"
              title="Latest Articles & Guides"
              description="Practical tutorials on SEO strategy, web development, and YouTube growth."
            />
            <Button href="/blog" variant="outline" size="sm" showArrow>
              Explore All Articles
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section>
        <Container size="small">
          <SectionHeading
            kicker="Transparent Answers"
            title="Frequently Asked Questions"
            description="Common questions about working with Rashid Azam on web development and SEO."
            align="center"
            className="mb-12"
          />

          <FAQAccordion items={homeFaqs} />
        </Container>
      </section>

      {/* CTA Banner */}
      <Container>
        <CTABanner
          title="Ready to Build or Rank Your Platform?"
          description="Schedule a technical consultation to discuss custom Next.js web development, technical SEO audits, or digital marketing."
          buttonText="Get in Touch"
          href="/contact"
        />
      </Container>
    </div>
  );
}
