import React from "react";
import { motion } from "framer-motion";

// Icons
const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const COLORS = [
  "#6366F1",
  "#14B8A6",
  "#F59E0B",
  "#EC4899",
  "#10B981",
  "#F43F5E",
  "#8B5CF6",
  "#F97316",
];

const SectionWrapper = ({ children, id, title }) => (
  <section id={id} className="mb-20">
    <div className="text-center mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-4"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "6rem" }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="h-1 bg-blue-500 mx-auto"
      ></motion.div>
    </div>
    {children}
  </section>
);

// ✅ All projects (merged and inline)
const allProjects = [
  {
    title: "Vision-Master",
    description:
      "An interactive web app designed to improve eye focus and reduce digital strain through dynamic eye-tracking exercises.",
    stack: ["HTML", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/manish-surya-r/vision-master",
      live: "https://vision-master.netlify.app/",
    },
  },
  {
    title: "3D Interactive Chess Game",
    description:
      "A browser-based 3D chess application featuring realistic piece movement, dynamic lighting, and interactive camera controls.",
    stack: ["Three.js", "JavaScript", "HTML", "CSS", "Vite", "React"],
    links: {
      github: "https://github.com/manish-surya-r/3d-chess-app",
      live: "https://manish-surya-r.github.io/3d-chess-app/",
    },
  },
  {
    title: "PyClean: AI-Powered Python Code Beautifier",
    description:
      "A web app using the Google Gemini API to refactor and format messy Python code to PEP 8 standards, with before–after comparisons.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Prism.js", "Google Gemini API"],
    links: { github: "https://github.com/manish-surya-r/pyclean" },
  },
  {
    title: "Finance Tracker Web App",
    description:
      "A personal finance tracker that visualizes income and expenses in real time using interactive charts.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "Firebase"],
    links: {
      github: "https://github.com/manish-surya-r/finance-tracker-app",
      live: "https://manish-surya-r.github.io/finance-tracker-app/",
    },
  },
  {
    title: "Simple Unix Shell in C",
    description:
      "A console-based Unix-style shell in C supporting command parsing, execution, built-in commands, and basic piping/redirects.",
    stack: ["C", "Makefile", "Linux"],
    links: { github: "https://github.com/manish-surya-r/shell-using-c" },
  },
  {
    title: "Pistachio Classification",
    description:
      "Built a machine learning model to classify pistachio varieties based on morphological features for quality control automation.",
    stack: ["Python", "scikit-learn", "pandas", "Matplotlib"],
    links: {
      github:
        "https://github.com/manish-surya/python-projects/tree/main/Pistachio_Classification",
    },
  },
  {
    title: "Diabetes Prediction Using Neural Networks",
    description:
      "Developed a neural network-based model to predict diabetes risk from clinical data using TensorFlow/Keras.",
    stack: ["Python", "TensorFlow", "pandas", "NumPy", "Streamlit"],
    links: {
      github:
        "https://github.com/manish-surya/machine-learning-projects/tree/main/health-data-projects/diabetes-prediction",
    },
  },
  {
    title: "Customer Intent Segmentation",
    description:
      "Performed customer segmentation using clustering to uncover patterns for personalized marketing strategies.",
    stack: ["Python", "scikit-learn", "pandas", "Seaborn", "Power BI"],
    links: {
      github: "https://github.com/manish-surya/customer-intent-segmentation",
    },
  },
  {
    title: "Network Intrusion Prediction",
    description:
      "Implemented a machine learning intrusion detection system (IDS) to classify network traffic and detect attacks.",
    stack: ["Python", "scikit-learn", "pandas", "NumPy", "Matplotlib"],
    links: {
      github:
        "https://github.com/manish-surya/python-projects/tree/main/Network_Intrution_Prediction",
    },
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8" id="projects">
      <div className="max-w-7xl mx-auto">
        <SectionWrapper id="projects" title="Projects">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {allProjects.map((proj, i) => {
              const color = COLORS[i % COLORS.length];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="shadow-lg overflow-hidden bg-white dark:bg-slate-800"
                >
                  <div className="p-6">
                    <h3
                      className="text-2xl font-bold mb-2"
                      style={{ color }}
                    >
                      {proj.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {proj.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {proj.stack.map((tech, j) => (
                        <span
                          key={j}
                          className="px-2 py-1 rounded-full text-xs font-medium"
                          style={{
                            backgroundColor: `${COLORS[(i + j) % COLORS.length]}22`,
                            color: COLORS[(i + j) % COLORS.length],
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {proj.links.github && (
                        <a
                          href={proj.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <GitHubIcon /> Code
                        </a>
                      )}
                      {proj.links.live && (
                        <a
                          href={proj.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLinkIcon /> Live
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </SectionWrapper>
      </div>
    </div>
  );
};

export default Projects;
