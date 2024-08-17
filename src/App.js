// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/about';
import Services from './components/Service';
import Contact from './components/Contact';
import Subscription from './components/Subscription';
import './App.css'; // Global styles

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Subscription />
    </div>
  );
}

export default App;
