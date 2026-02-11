import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { projects } from "@/data/portfolioProjects";
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

// Show first 3 projects on homepage
const previewProjects = projects.slice(0, 3);
const PortfolioPreview = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-10 items-start">
          {/* Left - Topper & Headline */}
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
            className="lg:border-r lg:border-border lg:pr-12"
          >
            <span className="topper block text-xl font-extrabold leading-none md:leading-tight;">Portfolio</span>
            <h2 className="section-title leading-none md:leading-tight;">
              Some Of The Work <span className="text-primary">We've Done Over The Years</span>
            </h2>
          </motion.div>

          {/* Right - Description */}
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
              delay: 0.1,
            }}
            className="lg:pl-12 flex flex-col justify-center"
          >
            <p className="font-body leading-relaxed text-sm text-popover-foreground mb-6">
              We have worked with clients all over the world! Each project is crafted with attention to detail and a
              focus on results. Take a look at some of our recent work.
            </p>
            <div>
              <Button
                asChild
                size="lg"
                className="bg-navy text-primary-foreground font-bold uppercase text-base tracking-wider px-8 btn-swipe-navy"
              >
                <Link to="/portfolio">View All Projects</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Portfolio Grid - Device Mockup Style */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {previewProjects.map((project) => (
            <motion.article key={project.id} variants={item} className="group flex flex-col">
              {/* Portfolio Image */}
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mb-4 block cursor-pointer"
              >
                <div className="rounded-xl overflow-hidden aspect-[16/10]">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
              </a>

              {/* Content */}
              <h3 className="text-xl text-foreground mb-2 uppercase tracking-wide group-hover:text-primary transition-colors font-extrabold">
                {project.title}
              </h3>
              <p className="mb-3 leading-relaxed text-xs text-popover-foreground flex-grow">{project.description}</p>

              {/* Visit Website Button */}
              <Button
                asChild
                className="btn-swipe-card font-semibold uppercase text-sm tracking-wider mt-auto self-start"
              >
                <a href={project.website} target="_blank" rel="noopener noreferrer">
                  Visit Website
                </a>
              </Button>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default PortfolioPreview;
