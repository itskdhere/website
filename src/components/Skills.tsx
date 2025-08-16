"use client";

import { Pointer } from "@/components/magicui/pointer";
import { Highlighter } from "@/components/magicui/highlighter";
import { MagicCard } from "@/components/magicui/magic-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IconBulbFilled } from "@tabler/icons-react";
import { skillsData } from "@/data/skills";

export default function Skills() {
  return (
    <section id="#skills" className="w-full">
      <Pointer>
        <IconBulbFilled size={26} className="-rotate-12 text-amber-300" />
      </Pointer>

      <div className="flex flex-col items-start justify-center size-full w-fit sm:w-full max-w-6xl mx-auto my-15 px-3 md:px-10 gap-1.5">
        <div className="mb-5 text-5xl sm:text-7xl font-semibold italic self-center">
          <Highlighter
            action="underline"
            color="#ff9800"
            strokeWidth={2}
            iterations={3}
          >
            Skills
          </Highlighter>
        </div>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 w-full">
          {skillsData.map((skills) => (
            <Card
              key={skills.category}
              className="col-span-1 size-full p-0 shadow-none border-none"
            >
              <MagicCard gradientColor="#252525" className="size-full">
                <CardHeader className="p-4">
                  <CardTitle>{skills.category}</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  {skills.items.map((item) => (
                    <Badge
                      key={item}
                      className="text-sm px-1.5 mb-1 mr-1"
                      variant="outline"
                    >
                      {item}
                    </Badge>
                  ))}
                </CardContent>
              </MagicCard>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
