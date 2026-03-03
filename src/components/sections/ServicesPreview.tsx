"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const ServicesPreview = () => {
  const { t } = useLanguage();

  const services = [{
    icon: "/icons/web-development.svg",
    title: t("services.webDev.title"),
    description: t("services.webDev.description"),
    href: "/services#web-development"
  }, {
    icon: "/icons/googlemybusiness.svg",
    title: t("services.gbp.title"),
    description: t("services.gbp.description"),
    href: "/services#google-business"
  }, {
    icon: "/icons/seo.svg",
    title: t("services.seo.title"),
    description: t("services.seo.description"),
    href: "/services#local-seo"
  }];

  return <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-[10px]">
          <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="topper block leading-none md:leading-tight">
            {t("services.topper")}
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="section-title leading-none md:leading-tight mb-[10px]">
            {t("services.headline1")}<span className="text-primary">{t("services.headline2")}</span>{t("services.headline3")}
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="font-body max-w-2xl mx-auto text-card-foreground text-sm">
            {t("services.description")}
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => <motion.div key={service.href} variants={item} className="group relative bg-card p-6 border border-border flex flex-col h-full rounded-md">
              <div className="service-icon-swipe">
                <img src={service.icon} alt="" className="w-8 h-8 relative z-10" aria-hidden="true" />
              </div>
              <h3 className="text-2xl text-foreground mb-2 uppercase tracking-wide card-hover-title font-extrabold">
                {service.title}
              </h3>
              <p className="font-body mb-4 leading-relaxed flex-grow text-xs text-card-foreground">
                {service.description}
              </p>
              <Link href={service.href} className="inline-flex items-center justify-center px-4 py-2 rounded-full font-semibold text-xs uppercase tracking-wider btn-swipe-card mt-auto self-start">
                {t("services.cardCta")}
                <ArrowRight className="w-3 h-3 ml-2" />
              </Link>
            </motion.div>)}
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-10">
          <Button asChild size="lg" className="bg-navy text-primary-foreground font-extrabold uppercase text-base tracking-wider px-8 btn-swipe-navy">
            <Link href="/services">
              {t("services.viewAll")}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>;
};
export default ServicesPreview;