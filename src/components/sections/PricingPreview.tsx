import { Link } from "react-router-dom";
import { ArrowRight, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
interface PricingFeature {
  text: string;
  included: boolean;
}
interface PricingTier {
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: PricingFeature[];
  cta: string;
  featured?: boolean;
}
const pricingTiers: PricingTier[] = [
  {
    name: "Lump Sum",
    price: "1.000€",
    priceNote: "+25€/mo hosting",
    description: "One-time payment for your complete website",
    features: [
      {
        text: "Custom Design & Development",
        included: true,
      },
      {
        text: "Up to 5 Pages",
        included: true,
      },
      {
        text: "Mobile Responsive",
        included: true,
      },
      {
        text: "Basic SEO Setup",
        included: true,
      },
      {
        text: "25€/month Hosting",
        included: true,
      },
      {
        text: "Unlimited Edits",
        included: false,
      },
      {
        text: "24/7 Support",
        included: false,
      },
      {
        text: "Lifetime Updates",
        included: false,
      },
    ],
    cta: "Get Started",
  },
  {
    name: "Monthly",
    price: "100€",
    priceNote: "/month",
    description: "No upfront cost, everything included",
    features: [
      {
        text: "Custom Design & Development",
        included: true,
      },
      {
        text: "Up to 5 Pages",
        included: true,
      },
      {
        text: "Mobile Responsive",
        included: true,
      },
      {
        text: "Advanced SEO Optimization",
        included: true,
      },
      {
        text: "Hosting Included",
        included: true,
      },
      {
        text: "Unlimited Edits",
        included: true,
      },
      {
        text: "24/7 Support",
        included: true,
      },
      {
        text: "Lifetime Updates",
        included: true,
      },
    ],
    cta: "Get Started",
    featured: true,
  },
  {
    name: "Custom",
    price: "Let's Talk!",
    description: "Need something more? We've got you covered",
    features: [
      {
        text: "E-commerce Solutions",
        included: true,
      },
      {
        text: "Custom Integrations",
        included: true,
      },
      {
        text: "Advanced Functionality",
        included: true,
      },
      {
        text: "Multi-language Support",
        included: true,
      },
      {
        text: "Priority Development",
        included: true,
      },
      {
        text: "Dedicated Support",
        included: true,
      },
      {
        text: "Custom Hosting",
        included: true,
      },
      {
        text: "Ongoing Maintenance",
        included: true,
      },
    ],
    cta: "Reach Out",
  },
];
const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};
const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const PricingPreview = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header with CTA */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <motion.span
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="topper block"
            >
              Our Pricing
            </motion.span>
            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.1,
              }}
              className="section-title"
            >
              Pricing Packages For <span className="text-primary">Every Budget</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.2,
            }}
          >
            <Button
              asChild
              size="lg"
              className="bg-navy text-primary-foreground font-extrabold uppercase text-base tracking-wider px-8 btn-swipe-navy"
            >
              <Link to="/contact">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {pricingTiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={item}
              className={`rounded-xl border flex flex-col h-full overflow-hidden ${tier.featured ? "bg-navy border-primary ring-2 ring-primary/20" : "border-border bg-card"}`}
            >
              {/* Card Header - unified padding */}
              <div className="px-6 pt-6">
                <h3 className={`text-2xl font-extrabold uppercase tracking-wider mb-1 ${tier.featured ? "text-primary-foreground" : "text-foreground"}`}>
                  {tier.name}
                </h3>
                <p className={`text-sm ${tier.featured ? "text-primary-foreground" : "text-card-foreground"}`}>{tier.description}</p>
              </div>

              {/* Card Body */}
              <div className={`p-6 flex flex-col flex-grow ${tier.featured ? "" : ""}`}>
                {/* Features */}
                <ul className="space-y-2 mb-4 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-2">
                      {feature.included ? (
                        <Check
                          className={`w-4 h-4 flex-shrink-0 mt-0.5 ${tier.featured ? "text-primary" : "text-primary"}`}
                        />
                      ) : (
                        <X
                          className={`w-4 h-4 flex-shrink-0 mt-0.5 ${tier.featured ? "text-primary-foreground/50" : "text-muted-foreground/50"}`}
                        />
                      )}
                      <span
                        className={`text-xs ${tier.featured ? (feature.included ? "text-primary-foreground" : "text-primary-foreground/50") : feature.included ? "text-foreground" : "text-muted-foreground/50"}`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Price - moved to bottom */}
                <div className="mb-4">
                  <span
                    className={`text-4xl md:text-5xl font-display font-extrabold ${tier.featured ? "text-primary-foreground" : "text-foreground"}`}
                  >
                    {tier.price}
                  </span>
                  {tier.priceNote && (
                    <span
                      className={`ml-1 text-xs ${tier.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                    >
                      {tier.priceNote}
                    </span>
                  )}
                </div>

                {/* CTA Button */}
                <Button
                  asChild
                  className={`w-full font-extrabold uppercase text-sm tracking-wider ${tier.featured ? "bg-primary text-primary-foreground btn-swipe-primary" : "btn-swipe-card"}`}
                >
                  <Link to="/contact">
                    {tier.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default PricingPreview;
