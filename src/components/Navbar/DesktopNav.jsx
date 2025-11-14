// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const DesktopNav = ({ activeSection, scrollToSection }) => {
  const links = ["home", "about", "projects", "skills", "contact"];
  return (
    <nav>
      <div className="flex items-center justify-between px-4 h-16">
        <div className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          {"<Dev/>"}
        </div>
        <div className="space-x-8 text-white">
          {links.map((item) => (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              key={item}
              className={`cursor-pointer capitalize font-semibold hover:text-cyan-400 ${
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
