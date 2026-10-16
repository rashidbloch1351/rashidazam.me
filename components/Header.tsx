'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Menu, X, ArrowUpRight, ChevronDown, ArrowRight, Search, MapPin, 
  Code, ShoppingCart, Globe, Zap, FileSearch, ShieldAlert, Cpu, 
  Smartphone, Building2, Phone, Mail, Linkedin, Github, Youtube, Instagram, Facebook 
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
        { label: 'Answer Engine Optimization', href: '/services/answer-engine-optimization' },
      ],
    },
  ];


  const seoHubItems = [
    {
      name: 'Technical SEO Audit Guide',
      description: 'Step-by-step diagnostic framework',
      href: '/seo/technical-seo-audit-guide',
      icon: <ShieldAlert className="w-4 h-4 text-[#b45309]" />,
    },
    {
      name: 'Local SEO Guide',
      description: 'Map Pack & Google Business Profile',
      href: '/seo/local-seo-pakistan-uae',
      icon: <MapPin className="w-4 h-4 text-[#b45309]" />,
    },
    {
      name: 'On-Page SEO & Schema',
      description: 'Intent, structure, internal links',
      href: '/seo/on-page-seo-schema-markup',
      icon: <Search className="w-4 h-4 text-[#b45309]" />,
    },
    {
      name: 'Keyword & Intent Guide',
      description: 'Search intent & keyword research',
      href: '/seo/keyword-research-intent',
      icon: <Globe className="w-4 h-4 text-[#b45309]" />,
    },
    {
      name: 'WordPress SEO Guide',
      description: 'Speed, plugins, architecture',
      href: '/seo/wordpress-seo-guide',
      icon: <Zap className="w-4 h-4 text-[#b45309]" />,
    },
    {
      name: 'E-Commerce SEO Guide',
      description: 'Category & product pages',
      href: '/seo/ecommerce-seo-guide',
      icon: <ShoppingCart className="w-4 h-4 text-[#b45309]" />,
    },
    {
      name: 'Answer Engine Optimization Guide',
      description: 'ChatGPT & Perplexity visibility',
      href: '/seo/answer-engine-optimization-guide',
      icon: <Smartphone className="w-4 h-4 text-[#b45309]" />,
    },
  ];

  // Locations Grouped Structure for Dropdown
  const globalLocations = [
    { name: 'Worldwide', href: '/locations/worldwide', description: 'Global remote engagements' },
  ];

  const pakistanLocations = [
    { name: 'Pakistan (All)', href: '/locations', description: 'National search & web builds' },
    { name: 'Lahore', href: '/locations/lahore', description: 'Commercial core & local SEO' },
    { name: 'Islamabad', href: '/locations/islamabad', description: 'Capital territory & technical SEO' },
    { name: 'Karachi', href: '/locations/karachi', description: 'Financial capital & e-commerce' },
    { name: 'Faisalabad', href: '/locations/faisalabad', description: 'Industrial hub & B2B growth' },
    { name: 'Multan', href: '/locations/multan', description: 'Regional center & local search' },
  ];

  const internationalLocations = [
    { name: 'USA', href: '/locations/usa', description: 'North America remote SEO & builds' },
    { name: 'UK', href: '/locations/uk', description: 'United Kingdom technical SEO' },
    { name: 'Germany', href: '/locations/germany', description: 'European Union international SEO' },
    { name: 'UAE', href: '/locations/uae', description: 'Dubai & GCC market optimization' },
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
              href="mailto:rashidbloch1351@gmail.com"
              className="inline-flex items-center gap-1.5 hover:text-[#d97706] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#d97706] rounded px-1 py-0.5"
              aria-label="Email Rashid Azam at rashidbloch1351@gmail.com"
            >
              <Mail className="w-3.5 h-3.5 text-[#d97706]" />
              <span className="font-medium truncate max-w-[200px] sm:max-w-none">rashidbloch1351@gmail.com</span>
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
            width={200}
            height={48}
            priority
            className="h-10 sm:h-11 w-auto object-contain group-hover:opacity-90 transition-opacity"
          />
        </Link>

        {/* Desktop Navigation: Home > About > Services ▼ > SEO Hub ▼ > Locations ▼ > Contact */}
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
              className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[700px] max-w-[calc(100vw-2rem)] transition-all duration-200 z-50 ${
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

                <div className="grid grid-cols-3 gap-6">
                  {serviceMenuColumns.map((col) => (
                    <div key={col.heading}>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 mb-2">
                        {col.heading}
                      </p>
                      <div className="space-y-1">
                        {col.links.map((service) => {
                          const isActive = pathname === service.href;
                          return (
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={() => setServicesOpen(false)}
                              className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                                isActive
                                  ? 'bg-amber-50 text-[#b45309] font-semibold'
                                  : 'text-slate-700 hover:bg-slate-50 hover:text-[#b45309]'
                              }`}
                            >
                              <span>{service.label}</span>
                              {isActive && <span className="w-2 h-2 rounded-full bg-[#d97706] shrink-0" />}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 4. SEO Hub (Mega Dropdown) */}
          <div
            ref={seoHubRef}
            className="relative"
            onMouseEnter={handleSeoEnter}
            onMouseLeave={handleSeoLeave}
          >
            <div className="inline-flex items-center gap-1">
              <Link
                href="/seo"
                className={`text-sm font-medium transition-colors py-2 px-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d97706] rounded-md ${
                  pathname.startsWith('/seo')
                    ? 'text-[#b45309] font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                SEO Hub
              </Link>
              <button
                type="button"
                onClick={() => setSeoHubOpen(!seoHubOpen)}
                aria-expanded={seoHubOpen}
                aria-haspopup="true"
                aria-label="Toggle SEO Hub Menu"
                className="min-w-[44px] min-h-[44px] inline-flex items-center justify-center p-2 text-slate-500 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d97706] rounded-md transition-colors"
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    seoHubOpen ? 'rotate-180 text-[#b45309]' : ''
                  }`}
                />
              </button>
            </div>

            {/* SEO Hub Mega Dropdown Card */}
            <div
              className={`absolute -left-12 top-full pt-2 w-[620px] transition-all duration-200 z-50 ${
                seoHubOpen
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-1 pointer-events-none'
              }`}
            >
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200/80 p-5">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100">
                  <div>
                    <span className="font-heading font-semibold text-sm text-slate-900">
                      SEO Knowledge Hub
                    </span>
                    <p className="text-xs text-slate-500">
                      Free educational guides, tutorials, and actionable SEO frameworks.
                    </p>
                  </div>
                  <Link
                    href="/seo"
                    onClick={() => setSeoHubOpen(false)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#b45309] hover:underline"
                  >
                    <span>Overview</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {seoHubItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setSeoHubOpen(false)}
                        className={`flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                          isActive
                            ? 'bg-amber-50/80 border border-amber-200/60'
                            : 'hover:bg-slate-50 border border-transparent'
                        }`}
                      >
                        <div className="p-2 rounded-lg bg-amber-50 border border-amber-200/60 shrink-0 mt-0.5">
                          {item.icon}
                        </div>
                        <div className="min-w-0">
                          <span className="font-heading font-semibold text-slate-900 text-xs truncate">
                            {item.name}
                          </span>
                          <p className="text-[11px] text-slate-500 truncate mt-0.5">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
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

            {/* Structured Locations Dropdown Card (Matching Phase 7 visual direction) */}
            <div
              className={`absolute -left-20 top-full pt-2 w-[560px] transition-all duration-200 z-50 ${
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
                  <span className="text-[11px] text-[#b45309] font-medium">11 Active Locations</span>
                </div>

                <div className="grid grid-cols-12 gap-5">
                  {/* Left Column: GLOBAL & INTERNATIONAL */}
                  <div className="col-span-5 space-y-4">
                    {/* Group: GLOBAL */}
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block px-2">
                        Global
                      </span>
                      {globalLocations.map((loc) => {
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
                            <span className="font-heading font-bold text-xs text-slate-900 group-hover:text-[#b45309] transition-colors flex items-center justify-between">
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

                    {/* Group: INTERNATIONAL */}
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block px-2">
                        International
                      </span>
                      {internationalLocations.map((loc) => {
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
                            <span className="font-heading font-semibold text-xs text-slate-900 group-hover:text-[#b45309] transition-colors">
                              {loc.name}
                            </span>
                            <span className="text-[10px] text-slate-500">
                              {loc.description}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right Column: PAKISTAN & CITIES */}
                  <div className="col-span-7 space-y-1 border-l border-gray-100 pl-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block px-2">
                      Pakistan Cities & Market
                    </span>
                    <div className="grid grid-cols-1 gap-0.5">
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
                              <span>{loc.name}</span>
                              {loc.name.includes('All') && (
                                <span className="text-[9px] bg-amber-100 text-[#b45309] font-bold px-1.5 py-0.5 rounded">
                                  Main Hub
                                </span>
                              )}
                            </span>
                            <span className="text-[10px] text-slate-500">
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

            {/* 4. SEO Hub Accordion */}
            <div className="space-y-1">
              <div className="flex items-center justify-between min-h-[44px] px-3 py-2 rounded-md hover:bg-slate-50">
                <Link
                  href="/seo"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium transition-colors ${
                    pathname.startsWith('/seo') ? 'text-[#b45309] font-semibold' : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  SEO Hub
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileSeoOpen(!mobileSeoOpen)}
                  aria-expanded={mobileSeoOpen}
                  aria-label="Expand SEO Hub Submenu"
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
                  {seoHubItems.map((item) => {
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
                        <span className="text-[10px] text-slate-500">{item.description}</span>
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
                  {/* Worldwide */}
                  <Link
                    href="/locations/worldwide"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex flex-col min-h-[44px] px-3 py-2 text-sm rounded-md bg-amber-50/50 text-[#b45309]"
                  >
                    <span className="font-bold text-xs">Worldwide Remote</span>
                    <span className="text-[10px] text-slate-500">Global remote engagements</span>
                  </Link>

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
