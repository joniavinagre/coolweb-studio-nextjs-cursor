"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { projects } from "@/data/portfolioProjects";
import { useLanguage } from "@/contexts/LanguageContext";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const previewProjectIds = [1, 2, 5];

const PortfolioPreview = () => {
  const { t } = useLanguage();
  const previewProjects = projects.filter((p) => previewProjectIds.includes(p.id));

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:border-r lg:border-border lg:pr-12">

            <span className="topper block text-xl font-extrabold leading-none md:leading-tight">{t("portfolio.topper")}</span>
            <h2 className="section-title leading-none mb-0">
              {t("portfolio.headline1")}<span className="text-primary">{t("portfolio.headline2")}</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:pl-12 flex flex-col justify-center">

            <p className="font-body leading-relaxed text-sm text-popover-foreground mb-6">
              {t("portfolio.description")}
            </p>
            <div>
              <Button
                asChild
                size="lg"
                className="bg-navy text-primary-foreground font-bold uppercase text-base tracking-wider px-8 btn-swipe-navy">

                <Link href="/portfolio">{t("portfolio.viewAll")}</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Portfolio Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {previewProjects.map((project) =>
          <motion.article key={project.id} variants={item} className="group flex flex-col">
              <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mb-4 block cursor-pointer">

                <div className="rounded-xl overflow-hidden aspect-[16/10]">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
              </a>
              <h3 className="text-xl text-foreground mb-2 uppercase tracking-wide group-hover:text-primary transition-colors font-extrabold">
                {project.title}
              </h3>
              <p className="mb-3 leading-relaxed text-xs text-popover-foreground flex-grow">{t(`project.${project.id}.description`)}</p>
              <Button
              asChild
              className="btn-swipe-card font-semibold uppercase text-sm tracking-wider mt-auto self-start">

                <a href={project.website} target="_blank" rel="noopener noreferrer">
                  {t("portfolio.visitWebsite")}
                </a>
              </Button>
            </motion.article>
          )}
        </motion.div>
      </div>
    </section>);

};
export default PortfolioPreview;