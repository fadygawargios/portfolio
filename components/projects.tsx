"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Server, Church, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectModal, { type ProjectType } from "@/components/project-modal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: ProjectType[] = [
    {
      id: "platformer",
      title: "2D Platformer Game",
      period: "Feb. 2023 – May 2023",
      description: [
        "Designed and built a 2D platformer game using Unity Game Engine, C#, Visual Studio, and Git version control.",
        "Built game versions into accessible web app via WebGL.",
        "Applied design cycle methodology in identifying and optimizing game performance and overall experience.",
      ],
      technologies: ["Unity", "C#", "Visual Studio", "Github", "WebGL"],
      github: "https://github.com/fadygawargios/2D-Platformer",
      demo: "https://fadygawargios.github.io/2D-Platformer/",
      image: "/2DPlatformer.png",
      detailedDescription:
        "This 2D platformer game was created as a passion project to explore game development using Unity. The game features multiple levels with increasing difficulty, collectible items, and various obstacles that challenge the player's timing and precision.",
      features: [
        "Three very challenging levels with unique themes",
        "Start-screen & End-Screen",
        "Cherry Collection & Count",
        "Responsive controls optimized for both keyboard and gamepad",
        "Progressive difficulty scaling",
      ],
      challenges: [
        "Optimizing performance for web deployment",
        "Creating responsive controls that feel natural",
        "Balancing game difficulty to maintain player engagement",
      ],
      solutions: [
        "Implemented asset optimization techniques to reduce load times",
        "Fine-tuned character controller physics for smooth gameplay",
        "Conducted playtesting sessions to gather feedback and adjust difficulty curves",
      ],
    },
    {
      id: "scoutingapp",
      title: "FIRST Robotics Scouting Web App",
      period: "Jan. 2023 – Apr. 2024",
      description: [
        "Led the development of a full-stack web application for scouting and tracking performance metrics during FIRST Robotics competitions.",
        "Collaborated in an agile environment using TypeScript, React, Firebase, SVN, and Docker to build and deploy a responsive and reliable tool.",
        "Wrote unit tests for API calls and core data operations to ensure robust performance during events.",
        "Resolved real-time input bugs and implemented user-requested features, significantly improving user experience and data accuracy.",
      ],
      technologies: ["TypeScript", "React", "Firebase", "SVN", "Docker"],
      image: "/scoutingapp.png",
      detailedDescription:
        "The FIRST Robotics Scouting App is a full-stack tool built to help team members collect and analyze real-time performance data during competitions. Designed for usability in fast-paced environments, the app supports live data entry, offline syncing, and dynamic team analysis features, enhancing strategic decisions during matches.",
      features: [
        "Real-time scouting and data collection interface",
        "Live and offline data syncing with Firebase",
        "Bug-resistant UI with validation for rapid entry",
        "Custom charts and insights for match performance",
        "Built using TypeScript, React, and Docker for deployment",
      ],
      challenges: [
        "Ensuring stable performance during fast-paced competition use",
        "Managing offline-first data syncing in Firebase",
        "Coordinating version control with SVN in a team setting",
      ],
      solutions: [
        "Implemented data caching and UI safeguards against entry loss",
        "Wrote unit tests and fallback sync mechanisms",
        "Streamlined CI/CD with Docker and improved collaboration through task tracking",
      ],
    },

    {
      id: "homeserver",
      title: "Home Web Server",
      period: "Jan. 2024 – Present",
      description: [
        "Built and configured a home server to host personal projects and services.",
        "Set up Docker containers for various applications including this portfolio website.",
        "Implemented Immich as a self-hosted photo backup and sharing solution.",
        "Configured reverse proxy with Nginx and SSL certificates for secure access.",
        "Set up automated backups and monitoring for system health.",
      ],
      technologies: ["Linux", "Docker", "Nginx", "SSL", "Immich", "Next.js"],
      github: "https://github.com/fadygawargios/home-server-config",
      image: "/placeholder.svg?height=600&width=800",
      detailedDescription:
        "This project involved setting up a home server to host various services including this portfolio website and a self-hosted photo backup solution. The server runs on Linux with Docker containers for easy management and deployment of services.",
      features: [
        "Self-hosted portfolio website with automatic deployment",
        "Immich photo backup and sharing solution",
        "Secure access with SSL certificates",
        "Automated backups to external storage",
        "System monitoring and alerts",
        "Remote access via VPN",
      ],
      challenges: [
        "Ensuring security for a publicly accessible server",
        "Managing Docker containers and their dependencies",
        "Setting up proper networking and port forwarding",
        "Implementing reliable backup solutions",
      ],
      solutions: [
        "Implemented strict firewall rules and regular security updates",
        "Used Docker Compose for container orchestration",
        "Configured proper networking with a reverse proxy",
        "Set up automated backups to multiple locations",
      ],
    },
    {
      id: "churchwebsite",
      title: "Church Website",
      period: "Mar. 2023 – Aug. 2023",
      description: [
        "Designed and developed a website for a local church community.",
        "Created a content management system for staff to update events and sermons.",
        "Implemented a donation system with secure payment processing.",
        "Built a responsive design that works well on all devices.",
        "Added features for live streaming services and sermon archives.",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "AWS"],
      github: "https://github.com/yafet188/st-mary-st-maurice-website",
      demo: "https://church-demo.fadygawargios.com",
      image: "/ChurchWebsite.png",
      detailedDescription:
        "This project was created for a local church to help them establish an online presence and provide digital services to their congregation. The website includes features for event management, sermon archives, live streaming, and online donations.",
      features: [
        "Event calendar with registration capabilities",
        "Sermon archive with search functionality",
        "Live streaming integration for services",
        "Secure donation system with Stripe",
        "Content management system for staff",
        "Mobile-responsive design",
        "Newsletter subscription",
      ],
      challenges: [
        "Creating an intuitive CMS for non-technical staff",
        "Implementing secure payment processing for donations",
        "Optimizing video streaming for various devices",
        "Ensuring accessibility for all users",
      ],
      solutions: [
        "Developed a simple, user-friendly CMS interface",
        "Integrated Stripe for secure payment processing",
        "Used AWS services for reliable video streaming",
        "Implemented WCAG guidelines for accessibility",
      ],
    },
    {
      id: "gumacoin",
      title: "$GUMA Coin",
      period: "May 2024 – Present",
      demo: "https://explorer.solana.com/address/mntmw9xGFfLBTWHNTyztc4JyZJGf7dPYMCF3Vz9x953",
      description: [
        "Launched GUMA, a community-driven meme cryptocurrency built on the Solana blockchain.",
        "Deployed the coin using secure, mint-locked smart contracts and burned liquidity removal rights to ensure decentralization.",
        "Made 950,000 of 1 million total tokens publicly available on Raydium and other decentralized exchanges (DEXs).",
        "Built hype and community through social media campaigns, airdrops, and incentives.",
      ],
      technologies: ["Solana", "Rust", "Anchor", "DEX", "Raydium"],
      image: "/GumaCoin.png",
      detailedDescription:
        "GUMA Coin is a decentralized coin on the Solana blockchain with a total supply of 1 million. It's designed to be community-owned and transparently launched, with no centralized liquidity control. The token was launched on Raydium with LP burn and mint-locking for trust and safety. Aimed at building a meme-driven community, GUMA uses viral marketing and grassroots engagement to drive adoption.",
      features: [
        "Mint-locked supply (1 million max tokens)",
        "Decentralized liquidity (LP burn)",
        "DEX listings (Raydium, Jupiter)",
        "Live price tracking via DEX Screener widget",
      ],
      challenges: [
        "Building credibility in a crowded meme-coin market",
        "Ensuring liquidity safety and contract trust",
        "Driving initial community engagement and holders",
      ],
      solutions: [
        "Implemented LP lock and mint-lock to build trust",
        "Launched with detailed transparency and fair distribution",
      ],
    },

    {
      id: "gradebook",
      title: "Online Gradebook",
      period: "Oct. 2022 – Jun. 2023",
      description: [
        "Identified communicational shortfalls between students and teachers and developed a Flask web app to address them.",
        "Used Google OAuth to allow secure login and logout.",
        "Implemented safety measures to avoid SQL Injection Attacks, open redirect, etc.",
        "Stored students' marks in a SQLite database and displayed them individually with a Flask front end.",
        "Allowed teachers to create several online classes and assignments to manage grading more effectively.",
      ],
      technologies: ["Python", "Flask", "SQLite", "Github", "Google OAuth"],
      github: "https://github.com/fadygawargios/Gradebook-App",
      image: "/OnlineGradebook.png",
      detailedDescription:
        "The Online Gradebook project was developed to bridge the communication gap between students and teachers. It provides a centralized platform for teachers to manage grades and for students to track their academic progress in real-time.",
      features: [
        "Secure authentication using Google OAuth",
        "Role-based access control for students and teachers",
        "Real-time grade updates and notifications",
        "Customizable grading scales and categories",
        "Detailed analytics and performance tracking",
        "Export functionality for reports and grade sheets",
      ],
      challenges: [
        "Ensuring data security and privacy compliance",
        "Building an intuitive interface for both teachers and students",
        "Implementing a flexible grading system that works for different course types",
      ],
      solutions: [
        "Implemented comprehensive security measures including SQL injection prevention",
        "Conducted user testing with both teachers and students to refine the UI/UX",
        "Developed a customizable grading framework that supports various assessment types",
      ],
    },
  ];

  const openProjectModal = (project: ProjectType) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // Clear after animation
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

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-[#191c21]">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-medium mb-2 text-center text-gray-900 dark:text-white">
          Projects 🚀
        </h2>
        <div className="gradient-divider"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              id={project.id}
              className="overflow-hidden border border-gray-200 dark:border-[#252830] hover:shadow-md transition-all duration-300 cursor-pointer group bg-white dark:bg-[#21242b]"
              onClick={() => openProjectModal(project)}
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 flex gap-2">
                  {project.id === "homeserver" && (
                    <div className="p-1.5 rounded-full bg-white/80 text-gray-800">
                      <Server className="h-4 w-4" />
                    </div>
                  )}
                  {project.id === "homeserver" && (
                    <div className="p-1.5 rounded-full bg-white/80 text-gray-800">
                      <ImageIcon className="h-4 w-4" />
                    </div>
                  )}
                  {project.id === "churchwebsite" && (
                    <div className="p-1.5 rounded-full bg-white/80 text-gray-800">
                      <Church className="h-4 w-4" />
                    </div>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-between items-center">
                      <span className="text-white text-sm">
                        {project.period}
                      </span>
                      <div className="flex gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github className="h-4 w-4 text-white" />
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="h-4 w-4 text-white" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 font-light">
                  {project.description[0]}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className={`tech-badge ${getBadgeColor(tech)}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge
                      variant="outline"
                      className="bg-gray-100 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 tech-badge"
                    >
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>
                <Button
                  variant="ghost"
                  className="w-full mt-4 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#252830]"
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />
    </section>
  );
};

export default Projects;
