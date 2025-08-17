import { NavBar } from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen">
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
