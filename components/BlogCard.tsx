import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Clock, Calendar } from 'lucide-react';
import { BlogPost } from '@/data/blogPosts';

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="bg-[#17181c] border border-[#272a30] rounded-xl overflow-hidden flex flex-col justify-between group hover:border-[#374151] transition-all">
      <div className="space-y-4">
        {/* Blog Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0f1012]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-6 space-y-3">
          <div className="flex items-center justify-between text-xs text-[#6b7280]">
            <span className="bg-[#d97706]/10 text-[#d97706] font-medium px-2.5 py-0.5 rounded-full border border-[#d97706]/20">
              {post.category}
            </span>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
            </div>
          </div>

          <h3 className="text-lg font-heading font-semibold text-[#f3f4f6] group-hover:text-[#d97706] transition-colors line-clamp-2">
            <Link href={`/blog/${post.id}`}>
              {post.title}
            </Link>
          </h3>

          <p className="text-xs text-[#9ca3af] leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </div>
      </div>

      <div className="p-6 pt-0">
        <Link
          href={`/blog/${post.id}`}
          className="inline-flex items-center gap-1 text-xs font-medium text-[#d97706] hover:text-[#b45309] group-hover:translate-x-1 transition-transform"
        >
          <span>Read Article</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
