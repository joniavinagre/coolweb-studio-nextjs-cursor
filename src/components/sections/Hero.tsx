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

      <div className="container mx-auto px-4 relative z-10 pt-28 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
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
           <h1 className="text-5xl md:text-6xl text-primary-foreground uppercase tracking-wide leading-tight mb-4 font-extrabold lg:text-6xl">
              Small Business{" "}
              <span className="text-primary">Web Designer</span>
            </h1>

            {/* Description */}
           <p className="font-body leading-relaxed mb-6 max-w-lg md:text-base text-primary-foreground text-base">
              Expert web development, Google Business Profile optimization, and Local SEO services to help your business stand out and attract more customers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-primary text-primary-foreground font-extrabold uppercase text-base tracking-wider px-8 btn-swipe-primary">
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-navy border-2 border-primary-foreground/40 text-primary-foreground font-extrabold uppercase text-base tracking-wider px-8 btn-swipe-navy">
                <Link to="/about">About Us</Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex-wrap gap-6 text-primary-foreground/60 flex items-center justify-start">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-navy" />)}
                </div>
               <span className="text-base font-display font-extrabold text-primary-foreground">50+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(i => <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>)}
                </div>
               <span className="text-base font-display text-primary-foreground font-extrabold">5.0 Rating</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Device Mockups */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative flex justify-center lg:justify-end">
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