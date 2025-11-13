import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaReact, FaRobot, FaCogs, FaUserTie } from 'react-icons/fa';
import { GiProcessor } from 'react-icons/gi';
import { IoMdAnalytics} from 'react-icons/io';
import { SiTensorflow } from 'react-icons/si';

// Technologies with name and color (for Tailwind text color)
const technologies = [
  { name: 'Software Development', icon: FaReact, colorClass: 'text-blue-500' },
  { name: 'AI/ML', icon: SiTensorflow, colorClass: 'text-orange-500' },
  { name: 'Data Science', icon: IoMdAnalytics, colorClass: 'text-teal-500' },
  { name: 'High Performance Computing', icon: GiProcessor, colorClass: 'text-green-500' },
  { name: 'Problem Solving', icon: FaCogs, colorClass: 'text-purple-500' },
  { name: 'Research', icon: FaRobot, colorClass: 'text-pink-500' },
  { name: 'Leadership', icon: FaUserTie, colorClass: 'text-yellow-500' },
];

const SectionWrapper: React.FC<{ children: React.ReactNode; id: string; title: string }> = ({ children, id, title }) => (
  <section id={id} className="py-20 lg:py-28 bg-slate-100 dark:bg-slate-900 relative overflow-visible">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-4xl font-extrabold mb-4 text-slate-900 dark:text-slate-100"
        >
          {title}
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '6rem' }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 bg-accent-indigo dark:bg-accent-teal mx-auto rounded-full"
        />
      </div>
      {children}
    </div>
  </section>
);

const About: React.FC = () => {
  return (
    <SectionWrapper id="about" title="About Me">
      {/* About Me Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center space-y-6"
      >
        <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
          I’m a <span className="font-bold text-indigo-500 dark:text-indigo-400">passionate Computer Science professional</span> specializing in <span className="font-bold text-teal-500 dark:text-teal-400">AI, data-driven systems</span>, and <span className="font-bold text-purple-500 dark:text-purple-400">full-stack development</span>. I build intelligent applications that turn complex problems into scalable solutions.
        </p>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          I have designed predictive models for biomaterials using <span className="font-semibold text-orange-500">machine learning</span>, developed scalable web applications with <span className="font-semibold text-blue-500">React</span> and <span className="font-semibold text-gray-500">Node.js</span>, and created research-focused dashboards to visualize complex datasets.
        </p>
        <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
          I’m seeking an entry-level <span className="font-bold text-teal-500 dark:text-teal-400">Software Engineer role</span> where I can contribute to building AI-powered, scalable systems that make a <span className="font-bold text-pink-500 dark:text-pink-400">real-world impact</span>.
        </p>
      </motion.div>

      {/* Technologies / Skills */}
      <motion.div
        className="mt-12 flex flex-wrap justify-center gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        {technologies.map((tech) => {
          const IconComponent = tech.icon;
          return (
            <motion.div
              key={tech.name}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center bg-white dark:bg-slate-800 px-3 py-1 rounded-2xl shadow-md dark:shadow-lg border border-slate-200 dark:border-slate-700 transition-all text-center"
            >
              {/* Wrap icon in span and use Tailwind for color and size */}
              <span className={`${tech.colorClass} text-3xl mb-1`}>
                <IconComponent />
              </span>
              <span className="text-sm md:text-base font-medium text-slate-700 dark:text-slate-300 leading-tight mt-0.5">
                {tech.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
};

export default About;
