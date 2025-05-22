'use client'

import { useState } from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Team from '../components/Team';
import Demo from '../components/Demo';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  const [showDemo, setShowDemo] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <main>
      <Hero onTryClick={() => setShowDemo(true)} />
      <HowItWorks />
      <Features />
      <Pricing />
      <Team />
      <Demo 
        isOpen={showDemo} 
        onClose={() => {
          setShowDemo(false);
          if (formSubmitted) setFormSubmitted(false);
        }} 
        onSubmit={() => setFormSubmitted(true)}
        formSubmitted={formSubmitted}
      />
      <FAQ />
      <Footer />
    </main>
  );
}
