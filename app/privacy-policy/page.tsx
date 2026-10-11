import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Privacy Policy | Rashid Azam',
  description: 'Privacy Policy for rashidazam.me — detailing data collection, usage, and protection policies.',
  alternates: {
    canonical: 'https://www.rashidazam.me/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 space-y-12 bg-white">
      <Container size="small">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

        <div className="space-y-4 pt-4 border-b border-gray-200 pb-8">
          <h1 className="text-4xl font-heading font-bold text-slate-900">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500">
            Last updated: October 8, 2026
          </p>
        </div>

        <div className="space-y-8 text-slate-600 text-sm leading-relaxed pt-4">
          <section className="space-y-3">
            <h2 className="text-xl font-heading font-semibold text-slate-900">
              1. Information We Collect
            </h2>
            <p>
              When you submit an inquiry through our contact form or contact us via email or WhatsApp, we collect personal information you voluntarily provide, including your full name, email address, selected service interest, estimated budget range, and project details.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-semibold text-slate-900">
              2. How We Use Your Information
            </h2>
            <p>
              We use your contact information exclusively to respond to your project inquiries, deliver technical SEO and web development services, and communicate project updates. We do not sell, rent, or trade your personal data to third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-semibold text-slate-900">
              3. Analytics &amp; Cookies
            </h2>
            <p>
              We may utilize standard website analytics tools (such as Google Analytics 4 or Vercel Web Analytics) to analyze anonymous website traffic patterns, page views, and user engagement metrics to improve website performance.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-semibold text-slate-900">
              4. Data Protection &amp; Security
            </h2>
            <p>
              We implement industry-standard security measures to protect your submitted contact information against unauthorized access, alteration, or disclosure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-semibold text-slate-900">
              5. Contact Information
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy, please contact Rashid Azam directly at{' '}
              <a href="mailto:rashidbloch1351@gmail.com" className="text-[#d97706] hover:underline">
                rashidbloch1351@gmail.com
              </a>.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
