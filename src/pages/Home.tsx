import React from 'react';
import { Hero } from '../components/Hero';
import { SoftwareTicker } from '../components/SoftwareTicker';
import { EducatorPains } from '../components/EducatorPains';
import { BookDemoCTA } from '../components/BookDemoCTA';
import { Testimonials } from '../components/Testimonials';
import { IndividualAccess } from '../components/IndividualAccess';

export const Home = () => {
  return (
    <main role="main">
      <Hero />
      <SoftwareTicker />
      <EducatorPains />
      <BookDemoCTA />
      <Testimonials />
      <IndividualAccess />
    </main>
  );
};
