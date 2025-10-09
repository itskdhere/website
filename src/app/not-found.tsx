import Link from "next/link";
import { IconHome } from "@tabler/icons-react";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import FuzzyText from "@/components/blocks/TextAnimations/FuzzyText/FuzzyText";

export const metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <main
      id="main"
      className="flex flex-col items-center justify-center gap-2 min-h-screen"
    >
      <FuzzyText>404</FuzzyText>
      <FuzzyText>Not Found</FuzzyText>
      <Link href="/">
        <RainbowButton variant="outline" size="lg" className="mt-16">
          <IconHome />
          <span>Home</span>
        </RainbowButton>
      </Link>
    </main>
  );
}
