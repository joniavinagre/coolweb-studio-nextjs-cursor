import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import ServicesPreview from "@/components/sections/ServicesPreview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import PerformanceSection from "@/components/sections/PerformanceSection";
import PricingPreview from "@/components/sections/PricingPreview";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const BASE_URL = "https://coolwebstudionew.lovable.app";

const Index = () => {
  const { t } = useLanguage();
  return <Layout>
      <Helmet>
        <title>COOLWEB Studio | Small Business Web Designer</title>
        <meta name="description" content="Boost your reputation, trust, and income with personalized websites for your small business. Professional web design, SEO & Google Business services." />
        <link rel="canonical" href={BASE_URL + "/"} />
        <meta property="og:title" content="COOLWEB Studio | Small Business Web Designer" />
        <meta property="og:description" content="Boost your reputation, trust, and income with personalized websites for your small business." />
        <meta property="og:url" content={BASE_URL + "/"} />
        <meta property="og:type" content="website" />
      </Helmet>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <PortfolioPreview />
      <PerformanceSection />
      <PricingPreview />
      <section className="pt-14 pb-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
            <h2 className="section-title mb-4">
              {t("index.cta.headline1")}<span className="text-primary">{t("index.cta.headline2")}</span>
            </h2>
            <Button asChild size="lg" className="bg-navy text-primary-foreground font-extrabold uppercase text-sm tracking-wider btn-swipe-navy">
              <Link to="/contact">
                {t("index.cta.button")}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>;
};
export default Index;
