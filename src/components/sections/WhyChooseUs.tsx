import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
const features = [
  {
    title: "100% Secure",
    description: "Our sites are just static HTML and CSS code, meaning there's literally nothing that can be hacked.",
  },
  {
    title: "Custom Designed",
    description: "Our designs are made by an in-house design team, which allows us to make anything we want.",
  },
  {
    title: "100 PageSpeed Scores",
    description:
      "Our sites have zero bloat, zero waste, and built with purpose so we get perfect 98-100/100 speed scores.",
  },
  {
    title: "Money Back Guarantee",
    description: "If we can't design something you like, you get your money back and the contract is cancelled.",
  },
  {
    title: "Unmatched Support",
    description: "Call or text us anytime, no phone trees or robots. When you call us you get the owner and developer.",
  },
  {
    title: "We Know SEO",
    description: "No snake oil, no tricks, no lies. We explain very clearly what SEO is and how it works.",
  },
];
const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};
const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=750&fit=crop"
                alt="Professional web developer"
                className="w-full h-full object-cover rounded-md"
              />
              {/* Floating Name Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm rounded-xl p-4 border border-border">
                <h3 className="text-foreground text-lg font-extrabold">Joni Vinagre</h3>
                <p className="text-xs text-card-foreground">Owner, Web Developer</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            {/* Section Header */}
            <span className="topper block">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground uppercase tracking-wide leading-tight mb-3">
              Websites Starting At <span className="text-primary">€0 Down And €100 Per Month</span>
            </h2>
            <p className="font-body mb-6 leading-relaxed text-sm text-card-foreground">
              We provide professional web design services with flexible payment options. Get a stunning website without
              the upfront costs.
            </p>

            {/* Features Grid - 2x3 */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
              }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6"
            >
              {features.map((feature) => (
                <motion.div key={feature.title} variants={item} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-foreground text-base uppercase tracking-wide mb-1 font-extrabold">
                      {feature.title}
                    </h3>
                    <p className="font-body leading-relaxed text-xs text-card-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <Button
              asChild
              size="lg"
              className="bg-navy text-primary-foreground font-extrabold uppercase text-base tracking-wider px-8 btn-swipe-navy"
            >
              <Link to="/contact">
                Schedule A Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;
