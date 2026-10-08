import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Thank You for Reaching Out | Rashid Azam',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div className="py-20">
      <Container size="small" className="text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 text-[#10b981] mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <h1 className="text-4xl font-heading font-bold text-[#f3f4f6]">
          Thank You for Your Message!
        </h1>

        <p className="text-base text-[#9ca3af] max-w-md mx-auto leading-relaxed">
          I have received your project inquiry. I review all incoming messages personally and will get back to you within 24 hours.
        </p>

        <div className="pt-6 flex justify-center gap-4">
          <Button href="/" variant="primary" showArrow>
            Return to Homepage
          </Button>
          <Button href="/projects" variant="secondary">
            View Selected Work
          </Button>
        </div>
      </Container>
    </div>
  );
}
