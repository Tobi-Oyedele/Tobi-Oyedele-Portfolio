// components/Projects.jsx
import { useState } from "react";
import { projects } from "../../data/projects";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-linear-to-br from-white to-gray-400 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="uppercase text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in
            modern web development.
          </p>
        </div>

        <div>
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />

        {/* Quick Actions */}
        <div
          className={`absolute top-4 right-4 flex gap-2 transition-all duration-300 ${
            isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <ArrowTopRightOnSquareIcon className="h-4 w-4 text-gray-700" />
          </a>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-bold text-gray-900 text-lg">{project.title}</h3>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
