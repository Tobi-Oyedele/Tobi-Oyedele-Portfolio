// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const DesktopNav = ({ activeSection, scrollToSection }) => {
  const links = ["home", "about", "projects", "skills", "contact"];
  return (
    <nav className="bg-gray-900">
      <div className="flex items-center justify-between px-4 h-16">
        <div className="font-bold text-white">
          <a
            href="/Oluwatobiloba_Oyedele_CV.pdf"
            download
            className="px-4 py-2 flex items-center gap-2"
          >
            <span>Download CV</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M7.5 10.5l4.5 4.5m0 0l4.5-4.5m-4.5 4.5V3"
              />
            </svg>
          </a>
        </div>
        <div className="space-x-8">
          {links.map((item) => (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              key={item}
              className={`cursor-pointer uppercase font-semibold text-white ${
                activeSection === item ? "underline underline-offset-8" : ""
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
