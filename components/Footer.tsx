
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-6 py-8 text-center text-slate-500 dark:text-slate-400">
        <div className="mb-4">
            <a href="#about" className="px-3 hover:text-accent-indigo dark:hover:text-accent-teal">About</a>
            <a href="#projects" className="px-3 hover:text-accent-indigo dark:hover:text-accent-teal">Projects</a>
            <a href="#contact" className="px-3 hover:text-accent-indigo dark:hover:text-accent-teal">Contact</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Manish Sri Sai Surya Routhu. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
