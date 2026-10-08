'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="space-y-4">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-[#17181c] border border-[#272a30] rounded-xl overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-heading font-semibold text-base text-[#f3f4f6] hover:text-[#d97706] transition-colors focus:outline-none"
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#d97706] transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-6 pb-6 text-sm text-[#9ca3af] leading-relaxed border-t border-[#272a30]/50 pt-4">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
