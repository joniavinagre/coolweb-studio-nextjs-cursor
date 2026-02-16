import { Helmet } from "react-helmet-async";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, MapPin, Tag, Briefcase, Quote, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolioProjects";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

const BASE_URL = "https://coolwebstudionew.lovable.app";

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  const pid = project.id;

  return (
    <Layout>
      <Helmet>
        <title>{project.title} | COOLWEB Studio Portfolio</title>
        <meta name="description" content={project.tagline} />
        <link rel="canonical" href={`${BASE_URL}/portfolio/${project.slug}`} />
        <meta property="og:title" content={`${project.title} | COOLWEB Studio Portfolio`} />
        <meta property="og:description" content={project.tagline} />
        <meta property="og:url" content={`${BASE_URL}/portfolio/${project.slug}`} />
      </Helmet>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary transition-colors group mb-8"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm uppercase tracking-wider">{t("caseStudy.backToPortfolio")}</span>
          </Link>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground uppercase tracking-wide mb-4">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mb-8">
              {t(`project.${pid}.tagline`)}
            </p>
            <Button size="lg" asChild className="bg-primary text-primary-foreground btn-swipe-primary font-extrabold uppercase text-sm tracking-wider">
              <a href={project.website} target="_blank" rel="noopener noreferrer">
                {t("caseStudy.visitWebsite")}
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H0Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-2xl overflow-hidden border border-border">
            <img src={project.image} alt={project.title} className="w-full aspect-video object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Info Bar */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-card rounded-2xl p-6 border border-border">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{t("caseStudy.location")}</p>
                <p className="font-bold text-foreground">{project.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center">
                <Tag className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{t("caseStudy.category")}</p>
                <p className="font-bold text-foreground">{project.category}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{t("caseStudy.services")}</p>
                <p className="font-bold text-foreground">{project.services.join(", ")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
            <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-6 leading-relaxed">
              "{t(`project.${pid}.testimonial`)}"
            </blockquote>
            <p className="font-bold text-foreground">{project.testimonial.author}</p>
            <p className="text-sm text-muted-foreground">{project.testimonial.role}</p>
          </div>
        </div>
      </section>

      {/* About the Project */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="topper block">{t("caseStudy.aboutProject.topper")}</span>
            <h2 className="section-title">
              {t("caseStudy.aboutProject.headline1")}<span className="text-primary">{t("caseStudy.aboutProject.headline2")}</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground mb-12 max-w-4xl mx-auto text-center leading-relaxed">
            {t(`project.${pid}.aboutProject`)}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="text-lg font-bold text-foreground mb-6 uppercase tracking-wide">{t("caseStudy.challenge")}</h3>
              <ul className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{t(`project.${pid}.challenge${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="text-lg font-bold text-foreground mb-6 uppercase tracking-wide">{t("caseStudy.solution")}</h3>
              <ul className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{t(`project.${pid}.solution${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="topper block">{t("caseStudy.features.topper")}</span>
            <h2 className="section-title">
              {t("caseStudy.features.headline1")}<span className="text-primary">{t("caseStudy.features.headline2")}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {project.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border"
                >
                  <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 uppercase tracking-wide">{t(`project.${pid}.feature${index + 1}.title`)}</h3>
                  <p className="text-muted-foreground">{t(`project.${pid}.feature${index + 1}.description`)}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground uppercase tracking-wide mb-4">
              {t("caseStudy.cta.headline1")}<span className="text-primary">{t("caseStudy.cta.headline2")}</span>
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              {t("caseStudy.cta.description")}
            </p>
            <Button size="lg" asChild className="bg-primary text-primary-foreground btn-swipe-primary font-extrabold uppercase text-sm tracking-wider">
              <Link to="/contact">{t("caseStudy.cta.button")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudy;
