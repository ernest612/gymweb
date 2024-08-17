import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Transform Your Body</h1>
        <p>Join our fitness program and achieve your goals</p>
        <a href="#services" className="cta-button">Get Started</a>
      </div>
    </section>
  );
};

export default Hero;