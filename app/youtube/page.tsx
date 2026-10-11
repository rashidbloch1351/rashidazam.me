
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Video } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { CTABanner } from '@/components/CTABanner';
import { youtubeClusterTopics } from '@/data/clusters/youtube';

export const metadata: Metadata = {
  title: 'YouTube Automation & Channel Growth Hub',
  description: 'Strategies for building faceless YouTube channels, optimizing CTR and retention, and multi-stream monetization.',
  alternates: {
    canonical: 'https://www.rashidazam.me/youtube',
  },
};

export default function YoutubeClusterHubPage() {
  return (
    <div className="py-12 space-y-16">
      <Container>
        <Breadcrumbs items={[{ label: 'YouTube Growth Hub' }]} />

        <div className="max-w-3xl space-y-4 pt-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#d97706] bg-[#d97706]/10 px-3 py-1 rounded-full border border-[#d97706]/20">
            Topic Cluster Hub
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-[#f3f4f6] tracking-tight">
            YouTube Automation & Growth Hub
          </h1>
          <p className="text-lg text-[#9ca3af] leading-relaxed">
            Frameworks for selecting high-CPM niches, creating retention-driven scripts, thumbnail psychology, and automated video pipelines.
          </p>

          <div className="pt-2">
            <Button href="/services/youtube-automation" variant="primary" showArrow>
              Explore YouTube Services
            </Button>
          </div>
        </div>
      </Container>

      {/* Topics Grid */}
      <section>
        <Container>
          <SectionHeading
            kicker="YouTube Frameworks"
            title="Channel Automation & SEO Topics"
            description="Deep guides on scaling YouTube channels into sustainable revenue assets."
            className="mb-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {youtubeClusterTopics.map((topic) => (
              <div
                key={topic.slug}
                className="bg-[#17181c] border border-[#272a30] hover:border-[#d97706]/40 p-8 rounded-xl space-y-4 flex flex-col justify-between group transition-all"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0f1012] border border-[#272a30] flex items-center justify-center text-[#d97706]">
                    <Video className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-[#f3f4f6] group-hover:text-[#d97706] transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-xs text-[#9ca3af] leading-relaxed line-clamp-3">
                    {topic.metaDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#272a30]/50">
                  <Link
                    href={`/youtube/${topic.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#d97706] hover:text-[#b45309] group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read YouTube Guide</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Primary Pillar CTA */}
      <Container>
        <CTABanner
          title="Want an End-to-End YouTube Channel Pipeline Built for You?"
          description="I manage niche research, scriptwriting, voiceovers, video editing, custom thumbnails, and SEO titles for channel owners."
          buttonText="Explore YouTube Automation"
          href="/services/youtube-automation"
        />
      </Container>
    </div>
  );
}
