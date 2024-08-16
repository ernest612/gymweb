// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/about';
import Services from './components/Service';
import Contact from './components/Contact';
import './App.css'; // Global styles

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
