import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
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
            <span className="topper block">
              Performance
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary-foreground uppercase tracking-wide leading-tight">
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
                    <img src={benefit.icon} alt="" className="w-5 h-5" />
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
            <div className="bg-card rounded-xl p-6 md:p-8 border border-border shadow-xl">
              {/* Header */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-muted-foreground text-sm">PageSpeed Insights</span>
              </div>

              {/* Score Display */}
              <div className="flex flex-col items-center mb-8">
                <div className="relative w-32 h-32 md:w-40 md:h-40">
                  {/* Circular Progress */}
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="50%" cy="50%" r="45%" stroke="hsl(var(--muted))" strokeWidth="8" fill="none" />
                    <circle cx="50%" cy="50%" r="45%" stroke="hsl(142, 76%, 36%)" strokeWidth="8" fill="none" strokeDasharray="283" strokeDashoffset="0" strokeLinecap="round" />
                  </svg>
                  {/* Score Number */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl md:text-5xl font-bold text-green-500">100</span>
                  </div>
                </div>
                <p className="text-foreground font-bold mt-4 text-lg">Performance</p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[{
                label: "Accessibility",
                score: "100",
                color: "text-green-500"
              }, {
                label: "Best Practices",
                score: "100",
                color: "text-green-500"
              }, {
                label: "SEO",
                score: "100",
                color: "text-green-500"
              }, {
                label: "PWA",
                score: "100",
                color: "text-green-500"
              }].map(metric => <div key={metric.label} className="bg-muted/50 rounded-lg p-4 text-center">
                    <div className={`text-2xl font-bold ${metric.color} mb-1`}>
                      {metric.score}
                    </div>
                    <div className="text-muted-foreground text-xs uppercase tracking-wider">
                      {metric.label}
                    </div>
                  </div>)}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-500/20 rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>;
};
export default PerformanceSection;