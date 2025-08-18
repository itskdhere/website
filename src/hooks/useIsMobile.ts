"use client";

import { useState, useEffect } from "react";

export function useIsMobile(breakpoint: number = 640) {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    checkDevice();

    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, [breakpoint]);

  return isMobile;
}
