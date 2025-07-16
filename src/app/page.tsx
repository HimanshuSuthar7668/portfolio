import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectSection />
      <Skills />
      <ContactForm />
      <Footer />
    </main>
  );
}
