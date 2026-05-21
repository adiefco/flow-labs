import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kairos — A casa digital da sua igreja",

  description:
    "Conecte fé, comunidade e propósito em um só lugar. Agenda, cultos, pedidos de oração, doações e muito mais.",

  keywords: [
    "app para igreja",
    "aplicativo igreja",
    "igreja digital",
    "kairos",
    "app cristão",
    "gestão de igreja",
  ],

  openGraph: {
    title: "Kairos — A casa digital da sua igreja",

    description:
      "Conecte fé, comunidade e propósito em um só lugar.",

    url: "https://flow-labs.digital/kairos",

    images: [
      {
        url: "/og-kairos.png",
        width: 1200,
        height: 630,
        alt: "Kairos",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kairos — A casa digital da sua igreja",
    images: ["/og-kairos.png"],
  },
};

export default function KairosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}