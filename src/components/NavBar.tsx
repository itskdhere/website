"use client";

import { Pointer } from "@/components/magicui/pointer";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconPointerFilled,
  IconHome,
  IconInfoCircle,
  IconBulb,
  IconTools,
  IconSchool,
  IconMail,
} from "@tabler/icons-react";

export function NavBar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "About",
      icon: (
        <IconInfoCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about",
    },
    {
      title: "Skills",
      icon: (
        <IconBulb className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#skills",
    },
    {
      title: "Projects",
      icon: (
        <IconTools className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Education",
      icon: (
        <IconSchool className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#education",
    },
    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
  ];

  return (
    <nav className="fixed flex items-center justify-center mt-10 w-full z-5 opacity-95">
      <Pointer>
        <IconPointerFilled size={20} className="rotate-12" />
      </Pointer>

      <FloatingDock items={links} />
    </nav>
  );
}
