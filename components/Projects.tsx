import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiVisualstudiocode, SiPypi } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import projectsData from "../data/projects.json";

type ProjectLinks = {
  marketplace?: string;
  github?: string;
  pypi?: string;
  live?: string;
};

type ProjectType = {
  title: string;
  description: string;
  stack: string[];
  links: ProjectLinks;
  image?: string;
};

const COLORS = [
  "#6366F1", // Indigo
  "#14B8A6", // Teal
  "#F59E0B", // Amber
  "#EC4899", // Pink
  "#10B981", // Emerald
  "#8B5CF6", // Violet
];

// Handles image loading state and fallback gracefully to prevent empty card headers
const ProjectImage: React.FC<{ src?: string; title: string }> = ({ src, title }) => {
  const [hasError, setHasError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (!src || hasError) {
    return (
      <div className="h-3 bg-gradient-to-r from-indigo-505 via-purple-500 to-teal-400 w-full" />
    );
  }

  return (
    <div className="h-44 w-full relative overflow-hidden border-b border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/40">
      {!loaded && (
        <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 animate-pulse" />
      )}
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        src={src}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        onLoad={() => setLoaded(true)}
        onError={() => setHasError(true)}
      />
    </div>
  );
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'extensions' | 'webApps' | 'otherProjects'>('all');

  const extensions = (projectsData.vscodeExtensions || []) as ProjectType[];
  const webApps = (projectsData.webApps || []) as ProjectType[];
  const otherProjects = (projectsData.otherProjects || []) as ProjectType[];

  const taggedExtensions = extensions.map(p => ({ ...p, category: 'extensions' as const }));
  const taggedWebApps = webApps.map(p => ({ ...p, category: 'webApps' as const }));
  const taggedOthers = otherProjects.map(p => ({ ...p, category: 'otherProjects' as const }));
  
  const allProjects = [...taggedExtensions, ...taggedWebApps, ...taggedOthers];
  
  const filteredProjects = allProjects.filter(proj => {
    if (filter === 'all') return true;
    return proj.category === filter;
  });

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/10 min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight">Projects & Extensions</h2>
          <div className="h-1 bg-amber-500 w-16 mx-auto mt-3 rounded-full"></div>
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-md mx-auto">
            Explore VS Code extensions, web applications, PyPI libraries, and system utilities.
          </p>
        </div>

        {/* GitHub Profiles Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          <motion.a
            href="https://github.com/manish-surya"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/50 shadow-sm backdrop-blur-sm group hover:border-indigo-500 dark:hover:border-indigo-400 transition-all cursor-pointer"
          >
            <div className="p-3.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
              <FaGithub size={24} />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-800 dark:text-slate-100">AI / ML Projects Repository</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Explore deep learning models, computer vision architectures, and research codebase.
              </p>
              <span className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold mt-2 inline-block hover:underline">
                github.com/manish-surya &rarr;
              </span>
            </div>
          </motion.a>

          <motion.a
            href="https://github.com/manish-surya-r"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/50 shadow-sm backdrop-blur-sm group hover:border-teal-500 dark:hover:border-teal-400 transition-all cursor-pointer"
          >
            <div className="p-3.5 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 group-hover:bg-teal-600 group-hover:text-white transition-all">
              <FaGithub size={24} />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-800 dark:text-slate-100">Web & Core Tools Repository</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Explore VS Code extensions, web applications, and CLI developer tools.
              </p>
              <span className="text-xs text-teal-600 dark:text-teal-400 font-semibold mt-2 inline-block hover:underline">
                github.com/manish-surya-r &rarr;
              </span>
            </div>
          </motion.a>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-12 bg-slate-200/50 dark:bg-slate-800/40 p-1.5 rounded-2xl w-fit mx-auto border border-slate-300/30 dark:border-slate-700/30 backdrop-blur-sm flex-wrap">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
              filter === 'all'
                ? 'bg-amber-500 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            All Work
          </button>
          <button
            onClick={() => setFilter('extensions')}
            className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
              filter === 'extensions'
                ? 'bg-amber-500 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            VS Code Extensions
          </button>
          <button
            onClick={() => setFilter('webApps')}
            className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
              filter === 'webApps'
                ? 'bg-amber-500 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Web Applications
          </button>
          <button
            onClick={() => setFilter('otherProjects')}
            className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
              filter === 'otherProjects'
                ? 'bg-amber-500 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            CLIs & Libraries
          </button>
        </div>

        {/* Grid Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj, i) => {
              const cardColor = COLORS[i % COLORS.length];
              let categoryLabel = 'Project';
              if (proj.category === 'extensions') categoryLabel = 'VS Code Extension';
              else if (proj.category === 'webApps') categoryLabel = 'Web Application';
              else if (proj.category === 'otherProjects') categoryLabel = 'CLI / Library';

              return (
                <motion.div
                  layout
                  key={proj.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-slate-800/30 rounded-3xl shadow-sm border border-slate-200/50 dark:border-slate-800/50 flex flex-col justify-between overflow-hidden group hover:shadow-md transition-all backdrop-blur-sm hover:scale-[1.01]"
                >
                  {/* Card Visual / Thumbnail Header (Fixed-Height gracefully handled) */}
                  <ProjectImage src={proj.image} title={proj.title} />

                  {/* Card Content */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      {/* Badge / Category */}
                      <span className="inline-block text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-400 mb-3">
                        {categoryLabel}
                      </span>

                      <h3 className="text-xl font-bold tracking-tight mb-2 group-hover:underline transition-all" style={{ color: cardColor }}>
                        {proj.title}
                      </h3>

                      <p className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed mb-6">
                        {proj.description}
                      </p>
                    </div>

                    <div>
                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {proj.stack.map((tech, j) => (
                          <span
                            key={j}
                            className="px-2 py-0.5 rounded-lg text-[10px] font-semibold"
                            style={{
                              backgroundColor: `${COLORS[(i + j) % COLORS.length]}15`,
                              color: COLORS[(i + j) % COLORS.length],
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                        {proj.links.marketplace && (
                          <a
                            href={proj.links.marketplace}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs font-bold text-blue-500 hover:underline"
                          >
                            <VscCode size={16} /> VS Code
                          </a>
                        )}
                        {proj.links.pypi && (
                          <a
                            href={proj.links.pypi}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs font-bold text-green-500 hover:underline"
                          >
                            <SiPypi size={14} /> PyPI Package
                          </a>
                        )}
                        {proj.links.github && (
                          <a
                            href={proj.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                          >
                            <FaGithub size={14} /> Code
                          </a>
                        )}
                        {proj.links.live && (
                          <a
                            href={proj.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs font-bold text-teal-500 hover:underline"
                          >
                            <FaExternalLinkAlt size={12} /> Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
