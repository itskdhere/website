"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import { navLinks, navItemClassName } from "@/data/navbar";

export function NavBar() {
  const links = navLinks.map((link) => ({
    ...link,
    className: navItemClassName,
    icon: <link.icon />,
  }));

  return (
    <nav className="fixed flex items-center justify-center mt-10 w-full z-5 opacity-85">
      <FloatingDock items={links} />
    </nav>
  );
}
