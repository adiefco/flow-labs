import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://flow-labs.digital"),

  title: {
    default: "Flow Labs",
    template: "%s | Flow Labs",
  },

  description:
    "Estúdio de produtos digitais. Criamos experiências digitais com design, tecnologia e propósito.",

  keywords: [
    "produtos digitais",
    "apps",
    "e-commerce",
    "desenvolvimento",
    "react",
    "nextjs",
    "flow labs",
  ],

  authors: [{ name: "Flow Labs" }],

  creator: "Flow Labs",

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://flow-labs.digital",
    siteName: "Flow Labs",

    title: "Flow Labs",
    description:
      "Estúdio de produtos digitais. Criamos experiências digitais com design, tecnologia e propósito.",

    images: [
      {
        url: "/og-flowlabs.png",
        width: 1200,
        height: 630,
        alt: "Flow Labs",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Flow Labs",
    description:
      "Estúdio de produtos digitais.",
    images: ["/og-flowlabs.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}