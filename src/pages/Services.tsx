import { Globe, MapPin, Search, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
interface PricingTier {
  name: string;
  price: string;
  priceLabel?: string;
  features: string[];
}
interface ServiceCategory {
  id: string;
  icon: typeof Globe;
  title: string;
  description: string;
  tiers: PricingTier[];
  showCustomCard?: boolean;
}
const serviceCategories: ServiceCategory[] = [{
  id: "web-development",
  icon: Globe,
  title: "Web Development",
  description: "High-performance websites built from scratch, tailored to your business goals.",
  tiers: [{
    name: "Lump Sum",
    price: "1,000€",
    priceLabel: "+ 25€/mo Hosting",
    features: ["Design and Development", "25€/mo Hosting", "100€ fee per page after 5", "+50€/mo Unlimited Edits Add-on", "+250€ to Add A Blog"]
  }, {
    name: "Monthly",
    price: "100€",
    priceLabel: "per month",
    features: ["Design and Development", "Includes Hosting", "100€ fee per page after 5", "+250€ to Add A Blog", "Unlimited Edits", "24/7 Support", "Lifetime Updates"]
  }],
  showCustomCard: true
}, {
  id: "google-business",
  icon: MapPin,
  title: "Google Business Profile",
  description: "Maximize your visibility in local searches and Google Maps.",
  tiers: [{
    name: "Setup",
    price: "200€",
    priceLabel: "one-time",
    features: ["Complete profile setup", "Profile verification", "Business category optimization", "Photo and video uploads", "Basic optimization"]
  }, {
    name: "Management",
    price: "75€",
    priceLabel: "per month",
    features: ["Ongoing optimization", "Weekly posts", "Review responses", "Photo updates", "Monthly reports"]
  }]
}, {
  id: "local-seo",
  icon: Search,
  title: "Local SEO",
  description: "Rank higher in local search results and outperform your competitors.",
  tiers: [{
    name: "Basic",
    price: "400€",
    priceLabel: "per month",
    features: ["5 target keywords", "Basic optimization", "Monthly report", "Citation building", "NAP consistency audit"]
  }, {
    name: "Advanced",
    price: "800€",
    priceLabel: "per month",
    features: ["15+ target keywords", "Full optimization", "Bi-weekly reports", "Link building", "Google Maps ranking", "Content optimization"]
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
      <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} className="max-w-4xl mx-auto text-center">
            <span className="topper block">
              Our Pricing
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground uppercase tracking-wide mb-6">
              Pricing Packages For{" "}
              <span className="text-primary">Every Budget</span>
            </h1>
            <p className="font-body text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Transparent pricing with no hidden fees. Choose the plan that fits your business needs.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground font-extrabold uppercase text-base tracking-wider btn-swipe-primary">
              <Link to="/contact">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H0Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* Pricing Categories */}
      {serviceCategories.map((category, categoryIndex) => <section key={category.id} id={category.id} className={`py-20 md:py-28 ${categoryIndex % 2 === 1 ? "bg-muted/30" : "bg-background"}`}>
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
        }} className="text-center mb-12">
              <div className="w-16 h-16 rounded-2xl bg-navy flex items-center justify-center mx-auto mb-6">
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-foreground uppercase tracking-wide mb-4">
                {category.title}
              </h2>
              <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
                {category.description}
              </p>
            </motion.div>

            {/* Pricing Cards Grid */}
            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{
          once: true
        }} className={`grid grid-cols-1 gap-8 max-w-5xl mx-auto ${category.showCustomCard ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
              {category.tiers.map(tier => <motion.div key={tier.name} variants={item} className="bg-card border border-border rounded-2xl p-8 flex flex-col h-full">
                  {/* Tier Name */}
                  <h3 className="text-2xl font-bold text-foreground mb-6 uppercase tracking-wider">
                    {tier.name}
                  </h3>

                  {/* Features List */}
                  <ul className="space-y-4 mb-8 flex-grow">
                    {tier.features.map(feature => <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="font-body text-muted-foreground text-xs">{feature}</span>
                      </li>)}
                  </ul>

                  {/* Price and CTA - Bottom aligned */}
                  <div className="mt-auto pt-6 border-t border-border">
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                      {tier.priceLabel && <span className="text-base font-body text-muted-foreground ml-2">
                          {tier.priceLabel}
                        </span>}
                    </div>
                    <Button asChild className="w-full btn-swipe-card font-extrabold uppercase text-sm tracking-wider">
                      <Link to="/contact">
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>)}

              {/* Custom CTA Card */}
              {category.showCustomCard && <motion.div variants={item} className="bg-muted/50 border border-border rounded-2xl p-8 flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-foreground mb-4 uppercase tracking-wider">
                    Need Something More?
                  </h3>
                  <p className="font-body text-muted-foreground text-base mb-8 flex-grow">
                    Have a complex project or specific requirements? Let's discuss a custom solution tailored to your needs.
                  </p>
                  <div className="mt-auto pt-6 border-t border-border">
                    <Button asChild variant="outline" className="w-full border-navy text-navy hover:bg-navy hover:text-primary-foreground font-extrabold uppercase text-sm tracking-wider">
                      <Link to="/contact">
                        Reach Out
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>}
            </motion.div>
          </div>
        </section>)}

      {/* Bottom CTA Section */}
      <section className="py-24 bg-navy">
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
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary-foreground uppercase tracking-wide mb-6">
              Ready To <span className="text-primary">Get Started?</span>
            </h2>
            <p className="font-body text-primary-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
              Book a free consultation to discuss your project and get a custom quote. No obligation, just valuable insights.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground font-extrabold uppercase text-base tracking-wider btn-swipe-primary">
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