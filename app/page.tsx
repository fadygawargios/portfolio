"use client";

import Navbar from "@/components/navbar";
import TechStack from "@/components/tech-stack";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Certifications from "@/components/certifications";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#191c21]">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Full-screen banner image with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://perkinswill.com/wp-content/uploads/2019/07/project_Eng5_7_01-scaled.jpg"
            alt="Engineering 7 Picture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#191c21] dark:to-[#191c21]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6 text-white">
              Fady Gawargios
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-200 mb-8 font-normal">
              Computer Engineering at UWaterloo
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light">
              Hi there! 👋 I'm passionate about building innovative software
              solutions and exploring the intersection of hardware and software.
              Welcome to my little corner of the web.
            </p>

            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/fadygawargios"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6 text-white" />
              </a>
              <a
                href="https://linkedin.com/in/fadygawargios"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-[#191c21]">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-medium mb-2 text-center text-gray-900 dark:text-white">
            About Me 👨‍💻
          </h2>
          <div className="gradient-divider"></div>
          <div className="max-w-3xl mx-auto text-base sm:text-lg md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 font-light">
            <p className="mb-4">
              I'm a <span className="highlight">Computer Engineering</span>{" "}
              student at the University of Waterloo with a passion for{" "}
              <span className="highlight-subtle">software development</span> and{" "}
              <span className="highlight-subtle">problem-solving</span>. My
              experience spans from{" "}
              <span className="highlight-subtle">web development</span> to{" "}
              <span className="highlight-subtle">embedded systems</span>, and
              I'm constantly looking to expand my knowledge and skills in the
              tech industry.
            </p>
            <p>
              With a strong foundation in{" "}
              <span className="highlight-subtle">
                multiple programming languages
              </span>{" "}
              and frameworks, I enjoy tackling{" "}
              <span className="highlight-underline">complex challenges</span>{" "}
              and creating{" "}
              <span className="highlight-underline">
                efficient, user-friendly solutions
              </span>
              . I'm particularly interested in the intersection of{" "}
              <span className="highlight">software and hardware</span>, and how
              they can work together to create innovative products.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <TechStack />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Education & Certifications Section */}
      <Certifications />

      {/* Footer with Contact Information */}
      <footer className="py-12 bg-white dark:bg-[#191c21] border-t border-gray-200 dark:border-[#252830]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-medium mb-4 text-gray-900 dark:text-white">
                Get In Touch 👋
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-blue-500/10 to-cyan-400/10 dark:from-blue-500/20 dark:to-cyan-400/20 p-2 rounded-full">
                    <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <a
                    href="mailto:fgawargi@uwaterloo.ca"
                    className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:underline transition-colors"
                  >
                    fgawargi@uwaterloo.ca
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-purple-500/10 to-pink-400/10 dark:from-purple-500/20 dark:to-pink-400/20 p-2 rounded-full">
                    <Linkedin className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <a
                    href="https://linkedin.com/in/fadygawargios"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:underline transition-colors"
                  >
                    linkedin.com/in/fadygawargios
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-orange-500/10 to-amber-400/10 dark:from-orange-500/20 dark:to-amber-400/20 p-2 rounded-full">
                    <Github className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                  </div>
                  <a
                    href="https://github.com/fadygawargios"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:underline transition-colors"
                  >
                    github.com/fadygawargios
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4 text-gray-900 dark:text-white">
                Quick Links
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Home",
                  "About",
                  "Skills",
                  "Experience",
                  "Projects",
                  "Education",
                ].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:underline transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(`#${item.toLowerCase()}`)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-[#252830] pt-6 text-center">
            <p className="text-gray-600 dark:text-gray-400 font-light">
              © {new Date().getFullYear()} Fady Gawargios. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
