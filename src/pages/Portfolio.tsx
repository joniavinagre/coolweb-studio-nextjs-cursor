import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { projects } from "@/data/portfolioProjects";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Portfolio = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-12 md:pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground uppercase tracking-wide mb-4 lg:text-5xl">
              Projects We're <span className="text-primary">Proud Of</span>
            </h1>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto" preserveAspectRatio="none">
            <path
              d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H0Z"
              className="fill-background"
            />
          </svg>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {projects.map((project) => (
              <motion.article
                key={project.id}
                variants={item}
                className="group flex flex-col"
              >
                {/* Image */}
                <div className="relative mb-4">
                  <div className="rounded-xl overflow-hidden aspect-[16/10]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl text-foreground mb-2 uppercase tracking-wide group-hover:text-primary transition-colors font-extrabold">
                  {project.title}
                </h3>
                <p className="mb-3 line-clamp-2 leading-relaxed text-xs text-popover-foreground flex-grow">
                  {project.description}
                </p>

                {/* Visit Website Button */}
                <Button
                  asChild
                  className="btn-swipe-card font-semibold uppercase text-sm tracking-wider mt-auto self-start"
                >
                  <a href={project.website} target="_blank" rel="noopener noreferrer">
                    Visit Website
                  </a>
                </Button>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="section-title mb-4">
              Want Your Project <span className="text-primary">Featured Here?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Let's create something amazing together. Book a free consultation to discuss your project.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-navy text-primary-foreground font-extrabold uppercase text-sm tracking-wider btn-swipe-navy"
            >
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
