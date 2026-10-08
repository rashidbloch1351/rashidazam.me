import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rashidazam.me'),
  title: {
    default: 'Rashid Azam | Web Developer & Technical SEO Expert Pakistan',
    template: '%s | Rashid Azam',
  },
  description: 'Full-stack web developer and technical SEO expert in Pakistan. Building high-performance Next.js apps, WordPress sites, YouTube automation pipelines, and AI workflows.',
  authors: [{ name: 'Rashid Azam', url: 'https://rashidazam.me' }],
  creator: 'Rashid Azam',
  publisher: 'Rashid Azam',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rashidazam.me',
    siteName: 'Rashid Azam Portfolio',
    images: [
      {
        url: '/images/branding/rashid-azam-hero-portrait.webp',
        width: 1200,
        height: 630,
        alt: 'Rashid Azam - Web Developer & Technical SEO Expert',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@rashidazam1351',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rashid Azam',
    alternateName: ['M Rashid Azam', 'Muhammad Rashid Azam'],
    url: 'https://rashidazam.me',
    image: 'https://rashidazam.me/images/branding/rashid-azam-hero-portrait.webp',
    jobTitle: 'Web Developer & Technical SEO Expert',
    worksFor: {
      '@type': 'Organization',
      name: 'Arham Digital Agency',
    },
    sameAs: [
      'https://www.fiverr.com/rashidazam1351',
      'https://www.freelancer.com/u/rashidazam1351',
      'https://github.com/rashidazam1351',
      'https://www.linkedin.com/in/rashidazam1351',
      'https://x.com/rashidazam1351',
      'https://youtube.com/@TechByRash',
    ],
  };

  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#0f1012] text-[#f3f4f6]">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
