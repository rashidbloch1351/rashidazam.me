import React from 'react';
import { Sparkles } from 'lucide-react';

export function QuickAnswer({ title = "Quick Answer", text }: { title?: string; text: string }) {
  return (
    <div className="bg-[#17181c] border-l-4 border-[#d97706] border-y border-r border-[#272a30] p-6 rounded-r-xl my-8 space-y-2">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d97706]">
        <Sparkles className="w-4 h-4" />
        <span>{title}</span>
      </div>
      <p className="text-sm sm:text-base text-[#f3f4f6] font-medium leading-relaxed">
        {text}
      </p>
    </div>
  );
}
