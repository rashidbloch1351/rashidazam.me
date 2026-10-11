import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Rashid Azam | Start Your Web & SEO Project',
  description: 'Get in touch with Rashid Azam for full-stack web development, technical SEO audits, WordPress optimization, and digital growth services worldwide.',
  alternates: {
    canonical: 'https://www.rashidazam.me/contact',
  },
  openGraph: {
    title: 'Contact Rashid Azam | Start Your Web & SEO Project',
    description: 'Direct project inquiries for web application development, technical SEO audits, and AI workflows.',
    url: 'https://www.rashidazam.me/contact',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
