import type { Metadata } from "next";
import { Providers } from "@/components/providers/Providers";
import LayoutNext from "@/components/layout/LayoutNext";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://coolwebstudio.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "COOLWEB Studio | Small Business Web Designer",
  description:
    "Boost your reputation, trust, and income with personalized websites for your small business. Professional web design, SEO & Google Business services.",
  openGraph: {
    type: "website",
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
        />
        <link rel="preload" href="/fonts/Fairweather-Regular.otf" as="font" type="font/otf" crossOrigin="" />
        <link rel="preload" href="/fonts/Fairweather-SemiBold.otf" as="font" type="font/otf" crossOrigin="" />
        <link rel="preload" href="/fonts/Fairweather-Bold.otf" as="font" type="font/otf" crossOrigin="" />
        <link rel="preload" href="/fonts/Fairweather-ExtraBold.otf" as="font" type="font/otf" crossOrigin="" />
        <link rel="icon" type="image/png" href="/myfavicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/myfavicon/favicon.svg" />
        <link rel="shortcut icon" href="/myfavicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/myfavicon/apple-touch-icon.png" />
        <link rel="manifest" href="/myfavicon/site.webmanifest" />
      </head>
      <body>
        <JsonLd />
        <Providers>
          <LayoutNext>{children}</LayoutNext>
        </Providers>
      </body>
    </html>
  );
}
