// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const DesktopNav = ({ activeSection, scrollToSection }) => {
  const links = ["home", "about", "projects", "skills", "contact"];
  return (
    <nav className="bg-gray-900">
      <div className="flex items-center justify-between px-4 h-16">
        <div className="text-2xl font-bold text-white">{"<Dev/>"}</div>
        <div className="space-x-8">
          {links.map((item) => (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              key={item}
              className={`cursor-pointer capitalize font-semibold text-white ${
                activeSection === item ? "underline" : ""
              }`}
              onClick={() => scrollToSection(item)}
            >
              {item}
            </motion.button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
