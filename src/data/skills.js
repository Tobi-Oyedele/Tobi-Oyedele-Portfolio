import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import {
  RiTailwindCssFill,
  RiCss3Fill,
  RiReactjsFill,
  RiHtml5Fill,
  RiNextjsFill,
} from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";

export const skills = [
  {
    name: "HTML5",
    icon: RiHtml5Fill,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    textColor: "text-orange-700",
    category: "Frontend",
  },
  {
    name: "CSS3",
    icon: RiCss3Fill,
    color: "from-blue-500 to-purple-500",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: RiTailwindCssFill,
    color: "from-cyan-500 to-teal-500",
    bgColor: "bg-cyan-50",
    textColor: "text-cyan-700",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "from-blue-600 to-blue-800",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    category: "Language",
  },
  {
    name: "GSAP",
    icon: RocketLaunchIcon,
    color: "from-green-500 to-green-700",
    bgColor: "bg-green-50",
    textColor: "text-green-700",
    category: "Animation",
  },
  {
    name: "Framer Motion",
    icon: TbBrandFramerMotion,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
    category: "Animation",
  },
  {
    name: "Git",
    icon: FaGithub,
    color: "from-orange-600 to-red-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-700",
    category: "Tools",
  },
  {
    name: "Next.js",
    icon: RiNextjsFill,
    color: "from-gray-700 to-gray-900",
    bgColor: "bg-gray-50",
    textColor: "text-cyan-700",
    category: "Framework",
  },
  {
    name: "React.js",
    icon: RiReactjsFill,
    color: "from-cyan-700 to-blue-900",
    bgColor: "bg-cyan-50",
    textColor: "text-cyan-700",
    category: "Framework",
  },
  {
    name: "Vercel",
    icon: IoLogoVercel,
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-50",
    textColor: "text-cyan-700",
    category: "Tools",
  },
];

export const categories = [
  "All",
  "Frontend",
  "Framework",
  "Animation",
  "Language",
  "Tools",
];
