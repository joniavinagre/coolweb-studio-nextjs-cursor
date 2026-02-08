import { Link } from "react-router-dom";
import { Globe, MapPin, Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
const services = [{
  icon: Globe,
  title: "Web Development",
  description: "Custom, responsive websites that look stunning on all devices and convert visitors into customers.",
  href: "/services#web-development"
}, {
  icon: MapPin,
  title: "Google Business Profile",
  description: "Optimize your Google Business Profile to appear in local searches and attract nearby customers.",
  href: "/services#google-business"
}, {
  icon: Search,
  title: "Local SEO",
  description: "Dominate local search results and get found by customers actively looking for your services.",
  href: "/services#local-seo"
}];
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
const ServicesPreview = () => {
  return <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.span initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="topper block">
            What We Do
          </motion.span>
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.1
        }} className="section-title mb-6">
            Never Worry About Your{" "}
            <span className="text-primary">Website</span> Again
          </motion.h2>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }} className="font-body max-w-2xl mx-auto text-base text-card-foreground">
            We provide comprehensive digital solutions tailored to your business needs.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{
        once: true
      }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(service => <motion.div key={service.title} variants={item} className="group relative bg-card p-8 border border-border flex flex-col h-full rounded-md">
              {/* Icon */}
              <div className="service-icon-swipe">
                <service.icon className="w-8 h-8" />
              </div>

              {/* Content */}
              <h3 className="text-2xl text-foreground mb-3 uppercase tracking-wide card-hover-title font-extrabold">
                {service.title}
              </h3>
              <p className="font-body mb-6 leading-relaxed flex-grow text-xs text-card-foreground">
                {service.description}
              </p>

              {/* Link */}
              <Link to={service.href} className="inline-flex items-center justify-center px-4 py-2 rounded-full font-semibold text-xs uppercase tracking-wider btn-swipe-card mt-auto self-start">
                Get Started
                <ArrowRight className="w-3 h-3 ml-2" />
              </Link>
            </motion.div>)}
        </motion.div>

        {/* CTA */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mt-16">
         <Button asChild size="lg" className="bg-navy text-primary-foreground font-extrabold uppercase text-base tracking-wider px-8 btn-swipe-navy">
            <Link to="/services">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>;
};
export default ServicesPreview;