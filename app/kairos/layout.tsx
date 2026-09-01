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

  },

  twitter: {
    card: "summary_large_image",
    title: "Kairos — A casa digital da sua igreja",
  },
};

export default function KairosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}