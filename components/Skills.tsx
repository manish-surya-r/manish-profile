import React from 'react';
import { motion } from 'framer-motion';

type Skill = {
  name: string;
  level: number;
};

type Project = {
  name: string;
  link: string;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
  projects: Project[];
};

// Hardcoded color palettes for each category (one palette per category)
const categoryColorPalettes: string[][] = [
  ['#6366F1', '#14B8A6', '#F59E0B', '#EC4899', '#10B981', '#F43F5E', '#8B5CF6', '#F97316'],
  ['#F43F5E', '#F59E0B', '#6366F1', '#10B981', '#EC4899', '#F97316', '#8B5CF6', '#14B8A6'],
  ['#10B981', '#6366F1', '#EC4899', '#F43F5E', '#F97316', '#14B8A6', '#8B5CF6', '#F59E0B'],
  ['#EC4899', '#F97316', '#F43F5E', '#6366F1', '#10B981', '#14B8A6', '#F59E0B', '#8B5CF6'],
  ['#8B5CF6', '#10B981', '#F97316', '#6366F1', '#F43F5E', '#F59E0B', '#EC4899', '#14B8A6'],
];

const SectionWrapper: React.FC<{ children: React.ReactNode; id: string; title: string }> = ({
  children,
  id,
  title,
}) => (
  <section id={id} className="py-20 lg:py-28 bg-light dark:bg-dark">
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

const Skills: React.FC = () => {
  const skills: SkillCategory[] = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'C++', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'SQL', level: 85 },
      ],
      projects: [
        { name: 'Simple Unix Shell in C', link: 'https://github.com/manish-surya-r/shell-using-c' },
        { name: 'Encryption System using Python', link: 'https://quantum-cipher.streamlit.app/' },
        { name: 'Flight Reservation System using Python', link: 'https://github.com/manish-surya/flight-reservation-system' },
      ],
    },
    {
      title: 'Frontend & Web Development',
      skills: [
        { name: 'HTML, CSS, JS', level: 90 },
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Vue.js', level: 80 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Three.js', level: 75 },
        { name: 'Chart.js', level: 75 },
      ],
      projects: [
        { name: 'Vision-Master', link: 'https://vision-master.netlify.app/' },
        { name: '3D Interactive Chess Game', link: 'https://manish-surya-r.github.io/3d-chess-app/' },
        { name: 'PyClean: AI-Powered Python Code Beautifier', link: 'https://github.com/manish-surya-r/pyclean' },
        { name: 'Finance Tracker Web App', link: 'https://manish-surya-r.github.io/finance-tracker-app/' },
      ],
    },
    {
      title: 'Backend & Server-Side Development',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 80 },
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL', level: 85 },
      ],
      projects: [
        { name: 'Finance Tracker Web App', link: 'https://manish-surya-r.github.io/finance-tracker-app/' },
        { name: 'Flight Reservation System using Python', link: 'https://github.com/manish-surya/flight-reservation-system' },
      ],
    },
    {
      title: 'AI & Data Science',
      skills: [
        { name: 'TensorFlow', level: 75 },
        { name: 'PyTorch', level: 80 },
        { name: 'scikit-learn', level: 85 },
        { name: 'NLTK, Spacy', level: 80 },
        { name: 'Pandas, Numpy', level: 90 },
        { name: 'Matplotlib, Seaborn', level: 85 },
        { name: 'CUDA, pyCUDA', level: 75 },
        { name: 'Bayesian Optimization', level: 70 },
      ],
      projects: [
        { name: 'Pistachio Classification', link: 'https://github.com/manish-surya/python-projects/tree/main/Pistachio_Classification' },
        { name: 'Diabetes Prediction Using Neural Networks', link: 'https://github.com/manish-surya/machine-learning-projects/tree/main/health-data-projects/diabetes-prediction' },
        { name: 'Customer Intent Segmentation', link: 'https://github.com/manish-surya/customer-intent-segmentation' },
        { name: 'Network Intrusion Prediction', link: 'https://github.com/manish-surya/python-projects/tree/main/Network_Intrution_Prediction' },
      ],
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 80 },
        { name: 'Linux', level: 90 },
        { name: 'Makefile', level: 75 },
      ],
      projects: [{ name: 'Simple Unix Shell in C', link: 'https://github.com/manish-surya-r/shell-using-c' }],
    },
    {
      title: 'Research',
      skills: [
        { name: 'Designing Experiemnts', level: 85 },
        { name: 'Statistical Analysis', level: 80 },
        { name: 'Academic Writing', level: 70 },
        { name: 'Literature Review', level: 75 },
        { name: 'Data Visualization', level: 80 },
      ],
      projects: [
        { name: 'Transformers: A Graph Processing Perspective', link: 'https://ieeexplore.ieee.org/document/10938487' },
      ],
    },
  ];

  return (
    <SectionWrapper id="skills" title="My Skills & Projects">
      <div className="max-w-6xl mx-auto space-y-8">
        {skills.map((category, index) => {
          const colors = categoryColorPalettes[index % categoryColorPalettes.length];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-6 md:gap-8 p-4 rounded-lg bg-gray-50 dark:bg-slate-900 shadow-sm"
            >
              {/* Left Column - Title */}
              <div className="md:w-1/5 flex items-center justify-center">
                <h3
                  className="text-[17px] font-bold italic text-center"
                  style={{ color: colors[0] }}
                >
                  {category.title}
                </h3>
              </div>

              {/* Middle Column - Skills */}
              <div className="md:w-2/5 bg-gray-100 dark:bg-slate-800 p-4 rounded-lg space-y-4">
                {category.skills.map((skill, idx) => {
                  const color = colors[(idx + 1) % colors.length];
                  return (
                    <div key={skill.name} className="flex items-center gap-4">
                      {/* Skill Name */}
                      <span className="text-[15px] text-gray-700 dark:text-gray-300 font-medium w-40">
                        {skill.name}
                      </span>

                      {/* Skill Level Bar */}
                      <div className="relative flex-1 h-4 bg-gray-300 dark:bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ duration: 1.2, ease: 'easeInOut' }}
                          className="h-full flex items-center justify-end pr-1 rounded-full text-white font-semibold text-[12px]"
                          style={{ backgroundColor: color }}
                        >
                          {skill.level}%
                        </motion.div>
                        <div className="absolute top-0 right-0 h-full border-l-2 border-white dark:border-gray-800"></div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right Column - Projects */}
              <div className="md:w-2/5 bg-gray-100 dark:bg-slate-800 p-4 rounded-lg flex flex-col gap-2">
                <h4
                  className="text-center font-semibold mb-2 text-[16px]"
                  style={{ color: colors[1] }}
                >
                  Projects
                </h4>
                {category.projects &&
                  category.projects.map((project, projIdx) => (
                    <a
                      key={project.name}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: colors[(projIdx + 2) % colors.length] }}
                      className="hover:underline text-[15px]"
                    >
                      {project.name}
                    </a>
                  ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
