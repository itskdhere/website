"use client";

import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  function handleClink(url: string) {
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <footer id="footer" className="w-full translate-y-16" aria-label="Footer">
      <p className="font-mono text-gray-200 text-center">
        &copy; {currentYear}{" "}
        <Button
          variant="link"
          effect="underline"
          className="p-0 hover:cursor-pointer"
          onClick={() => handleClink("https://youtu.be/dQw4w9WgXcQ")}
        >
          KD
        </Button>
        . All rights reserved
        <Button
          variant="link"
          effect="underline"
          className="p-0 hover:cursor-pointer"
          onClick={() => handleClink("https://takeb1nzyto.space")}
        >
          .
        </Button>
      </p>
    </footer>
  );
}
