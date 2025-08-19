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
  title: "KD",
  description: "Full-Stack Developer etc.",
  icons: "/favicon.ico",
  image: "/banner.png",
  url: new URL(process.env.NEXT_PUBLIC_APP_URL!),
};

export const metadata: Metadata = {
  title: metaConst.title,
  description: metaConst.description,
  icons: metaConst.icons,
  keywords: ["KD", "itskdhere"],
  robots: "index, follow",
  authors: [{ name: "KD", url: metaConst.url }],
  metadataBase: metaConst.url,
  alternates: {
    canonical: metaConst.url,
  },
  openGraph: {
    title: metaConst.title,
    description: metaConst.description,
    images: metaConst.image,
    type: "website",
    url: metaConst.url,
    siteName: metaConst.title,
  },
  twitter: {
    title: metaConst.title,
    description: metaConst.description,
    images: [metaConst.image],
    card: "summary_large_image",
    creator: "@itskdhere",
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
