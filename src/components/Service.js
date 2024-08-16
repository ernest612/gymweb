// src/components/Services.js
import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-item">
        <h3>Personal Training</h3>
        <p>Get one-on-one training with our certified trainers.</p>
      </div>
      <div className="service-item">
        <h3>Group Classes</h3>
        <p>Join our group classes and stay motivated with others.</p>
      </div>
      <div className="service-item">
        <h3>Nutrition Plans</h3>
        <p>Receive customized nutrition plans to complement your training.</p>
      </div>
    </section>
  );
};

export default Services;
