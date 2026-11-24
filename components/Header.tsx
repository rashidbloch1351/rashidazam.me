'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Menu, X, ArrowUpRight, ChevronDown, ArrowRight, Search, MapPin, 
  Code, ShoppingCart, Globe, Zap, FileSearch, ShieldAlert, Cpu, 
  Smartphone, Building2, Phone, Mail, Linkedin, Github, Youtube, Instagram, Facebook,
  KeyRound, Bot
} from 'lucide-react';
import { socialLinks } from '@/data/socialLinks';
import { contactInfo } from '@/data/contactInfo';

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [seoHubOpen, setSeoHubOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSeoOpen, setMobileSeoOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
  const [mobilePakistanOpen, setMobilePakistanOpen] = useState(true);
  const [mobileInternationalOpen, setMobileInternationalOpen] = useState(true);

  const servicesRef = useRef<HTMLDivElement | null>(null);
  const seoHubRef = useRef<HTMLDivElement | null>(null);
  const locationsRef = useRef<HTMLDivElement | null>(null);

  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const seoTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const locationsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const serviceMenuColumns = [
    {
      heading: 'Core Services',
      links: [
        { label: 'SEO Services', href: '/services/seo-services' },
        { label: 'Digital Marketing', href: '/services/digital-marketing' },
        { label: 'YouTube Automation', href: '/services/youtube-automation' },
        { label: 'Web Development', href: '/services/web-development' },
        { label: 'WordPress Development', href: '/services/wordpress-development' },
        { label: 'AI Automation', href: '/services/ai-automation' },
        { label: 'Content Writing', href: '/services/content-writing' },
      ],
    },
    {
      heading: 'SEO Services',
      links: [
        { label: 'Local SEO', href: '/services/local-seo' },
        { label: 'Technical SEO', href: '/services/technical-seo' },
        { label: 'SEO Audit', href: '/services/seo-audit' },
        { label: 'E-Commerce SEO', href: '/services/ecommerce-seo' },
      ],
    },
    {
      heading: 'Specialized SEO',
      links: [
        { label: 'WordPress SEO', href: '/services/wordpress-seo' },
        { label: 'AI SEO', href: '/services/ai-seo' },
        { label: 'Answer Engine Optimization (AEO)', href: '/services/answer-engine-optimization' },
      ],
    },
  ];

  const blogFeaturedPosts = [
    {
      name: 'Technical SEO Audit Guide',
      category: 'Technical SEO',
      href: '/blog/technical-seo-audit-guide',
      icon: <ShieldAlert className="w-4 h-4 text-[#b45309]" />,
    },
    {
      name: 'Local SEO Framework for Pakistan & UAE',
      category: 'Local SEO',
      href: '/blog/local-seo-pakistan-uae',
      icon: <MapPin className="w-4 h-4 text-[#b45309]" />,
    },
    {
      name: 'Keyword Research and Search Intent',
      category: 'Keyword Research',
      href: '/blog/keyword-research-intent',
      icon: <KeyRound className="w-4 h-4 text-[#b45309]" />,
    },
    {
      name: 'Answer Engine Optimization (AEO) and GEO Guide',
      category: 'AI & Automation',
      href: '/blog/answer-engine-optimization-guide',
      icon: <Bot className="w-4 h-4 text-[#b45309]" />,
    },
  ];

  const blogMenuCategories = [
    { label: 'Technical SEO', href: '/blog?category=technical-seo' },
    { label: 'On-Page SEO', href: '/blog?category=on-page-seo' },
    { label: 'Local SEO', href: '/blog?category=local-seo' },
    { label: 'Keyword Research', href: '/blog?category=keyword-research' },
    { label: 'WordPress SEO', href: '/blog?category=wordpress-seo' },
    { label: 'E-Commerce SEO', href: '/blog?category=ecommerce-seo' },
    { label: 'AI & Automation', href: '/blog?category=ai-automation' },
  ];

  const pakistanLocations = [
    { name: 'Lahore', href: '/locations/lahore', description: 'Commercial core & local SEO' },
    { name: 'Islamabad', href: '/locations/islamabad', description: 'Capital territory & technical SEO' },
    { name: 'Karachi', href: '/locations/karachi', description: 'Financial capital & e-commerce' },
    { name: 'Faisalabad', href: '/locations/faisalabad', description: 'Industrial hub & B2B growth' },
    { name: 'Multan', href: '/locations/multan', description: 'Regional center & local search' },
  ];

  const internationalLocations = [
    { name: 'USA Market', href: '/locations/usa', description: 'North America remote SEO & builds' },
    { name: 'UK Market', href: '/locations/uk', description: 'United Kingdom technical SEO' },
    { name: 'Germany Market', href: '/locations/germany', description: 'European Union international SEO' },
    { name: 'UAE & Dubai', href: '/locations/uae', description: 'Dubai & GCC market optimization' },
  ];

  // Close dropdowns on route change
  useEffect(() => {
    setServicesOpen(false);
    setSeoHubOpen(false);
    setLocationsOpen(false);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileSeoOpen(false);
    setMobileLocationsOpen(false);
  }, [pathname]);

  // Outside click listener
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
      if (seoHubRef.current && !seoHubRef.current.contains(event.target as Node)) {
        setSeoHubOpen(false);
      }
      if (locationsRef.current && !locationsRef.current.contains(event.target as Node)) {
        setLocationsOpen(false);
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
        setSeoHubOpen(false);
        setLocationsOpen(false);
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Hover Handlers
  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setServicesOpen(true);
    setSeoHubOpen(false);
    setLocationsOpen(false);
  };
  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 200);
  };

  const handleSeoEnter = () => {
    if (seoTimeoutRef.current) clearTimeout(seoTimeoutRef.current);
    setSeoHubOpen(true);
    setServicesOpen(false);
    setLocationsOpen(false);
  };
  const handleSeoLeave = () => {
    seoTimeoutRef.current = setTimeout(() => {
      setSeoHubOpen(false);
    }, 200);
  };

  const handleLocationsEnter = () => {
    if (locationsTimeoutRef.current) clearTimeout(locationsTimeoutRef.current);
    setLocationsOpen(true);
    setServicesOpen(false);
    setSeoHubOpen(false);
  };
  const handleLocationsLeave = () => {
    locationsTimeoutRef.current = setTimeout(() => {
      setLocationsOpen(false);
    }, 200);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xs">
      {/* Top Contact & Social Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-y-2">
          {/* Left Side: Contact Information */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <a
              href={contactInfo.phone.telLink}
              className="inline-flex items-center gap-1.5 hover:text-[#d97706] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#d97706] rounded px-1 py-0.5"
              aria-label={`Call or WhatsApp Rashid Azam at ${contactInfo.phone.display}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#d97706]" />
              <span className="font-medium">{contactInfo.phone.display}</span>
            </a>

            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center gap-1.5 hover:text-[#d97706] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#d97706] rounded px-1 py-0.5"
              aria-label={`Email Rashid Azam at ${contactInfo.email}`}
            >
              <Mail className="w-3.5 h-3.5 text-[#d97706]" />
              <span className="font-medium truncate max-w-[200px] sm:max-w-none">{contactInfo.email}</span>
            </a>
          </div>

          {/* Right Side: Social Profile Icons (Exactly Facebook, Twitter/X, YouTube, Instagram) */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-slate-400 font-medium">Follow:</span>

            {/* 1. Facebook */}
            <a
              href="https://facebook.com/rashidazam1351"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 text-slate-300 hover:text-[#d97706] hover:bg-slate-800 rounded transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#d97706] inline-flex items-center justify-center"
              aria-label="Visit Rashid Azam on Facebook (@rashidazam1351)"
              title="Facebook: @rashidazam1351"
            >
              <Facebook className="w-4 h-4 text-slate-300 hover:text-[#d97706] transition-colors" />
            </a>

            {/* 2. Twitter / X */}
            <a
              href="https://x.com/rashidazam1351"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 text-slate-300 hover:text-[#d97706] hover:bg-slate-800 rounded transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#d97706] inline-flex items-center justify-center"
              aria-label="Visit Rashid Azam on Twitter / X (@rashidazam1351)"
              title="Twitter / X: @rashidazam1351"
            >
              <svg className="w-3.5 h-3.5 fill-current text-slate-300 hover:text-[#d97706] transition-colors" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* 3. YouTube */}
            <a
              href="https://youtube.com/@TechByRash"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 text-slate-300 hover:text-[#d97706] hover:bg-slate-800 rounded transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#d97706] inline-flex items-center justify-center"
              aria-label="Visit Rashid Azam on YouTube (@TechByRash)"
              title="YouTube: @TechByRash"
            >
              <Youtube className="w-4 h-4 text-slate-300 hover:text-[#d97706] transition-colors" />
            </a>

            {/* 4. Instagram */}
            <a
              href="https://instagram.com/rashidazam1351"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 text-slate-300 hover:text-[#d97706] hover:bg-slate-800 rounded transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#d97706] inline-flex items-center justify-center"
              aria-label="Visit Rashid Azam on Instagram (@rashidazam1351)"
              title="Instagram: @rashidazam1351"
            >
              <Instagram className="w-4 h-4 text-slate-300 hover:text-[#d97706] transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center group py-1">
          <Image
            src="/images/branding/logo.png"
            alt="Rashid Azam logo"
            width={240}
            height={60}
            priority
            className="h-11 sm:h-13 md:h-14 w-auto object-contain group-hover:opacity-90 transition-opacity"
          />
        </Link>

        {/* Desktop Navigation: Home > About > Services ▼ > Blog ▼ > Locations ▼ > Contact */}
        <nav className="hidden md:flex items-center gap-7">
          {/* 1. Home */}
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${
              pathname === '/'
                ? 'text-[#b45309] font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Home
          </Link>

          {/* 2. About */}
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors ${
              pathname === '/about'
                ? 'text-[#b45309] font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            About
          </Link>

          {/* 3. Services (dropdown) */}
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <div className="inline-flex items-center gap-1">
              <Link
                href="/services"
                className={`text-sm font-medium transition-colors py-2 px-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d97706] rounded-md ${
                  pathname.startsWith('/services')
                    ? 'text-[#b45309] font-semibold'
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
                className="min-w-[44px] min-h-[44px] inline-flex items-center justify-center p-2 text-slate-500 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d97706] rounded-md transition-colors"
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesOpen ? 'rotate-180 text-[#b45309]' : ''
                  }`}
                />
              </button>
            </div>

            {/* Services Mega Dropdown Card */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[720px] max-w-[calc(100vw-2rem)] transition-all duration-200 z-50 ${
                servicesOpen
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-1 pointer-events-none'
              }`}
            >
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200/80 p-5">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
                  <div>
                    <span className="font-heading font-semibold text-sm text-slate-900">
                      Services
                    </span>
                    <p className="text-xs text-slate-500">
                      Commercial services to grow your search visibility and revenue.
                    </p>
                  </div>
                  <Link
                    href="/services"
                    onClick={() => setServicesOpen(false)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#b45309] hover:underline whitespace-nowrap"
                  >
                    <span>View All Services</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <div className="grid grid-cols-12 gap-5">
                  {/* Column 1: Core Services */}
                  <div className="col-span-5 space-y-2">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3">
                      Core Services
                    </p>
                    <div className="space-y-1">
                      {serviceMenuColumns[0].links.map((service) => {
                        const isActive = pathname === service.href;
                        const isSeoPillar = service.href === '/services/seo-services';
                        return (
                          <Link
                            key={service.href}
                            href={service.href}
                            onClick={() => setServicesOpen(false)}
                            className={`flex items-center justify-between px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                              isActive
                                ? 'bg-amber-50 text-[#b45309] font-semibold'
                                : 'text-slate-700 hover:bg-slate-50 hover:text-[#b45309]'
                            }`}
                          >
                            <span>{service.label}</span>
                            {isSeoPillar ? (
                              <span className="text-[10px] font-semibold text-[#b45309] bg-amber-100/70 px-1.5 py-0.5 rounded">
                                Pillar
                              </span>
                            ) : isActive ? (
                              <span className="w-2 h-2 rounded-full bg-[#d97706] shrink-0" />
                            ) : null}
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Columns 2 & 3: SEO Ecosystem Subservices */}
                  <div className="col-span-7 bg-amber-50/30 rounded-xl p-3.5 border border-amber-100/70">
                    <div className="flex items-center justify-between mb-3 px-1">
                      <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        SEO Hierarchy & Subservices
                      </span>
                      <span className="text-[10px] text-[#b45309] font-semibold">
                        Under SEO Services
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {/* SEO Services */}
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-[#b45309] px-2 mb-1.5">
                          SEO Services
                        </p>
                        <div className="space-y-0.5">
                          {serviceMenuColumns[1].links.map((service) => {
                            const isActive = pathname === service.href;
                            return (
                              <Link
                                key={service.href}
                                href={service.href}
                                onClick={() => setServicesOpen(false)}
                                className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                                  isActive
                                    ? 'bg-amber-100/80 text-[#b45309] font-semibold'
                                    : 'text-slate-700 hover:bg-white hover:text-[#b45309]'
                                }`}
                              >
                                <span>{service.label}</span>
                                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#d97706] shrink-0" />}
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      {/* Specialized SEO */}
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 px-2 mb-1.5">
                          Specialized SEO
                        </p>
                        <div className="space-y-0.5">
                          {serviceMenuColumns[2].links.map((service) => {
                            const isActive = pathname === service.href;
                            return (
                              <Link
                                key={service.href}
                                href={service.href}
                                onClick={() => setServicesOpen(false)}
                                className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                                  isActive
                                    ? 'bg-amber-100/80 text-[#b45309] font-semibold'
                                    : 'text-slate-700 hover:bg-white hover:text-[#b45309]'
                                }`}
                              >
                                <span>{service.label}</span>
                                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#d97706] shrink-0" />}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Blog (Mega Dropdown) */}
          <div
            ref={seoHubRef}
            className="relative"
            onMouseEnter={handleSeoEnter}
            onMouseLeave={handleSeoLeave}
          >
            <div className="inline-flex items-center gap-1">
              <Link
                href="/blog"
                className={`text-sm font-medium transition-colors py-2 px-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d97706] rounded-md ${
                  pathname.startsWith('/blog')
                    ? 'text-[#b45309] font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Blog
              </Link>
              <button
                type="button"
                onClick={() => setSeoHubOpen(!seoHubOpen)}
                aria-expanded={seoHubOpen}
                aria-haspopup="true"
                aria-label="Toggle Blog Menu"
                className="min-w-[44px] min-h-[44px] inline-flex items-center justify-center p-2 text-slate-500 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d97706] rounded-md transition-colors"
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    seoHubOpen ? 'rotate-180 text-[#b45309]' : ''
                  }`}
                />
              </button>
            </div>

            {/* Blog Mega Dropdown Card */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[680px] max-w-[calc(100vw-2rem)] transition-all duration-200 z-50 ${
                seoHubOpen
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-1 pointer-events-none'
              }`}
            >
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200/80 p-5">
                <div className="flex items-start sm:items-center justify-between gap-4 pb-3 mb-4 border-b border-gray-100">
                  <div className="min-w-0 pr-2">
                    <span className="font-heading font-semibold text-sm text-slate-900 block">
                      Blog & Insights
                    </span>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      SEO strategies, digital marketing insights, practical tutorials, and web development guides.
                    </p>
                  </div>
                  <Link
                    href="/blog"
                    onClick={() => setSeoHubOpen(false)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#b45309] hover:underline whitespace-nowrap shrink-0"
                  >
                    <span>View All Posts</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 px-1 pb-2">
                      Featured Posts
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {blogFeaturedPosts.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setSeoHubOpen(false)}
                            className={`flex items-start gap-3 p-3 rounded-xl transition-all group ${
                              isActive
                                ? 'bg-amber-50/80 border border-amber-200/80 shadow-2xs'
                                : 'bg-slate-50/60 hover:bg-amber-50/50 border border-slate-200/60 hover:border-amber-200'
                            }`}
                          >
                            <div className="p-2 rounded-lg bg-white border border-slate-200/80 group-hover:border-amber-300 shrink-0 mt-0.5 text-[#b45309]">
                              {item.icon}
                            </div>
                            <div className="min-w-0 flex-1">
                              <span className="font-heading font-semibold text-slate-900 group-hover:text-[#b45309] text-xs leading-snug block transition-colors">
                                {item.name}
                              </span>
                              <p className="text-[11px] text-[#b45309] font-medium mt-1">
                                {item.category}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 px-1 pb-2">
                      Browse by Topic
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {blogMenuCategories.map((cat) => (
                        <Link
                          key={cat.label}
                          href={cat.href}
                          onClick={() => setSeoHubOpen(false)}
                          className="text-xs font-medium text-slate-600 bg-slate-50 hover:bg-amber-50 hover:text-[#b45309] border border-slate-200/70 hover:border-amber-200 px-3 py-1.5 rounded-full transition-all"
                        >
                          {cat.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Locations (Categorized Mega Dropdown) */}
          <div
            ref={locationsRef}
            className="relative"
            onMouseEnter={handleLocationsEnter}
            onMouseLeave={handleLocationsLeave}
          >
            <div className="inline-flex items-center gap-1">
              <Link
                href="/locations"
                className={`text-sm font-medium transition-colors py-2 px-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d97706] rounded-md ${
                  pathname.startsWith('/locations')
                    ? 'text-[#b45309] font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Locations
              </Link>
              <button
                type="button"
                onClick={() => setLocationsOpen(!locationsOpen)}
                aria-expanded={locationsOpen}
                aria-haspopup="true"
                aria-label="Toggle Locations Menu"
                className="min-w-[44px] min-h-[44px] inline-flex items-center justify-center p-2 text-slate-500 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d97706] rounded-md transition-colors"
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    locationsOpen ? 'rotate-180 text-[#b45309]' : ''
                  }`}
                />
              </button>
            </div>

            {/* Structured Locations Dropdown Card */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[560px] max-w-[calc(100vw-2rem)] transition-all duration-200 z-50 ${
                locationsOpen
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-1 pointer-events-none'
              }`}
            >
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200/90 p-5 space-y-4">
                {/* Header title */}
                <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                  <span className="font-heading font-semibold text-xs text-slate-900 uppercase tracking-wider">
                    Location Directory & Markets
                  </span>
                  <span className="text-[11px] text-[#b45309] font-medium">9 Active Locations</span>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  {/* Left Column: INTERNATIONAL MARKETS */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block px-2">
                      International Markets
                    </span>
                    <div className="space-y-1">
                      {internationalLocations.map((loc) => {
                        const isActive = pathname === loc.href;
                        return (
                          <Link
                            key={loc.name}
                            href={loc.href}
                            onClick={() => setLocationsOpen(false)}
                            className={`flex flex-col px-3 py-2 rounded-lg transition-colors group ${
                              isActive ? 'bg-amber-50 text-[#b45309]' : 'hover:bg-slate-50'
                            }`}
                          >
                            <span className="font-heading font-semibold text-xs text-slate-900 group-hover:text-[#b45309] transition-colors flex items-center justify-between">
                              <span>{loc.name}</span>
                              <Globe className="w-3.5 h-3.5 text-[#b45309]" />
                            </span>
                            <span className="text-[10px] text-slate-500 mt-0.5">
                              {loc.description}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right Column: PAKISTAN CITIES */}
                  <div className="space-y-1.5 border-l border-gray-100 pl-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block px-2">
                      Pakistan Cities
                    </span>
                    <div className="space-y-1">
                      {pakistanLocations.map((loc) => {
                        const isActive = pathname === loc.href;
                        return (
                          <Link
                            key={loc.name}
                            href={loc.href}
                            onClick={() => setLocationsOpen(false)}
                            className={`flex flex-col px-3 py-1.5 rounded-lg transition-colors group ${
                              isActive ? 'bg-amber-50 text-[#b45309]' : 'hover:bg-slate-50'
                            }`}
                          >
                            <span className="font-heading font-semibold text-xs text-slate-900 group-hover:text-[#b45309] transition-colors flex items-center justify-between">
                              <span>{loc.name}, Pakistan</span>
                              <MapPin className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#b45309]" />
                            </span>
                            <span className="text-[10px] text-slate-500 mt-0.5">
                              {loc.description}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="border-t border-gray-100 pt-2">
                  <Link
                    href="/locations"
                    onClick={() => setLocationsOpen(false)}
                    className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-[#b45309] hover:bg-amber-50 transition-colors"
                  >
                    <span>All Locations Directory</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Primary CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#b45309] hover:bg-[#92400e] text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors shadow-xs"
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
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-4 pb-6 space-y-3 shadow-lg max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col space-y-2">
            {/* 1. Home */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center min-h-[44px] text-base font-medium px-3 py-2 rounded-md hover:bg-slate-50 transition-colors ${
                pathname === '/' ? 'text-[#b45309] font-semibold bg-amber-50/60' : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Home
            </Link>

            {/* 2. About */}
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center min-h-[44px] text-base font-medium px-3 py-2 rounded-md hover:bg-slate-50 transition-colors ${
                pathname === '/about' ? 'text-[#b45309] font-semibold bg-amber-50/60' : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              About
            </Link>

            {/* 3. Services Accordion */}
            <div className="space-y-1">
              <div className="flex items-center justify-between min-h-[44px] px-3 py-2 rounded-md hover:bg-slate-50">
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium transition-colors ${
                    pathname.startsWith('/services') ? 'text-[#b45309] font-semibold' : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  Services
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  aria-expanded={mobileServicesOpen}
                  aria-label="Expand Services Submenu"
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 text-slate-500 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d97706] rounded-md transition-colors"
                >
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      mobileServicesOpen ? 'rotate-180 text-[#b45309]' : ''
                    }`}
                  />
                </button>
              </div>

              {mobileServicesOpen && (
                <div className="pl-4 space-y-3 border-l-2 border-amber-500/40 my-1">
                  {serviceMenuColumns.map((col) => (
                    <div key={col.heading} className="space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 pt-1">
                        {col.heading}
                      </p>
                      {col.links.map((service) => {
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
                                ? 'text-[#b45309] font-semibold bg-amber-50'
                                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                            }`}
                          >
                            {service.label}
                          </Link>
                        );
                      })}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 4. Blog Accordion */}
            <div className="space-y-1">
              <div className="flex items-center justify-between min-h-[44px] px-3 py-2 rounded-md hover:bg-slate-50">
                <Link
                  href="/blog"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium transition-colors ${
                    pathname.startsWith('/blog') ? 'text-[#b45309] font-semibold' : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  Blog
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileSeoOpen(!mobileSeoOpen)}
                  aria-expanded={mobileSeoOpen}
                  aria-label="Expand Blog Submenu"
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 text-slate-500 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d97706] rounded-md transition-colors"
                >
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      mobileSeoOpen ? 'rotate-180 text-[#b45309]' : ''
                    }`}
                  />
                </button>
              </div>

              {mobileSeoOpen && (
                <div className="pl-4 space-y-1 border-l-2 border-amber-500/40 my-1">
                  <Link
                    href="/blog"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileSeoOpen(false);
                    }}
                    className="flex items-center min-h-[44px] px-3 py-2 text-sm font-semibold text-[#b45309] rounded-md hover:bg-amber-50 transition-colors"
                  >
                    View All Posts
                  </Link>
                  {blogFeaturedPosts.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileSeoOpen(false);
                        }}
                        className={`flex flex-col min-h-[44px] px-3 py-2 text-sm rounded-md transition-colors ${
                          isActive
                            ? 'text-[#b45309] font-semibold bg-amber-50'
                            : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                        }`}
                      >
                        <span className="font-medium text-xs text-slate-900">{item.name}</span>
                        <span className="text-[10px] text-[#b45309]">{item.category}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 5. Locations Mobile Accordion (Structured as requested in Phase 8) */}
            <div className="space-y-1">
              <div className="flex items-center justify-between min-h-[44px] px-3 py-2 rounded-md hover:bg-slate-50">
                <Link
                  href="/locations"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium transition-colors ${
                    pathname.startsWith('/locations') ? 'text-[#b45309] font-semibold' : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  Locations
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                  aria-expanded={mobileLocationsOpen}
                  aria-label="Expand Locations Submenu"
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 text-slate-500 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d97706] rounded-md transition-colors"
                >
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      mobileLocationsOpen ? 'rotate-180 text-[#b45309]' : ''
                    }`}
                  />
                </button>
              </div>

              {mobileLocationsOpen && (
                <div className="pl-3 space-y-3 border-l-2 border-amber-500/40 my-2">
                  {/* Pakistan Group */}
                  <div className="space-y-1">
                    <button
                      type="button"
                      onClick={() => setMobilePakistanOpen(!mobilePakistanOpen)}
                      className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500 px-3 py-1"
                    >
                      <span>Pakistan Cities</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobilePakistanOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobilePakistanOpen && (
                      <div className="pl-2 space-y-0.5">
                        {pakistanLocations.map((loc) => (
                          <Link
                            key={loc.name}
                            href={loc.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex flex-col min-h-[40px] px-3 py-1.5 text-xs rounded-md text-slate-700 hover:text-[#b45309] hover:bg-slate-50"
                          >
                            <span className="font-semibold">{loc.name}</span>
                            <span className="text-[10px] text-slate-500">{loc.description}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* International Group */}
                  <div className="space-y-1">
                    <button
                      type="button"
                      onClick={() => setMobileInternationalOpen(!mobileInternationalOpen)}
                      className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500 px-3 py-1"
                    >
                      <span>International Markets</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileInternationalOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileInternationalOpen && (
                      <div className="pl-2 space-y-0.5">
                        {internationalLocations.map((loc) => (
                          <Link
                            key={loc.name}
                            href={loc.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex flex-col min-h-[40px] px-3 py-1.5 text-xs rounded-md text-slate-700 hover:text-[#b45309] hover:bg-slate-50"
                          >
                            <span className="font-semibold">{loc.name}</span>
                            <span className="text-[10px] text-slate-500">{loc.description}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* All Locations Footer */}
                  <Link
                    href="/locations"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between min-h-[44px] px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#b45309] bg-amber-50 rounded-md"
                  >
                    <span>All Locations Directory</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>
          </nav>

          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex justify-center items-center gap-2 bg-[#b45309] text-white text-sm font-medium px-5 py-3 rounded-lg min-h-[44px]"
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
