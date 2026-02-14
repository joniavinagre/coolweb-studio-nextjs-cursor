import { Globe, MapPin, Search, Check, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

interface PricingFeature {
  text: string;
  included: boolean;
}
interface PricingTier {
  name: string;
  price: string;
  priceNote?: string;
  description?: string;
  features: PricingFeature[];
  cta?: string;
  featured?: boolean;
}
interface ServiceCategory {
  id: string;
  icon: typeof Globe;
  title: string;
  description: string;
  tiers: PricingTier[];
}

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Services = () => {
  const { t } = useLanguage();

  const webDevTiers: PricingTier[] = [{
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
    { text: t("pricing.feature.lifetimeUpdates"), included: false }],

    cta: t("pricing.lumpSum.cta")
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
    { text: t("pricing.feature.lifetimeUpdates"), included: true }],

    cta: t("pricing.monthly.cta"),
    featured: true
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
    { text: t("pricing.feature.ongoingMaintenance"), included: true }],

    cta: t("pricing.custom.cta")
  }];

  const serviceCategories: ServiceCategory[] = [{
    id: "web-development",
    icon: Globe,
    title: t("servicesPage.webDev.title"),
    description: t("servicesPage.webDev.description"),
    tiers: webDevTiers
  }, {
    id: "google-business",
    icon: MapPin,
    title: t("servicesPage.gbp.title"),
    description: t("servicesPage.gbp.description"),
    tiers: [{
      name: t("servicesPage.gbp.setup.name"),
      price: t("servicesPage.gbp.setup.price"),
      priceNote: t("servicesPage.gbp.setup.priceNote"),
      description: t("servicesPage.gbp.setup.description"),
      features: [
      { text: t("servicesPage.gbp.feature.completeSetup"), included: true },
      { text: t("servicesPage.gbp.feature.verification"), included: true },
      { text: t("servicesPage.gbp.feature.categoryOpt"), included: true },
      { text: t("servicesPage.gbp.feature.photoVideo"), included: true },
      { text: t("servicesPage.gbp.feature.basicOpt"), included: true }],

      cta: t("servicesPage.gbp.setup.cta")
    }, {
      name: t("servicesPage.gbp.mgmt.name"),
      price: t("servicesPage.gbp.mgmt.price"),
      priceNote: t("servicesPage.gbp.mgmt.priceNote"),
      description: t("servicesPage.gbp.mgmt.description"),
      features: [
      { text: t("servicesPage.gbp.feature.ongoingOpt"), included: true },
      { text: t("servicesPage.gbp.feature.weeklyPosts"), included: true },
      { text: t("servicesPage.gbp.feature.reviewResponses"), included: true },
      { text: t("servicesPage.gbp.feature.photoUpdates"), included: true },
      { text: t("servicesPage.gbp.feature.monthlyReports"), included: true }],

      cta: t("servicesPage.gbp.mgmt.cta")
    }]
  }, {
    id: "local-seo",
    icon: Search,
    title: t("servicesPage.seo.title"),
    description: t("servicesPage.seo.description"),
    tiers: [{
      name: t("servicesPage.seo.basic.name"),
      price: t("servicesPage.seo.basic.price"),
      priceNote: t("servicesPage.seo.basic.priceNote"),
      description: t("servicesPage.seo.basic.description"),
      features: [
      { text: t("servicesPage.seo.feature.5keywords"), included: true },
      { text: t("servicesPage.seo.feature.basicOpt"), included: true },
      { text: t("servicesPage.seo.feature.monthlyReport"), included: true },
      { text: t("servicesPage.seo.feature.citationBuilding"), included: true },
      { text: t("servicesPage.seo.feature.napAudit"), included: true }],

      cta: t("servicesPage.seo.basic.cta")
    }, {
      name: t("servicesPage.seo.advanced.name"),
      price: t("servicesPage.seo.advanced.price"),
      priceNote: t("servicesPage.seo.advanced.priceNote"),
      description: t("servicesPage.seo.advanced.description"),
      features: [
      { text: t("servicesPage.seo.feature.15keywords"), included: true },
      { text: t("servicesPage.seo.feature.fullOpt"), included: true },
      { text: t("servicesPage.seo.feature.biweeklyReports"), included: true },
      { text: t("servicesPage.seo.feature.linkBuilding"), included: true },
      { text: t("servicesPage.seo.feature.mapsRanking"), included: true },
      { text: t("servicesPage.seo.feature.contentOpt"), included: true }],

      cta: t("servicesPage.seo.advanced.cta")
    }]
  }];

  return <Layout>
      <section className="pt-28 pb-12 md:pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
            <h1 className="font-bold text-primary-foreground uppercase tracking-wide mb-4 lg:text-5xl text-4xl md:text-5xl">
              {t("servicesPage.heroTitle1")}<span className="text-primary">{t("servicesPage.heroTitle2")}</span>
            </h1>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H0Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {serviceCategories.map((category, categoryIndex) => <section key={category.id} id={category.id} className={`py-14 md:py-18 ${categoryIndex % 2 === 1 ? "bg-muted/30" : "bg-background"}`}>
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
                <div>
                  <h2 className="section-title mb-[10px]">
                    {t(`servicesPage.${category.id === "web-development" ? "webDev" : category.id === "google-business" ? "gbp" : "seo"}.packagesTitle`)}{" "}
                    <span className="text-primary">{t(`servicesPage.${category.id === "web-development" ? "webDev" : category.id === "google-business" ? "gbp" : "seo"}.packagesHighlight`)}</span>
                  </h2>
                  <p className="font-body max-w-2xl text-sm text-card-foreground">{category.description}</p>
                </div>
                <Button asChild size="lg" className="bg-navy text-primary-foreground font-extrabold uppercase text-base tracking-wider px-8 btn-swipe-navy">
                  <Link to="/contact">
                    {t("header.getStarted")}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className={category.tiers.length === 3 ? "grid grid-cols-1 md:grid-cols-3 gap-6" : "grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-[calc(66.666%+0.75rem)] mx-auto"}>
                {category.tiers.map((tier, tierIndex) => <motion.div key={tierIndex} variants={item} className={`rounded-xl border flex flex-col overflow-hidden ${tier.featured ? "bg-navy border-primary ring-2 ring-primary/20" : "border-border bg-card"}`}>
                    <div className="px-6 pt-6">
                      <h3 className={`text-2xl font-extrabold uppercase tracking-wider mb-1 ${tier.featured ? "text-primary-foreground" : "text-foreground"}`}>{tier.name}</h3>
                      <p className={`text-sm ${tier.featured ? "text-primary-foreground" : "text-card-foreground"}`}>{tier.description}</p>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <ul className="space-y-2 mb-4 flex-grow">
                        {tier.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start gap-2">
                            {feature.included ? <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary" /> : <X className={`w-4 h-4 flex-shrink-0 mt-0.5 ${tier.featured ? "text-primary-foreground/50" : "text-muted-foreground/50"}`} />}
                            <span className={`text-xs ${tier.featured ? feature.included ? "text-primary-foreground" : "text-primary-foreground/50" : feature.included ? "text-foreground" : "text-muted-foreground/50"}`}>{feature.text}</span>
                          </li>)}
                      </ul>
                      <div className="mb-4 mt-auto">
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
        </section>)}

      <section className="pt-14 pb-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
            <h2 className="section-title mb-4">
              {t("servicesPage.bottomCta.headline1")}<span className="text-primary">{t("servicesPage.bottomCta.headline2")}</span>
            </h2>
            <Button asChild size="lg" className="bg-navy text-primary-foreground font-extrabold uppercase text-sm tracking-wider btn-swipe-navy">
              <Link to="/contact">
                {t("servicesPage.bottomCta.button")}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>;
};
export default Services;