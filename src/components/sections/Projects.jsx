import { projects } from "../../data/projects";

export const Projects = () => {
  return (
    <section id="projects" className="py-4">
      <h2 className="font-serif text-[1.35rem] sm:text-2xl font-medium text-off-white tracking-tight mb-8 pb-4 border-b border-hairline">
        Projects
      </h2>

      <ul>
        {projects.map((project) => {
          let hostname = "";
          try {
            hostname = new URL(project.liveUrl).hostname;
          } catch (e) {
            hostname = project.liveUrl;
          }

          return (
            <li
              key={project.id}
              className="border-b border-hairline last:border-b-0"
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="group block py-6 sm:py-7 -mx-1 px-1 sm:px-2 -ml-2 sm:-ml-3 border-l-2 border-transparent hover:border-primary pl-3 sm:pl-4 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 sm:gap-6">
                  <div className="min-w-0">
                    <span className="font-serif text-[1.05rem] sm:text-lg text-off-white group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </span>
                    <span className="mt-1.5 block font-sans text-[10px] uppercase tracking-[0.14em] text-muted group-hover:text-muted/80 transition-colors duration-300">
                      {hostname}
                    </span>
                  </div>
                  <span
                    className="shrink-0 font-sans text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm hidden sm:block"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-muted max-w-xl font-normal">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] sm:text-[11px] font-sans tracking-wider text-muted/50 uppercase">
                  <span className="font-semibold text-muted/40">
                    Tech Stack:
                  </span>
                  {project.tech.map((tech, index) => (
                    <span
                      key={tech}
                      className="font-medium text-muted group-hover:text-muted/80 transition-colors duration-300"
                    >
                      {tech}
                      {index < project.tech.length - 1 && (
                        <span className="text-muted/30 ml-2">/</span>
                      )}
                    </span>
                  ))}
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
