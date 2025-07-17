import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import Project from "@/components/sections/Project";

export default function Home() {
  return (
    <main>
      <Hero />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
