import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import CTASection from "@/components/sections/CTASection";
import { motion } from "framer-motion";

const values = [
  {
    title: "Results-Driven",
    description: "We focus on delivering measurable outcomes, not just pretty designs.",
  },
  {
    title: "Client-Focused",
    description: "Your success is our priority. We listen, adapt, and deliver.",
  },
  {
    title: "Innovation",
    description: "We stay ahead with the latest technologies and best practices.",
  },
  {
    title: "Passion",
    description: "We love what we do, and it shows in every project we deliver.",
  },
];

const stats = [
  { value: "50+", label: "Happy Clients" },
  { value: "100+", label: "Projects Delivered" },
  { value: "5+", label: "Years Experience" },
  { value: "100%", label: "Satisfaction" },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "We learn about your business, goals, and target audience to create a tailored strategy.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "We develop a comprehensive plan that aligns with your objectives and budget.",
  },
  {
    step: "03",
    title: "Design & Build",
    description: "Our team brings your vision to life with stunning designs and clean code.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "We launch your project and provide ongoing support to ensure success.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-12 md:pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="topper block">About Us</span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground uppercase tracking-wide mb-4">
                We're <span className="text-primary">COOLWEB Studio</span>
              </h1>
              <p className="font-body text-base text-primary-foreground/80 mb-6 max-w-xl">
                A passionate team of web developers, designers, and digital marketing experts dedicated to helping businesses thrive online.
              </p>
              <Button asChild size="lg" className="bg-primary text-primary-foreground font-extrabold uppercase text-base tracking-wider btn-swipe-primary">
                <Link to="/contact">
                  Get In Touch
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H0Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=750&fit=crop"
                  alt="COOLWEB Studio team collaborating"
                  className="w-full h-full object-cover rounded-md"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm rounded-xl p-4 border border-border">
                  <h3 className="font-bold text-foreground text-lg">COOLWEB Studio</h3>
                  <p className="text-muted-foreground text-sm">Crafting Digital Success Since 2019</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="topper block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground uppercase tracking-wide leading-tight mb-3">
                Building Digital Success{" "}
                <span className="text-primary">Since 2019</span>
              </h2>
              <div className="space-y-3 font-body text-sm text-card-foreground leading-relaxed">
                <p>
                  COOLWEB Studio was founded with a simple mission: help small and medium businesses compete in the digital landscape without breaking the bank.
                </p>
                <p>
                  We noticed that many businesses struggled to find affordable, quality web development and digital marketing services. The big agencies were too expensive, and freelancers often lacked the expertise needed for results.
                </p>
                <p>
                  That's why we created COOLWEB – to bridge the gap. We combine agency-level expertise with personalized service and fair pricing. Every client gets our full attention and a dedicated approach to their unique needs.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Us / Values Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="topper block">Why Us</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground uppercase tracking-wide leading-tight mb-3">
                What <span className="text-primary">Drives Us</span>
              </h2>
              <p className="font-body mb-6 leading-relaxed text-sm text-card-foreground">
                We're not just another web agency. We're your dedicated digital partner committed to your growth and success.
              </p>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6"
              >
                {values.map((value) => (
                  <motion.div key={value.title} variants={item} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-foreground text-base uppercase tracking-wide mb-1 font-extrabold">
                        {value.title}
                      </h3>
                      <p className="font-body leading-relaxed text-xs text-card-foreground">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <Button asChild size="lg" className="bg-navy text-primary-foreground font-extrabold uppercase text-base tracking-wider px-8 btn-swipe-navy">
                <Link to="/contact">
                  Schedule A Call
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>

            {/* Right Column - Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card rounded-xl p-8 border border-border">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center p-6">
                      <div className="text-5xl font-extrabold text-primary mb-2">{stat.value}</div>
                      <div className="font-body text-sm text-card-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-10">
            <span className="topper block">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary-foreground uppercase tracking-wide leading-tight">
              How We <span className="text-primary">Work</span>
            </h2>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {processSteps.map((step) => (
              <motion.div key={step.step} variants={item}>
                <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-6 h-full">
                  <div className="text-5xl font-extrabold text-primary mb-2">{step.step}</div>
                  <h3 className="text-primary-foreground font-extrabold uppercase tracking-wide text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-primary-foreground/70 font-body text-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </Layout>
  );
};

export default About;
