"use client"

import { useInView } from "@/hooks/use-in-view"
import { Instagram, ExternalLink } from "lucide-react"

const galleryImages = [
  { src: "/blonde-balayage-hair-styling-salon.jpg", alt: "Balayage" },
  { src: "/brunette-bob-haircut-professional.jpg", alt: "Bob Klippning" },
  { src: "/creative-hair-color-pink-purple.jpg", alt: "Kreativ Färg" },
  { src: "/bridal-updo-elegant-hairstyle.jpg", alt: "Bröllop" },
  { src: "/mens-modern-haircut-fade.jpg", alt: "Herrklippning" },
  { src: "/long-wavy-hair-styling-blonde.jpg", alt: "Styling" },
]

export default function Gallery() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={ref} className="text-center mb-16">
          <span
            className={`inline-block mb-4 text-xs font-medium tracking-widest uppercase text-accent transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Vårt Arbete
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight transition-all duration-700 delay-100 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Stil <span className="text-accent">Galleri</span>
          </h2>
          <p
            className={`mt-4 text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Utforska vårt arbete och hitta inspiration för din nästa look.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <GalleryItem key={image.alt} image={image} index={index} />
          ))}
        </div>

        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="https://www.instagram.com/salongenglakarin/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-full font-medium hover:opacity-90 transition-opacity duration-300 group"
          >
            <Instagram className="h-5 w-5" />
            <span>Se mer på Instagram</span>
            <ExternalLink className="h-4 w-4 opacity-70 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <p className="mt-4 text-sm text-muted-foreground">Följ @salongenglakarin för daglig inspiration</p>
        </div>
      </div>
    </section>
  )
}

function GalleryItem({ image, index }: { image: (typeof galleryImages)[0]; index: number }) {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <a
      href="https://www.instagram.com/salongenglakarin/"
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      className={`group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ${
        isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <img
        src={image.src || "/placeholder.svg"}
        alt={image.alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-sm font-medium">{image.alt}</p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center">
          <Instagram className="h-6 w-6 text-accent" />
        </div>
      </div>
    </a>
  )
}
