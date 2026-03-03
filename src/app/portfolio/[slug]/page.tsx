import type { Metadata } from "next";
import { projects } from "@/data/portfolioProjects";
import CaseStudyContent from "./CaseStudyContent";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | COOLWEB Studio Portfolio`,
    description: project.tagline,
    alternates: { canonical: `${BASE_URL}/portfolio/${project.slug}` },
    openGraph: {
      title: `${project.title} | COOLWEB Studio Portfolio`,
      description: project.tagline,
      url: `${BASE_URL}/portfolio/${project.slug}`,
      type: "website",
      images: project.image ? [{ url: project.image, alt: project.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | COOLWEB Studio Portfolio`,
      description: project.tagline,
    },
  };
}

export default async function PortfolioSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CaseStudyContent params={{ slug }} />;
}
