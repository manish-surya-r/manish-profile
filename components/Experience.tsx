import React from 'react';
import { motion } from 'framer-motion';
import experienceData from '../data/experience.json';

type ExperienceType = {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
};

const positionColors = ['#6366F1', '#14B8A6', '#F59E0B', '#EC4899', '#10B981'];

const Experience: React.FC = () => {
  const experiences = experienceData as ExperienceType[];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/10 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight">Work Experience</h2>
          <div className="h-1 bg-indigo-500 w-16 mx-auto mt-3 rounded-full"></div>
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-md mx-auto">
            A history of engineering, AI research assistantships, and web development.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, index) => {
            const roleColor = positionColors[index % positionColors.length];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-10"
              >
                {/* Timeline Dot */}
                <span
                  className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-white dark:border-slate-900 shadow-sm"
                  style={{ backgroundColor: roleColor }}
                />

                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Left Role Card */}
                  <div className="md:w-1/3 flex-shrink-0">
                    <h3 className="text-lg font-bold tracking-tight" style={{ color: roleColor }}>
                      {exp.role}
                    </h3>
                    <p className="font-semibold text-slate-700 dark:text-slate-300 text-sm mt-0.5">
                      {exp.company}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {exp.location}
                    </p>
                    <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-1 italic">
                      {exp.period}
                    </p>
                  </div>

                  {/* Right Description Card */}
                  <div className="md:w-2/3 bg-white dark:bg-slate-800/40 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm backdrop-blur-sm">
                    <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {exp.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
