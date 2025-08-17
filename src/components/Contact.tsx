"use client";

import { Pointer } from "@/components/magicui/pointer";
import { Highlighter } from "@/components/magicui/highlighter";
import GlassIcons from "@/components/blocks/Components/GlassIcons/GlassIcons";
import { IconBulbFilled } from "@tabler/icons-react";
import { contactItems } from "@/data/contact";

export default function Contact() {
  return (
    <section id="#contact" className="w-full">
      <Pointer>
        <IconBulbFilled size={26} className="-rotate-12 text-lime-500" />
      </Pointer>

      <div className="flex flex-col items-start justify-center size-full w-fit sm:w-full max-w-6xl mx-auto my-15 px-3 md:px-10 gap-1.5">
        <div className="mb-5 text-5xl sm:text-7xl font-semibold italic self-center">
          <Highlighter
            action="underline"
            color="#84cc16"
            strokeWidth={2}
            iterations={3}
          >
            Contact
          </Highlighter>
        </div>

        <div className="mt-5 flex flex-col items-center justify-center gap-3 w-full">
          <GlassIcons
            items={contactItems.map((item) => ({
              ...item,
              icon: <item.icon />,
            }))}
            className="custom-class"
          />
        </div>
      </div>
    </section>
  );
}
