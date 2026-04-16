import React from 'react';
import { Hero } from '../components/Hero';
import { SoftwareTicker } from '../components/SoftwareTicker';
import { EducatorPains } from '../components/EducatorPains';

export const Home = () => {
  return (
    <main role="main">
      <Hero />
      <SoftwareTicker />
      <EducatorPains />
    </main>
  );
};
