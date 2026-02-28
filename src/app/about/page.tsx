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
    description: "A web design agency helping small businesses grow online.",
    url: `${BASE_URL}/about`,
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
