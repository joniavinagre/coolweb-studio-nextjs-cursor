import type { Metadata } from "next";
import ContactContent from "./ContactContent";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "Contact Us | COOLWEB Studio",
  description:
    "Get in touch with COOLWEB Studio for a free consultation. We design professional websites for small businesses worldwide.",
  alternates: { canonical: `${BASE_URL}/contact` },
  openGraph: {
    title: "Contact Us | COOLWEB Studio",
    description: "Get in touch with COOLWEB Studio for a free consultation. Professional websites for small businesses worldwide.",
    url: `${BASE_URL}/contact`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | COOLWEB Studio",
    description: "Get in touch with COOLWEB Studio for a free consultation.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
