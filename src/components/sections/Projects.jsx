import { projects } from "../../data/projects";
import { motion } from "motion/react";
import { ExternalLink, Github, Layout } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <Layout className="w-4 h-4" /> Selected Work
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              A collection of recent projects.
            </h3>
          </div>
          <p className="text-main/60 max-w-md text-lg font-medium mb-2">
            Each project is a unique solution crafted with focus on performance,
            user experience, and aesthetic quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Tobi-Oyedele"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 glass rounded-2xl font-bold hover:bg-main/5 transition-all"
          >
            <Github className="w-5 h-5" /> More on GitHub
          </motion.a>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative aspect-video rounded-3xl overflow-hidden glass border-white/10 shadow-2xl mb-8">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="px-2">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 glass text-[10px] font-bold uppercase tracking-wider text-primary border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between gap-4 mb-4">
          <h4 className="text-2xl md:text-3xl font-bold transition-colors duration-300">
            {project.title}
          </h4>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 glass rounded-xl text-sm font-bold hover:bg-primary hover:text-white transition-all whitespace-nowrap shrink-0"
          >
            Live Site <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <p className="text-main/60 text-base md:text-lg leading-relaxed max-w-xl">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

export default Projects;
