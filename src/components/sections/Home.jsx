import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export const Home = () => {
  const heroRef = useRef(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(containerRef.current, {
        opacity: 0,
        duration: 1,
      })
        .from(
          titleRef.current.children,
          {
            y: 100,
            opacity: 0,
            stagger: 0.1,
            duration: 1.2,
          },
          "-=0.5",
        )
        .from(
          subTitleRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 1,
          },
          "-=0.8",
        )
        .from(
          buttonsRef.current.children,
          {
            scale: 0.8,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
          },
          "-=0.6",
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div
        ref={containerRef}
        className="relative z-10 container mx-auto px-6 text-center"
      >
        <div className="mb-12 inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 text-xs font-bold tracking-widest uppercase text-primary">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Available for new projects
        </div>

        <h1
          ref={titleRef}
          className="text-[11vw] md:text-[8.5rem] font-bold tracking-tighter leading-[1.1] md:leading-[0.8] mb-12 uppercase break-words"
        >
          <div className="overflow-hidden">Oluwatobiloba</div>
          <div className="overflow-hidden">Oyedele</div>
        </h1>

        <div ref={subTitleRef}>
          <p className="text-lg md:text-xl text-main/60 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            A frontend developer dedicated to creating high-performance,
            visually stunning web experiences that leave a lasting impression.
          </p>
        </div>

        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button
            onClick={scrollToProjects}
            className="group relative px-10 py-5 bg-primary text-white rounded-2xl font-bold transition-all hover:shadow-2xl hover:shadow-primary/30 active:scale-[0.98] cursor-pointer text-lg"
          >
            <div className="flex items-center gap-2">
              Explore My Work{" "}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </div>
          </button>

          <button
            onClick={scrollToContact}
            className="px-10 py-5 glass rounded-2xl font-bold hover:bg-main/5 transition-all cursor-pointer text-lg"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30 cursor-pointer"
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};
