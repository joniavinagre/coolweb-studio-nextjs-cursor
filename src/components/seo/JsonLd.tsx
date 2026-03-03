const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://coolwebstudio.com";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "COOLWEB Studio",
    url: BASE_URL,
    logo: `${BASE_URL}/assets/coolweb-logo-full.webp`,
    description:
      "Small business web design agency offering personalized websites, SEO, and Google Business Profile services.",
    email: "hello@coolwebstudio.com",
    sameAs: [],
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "COOLWEB Studio",
    url: BASE_URL,
    description:
      "Boost your reputation, trust, and income with personalized websites for your small business. Professional web design, SEO & Google Business services.",
    publisher: {
      "@type": "Organization",
      name: "COOLWEB Studio",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/assets/coolweb-logo-full.webp`,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
      />
    </>
  );
}
