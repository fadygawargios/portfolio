import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-[#191c21]">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-medium mb-2 text-center text-gray-900 dark:text-white">Get In Touch 👋</h2>
        <div className="gradient-divider"></div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <Card className="border border-gray-200 dark:border-[#252830] bg-white dark:bg-[#21242b] hover:shadow-md transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white font-medium">Contact Information</CardTitle>
              <CardDescription className="font-light dark:text-gray-300">
                Feel free to reach out! I'm always open to discussing new projects, creative ideas, or opportunities to
                be part of your vision.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-blue-500/10 to-cyan-400/10 dark:from-blue-500/20 dark:to-cyan-400/20 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-light">Email</p>
                    <a
                      href="mailto:fgawargi@uwaterloo.ca"
                      className="font-normal hover:underline text-gray-900 dark:text-white"
                    >
                      fgawargi@uwaterloo.ca
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-green-500/10 to-emerald-400/10 dark:from-green-500/20 dark:to-emerald-400/20 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-light">Phone</p>
                    <a href="tel:5197782547" className="font-normal hover:underline text-gray-900 dark:text-white">
                      (519) 778-2547
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-purple-500/10 to-pink-400/10 dark:from-purple-500/20 dark:to-pink-400/20 p-3 rounded-full">
                    <Linkedin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-light">LinkedIn</p>
                    <a
                      href="https://linkedin.com/in/fadygawargios"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-normal hover:underline text-gray-900 dark:text-white"
                    >
                      linkedin.com/in/fadygawargios
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-orange-500/10 to-amber-400/10 dark:from-orange-500/20 dark:to-amber-400/20 p-3 rounded-full">
                    <Github className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-light">GitHub</p>
                    <a
                      href="https://github.com/fadygawargios"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-normal hover:underline text-gray-900 dark:text-white"
                    >
                      github.com/fadygawargios
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Contact
