import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import PortfolioSection from "@/components/portofolio";
import Skills from "@/components/skills";
import Testimonials from "@/components/testimonial";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <PortfolioSection/>
      <Experience/>
      <Testimonials/>
      <Contact/>
    </div>
  );
}
