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
      // ensure elements exist
      if (!nameSpanRef.current || !titleRef.current || !descRef.current) return;

      gsap.set([button1Ref.current, button2Ref.current], {
        opacity: 0,
        y: 20,
        scale: 0.98,
      });

      // clear any existing text so TextPlugin types from empty
      gsap.set([nameSpanRef.current, titleRef.current, descRef.current], {
        text: "",
      });

      const tl = gsap.timeline({
        onStart: () => console.log("Timeline started"),
        onComplete: () => console.log("Timeline complete"),
      });

      tl.to(nameSpanRef.current, {
        duration: 1.4,
        text: "Hi, I'm Oyedele Oluwatobiloba",
        ease: "none",
        onStart: () => console.log("Typing NAME"),
      })
        .to(
          titleRef.current,
          {
            duration: 0.8,
            text: "I'm a Web Developer",
            ease: "none",
            onStart: () => console.log("Typing TITLE"),
          },
          "+=0.35"
        )
        .to(
          descRef.current,
          {
            duration: 1.4,
            text: "Crafting beautiful, responsive web experiences with modern technologies",
            ease: "none",
            onStart: () => console.log("Typing DESC"),
            onComplete: () => {
              descRef.current.classList.add("finished");
            },
          },
          "+=0.25"
        )
        .to(
          [button1Ref.current, button2Ref.current],
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.3,
            stagger: 0.12,
            ease: "power3.out",
            onStart: () => console.log("Fading in BUTTONS"),
          },
          "+=0.25"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen overflow-hidden relative flex items-center justify-center bg-gray-900/95"
    >
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            {/* typed text must be plain text inside a single element with its own unique ref */}
            <span
              ref={nameSpanRef}
              className="bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            ></span>
          </h1>

          <p
            ref={titleRef}
            className="text-xl md:text-3xl text-gray-300 mb-2"
          ></p>

          <p
            ref={descRef}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          ></p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8 text-white">
          <button
            ref={button1Ref}
            onClick={scrollToProjects}
            className="px-8 py-3 bg-linear-to-r from-cyan-500 to-purple-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105"
          >
            View My Work
          </button>
          <button
            ref={button2Ref}
            onClick={scrollToContact}
            className="px-8 py-3 border-2 border-cyan-400 rounded-full font-semibold hover:bg-cyan-400/10 transition-all transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};
