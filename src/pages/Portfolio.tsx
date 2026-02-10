import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import ProjectCard from "@/components/portfolio/ProjectCard";
import { projects, categories } from "@/data/portfolioProjects";
const container = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};
const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects = activeCategory === "All" ? projects : projects.filter(p => p.category === activeCategory);
  return <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-12 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} className="max-w-4xl mx-auto text-center">
            <span className="topper block">Our Portfolio</span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground uppercase tracking-wide mb-4 lg:text-5xl">
              Projects We're <span className="text-primary">Proud Of</span>
            </h1>
            
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H0Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Filter Tabs */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
            {categories.map(category => <button key={category} onClick={() => setActiveCategory(category)} className={`px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${activeCategory === category ? "bg-navy text-primary-foreground shadow-lg" : "bg-muted text-muted-foreground hover:bg-navy hover:text-primary-foreground"}`}>
                {category}
              </button>)}
          </motion.div>

          {/* Projects Grid - 2 columns on desktop */}
          <motion.div variants={container} initial="hidden" animate="show" key={activeCategory} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredProjects.map(project => <ProjectCard key={project.id} project={project} />)}
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No projects found in this category.
              </p>
            </motion.div>}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="max-w-4xl mx-auto text-center">
            <h2 className="section-title mb-4">
              Want Your Project <span className="text-primary">Featured Here?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Let's create something amazing together. Book a free consultation to discuss your project.
            </p>
            <Button asChild size="lg" className="bg-navy text-primary-foreground font-extrabold uppercase text-sm tracking-wider btn-swipe-navy">
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>;
};
export default Portfolio;