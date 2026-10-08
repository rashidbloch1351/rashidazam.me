'use client';

import React from 'react';
import { MessageSquare } from 'lucide-react';

export function WhatsAppButton({ prefilledText = "Hi Rashid, I visited your website and would like to discuss a project." }: { prefilledText?: string }) {
  const whatsappUrl = `https://wa.me/923476931351?text=${encodeURIComponent(prefilledText)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with Rashid Azam"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-lg hover:scale-110 transition-all duration-200 flex items-center justify-center group"
    >
      <MessageSquare className="w-6 h-6 fill-current" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out text-sm font-medium">
        WhatsApp
      </span>
    </a>
  );
}
