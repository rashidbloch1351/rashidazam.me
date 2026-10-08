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
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#d97706] bg-[#d97706]/10 px-3 py-1 rounded-full border border-[#d97706]/20">
          {kicker}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#f3f4f6] tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-base text-[#9ca3af] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
