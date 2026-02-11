import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import performanceDashboard from "@/assets/performance-dashboard.webp";
const benefits = [{
  title: "Better load times means more conversions",
  description: "Studies show that every second of delay reduces conversions by 7%. Our lightning-fast sites keep visitors engaged.",
  icon: "/icons/stat1.svg"
}, {
  title: "Faster websites can help improve SEO",
  description: "Google uses page speed as a ranking factor. Our optimized sites help you climb search results naturally.",
  icon: "/icons/stat2.svg"
}, {
  title: "Our sites load instantly on any device",
  description: "Whether on mobile, tablet, or desktop, your visitors get the same blazing-fast experience every time.",
  icon: "/icons/stat3.svg"
}];
const stats = [{
  value: "100%",
  label: "Satisfaction\nGuaranteed"
}, {
  value: "100",
  label: "Page Speed\nScores"
}, {
  value: "5/5",
  label: "Google\nReviews"
}];
const PerformanceSection = () => {
  return <section className="py-16 md:py-20 bg-navy relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Row - Topper/Headline Left, Stats Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8 items-center">
          {/* Left - Topper & Headline */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }}>
            <span className="topper block leading-none md:leading-tight">
              Performance
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary-foreground uppercase tracking-wide leading-none md:leading-tight;">
              We Build{" "}
              <span className="text-primary">Better</span> Websites That Perform
            </h2>
          </motion.div>

          {/* Right - Stats */}
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
        }} className="flex flex-wrap justify-start lg:justify-end gap-4 lg:gap-8">
            {stats.map(stat => <div key={stat.label} className="text-center">
                <div className="text-5xl md:text-6xl font-display font-extrabold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm uppercase tracking-wider text-primary-foreground font-display font-extrabold whitespace-pre-line">
                  {stat.label}
                </div>
              </div>)}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <p className="font-body mb-6 leading-relaxed text-sm text-primary-foreground">
              Speed matters. Our websites are hand-coded for maximum performance, ensuring your visitors get the best experience possible.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-6">
              {benefits.map((benefit, index) => <motion.div key={benefit.title} initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-transparent">
                    <img src={benefit.icon} alt="" className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-primary-foreground mb-1 text-lg font-extrabold">
                      {benefit.title}
                    </h3>
                    <p className="font-body leading-relaxed text-xs text-primary-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>)}
            </div>

            {/* CTA Button */}
            <Button asChild size="lg" className="bg-primary text-primary-foreground font-extrabold uppercase text-base tracking-wider px-8 btn-swipe-primary">
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>

          {/* Right Column - PageSpeed Dashboard Mockup */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="relative">
            <img src={performanceDashboard} alt="PageSpeed performance dashboard showing perfect scores" className="w-full rounded-xl shadow-xl" />
          </motion.div>
        </div>
      </div>
    </section>;
};
export default PerformanceSection;