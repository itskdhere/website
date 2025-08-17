"use client";

import Link from "next/link";
import { Highlighter } from "@/components/magicui/highlighter";
import SpotlightCard from "@/components/blocks/Components/SpotlightCard/SpotlightCard";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  IconLink,
  IconWorld,
  IconPackage,
  IconBrandGithub,
} from "@tabler/icons-react";
import { projectsData } from "@/data/projects";

export default function Projects() {
  return (
    <section id="#projects" className="w-full">
      <div className="flex flex-col items-start justify-center size-full w-fit sm:w-full max-w-6xl mx-auto my-15 px-3 md:px-10 gap-1.5">
        <div className="mb-5 text-5xl sm:text-7xl font-semibold italic self-center">
          <Highlighter
            action="underline"
            color="#9333ea"
            strokeWidth={2}
            iterations={3}
          >
            Projects
          </Highlighter>
        </div>

        <div className="mt-5 flex flex-col items-center justify-center gap-3 w-full">
          {projectsData.map((project) => (
            <SpotlightCard
              key={project.title}
              className="w-full"
              spotlightColor="rgba(147, 51, 234, 0.25)"
            >
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-md">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="my-4">
                <div>
                  {project.techStack.map((item) => (
                    <Badge
                      key={item}
                      className="text-sm px-1.5 mb-1 mr-1"
                      variant="outline"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex flex-row items-center justify-around">
                <ProjectButton url={project.link} />
                <ProjectButton url={project.source} />
              </CardFooter>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectButton({ url }: { url: string }) {
  if (!url) return null;

  const domain = new URL(url).hostname.replace("www.", "");

  const data: {
    buttonIcon: React.ReactNode;
    buttonText: string;
    buttonType?: "default" | "secondary" | "outline" | "ghost" | "link";
  } = {
    buttonIcon: <IconLink size={20} />,
    buttonText: "URL",
    buttonType: "link",
  };

  switch (domain) {
    case "github.com":
      data.buttonIcon = <IconBrandGithub size={20} />;
      data.buttonText = "Source Code";
      data.buttonType = "outline";
      break;
    case "npmjs.com":
      data.buttonIcon = <IconPackage size={25} />;
      data.buttonText = "NPM Package";
      data.buttonType = "secondary";
      break;
    default:
      data.buttonIcon = <IconWorld size={20} />;
      data.buttonText = "Live Demo";
      data.buttonType = "secondary";
      break;
  }

  return (
    <Button
      variant={data.buttonType}
      effect="ringHover"
      className="px-2.5 py-0"
    >
      <Link
        href={url}
        target="_blank"
        className="flex items-center justify-center gap-2 size-fit"
      >
        <span className="translate-y-[1px]">{data.buttonIcon}</span>
        <span>{data.buttonText}</span>
      </Link>
    </Button>
  );
}
