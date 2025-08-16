import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen">
      <Hero />
      <About />
      <Skills />
    </main>
  );
}
