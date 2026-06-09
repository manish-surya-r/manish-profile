import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaEnvelope, FaBookOpen } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiMedium } from "react-icons/si";

const blobVariants = {
  float: {
    y: ["0%", "-6%", "0%"],
    x: ["0%", "4%", "0%"],
    transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
  },
  floatReverse: {
    y: ["0%", "6%", "0%"],
    x: ["0%", "-4%", "0%"],
    transition: { duration: 9, repeat: Infinity, ease: "easeInOut" },
  }
};

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex flex-col items-center justify-center text-center relative overflow-hidden py-12 px-6 bg-gradient-to-b from-indigo-50/20 via-transparent to-transparent dark:from-indigo-950/10"
    >
      {/* Background Ambient Glows */}
      <motion.div
        className="absolute w-[24rem] h-[24rem] bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl top-10 left-1/4 -z-10"
        animate={blobVariants.float}
      />
      <motion.div
        className="absolute w-[20rem] h-[20rem] bg-teal-400/10 dark:bg-teal-400/20 rounded-full blur-3xl bottom-10 right-1/4 -z-10"
        animate={blobVariants.floatReverse}
      />

      <div className="max-w-4xl mx-auto z-10">
        {/* Profile Image with Ring Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-48 h-48 md:w-52 md:h-52 mx-auto mb-8"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-teal-400 rounded-full blur-md opacity-70 animate-pulse"></div>
          <img
            src="/images/headshot.png"
            alt="Manish Routhu"
            className="w-full h-full rounded-full object-cover relative z-10 border-4 border-white dark:border-slate-800 shadow-xl"
            onError={(e) => {
              // fallback in case of loading issues
              e.currentTarget.src = "https://media.licdn.com/dms/image/v2/D4E03AQF_lTqu4oz7Rg/profile-displayphoto-crop_800_800/B4EZiApKs0GYAI-/0/1754504934864?e=1772668800&v=beta&t=ALJEtjTmsV6oltlmW8RaE_6CWFtrMkSTrKscqJa0ZQE";
            }}
          />
        </motion.div>

        {/* Name and Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400 dark:from-indigo-400 dark:via-purple-400 dark:to-teal-300"
        >
          Manish Sri Sai Surya Routhu
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl font-medium mb-6 text-slate-600 dark:text-slate-400"
        >
          <Typewriter
            options={{
              strings: [
                "Software Development Engineer",
                "AI & Data Science Specialist",
                "Creator of VS Code Extensions",
                "Open Source Contributor"
              ],
              autoStart: true,
              loop: true,
              delay: 60,
              deleteSpeed: 40,
            }}
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-base md:text-lg max-w-2xl mx-auto mb-10 text-slate-500 dark:text-slate-400 leading-relaxed"
        >
          Computer Science graduate specializing in building intelligent, high-performant software applications. Bridging advanced machine learning models with polished user experiences.
        </motion.p>

        {/* Professional Stats Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12"
        >
          <StatCard number="3" label="VS Code Extensions" />
          <StatCard number="1" label="PyPI CLI Package" />
          <StatCard number="2" label="Research Papers" />
          <StatCard number="3.9" label="MS CS GPA (CWRU)" />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex justify-center gap-4 flex-wrap mb-10"
        >
          <a
            href="#/projects"
            className="bg-indigo-600 dark:bg-indigo-500 text-white px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-indigo-500/20 hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-all hover:scale-[1.03]"
          >
            Explore Projects
          </a>
          <a
            href="https://drive.google.com/file/d/1_HFgXRPOqo16NFZNN8whU8HnJYB68toy/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-slate-300 dark:border-slate-700 hover:border-slate-500 dark:hover:border-slate-500 px-8 py-3.5 rounded-xl font-bold transition-all hover:scale-[1.03]"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Social Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center gap-4 text-slate-500 dark:text-slate-400 flex-wrap"
        >
          <SocialLink href="https://github.com/manish-surya" icon={<FaGithub size={20} />} label="AI GitHub" />
          <SocialLink href="https://github.com/manish-surya-r" icon={<FaGithub size={20} />} label="Web GitHub" />
          <SocialLink href="https://www.linkedin.com/in/manishcse456/" icon={<FaLinkedin size={20} />} label="LinkedIn" />
          <SocialLink href="https://medium.com/@manish.surya.r" icon={<SiMedium size={20} />} label="Medium" />
          <SocialLink href="https://leetcode.com/u/manish-surya/" icon={<SiLeetcode size={20} />} label="LeetCode" />
          <SocialLink href="mailto:manish.surya.r@gmail.com" icon={<FaEnvelope size={20} />} label="Email" />
        </motion.div>
      </div>
    </section>
  );
};

const StatCard: React.FC<{ number: string; label: string }> = ({ number, label }) => (
  <div className="bg-white/60 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-200/50 dark:border-slate-700/50 shadow-sm backdrop-blur-sm">
    <div className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-teal-500 dark:from-indigo-400 dark:to-teal-300">
      {number}
    </div>
    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">{label}</div>
  </div>
);

const SocialLink: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800/60 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all flex items-center gap-1.5 text-sm font-medium border border-slate-200/40 dark:border-slate-700/40"
  >
    {icon}
    <span>{label}</span>
  </a>
);

export default Hero;
