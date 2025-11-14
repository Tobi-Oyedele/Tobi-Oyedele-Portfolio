import { Menu, X } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";

const MobileNav = ({
  activeSection,
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
}) => {
  const links = ["Home", "About", "Projects", "Skills", "Contact"];
  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            {"<Dev/>"}
          </div>

          <button
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-gray-800 border-t border-gray-700"
          >
            {links.map((item) => (
              <motion.button
                key={item}
                className={`block w-full text-left text-white px-6 py-3 font-semibold ${
                  activeSection === item ? "underline" : ""
                }`}
                onClick={() => scrollToSection(item)}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNav;
