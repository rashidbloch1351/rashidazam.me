import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for rashidazam.me — governing service agreements and website usage.',
  alternates: {
    canonical: 'https://www.rashidazam.me/terms-of-service',
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="py-12 space-y-12 bg-white">
      <Container size="small">
        <Breadcrumbs items={[{ label: 'Terms of Service' }]} />

        <div className="space-y-4 pt-4 border-b border-gray-200 pb-8">
          <h1 className="text-4xl font-heading font-bold text-slate-900">
            Terms of Service
          </h1>
          <p className="text-xs text-slate-500">
            Last updated: October 8, 2026
          </p>
        </div>

        <div className="space-y-8 text-slate-600 text-sm leading-relaxed pt-4">
          <section className="space-y-3">
            <h2 className="text-xl font-heading font-semibold text-slate-900">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using rashidazam.me or engaging Rashid Azam for freelance web development, SEO consulting, or digital marketing services, you agree to comply with and be bound by these Terms of Service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-semibold text-slate-900">
              2. Scope of Services &amp; Deliverables
            </h2>
            <p>
              All client engagements are defined via written project proposals or milestone agreements specifying project scope, deliverables, timelines, and payment schedules.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-semibold text-slate-900">
              3. Intellectual Property Rights
            </h2>
            <p>
              Upon full final payment, clients receive full ownership rights to final custom code deliverables, website assets, and content created specifically for their project, unless specified otherwise in the agreement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-semibold text-slate-900">
              4. Limitation of Liability
            </h2>
            <p>
              While we adhere to industry best practices for web development and search engine optimization, we cannot guarantee specific third-party algorithm decisions or search engine ranking positions outside our control.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
