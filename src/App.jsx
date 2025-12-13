import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Empathy from './components/Empathy';
import Solution from './components/Solution';
import Position from './components/Position';
import Persona from './components/Persona';
import Offer from './components/Offer';
import About from './components/About';
import GuaranteeFAQ from './components/GuaranteeFAQ';
import CTA from './components/CTA';
import Background from './components/Background';

function App() {
  return (
    <div className="app">
      <Background />
      <Navbar />
      <Hero />
      <Empathy />
      <Solution />
      <Position />
      <Persona />
      <Offer />
      <About />
      <GuaranteeFAQ />
      <CTA />
    </div>
  );
}

export default App;
