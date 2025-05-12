"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export type ProjectType = {
  id: string;
  title: string;
  period: string;
  description: string[];
  technologies: string[];
  github?: string;
  demo?: string;
  image: string;
  detailedDescription?: string;
  features?: string[];
  challenges?: string[];
  solutions?: string[];
};

interface ProjectModalProps {
  project: ProjectType | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Function to highlight keywords in text
  const highlightKeywords = (text: string) => {
    // Replace specific keywords with highlighted versions
    return text
      .replace(/Flask/g, '<span class="highlight-subtle">Flask</span>')
      .replace(/web app/g, '<span class="highlight-subtle">web app</span>')
      .replace(/Google OAuth/g, '<span class="highlight">Google OAuth</span>')
      .replace(/SQL Injection/g, '<span class="highlight">SQL Injection</span>')
      .replace(/SQLite/g, '<span class="highlight-subtle">SQLite</span>')
      .replace(
        /Unity Game Engine/g,
        '<span class="highlight">Unity Game Engine</span>'
      )
      .replace(/C#/g, '<span class="highlight-subtle">C#</span>')
      .replace(/WebGL/g, '<span class="highlight-subtle">WebGL</span>')
      .replace(/Docker/g, '<span class="highlight">Docker</span>')
      .replace(/Nginx/g, '<span class="highlight-subtle">Nginx</span>')
      .replace(/SSL/g, '<span class="highlight-subtle">SSL</span>')
      .replace(/React/g, '<span class="highlight-subtle">React</span>')
      .replace(/Node\.js/g, '<span class="highlight-subtle">Node.js</span>')
      .replace(/MongoDB/g, '<span class="highlight-subtle">MongoDB</span>')
      .replace(/Express/g, '<span class="highlight-subtle">Express</span>')
      .replace(/Stripe/g, '<span class="highlight">Stripe</span>')
      .replace(/AWS/g, '<span class="highlight-subtle">AWS</span>');
  };

  // Badge color classes based on technology type
  const getBadgeColor = (tech: string) => {
    const techCategories: Record<string, string> = {
      // Languages
      Python:
        "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800",
      C: "bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-800",
      "C#": "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800",
      "C++":
        "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800",
      JavaScript:
        "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800",
      TypeScript:
        "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800",

      // Frameworks
      React:
        "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800",
      "Node.js":
        "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800",
      "Next.js":
        "bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-800",
      Flask:
        "bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-800",
      Django:
        "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800",
      Express:
        "bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-800",

      // Databases
      MongoDB:
        "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800",
      SQLite:
        "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800",

      // Tools
      Docker:
        "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800",
      Github:
        "bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-800",
      Linux:
        "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800",
      Nginx:
        "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800",

      // Game Dev
      Unity:
        "bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-800",
      WebGL:
        "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 border-red-200 dark:border-red-800",

      // Services
      AWS: "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-800",
      Stripe:
        "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800",
      "Google OAuth":
        "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800",
      SSL: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800",
      Immich:
        "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800",
    };

    return (
      techCategories[tech] ||
      "bg-gray-100 dark:bg-gray-800/50 text-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700"
    );
  };

  if (!isMounted) return null;
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl w-[90vw] max-h-[90vh] overflow-y-auto p-0 border-gray-200 dark:border-[#252830] dark:bg-[#21242b]">
        <div className="relative w-full h-[40vh] overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
            <DialogTitle className="text-3xl font-medium text-white mb-2">
              {project.title}
            </DialogTitle>
            <DialogDescription className="text-gray-200">
              {project.period}
            </DialogDescription>
          </div>
        </div>

        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, i) => (
              <Badge
                key={i}
                variant="outline"
                className={`tech-badge ${getBadgeColor(tech)}`}
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-3 dark:text-white flex items-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-400 w-2 h-6 rounded mr-2 inline-block"></span>
                Overview
              </h3>
              {project.id === "gumacoin" && (
                <div className="m-10">
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold">
                      Live Price (DEX Screener)
                    </h4>
                    <iframe
                      src="https://dexscreener.com/solana/5a5izbysyg1jhyb7aqasawwtxg6rnhvqlws4yakgwqca?embed=1"
                      style={{
                        width: "100%",
                        height: "400px",
                        border: "none",
                        borderRadius: "12px",
                      }}
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}
              <div className="space-y-2">
                {project.description.map((item, i) => (
                  <p
                    key={i}
                    className="text-gray-700 dark:text-gray-300 font-light"
                    dangerouslySetInnerHTML={{
                      __html: highlightKeywords(item),
                    }}
                  />
                ))}
              </div>

              {project.detailedDescription && (
                <p className="mt-4 text-gray-700 dark:text-gray-300 font-light">
                  {project.detailedDescription}
                </p>
              )}
            </div>

            {project.features && project.features.length > 0 && (
              <div>
                <h3 className="text-xl font-medium mb-3 dark:text-white flex items-center">
                  <span className="bg-gradient-to-r from-green-500 to-emerald-400 w-2 h-6 rounded mr-2 inline-block"></span>
                  Key Features
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="text-gray-700 dark:text-gray-300 font-light"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.challenges && project.challenges.length > 0 && (
              <div>
                <h3 className="text-xl font-medium mb-3 dark:text-white flex items-center">
                  <span className="bg-gradient-to-r from-orange-500 to-amber-400 w-2 h-6 rounded mr-2 inline-block"></span>
                  Challenges
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  {project.challenges.map((challenge, i) => (
                    <li
                      key={i}
                      className="text-gray-700 dark:text-gray-300 font-light"
                    >
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.solutions && project.solutions.length > 0 && (
              <div>
                <h3 className="text-xl font-medium mb-3 dark:text-white flex items-center">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-400 w-2 h-6 rounded mr-2 inline-block"></span>
                  Solutions
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  {project.solutions.map((solution, i) => (
                    <li
                      key={i}
                      className="text-gray-700 dark:text-gray-300 font-light"
                    >
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="flex gap-4 mt-8">
            {project.github && (
              <Button
                variant="outline"
                asChild
                className="dark:border-[#252830] dark:bg-[#191c21] dark:text-white hover:dark:bg-[#252830] transition-colors"
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  <span>View on GitHub</span>
                </a>
              </Button>
            )}

            {project.demo && (
              <Button
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white transition-colors"
                asChild
              >
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>View Live Demo</span>
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
