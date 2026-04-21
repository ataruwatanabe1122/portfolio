import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <section id="about">
          <Hero />
        </section>
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
