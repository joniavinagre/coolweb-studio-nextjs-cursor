import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const testimonialAuthors = [
  { name: "Sarah Johnson", location: "California" },
  { name: "Michael Chen", location: "Texas" },
  { name: "Emily Rodriguez", location: "Florida" },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = testimonialAuthors.map((author, i) => ({
    ...author,
    content: t(`testimonials.${i + 1}.content`),
  }));

  return <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-10">
          <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="topper block leading-none md:leading-tight;">
            {t("testimonials.topper")}
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="section-title mb-4">
            {t("testimonials.headline1")}
            <span className="text-primary">{t("testimonials.headline2")}</span>
          </motion.h2>
        </div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => <motion.div key={index} variants={item} className="bg-card rounded-2xl p-6 border border-border">
              <Quote className="w-10 h-10 text-primary/30 mb-3" />
             <p className="font-body text-foreground leading-relaxed mb-4 text-sm">
                "{testimonial.content}"
              </p>
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
