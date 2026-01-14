"use client"

import { Scissors, Sparkles, Palette, Wind, Crown, Heart } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const services = [
  {
    icon: Scissors,
    title: "Klippning",
    description:
      "Professionell klippning inklusive hårtvätt, scalp massage och styling. Vi anpassar frisyren efter ditt ansikte och livsstil.",
    price: "Från 690 kr",
  },
  {
    icon: Palette,
    title: "Färgning & Slingor",
    description:
      "Expert på färgning, slingor och balayage. Vi skapar naturliga eller dramatiska resultat efter dina önskemål.",
    price: "Från 1 280 kr",
  },
  {
    icon: Sparkles,
    title: "Behandlingar",
    description:
      "Nyansering och skonsam avfärgning för att underhålla din färg eller förbereda för nya färgförändringar.",
    price: "Från 980 kr",
  },
  {
    icon: Wind,
    title: "Styling & Blowout",
    description: "Tvätt med scalp massage, volymföning och feststyling för ett fantastiskt resultat.",
    price: "Från 450 kr",
  },
  {
    icon: Crown,
    title: "Bröllop & Fest",
    description: "Baluppsättning och bröllopsuppsättning för din speciella dag. Kom med nytvättat och fönat hår.",
    price: "Från 1 500 kr",
  },
  {
    icon: Heart,
    title: "Hårförlängning",
    description: "BHBD/Richy hårförlängning med tejpteknik. Omsättning och konsultation för perfekt resultat.",
    price: "Från 550 kr",
  },
]

export default function Services() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="services" className="py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={ref} className="text-center mb-16">
          <span
            className={`inline-block mb-4 text-xs font-medium tracking-widest uppercase text-accent transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Våra Tjänster
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight transition-all duration-700 delay-100 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Skapad för <span className="text-accent">Kvalitet</span>
          </h2>
          <p
            className={`mt-4 text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Upptäck vårt utbud av professionella hårtjänster designade för att framhäva din naturliga skönhet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`group relative p-8 bg-card border border-border rounded-2xl transition-all duration-500 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110">
        <service.icon className="h-7 w-7" />
      </div>

      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
      <p className="text-sm font-medium text-accent">{service.price}</p>
    </div>
  )
}
