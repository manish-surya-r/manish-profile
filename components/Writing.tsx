import React from 'react';
import { motion } from 'framer-motion';
import { FaBookOpen, FaFileAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { SiMedium } from 'react-icons/si';
import researchData from '../data/research.json';
import mediumData from '../data/medium.json';

type PublicationType = {
  title: string;
  conference: string;
  description: string;
  paper_link: string;
};

type ArticleType = {
  title: string;
  description: string;
  link: string;
  readTime: string;
  publishedDate: string;
  isPopular: boolean;
};

const Writing: React.FC = () => {
  const publications = researchData as PublicationType[];
  const articles = mediumData as ArticleType[];

  const popularArticle = articles.find((art) => art.isPopular);
  const regularArticles = articles.filter((art) => !art.isPopular);

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/10 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight">Articles & Publications</h2>
          <div className="h-1 bg-pink-500 w-16 mx-auto mt-3 rounded-full"></div>
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-md mx-auto">
            Deep dives on Python architecture, AI engineering concepts, and IEEE publications.
          </p>
        </div>

        {/* Medium Featured / Popular Article */}
        {popularArticle && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-slate-800/40 dark:to-indigo-950/20 p-8 rounded-3xl border border-indigo-200/50 dark:border-slate-850/50 shadow-sm relative overflow-hidden backdrop-blur-sm group"
          >
            {/* Ambient Background glow */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500"></div>

            {/* Popular Badge */}
            <span className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
              Popular Article
            </span>

            <div className="flex items-center gap-3 text-indigo-600 dark:text-indigo-400 mb-4">
              <SiMedium size={24} />
              <span className="text-sm font-semibold tracking-wide uppercase">Medium Blog</span>
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              <a href={popularArticle.link} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">
                {popularArticle.title}
                <FaExternalLinkAlt size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </h3>

            <p className="text-slate-600 dark:text-slate-350 text-sm leading-relaxed mb-6">
              {popularArticle.description}
            </p>

            <div className="flex justify-between items-center text-xs font-semibold text-slate-500 dark:text-slate-400">
              <div className="flex gap-4">
                <span>{popularArticle.publishedDate}</span>
                <span>&bull;</span>
                <span>{popularArticle.readTime}</span>
              </div>
              <a
                href={popularArticle.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1.5"
              >
                Read Article &rarr;
              </a>
            </div>
          </motion.div>
        )}

        {/* Regular Articles & Publications Sections */}
        <div className="grid grid-cols-1 gap-12">
          {/* Section: Academic Publications */}
          <div>
            <h3 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-3 text-indigo-600 dark:text-indigo-400 border-b border-slate-200/50 dark:border-slate-850/50 pb-2">
              <FaBookOpen />
              Academic Research
            </h3>

            <div className="space-y-6">
              {publications.map((pub, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800/20 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm hover:shadow-md transition-all hover:scale-[1.005] group"
                >
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 hover:underline">
                      <a href={pub.paper_link} target="_blank" rel="noopener noreferrer">
                        {pub.title}
                      </a>
                    </h4>
                    <a
                      href={pub.paper_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-indigo-500 transition-colors pt-1"
                    >
                      <FaExternalLinkAlt size={14} />
                    </a>
                  </div>
                  <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 italic mb-3">
                    {pub.conference}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {pub.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Section: Other Medium Articles */}
          {regularArticles.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-3 text-indigo-600 dark:text-indigo-400 border-b border-slate-200/50 dark:border-slate-850/50 pb-2">
                <FaFileAlt />
                Writing & Blogs
              </h3>

              <div className="space-y-6">
                {regularArticles.map((art, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-slate-800/20 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm hover:shadow-md transition-all hover:scale-[1.005] group"
                  >
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 hover:underline">
                        <a href={art.link} target="_blank" rel="noopener noreferrer">
                          {art.title}
                        </a>
                      </h4>
                      <a
                        href={art.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-indigo-500 transition-colors pt-1"
                      >
                        <FaExternalLinkAlt size={14} />
                      </a>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                      {art.description}
                    </p>
                    <div className="flex gap-4 text-xs font-semibold text-slate-400 dark:text-slate-500">
                      <span>{art.publishedDate}</span>
                      <span>&bull;</span>
                      <span>{art.readTime}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Writing;
