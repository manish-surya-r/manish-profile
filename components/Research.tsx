import React from 'react';
import { motion } from 'framer-motion';
import { Publication } from '../types.ts';

const SectionWrapper: React.FC<{ children: React.ReactNode; id: string; title: string }> = ({ children, id, title }) => (
  <section id={id} className="py-20 lg:py-28 bg-slate-100 dark:bg-slate-900">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          {title}
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '6rem' }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 bg-accent-indigo dark:bg-accent-teal mx-auto"
        ></motion.div>
      </div>
      {children}
    </div>
  </section>
);

// 🎨 Color palette for publication cards
const publicationColors = [
  '#F97316', // Orange
  '#10B981', // Emerald
  '#6366F1', // Indigo
  '#14B8A6', // Teal
  '#F59E0B', // Amber
  '#EC4899', // Pink
  '#F43F5E', // Rose
  '#8B5CF6', // Violet
];

// 📄 Embedded publication data
const publications: Publication[] = [
  {
    title: 'Transformers: A Graph Processing Perspective',
    conference: 'IEEE High Performance Extreme Computing (HPEC)',
    description:
      'Transformers have revolutionized machine learning applications with attention mechanisms but face scalability and memory bottlenecks. This paper presents techniques such as memory-efficient attention, low-rank approximations, and three-dimensional parallelism to optimize large-scale deployments, particularly in domains like genomics. It also introduces methods for coarsened sparse attention using token aggregation to enhance efficiency.',
    paper_link: 'https://ieeexplore.ieee.org/document/10938487',
  },
  {
    title:
      'Analysis of Linguistic and Math Features for Classification of Math Word Problems: Insights and Future Direction',
    conference: 'International Journal of Management and Applied Science',
    description:
      'This study investigates the classification of Math Word Problems (MWPs) by difficulty using ML techniques and the MATH dataset. It highlights the limitations of current models in capturing both linguistic and mathematical features and proposes improved feature engineering and mathematical tokenizers. It also explores the potential of LLMs like GPT-3 in automating MWP generation and classification, aiming to reduce educator workload.',
    paper_link:
      'https://ijmas.iraj.in/paper_detail.php?paper_id=20128&name=Analysis_of_Linguistics_and_Math_Features_for_Classification_of_Math_Word_Problems:_Insights_and_Future_Direction',
  },
];

const Research: React.FC = () => {
  return (
    <SectionWrapper id="research" title="Research & Publications">
      <div className="max-w-3xl mx-auto space-y-8">
        {publications.map((pub, index) => {
          const color = publicationColors[index % publicationColors.length];

          return (
            <motion.a
              key={index}
              href={pub.paper_link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="block bg-light dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
              style={{ borderLeft: `4px solid ${color}` }}
            >
              <h3 className="text-lg font-semibold mt-0" style={{ color }}>
                {pub.title}
              </h3>

              <p className="text-sm font-semibold italic text-slate-600 dark:text-slate-400 mt-1">
                {pub.conference}
              </p>

              <p className="text-slate-700 dark:text-slate-300 mt-3 text-sm leading-relaxed">
                {pub.description}
              </p>
            </motion.a>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Research;
