import React from 'react';
import './App.css';
import Certifications from './Certifications';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import AboutMe from './AboutMe';
import Skills from './Skills';

function App() {
  return (
    <div className="App bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
      <header className="App-header text-center p-10">
        <h1 className="text-5xl font-bold text-blue-400 mb-4">Rushikesh Ramesh Sangamnere's Portfolio</h1>
        <p className="text-xl text-gray-300">Data Scientist & Data Analyst</p>
      </header>

      <AboutMe />
      <Skills />
      <Certifications />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
