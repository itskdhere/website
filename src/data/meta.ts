import { Metadata } from "next";

export function constructMetadata({
  title = "KD",
  description = "Developer etc.",
  image = "/banner.png",
  icons = "/favicon.ico",
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
} = {}): Metadata {
  return {
    title,
    description,
    icons,
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@itskdhere",
    },
  };
}
