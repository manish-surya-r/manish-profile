import React from 'react';
import { motion } from 'framer-motion';
import certificationsData from '../data/certifications.json';

type Certification = {
  title: string;
  institution: string;
  cert_id: string;
  credential_link: string;
};

const certColors = ['#6366F1', '#14B8A6', '#F59E0B', '#EC4899', '#10B981'];

const Certifications: React.FC = () => {
  const certifications = certificationsData as Certification[];

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/10">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Professional Certifications</h2>
          <div className="h-1 bg-pink-500 w-16 mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="block p-5 rounded-2xl bg-white dark:bg-slate-800/40 border-l-4 hover:shadow-md transition-all hover:scale-[1.01] cursor-pointer border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-sm"
                style={{ borderLeftColor: color, borderLeftWidth: '4px' }}
              >
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-base font-bold mb-1 tracking-tight hover:underline transition-all" style={{ color }}>
                      {cert.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {cert.institution}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-[10px] text-slate-400">
                    <span>Credential ID: {cert.cert_id}</span>
                    <span className="text-indigo-500 dark:text-indigo-400 font-semibold hover:underline">Verify &rarr;</span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
