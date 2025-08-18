import { FloatingDock } from "@/components/ui/floating-dock";
import { navLinks, navItemClassName } from "@/data/navbar";

export default function NavBar() {
  const links = navLinks.map((link) => ({
    ...link,
    className: navItemClassName,
    icon: <link.icon />,
  }));

  return (
    <nav className="fixed flex items-center justify-center mt-5 w-full z-15 opacity-85">
      <FloatingDock items={links} />
    </nav>
  );
}
