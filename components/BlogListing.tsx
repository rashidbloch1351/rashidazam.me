'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  ArrowUpRight,
  Search,
  CalendarDays,
  Clock3,
  ShieldAlert,
  MapPin,
  FileText,
  KeyRound,
  Zap,
  ShoppingCart,
  Bot,
} from 'lucide-react';
import { blogPosts, getActiveCategories, featuredPost, type BlogPost } from '@/data/blog';

const categoryIcons: Record<string, React.ReactNode> = {
  'technical-seo': <ShieldAlert className="w-5 h-5" />,
  'local-seo': <MapPin className="w-5 h-5" />,
  'on-page-seo': <FileText className="w-5 h-5" />,
  'keyword-research': <KeyRound className="w-5 h-5" />,
  'wordpress-seo': <Zap className="w-5 h-5" />,
  'ecommerce-seo': <ShoppingCart className="w-5 h-5" />,
  'ai-automation': <Bot className="w-5 h-5" />,
};

function PostMeta({ post }: { post: BlogPost }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
      <span className="inline-flex items-center gap-1.5">
        <CalendarDays className="w-3.5 h-3.5" />
        {post.publishedLabel}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Clock3 className="w-3.5 h-3.5" />
        {post.readingTimeMinutes} min read
      </span>
    </div>
  );
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="bg-white border border-slate-200/90 hover:border-amber-400/60 rounded-2xl overflow-hidden group transition-all shadow-2xs hover:shadow-xs flex flex-col"
    >
      <div className="bg-gradient-to-br from-amber-50 to-slate-50 border-b border-slate-100 p-5 flex items-center justify-between">
        <div className="w-11 h-11 rounded-xl bg-white border border-amber-200/70 flex items-center justify-center text-[#b45309] shadow-2xs">
          {categoryIcons[post.categorySlug] ?? <Search className="w-5 h-5" />}
        </div>
        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#b45309] bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60">
          {post.category}
        </span>
      </div>
      <div className="p-6 space-y-3 flex flex-col flex-1">
        <h3 className="text-lg font-heading font-semibold text-slate-900 group-hover:text-[#b45309] transition-colors leading-snug">
          {post.title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 flex-1">
          {post.metaDescription}
        </p>
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <PostMeta post={post} />
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#b45309] group-hover:translate-x-0.5 transition-transform">
            Read Article
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function BlogListing() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') ?? 'all';
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [query, setQuery] = useState('');
  const categories = getActiveCategories();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === 'all' || post.categorySlug === activeCategory;
      const matchesQuery =
        q.length === 0 ||
        post.title.toLowerCase().includes(q) ||
        post.metaDescription.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const featured = featuredPost && activeCategory === 'all' && query.trim() === ''
    ? featuredPost
    : undefined;
  const gridPosts = featured ? filtered.filter((p) => p.slug !== featured.slug) : filtered;

  return (
    <div className="space-y-12">
      {/* Search */}
      <div className="max-w-xl">
        <label htmlFor="blog-search" className="sr-only">
          Search articles
        </label>
        <div className="relative">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          <input
            id="blog-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles — e.g. schema, local SEO, audits…"
            className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
          />
        </div>
      </div>

      {/* Featured article */}
      {featured && (
        <section aria-label="Featured article">
          <Link
            href={`/blog/${featured.slug}`}
            className="grid grid-cols-1 lg:grid-cols-5 gap-0 bg-slate-900 rounded-3xl overflow-hidden group shadow-lg"
          >
            <div className="lg:col-span-3 p-8 sm:p-10 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400">
                  Featured
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-300 bg-white/10 px-2.5 py-1 rounded-full">
                  {featured.category}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white leading-tight group-hover:text-amber-200 transition-colors">
                {featured.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed line-clamp-3">
                {featured.metaDescription}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="w-3.5 h-3.5" />
                  {featured.publishedLabel}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 className="w-3.5 h-3.5" />
                  {featured.readingTimeMinutes} min read
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400 group-hover:translate-x-1 transition-transform pt-1">
                Read Article
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
            <div className="lg:col-span-2 bg-gradient-to-br from-amber-500/20 via-amber-400/10 to-transparent flex items-center justify-center p-10 min-h-[220px]">
              <div className="w-20 h-20 rounded-3xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
                {categoryIcons[featured.categorySlug] ?? <Search className="w-8 h-8" />}
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Category filter */}
      <nav aria-label="Blog categories">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            aria-pressed={activeCategory === 'all'}
            className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
              activeCategory === 'all'
                ? 'bg-slate-900 text-white border-slate-900'
                : 'bg-white text-slate-600 border-slate-200 hover:border-amber-400 hover:text-slate-900'
            }`}
          >
            All Posts
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              type="button"
              onClick={() => setActiveCategory(cat.slug)}
              aria-pressed={activeCategory === cat.slug}
              title={cat.description}
              className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                activeCategory === cat.slug
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-amber-400 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Articles grid */}
      <section aria-label="Articles">
        {gridPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gridPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 space-y-3">
            <p className="text-lg font-heading font-semibold text-slate-900">
              No articles found
            </p>
            <p className="text-sm text-slate-600">
              Try a different search term or category.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setActiveCategory('all');
              }}
              className="text-sm font-semibold text-[#b45309] hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
