"use client";

import { useState, useEffect } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { navLinks, navItemClassName } from "@/data/navbar";

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("");
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -50% 0px",
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (isNavigating) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
          const newHash = sectionId ? `#${sectionId}` : "#";
          if (window.location.hash !== newHash) {
            window.history.replaceState(null, "", newHash);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = document.querySelectorAll("section[id], footer[id]");
    sections.forEach((section) => observer.observe(section));
    const initialHash = window.location.hash.replace("#", "");
    setActiveSection(initialHash);

    const handleScroll = () => {
      if (isNavigating) return;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      if (scrollPosition < windowHeight * 0.2) {
        setActiveSection("");
        return;
      }
      const sections = document.querySelectorAll("section[id], footer[id]");
      let currentSection = "";
      sections.forEach((section) => {
        const element = section as HTMLElement;
        const rect = element.getBoundingClientRect();
        const sectionTop = rect.top + scrollPosition;
        if (scrollPosition >= sectionTop - windowHeight * 0.3) {
          currentSection = element.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isNavigating]);

  const handleNavigation = (targetHref: string) => {
    setIsNavigating(true);
    const targetId = targetHref.replace("#", "");
    setActiveSection(targetId);
    window.history.pushState(null, "", targetHref);
    setTimeout(() => {
      setIsNavigating(false);
    }, 1000);
  };

  const links = navLinks.map((link) => ({
    ...link,
    className: navItemClassName,
    icon: <link.icon />,
    isActive: activeSection === link.href.replace("#", ""),
    color: link.color,
    onNavigate: () => handleNavigation(link.href),
  }));

  return (
    <nav className="fixed flex items-center justify-center mt-5 w-full z-15 opacity-85">
      <FloatingDock items={links} />
    </nav>
  );
}
