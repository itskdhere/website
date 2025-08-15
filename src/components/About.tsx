"use client";

import { Highlighter } from "@/components/magicui/highlighter";

export default function About() {
  return (
    <section id="#about" className="w-full">
      <div className="flex flex-col items-start justify-center size-full w-fit sm:w-full max-w-6xl mx-auto px-3 md:px-10 gap-1.5">
        <div className="text-5xl sm:text-7xl font-semibold italic self-center">
          <Highlighter
            action="underline"
            color="#FF9800"
            strokeWidth={2}
            iterations={3}
          >
            About Me
          </Highlighter>
        </div>

        <p className="text-lg sm:text-xl mt-5 font-sans">
          Hello World, I'm Krishnendu Das, currently in my 2nd year, pursuing
          Bachelor of Technology in Computer Science & Engineering from Sister
          Nivedita University, Kolkata.
          <br />
          I'm passionate about Full-Stack Web Development, DevOps, Web Security,
          Containerization, Self-Hosting. I mostly work with TypeScript,
          JavaScript, Node.js, Express.js, React.js, Next.js, Discord.js,
          Docker, Terraform, Google Cloud, Firebase, MySQL, MongoDB, Redis etc.
          <br />
          In my free time, I make Open-Source CLI Tools, Web Apps & Discord
          Bots, which anyone can self-host or use the hosted version. I also
          contribute to Open-Source softwares sometimes.
        </p>
      </div>
    </section>
  );
}
