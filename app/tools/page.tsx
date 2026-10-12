import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, Wrench, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CTABanner } from '@/components/CTABanner';
import { toolsData } from '@/data/toolsData';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Free Web & Developer Tools Hub',
  description: 'Explore live web tools, cryptocurrency currency converters, QR code generators, and aggregate calculators built by Rashid Azam.',
  alternates: {
    canonical: 'https://www.rashidazam.me/tools',
  },
  openGraph: {
    url: 'https://www.rashidazam.me/tools',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rashid Azam - Web Developer & Technical SEO Expert',
      },
    ],
  },
};

export default function ToolsHubPage() {
  return (
    <div className="py-12 space-y-16">
      <Container>
        <Breadcrumbs items={[{ label: 'Free Tools Hub' }]} />

        <div className="max-w-3xl space-y-4 pt-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#d97706] bg-[#d97706]/10 px-3 py-1 rounded-full border border-[#d97706]/20">
            Free Online Utilities
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-[#f3f4f6] tracking-tight">
            Free Web Applications & Calculators
          </h1>
          <p className="text-lg text-[#9ca3af] leading-relaxed">
            Live web tools and financial utility converters created and hosted by Rashid Azam for instant, registration-free use.
          </p>
        </div>
      </Container>


      {/* About the Tools */}
      <section>
        <Container>
          <SectionHeading
            kicker="Why These Exist"
            title="Practical Utilities, Built to Be Used"
            description="Each tool below solves a real, recurring problem — currency conversion for freelancers paid in crypto, QR codes for print and packaging, merit calculations for university admissions in Pakistan."
            className="mb-10"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
            <div className="bg-[#17181c] border border-[#272a30] p-8 rounded-xl space-y-3">
              <h3 className="text-xl font-heading font-semibold text-[#f3f4f6]">Finance & Crypto</h3>
              <p className="text-sm text-[#9ca3af] leading-relaxed">
                The USDT to PKR converter pulls live market rates so freelancers and traders can check real conversion values instantly — no manual math, no stale rates from yesterday&apos;s screenshot.
              </p>
            </div>
            <div className="bg-[#17181c] border border-[#272a30] p-8 rounded-xl space-y-3">
              <h3 className="text-xl font-heading font-semibold text-[#f3f4f6]">Developer Utilities</h3>
              <p className="text-sm text-[#9ca3af] leading-relaxed">
                The QR code generator creates high-resolution codes for URLs, contact cards, and Wi-Fi networks with custom styling — useful for menus, packaging, business cards, and event signage.
              </p>
            </div>
            <div className="bg-[#17181c] border border-[#272a30] p-8 rounded-xl space-y-3">
              <h3 className="text-xl font-heading font-semibold text-[#f3f4f6]">Education</h3>
              <p className="text-sm text-[#9ca3af] leading-relaxed">
                The university aggregate calculator applies Pakistan&apos;s merit formulas to matric, FSc, and entry test scores — built for students navigating admission season who need quick, accurate merit estimates.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Tools Grid */}
      <section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {toolsData.map((tool) => (
              <div
                key={tool.id}
                className="bg-[#17181c] border border-[#272a30] hover:border-[#d97706]/40 p-8 rounded-xl space-y-4 flex flex-col justify-between group transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#d97706]">
                    <span className="font-semibold uppercase tracking-wider">{tool.category}</span>
                    <Wrench className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-[#f3f4f6] group-hover:text-[#d97706] transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-[#9ca3af] leading-relaxed">
                    {tool.description}
                  </p>
                  <div className="flex items-center gap-1.5 flex-wrap pt-2">
                    {tool.tags.map((tag) => (
                      <span key={tag} className="text-[10px] bg-[#0f1012] border border-[#272a30] text-[#9ca3af] px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#272a30]/50">
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#d97706] hover:text-[#b45309]"
                  >
                    <span>Launch Live Tool</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>


      {/* Tools FAQs */}
      <section>
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            <SectionHeading
              kicker="Common Questions"
              title="About These Tools"
              className="mb-8"
            />
            <FAQAccordion
              items={[
                {
                  question: "Are these tools really free?",
                  answer: "Yes — every tool on this page is free to use with no registration required. They open as standalone web apps; just use them.",
                },
                {
                  question: "Do the tools work on mobile?",
                  answer: "Yes. All tools are built as responsive web apps and work in any modern mobile or desktop browser — no downloads or installs needed.",
                },
                {
                  question: "Is my data safe when using the currency converter?",
                  answer: "The converter only fetches public exchange rate data to perform calculations. You don't enter personal information, account details, or wallet addresses — it's a calculator, not a trading platform.",
                },
                {
                  question: "Can you build a custom tool for my business?",
                  answer: "Yes — custom calculators, configurators, booking widgets, and internal dashboards are a core part of the web development service. If a tool would save your team hours weekly, it's usually worth building. Reach out through the contact page with what you're trying to automate.",
                },
              ]}
            />
          </div>
        </Container>
      </section>

      {/* CTA Banner */}
      <Container>
        <CTABanner
          title="Need a Custom Web Application Built for Your Business?"
          description="I build fast, responsive Next.js and React web applications, custom API integrations, and web utilities."
          buttonText="Discuss Your Web Project"
          href="/contact"
        />
      </Container>
    </div>
  );
}
