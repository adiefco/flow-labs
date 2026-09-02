import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kairos — A casa digital da sua igreja",

  description:
    "Agenda, cultos, pedidos de oração, contribuições e informações reunidos em um só app, personalizado com a identidade da sua igreja.",

  keywords: [
    "app para igreja",
    "aplicativo igreja",
    "igreja digital",
    "kairos",
    "app cristão",
    "comunicação para igrejas",
  ],

  alternates: {
    canonical: "/kairos",
  },

  openGraph: {
    title: "Kairos — A casa digital da sua igreja",

    description:
      "Agenda, cultos, pedidos de oração e informações reunidos em uma casa digital com a identidade da sua igreja.",

    url: "https://flow-labs.digital/kairos",
    siteName: "Kairos by Flow Labs",
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kairos — A casa digital da sua igreja",
    description:
      "Tudo o que sua igreja precisa, em um só app personalizado para a sua comunidade.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function KairosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
