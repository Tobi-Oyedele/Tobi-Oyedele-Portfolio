import { Menu, X } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";

const MobileNav = ({
  activeSection,
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
}) => {
  const links = ["home", "about", "projects", "skills", "contact"];
  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-gray-900">{"<Dev/>"}</div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-600 transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-linear-to-br from-white to-gray-400 fixed inset-0 top-16 z-40"
          >
            {links.map((item) => (
              <motion.button
                key={item}
                className={`block w-full text-left text-xl uppercase px-6 py-3 font-semibold ${
                  activeSection === item
                    ? "underline text-gray-900"
                    : "text-gray-900"
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
