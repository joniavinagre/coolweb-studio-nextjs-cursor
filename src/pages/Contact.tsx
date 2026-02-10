import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
const contactInfo = [{
  icon: Mail,
  title: "Email Us",
  content: "hello@coolwebstudio.com",
  href: "mailto:hello@coolwebstudio.com"
}, {
  icon: Phone,
  title: "Call Us",
  content: "+1 (555) 123-4567",
  href: "tel:+15551234567"
}, {
  icon: MapPin,
  title: "Location",
  content: "Serving clients worldwide",
  href: null
}, {
  icon: Clock,
  title: "Business Hours",
  content: "Mon - Fri: 9am - 6pm",
  href: null
}];
const Contact = () => {
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours."
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
    setIsSubmitting(false);
  };
  return <Layout>
      {/* Hero Section */}
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
           
           <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground uppercase tracking-wide mb-4 lg:text-5xl">
              Let's Start Your <span className="text-primary">Project</span>
            </h1>
           
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H0Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }}>
              <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 uppercase tracking-wide">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interested In</Label>
                    <select id="service" name="service" value={formData.service} onChange={handleChange} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm">
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="google-business">Google Business Profile</option>
                      <option value="local-seo">Local SEO</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message *</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." rows={5} required />
                </div>

                <Button type="submit" size="lg" className="w-full bg-navy text-primary-foreground font-extrabold uppercase text-base tracking-wider btn-swipe-navy" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : <>
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </>}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info & Calendly */}
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="space-y-8">
              {/* Contact Info Cards */}
              <div>
               <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 uppercase tracking-wide">
                  Get In Touch
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {contactInfo.map(info => <div key={info.title} className="bg-card rounded-xl p-3 border border-border">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                         <h3 className="font-bold text-foreground text-base uppercase tracking-wide">
                            {info.title}
                          </h3>
                          {info.href ? <a href={info.href} className="text-muted-foreground text-base hover:text-primary transition-colors">
                              {info.content}
                            </a> : <p className="text-muted-foreground text-base">
                              {info.content}
                            </p>}
                        </div>
                      </div>
                    </div>)}
                </div>
              </div>

              {/* Calendly Embed */}
              <div className="bg-card rounded-2xl p-5 border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                   <h3 className="font-bold text-foreground uppercase tracking-wide text-lg">Book a Free Consultation</h3>
                   <p className="text-muted-foreground text-base">Schedule a call at your convenience</p>
                  </div>
                </div>
                
                {/* Calendly Widget */}
                <div className="rounded-xl overflow-hidden bg-muted/50 aspect-[4/3] flex items-center justify-center">
                  <div className="text-center p-6">
                    <Calendar className="w-12 h-12 text-primary/30 mx-auto mb-4" />
                   <p className="text-muted-foreground mb-4 text-lg">
                      Click below to schedule your free consultation
                    </p>
                    <Button asChild className="bg-primary text-primary-foreground font-extrabold uppercase text-base tracking-wider btn-swipe-primary">
                      <a href="https://calendly.com/coolwebstudio" target="_blank" rel="noopener noreferrer">
                        Open Scheduler
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Contact;