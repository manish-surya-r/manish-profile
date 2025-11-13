import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [result, setResult] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    data.append("access_key", "72cc2364-b3e3-4419-be49-50fad3bf25b6");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await response.json();
      if (json.success) {
        setResult("Message sent successfully!");
        form.reset();
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setResult("Failed to submit. Please try again later.");
    }
  };

  return (
    <section
      className="w-full py-24 bg-gradient-to-b from-indigo-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"
      id="contact"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear from you. Drop me a message below or connect through social platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Contact Form */}
          <div className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10 border border-gray-100 dark:border-gray-700 space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  required
                  className="w-full px-5 py-4 rounded-2xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900 transition shadow-sm hover:shadow-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  required
                  className="w-full px-5 py-4 rounded-2xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900 transition shadow-sm hover:shadow-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full px-5 py-4 rounded-2xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900 transition shadow-sm hover:shadow-md resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-2xl transition shadow-lg hover:shadow-xl text-lg"
              >
                Send Message
              </button>

              {result && (
                <p
                  className={`mt-2 text-center font-medium ${
                    result.includes("success") ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {result}
                </p>
              )}
            </form>
          </div>

          {/* Sidebar - Social Links */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-6 text-center">
                Find Me Online
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <SocialIcon
                  href="https://github.com/manish-surya"
                  icon={<FaGithub size={24} />}
                  label="AI/ML Projects"
                  bgColor="bg-indigo-100 dark:bg-indigo-900/30"
                  iconColor="text-indigo-600 dark:text-indigo-400"
                />
                <SocialIcon
                  href="https://www.linkedin.com/in/manishcse456/"
                  icon={<FaLinkedin size={24} />}
                  label="LinkedIn"
                  bgColor="bg-blue-100 dark:bg-blue-900/30"
                  iconColor="text-blue-600 dark:text-blue-400"
                />
                <SocialIcon
                  href="https://www.geeksforgeeks.org/user/mxr8f3nd/"
                  icon={<SiGeeksforgeeks size={24} />}
                  label="GeeksForGeeks"
                  bgColor="bg-green-100 dark:bg-green-900/30"
                  iconColor="text-green-600 dark:text-green-400"
                />
                <SocialIcon
                  href="https://github.com/manish-surya-r"
                  icon={<FaGithub size={24} />}
                  label="Web Projects"
                  bgColor="bg-teal-100 dark:bg-teal-900/30"
                  iconColor="text-teal-600 dark:text-teal-400"
                />
                <SocialIcon
                  href="https://leetcode.com/u/manish-surya/"
                  icon={<SiLeetcode size={24} />}
                  label="LeetCode"
                  bgColor="bg-orange-100 dark:bg-orange-900/30"
                  iconColor="text-orange-600 dark:text-orange-400"
                />
                <SocialIcon
                  href="mailto:manish.surya.r@gmail.com"
                  icon={<FaEnvelope size={24} />}
                  label="Email"
                  bgColor="bg-rose-100 dark:bg-rose-900/30"
                  iconColor="text-rose-600 dark:text-rose-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialIcon: React.FC<{
  href: string;
  icon: React.ReactNode;
  label: string;
  bgColor: string;
  iconColor: string;
}> = ({ href, icon, label, bgColor, iconColor }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center justify-center h-16 rounded-2xl ${bgColor} ${iconColor} transition transform hover:scale-110 hover:shadow-lg group relative`}
    title={label}
  >
    <div>{icon}</div>
    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
      {label}
    </span>
  </a>
);

export default Contact;
