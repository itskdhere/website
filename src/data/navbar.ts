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
    href: "",
    color: "#fff",
  },
  {
    title: "About",
    icon: IconInfoCircle,
    href: "#about",
    color: "#14b8a6",
  },
  {
    title: "Skills",
    icon: IconBulb,
    href: "#skills",
    color: "#ff9800",
  },
  {
    title: "Projects",
    icon: IconTools,
    href: "#projects",
    color: "#9333ea",
  },
  {
    title: "Contact",
    icon: IconMail,
    href: "#contact",
    color: "#84cc16",
  },
];
