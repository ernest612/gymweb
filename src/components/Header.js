import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo">GymFitness</div>
        <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#home" onClick={toggleMobileMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMobileMenu}>About</a></li>
            <li><a href="#services" onClick={toggleMobileMenu}>Services</a></li>
            <li><a href="#subscription" onClick={toggleMobileMenu}>Membership</a></li>
            <li><a href="#contact" onClick={toggleMobileMenu}>Contact</a></li>
          </ul>
        </nav>
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;