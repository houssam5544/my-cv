// src/App.tsx

import React from 'react';
import Header from './components/Header';
import Top from './components/Top';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Footer from './components/Footer';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="font-sans bg">
      <Header />
      <div>
        <Top />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Languages />
        <Contact/>
        <Footer />
      </div>
    </div>
  );
};

export default App;
