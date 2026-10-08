import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '@/data/projectsData';

export function ProjectCard({ project, categorySlug }: { project: ProjectItem; categorySlug: string }) {
  return (
    <div className="bg-[#17181c] border border-[#272a30] rounded-xl overflow-hidden flex flex-col justify-between group hover:border-[#374151] transition-all">
      <div className="space-y-4">
        {/* Project Screenshot Container */}
        <div className="relative aspect-video w-full overflow-hidden bg-[#0f1012]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-6 space-y-3">
          {/* Tags */}
          <div className="flex items-center gap-2 flex-wrap">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium bg-[#202228] text-[#9ca3af] px-2.5 py-0.5 rounded-md border border-[#272a30]"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-lg font-heading font-semibold text-[#f3f4f6]">
            {project.title}
          </h3>

          <p className="text-xs text-[#9ca3af] leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>
      </div>

      <div className="p-6 pt-0 flex items-center justify-between gap-4 border-t border-[#272a30]/50 mt-4">
        <Link
          href={`/projects/${categorySlug}`}
          className="text-xs font-medium text-[#9ca3af] hover:text-[#f3f4f6] inline-flex items-center gap-1"
        >
          <span>Category Details</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>

        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-[#d97706] hover:text-[#b45309] inline-flex items-center gap-1"
          >
            <span>Visit Live Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  );
}
