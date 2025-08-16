"use client";

import { Pointer } from "@/components/magicui/pointer";
import LightRays from "@/components/blocks/Backgrounds/LightRays/LightRays";
import SplitText from "@/components/blocks/TextAnimations/SplitText/SplitText";
import { RippleButton } from "@/components/magicui/ripple-button";
import { IconCloud } from "@/components/magicui/icon-cloud";
import { IconPointerFilled } from "@tabler/icons-react";
import { heroData, heroIconSlugs } from "@/data/hero";

export default function Hero() {
  const iconCloudImages = heroIconSlugs.map(
    (iconSlug) => `https://cdn.simpleicons.org/${iconSlug}/${iconSlug}`
  );

  return (
    <section id="#" className="w-full h-screen">
      <Pointer>
        <IconPointerFilled size={20} className="rotate-12" />
      </Pointer>

      <div className="absolute size-full pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={1}
          rayLength={1}
          followMouse={true}
          mouseInfluence={0.1}
          fadeDistance={1}
          noiseAmount={0.1}
          distortion={0.05}
          saturation={0.6}
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center size-full max-w-6xl mx-auto px-3 md:px-10">
        <div className="flex flex-row items-center justify-center size-full w-fit sm:w-full">
          <div className="flex flex-col items-start justify-center gap-1.5">
            <SplitText
              text={heroData.greeting}
              className="text-4xl sm:text-5xl font-serif"
              delay={70}
              duration={2}
              ease="elastic.out(1, 0.3)"
              splitType="words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
            <SplitText
              text={heroData.name}
              className="text-3xl sm:text-4xl mt-2 font-semibold text-left!"
              delay={70}
              duration={2}
              ease="elastic.out(1, 0.3)"
              splitType="words"
              from={{ opacity: 0, y: 40, delay: 0.2 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
            <SplitText
              text={heroData.alias}
              className="text-lg sm:text-xl mb-2 italic font-thin"
              delay={70}
              duration={2}
              ease="elastic.out(1, 0.3)"
              splitType="words"
              from={{ opacity: 0, y: 40, delay: 0.3 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
            <SplitText
              text={heroData.role}
              className="text-xl sm:text-2xl font-mono"
              delay={70}
              duration={2}
              ease="elastic.out(1, 0.3)"
              splitType="words"
              from={{ opacity: 0, x: -40, delay: 0.4 }}
              to={{ opacity: 1, x: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
            <RippleButton rippleColor="#ADD8E6" className="mt-10">
              {heroData.cta1}
            </RippleButton>
          </div>
        </div>

        <div className="hidden sm:flex flex-col sm:flex-row items-center justify-center overflow-hidden size-full">
          <IconCloud images={iconCloudImages} />
        </div>
      </div>
    </section>
  );
}
