import React from 'react';
import { motion } from 'framer-motion';
import educationData from '../data/education.json';

type EducationType = {
  degree: string;
  major: string;
  university: string;
  location: string;
  period: string;
  key_points: string[];
};

const eduColors = ['#EC4899', '#6366F1'];

const Education: React.FC = () => {
  const education = educationData as EducationType[];

  return (
    <section className="py-16 bg-light dark:bg-dark">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight">Education</h2>
          <div className="h-1 bg-teal-500 w-16 mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => {
            const color = eduColors[index % eduColors.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white dark:bg-slate-800/40 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm backdrop-blur-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold tracking-tight" style={{ color }}>
                        {edu.degree}
                      </h3>
                      <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-0.5">
                        {edu.major}
                      </p>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-sm font-bold text-indigo-600 dark:text-indigo-400 italic mb-4">
                    {edu.university} &middot; <span className="text-slate-400 font-normal">{edu.location}</span>
                  </p>

                  <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    {edu.key_points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
