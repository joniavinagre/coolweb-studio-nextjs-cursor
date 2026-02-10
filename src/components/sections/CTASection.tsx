import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
const CTASection = () => {
  return <section className="py-14 bg-muted/30">
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
            Ready To Get The Site{" "}
            <span className="text-primary">You Always Wanted?</span>
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
      <div className="mt-14">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto" preserveAspectRatio="none">
          <path
            d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H0Z"
            className="fill-navy"
          />
        </svg>
      </div>
    </section>;
};
export default CTASection;