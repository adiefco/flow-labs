import type { Metadata } from "next";
import Script from "next/script";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

const gaMeasurementId =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-RTPXYX29JL";

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
      <body className={GeistSans.className} suppressHydrationWarning>
        {children}
        {gaMeasurementId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="flow-labs-google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}', {
                  page_path: window.location.pathname,
                  anonymize_ip: true
                });
              `}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
