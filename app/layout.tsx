import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://flow-labs.digital"),

  title: {
    default: "Flow Labs",
    template: "%s | Flow Labs",
  },

  description:
    "Software house especializada em produtos digitais. Criamos sites, apps e plataformas com design, tecnologia e propósito.",

  keywords: [
    "software house",
    "produtos digitais",
    "desenvolvimento de software",
    "criação de sites",
    "aplicativos",
    "plataformas digitais",
    "e-commerce",
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
      "Software house especializada em produtos digitais. Criamos sites, apps e plataformas com design, tecnologia e propósito.",

  },

  twitter: {
    card: "summary_large_image",
    title: "Flow Labs",
    description:
      "Software house especializada em produtos digitais.",
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
      <body className={GeistSans.className} suppressHydrationWarning>{children}</body>
    </html>
  );
}