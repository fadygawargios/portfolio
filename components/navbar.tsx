"use client"

import { useState, useEffect } from "react"
import { Menu, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHome, setIsHome] = useState(true)

  // Navigation items
  const navItems = [
    { name: "Home", href: "#home", emoji: "🏠" },
    { name: "About", href: "#about", emoji: "👨‍💻" },
    { name: "Skills", href: "#skills", emoji: "🛠️" },
    { name: "Experience", href: "#experience", emoji: "💼" },
    { name: "Projects", href: "#projects", emoji: "🚀" },
    { name: "Education", href: "#education", emoji: "🎓" },
  ]

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
      setIsHome(window.scrollY < window.innerHeight * 0.5)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/90 dark:bg-[#191c21]/90 backdrop-blur-md shadow-sm py-3"
          : isHome
            ? "bg-transparent py-5"
            : "bg-white/80 dark:bg-[#191c21]/80 backdrop-blur-sm py-4",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className={cn(
              "text-xl font-medium transition-colors duration-300",
              isHome && !isScrolled ? "text-white" : "text-gray-900 dark:text-white",
            )}
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("#home")
            }}
          >
            FG
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-normal rounded-md transition-colors duration-300",
                  isHome && !isScrolled
                    ? "text-white/90 hover:text-white hover:bg-white/10"
                    : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#252830]",
                )}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
              >
                {item.emoji && <span className="mr-1">{item.emoji}</span>}
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              className={cn(
                "mr-2 transition-colors duration-300",
                isHome && !isScrolled
                  ? "text-white hover:bg-white/10"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#252830]",
              )}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {mounted && (
                <>
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5 transition-transform duration-500 rotate-0 hover:rotate-90" />
                  ) : (
                    <Moon className="h-5 w-5 transition-transform duration-500 rotate-0 hover:-rotate-90" />
                  )}
                </>
              )}
            </Button>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={cn(
                      isHome && !isScrolled
                        ? "text-white hover:bg-white/10"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#252830]",
                    )}
                  >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[250px] dark:bg-[#21242b]">
                  <div className="flex flex-col space-y-4 mt-8">
                    {navItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="px-3 py-2 text-sm font-normal rounded-md text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#252830] transition-colors"
                        onClick={(e) => {
                          e.preventDefault()
                          scrollToSection(item.href)
                          document.querySelector('[data-state="open"]')?.setAttribute("data-state", "closed")
                        }}
                      >
                        {item.emoji && <span className="mr-1">{item.emoji}</span>}
                        {item.name}
                      </a>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
