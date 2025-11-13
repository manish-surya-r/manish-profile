import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper: React.FC<{ children: React.ReactNode; id: string; title: string }> = ({ children, id, title }) => (
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

// Type definition
type Certification = {
  title: string;
  institution: string;
  cert_id: string;
  credential_link: string;
};

// ✅ Fixed: removed extra `[` and closing bracket
const certifications: Certification[] = [
  {
    title: "Bayesian Statistics",
    institution: "University of California, Santa Cruz",
    cert_id: "KF9B7LEVQF5C",
    credential_link: "https://www.coursera.org/account/accomplishments/specialization/certificate/KF9B7LEVQF5C"
  },
  {
    title: "Design of Experiments",
    institution: "Arizona State University",
    cert_id: "SK87JFF93GRJ",
    credential_link: "https://www.coursera.org/account/accomplishments/specialization/certificate/SK87JFF93GRJ"
  },
  {
    title: "Data Science Professional",
    institution: "365 Data Science",
    cert_id: "DD-D1F4867EFE",
    credential_link: "https://learn.365datascience.com/certificates/DD-D1F4867EFE/"
  },
  {
    title: "Python Essentials for MLOps",
    institution: "Duke University",
    cert_id: "E7CS9KT8XSRB",
    credential_link: "https://www.coursera.org/account/accomplishments/verify/E7CS9KT8XSRB"
  },
  {
    title: "Product Management for AI and Data Science",
    institution: "365 Data Science",
    cert_id: "CC-8281B931B1",
    credential_link: "https://learn.365datascience.com/certificates/CC-8281B931B1/"
  }
];

// 10 distinct colors for certifications
const certColors = [
  '#6366F1', // Indigo
  '#14B8A6', // Teal
  '#F59E0B', // Amber
  '#EC4899', // Pink
  '#10B981', // Emerald
  '#F43F5E', // Rose
  '#8B5CF6', // Violet
  '#F97316', // Orange
  '#3B82F6', // Blue
  '#22D3EE', // Cyan
];

const Certifications: React.FC = () => {
  return (
    <SectionWrapper id="certifications" title="Certifications">
      <div className="max-w-4xl mx-auto">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => {
            const color = certColors[index % certColors.length];

            return (
              <motion.a
                key={index}
                href={cert.credential_link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="block p-5 rounded-lg shadow bg-white dark:bg-slate-800 border-l-4 hover:shadow-lg transition cursor-pointer"
                style={{ borderLeftColor: color, borderLeftWidth: '4px' }}
              >
                <h3 className="text-lg font-semibold mb-1" style={{ color }}>
                  {cert.title}
                </h3>

                <p className="text-sm font-semibold italic text-slate-600 dark:text-slate-400">
                  {cert.institution}
                </p>

                <p className="text-xs opacity-75 mt-1">
                  Certificate ID: <span className="font-semibold">{cert.cert_id}</span>
                </p>
              </motion.a>
            );
          })}
        </ul>
      </div>
    </SectionWrapper>
  );
};

export default Certifications;
