"use client"

import { useState, useEffect } from "react"
import { useTheme } from "./theme-provider"
import { Sun, Moon, Menu, X, Scissors } from "lucide-react"

const navLinks = [
  { name: "Hem", href: "#home" },
  { name: "Tjänster", href: "#services" },
  { name: "Om Oss", href: "#about" },
  { name: "Galleri", href: "#gallery" },
  { name: "Team", href: "#team" },
  { name: "Kontakt", href: "#contact" },
]

const BOOKING_URL = "https://www.bokadirekt.se/places/salong-englakarin-45590"

export default function Header() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isDark = resolvedTheme === "dark"

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="flex items-center gap-2 text-xl font-semibold tracking-tight transition-transform duration-300 hover:scale-105"
          >
            <Scissors className="h-6 w-6 text-accent" />
            <span>EnglaKarin</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {mounted && (
              <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="relative h-10 w-10 rounded-full border border-border bg-card flex items-center justify-center transition-all duration-300 hover:bg-muted hover:scale-110"
                aria-label="Byt tema"
              >
                <Sun
                  className={`h-5 w-5 absolute transition-all duration-500 ${isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
                />
                <Moon
                  className={`h-5 w-5 absolute transition-all duration-500 ${isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`}
                />
              </button>
            )}

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium bg-accent text-accent-foreground rounded-full transition-all duration-300 hover:bg-accent/90 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
            >
              Boka Tid
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden h-10 w-10 flex items-center justify-center"
              aria-label="Öppna meny"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 py-4 border-t border-border">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {link.name}
              </a>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium bg-accent text-accent-foreground rounded-full transition-all duration-300 hover:bg-accent/90"
            >
              Boka Tid
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
