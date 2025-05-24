import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import LandingPageServices from "@/components/landing-page-services"
import ConsultingServices from "@/components/consulting-services"
import Contact from "@/components/contact"

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <LandingPageServices />
      <ConsultingServices />
      <Experience />
      <Contact />
    </>
  )
}
