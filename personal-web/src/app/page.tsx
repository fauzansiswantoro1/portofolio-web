import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Testimonials from "@/components/testimonial";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      <Testimonials/>
      <Contact/>
    </div>
  );
}
