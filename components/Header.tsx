import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext.tsx';
import { SunIcon, MoonIcon, MenuIcon, CloseIcon } from './icons.tsx';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#about', label: 'About', bgColor: '#6366F1' },
  { href: '#skills', label: 'Skills', bgColor: '#14B8A6' },
  { href: '#experience', label: 'Experience', bgColor: '#F59E0B' },
  { href: '#projects', label: 'Projects', bgColor: '#EC4899' },
  { href: '#contact', label: 'Contact', bgColor: '#10B981' },
];

const extraLinks = [
  { href: '#certifications', label: 'Certifications', bgColor: '#F43F5E' },
  { href: '#education', label: 'Education', bgColor: '#8B5CF6' },
  { href: '#research', label: 'Research', bgColor: '#F97316' },
];

const logoColors = ['#6366F1', '#14B8A6', '#F59E0B', '#EC4899', '#10B981'];

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0, y: -20 },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-light/80 dark:bg-dark/80 backdrop-blur-lg shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-xl font-bold flex gap-0">
          {'MSSSR'.split('').map((letter, i) => (
            <span key={i} style={{ color: logoColors[i % logoColors.length] }}>
              {letter}
            </span>
          ))}
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6 relative">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{ backgroundColor: link.bgColor }}
              className="text-white px-3 py-1 rounded hover:opacity-90 transition-colors text-[15px]"
            >
              {link.label}
            </a>
          ))}

          {/* Extra "More" dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsMoreOpen(true)}
            onMouseLeave={() => setIsMoreOpen(false)}
          >
            <button className="flex flex-col justify-center items-center w-6 h-6 space-y-1">
              <span className="block w-6 h-0.5 bg-slate-600 dark:bg-slate-300 rounded"></span>
              <span className="block w-6 h-0.5 bg-slate-600 dark:bg-slate-300 rounded"></span>
              <span className="block w-6 h-0.5 bg-slate-600 dark:bg-slate-300 rounded"></span>
            </button>
            <AnimatePresence>
              {isMoreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-40 rounded-lg shadow-lg overflow-hidden z-50"
                >
                  <div className="flex flex-col">
                    {extraLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        style={{ backgroundColor: link.bgColor }}
                        className="text-white px-3 py-2 rounded hover:opacity-90 transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors mr-2"
          >
            {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden border-t border-slate-200 dark:border-slate-700"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              {[...navLinks, ...extraLinks].map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{ backgroundColor: link.bgColor }}
                  className="text-white px-4 py-2 rounded hover:opacity-90 transition-colors text-lg"
                  variants={menuItemVariants}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
