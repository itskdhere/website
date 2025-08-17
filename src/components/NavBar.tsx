"use client";

import { Pointer } from "@/components/magicui/pointer";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconPointerFilled } from "@tabler/icons-react";
import { navLinks, navItemClassName } from "@/data/navbar";

export function NavBar() {
  const links = navLinks.map((link) => ({
    ...link,
    className: navItemClassName,
    icon: <link.icon />,
  }));

  return (
    <nav className="fixed flex items-center justify-center mt-10 w-full z-5 opacity-95">
      <Pointer>
        <IconPointerFilled size={20} className="rotate-12" />
      </Pointer>

      <FloatingDock items={links} />
    </nav>
  );
}
