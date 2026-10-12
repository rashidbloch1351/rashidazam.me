
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
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'YouTube Automation & Channel Growth Hub',
  description: 'Strategies for building faceless YouTube channels, optimizing CTR and retention, and multi-stream monetization.',
  alternates: {
    canonical: 'https://www.rashidazam.me/youtube',
  },
  openGraph: {
    url: 'https://www.rashidazam.me/youtube',
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

export default function YoutubeClusterHubPage() {
  return (
    <div className="py-12 space-y-16">
      <Container>
        <Breadcrumbs items={[{ label: 'YouTube Growth Hub' }]} />

        <div className="max-w-3xl space-y-4 pt-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#b45309] bg-[#d97706]/10 px-3 py-1 rounded-full border border-[#d97706]/20">
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


      {/* Channel Growth Framework */}
      <section>
        <Container>
          <SectionHeading
            kicker="Start Here"
            title="The Faceless Channel Growth Framework"
            description="Every sustainable YouTube business runs the same four-stage system. Work through the stages in order — skipping ahead is why most channels stall."
            className="mb-10"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
            <div className="bg-[#17181c] border border-[#272a30] p-8 rounded-xl space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#b45309]">Stage 1</span>
              <h3 className="text-xl font-heading font-semibold text-[#f3f4f6]">Validate the Niche</h3>
              <p className="text-sm text-[#9ca3af] leading-relaxed">
                Channels fail at niche selection more than at production. Run every idea through advertiser demand, content supply gaps, production feasibility, and evergreen demand before recording anything. The{' '}
                <Link href="/youtube/faceless-channel-niche-selection" className="text-[#b45309] hover:underline font-medium">
                  faceless niche selection guide
                </Link>{' '}
                walks through the full 4-filter validation framework plus a 90-day testing checklist.
              </p>
            </div>
            <div className="bg-[#17181c] border border-[#272a30] p-8 rounded-xl space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#b45309]">Stage 2</span>
              <h3 className="text-xl font-heading font-semibold text-[#f3f4f6]">Package for the Click</h3>
              <p className="text-sm text-[#9ca3af] leading-relaxed">
                The algorithm cannot recommend a video nobody clicks. Thumbnail and title work as a single unit: the thumbnail creates emotion and curiosity, the title adds context and keywords. The{' '}
                <Link href="/youtube/youtube-seo-ranking-algorithm" className="text-[#b45309] hover:underline font-medium">
                  YouTube SEO and algorithm guide
                </Link>{' '}
                covers thumbnail-title synergy, testing methods, and the metadata that still matters.
              </p>
            </div>
            <div className="bg-[#17181c] border border-[#272a30] p-8 rounded-xl space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#b45309]">Stage 3</span>
              <h3 className="text-xl font-heading font-semibold text-[#f3f4f6]">Engineer Retention</h3>
              <p className="text-sm text-[#9ca3af] leading-relaxed">
                Clicks start the job; watch time finishes it. Open with the payoff in the first 30 seconds, use open loops to carry viewers through the middle, and read your retention graphs as diagnostics. Retention scripting is the highest-leverage skill in the entire pipeline.
              </p>
            </div>
            <div className="bg-[#17181c] border border-[#272a30] p-8 rounded-xl space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#b45309]">Stage 4</span>
              <h3 className="text-xl font-heading font-semibold text-[#f3f4f6]">Stack Revenue Streams</h3>
              <p className="text-sm text-[#9ca3af] leading-relaxed">
                AdSense alone leaves you exposed to CPM swings. Layer affiliate links, digital products, and sponsorships so every video can earn twice. The{' '}
                <Link href="/youtube/youtube-monetization-strategies" className="text-[#b45309] hover:underline font-medium">
                  monetization strategies guide
                </Link>{' '}
                maps which streams fit each channel size, from first video to scale.
              </p>
            </div>
          </div>
        </Container>
      </section>

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
                  <div className="w-10 h-10 rounded-lg bg-[#0f1012] border border-[#272a30] flex items-center justify-center text-[#b45309]">
                    <Video className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-[#f3f4f6] group-hover:text-[#b45309] transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-xs text-[#9ca3af] leading-relaxed line-clamp-3">
                    {topic.metaDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#272a30]/50">
                  <Link
                    href={`/youtube/${topic.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#b45309] hover:text-[#b45309] group-hover:translate-x-1 transition-transform"
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


      {/* Hub FAQs */}
      <section>
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            <SectionHeading
              kicker="Common Questions"
              title="YouTube Automation FAQs"
              className="mb-8"
            />
            <FAQAccordion
              items={[
                {
                  question: "What is YouTube automation, exactly?",
                  answer: "YouTube automation means running a channel as a system rather than a personal creative outlet: niche research, scriptwriting, voiceover, editing, thumbnails, and publishing handled through repeatable workflows, often with a small team or contractors. Faceless channels are the most common automation model since they don't depend on the owner's time on camera.",
                },
                {
                  question: "How much does it cost to run an automated YouTube channel?",
                  answer: "It scales with outsourcing. Doing everything yourself costs mainly software subscriptions (editing, voiceover, thumbnails). Fully outsourcing production to freelancers costs more per video but frees your time for strategy. Most operators start lean and outsource the bottlenecks first — usually editing, then voiceover.",
                },
                {
                  question: "How long before an automated channel earns money?",
                  answer: "There is no fixed timeline. Channels with validated niches, strong packaging, and consistent publishing typically take several months to reach monetization thresholds, and longer to meaningful revenue. Treat the first 50 videos as system-building, not as a revenue schedule.",
                },
                {
                  question: "Do you build YouTube channels for clients?",
                  answer: "Yes — niche validation, scriptwriting, voiceover direction, editing oversight, thumbnail design, and YouTube SEO are all part of the YouTube automation service. The goal is a channel that runs as a documented pipeline, not a dependency on any single person.",
                },
                {
                  question: "Can I automate a channel in any niche?",
                  answer: "No. Niches requiring on-camera presence, physical product handling, or travel don't fit the faceless automation model. The niche selection guide covers the four feasibility filters — advertiser demand, supply gaps, production feasibility, and evergreen demand — that determine whether a niche can work.",
                },
              ]}
            />
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
