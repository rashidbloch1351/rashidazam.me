'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TestimonialCard } from '@/components/TestimonialCard';
import { testimonialsData } from '@/data/testimonials';

interface TestimonialsProps {
  title?: string;
  kicker?: string;
  description?: string;
  className?: string;
}

export function Testimonials({
  title = 'Client Reviews & Feedback',
  kicker = 'Google Reviews',
  description = 'Verified feedback from client engagements across web development, technical SEO, e-commerce, and AI automation worldwide.',
  className = '',
}: TestimonialsProps) {
  const [cardsPerView, setCardsPerView] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoSlideTimerRef = useRef<NodeJS.Timeout | null>(null);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Touch Swipe Refs
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Determine responsive cards per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalCards = testimonialsData.length; // 20
  const maxIndex = Math.max(0, totalCards - cardsPerView);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev + cardsPerView >= totalCards) {
        return 0;
      }
      return Math.min(prev + cardsPerView, maxIndex);
    });
  }, [cardsPerView, totalCards, maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return Math.floor((totalCards - 1) / cardsPerView) * cardsPerView;
      }
      return Math.max(0, prev - cardsPerView);
    });
  }, [cardsPerView, totalCards]);

  // Pause auto-slide temporarily when user interacts
  const handleUserInteraction = useCallback(() => {
    setIsPaused(true);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 7000); // Resume auto-sliding 7 seconds after interaction ends
  }, []);

  // Auto-slide effect (5-6 second interval)
  useEffect(() => {
    if (isPaused) return;

    autoSlideTimerRef.current = setInterval(() => {
      handleNext();
    }, 6000);

    return () => {
      if (autoSlideTimerRef.current) clearInterval(autoSlideTimerRef.current);
    };
  }, [isPaused, handleNext]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    handleUserInteraction();
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isSwipeLeft = distance > 40;
    const isSwipeRight = distance < -40;

    if (isSwipeLeft) {
      handleNext();
    } else if (isSwipeRight) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Pagination Dot Calculation
  const totalPages = Math.ceil(totalCards / cardsPerView);
  const activePage = Math.floor(currentIndex / cardsPerView);

  const visibleTestimonials = testimonialsData.slice(
    currentIndex,
    currentIndex + cardsPerView
  );

  return (
    <section className={`py-16 sm:py-20 bg-slate-50/60 border-y border-slate-200/60 ${className}`}>
      <Container>
        {/* Section Header with Overall Google Rating Badge & Manual Nav Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <SectionHeading
            kicker={kicker}
            title={title}
            description={description}
            align="left"
            className="mb-0 max-w-2xl"
          />

          <div className="flex items-center gap-4 shrink-0">
            {/* Overall Google Rating Summary Badge */}
            <div className="bg-white border border-slate-200/90 rounded-xl px-4 py-2.5 shadow-2xs flex items-center gap-3">
              <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-heading font-bold text-slate-900 text-sm">5.0</span>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-[#F4B400] fill-[#F4B400]" />
                    ))}
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                  20 Verified Reviews
                </p>
              </div>
            </div>

            {/* Previous / Next Manual Navigation Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  handleUserInteraction();
                  handlePrev();
                }}
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-amber-400 hover:bg-amber-50/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d97706]"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => {
                  handleUserInteraction();
                  handleNext();
                }}
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-amber-400 hover:bg-amber-50/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d97706]"
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial Cards Slider Viewport */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={handleUserInteraction}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch transition-all duration-300">
            {visibleTestimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                onInteraction={handleUserInteraction}
              />
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, pageIdx) => {
            const isActive = pageIdx === activePage;
            return (
              <button
                key={pageIdx}
                type="button"
                onClick={() => {
                  handleUserInteraction();
                  setCurrentIndex(pageIdx * cardsPerView);
                }}
                className={`transition-all rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d97706] ${
                  isActive
                    ? 'w-6 h-2 bg-[#d97706]'
                    : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slider page ${pageIdx + 1}`}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}
