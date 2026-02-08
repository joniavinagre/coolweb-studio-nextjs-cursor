import { Link } from "react-router-dom";
import { Target, Users, Zap, Heart, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on delivering measurable outcomes, not just pretty designs.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Your success is our priority. We listen, adapt, and deliver.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We stay ahead with the latest technologies and best practices.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We love what we do, and it shows in every project we deliver.",
  },
];

const process = [
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
      <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-4">
              About Us
            </span>
           <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6">
              We're <span className="gradient-text">COOLWEB Studio</span>
            </h1>
           <p className="text-primary-foreground/70 text-xl md:text-2xl">
              A passionate team of web developers, designers, and digital marketing experts dedicated to helping businesses thrive online.
            </p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H0Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Story
              </span>
             <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Building Digital Success <span className="gradient-text">Since 2019</span>
              </h2>
             <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
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

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              <div className="relative bg-card rounded-3xl p-8 border border-border">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 rounded-2xl bg-muted/50">
                   <div className="text-5xl font-bold gradient-text mb-2">50+</div>
                   <div className="text-muted-foreground text-base">Happy Clients</div>
                  </div>
                  <div className="text-center p-6 rounded-2xl bg-muted/50">
                   <div className="text-5xl font-bold gradient-text mb-2">100+</div>
                   <div className="text-muted-foreground text-base">Projects Delivered</div>
                  </div>
                  <div className="text-center p-6 rounded-2xl bg-muted/50">
                   <div className="text-5xl font-bold gradient-text mb-2">5+</div>
                   <div className="text-muted-foreground text-base">Years Experience</div>
                  </div>
                  <div className="text-center p-6 rounded-2xl bg-muted/50">
                   <div className="text-5xl font-bold gradient-text mb-2">100%</div>
                   <div className="text-muted-foreground text-base">Satisfaction</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="topper block">Our Values</span>
            <h2 className="section-title">What <span className="text-primary">Drives Us</span></h2>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={item}
                className="bg-card rounded-2xl p-6 shadow-lg border border-border card-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
               <h3 className="font-bold text-foreground mb-2 uppercase tracking-wide text-lg">{value.title}</h3>
               <p className="text-muted-foreground text-base">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="topper block">Our Process</span>
            <h2 className="section-title">How We <span className="text-primary">Work</span></h2>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                variants={item}
                className="relative"
              >
                <div className="bg-card rounded-2xl p-6 shadow-lg border border-border h-full">
                 <div className="text-6xl font-bold text-primary mb-4">{step.step}</div>
                 <h3 className="font-bold text-foreground mb-2 uppercase tracking-wide text-lg">{step.title}</h3>
                 <p className="text-muted-foreground text-base">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
           <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground uppercase tracking-wide mb-6">
              Ready To <span className="text-primary">Work Together?</span>
            </h2>
           <p className="text-primary-foreground/70 text-xl mb-8">
              Let's create something amazing. Book a free consultation.
            </p>
           <Button asChild size="lg" className="bg-primary text-primary-foreground font-semibold uppercase text-base tracking-wider btn-swipe-primary">
              <Link to="/contact">
                Get In Touch
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
