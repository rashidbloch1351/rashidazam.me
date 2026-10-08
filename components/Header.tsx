'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center group py-1">
          <Image
            src="/images/branding/logo.png"
            alt="Rashid Azam logo"
            width={200}
            height={48}
            priority
            className="h-10 sm:h-11 w-auto object-contain group-hover:opacity-90 transition-opacity"
          />
        </Link>

        {/* Desktop Navigation: HOME > SERVICES > SEO HUB > PROJECTS > ABOUT > BLOG */}
        <nav className="hidden md:flex items-center gap-7">
          {/* 1. Home */}
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${
              pathname === '/'
                ? 'text-[#d97706] font-semibold'
                : 'text-slate-600 hover:text-slate-900'
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
                    : 'text-slate-600 hover:text-slate-900'
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
                className="p-1 text-slate-500 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d97706] rounded-md"
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
                          : 'text-slate-700 hover:bg-slate-50 hover:text-[#d97706]'
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
                        : 'text-slate-600 hover:bg-slate-50 hover:text-[#d97706]'
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
                    : 'text-slate-600 hover:text-slate-900'
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
            className="inline-flex items-center gap-2 bg-[#d97706] hover:bg-[#b45309] text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors shadow-xs"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d97706]"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-4 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2">
            {/* 1. Home */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center min-h-[44px] text-base font-medium px-3 py-2 rounded-md hover:bg-slate-50 transition-colors ${
                pathname === '/' ? 'text-[#d97706] font-semibold bg-amber-50/60' : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Home
            </Link>

            {/* 2. Services Accordion */}
            <div className="space-y-1">
              <div className="flex items-center justify-between min-h-[44px] px-3 py-2 rounded-md hover:bg-slate-50">
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium transition-colors ${
                    pathname.startsWith('/services') ? 'text-[#d97706] font-semibold' : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  Services
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  aria-expanded={mobileServicesOpen}
                  aria-label="Expand Services Submenu"
                  className="p-2 text-slate-500 hover:text-slate-900"
                >
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      mobileServicesOpen ? 'rotate-180 text-[#d97706]' : ''
                    }`}
                  />
                </button>
              </div>

              {mobileServicesOpen && (
                <div className="pl-4 space-y-1 border-l-2 border-amber-500/40 my-1">
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
                            ? 'text-[#d97706] font-semibold bg-amber-50'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
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
                    className="flex items-center min-h-[44px] px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[#d97706] hover:bg-slate-50 rounded-md"
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
                  className={`flex items-center min-h-[44px] text-base font-medium px-3 py-2 rounded-md hover:bg-slate-50 transition-colors ${
                    isActive ? 'text-[#d97706] font-semibold bg-amber-50/60' : 'text-slate-700 hover:text-slate-900'
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
