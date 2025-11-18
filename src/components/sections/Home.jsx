import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { useEffect, useRef } from "react";

// Register the plugin
gsap.registerPlugin(TextPlugin);

export const Home = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const heroRef = useRef(null);
  const nameSpanRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const button1Ref = useRef(null);
  const button2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!nameSpanRef.current || !titleRef.current || !descRef.current) return;

      gsap.set([button1Ref.current, button2Ref.current], {
        opacity: 0,
        y: 20,
        scale: 0.98,
      });

      gsap.set([nameSpanRef.current, titleRef.current, descRef.current], {
        text: "",
      });

      const tl = gsap.timeline();

      tl.to(nameSpanRef.current, {
        duration: 1.2,
        text: "Hi, I'm Oyedele Oluwatobiloba",
        ease: "none",
      })
        .to(
          titleRef.current,
          {
            duration: 0.6,
            text: "I'm a Web Developer",
            ease: "none",
          },
          "+=0.2"
        )
        .to(
          descRef.current,
          {
            duration: 1.2,
            text: "Crafting beautiful, responsive web experiences with modern technologies",
            ease: "none",
            onComplete: () => {
              descRef.current.classList.add("finished");
            },
          },
          "+=0.15"
        )
        .to(
          [button1Ref.current, button2Ref.current],
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.25,
            stagger: 0.1,
            ease: "power3.out",
          },
          "+=0.15"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen overflow-hidden relative flex items-center justify-center bg-linear-to-br from-white to-gray-400 "
    >
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span ref={nameSpanRef} className="text-gray-900"></span>
          </h1>

          <p
            ref={titleRef}
            className="text-xl md:text-3xl text-gray-600 mb-4 font-medium"
          ></p>

          <p
            ref={descRef}
            className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
          ></p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            ref={button1Ref}
            onClick={scrollToProjects}
            className="px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 shadow-md hover:shadow-lg cursor-pointer"
          >
            View My Work
          </button>
          <button
            ref={button2Ref}
            onClick={scrollToContact}
            className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-all transform hover:scale-105 cursor-pointer"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};
