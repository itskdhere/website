import { Highlighter } from "@/components/magicui/highlighter";
import { RetroGrid } from "@/components/magicui/retro-grid";
import GlassIcons from "@/components/blocks/Components/GlassIcons/GlassIcons";
import { navLinks } from "@/data/navbar";
import { contactItems } from "@/data/contact";

export default function Contact() {
  return (
    <section
      id={navLinks[4].id}
      className="w-full"
      aria-label={navLinks[4].title}
    >
      <div className="flex flex-col items-start justify-center size-full w-fit sm:w-full max-w-5xl mx-auto my-20 px-3 md:px-10 gap-1.5">
        <div className="mb-5 text-3xl sm:text-5xl font-semibold italic self-center">
          <Highlighter
            action="underline"
            color={navLinks[4].color}
            strokeWidth={2}
            isView={true}
          >
            {navLinks[4].title}
          </Highlighter>
        </div>

        <div className="mt-5 flex flex-col items-center justify-center gap-3 w-full">
          <GlassIcons
            items={contactItems.map((item) => ({
              ...item,
              customClass: "hover:cursor-pointer",
              icon: <item.icon />,
            }))}
          />
        </div>
      </div>

      <div className="absolute h-[500px] w-full overflow-hidden -translate-y-96 -z-10">
        <RetroGrid />
      </div>
    </section>
  );
}
