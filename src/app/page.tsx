import { ScrollProgress } from "@/components/magicui/scroll-progress";
import ClickSpark from "@/components/blocks/Animations/ClickSpark/ClickSpark";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <NavBar />
        <main
          id="main"
          className="flex flex-col items-center justify-start min-h-screen"
        >
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </ClickSpark>
    </>
  );
}
