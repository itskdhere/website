"use client";

import { useState, useRef } from "react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { cn } from "@/lib/utils";

export const FloatingDock = ({
  items,
  desktopClassName,
}: {
  items: {
    title: string;
    icon: React.ReactNode;
    href: string;
    isActive?: boolean;
    color?: string;
    onNavigate?: () => void;
  }[];
  desktopClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
    </>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: {
    title: string;
    icon: React.ReactNode;
    href: string;
    isActive?: boolean;
    color?: string;
    onNavigate?: () => void;
  }[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);
  const isMobile = useIsMobile(640);

  return (
    <motion.div
      onMouseMove={(e) => !isMobile && mouseX.set(e.pageX)}
      onMouseLeave={() => !isMobile && mouseX.set(Infinity)}
      className={cn(
        "flex items-start gap-3 sm:gap-4 rounded-xl sm:rounded-2xl h-14 sm:h-16 mx-auto px-2 sm:px-4 pt-2 sm:pt-3 bg-gray-50 dark:bg-neutral-900",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer
          mouseX={mouseX}
          key={item.title}
          isMobile={isMobile}
          {...item}
        />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  isMobile,
  isActive = false,
  color = "#6b7280",
  onNavigate,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
  isMobile: boolean;
  isActive?: boolean;
  color?: string;
  onNavigate?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  const widthTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );
  const heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );

  const yTransform = useTransform(distance, [-150, 0, 150], [0, 20, 0]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const y = useSpring(yTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);
  const [mobilePressed, setMobilePressed] = useState(false);

  const handleTouchStart = () => {
    if (isMobile) {
      setMobilePressed(true);
      setHovered(true);
    }
  };

  const handleTouchEnd = () => {
    if (isMobile) {
      setMobilePressed(false);
      setTimeout(() => {
        setHovered(false);
      }, 150);
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setHovered(false);
    }
  };

  const mobileWidth = useSpring(mobilePressed ? 80 : 40, {
    mass: 0.1,
    stiffness: 200,
    damping: 15,
  });
  const mobileHeight = useSpring(mobilePressed ? 80 : 40, {
    mass: 0.1,
    stiffness: 200,
    damping: 15,
  });
  const mobileIconWidth = useSpring(mobilePressed ? 40 : 20, {
    mass: 0.1,
    stiffness: 200,
    damping: 15,
  });
  const mobileIconHeight = useSpring(mobilePressed ? 40 : 20, {
    mass: 0.1,
    stiffness: 200,
    damping: 15,
  });

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate();
    }

    const targetId = href.replace("#", "");

    if (targetId === "" || href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <a href={href} title={title} aria-label={title} onClick={handleClick}>
      <motion.div
        ref={ref}
        style={
          isMobile
            ? { width: mobileWidth, height: mobileHeight }
            : { width, height, y }
        }
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative flex aspect-square items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800 transition-colors duration-200"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: -10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: -2, x: "-50%" }}
              className="absolute -bottom-8 left-1/2 w-fit rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs whitespace-pre text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{
            ...(isMobile
              ? { width: mobileIconWidth, height: mobileIconHeight }
              : { width: widthIcon, height: heightIcon }),
            color: isActive ? color : undefined,
          }}
          className={cn(
            "flex items-center justify-center transition-colors duration-200",
            isActive ? "" : "text-neutral-500 dark:text-neutral-300"
          )}
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}
