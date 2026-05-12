import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const MobileNav = ({
  activeSection,
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
  isDarkMode,
  toggleTheme,
}) => {
  const links = ["home", "about", "projects", "skills", "contact"];
  
  return (
    <div className="flex items-center justify-between h-12">
      <a
        href="/Oluwatobiloba_Oyedele_CV.pdf"
        download
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary text-white text-xs font-medium"
      >
        <span>CV</span>
        <Download className="w-3 h-3" />
      </a>

      <div className="flex items-center gap-3">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full glass"
          aria-label="Toggle theme"
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-slate-700" />
          )}
        </button>
        
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-full glass text-main"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed inset-x-4 top-20 glass rounded-3xl p-6 shadow-2xl z-50 flex flex-col gap-4"
          >
            {links.map((item) => (
              <button
                key={item}
                className={`block w-full text-left text-lg capitalize py-2 font-medium transition-colors ${
                  activeSection === item ? "text-primary" : "text-main/70"
                }`}
                onClick={() => scrollToSection(item)}
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
