import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ServicesPreview from "@/components/sections/ServicesPreview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import PerformanceSection from "@/components/sections/PerformanceSection";
import PricingPreview from "@/components/sections/PricingPreview";
import HomeCta from "@/components/sections/HomeCta";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "COOLWEB Studio | Small Business Web Designer",
  description: "Boost your reputation, trust, and income with personalized websites for your small business. Professional web design, SEO & Google Business services.",
  alternates: { canonical: `${BASE_URL}/` },
  openGraph: {
    title: "COOLWEB Studio | Small Business Web Designer",
    description: "Boost your reputation, trust, and income with personalized websites for your small business.",
    url: `${BASE_URL}/`,
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <PortfolioPreview />
      <PerformanceSection />
      <PricingPreview />
      <HomeCta />
    </>
  );
}
