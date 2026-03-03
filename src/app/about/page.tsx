import type { Metadata } from "next";
import AboutContent from "./AboutContent";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "About Us | COOLWEB Studio",
  description:
    "Learn about COOLWEB Studio — a web design agency helping small businesses grow online with personalized websites, SEO, and digital marketing.",
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: "About Us | COOLWEB Studio",
    description:
      "Learn about COOLWEB Studio — a web design agency helping small businesses grow online with personalized websites, SEO, and digital marketing.",
    url: `${BASE_URL}/about`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | COOLWEB Studio",
    description: "Learn about COOLWEB Studio — a web design agency helping small businesses grow online.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
