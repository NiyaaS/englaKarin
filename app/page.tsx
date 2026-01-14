import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Gallery from "@/components/gallery"
import Team from "@/components/team"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Gallery />
          <Team />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
