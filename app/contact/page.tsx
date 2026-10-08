'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MessageSquare, MapPin, Send, CheckCircle2, AlertCircle, Globe } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { submitContactForm, ContactFormState } from '@/app/actions/contact';

export default function ContactPage() {
  const [formState, setFormState] = useState<ContactFormState>({
    success: false,
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const result = await submitContactForm(formState, formData);
    setFormState(result);
    setIsSubmitting(false);

    if (result.success) {
      (e.target as HTMLFormElement).reset();
    }
  };

  return (
    <div className="py-12 space-y-16 bg-white">
      <Container>
        <Breadcrumbs items={[{ label: 'Contact' }]} />

        <div className="max-w-3xl space-y-4 pt-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#d97706] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/60">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-slate-900 tracking-tight">
            Let&apos;s Build & Rank Your Business
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Have a question about custom Next.js web development, technical SEO audits, or YouTube automation? Fill out the form below or reach out directly via WhatsApp.
          </p>
        </div>
      </Container>

      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Details & Direct CTAs */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white border border-gray-200 p-8 rounded-2xl space-y-6 shadow-xs">
                <h2 className="text-2xl font-heading font-bold text-slate-900">
                  Direct Contact Information
                </h2>

                <div className="space-y-5 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-[#d97706] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 font-medium block">Email Me Directly</span>
                      <a href="mailto:rashidbloch1351@gmail.com" className="text-slate-900 hover:text-[#d97706] font-semibold transition-colors">
                        rashidbloch1351@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#25D366] shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 font-medium block">Instant WhatsApp Chat</span>
                      <a
                        href="https://wa.me/923476931351?text=Hi%20Rashid%2C%20I%20would%20like%20to%20discuss%20a%20project."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-900 hover:text-[#25D366] font-semibold transition-colors"
                      >
                        +92 347 6931351
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-[#d97706] shrink-0">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 font-medium block">Global Reach</span>
                      <span className="text-slate-900 font-semibold">
                        Serving Clients, Startups & Agencies Worldwide
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Booking Callout */}
              <div className="bg-slate-50 border border-gray-200 p-6 rounded-2xl space-y-3">
                <h3 className="font-heading font-semibold text-lg text-slate-900">
                  Response Guarantee
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  I review all project inquiries personally. Expect a detailed response within 24 hours during working days.
                </p>
              </div>
            </div>

            {/* Lead Capture Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-gray-200 p-8 sm:p-10 rounded-2xl space-y-6 shadow-xs">
                <h2 className="text-2xl font-heading font-bold text-slate-900">
                  Send a Message
                </h2>

                {formState.message && (
                  <div
                    className={`p-4 rounded-xl flex items-start gap-3 border ${
                      formState.success
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                        : 'bg-red-50 border-red-200 text-red-700'
                    }`}
                  >
                    {formState.success ? (
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    )}
                    <span className="text-sm">{formState.message}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field */}
                  <div className="hidden">
                    <label htmlFor="website_hp">Do not fill this</label>
                    <input type="text" id="website_hp" name="website_hp" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-600">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="w-full bg-slate-50 border border-gray-200 focus:border-[#d97706] focus:bg-white focus:outline-none text-slate-900 px-4 py-3 rounded-xl text-base sm:text-sm transition-colors"
                      />
                      {formState.errors?.name && (
                        <p className="text-xs text-red-500">{formState.errors.name}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-600">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        className="w-full bg-slate-50 border border-gray-200 focus:border-[#d97706] focus:bg-white focus:outline-none text-slate-900 px-4 py-3 rounded-xl text-base sm:text-sm transition-colors"
                      />
                      {formState.errors?.email && (
                        <p className="text-xs text-red-500">{formState.errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-slate-600">
                        Primary Service Needed *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        defaultValue=""
                        className="w-full bg-slate-50 border border-gray-200 focus:border-[#d97706] focus:bg-white focus:outline-none text-slate-900 px-4 py-3 rounded-xl text-base sm:text-sm transition-colors"
                      >
                        <option value="" disabled>Select a service...</option>
                        <option value="Technical SEO Services">Technical & Local SEO Services</option>
                        <option value="Web Development">Full-Stack Web Development (Next.js / WP)</option>
                        <option value="YouTube Automation">YouTube Automation & Channel Growth</option>
                        <option value="Digital Marketing">Digital Marketing & Paid Ads (Meta/Google)</option>
                        <option value="AI Automation">AI Automation & Custom Chatbots</option>
                        <option value="Content Writing">SEO Content Writing & Copywriting</option>
                      </select>
                      {formState.errors?.service && (
                        <p className="text-xs text-red-500">{formState.errors.service}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="budget" className="block text-xs font-semibold uppercase tracking-wider text-slate-600">
                        Estimated Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        defaultValue=""
                        className="w-full bg-slate-50 border border-gray-200 focus:border-[#d97706] focus:bg-white focus:outline-none text-slate-900 px-4 py-3 rounded-xl text-base sm:text-sm transition-colors"
                      >
                        <option value="" disabled>Select budget range...</option>
                        <option value="Under $500">Under $500</option>
                        <option value="$500 - $1,500">$500 - $1,500</option>
                        <option value="$1,500 - $3,000">$1,500 - $3,000</option>
                        <option value="$3,000+">$3,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-600">
                      Project Details & Goals *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your website URL, business goals, and timeline..."
                      className="w-full bg-slate-50 border border-gray-200 focus:border-[#d97706] focus:bg-white focus:outline-none text-slate-900 px-4 py-3 rounded-xl text-base sm:text-sm transition-colors resize-none"
                    />
                    {formState.errors?.message && (
                      <p className="text-xs text-red-500">{formState.errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#d97706] hover:bg-[#b45309] disabled:opacity-50 text-white font-semibold px-6 py-3.5 rounded-xl transition-all shadow-md min-h-[44px]"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
