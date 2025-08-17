import {
  IconHome,
  IconInfoCircle,
  IconBulb,
  IconTools,
  IconMail,
} from "@tabler/icons-react";

export const navItemClassName =
  "h-full w-full text-neutral-500 dark:text-neutral-300";

export const navLinks = [
  {
    title: "Home",
    icon: IconHome,
    href: "#",
  },
  {
    title: "About",
    icon: IconInfoCircle,
    href: "#about",
  },
  {
    title: "Skills",
    icon: IconBulb,
    href: "#skills",
  },
  {
    title: "Projects",
    icon: IconTools,
    href: "#projects",
  },
  {
    title: "Contact",
    icon: IconMail,
    href: "#contact",
  },
];
