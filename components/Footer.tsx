import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { socialLinks } from '@/data/socialLinks';
import { Linkedin, Github, Youtube, Instagram, Facebook, Globe } from 'lucide-react';

export function Footer() {
  const getSocialIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case 'linkedin':
        return <Linkedin className="w-4 h-4 text-blue-600" />;
      case 'github':
        return <Github className="w-4 h-4 text-slate-800" />;
      case 'youtube':
        return <Youtube className="w-4 h-4 text-red-600" />;
      case 'instagram':
        return <Instagram className="w-4 h-4 text-pink-600" />;
      case 'facebook':
        return <Facebook className="w-4 h-4 text-blue-500" />;
      default:
        return <Globe className="w-4 h-4 text-amber-600" />;
    }
  };

  return (
    <footer className="bg-slate-50 border-t border-gray-200 text-slate-600 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center group py-1">
              <Image
                src="/images/branding/logo.png"
                alt="Rashid Azam logo"
                width={200}
                height={48}
                className="h-10 w-auto object-contain group-hover:opacity-90 transition-opacity"
              />
            </Link>
            <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
              Full-Stack Web Developer, Technical SEO Specialist, and Digital Growth Consultant serving clients, startups, and agencies worldwide.
            </p>
            <div className="pt-1 text-xs text-slate-500">
              Email: <a href="mailto:rashidbloch1351@gmail.com" className="text-[#d97706] hover:underline font-medium">rashidbloch1351@gmail.com</a>
            </div>
          </div>

          {/* Pillar Services */}
          <div>
            <h3 className="font-heading font-semibold text-slate-900 text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/services/technical-seo" className="hover:text-[#d97706] transition-colors">Technical SEO</Link></li>
              <li><Link href="/services/digital-marketing" className="hover:text-[#d97706] transition-colors">Digital Marketing</Link></li>
              <li><Link href="/services/youtube-automation" className="hover:text-[#d97706] transition-colors">YouTube Automation</Link></li>
              <li><Link href="/services/web-development" className="hover:text-[#d97706] transition-colors">Web Development</Link></li>
              <li><Link href="/services/ai-automation" className="hover:text-[#d97706] transition-colors">AI Automation</Link></li>
              <li><Link href="/services/content-writing" className="hover:text-[#d97706] transition-colors">Content Writing</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-heading font-semibold text-slate-900 text-sm uppercase tracking-wider mb-4">
              Locations
            </h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/locations" className="font-bold text-[#d97706] hover:underline">All Locations Directory</Link></li>
              <li><Link href="/locations/worldwide" className="hover:text-[#d97706] transition-colors">Worldwide Remote</Link></li>
              <li><Link href="/locations/lahore" className="hover:text-[#d97706] transition-colors">Lahore, Pakistan</Link></li>
              <li><Link href="/locations/islamabad" className="hover:text-[#d97706] transition-colors">Islamabad, Pakistan</Link></li>
              <li><Link href="/locations/karachi" className="hover:text-[#d97706] transition-colors">Karachi, Pakistan</Link></li>
              <li><Link href="/locations/faisalabad" className="hover:text-[#d97706] transition-colors">Faisalabad, Pakistan</Link></li>
              <li><Link href="/locations/multan" className="hover:text-[#d97706] transition-colors">Multan, Pakistan</Link></li>
              <li><Link href="/locations/usa" className="hover:text-[#d97706] transition-colors">USA Market</Link></li>
              <li><Link href="/locations/uk" className="hover:text-[#d97706] transition-colors">UK Market</Link></li>
              <li><Link href="/locations/germany" className="hover:text-[#d97706] transition-colors">Germany Market</Link></li>
              <li><Link href="/locations/uae" className="hover:text-[#d97706] transition-colors">UAE & Dubai</Link></li>
            </ul>
          </div>

          {/* Guides & Resources */}
          <div>
            <h3 className="font-heading font-semibold text-slate-900 text-sm uppercase tracking-wider mb-4">
              Guides
            </h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/youtube" className="hover:text-[#d97706] transition-colors">YouTube Growth Hub</Link></li>
              <li><Link href="/youtube/faceless-channel-niche-selection" className="hover:text-[#d97706] transition-colors">Faceless Niche Selection</Link></li>
              <li><Link href="/marketing" className="hover:text-[#d97706] transition-colors">Marketing Growth Hub</Link></li>
              <li><Link href="/marketing/google-ads-search-campaign-setup" className="hover:text-[#d97706] transition-colors">Google Ads Setup Guide</Link></li>
              <li><Link href="/seo/technical-seo-audit-guide" className="hover:text-[#d97706] transition-colors">Technical SEO Audit Guide</Link></li>
              <li><Link href="/seo/keyword-research-intent" className="hover:text-[#d97706] transition-colors">Keyword Research Guide</Link></li>
              <li><Link href="/tools" className="hover:text-[#d97706] transition-colors">Free Web Tools</Link></li>
            </ul>
          </div>

          {/* Social Profiles & Hubs */}
          <div>
            <h3 className="font-heading font-semibold text-slate-900 text-sm uppercase tracking-wider mb-4">
              Connect & Links
            </h3>
            <ul className="space-y-2 text-xs mb-4">
              <li><Link href="/about" className="hover:text-[#d97706] transition-colors">About Rashid Azam</Link></li>
              <li><Link href="/seo" className="hover:text-[#d97706] transition-colors">SEO Knowledge Hub</Link></li>
              <li><Link href="/contact" className="hover:text-[#d97706] transition-colors">Contact / Consultations</Link></li>
            </ul>
            <div className="flex flex-wrap gap-2.5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={`${s.label} (${s.handle})`}
                  className="w-9 h-9 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-xs hover:border-amber-500 hover:bg-amber-50/50 hover:scale-105 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  {getSocialIcon(s.label)}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Rashid Azam. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-900">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-slate-900">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-slate-900">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
