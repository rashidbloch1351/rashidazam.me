import React from 'react';
import type { Metadata } from 'next';
import { locationsData } from '@/data/locationsData';
import { LocationPageTemplate } from '@/components/LocationPageTemplate';

const location = locationsData.multan;

export const metadata: Metadata = {
  title: location.title,
  description: location.metaDescription,
  alternates: {
    canonical: location.canonical,
  },
  openGraph: {
    title: location.title,
    description: location.metaDescription,
    url: location.canonical,
    type: 'website',
  },
};

export default function MultanLocationPage() {
  return <LocationPageTemplate location={location} />;
}
