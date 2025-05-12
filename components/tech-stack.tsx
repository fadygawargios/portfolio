"use client";

import { Badge } from "@/components/ui/badge";

const TechStack = () => {
  // Skill categories with their items and project mappings
  const skillCategories = [
    {
      name: "Languages",
      color: "from-blue-400/70 to-cyan-300/70",
      textColor: "text-blue-600 dark:text-blue-400",
      skills: [
        { name: "Python", projectId: "gradebook" },
        { name: "C", projectId: null },
        { name: "C++", projectId: null },
        { name: "C#", projectId: "platformer" },
        { name: "Visual Basic", projectId: null },
        { name: "Java", projectId: null },
        { name: "JavaScript", projectId: "churchwebsite" },
        { name: "TypeScript", projectId: "scoutingapp" },
        { name: "SQL", projectId: "gradebook" },
        { name: "HTML", projectId: "churchwebsite" },
        { name: "CSS", projectId: "churchwebsite" },
      ],
    },
    {
      name: "Frameworks & Engines",
      color: "from-purple-400/70 to-pink-300/70",
      textColor: "text-purple-600 dark:text-purple-400",
      skills: [
        { name: "React", projectId: "churchwebsite" },
        { name: "Node.js", projectId: "churchwebsite" },
        { name: "Next.js", projectId: "homeserver" },
        { name: "Flask", projectId: "gradebook" },
        { name: "Django", projectId: null },
        { name: ".NET", projectId: null },
        { name: "Unity", projectId: "platformer" },
        { name: "Unreal Engine", projectId: null },
      ],
    },
    {
      name: "Libraries & APIs",
      color: "from-green-400/70 to-emerald-300/70",
      textColor: "text-green-600 dark:text-green-400",
      skills: [
        { name: "OpenCV", projectId: null },
        { name: "Pygame", projectId: null },
        { name: "Tkinter", projectId: null },
        { name: "WebGL", projectId: "platformer" },
        { name: "Google OAuth", projectId: "gradebook" },
        { name: "Firebase", projectId: "scoutingapp" },
      ],
    },
    {
      name: "Developer Tools & Platforms",
      color: "from-orange-400/70 to-amber-300/70",
      textColor: "text-orange-600 dark:text-orange-400",
      skills: [
        { name: "Git", projectId: "churchwebsite" },
        { name: "GitHub", projectId: "gradebook" },
        { name: "Bash", projectId: "scoutingapp" },
        { name: "SVN", projectId: "scoutingapp" },
        { name: "WSL", projectId: null },
        { name: "Linux", projectId: "homeserver" },
        { name: "VirtualBox", projectId: "homeserver" },
        { name: "Docker", projectId: "homeserver" },
        { name: "VS Code", projectId: "scoutingapp" },
        { name: "Visual Studio", projectId: "platformer" },
      ],
    },
    {
      name: "Project & Team Tools",
      color: "from-teal-400/70 to-green-300/70",
      textColor: "text-teal-600 dark:text-teal-400",
      skills: [
        { name: "Confluence", projectId: null },
        { name: "Trello", projectId: null },
        { name: "Slack", projectId: null },
      ],
    },
  ];

  // Badge color classes based on category
  const getBadgeColor = (categoryIndex: number, hasProject: boolean) => {
    const baseColorClasses = [
      "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800 hover:bg-blue-200 dark:hover:bg-blue-800/40",
      "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800 hover:bg-purple-200 dark:hover:bg-purple-800/40",
      "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800 hover:bg-green-200 dark:hover:bg-green-800/40",
      "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-800 hover:bg-orange-200 dark:hover:bg-orange-800/40",
      "bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 border-teal-200 dark:border-teal-800 hover:bg-teal-200 dark:hover:bg-teal-800/40",
    ];

    const colorClass =
      baseColorClasses[categoryIndex % baseColorClasses.length];

    return hasProject
      ? `${colorClass} cursor-pointer ring-offset-2 hover:ring-2 ring-offset-background ring-blue-500/50 dark:ring-blue-400/50`
      : colorClass;
  };

  const scrollToProject = (projectId: string | null) => {
    if (!projectId) return;

    const projectElement = document.getElementById(projectId);
    if (projectElement) {
      projectElement.scrollIntoView({ behavior: "smooth" });

      // Add a brief highlight effect
      projectElement.classList.add("highlight-project");
      setTimeout(() => {
        projectElement.classList.remove("highlight-project");
      }, 2000);
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-[#191c21]">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-medium mb-2 text-center text-gray-900 dark:text-white">
          Technical Skills 🛠️
        </h2>
        <div className="gradient-divider"></div>

        <div className="space-y-10 max-w-4xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.name} className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-900 dark:text-white flex items-center">
                <span
                  className={`bg-gradient-to-r ${category.color} w-2 h-6 rounded mr-2 inline-block`}
                ></span>
                <span className={category.textColor}>{category.name}</span>
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant="outline"
                    className={`text-sm sm:text-base py-1.5 px-3 font-normal transition-all duration-300 transform hover:scale-105 ${getBadgeColor(
                      categoryIndex,
                      !!skill.projectId
                    )}`}
                    onClick={() => scrollToProject(skill.projectId)}
                    title={
                      skill.projectId
                        ? `View project using ${skill.name}`
                        : undefined
                    }
                  >
                    {skill.name}
                    {skill.projectId && (
                      <span className="sr-only">
                        {" "}
                        (Click to view related project)
                      </span>
                    )}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Click on highlighted skills to see related projects</p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
