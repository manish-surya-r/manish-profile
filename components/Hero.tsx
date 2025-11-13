import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const blobVariants = {
  float: {
    y: ["0%", "-10%", "0%"],
    transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
  },
};

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden py-12"
    >
      {/* Background Blobs */}
      <motion.div
        className="absolute w-[26rem] h-[26rem] bg-indigo-500/30 rounded-full blur-3xl top-10 left-1/4"
        animate={blobVariants.float}
      />
      <motion.div
        className="absolute w-[22rem] h-[22rem] bg-teal-400/30 rounded-full blur-3xl bottom-10 right-1/4"
        animate={blobVariants.float}
      />
      <motion.div
        className="absolute w-[20rem] h-[20rem] bg-pink-400/25 rounded-full blur-3xl top-1/3 right-1/3"
        animate={blobVariants.float}
      />
      <motion.div
        className="absolute w-[18rem] h-[18rem] bg-amber-300/25 rounded-full blur-3xl bottom-1/3 left-1/3"
        animate={blobVariants.float}
      />

      {/* Content */}
      <div className="relative z-10 px-6">
        {/* Profile Image */}
        <img
          src="https://media.licdn.com/dms/image/v2/D4E03AQF_lTqu4oz7Rg/profile-displayphoto-crop_800_800/B4EZiApKs0GYAI-/0/1754504934864?e=1764806400&v=beta&t=Tlv3H7rioa6519kobtzL1MN7xSrXekBLxjwe3YPnvK0"
          alt="Manish Routhu"
          className="w-48 h-48 md:w-56 md:h-56 rounded-full mx-auto mb-6 shadow-lg ring-4 ring-indigo-300/40 object-cover -mt-6"
        />

        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-400">
          Hi, I’m Manish
        </h1>

        {/* Typewriter */}
        <div className="text-xl md:text-2xl mb-4 text-slate-600 dark:text-slate-400">
          <Typewriter
            options={{
              strings: [
                "Software Developer",
                "AI & Data Science Enthusiast",
                "Full-Stack Web Developer",
              ],
              autoStart: true,
              loop: true,
              delay: 60,
              deleteSpeed: 40,
            }}
          />
        </div>

        {/* Subtitle */}
        <p className="text-md md:text-lg max-w-2xl mx-auto mb-8 text-slate-500 dark:text-slate-400">
          Building intelligent systems that merge AI, data, and software craftsmanship.
        </p>

        {/* Primary Buttons */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap lg:flex-nowrap">
          <a
            href="#projects"
            className="bg-gradient-to-r from-indigo-500 to-teal-400 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 shadow-md hover:shadow-lg transition-all text-center"
            style={{ minWidth: "180px" }}
          >
            📁 View Projects
          </a>
          <a
            href="/resume.pdf"
            download
            className="bg-gradient-to-r from-teal-400 to-indigo-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 shadow-md hover:shadow-lg transition-all text-center"
            style={{ minWidth: "180px" }}
          >
            📄 Download Resume
          </a>
        </div>

        {/* GitHub Buttons */}
        <div className="flex justify-center gap-4 mb-6 flex-wrap lg:flex-nowrap">
          <a
            href="https://github.com/manish-surya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border-2 border-indigo-500 rounded-lg justify-center hover:scale-105 transition-all"
            style={{ minWidth: "160px" }}
          >
            <span className="text-indigo-500">
              <FaGithub size={22} />
            </span>
            AI/ML Projects
          </a>
          <a
            href="https://github.com/manish-surya-r"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border-2 border-teal-500 rounded-lg justify-center hover:scale-105 transition-all"
            style={{ minWidth: "160px" }}
          >
            <span className="text-teal-500">
              <FaGithub size={22} />
            </span>
            Web Projects
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center flex-wrap gap-4 text-slate-600 dark:text-slate-300">
          <a
            href="https://www.linkedin.com/in/manishcse456/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center border-2 border-blue-600 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900 transition relative group"
          >
            <span className="text-blue-600">
              <FaLinkedin size={24} />
            </span>
            <span className="absolute -top-8 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
              LinkedIn
            </span>
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/mxr8f3nd/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center border-2 border-green-600 rounded-md hover:bg-green-50 dark:hover:bg-green-900 transition relative group"
          >
            <span className="text-green-600">
              <SiGeeksforgeeks size={24} />
            </span>
            <span className="absolute -top-8 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
              GeeksforGeeks
            </span>
          </a>
          <a
            href="https://leetcode.com/u/manish-surya/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center border-2 border-yellow-500 rounded-md hover:bg-yellow-50 dark:hover:bg-yellow-900 transition relative group"
          >
            <span className="text-yellow-500">
              <SiLeetcode size={24} />
            </span>
            <span className="absolute -top-8 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
              LeetCode
            </span>
          </a>
          <a
            href="mailto:manish.surya.r@gmail.com"
            className="w-12 h-12 flex items-center justify-center border-2 border-red-500 rounded-md hover:bg-red-50 dark:hover:bg-red-900 transition relative group"
          >
            <span className="text-red-500">
              <FaEnvelope size={24} />
            </span>
            <span className="absolute -top-8 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
              Email
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
