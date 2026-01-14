"use client"

import { useInView } from "@/hooks/use-in-view"
import { Award, Users, Clock, Star } from "lucide-react"

const stats = [
  { icon: Star, value: "4.9", label: "Betyg" },
  { icon: Users, value: "1140+", label: "Omdömen" },
  { icon: Award, value: "3", label: "Stylister" },
  { icon: Clock, value: "Bollnäs", label: "Sedan 2015" },
]

export default function About() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={ref}>
            <span
              className={`inline-block mb-4 text-xs font-medium tracking-widest uppercase text-accent transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Om Oss
            </span>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight transition-all duration-700 delay-100 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Passion för <span className="text-accent">Hårvård</span>
            </h2>
            <div
              className={`mt-6 space-y-4 text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <p>
                Salong EnglaKarin är en välrenommerad frisörsalong i hjärtat av Bollnäs. Med ett starkt fokus på
                kvalitet och kundnöjdhet har vi byggt upp ett rykte som en av de bästa salongerna i området.
              </p>
              <p>
                Vårt team av skickliga frisörer erbjuder allt från klassiska klippningar till moderna färgtekniker som
                balayage och slingor. Vi är stolta medlemmar i Frisörföretagarna och håller oss alltid uppdaterade med
                de senaste trenderna och teknikerna.
              </p>
              <p>
                Varje besök hos oss börjar med en personlig konsultation där vi lyssnar på dina önskemål och ger
                professionella råd för att uppnå ditt drömresultat. Välkommen till en avslappnad och inspirerande miljö!
              </p>
            </div>

            <div
              className={`mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 transition-all duration-700 delay-300 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="h-6 w-6 mx-auto mb-2 text-accent" />
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-200 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="/luxury-hair-salon-interior-modern-design.jpg"
                alt="Salong EnglaKarin interiör"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-accent/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-accent/30 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
