// src/components/Header.js
import React from 'react';
import './Header.css'; // Import styles

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo">GymFitness</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
