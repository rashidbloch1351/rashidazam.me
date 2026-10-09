import React from 'react';
import { Sparkles } from 'lucide-react';

export function QuickAnswer({ title = "Quick Answer", text }: { title?: string; text: string }) {
  return (
    <div className="bg-amber-50/80 border-l-4 border-[#d97706] border-y border-r border-amber-200/80 p-6 rounded-r-2xl my-8 space-y-2 shadow-2xs">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#d97706]">
        <Sparkles className="w-4 h-4" />
        <span>{title}</span>
      </div>
      <p className="text-sm sm:text-base text-slate-900 font-medium leading-relaxed">
        {text}
      </p>
    </div>
  );
}
