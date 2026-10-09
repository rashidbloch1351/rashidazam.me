'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Star, ChevronDown, ChevronUp } from 'lucide-react';
import { Testimonial } from '@/data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
  onInteraction?: () => void;
}

export function TestimonialCard({ testimonial, className = '', onInteraction }: TestimonialCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const characterLimit = 115;
  const isLongText = testimonial.text.length > characterLimit;

  const displayText = isExpanded || !isLongText
    ? testimonial.text
    : `${testimonial.text.slice(0, characterLimit)}...`;

  const initials = testimonial.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onInteraction) onInteraction();
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`bg-white border border-slate-200/90 rounded-xl p-4 sm:p-5 shadow-2xs hover:shadow-xs transition-all duration-150 flex flex-col justify-between h-full ${className}`}
    >
      <div>
        {/* Header Row: Profile photo, Name, Date, Google G logo */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-200 bg-slate-100 shrink-0 flex items-center justify-center">
              {!imgError ? (
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                  unoptimized
                />
              ) : (
                <span className="font-heading font-bold text-slate-600 text-xs">
                  {initials}
                </span>
              )}
            </div>

            <div className="min-w-0">
              <h4 className="font-heading font-semibold text-slate-900 text-sm truncate leading-snug">
                {testimonial.name}
              </h4>
              <p className="text-[11px] text-slate-500 truncate mt-0.5">
                {testimonial.date} &bull; {testimonial.location}, {testimonial.country}
              </p>
            </div>
          </div>

          {/* Official Google G Logo (No tooltip) */}
          <div className="shrink-0 pt-0.5">
            <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
          </div>
        </div>

        {/* Stars Row + Clean Blue Verification Check Icon */}
        <div className="flex items-center gap-1.5 mb-2.5">
          <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="w-3.5 h-3.5 text-[#F4B400] fill-[#F4B400]"
              />
            ))}
          </div>
          {/* Simple Blue Circle with White Checkmark Icon (No black tooltip!) */}
          <span className="w-3.5 h-3.5 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center shrink-0">
            <svg className="w-2 h-2 fill-none stroke-current stroke-[2.5]" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
        </div>

        {/* Review Text */}
        <p className="text-xs text-slate-700 leading-relaxed font-normal">
          {displayText}
          {isLongText && (
            <button
              type="button"
              onClick={handleToggle}
              className="inline-flex items-center gap-0.5 ml-1 text-xs font-semibold text-slate-900 hover:text-[#d97706] focus:outline-none cursor-pointer"
            >
              <span>{isExpanded ? 'LESS' : 'READ MORE'}</span>
              {isExpanded ? (
                <ChevronUp className="w-3 h-3 inline" />
              ) : (
                <ChevronDown className="w-3 h-3 inline" />
              )}
            </button>
          )}
        </p>
      </div>
    </div>
  );
}
