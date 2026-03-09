import HeroSection from "@/components/HeroSection"
import CompanyOverview from "@/components/CompanyOverview"
import VisionMission from "@/components/VisionMission"
import CultureSection from "@/components/Culture"
import FeaturedProducts from "@/components/FeaturedProducts"
import WhyChooseUs from "@/components/WhyChooseUs"
import Testimonials from "@/components/Testimonials"
import CTASection from "@/components/CTASections"

export default function Home() {
  return (

    <>
      <HeroSection />
      <CompanyOverview />
      <VisionMission />
      <CultureSection />
      <FeaturedProducts />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
      
    </>

  )
}