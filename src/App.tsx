import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Stats } from './components/Stats';
import { HowItWorks } from './components/HowItWorks';
import { EducatorPains } from './components/EducatorPains';
import { MasteryJourney } from './components/MasteryJourney';
import { Pricing } from './components/Pricing';
import { Guarantee } from './components/Guarantee';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-background text-neu-text-primary font-sans relative overflow-x-hidden text-sm transition-colors duration-300">
      {/* Top Beta Banner */}
      <div className="bg-yellow-400 text-black text-center py-2 px-4 text-xs font-medium relative z-50">
        Welcome to CADpractice.com BETA : We're live on April 1st!! Check out our <a href="#" className="underline font-bold hover:text-gray-800">BETA onboarding playlist</a> for help, and please pardon any unexpected behavior as we finalize the platform.
      </div>

      <Navbar />
      <main role="main">
        <Hero />
        <Features />
        <Stats />
        <HowItWorks />
        <EducatorPains />
        <MasteryJourney />
        <Pricing />
        <Guarantee />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
