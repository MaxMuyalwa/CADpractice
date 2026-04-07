import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SoftwareTicker } from './components/SoftwareTicker';
import { InteractiveGrid } from './components/InteractiveGrid';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { EducatorPains } from './components/EducatorPains';
import { MasteryJourney } from './components/MasteryJourney';
import { Guarantee } from './components/Guarantee';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen text-gray-900 dark:text-white font-sans relative overflow-x-hidden text-sm transition-colors duration-300">
      <InteractiveGrid />
      <Navbar />
      <main role="main">
        <Hero />
        <Features />
        <HowItWorks />
        <EducatorPains />
        <MasteryJourney />
        <Guarantee />
        <FAQ />
        <FinalCTA />
        <SoftwareTicker />
      </main>
      <Footer />
    </div>
  );
};

export default App;
