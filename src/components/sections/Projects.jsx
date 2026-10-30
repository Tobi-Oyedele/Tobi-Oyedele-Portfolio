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
              className="group block py-6 text-off-white focus-visible:outline-2 focus-visible:outline-current focus-visible:outline-offset-4"
            >
              <div className="flex items-baseline justify-between gap-6">
                <h3 className="font-serif text-[22px] font-normal leading-snug transition-colors duration-200 group-hover:text-primary motion-reduce:transition-none">
                  {project.title}
                </h3>
                <span
                  className="shrink-0 text-xs text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>
              <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-muted">
                {project.description}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
