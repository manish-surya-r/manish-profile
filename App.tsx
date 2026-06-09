import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Skills from './components/Skills.tsx';
import Experience from './components/Experience.tsx';
import Education from './components/Education.tsx';
import Certifications from './components/Certifications.tsx';
import Projects from './components/Projects.tsx';
import Writing from './components/Writing.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import { ThemeProvider } from './contexts/ThemeContext.tsx';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [activeTab, setActiveTab] = useState('about');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      const validTabs = ['about', 'experience', 'projects', 'writing', 'contact'];
      if (validTabs.includes(hash)) {
        setActiveTab(hash);
      } else {
        // Fallback or default
        setActiveTab('about');
      }
      // Scroll to top on page navigation
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <>
            <Hero />
            <About />
            <Skills />
          </>
        );
      case 'experience':
        return (
          <>
            <Experience />
            <Education />
            <Certifications />
          </>
        );
      case 'projects':
        return <Projects />;
      case 'writing':
        return <Writing />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <>
            <Hero />
            <About />
            <Skills />
          </>
        );
    }
  };

  return (
    <ThemeProvider>
      <div className="bg-light text-slate-800 dark:bg-dark dark:text-slate-200 font-sans transition-colors duration-300 min-h-screen flex flex-col justify-between">
        <div>
          <Header />
          <main className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
              >
                {renderTabContent()}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;