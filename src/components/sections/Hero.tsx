import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero_image.webp";
const Hero = () => {
  return <section className="relative flex items-center overflow-hidden bg-navy">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-20" />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-deep-blue opacity-90" />

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-10 md:pt-28 md:pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }}>
            {/* Topper */}
           <span className="topper block">CUSTOM DESIGNS, MADE JUST FOR YOU</span>

            {/* Main Headline */}
           <h1 className="text-5xl md:text-6xl text-primary-foreground uppercase tracking-wide leading-none md:leading-tight; mb-1 md:mb-4 font-extrabold lg:text-6xl">
              Small Business{" "}
              <span className="text-primary">Web Designer</span>
            </h1>

            {/* Description */}
           <p className="font-body leading-relaxed mb-3 md:mb-6 max-w-lg text-xs md:text-base text-primary-foreground">
              Expert web development, Google Business Profile optimization, and Local SEO services to help your business stand out and attract more customers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
              <Button asChild size="lg" className="bg-primary text-primary-foreground font-extrabold uppercase text-base tracking-wider px-8 btn-swipe-primary">
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-navy border-2 border-primary-foreground/40 text-primary-foreground font-extrabold uppercase text-base tracking-wider px-8 btn-swipe-navy">
                <Link to="/about">About Us</Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-4 md:mt-8 flex-wrap gap-6 text-primary-foreground/60 flex items-center justify-center lg:justify-start">
              
              
            </div>
          </motion.div>

          {/* Right - Device Mockups */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="relative flex justify-center lg:justify-end">
            <img src={heroImage} alt="Website design showcase on laptop and mobile" className="w-full max-w-xs sm:max-w-sm lg:max-w-full drop-shadow-2xl" />
          </motion.div>
        </div>
      </div>

      {/* Curved wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H0Z" className="fill-background" />
        </svg>
      </div>
    </section>;
};
export default Hero;