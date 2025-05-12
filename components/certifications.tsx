import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, GraduationCap } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const education = {
    institution: "University of Waterloo",
    location: "Waterloo, ON",
    degree: "Bachelor of Engineering in Computer Engineering",
    period: "Sept. 2024 – Jun. 2029",
    logo: "/UWEng.png",
  };

  // Certifications from the resume

  // Certifications from the resume
  const certifications = [
    {
      name: "CS50's Introduction to Computer Science",
      issuer: "HARVARDx",
      date: "2023",
      credentialId: "daff631e244f4f3a807d25efc3f7781f",
      logo: "https://logowik.com/content/uploads/images/edx-free-online-course-new6759.jpg",
      url: "https://courses.edx.org/certificates/daff631e244f4f3a807d25efc3f7781f",
    },
    {
      name: "Networking Basics",
      issuer: "Cisco",
      date: "2023",
      credentialId: "via Credly",
      logo: "https://images.credly.com/size/680x680/images/5bdd6a39-3e03-4444-9510-ecff80c9ce79/image.png",
      url: "https://www.credly.com/badges/17df0ab9-c0ea-439a-b33a-4978eaaddfdb/linked_in_profile",
    },
    {
      name: "Introduction to Cybersecurity",
      issuer: "Cisco",
      date: "2023",
      credentialId: "via Credly",
      logo: "https://images.credly.com/size/680x680/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
      url: "https://www.credly.com/badges/17cba253-5845-4270-aadf-c58f2d16a3a4",
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-[#191c21]">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-medium mb-2 text-center text-gray-900 dark:text-white">
          Education & Certifications 🎓
        </h2>
        <div className="gradient-divider"></div>

        <div className="max-w-3xl mx-auto">
          {/* Education */}
          <Card className="mb-8 border border-gray-200 dark:border-[#252830] bg-white dark:bg-[#21242b] hover:shadow-md transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <Image
                src={education.logo}
                alt="University Logo"
                width={48}
                height={48}
                className="rounded-md"
              />
              <div>
                <CardTitle className="text-xl text-gray-900 dark:text-white font-medium flex items-center gap-2">
                  {education.degree}
                </CardTitle>
                <p className="text-lg font-normal text-gray-700 dark:text-gray-300 mt-1">
                  {education.institution}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-light">
                  {education.location} | {education.period}
                </p>
              </div>
            </CardHeader>
          </Card>

          {/* Certifications */}
          {certifications.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-medium mb-4 text-gray-900 dark:text-white flex items-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-400 w-2 h-6 rounded mr-2 inline-block"></span>
                Certifications
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <Card
                    key={index}
                    className="border border-gray-200 dark:border-[#252830] bg-white dark:bg-[#21242b] hover:shadow-md transition-shadow duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Image
                          src={cert.logo || "/placeholder.svg"}
                          alt={cert.issuer}
                          width={48}
                          height={48}
                          className="rounded-md"
                        />

                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 dark:text-white">
                            {cert.name}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 font-light">
                            {cert.issuer} | {cert.date}
                          </p>
                          {cert.credentialId && (
                            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1 font-light">
                              Credential ID: {cert.credentialId}
                            </p>
                          )}
                        </div>
                      </div>
                      {cert.url && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-4 w-full dark:border-[#252830] dark:bg-[#191c21] dark:text-white hover:dark:bg-[#252830] transition-colors"
                          asChild
                        >
                          <a
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                          >
                            <span>View Certificate</span>
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
