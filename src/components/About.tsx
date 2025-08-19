import { Highlighter } from "@/components/magicui/highlighter";
import { navLinks } from "@/data/navbar";
import { aboutBioData } from "@/data/about";

export default function About() {
  return (
    <section id="about" className="w-full" aria-label="About Me">
      <div className="flex flex-col items-start justify-center size-full w-fit sm:w-full max-w-6xl mx-auto my-25 px-3 md:px-10 gap-1.5">
        <div className="mb-5 text-5xl sm:text-7xl font-semibold italic self-center">
          <Highlighter
            action="underline"
            color={navLinks[1].color}
            strokeWidth={2}
            iterations={3}
          >
            {navLinks[1].title}
          </Highlighter>
        </div>

        <p className="mt-5 text-lg sm:text-xl font-sans">{aboutBioData}</p>
      </div>
    </section>
  );
}
