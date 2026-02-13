import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const About = () => {
  const { t } = useLanguage();

  const values = [
    { title: t("aboutPage.values.v1.title"), description: t("aboutPage.values.v1.description") },
    { title: t("aboutPage.values.v2.title"), description: t("aboutPage.values.v2.description") },
    { title: t("aboutPage.values.v3.title"), description: t("aboutPage.values.v3.description") },
    { title: t("aboutPage.values.v4.title"), description: t("aboutPage.values.v4.description") },
  ];

  const processSteps = [
    { step: "01", title: t("aboutPage.process.step1.title"), description: t("aboutPage.process.step1.description") },
    { step: "02", title: t("aboutPage.process.step2.title"), description: t("aboutPage.process.step2.description") },
    { step: "03", title: t("aboutPage.process.step3.title"), description: t("aboutPage.process.step3.description") },
    { step: "04", title: t("aboutPage.process.step4.title"), description: t("aboutPage.process.step4.description") },
  ];

  return <Layout>
      {/* Hero */}
      <section className="pt-28 pb-12 md:pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground uppercase tracking-wide mb-4 lg:text-5xl">
              {t("aboutPage.heroTitle1")}<br className="md:hidden" /><span className="text-primary">{t("aboutPage.heroTitle2")}</span>
            </h1>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H0Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=750&fit=crop" alt="COOLWEB Studio team collaborating" className="w-full h-full object-cover rounded-md" />
                <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm rounded-xl p-4 border border-border">
                  <h3 className="font-bold text-foreground text-lg">{t("aboutPage.story.cardTitle")}</h3>
                  <p className="text-xs text-card-foreground">{t("aboutPage.story.cardSubtitle")}</p>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="topper block">{t("aboutPage.story.topper")}</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground uppercase tracking-wide leading-none md:leading-tight; mb-[10px]">
                {t("aboutPage.story.headline1")}<span className="text-primary">{t("aboutPage.story.headline2")}</span>
              </h2>
              <div className="space-y-3 font-body text-sm text-card-foreground leading-relaxed">
                <p>{t("aboutPage.story.p1")}</p>
                <p>{t("aboutPage.story.p2")}</p>
                <p>{t("aboutPage.story.p3")}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            <div>
              <span className="topper block">{t("aboutPage.process.topper")}</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-primary-foreground uppercase tracking-wide leading-none md:leading-tight;">
                {t("aboutPage.process.headline1")}<span className="text-primary">{t("aboutPage.process.headline2")}</span>
              </h2>
            </div>
            <div className="flex items-end">
              <p className="font-body text-sm leading-relaxed text-primary-foreground">{t("aboutPage.process.description")}</p>
            </div>
          </div>
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map(step => <motion.div key={step.step} variants={item}>
                <div className="backdrop-blur-sm border-primary-foreground/10 rounded-xl p-6 h-full bg-transparent border-0">
                  <div className="text-5xl font-extrabold text-primary mb-2" style={{ fontFamily: "'Fairweather', system-ui, sans-serif" }}>{step.step}</div>
                  <h3 className="text-primary-foreground font-extrabold uppercase tracking-wide text-lg mb-2">{step.title}</h3>
                  <p className="font-body text-xs leading-relaxed text-primary-foreground">{step.description}</p>
                </div>
              </motion.div>)}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="topper block">{t("aboutPage.values.topper")}</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground uppercase tracking-wide leading-none md:leading-tight; mb-[10px]">
                {t("aboutPage.values.headline1")}<span className="text-primary">{t("aboutPage.values.headline2")}</span>
              </h2>
              <p className="font-body mb-6 leading-relaxed text-sm text-card-foreground">{t("aboutPage.values.description")}</p>
              <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {values.map((value, index) => <motion.div key={index} variants={item} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-foreground text-base uppercase tracking-wide mb-1 font-extrabold">{value.title}</h3>
                      <p className="font-body leading-relaxed text-xs text-card-foreground">{value.description}</p>
                    </div>
                  </motion.div>)}
              </motion.div>
              <Button asChild size="lg" className="bg-navy text-primary-foreground font-extrabold uppercase text-base tracking-wider px-8 btn-swipe-navy">
                <Link to="/contact">
                  {t("aboutPage.values.cta")}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
              <div className="relative rounded-xl overflow-hidden aspect-[4/5]">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=750&fit=crop" alt="Digital analytics workspace" className="w-full h-full object-cover rounded-md" />
                <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm rounded-xl p-4 border border-border">
                  <h3 className="font-bold text-foreground text-lg">{t("aboutPage.values.cardTitle")}</h3>
                  <p className="text-xs text-card-foreground">{t("aboutPage.values.cardSubtitle")}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-14 pb-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
            <h2 className="section-title mb-4">
              {t("aboutPage.cta.headline1")}<span className="text-primary">{t("aboutPage.cta.headline2")}</span>
            </h2>
            <Button asChild size="lg" className="bg-navy text-primary-foreground font-extrabold uppercase text-sm tracking-wider btn-swipe-navy">
              <Link to="/contact">
                {t("aboutPage.cta.button")}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>;
};
export default About;
