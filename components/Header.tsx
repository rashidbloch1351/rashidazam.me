'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, ChevronDown, ArrowRight } from 'lucide-react';

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const serviceLinks = [
    { label: 'SEO Services', href: '/services/seo-services' },
    { label: 'Digital Marketing', href: '/services/digital-marketing' },
    { label: 'YouTube Automation', href: '/services/youtube-automation' },
    { label: 'Web Development', href: '/services/web-development' },
    { label: 'AI Automation', href: '/services/ai-automation' },
    { label: 'Content Writing', href: '/services/content-writing' },
  ];

  // Exact menu sequence: HOME > SERVICES > SEO HUB > PROJECTS > ABOUT > BLOG
  const mainNavLinks = [
    { label: 'Home', href: '/' },
    { label: 'SEO Hub', href: '/seo' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
  ];

  // Close dropdowns on route change
  useEffect(() => {
    setServicesOpen(false);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Outside click listener
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard Escape listener
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setServicesOpen(false);
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 200);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0f1012]/90 backdrop-blur-md border-b border-[#272a30]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-[#d97706]/10 border border-[#d97706]/30 flex items-center justify-center font-heading font-bold text-xl text-[#d97706] group-hover:scale-105 transition-transform">
            RA
          </div>
          <div>
            <span className="font-heading font-bold text-lg text-[#f3f4f6] tracking-tight block">
              Rashid Azam
            </span>
            <span className="text-xs text-[#9ca3af] block">
              Web Developer & SEO Expert
            </span>
          </div>
        </Link>

        {/* Desktop Navigation: HOME > SERVICES > SEO HUB > PROJECTS > ABOUT > BLOG */}
        <nav className="hidden md:flex items-center gap-7">
          {/* 1. Home */}
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${
              pathname === '/'
                ? 'text-[#d97706] font-semibold'
                : 'text-[#9ca3af] hover:text-[#f3f4f6]'
            }`}
          >
            Home
          </Link>

          {/* 2. Services (dropdown) */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="inline-flex items-center gap-1">
              <Link
                href="/services"
                className={`text-sm font-medium transition-colors py-2 px-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d97706] rounded-md ${
                  pathname.startsWith('/services')
                    ? 'text-[#d97706] font-semibold'
                    : 'text-[#9ca3af] hover:text-[#f3f4f6]'
                }`}
              >
                Services
              </Link>
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                aria-label="Toggle Services Menu"
                className="p-1 text-[#9ca3af] hover:text-[#f3f4f6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d97706] rounded-md"
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesOpen ? 'rotate-180 text-[#d97706]' : ''
                  }`}
                />
              </button>
            </div>

            {/* Dropdown Card */}
            <div
              className={`absolute left-0 top-full pt-2 w-72 transition-all duration-200 z-50 ${
                servicesOpen
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-1 pointer-events-none'
              }`}
            >
              <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-2 space-y-1">
                {serviceLinks.map((service) => {
                  const isActive = pathname === service.href;
                  return (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setServicesOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-amber-50 text-[#d97706] font-semibold'
                          : 'text-gray-800 hover:bg-gray-50 hover:text-[#d97706]'
                      }`}
                    >
                      <span>{service.label}</span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-[#d97706]" />}
                    </Link>
                  );
                })}

                <div className="border-t border-gray-100 pt-1 mt-1">
                  <Link
                    href="/services"
                    onClick={() => setServicesOpen(false)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
                      pathname === '/services'
                        ? 'bg-amber-50 text-[#d97706]'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-[#d97706]'
                    }`}
                  >
                    <span>All Services</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 3. SEO Hub, 4. Projects, 5. About, 6. Blog */}
          {mainNavLinks.slice(1).map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-[#d97706] font-semibold'
                    : 'text-[#9ca3af] hover:text-[#f3f4f6]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Primary CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#d97706] hover:bg-[#b45309] text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors shadow-sm"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#9ca3af] hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d97706]"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#17181c] border-b border-[#272a30] px-4 pt-4 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {/* 1. Home */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center min-h-[44px] text-base font-medium px-3 py-2 rounded-md hover:bg-[#202228] transition-colors ${
                pathname === '/' ? 'text-[#d97706] font-semibold' : 'text-[#9ca3af] hover:text-[#f3f4f6]'
              }`}
            >
              Home
            </Link>

            {/* 2. Services Accordion */}
            <div className="space-y-1">
              <div className="flex items-center justify-between min-h-[44px] px-3 py-2 rounded-md hover:bg-[#202228]">
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium transition-colors ${
                    pathname.startsWith('/services') ? 'text-[#d97706] font-semibold' : 'text-[#9ca3af] hover:text-[#f3f4f6]'
                  }`}
                >
                  Services
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  aria-expanded={mobileServicesOpen}
                  aria-label="Expand Services Submenu"
                  className="p-2 text-[#9ca3af] hover:text-[#f3f4f6]"
                >
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      mobileServicesOpen ? 'rotate-180 text-[#d97706]' : ''
                    }`}
                  />
                </button>
              </div>

              {mobileServicesOpen && (
                <div className="pl-4 space-y-1 border-l-2 border-[#d97706]/40 my-1">
                  {serviceLinks.map((service) => {
                    const isActive = pathname === service.href;
                    return (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileServicesOpen(false);
                        }}
                        className={`flex items-center min-h-[44px] px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                          isActive
                            ? 'text-[#d97706] font-semibold bg-[#d97706]/10'
                            : 'text-[#9ca3af] hover:text-[#f3f4f6] hover:bg-[#202228]'
                        }`}
                      >
                        {service.label}
                      </Link>
                    );
                  })}
                  <Link
                    href="/services"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    className="flex items-center min-h-[44px] px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[#d97706] hover:bg-[#202228] rounded-md"
                  >
                    All Services →
                  </Link>
                </div>
              )}
            </div>

            {/* 3. SEO Hub, 4. Projects, 5. About, 6. Blog */}
            {mainNavLinks.slice(1).map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center min-h-[44px] text-base font-medium px-3 py-2 rounded-md hover:bg-[#202228] transition-colors ${
                    isActive ? 'text-[#d97706] font-semibold' : 'text-[#9ca3af] hover:text-[#f3f4f6]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex justify-center items-center gap-2 bg-[#d97706] text-white text-sm font-medium px-5 py-3 rounded-lg min-h-[44px]"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}


