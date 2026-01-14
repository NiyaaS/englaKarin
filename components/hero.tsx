import { ChevronDown } from "lucide-react"

const BOOKING_URL = "https://www.bokadirekt.se/places/salong-englakarin-45590"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/luxury-hair-salon-interior-dark-moody-atmosphere.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <span className="inline-block mb-6 px-4 py-2 text-xs font-medium tracking-widest uppercase text-accent border border-accent/30 rounded-full animate-fade-in-up">
          Frisör i Bollnäs
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight animate-fade-in-up animation-delay-100">
          <span className="text-balance">Välkommen till</span>
          <br />
          <span className="text-accent">Salong EnglaKarin</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200 text-pretty">
          Med över 1140 nöjda kunder och 4.9 i betyg erbjuder vi professionell hårvård i en avslappnad miljö. Klippning,
          färgning, slingor och styling – vi hjälper dig att hitta din stil.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium bg-accent text-accent-foreground rounded-full transition-all duration-300 hover:bg-accent/90 hover:scale-105 hover:shadow-xl hover:shadow-accent/25"
          >
            Boka Din Tid
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium border border-border rounded-full transition-all duration-300 hover:bg-muted hover:scale-105"
          >
            Se Våra Tjänster
          </a>
        </div>
      </div>

      <a
        href="#services"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scrolla till tjänster"
      >
        <ChevronDown className="h-8 w-8 text-muted-foreground" />
      </a>
    </section>
  )
}
