import { Scissors, Instagram } from "lucide-react"

const socialLinks = [{ icon: Instagram, href: "https://instagram.com/salongenglakarin", label: "Instagram" }]

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#home" className="flex items-center gap-2 text-xl font-semibold tracking-tight">
            <Scissors className="h-6 w-6 text-accent" />
            <span>Salong EnglaKarin</span>
          </a>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full border border-border transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:border-accent hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">{"© 2026 Salong EnglaKarin"}</p>
            <p className="text-xs text-muted-foreground">Långgatan 19, 821 43 Bollnäs</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
