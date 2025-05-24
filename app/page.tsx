import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import LandingPageServices from "@/components/landing-page-services"
import Footer from "@/components/footer"
import ConsultingServices from "@/components/consulting-services"
import Contact from "@/components/contact"

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <LandingPageServices />
      <ConsultingServices />
      <Contact />
      <Footer />
    </>
  )
}
