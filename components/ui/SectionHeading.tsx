import React from 'react';

export function SectionHeading({
  kicker,
  title,
  description,
  align = 'left',
  className = '',
}: {
  kicker?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}) {
  return (
    <div className={`space-y-3 ${align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {kicker && (
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#b45309] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/60">
          {kicker}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-base text-slate-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
