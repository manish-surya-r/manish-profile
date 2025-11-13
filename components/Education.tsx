import React from 'react';
import { motion } from 'framer-motion';

type EducationType = {
  degree: string;
  major: string;
  university: string;
  location: string;
  period: string;
  key_points: string[];
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

const eduColors = ['#EC4899', '#F59E0B', '#6366F1', '#14B8A6', '#3B82F6'];

const Education: React.FC = () => {
  const education: EducationType[] = [
    {
      degree: 'Master of Science',
      major: 'Computer Science',
      university: 'Case Western Reserve University',
      location: 'Cleveland, Ohio, USA',
      period: 'Jan 2023 – May 2024',
      key_points: [
        'GPA: 3.9 / 4.0',
        'Coursework: Machine Learning, Computer Vision, Big Data, Designing High Performant Systems for AI, High Performance Data and Computing, Computer Networks, Computer Security, Software Engineering, Data Mining, Database Systems',
        'Award: Seigal Lifelong Learning Scholarship (25% tuition)',
      ],
    },
    {
      degree: 'Bachelor of Technology',
      major: 'Computer Science & Engineering',
      university: 'SRKR Engineering College',
      location: 'Bhimavaram, India',
      period: 'Jul 2018 – May 2022',
      key_points: [
        'CGPA: 8.65 / 10.0',
        'Focus: Data Structures, Algorithms, Software Engineering, Foundations of AI/ML',
      ],
    },
  ];

  return (
    <SectionWrapper id="education" title="Education">
      <div className="max-w-4xl mx-auto space-y-12">
        {education.map((edu, index) => {
          const color = eduColors[index % eduColors.length];
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
                <h3 className="text-xl font-bold italic" style={{ color }}>
                  {edu.degree} - {edu.major}
                </h3>
                <p className="font-semibold mb-1 italic">
                  {edu.university} &middot; {edu.location}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 italic">{edu.period}</p>
              </div>

              {/* Right Column */}
              <div className="md:w-2/3 bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300">
                  {edu.key_points.map((point, i) => (
                    <li key={i}>{point}</li>
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

export default Education;
