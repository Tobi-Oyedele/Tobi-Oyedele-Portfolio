export const Home = () => {
  return (
    <header className="mb-16 sm:mb-20">
      <h1 className="font-serif text-[clamp(2.125rem,8vw,3.25rem)] font-normal leading-[1.08] tracking-[-0.02em] mb-4">
        <button
          type="button"
          className="name-bounce"
          aria-label="Oluwatobiloba — play letter animation"
          onPointerEnter={(event) => {
            const button = event.currentTarget;
            button.classList.remove("is-playing");
            void button.offsetWidth;
            button.classList.add("is-playing");
          }}
          onClick={(event) => {
            const button = event.currentTarget;
            button.classList.remove("is-playing");
            void button.offsetWidth;
            button.classList.add("is-playing");
          }}
          onAnimationEnd={(event) => {
            if (event.target === event.currentTarget.lastElementChild) {
              event.currentTarget.classList.remove("is-playing");
            }
          }}
        >
          {Array.from("Oluwatobiloba").map((letter, index) => (
            <span
              key={index}
              className="name-letter"
              aria-hidden="true"
              style={{ "--letter": index }}
            >
              {letter}
            </span>
          ))}
        </button>
      </h1>

      <p className="text-[10px] uppercase tracking-[0.22em] text-muted mb-8 leading-relaxed font-medium">
        Software engineer
      </p>

      <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted">
        <a
          href="https://github.com/Tobi-Oyedele"
          target="_blank"
          rel="noreferrer"
          className="text-muted hover:text-primary underline underline-offset-[5px] decoration-main/20 hover:decoration-primary/60 transition-colors"
        >
          GitHub
        </a>
        <span className="opacity-35 select-none text-xs" aria-hidden="true">
          ·
        </span>
        <a
          href="mailto:tobiloba.oyedele05@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="text-muted hover:text-primary underline underline-offset-[5px] decoration-main/20 hover:decoration-primary/60 transition-colors"
        >
          Email
        </a>
        <span className="opacity-35 select-none text-xs" aria-hidden="true">
          ·
        </span>
        <a
          href="https://www.linkedin.com/in/oluwatobiloba-oyedele-7a17b4240/"
          target="_blank"
          rel="noreferrer"
          className="text-muted hover:text-primary underline underline-offset-[5px] decoration-main/20 hover:decoration-primary/60 transition-colors"
        >
          LinkedIn
        </a>
        <span className="opacity-35 select-none text-xs" aria-hidden="true">
          ·
        </span>
        <a
          href="https://wa.me/2348167689810"
          target="_blank"
          rel="noreferrer"
          className="text-muted hover:text-primary underline underline-offset-[5px] decoration-main/20 hover:decoration-primary/60 transition-colors"
        >
          WhatsApp
        </a>
        <span className="opacity-35 select-none text-xs" aria-hidden="true">
          ·
        </span>
        <a
          href="https://x.com/tobztheman_?s=21"
          target="_blank"
          rel="noreferrer"
          className="text-muted hover:text-primary underline underline-offset-[5px] decoration-main/20 hover:decoration-primary/60 transition-colors"
        >
          Twitter
        </a>
      </p>
    </header>
  );
};

export default Home;
