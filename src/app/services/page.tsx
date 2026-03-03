import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "Services & Pricing | COOLWEB Studio",
  description:
    "Web design, Google Business Profile setup, and local SEO services for small businesses. Affordable pricing plans starting from €150/month.",
  alternates: { canonical: `${BASE_URL}/services` },
  openGraph: {
    title: "Services & Pricing | COOLWEB Studio",
    description:
      "Web design, Google Business Profile setup, and local SEO services for small businesses. Affordable pricing plans from €150/month.",
    url: `${BASE_URL}/services`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services & Pricing | COOLWEB Studio",
    description: "Web design, Google Business Profile, and local SEO for small businesses. Affordable pricing.",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
