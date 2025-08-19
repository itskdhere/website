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
    id: "",
    title: "Home",
    href: "",
    icon: IconHome,
    color: "#fff",
  },
  {
    id: "about",
    title: "About",
    href: "#about",
    icon: IconInfoCircle,
    color: "#14b8a6",
  },
  {
    id: "skills",
    title: "Skills",
    href: "#skills",
    icon: IconBulb,
    color: "#ff9800",
  },
  {
    id: "projects",
    title: "Projects",
    href: "#projects",
    icon: IconTools,
    color: "#9333ea",
  },
  {
    id: "contact",
    title: "Contact",
    href: "#contact",
    icon: IconMail,
    color: "#84cc16",
  },
];
