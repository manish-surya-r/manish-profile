import React from 'react';
import { motion } from 'framer-motion';
import skillsData from '../data/skills.json';

type SkillItem = {
  name: string;
  level: number;
};

type ProjectItem = {
  name: string;
  link: string;
};

type SkillCategory = {
  title: string;
  skills: SkillItem[];
  projects?: ProjectItem[];
};

const categoryColorPalettes: string[][] = [
  ['#6366F1', '#14B8A6', '#F59E0B', '#EC4899'],
  ['#F43F5E', '#F59E0B', '#6366F1', '#14B8A6'],
  ['#10B981', '#6366F1', '#EC4899', '#F97316'],
  ['#8B5CF6', '#10B981', '#F97316', '#6366F1'],
];

const Skills: React.FC = () => {
  const categories = skillsData as SkillCategory[];

  return (
    <section className="py-16 bg-light dark:bg-dark max-w-5xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight">Core Competencies</h2>
        <div className="h-1 bg-indigo-500 w-16 mx-auto mt-3 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category, index) => {
          const palette = categoryColorPalettes[index % categoryColorPalettes.length];
          const primaryColor = palette[0];

          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800/40 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                <h3
                  className="text-lg font-bold mb-4 tracking-wide border-b border-slate-200/50 dark:border-slate-800/50 pb-2 flex items-center gap-2"
                  style={{ color: primaryColor }}
                >
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: primaryColor }}></span>
                  {category.title}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, idx) => {
                    const color = palette[(idx + 1) % palette.length];
                    return (
                      <div key={skill.name} className="space-y-1">
                        <div className="flex justify-between text-sm font-medium">
                          <span className="text-slate-700 dark:text-slate-300">{skill.name}</span>
                          <span className="text-slate-500">{skill.level}%</span>
                        </div>
                        <div className="relative w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: 'easeOut' }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: color }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {category.projects && category.projects.length > 0 && (
                <div className="mt-6 pt-4 border-t border-slate-200/40 dark:border-slate-800/40">
                  <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">Featured Application</h4>
                  <div className="flex flex-wrap gap-3">
                    {category.projects.map((proj) => (
                      <a
                        key={proj.name}
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline font-semibold"
                      >
                        {proj.name} &rarr;
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
