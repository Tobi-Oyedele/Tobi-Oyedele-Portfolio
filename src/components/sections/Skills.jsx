import { useState, useMemo } from "react";
import { skills, categories } from "../../data/skills";

// Fallback icon in case of import issues
const FallbackIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
);

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filteredSkills = useMemo(() => {
    return selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);
  }, [selectedCategory]);

  // Safe icon component renderer
  const renderIcon = (skill) => {
    try {
      const IconComponent = skill.icon || FallbackIcon;
      return <IconComponent className={`h-6 w-6 ${skill.textColor}`} />;
    } catch (error) {
      console.error(`Error rendering icon for ${skill.name}:`, error);
      return <FallbackIcon className={`h-6 w-6 ${skill.textColor}`} />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-sm"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="relative group"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div
                className={`bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 h-full ${
                  hoveredSkill === skill.name
                    ? "transform -translate-y-2 shadow-xl"
                    : "shadow-md hover:shadow-lg"
                }`}
              >
                {/* Skill Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-xl ${skill.bgColor}`}>
                      {renderIcon(skill)}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">
                        {skill.name}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Category Tag */}
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500 font-medium">
                    {skill.category}
                  </span>
                </div>
              </div>

              {/* Gradient Border Effect */}
              <div
                className={`absolute inset-0 rounded-2xl bg-linear-to-r ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
