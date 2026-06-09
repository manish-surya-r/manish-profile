import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaRobot, FaCogs, FaUserTie } from 'react-icons/fa';
import { GiProcessor } from 'react-icons/gi';
import { IoMdAnalytics} from 'react-icons/io';
import { SiTensorflow } from 'react-icons/si';

const focusAreas = [
  { name: 'Software Development', icon: FaReact, colorClass: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-950/20' },
  { name: 'AI/ML Engineering', icon: SiTensorflow, colorClass: 'text-orange-500 bg-orange-50 dark:bg-orange-950/20' },
  { name: 'Data Science', icon: IoMdAnalytics, colorClass: 'text-teal-500 bg-teal-50 dark:bg-teal-950/20' },
  { name: 'High Performance Systems', icon: GiProcessor, colorClass: 'text-green-500 bg-green-50 dark:bg-green-950/20' },
  { name: 'Software Craftsmanship', icon: FaCogs, colorClass: 'text-purple-500 bg-purple-50 dark:bg-purple-950/20' },
  { name: 'Academic Research', icon: FaRobot, colorClass: 'text-pink-500 bg-pink-50 dark:bg-pink-950/20' },
  { name: 'Leadership & Collab', icon: FaUserTie, colorClass: 'text-yellow-500 bg-yellow-50 dark:bg-yellow-950/20' },
];

const About: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/50 rounded-3xl max-w-5xl mx-auto px-6 border border-slate-200/50 dark:border-slate-800/50 my-10 relative overflow-hidden">
      {/* Narrative Section */}
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold mb-4 tracking-tight">Professional Focus</h2>
        <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
          I’m a Computer Science graduate specializing in <span className="font-semibold text-indigo-600 dark:text-indigo-400">AI-driven systems</span> and <span className="font-semibold text-teal-600 dark:text-teal-400">scalable web solutions</span>. I develop custom developer tooling (like VS Code extensions) and package solutions that automate complex developer tasks.
        </p>
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          With a Master’s degree from Case Western Reserve University (GPA 3.9), my research and engineering work ranges from optimizing large neural networks with graph algorithms to shipping utility software that thousands of developers can install.
        </p>
      </div>

      {/* Recruiter At-a-Glance Panel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-10 border-t border-slate-200/50 dark:border-slate-800/50 text-left max-w-4xl mx-auto">
        <div className="bg-white/40 dark:bg-slate-800/20 p-6 rounded-2xl border border-slate-200/40 dark:border-slate-800/40 shadow-sm">
          <h4 className="text-base font-bold text-indigo-600 dark:text-indigo-400 mb-4 flex items-center gap-2">
            <span>💼</span> Professional Snapshot
          </h4>
          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-350">
            <li className="flex items-start gap-2">
              <span className="text-teal-500 font-bold">&bull;</span>
              <span><strong>Current Role:</strong> Web Developer at Profile DM (building & optimizing responsive web apps).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-500 font-bold">&bull;</span>
              <span><strong>Research Background:</strong> AI Research Assistant at CWRU (Bayesian Optimization, Graph Transformers).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-500 font-bold">&bull;</span>
              <span><strong>Open Source:</strong> Creator of 3 VS Code extensions and 1 PyPI CLI package.</span>
            </li>
          </ul>
        </div>

        <div className="bg-white/40 dark:bg-slate-800/20 p-6 rounded-2xl border border-slate-200/40 dark:border-slate-800/40 shadow-sm">
          <h4 className="text-base font-bold text-teal-600 dark:text-teal-400 mb-4 flex items-center gap-2">
            <span>🎓</span> Academic Snapshot
          </h4>
          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-350">
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 font-bold">&bull;</span>
              <span><strong>Master of Science:</strong> Computer Science, Case Western Reserve University (GPA: 3.9/4.0).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 font-bold">&bull;</span>
              <span><strong>Academic Honors:</strong> Seigal Lifelong Learning Scholarship Awardee (25% tuition).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 font-bold">&bull;</span>
              <span><strong>Publications:</strong> IEEE HPEC (Transformers paper) & IJMAS (Math Classification paper).</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Focus Areas Grid */}
      <div className="mt-12">
        <h3 className="text-center text-sm font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6">Focus Disciplines</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.name}
                whileHover={{ scale: 1.04 }}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border border-slate-200/40 dark:border-slate-800/40 transition-all ${area.colorClass}`}
              >
                <span className="text-xl">
                  <Icon />
                </span>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {area.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
