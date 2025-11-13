import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Skills from './components/Skills.tsx';
import Experience from './components/Experience.tsx';
import Projects from './components/Projects.tsx';
import Research from './components/Research.tsx';
import Certifications from './components/Certifications.tsx';
import Education from './components/Education.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import { ThemeProvider } from './contexts/ThemeContext.tsx';

function App() {
  return (
  <ThemeProvider>
    <div className="bg-light text-slate-800 dark:bg-dark dark:text-slate-200 font-sans transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Research />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  </ThemeProvider>
  );
}

export default App;