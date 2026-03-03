import type { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "Portfolio | COOLWEB Studio",
  description:
    "Browse our portfolio of 12+ small business websites. From massage therapists to restaurants, see how we help businesses grow online.",
  alternates: { canonical: `${BASE_URL}/portfolio` },
  openGraph: {
    title: "Portfolio | COOLWEB Studio",
    description: "Browse our portfolio of 12+ small business websites across industries.",
    url: `${BASE_URL}/portfolio`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | COOLWEB Studio",
    description: "Browse our portfolio of 12+ small business websites across industries.",
  },
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
