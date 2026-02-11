import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import joniImage from "@/assets/joni-vinagre.webp";
import { useLanguage } from "@/contexts/LanguageContext";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const WhyChooseUs = () => {
  const { t } = useLanguage();

  const features = [
    { title: t("why.feature1.title"), description: t("why.feature1.description") },
    { title: t("why.feature2.title"), description: t("why.feature2.description") },
    { title: t("why.feature3.title"), description: t("why.feature3.description") },
    { title: t("why.feature4.title"), description: t("why.feature4.description") },
    { title: t("why.feature5.title"), description: t("why.feature5.description") },
    { title: t("why.feature6.title"), description: t("why.feature6.description") },
  ];

  return <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
            <div className="relative rounded-xl overflow-hidden aspect-[4/5]">
              <img src={joniImage} alt="Joni Vinagre - Founder and Web Developer" className="w-full h-full object-cover rounded-xl" />
              <div className="absolute top-6 left-6 right-6 bg-card/95 backdrop-blur-sm rounded-xl px-4 py-2 border border-border">
                <h3 className="text-foreground text-lg font-extrabold">{t("why.founderName")}</h3>
                <p className="text-xs text-card-foreground">{t("why.founderRole")}</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="topper block leading-none md:leading-tight">{t("why.topper")}</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground uppercase tracking-wide leading-none md:leading-tight;">
              {t("why.headline1")}<span className="text-primary">{t("why.headline2")}</span>
            </h2>
            <p className="font-body mb-6 leading-relaxed text-sm text-card-foreground">
              {t("why.description")}
            </p>

            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {features.map(feature => <motion.div key={feature.title} variants={item} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-foreground text-base uppercase tracking-wide mb-1 font-extrabold">
                      {feature.title}
                    </h3>
                    <p className="font-body leading-relaxed text-xs text-card-foreground">{feature.description}</p>
                  </div>
                </motion.div>)}
            </motion.div>

            <Button asChild size="lg" className="bg-navy text-primary-foreground font-extrabold uppercase text-base tracking-wider px-8 btn-swipe-navy">
              <Link to="/contact">
                {t("why.cta")}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default WhyChooseUs;
