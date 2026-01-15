"use client"

import { useInView } from "@/hooks/use-in-view"
import { Phone, Mail, Clock, MapPin } from "lucide-react"

const BOOKING_URL = "https://www.bokadirekt.se/places/salong-englakarin-45590"

const contactInfo = [
  {
    icon: Phone,
    title: "Ring Oss",
    details: ["076-690 7XXX"],
  },
  {
    icon: Mail,
    title: "Följ Oss",
    details: ["@salongenglakarin", "Instagram"],
  },
  {
    icon: Clock,
    title: "Öppettider",
    details: ["Boka tid via", "Bokadirekt"],
  },
]

export default function Contact() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="contact" className="py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={ref} className="text-center mb-16">
          <span
            className={`inline-block mb-4 text-xs font-medium tracking-widest uppercase text-accent transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Kontakt
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight transition-all duration-700 delay-100 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Hör av <span className="text-accent">Dig</span>
          </h2>
          <p
            className={`mt-4 text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Vi ser fram emot att träffa dig! Boka din tid enkelt via Bokadirekt.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((item, index) => (
            <ContactCard key={item.title} item={item} index={index} />
          ))}
          
          {/* Hitta.se Map Card */}
          <a
            href="https://www.hitta.se/kartan!~61.34889,16.39606,14z/tr!i=UtKStYKf/search!i=cggtxfc!q=L%C3%A5nggatan%2019%20821%2043%20Bolln%C3%A4s!t=single!st=cmp/geocode!l=61.35627:16.36664?search=L%C3%A5nggatan%2019%20821%2043%20Bolln%C3%A4s&st=single&sst=cmp&sids=cggtxfc&srb=0"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 bg-card border border-border rounded-2xl text-center transition-all duration-500 hover:border-accent/50 hover:shadow-lg cursor-pointer"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Besök Oss</h3>
            <p className="text-sm text-muted-foreground">Långgatan 19</p>
            <p className="text-sm text-muted-foreground">821 43 Bollnäs</p>
          </a>
        </div>

        <div
          className={`text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 text-base font-medium bg-accent text-accent-foreground rounded-full transition-all duration-300 hover:bg-accent/90 hover:scale-105 hover:shadow-xl hover:shadow-accent/25"
          >
            Boka Din Tid
          </a>
        </div>
      </div>
    </section>
  )
}

function ContactCard({ item, index }: { item: (typeof contactInfo)[0]; index: number }) {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`group p-6 bg-card border border-border rounded-2xl text-center transition-all duration-500 hover:border-accent/50 hover:shadow-lg ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110">
        <item.icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
      {item.details.map((detail) => (
        <p key={detail} className="text-sm text-muted-foreground">
          {detail}
        </p>
      ))}
    </div>
  )
}
