import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '@/data/projectsData';

export function ProjectCard({ project, categorySlug }: { project: ProjectItem; categorySlug: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-amber-400 hover:shadow-md transition-all">
      <div className="space-y-4">
        {/* Project Screenshot Container */}
        <div className="relative aspect-video w-full overflow-hidden bg-slate-100 border-b border-gray-100">
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
                className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md border border-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-lg font-heading font-semibold text-slate-900 group-hover:text-[#d97706] transition-colors">
            {project.title}
          </h3>

          <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>
      </div>

      <div className="p-6 pt-0 flex items-center justify-between gap-4 border-t border-gray-100 mt-4">
        <Link
          href={`/projects/${categorySlug}`}
          className="text-xs font-semibold text-slate-600 hover:text-slate-900 inline-flex items-center gap-1"
        >
          <span>Category Details</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>

        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-[#d97706] hover:text-[#b45309] inline-flex items-center gap-1"
          >
            <span>Visit Live Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  );
}
