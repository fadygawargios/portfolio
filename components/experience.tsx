import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const highlightKeywords = (text: string) => {
    return text
      .replace(
        /Visual Basic/g,
        '<span class="highlight-subtle">Visual Basic</span>'
      )
      .replace(
        /DirectShowLib\.dll/g,
        '<span class="highlight">DirectShowLib.dll</span>'
      )
      .replace(
        /COM objects/g,
        '<span class="highlight-subtle">COM objects</span>'
      )
      .replace(
        /exposure gauge/g,
        '<span class="highlight-subtle">exposure gauge</span>'
      )
      .replace(
        /2,600 workstations/g,
        '<span class="highlight">2,600 workstations</span>'
      )
      .replace(
        /Department of National Defense/g,
        '<span class="highlight-subtle">Department of National Defense</span>'
      )
      .replace(
        /Canadian Armed Forces/g,
        '<span class="highlight-subtle">Canadian Armed Forces</span>'
      )
      .replace(
        /Typescript/g,
        '<span class="highlight-subtle">Typescript</span>'
      )
      .replace(/React/g, '<span class="highlight-subtle">React</span>')
      .replace(/Firebase/g, '<span class="highlight-subtle">Firebase</span>')
      .replace(/SVN/g, '<span class="highlight-subtle">SVN</span>')
      .replace(/Docker/g, '<span class="highlight-subtle">Docker</span>')
      .replace(/C\+\+/g, '<span class="highlight-subtle">C++</span>')
      .replace(
        /autonomous/g,
        '<span class="highlight-subtle">autonomous</span>'
      )
      .replace(
        /ticket system/g,
        '<span class="highlight-subtle">ticket system</span>'
      )
      .replace(
        /CommuniTech/g,
        '<span class="highlight-subtle">CommuniTech</span>'
      )
      .replace(
        /Global Innovation Management Institute/g,
        '<span class="highlight-subtle">Global Innovation Management Institute</span>'
      );
  };

  const getSkillBadgeColor = (skill: string) => {
    const skillCategories: Record<string, string> = {
      "Visual Basic":
        "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800",
      TypeScript:
        "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800",
      "C++":
        "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800",
      ".NET":
        "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800",
      React:
        "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800",
      Firebase:
        "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800",
      SVN: "bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-800",
      Docker:
        "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800",
      "Software Support":
        "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800",
      Testing:
        "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-800",
      Agile:
        "bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 border-teal-200 dark:border-teal-800",
      Leadership:
        "bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 border-pink-200 dark:border-pink-800",
      "Public Speaking":
        "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800",
      Fundraising:
        "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800",
      Advocacy:
        "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 border-red-200 dark:border-red-800",
      Events:
        "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800",
    };

    return (
      skillCategories[skill] ||
      "bg-gray-100 dark:bg-gray-800/50 text-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700"
    );
  };

  const experiences = [
    {
      title: "Bilingual Software Support / Junior .NET Developer",
      company: "ADSTRA Dental Software",
      period: "Jan. 2025 – Apr. 2025",
      location: "Remote",
      description: [
        "Developed a standalone webcam application using DirectShowLib.dll in Visual Basic integrating COM objects, multi-camera detection and dynamic resolution switching.",
        "Designed and tested an exposure gauge for intra-oral X-ray scanners, now deployed on over 2,600 workstations in dental clinics across North America.",
        "Performed 200+ bilingual software upgrades in high-traffic dental clinics, optimizing the process to reduce update time per computer from 3 minutes to 1.",
        "Managed customer requests in the form of Voicemails and directed them to the appropriate team member.",
        "Surpassed the yearly Quality Objective target of 50% users upgraded in only 4 months.",
        "Conducted rigorous software testing for releases delivered to the Department of National Defense for the Canadian Armed Forces.",
      ],
      skills: ["Visual Basic", ".NET", "Software Support", "Testing"],
    },
    {
      title: "Web App Development",
      company: "FIRST Robotics",
      period: "Jan. 2023 – Apr. 2024",
      location: "Waterloo, ON",
      description: [
        "Guided software team in the agile development of a full-stack web app in Typescript with React, Firebase, SVN, and Docker.",
        "Wrote unit tests for API call functions, ensuring expected and reliable behavior during usage.",
        "Assisted in developing fully autonomous C++ robot code, writing robust classes, and utilizing libraries.",
        "Organized tasks with a ticket system, allowing to tackle specific native bugs encountered in testing.",
        "Implemented new reactive features that tackled user-reported problems, streamlining user experience, and greatly reducing input error during competitions.",
      ],
      skills: [
        "TypeScript",
        "React",
        "Firebase",
        "SVN",
        "Docker",
        "C++",
        "Agile",
      ],
    },
    {
      title: "Minister of Technology",
      company: "School Council",
      period: "Sep. 2022 – Jun. 2024",
      location: "Cambridge, ON",
      description: [
        "Gave a keynote speech with over 900+ members in the audience.",
        "Organized fundraising events raising over $2000 worth of items for Food Banks and families in need.",
        "Advocated to the school board the importance of the “Global Innovation Management Institute” program that taught young leaders to foster problem-solving and innovative solutions to community-identified problems.",
        "Judged at CommuniTech’s school-wide innovation fair.",
        "Created and organized the only student-led club: The Board Game Club with 50+ active members.",
      ],
      skills: [
        "Leadership",
        "Public Speaking",
        "Fundraising",
        "Advocacy",
        "Events",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-[#191c21]">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-medium mb-2 text-center text-gray-900 dark:text-white">
          Experience 💼
        </h2>
        <div className="gradient-divider"></div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="border border-gray-200 dark:border-[#252830] bg-white dark:bg-[#21242b] hover:shadow-md transition-shadow duration-300"
            >
              <CardHeader className="pb-2">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white font-medium">
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="text-lg font-normal text-gray-700 dark:text-gray-300 mt-1">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-light">
                    <div>{exp.period}</div>
                    <div>{exp.location}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 mb-4 text-gray-700 dark:text-gray-300 font-light">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      dangerouslySetInnerHTML={{
                        __html: highlightKeywords(item),
                      }}
                    />
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className={`tech-badge ${getSkillBadgeColor(skill)}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
