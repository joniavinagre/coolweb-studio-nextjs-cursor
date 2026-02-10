import { ExternalLink, Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Project } from "@/data/portfolioProjects";

interface ProjectCardProps {
  project: Project;
}


const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.article
      variants={item}
      className="group bg-card rounded-xl overflow-hidden transition-all duration-500 border border-border flex flex-col"
    >
      {/* Image Section */}
      <a href={project.website} target="_blank" rel="noopener noreferrer" className="relative overflow-hidden aspect-[16/10] block cursor-pointer">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Location */}
        <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white/90 text-xs">
          {project.location}
        </span>
      </a>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <Link to={`/portfolio/${project.slug}`}>
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
        </Link>
        <p className="text-muted-foreground text-sm md:text-base mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Testimonial */}
        <div className="bg-muted/50 rounded-xl p-4 mb-6 flex-grow">
          <Quote className="w-5 h-5 text-primary/60 mb-2" />
          <blockquote className="text-sm italic text-foreground/80 mb-3 leading-relaxed">
            "{project.testimonial.quote}"
          </blockquote>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-xs font-bold text-primary">
                {project.testimonial.author.charAt(0)}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                {project.testimonial.author}
              </p>
              <p className="text-xs text-muted-foreground">
                {project.testimonial.role}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
          <Button
            className="flex-1 btn-swipe-card"
            asChild
          >
            <Link to={`/portfolio/${project.slug}`}>
              View Case Study
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <Button
            variant="outline"
            className="flex-1 border-navy text-navy hover:bg-navy hover:text-white"
            asChild
          >
            <a href={project.website} target="_blank" rel="noopener noreferrer">
              Visit Website
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
