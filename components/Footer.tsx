import React from 'react';
import Link from 'next/link';
import { socialLinks } from '@/data/socialLinks';

export function Footer() {
  return (
    <footer className="bg-[#17181c] border-t border-[#272a30] text-[#9ca3af] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#d97706]/10 border border-[#d97706]/30 flex items-center justify-center font-heading font-bold text-lg text-[#d97706]">
                RA
              </div>
              <span className="font-heading font-bold text-xl text-[#f3f4f6]">
                Rashid Azam
              </span>
            </Link>
            <p className="text-sm text-[#9ca3af] max-w-sm">
              Full-Stack Web Developer, Technical SEO Specialist, and YouTube Automation Consultant based in Pakistan, serving PK & UAE markets.
            </p>
            <div className="pt-2 text-xs text-[#6b7280]">
              Email: <a href="mailto:rashidbloch1351@gmail.com" className="text-[#d97706] hover:underline">rashidbloch1351@gmail.com</a>
            </div>
          </div>

          {/* Pillar Services */}
          <div>
            <h3 className="font-heading font-semibold text-[#f3f4f6] text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/services/seo-services" className="hover:text-[#f3f4f6]">Technical SEO</Link></li>
              <li><Link href="/services/digital-marketing" className="hover:text-[#f3f4f6]">Digital Marketing</Link></li>
              <li><Link href="/services/youtube-automation" className="hover:text-[#f3f4f6]">YouTube Automation</Link></li>
              <li><Link href="/services/web-development" className="hover:text-[#f3f4f6]">Web Development</Link></li>
              <li><Link href="/services/ai-automation" className="hover:text-[#f3f4f6]">AI Automation</Link></li>
              <li><Link href="/services/content-writing" className="hover:text-[#f3f4f6]">Content Writing</Link></li>
            </ul>
          </div>

          {/* Navigation Hubs */}
          <div>
            <h3 className="font-heading font-semibold text-[#f3f4f6] text-sm uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="hover:text-[#f3f4f6]">Home</Link></li>
              <li><Link href="/services" className="hover:text-[#f3f4f6]">Services</Link></li>
              <li><Link href="/seo" className="hover:text-[#f3f4f6]">SEO Hub</Link></li>
              <li><Link href="/projects" className="hover:text-[#f3f4f6]">Projects</Link></li>
              <li><Link href="/about" className="hover:text-[#f3f4f6]">About</Link></li>
              <li><Link href="/blog" className="hover:text-[#f3f4f6]">Blog</Link></li>
            </ul>
          </div>

          {/* Social Profiles */}
          <div>
            <h3 className="font-heading font-semibold text-[#f3f4f6] text-sm uppercase tracking-wider mb-4">
              Connect
            </h3>
            <ul className="space-y-2.5 text-sm">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#f3f4f6] transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#272a30] flex flex-col md:flex-row items-center justify-between text-xs text-[#6b7280] gap-4">
          <p>© {new Date().getFullYear()} Rashid Azam. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#9ca3af]">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-[#9ca3af]">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-[#9ca3af]">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
