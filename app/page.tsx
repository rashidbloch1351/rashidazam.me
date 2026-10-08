import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Search, Code, Video, Bot, PenTool, TrendingUp, Linkedin, Github, Youtube, Instagram, Facebook, Globe } from 'lucide-react';
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
import { socialLinks } from '@/data/socialLinks';

export const metadata: Metadata = {
  title: 'Rashid Azam | Web Developer & Technical SEO Expert Worldwide',
  description: 'Full-stack web developer and technical SEO specialist serving clients, startups, and agencies worldwide. Custom Next.js apps, WordPress sites, YouTube automation, and AI workflows.',
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
      title: 'Discovery & Technical Audit',
      description: 'I inspect your current website infrastructure, crawl errors, search performance, and conversion bottlenecks.',
    },
    {
      number: '02',
      title: 'Custom Technical Strategy',
      description: 'I map targeted intent-based keyword clusters, architectural fixes, and content pipelines tailored for your audience.',
    },
    {
      number: '03',
      title: 'Execution & Engineering',
      description: 'I build clean Next.js/WordPress templates, optimize on-page schema, craft SEO copy, or deploy custom AI workflows.',
    },
    {
      number: '04',
      title: 'Launch & Performance Tracking',
      description: 'We deploy static builds, verify search indexability in Google Search Console, track live conversions, and optimize.',
    },
  ];

  const homeFaqs = [
    {
      question: 'What core services do you specialize in?',
      answer: 'I specialize in full-stack web development (Next.js, React, WordPress, Shopify), technical SEO audits and on-page optimization, YouTube faceless channel growth pipelines, digital marketing (Google & Meta Ads), and custom AI chatbots.',
    },
    {
      question: 'Do you work with international clients worldwide?',
      answer: 'Yes, I work directly with business owners, founders, startups, and agency partners worldwide (USA, UK, UAE, Pakistan, Europe, Australia) as a contract developer and through Arham Digital Agency.',
    },
    {
      question: 'How do you price web development and SEO engagements?',
      answer: 'Projects are quoted either as fixed-scope milestones for custom builds and audits or as transparent monthly retainers for ongoing technical SEO and growth campaigns.',
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
    <div className="space-y-20 pb-16 bg-white">
      {/* Hero Section */}
      <section className="relative pt-12 lg:pt-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-[#d97706] text-xs font-semibold uppercase tracking-wider">
                Available for Global Freelance & Contract Engagements
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-slate-900 leading-[1.1] tracking-tight">
                Web Developer & Technical SEO Expert
              </h1>
              
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                Hi, I&apos;m Rashid Azam. I build high-performance web applications, execute data-backed technical SEO audits, scale YouTube automation channels, and build AI workflows for businesses, startups, and agencies worldwide.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button href="/contact" variant="primary" size="lg" showArrow>
                  Start Your Project
                </Button>
                <Button href="/projects" variant="secondary" size="lg">
                  Explore Selected Work
                </Button>
              </div>

              {/* 4-Stat Credentials Grid */}
              <div className="pt-8 border-t border-gray-200 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs text-slate-500">
                <div className="space-y-1">
                  <span className="font-heading font-bold text-2xl text-slate-900 block">5+ Years</span>
                  <span className="font-medium text-slate-600">Digital Experience</span>
                </div>
                <div className="space-y-1">
                  <span className="font-heading font-bold text-2xl text-slate-900 block">50+ Projects</span>
                  <span className="font-medium text-slate-600">Delivered</span>
                </div>
                <div className="space-y-1">
                  <span className="font-heading font-bold text-2xl text-slate-900 block">BS IT</span>
                  <span className="font-medium text-slate-600">Computer Science</span>
                </div>
                <div className="space-y-1">
                  <span className="font-heading font-bold text-2xl text-[#d97706] block">Worldwide</span>
                  <span className="font-medium text-slate-600">Client Reach</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden border border-gray-200 bg-slate-50 p-3 shadow-xl">
                <Image
                  src="/images/branding/profile-new.png"
                  alt="Rashid Azam - Web Developer & Technical SEO Expert"
                  width={500}
                  height={600}
                  priority
                  className="rounded-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Proof Strip */}
      <ProofStrip />

      {/* Social Profiles Grid Section */}
      <section className="py-8 border-b border-gray-100">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-50 border border-gray-200 p-6 rounded-2xl">
            <div>
              <h3 className="font-heading font-bold text-base text-slate-900">
                Connect Across Official Profiles
              </h3>
              <p className="text-xs text-slate-500">
                Direct portfolio channels, code repositories, and freelance platforms.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={`${s.label} (${s.handle})`}
                  className="w-11 h-11 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-xs hover:border-amber-500 hover:bg-amber-50 hover:scale-105 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  {getSocialIcon(s.label)}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Services Grid Section */}
      <section>
        <Container>
          <SectionHeading
            kicker="Core Competencies"
            title="Technical Services & Solutions"
            description="Built on clean code, search engine mechanics, video pipelines, and measurable conversion goals."
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
      <section className="bg-slate-50 py-20 border-y border-gray-200">
        <Container>
          <SectionHeading
            kicker="Execution Model"
            title="How I Work With Clients"
            description="A structured 4-step workflow that delivers predictable technical quality and organic search growth."
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="bg-white border border-gray-200 p-6 rounded-2xl space-y-3 relative group hover:border-amber-400 shadow-xs transition-colors"
              >
                <span className="font-heading font-bold text-3xl text-amber-500/40 group-hover:text-[#d97706] transition-colors block">
                  {step.number}
                </span>
                <h3 className="font-heading font-semibold text-lg text-slate-900">
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
      <section className="bg-slate-50 py-20 border-y border-gray-200">
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
