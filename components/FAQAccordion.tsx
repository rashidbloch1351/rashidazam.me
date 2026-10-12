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
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all shadow-xs"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-heading font-semibold text-base text-slate-900 hover:text-[#b45309] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#b45309] transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-gray-100 pt-4">
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
