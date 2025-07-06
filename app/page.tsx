import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { DentalShowcase } from "@/components/dental-showcase"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { BeforeAfterGallery } from "@/components/before-after-gallery"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <DentalShowcase />
      <About />
      <Services />
      <BeforeAfterGallery />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
