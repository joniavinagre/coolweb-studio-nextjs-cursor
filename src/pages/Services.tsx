import { Globe, MapPin, Search, Check, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
interface PricingFeature {
  text: string;
  included: boolean;
}
interface PricingTier {
  name: string;
  price: string;
  priceNote?: string;
  priceLabel?: string;
  description?: string;
  features: (string | PricingFeature)[];
  cta?: string;
  featured?: boolean;
}
interface ServiceCategory {
  id: string;
  icon: typeof Globe;
  title: string;
  description: string;
  tiers: PricingTier[];
  showCustomCard?: boolean;
}
const webDevTiers: PricingTier[] = [{
  name: "Lump Sum",
  price: "1.000€",
  priceNote: "+25€/mo hosting",
  description: "One-time payment for your complete website",
  features: [{
    text: "Custom Design & Development",
    included: true
  }, {
    text: "Up to 5 Pages",
    included: true
  }, {
    text: "Mobile Responsive",
    included: true
  }, {
    text: "Basic SEO Setup",
    included: true
  }, {
    text: "25€/month Hosting",
    included: true
  }, {
    text: "Unlimited Edits",
    included: false
  }, {
    text: "24/7 Support",
    included: false
  }, {
    text: "Lifetime Updates",
    included: false
  }],
  cta: "Get Started"
}, {
  name: "Monthly",
  price: "100€",
  priceNote: "/month",
  description: "No upfront cost, everything included",
  features: [{
    text: "Custom Design & Development",
    included: true
  }, {
    text: "Up to 5 Pages",
    included: true
  }, {
    text: "Mobile Responsive",
    included: true
  }, {
    text: "Advanced SEO Optimization",
    included: true
  }, {
    text: "Hosting Included",
    included: true
  }, {
    text: "Unlimited Edits",
    included: true
  }, {
    text: "24/7 Support",
    included: true
  }, {
    text: "Lifetime Updates",
    included: true
  }],
  cta: "Get Started",
  featured: true
}, {
  name: "Custom",
  price: "Let's Talk!",
  description: "Need something more? We've got you covered",
  features: [{
    text: "E-commerce Solutions",
    included: true
  }, {
    text: "Custom Integrations",
    included: true
  }, {
    text: "Advanced Functionality",
    included: true
  }, {
    text: "Multi-language Support",
    included: true
  }, {
    text: "Priority Development",
    included: true
  }, {
    text: "Dedicated Support",
    included: true
  }, {
    text: "Custom Hosting",
    included: true
  }, {
    text: "Ongoing Maintenance",
    included: true
  }],
  cta: "Reach Out"
}];
const serviceCategories: ServiceCategory[] = [{
  id: "web-development",
  icon: Globe,
  title: "Web Development",
  description: "High-performance websites built from scratch, tailored to your business goals.",
  tiers: webDevTiers
}, {
  id: "google-business",
  icon: MapPin,
  title: "Google Business Profile",
  description: "Maximize your visibility in local searches and Google Maps.",
  tiers: [{
    name: "Setup",
    price: "200€",
    priceNote: "one-time",
    description: "Get your profile up and running professionally",
    features: [{
      text: "Complete profile setup",
      included: true
    }, {
      text: "Profile verification",
      included: true
    }, {
      text: "Business category optimization",
      included: true
    }, {
      text: "Photo and video uploads",
      included: true
    }, {
      text: "Basic optimization",
      included: true
    }],
    cta: "Get Started"
  }, {
    name: "Management",
    price: "75€",
    priceNote: "/month",
    description: "Ongoing management to keep your profile performing",
    features: [{
      text: "Ongoing optimization",
      included: true
    }, {
      text: "Weekly posts",
      included: true
    }, {
      text: "Review responses",
      included: true
    }, {
      text: "Photo updates",
      included: true
    }, {
      text: "Monthly reports",
      included: true
    }],
    cta: "Get Started"
  }]
}, {
  id: "local-seo",
  icon: Search,
  title: "Local SEO",
  description: "Rank higher in local search results and outperform your competitors.",
  tiers: [{
    name: "Basic",
    price: "400€",
    priceNote: "/month",
    description: "Essential local SEO to get you on the map",
    features: [{
      text: "5 target keywords",
      included: true
    }, {
      text: "Basic optimization",
      included: true
    }, {
      text: "Monthly report",
      included: true
    }, {
      text: "Citation building",
      included: true
    }, {
      text: "NAP consistency audit",
      included: true
    }],
    cta: "Get Started"
  }, {
    name: "Advanced",
    price: "800€",
    priceNote: "/month",
    description: "Full-scale local SEO to dominate your market",
    features: [{
      text: "15+ target keywords",
      included: true
    }, {
      text: "Full optimization",
      included: true
    }, {
      text: "Bi-weekly reports",
      included: true
    }, {
      text: "Link building",
      included: true
    }, {
      text: "Google Maps ranking",
      included: true
    }, {
      text: "Content optimization",
      included: true
    }],
    cta: "Get Started"
  }]
}];
const container = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
const item = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};
const Services = () => {
  return <Layout>
      {/* Hero Section - Clean and minimal like Oak Harbor */}
      <section className="pt-28 pb-12 md:pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} className="max-w-4xl mx-auto text-center">
            
            <h1 className="font-bold text-primary-foreground uppercase tracking-wide mb-4 lg:text-5xl text-4xl md:text-5xl">
              Pricing Packages For{" "}
              <span className="text-primary">Every Budget</span>
            </h1>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H0Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* Pricing Categories */}
      {serviceCategories.map((category, categoryIndex) => <section key={category.id} id={category.id} className={`py-14 md:py-18 ${categoryIndex % 2 === 1 ? "bg-muted/30" : "bg-background"}`}>
          <div className="container mx-auto px-4">
            {/* Category Header */}
            <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
                <div>
                  <h2 className="section-title">
                    {category.title} <span className="text-primary">Packages</span>
                  </h2>
                  <p className="font-body max-w-2xl text-sm text-card-foreground">
                    {category.description}
                  </p>
                </div>
                <Button asChild size="lg" className="bg-navy text-primary-foreground font-extrabold uppercase text-base tracking-wider px-8 btn-swipe-navy">
                  <Link to="/contact">
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </motion.div>

            {/* Pricing Cards Grid */}
            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{
          once: true
        }} className={category.tiers.length === 3 ? "grid grid-cols-1 md:grid-cols-3 gap-6" : "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[calc(66.666%+0.75rem)] mx-auto"}>
                {category.tiers.map(tier => <motion.div key={tier.name} variants={item} className={`rounded-xl border flex flex-col overflow-hidden ${tier.featured ? "bg-navy border-primary ring-2 ring-primary/20" : "border-border bg-card"}`}>
                    <div className="px-6 pt-6">
                      <h3 className={`text-2xl font-extrabold uppercase tracking-wider mb-1 ${tier.featured ? "text-primary-foreground" : "text-foreground"}`}>
                        {tier.name}
                      </h3>
                      <p className={`text-sm ${tier.featured ? "text-primary-foreground" : "text-card-foreground"}`}>{tier.description}</p>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <ul className="space-y-2 mb-4 flex-grow">
                        {(tier.features as PricingFeature[]).map(feature => <li key={feature.text} className="flex items-start gap-2">
                            {feature.included ? <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary" /> : <X className={`w-4 h-4 flex-shrink-0 mt-0.5 ${tier.featured ? "text-primary-foreground/50" : "text-muted-foreground/50"}`} />}
                            <span className={`text-xs ${tier.featured ? feature.included ? "text-primary-foreground" : "text-primary-foreground/50" : feature.included ? "text-foreground" : "text-muted-foreground/50"}`}>
                              {feature.text}
                            </span>
                          </li>)}
                      </ul>
                      <div className="mb-4 mt-auto">
                        <span className={`text-4xl md:text-5xl font-display font-extrabold ${tier.featured ? "text-primary-foreground" : "text-foreground"}`}>
                          {tier.price}
                        </span>
                        {tier.priceNote && <span className={`ml-1 text-xs ${tier.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                            {tier.priceNote}
                          </span>}
                      </div>
                      <Button asChild className={`w-full font-extrabold uppercase text-sm tracking-wider ${tier.featured ? "bg-primary text-primary-foreground btn-swipe-primary" : "btn-swipe-card"}`}>
                        <Link to="/contact">
                          {tier.cta}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </motion.div>)}
              </motion.div>
          </div>
        </section>)}

      {/* Bottom CTA Section */}
      <section className="pt-14 pb-24 bg-muted/30">
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
              Ready To <span className="text-primary">Get Started?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Let's create something amazing together. Book a free consultation to discuss your project.
            </p>
            <Button asChild size="lg" className="bg-navy text-primary-foreground font-extrabold uppercase text-sm tracking-wider btn-swipe-navy">
              <Link to="/contact">
                Book Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>;
};
export default Services;