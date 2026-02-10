import { useState } from "react";
import { Mail, Phone, Globe, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "contact@coolwebstudio.com",
    href: "mailto:contact@coolwebstudio.com",
  },
  {
    icon: Phone,
    title: "Phone / WhatsApp",
    content: "+34 697 76 04 18",
    href: "tel:+34697760418",
  },
  {
    icon: Globe,
    title: "Areas Served",
    content: "Spain, France, Portugal, United States",
    href: null,
  },
];
const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    setIsSubmitting(false);
  };
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-12 md:pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-bold text-primary-foreground uppercase tracking-wide mb-4 lg:text-5xl md:text-5xl text-4xl">
              Let's Start Your <span className="text-primary">Project</span>
            </h1>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto" preserveAspectRatio="none">
            <path
              d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H0Z"
              className="fill-background"
            />
          </svg>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Info — left on desktop, below on mobile */}
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
              className="order-2 lg:order-1 space-y-6"
            >
              <div>
                <h2 className="text-3xl font-extrabold text-foreground mb-2 uppercase tracking-wide md:text-4xl">
                  Get In Touch
                </h2>
                <p className="mb-6 text-sm text-card-foreground">
                  Send us a message or call us and let us know everything you want out of a new site. We respond to
                  everyone within 24 hours of contacting us.
                </p>
              </div>

              <div className="bg-card rounded-xl border border-border overflow-hidden">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.title}
                    className={`p-4 flex items-start gap-4 ${index < contactInfo.length - 1 ? "border-b border-border" : ""}`}
                  >
                    <div className="w-8 h-8 rounded-md bg-navy flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-foreground text-base uppercase tracking-wide font-extrabold">{info.title}</h3>
                      {info.href ? (
                        <a href={info.href} className="transition-colors text-card-foreground text-xs">
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-card-foreground text-xs">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form — right on desktop, top on mobile */}
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
              className="order-1 lg:order-2"
            >
              <div className="bg-muted/30 rounded-xl p-6 md:p-8 border border-border">
                <h2 className="text-3xl font-extrabold text-foreground mb-4 uppercase tracking-wide md:text-4xl">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-navy text-primary-foreground font-extrabold uppercase text-base tracking-wider btn-swipe-navy"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Contact;
