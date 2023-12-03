import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Hero from "@/components/Hero";
import Cards from "@/components/Cards"
import Testimonial from "@/components/Testimonial";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Testimonial />
      <Cards />
      <Features />
      <FAQ />
      <GetApp />
    </>
  )
}
