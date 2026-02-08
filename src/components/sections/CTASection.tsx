import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
const CTASection = () => {
  return <section className="py-24 md:py-32 bg-navy relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="max-w-4xl mx-auto text-center">
          {/* Headline */}
         <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground uppercase tracking-wide mb-6">
            Ready To Get The Site{" "}
            <span className="text-primary">You Always Wanted?</span>
          </h2>

          {/* Description */}
         <p className="font-body max-w-2xl mx-auto mb-10 text-base text-primary-foreground">
            Schedule a free consultation call and let's discuss how we can help you achieve your online goals. No obligation, just valuable insights.
          </p>

          {/* CTA Button */}
          <Button asChild size="lg" className="bg-primary text-primary-foreground font-semibold uppercase text-base tracking-wider px-10 btn-swipe-primary">
            <Link to="/contact">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>;
};
export default CTASection;