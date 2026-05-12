import { skills } from "../../data/aboutskills";
import { motion } from "motion/react";
import { User, Briefcase, Zap, Globe } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <User className="w-4 h-4" /> About Me
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Crafting digital experiences that matter.
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[240px]">
          {/* Main Bio Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-2 bento-item flex flex-col justify-between h-full"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Briefcase className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold mb-4">My Philosophy</h4>
              <p className="text-main/70 text-lg leading-relaxed mb-6">
                I believe that every line of code should serve a purpose. My
                approach combines aesthetic excellence with technical precision,
                ensuring that the websites I build are not just beautiful, but
                also fast, accessible, and high-converting.
              </p>
            </div>
          </motion.div>

          {/* Stats/Quick Info Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bento-item flex flex-col justify-center items-center text-center"
          >
            <div className="text-5xl font-bold mb-2">3+</div>
            <div className="text-main/50 font-bold uppercase tracking-widest text-xs">
              Years Experience
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bento-item flex flex-col gap-6"
          >
            <div className="flex items-center gap-3 text-primary">
              <Globe className="w-5 h-5" />
              <span className="font-bold uppercase tracking-wider text-xs">
                Based In
              </span>
            </div>
            <div>
              <h4 className="text-xl font-bold">Lagos, Nigeria</h4>
              <p className="text-main/50 text-sm">
                Working with clients worldwide.
              </p>
            </div>
          </motion.div>

          {/* Skills highlight */}
          {skills.slice(0, 2).map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bento-item flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold mb-2">{skill.name}</h4>
                  <p className="text-main/50 text-xs leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
