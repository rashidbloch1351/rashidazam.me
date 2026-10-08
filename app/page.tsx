import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, CheckCircle2, Search, Code, Video, Bot, PenTool, TrendingUp } from 'lucide-react';
import { pillarServices } from '@/data/servicesData';
import { projectCategories } from '@/data/projectsData';

export default function HomePage() {
  const serviceIcons: Record<string, React.ReactNode> = {
    'seo-services': <Search className="w-6 h-6 text-[#d97706]" />,
    'digital-marketing': <TrendingUp className="w-6 h-6 text-[#d97706]" />,
    'youtube-automation': <Video className="w-6 h-6 text-[#d97706]" />,
    'web-development': <Code className="w-6 h-6 text-[#d97706]" />,
    'ai-automation': <Bot className="w-6 h-6 text-[#d97706]" />,
    'content-writing': <PenTool className="w-6 h-6 text-[#d97706]" />,
  };

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative pt-12 lg:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#d97706]/10 border border-[#d97706]/30 text-[#d97706] text-xs font-medium uppercase tracking-wider">
                Available for PK & UAE Freelance & Contract Projects
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[#f3f4f6] leading-[1.1] tracking-tight">
                Web Developer & Technical SEO Expert
              </h1>
              <p className="text-lg text-[#9ca3af] max-w-2xl leading-relaxed">
                Hi, I&apos;m Rashid Azam. I build fast Next.js web applications, execute data-backed technical SEO audits, scale YouTube automation channels, and streamline business operations with AI workflows.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#d97706] hover:bg-[#b45309] text-white font-medium px-6 py-3.5 rounded-lg transition-all shadow-md"
                >
                  <span>Start Your Project</span>
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 bg-[#17181c] hover:bg-[#202228] text-[#f3f4f6] border border-[#272a30] font-medium px-6 py-3.5 rounded-lg transition-all"
                >
                  Explore Selected Work
                </Link>
              </div>

              {/* Quick Trust Badges */}
              <div className="pt-8 border-t border-[#272a30] grid grid-cols-3 gap-4 text-xs text-[#9ca3af]">
                <div>
                  <span className="font-heading font-bold text-xl text-[#f3f4f6] block">3+ Years</span>
                  <span>Digital Services</span>
                </div>
                <div>
                  <span className="font-heading font-bold text-xl text-[#f3f4f6] block">BS IT</span>
                  <span>Computer Science</span>
                </div>
                <div>
                  <span className="font-heading font-bold text-xl text-[#f3f4f6] block">PK & UAE</span>
                  <span>Markets Served</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden border border-[#272a30] bg-[#17181c] p-3 shadow-2xl">
                <Image
                  src="/images/branding/profile-new.png"
                  alt="Rashid Azam - Web Developer and SEO Expert"
                  width={500}
                  height={600}
                  priority
                  className="rounded-xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#f3f4f6]">
            Technical Services & Solutions
          </h2>
          <p className="text-[#9ca3af] text-base">
            Data-backed web development, search engine optimization, video growth pipelines, and custom automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillarServices.map((service) => (
            <div
              key={service.slug}
              className="bg-[#17181c] border border-[#272a30] hover:border-[#d97706]/40 p-8 rounded-xl transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-[#0f1012] border border-[#272a30] flex items-center justify-center">
                  {serviceIcons[service.slug]}
                </div>
                <h3 className="text-xl font-heading font-semibold text-[#f3f4f6]">
                  {service.name}
                </h3>
                <p className="text-sm text-[#9ca3af] leading-relaxed">
                  {service.intro}
                </p>
              </div>
              <div className="pt-6">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#d97706] hover:text-[#b45309] group-hover:translate-x-1 transition-all"
                >
                  <span>Explore {service.name}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="bg-[#17181c] py-20 border-y border-[#272a30]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-heading font-bold text-[#f3f4f6]">
                Featured Case Studies
              </h2>
              <p className="text-[#9ca3af] text-sm mt-1">
                Verified live projects, e-commerce applications, and YouTube growth pipelines.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#d97706] hover:underline"
            >
              <span>View All Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectCategories.slice(0, 3).map((cat) => (
              <div
                key={cat.slug}
                className="bg-[#0f1012] border border-[#272a30] rounded-xl overflow-hidden flex flex-col justify-between"
              >
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    {cat.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] bg-[#202228] text-[#9ca3af] px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-[#f3f4f6]">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#9ca3af] leading-relaxed">
                    {cat.description}
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    href={`/projects/${cat.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#d97706]"
                  >
                    <span>View Category Projects</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
