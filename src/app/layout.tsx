import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metaConst = {
  title: "Krishnendu Das (itskdhere)",
  description: "Full-Stack Developer | DevOps | Self-Hosting | Web Security",
  icons: "/logo.png",
  images: [`${process.env.NEXT_PUBLIC_APP_URL!}/banner.png`],
  url: new URL(process.env.NEXT_PUBLIC_APP_URL!),
};

export const metadata: Metadata = {
  metadataBase: metaConst.url,
  title: metaConst.title,
  description: metaConst.description,
  keywords: ["Krishnendu Das", "KD", "itskdhere"],
  robots: "index, follow",
  creator: "Krishnendu Das",
  authors: [{ name: "Krishnendu Das", url: metaConst.url }],
  icons: metaConst.icons,
  openGraph: {
    title: metaConst.title,
    description: metaConst.description,
    images: metaConst.images,
    type: "website",
    url: metaConst.url,
    siteName: metaConst.title,
  },
  twitter: {
    title: metaConst.title,
    description: metaConst.description,
    images: metaConst.images,
    card: "summary_large_image",
    creator: "@itskdhere",
  },
  alternates: {
    canonical: metaConst.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
