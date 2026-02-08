import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { projects } from "@/data/portfolioProjects";
const container = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};
const item = {
  hidden: {
    opacity: 0,
    y: 30
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

// Show first 3 projects on homepage
const previewProjects = projects.slice(0, 3);
const PortfolioPreview = () => {
  return <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 items-start">
          {/* Left - Topper & Headline */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="lg:border-r lg:border-border lg:pr-12">
            <span className="topper block">Portfolio</span>
            <h2 className="section-title">
              Some Of The Work{" "}
              <span className="text-primary">We've Done Over The Years</span>
            </h2>
          </motion.div>

          {/* Right - Description */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.1
        }} className="lg:pl-12 flex items-center">
            <p className="font-body leading-relaxed text-sm text-popover-foreground">
              We have worked with clients all over the world, from small local businesses to international brands. Each project is crafted with attention to detail and a focus on results. Take a look at some of our recent work.
            </p>
          </motion.div>
        </div>

        {/* Portfolio Grid - Device Mockup Style */}
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{
        once: true
      }} className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {previewProjects.map(project => <motion.article key={project.id} variants={item} className="group">
              {/* Device Mockup Image */}
              <div className="relative mb-6">
                {/* Laptop Frame */}
                <div className="bg-slate-800 rounded-t-xl p-2">
                  <div className="flex gap-1.5 mb-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  </div>
                  <div className="rounded-lg overflow-hidden aspect-[16/10]">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  </div>
                </div>
                <div className="bg-slate-700 h-3 rounded-b-lg" />
                <div className="bg-slate-600 h-1.5 w-1/3 mx-auto rounded-b-lg" />
              </div>

              {/* Content */}
              <h3 className="text-xl text-foreground mb-2 uppercase tracking-wide group-hover:text-primary transition-colors font-extrabold">
                {project.title}
              </h3>
              <p className="mb-4 line-clamp-2 leading-relaxed text-xs text-popover-foreground">
                {project.description}
              </p>

              {/* Visit Website Button */}
              <Button asChild className="btn-swipe-card font-extrabold uppercase text-sm tracking-wider">
                <a href={project.website} target="_blank" rel="noopener noreferrer">
                  Visit Website
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </motion.article>)}
        </motion.div>

        {/* View All Link */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mt-16">
          <Button asChild size="lg" className="bg-navy text-primary-foreground font-extrabold uppercase text-base tracking-wider px-8 btn-swipe-navy">
            <Link to="/portfolio">
              View All Projects
              <ExternalLink className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>;
};
export default PortfolioPreview;