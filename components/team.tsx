"use client"

import { useInView } from "@/hooks/use-in-view"
import { Instagram, Star, User } from "lucide-react"

const team = [
  {
    name: "Engla",
    role: "Frisör & Ägare",
    rating: 4.9,
    reviews: 718,
    instagram: "https://instagram.com/salongenglakarin",
  },
  {
    name: "Lina",
    role: "Frisör",
    rating: 4.9,
    reviews: 281,
    instagram: "https://instagram.com/salongenglakarin",
  },
  {
    name: "Louise Jonsson",
    role: "Frisör",
    rating: 4.9,
    reviews: 141,
    instagram: "https://instagram.com/salongenglakarin",
  },
]

export default function Team() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="team" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={ref} className="text-center mb-16">
          <span
            className={`inline-block mb-4 text-xs font-medium tracking-widest uppercase text-accent transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Personal
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight transition-all duration-700 delay-100 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Möt Våra <span className="text-accent">Stylister</span>
          </h2>
          <p
            className={`mt-4 text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Vårt erfarna team är dedikerade till att ge dig den bästa upplevelsen.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamCard({ member, index }: { member: (typeof team)[0]; index: number }) {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`group text-center transition-all duration-500 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative mb-6 aspect-square rounded-2xl overflow-hidden bg-muted/50 border border-border flex items-center justify-center group-hover:border-accent/50 transition-colors duration-300">
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center">
            <User className="w-12 h-12 text-accent" />
          </div>
        </div>
        <a
          href={member.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 h-10 w-10 flex items-center justify-center bg-background/90 rounded-full opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
          aria-label={`${member.name}s Instagram`}
        >
          <Instagram className="h-5 w-5" />
        </a>
      </div>
      <h3 className="text-lg font-semibold">{member.name}</h3>
      <p className="text-sm text-muted-foreground">{member.role}</p>
      <div className="flex items-center justify-center gap-1 mt-2">
        <Star className="h-4 w-4 fill-accent text-accent" />
        <span className="text-sm font-medium">{member.rating}</span>
        <span className="text-xs text-muted-foreground">({member.reviews} betyg)</span>
      </div>
    </div>
  )
}
