import { Quote } from "lucide-react";
import { motion } from "framer-motion";
const testimonials = [{
  name: "Sarah Johnson",
  location: "California",
  content: "COOLWEB transformed our online presence completely. Our Google Business Profile now attracts 3x more customers!"
}, {
  name: "Michael Chen",
  location: "Texas",
  content: "Working with COOLWEB was a game-changer. They delivered a stunning website that perfectly represents our brand."
}, {
  name: "Emily Rodriguez",
  location: "Florida",
  content: "Our local SEO rankings skyrocketed after working with COOLWEB. We now appear in the top 3 for all our target keywords."
}];
const container = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};
const item = {
  hidden: {
    opacity: 0,
    y: 30
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};
const Testimonials = () => {
  return <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <motion.span initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="topper block leading-none md:leading-tight;">
            Testimonials
          </motion.span>
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.1
        }} className="section-title mb-4">
            Trusted Web Designer{" "}
            <span className="text-primary">Across Industries   </span>
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{
        once: true
      }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(testimonial => <motion.div key={testimonial.name} variants={item} className="bg-card rounded-2xl p-6 border border-border">
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/30 mb-3" />
              
              {/* Content */}
             <p className="font-body text-foreground leading-relaxed mb-4 text-sm">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="border-t border-border pt-3">
               <h4 className="font-bold text-foreground text-lg">{testimonial.name}</h4>
               <p className="font-body text-xs text-card-foreground">{testimonial.location}</p>
              </div>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
};
export default Testimonials;