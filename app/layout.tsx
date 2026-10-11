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
  metadataBase: new URL('https://www.rashidazam.me'),
  title: {
    default: 'Rashid Azam | Web Developer & Technical SEO Expert Worldwide',
    template: '%s | Rashid Azam',
  },
  description: 'Full-stack web developer and technical SEO specialist building high-performance Next.js apps, WordPress sites, YouTube automation pipelines, and AI workflows for clients worldwide.',
  authors: [{ name: 'Rashid Azam', url: 'https://www.rashidazam.me' }],
  creator: 'Rashid Azam',
  publisher: 'Rashid Azam',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.rashidazam.me',
    siteName: 'Rashid Azam Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rashid Azam - Web Developer & Technical SEO Expert',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@rashidazam1351',
    images: ['/og-image.png'],
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
    url: 'https://www.rashidazam.me',
    image: 'https://www.rashidazam.me/images/branding/profile.jpg',
    jobTitle: 'Web Developer & Technical SEO Expert',
    telephone: '+923276434422',
    sameAs: [
      'https://www.linkedin.com/in/mrashid1351/',
      'https://github.com/rashidazam',
      'https://facebook.com/rashidazam1351',
      'https://instagram.com/rashidazam1351',
      'https://fiverr.com/rashidazam1351',
      'https://youtube.com/@TechByRash',
    ],
  };

  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <meta name="theme-color" content="#ffffff" />
        <meta name="p:domain_verify" content="cf84da46506aedb7f284cd08393e1c13" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-800 selection:bg-amber-100 selection:text-amber-900">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-[#d97706] text-white px-4 py-2 rounded-md font-medium text-sm focus:outline-none"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
