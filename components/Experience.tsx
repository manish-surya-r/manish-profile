import React from 'react';
import { motion } from 'framer-motion';

type ExperienceType = {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
};

const SectionWrapper: React.FC<{ children: React.ReactNode; id: string; title: string }> = ({
  children,
  id,
  title,
}) => (
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

// Hardcoded colors for positions (one per experience)
const positionColors = [
  '#6366F1', // Indigo
  '#14B8A6', // Teal
  '#F59E0B', // Amber
  '#EC4899', // Pink
  '#10B981', // Emerald
  '#F43F5E', // Rose
  '#8B5CF6', // Violet
  '#F97316', // Orange
];

const Experience: React.FC = () => {
  const experiences: ExperienceType[] = [
    {
      role: 'Web Developer',
      company: 'Profile DM',
      location: 'Novi, MI (Remote)',
      period: 'Aug 2025 – Present',
      description: [
        'Built and optimized responsive web applications using React.js, JavaScript, and CSS, improving load speed by 30% and user engagement by 20%.',
        'Collaborated with designers and backend developers to enhance UI/UX, reducing user-reported issues by 25%.',
      ],
    },
    {
      role: 'Research Engineer (OMEGA)',
      company: 'Case Western Reserve University',
      location: 'Cleveland, OH',
      period: 'Jan 2025 – Jul 2025',
      description: [
        'Optimized cell growth parameters using Bayesian Optimization.',
        'Conducted mechanical testing on 3D-printed PLA samples, improving structural stability and contributing to research outputs.',
      ],
    },
    {
      role: 'Research Assistant',
      company: 'Case Western Reserve University',
      location: 'Cleveland, OH',
      period: 'May 2024 – Jan 2025',
      description: [
        'Redesigned Transformer architecture using vertex-centric graph algorithms, enabling efficient random sparse attention.',
        'Developed graph-based computation pipelines and validated scalability with near-linear computation time reduction.',
      ],
    },
    {
      role: 'Graduate Research Assistant',
      company: 'Case Western Reserve University',
      location: 'Cleveland, OH',
      period: 'Jan 2023 – Aug 2023',
      description: [
        'Developed ML/DL models for classification of math word problems by difficulty.',
        'Used factorial experimentation to optimize model performance and identify key influencing factors.',
      ],
    },
    {
      role: 'Data Science Intern',
      company: 'Personify',
      location: 'Bangalore, India',
      period: 'May 2022 – Jul 2022',
      description: [
        'Built and deployed an AI-powered chatbot using Dialogflow CX and Python, automating customer interaction for a coffee shop.',
        'Improved business efficiency and demonstrated problem-solving in real-world deployment.',
      ],
    },
  ];

  return (
    <SectionWrapper id="experience" title="Work Experience">
      <div className="max-w-4xl mx-auto space-y-12">
        {experiences.map((exp, index) => {
          const roleColor = positionColors[index % positionColors.length];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-6 md:gap-12"
            >
              {/* Left Column */}
              <div className="md:w-1/3 flex-shrink-0">
                <h3 className="text-xl font-bold italic" style={{ color: roleColor }}>
                  {exp.role}
                </h3>
                <p className="font-semibold mb-1 italic">
                  {exp.company} &middot; {exp.location}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 italic">{exp.period}</p>
              </div>

              {/* Right Column */}
              <div className="md:w-2/3 bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Experience;
