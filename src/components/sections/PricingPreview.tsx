import { Link } from "react-router-dom";
import { ArrowRight, Check, X } from "lucide-react";
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

const PricingPreview = () => {
  const { t } = useLanguage();

  const pricingTiers = [{
    name: t("pricing.lumpSum.name"),
    price: t("pricing.lumpSum.price"),
    priceNote: t("pricing.lumpSum.priceNote"),
    description: t("pricing.lumpSum.description"),
    features: [
      { text: t("pricing.feature.customDesign"), included: true },
      { text: t("pricing.feature.upTo5Pages"), included: true },
      { text: t("pricing.feature.mobileResponsive"), included: true },
      { text: t("pricing.feature.basicSeo"), included: true },
      { text: t("pricing.feature.hosting25"), included: true },
      { text: t("pricing.feature.unlimitedEdits"), included: false },
      { text: t("pricing.feature.support247"), included: false },
      { text: t("pricing.feature.lifetimeUpdates"), included: false },
    ],
    cta: t("pricing.lumpSum.cta"),
  }, {
    name: t("pricing.monthly.name"),
    price: t("pricing.monthly.price"),
    priceNote: t("pricing.monthly.priceNote"),
    description: t("pricing.monthly.description"),
    features: [
      { text: t("pricing.feature.customDesign"), included: true },
      { text: t("pricing.feature.upTo5Pages"), included: true },
      { text: t("pricing.feature.mobileResponsive"), included: true },
      { text: t("pricing.feature.advancedSeo"), included: true },
      { text: t("pricing.feature.hostingIncluded"), included: true },
      { text: t("pricing.feature.unlimitedEdits"), included: true },
      { text: t("pricing.feature.support247"), included: true },
      { text: t("pricing.feature.lifetimeUpdates"), included: true },
    ],
    cta: t("pricing.monthly.cta"),
    featured: true,
  }, {
    name: t("pricing.custom.name"),
    price: t("pricing.custom.price"),
    description: t("pricing.custom.description"),
    features: [
      { text: t("pricing.feature.ecommerce"), included: true },
      { text: t("pricing.feature.customIntegrations"), included: true },
      { text: t("pricing.feature.advancedFunctionality"), included: true },
      { text: t("pricing.feature.multiLanguage"), included: true },
      { text: t("pricing.feature.priorityDev"), included: true },
      { text: t("pricing.feature.dedicatedSupport"), included: true },
      { text: t("pricing.feature.customHosting"), included: true },
      { text: t("pricing.feature.ongoingMaintenance"), included: true },
    ],
    cta: t("pricing.custom.cta"),
  }];

  return <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="topper block leading-none md:leading-tight">
              {t("pricing.topper")}
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="section-title leading-none md:leading-tight">
              {t("pricing.headline1")}<span className="text-primary">{t("pricing.headline2")}</span>
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Button asChild size="lg" className="bg-navy text-primary-foreground font-extrabold uppercase text-base tracking-wider px-8 btn-swipe-navy">
              <Link to="/contact">
                {t("header.getStarted")}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingTiers.map(tier => <motion.div key={tier.name} variants={item} className={`rounded-xl border flex flex-col h-full overflow-hidden ${tier.featured ? "bg-navy border-primary ring-2 ring-primary/20" : "border-border bg-card"}`}>
              <div className="px-6 pt-6">
                <h3 className={`text-2xl font-extrabold uppercase tracking-wider mb-1 ${tier.featured ? "text-primary-foreground" : "text-foreground"}`}>{tier.name}</h3>
                <p className={`text-sm ${tier.featured ? "text-primary-foreground" : "text-card-foreground"}`}>{tier.description}</p>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <ul className="space-y-2 mb-4 flex-grow">
                  {tier.features.map(feature => <li key={feature.text} className="flex items-start gap-2">
                      {feature.included ? <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 text-primary`} /> : <X className={`w-4 h-4 flex-shrink-0 mt-0.5 ${tier.featured ? "text-primary-foreground/50" : "text-muted-foreground/50"}`} />}
                      <span className={`text-xs ${tier.featured ? feature.included ? "text-primary-foreground" : "text-primary-foreground/50" : feature.included ? "text-foreground" : "text-muted-foreground/50"}`}>{feature.text}</span>
                    </li>)}
                </ul>
                <div className="mb-4">
                  <span className={`text-4xl md:text-5xl font-display font-extrabold ${tier.featured ? "text-primary-foreground" : "text-foreground"}`}>{tier.price}</span>
                  {tier.priceNote && <span className={`ml-1 text-xs ${tier.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{tier.priceNote}</span>}
                </div>
                <Button asChild className={`w-full font-extrabold uppercase text-sm tracking-wider ${tier.featured ? "bg-primary text-primary-foreground btn-swipe-primary" : "btn-swipe-card"}`}>
                  <Link to="/contact">
                    {tier.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
};
export default PricingPreview;
