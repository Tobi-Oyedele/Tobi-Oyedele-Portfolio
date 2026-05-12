import { useState, useMemo } from "react";
import { skills, categories } from "../../data/skills";
import { motion, AnimatePresence } from "motion/react";
import { Code2, Sparkles } from "lucide-react";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills = useMemo(() => {
    return selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest uppercase text-secondary mb-4 flex items-center gap-2">
              <Code2 className="w-4 h-4" /> My Toolbox
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Technologies I use to bring ideas to life.
            </h3>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "glass hover:bg-main/5 text-main/60"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bento-item flex flex-col items-center justify-center text-center gap-4 group"
                >
                  <div className={`w-16 h-16 rounded-2xl ${skill.bgColor} flex items-center justify-center transition-transform group-hover:rotate-12`}>
                    <Icon className={`w-8 h-8 ${skill.textColor}`} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm md:text-base">{skill.name}</h4>
                    <p className="text-[10px] uppercase tracking-widest text-main/40 font-bold mt-1">{skill.category}</p>
                  </div>
                  
                  {/* Subtle Sparkle on Hover */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Sparkles className="w-3 h-3 text-primary" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
