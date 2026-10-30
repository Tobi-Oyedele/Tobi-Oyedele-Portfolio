import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/projects";

export const Projects = () => {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-4">
      <h2
        id="projects-heading"
        className="font-serif text-[27px] font-normal leading-tight mb-6"
      >
        Projects
      </h2>

      <ul>
        {projects.map((project) => (
          <li key={project.id} className="border-t border-hairline">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="group grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-5 gap-y-2 py-6 sm:grid-cols-[140px_minmax(0,1fr)_auto] sm:gap-x-6 text-off-white focus-visible:outline-2 focus-visible:outline-current focus-visible:outline-offset-4"
            >
                <h3 className="font-serif text-[22px] font-normal leading-snug transition-colors duration-200 group-hover:text-off-white motion-reduce:transition-none">
                  {project.title}
                </h3>
              <p className="col-start-1 row-start-2 text-sm leading-relaxed text-muted sm:col-start-2 sm:row-start-1">
                {project.description}
              </p>
                <span
                  className="col-start-2 row-start-1 sm:col-start-3 shrink-0 text-xs text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
