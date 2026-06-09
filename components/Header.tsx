import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext.tsx';
import { SunIcon, MoonIcon, MenuIcon, CloseIcon } from './icons.tsx';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { id: 'about', href: '#/about', label: 'About', bgColor: '#6366F1' },
  { id: 'experience', href: '#/experience', label: 'Experience & Education', bgColor: '#14B8A6' },
  { id: 'projects', href: '#/projects', label: 'Projects & Extensions', bgColor: '#F59E0B' },
  { id: 'writing', href: '#/writing', label: 'Articles & Publications', bgColor: '#EC4899' },
  { id: 'contact', href: '#/contact', label: 'Contact', bgColor: '#10B981' },
];

const logoColors = ['#6366F1', '#14B8A6', '#F59E0B', '#EC4899', '#10B981'];

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('about');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      const valid = ['about', 'experience', 'projects', 'writing', 'contact'];
      if (valid.includes(hash)) {
        setActiveTab(hash);
      } else {
        setActiveTab('about');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-light/85 dark:bg-dark/85 backdrop-blur-md shadow-lg border-b border-slate-200/40 dark:border-slate-800/40'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#/about" className="text-xl font-bold flex gap-0 tracking-wider">
          {'MSSSR'.split('').map((letter, i) => (
            <span key={i} style={{ color: logoColors[i % logoColors.length] }}>
              {letter}
            </span>
          ))}
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-1 bg-slate-100/50 dark:bg-slate-800/40 p-1.5 rounded-xl border border-slate-200/30 dark:border-slate-700/30 backdrop-blur-sm relative">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                style={{
                  backgroundColor: isActive ? link.bgColor : 'transparent',
                }}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="activeHeaderTabGlow"
                    className="absolute -bottom-1 left-1/4 right-1/4 h-0.5 rounded-full"
                    style={{ backgroundColor: link.bgColor }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}
              </a>
            );
          })}

          <button
            onClick={toggleTheme}
            className="p-2 ml-2 rounded-lg text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors mr-2"
          >
            {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
            {isOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-light dark:bg-dark border-t border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col py-4 px-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = activeTab === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    style={{
                      backgroundColor: isActive ? `${link.bgColor}22` : 'transparent',
                      color: isActive ? link.bgColor : 'inherit',
                      borderLeft: isActive ? `3px solid ${link.bgColor}` : '3px solid transparent',
                    }}
                    className="px-4 py-3 rounded-lg text-base font-semibold hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all flex items-center"
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
