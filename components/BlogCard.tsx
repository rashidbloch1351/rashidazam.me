import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Clock, Calendar } from 'lucide-react';
import { BlogPost } from '@/data/blogPosts';

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-amber-400 hover:shadow-md transition-all">
      <div className="space-y-4">
        {/* Blog Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 border-b border-gray-100">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-6 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="bg-amber-50 text-[#b45309] font-semibold px-2.5 py-0.5 rounded-full border border-amber-200/60">
              {post.category}
            </span>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-3 h-3 text-slate-400" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3 h-3 text-slate-400" />
                {post.readTime}
              </span>
            </div>
          </div>

          <h3 className="text-lg font-heading font-semibold text-slate-900 group-hover:text-[#b45309] transition-colors line-clamp-2">
            <Link href={`/blog/${post.id}`}>
              {post.title}
            </Link>
          </h3>

          <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </div>
      </div>

      <div className="p-6 pt-0">
        <Link
          href={`/blog/${post.id}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#b45309] hover:text-[#b45309] group-hover:translate-x-1 transition-transform"
        >
          <span>Read Article</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
