import { motion } from "motion/react";
import { Sun, Moon, Download } from "lucide-react";

const DesktopNav = ({
  activeSection,
  scrollToSection,
  isDarkMode,
  toggleTheme,
}) => {
  const links = ["home", "about", "projects", "skills", "contact"];

  return (
    <div className="flex items-center justify-between h-12">
      <div className="flex items-center gap-6">
        <a
          href="/Oluwatobiloba_Oyedele_CV.pdf"
          download
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-sm font-medium transition-all hover:bg-secondary hover:shadow-lg hover:shadow-primary/20"
        >
          <span>CV</span>
          <Download className="w-4 h-4 group-hover:animate-bounce" />
        </a>
      </div>

      <div className="flex items-center gap-8">
        <div className="flex items-center gap-6">
          {links.map((item) => (
            <button
              key={item}
              className={`relative cursor-pointer capitalize text-sm font-medium transition-colors hover:text-primary ${
                activeSection === item ? "text-primary" : "text-main/70"
              }`}
              onClick={() => scrollToSection(item)}
            >
              {item}
              {activeSection === item && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-full glass hover:bg-primary/10 transition-colors"
          aria-label="Toggle theme"
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5 text-yellow-400 cursor-pointer" />
          ) : (
            <Moon className="w-5 h-5 text-slate-700 cursor-pointer" />
          )}
        </button>
      </div>
    </div>
  );
};

export default DesktopNav;
