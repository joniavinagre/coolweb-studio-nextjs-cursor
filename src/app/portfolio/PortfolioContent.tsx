"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { projects } from "@/data/portfolioProjects";
import { useLanguage } from "@/contexts/LanguageContext";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } }
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const PortfolioContent = () => {
  const { t } = useLanguage();

  return (
    <>
      <section className="pt-28 pb-12 md:pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground uppercase tracking-wide mb-4 lg:text-5xl">
              {t("portfolioPage.heroTitle1")}<span className="text-primary">{t("portfolioPage.heroTitle2")}</span>
            </h1>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H0Z" className="fill-background" />
          </svg>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.article key={project.id} variants={item} className="group flex flex-col">
                <Link href={`/portfolio/${project.slug}`} className="relative mb-4 block cursor-pointer">
                  <div className="rounded-xl overflow-hidden aspect-[16/10]">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </Link>
                <h3 className="text-xl text-foreground mb-2 uppercase tracking-wide group-hover:text-primary transition-colors font-extrabold">
                  {project.title}
                </h3>
                <p className="mb-3 leading-relaxed text-xs text-popover-foreground flex-grow">
                  {t(`project.${project.id}.description`)}
                </p>
                <Button asChild className="btn-swipe-card font-semibold uppercase text-sm tracking-wider mt-auto self-start">
                  <a href={project.website} target="_blank" rel="noopener noreferrer">
                    {t("portfolio.visitWebsite")}
                  </a>
                </Button>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="pt-14 pb-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
            <h2 className="section-title mb-4">
              {t("portfolioPage.cta.headline1")}<span className="text-primary">{t("portfolioPage.cta.headline2")}</span>
            </h2>
            <Button asChild size="lg" className="bg-navy text-primary-foreground font-extrabold uppercase text-sm tracking-wider btn-swipe-navy">
              <Link href="/contact">
                {t("portfolioPage.cta.button")}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PortfolioContent;
