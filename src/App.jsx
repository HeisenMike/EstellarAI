import React, { useState } from 'react';
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
import Modal from './components/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="app">
      <Background />
      <Navbar openModal={openModal} />
      <Hero openModal={openModal} />
      <Empathy />
      <Solution />
      <Position />
      <Persona />
      <Offer openModal={openModal} />
      <About />
      <GuaranteeFAQ />
      <CTA openModal={openModal} />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
