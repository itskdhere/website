import { Highlighter } from "@/components/magicui/highlighter";
import { navLinks } from "@/data/navbar";
import { aboutBioData } from "@/data/about";

export default function About() {
  return (
    <section
      id={navLinks[1].id}
      className="w-full"
      aria-label={navLinks[1].title}
    >
      <div className="flex flex-col items-start justify-center size-full w-fit sm:w-full max-w-5xl mx-auto my-20 px-3 md:px-10 gap-1.5">
        <div className="mb-5 text-3xl sm:text-5xl font-semibold italic self-center">
          <Highlighter
            action="underline"
            color={navLinks[1].color}
            strokeWidth={2}
            isView={true}
          >
            {navLinks[1].title}
          </Highlighter>
        </div>

        <p className="mt-5 text-lg sm:text-xl font-sans">{aboutBioData}</p>
      </div>
    </section>
  );
}
