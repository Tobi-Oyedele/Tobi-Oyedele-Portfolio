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
    <section
      id="skills"
      className="py-20 bg-linear-to-br from-gray-950 to-black relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full cursor-pointer font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-gray-800 text-gray-200 hover:bg-gray-700 shadow-sm"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="relative group">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 transition-all duration-300 h-full">
                {/* Skill Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-xl ${skill.bgColor}`}>
                      {renderIcon(skill)}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-xl">
                        {skill.name}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Category Tag */}
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-300 font-medium">
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
