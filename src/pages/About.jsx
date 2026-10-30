export default function About() {
  return (
    <article aria-labelledby="about-heading">
      <h1 id="about-heading" className="font-serif text-5xl leading-tight mb-5">About me</h1>
      <p className="font-serif text-[26px] leading-relaxed mb-7">Hi, I’m Tobi, a developer based in Nigeria.</p>
      <div className="space-y-5 text-sm leading-7 text-muted">
        <p>I build my own products and websites for clients. Away from the keyboard, I’m usually working out, watching a series, playing video games, listening to music, or just chilling.</p>
        <p>I’m a die-hard Manchester United fan, but these days they’ve been killing me.</p>
      </div>
      <figure className="mt-7">
        <img src="/images/about/manchester-united.jpeg" alt="A Manchester United fan in a red jersey, sitting behind several glasses of beer" className="block w-full h-auto" />
        <figcaption className="text-xs text-muted mt-3">The Manchester United experience, basically.</figcaption>
      </figure>
      <section className="mt-10 pt-6 border-t border-hairline" aria-labelledby="music-heading">
        <h2 id="music-heading" className="font-serif text-[27px] leading-tight mb-4">The sound that made me</h2>
        <p className="text-sm leading-7 text-muted mb-6">Nine albums that say a little more about my taste in music.</p>
        <img src="/images/about/nine-albums.jpeg" alt="Nine-album collage: Barter 6, Astroworld, Wunna, Slime Season, Slime Season 2, Slime Season 3, Collection One, So Much Fun, and Birds in the Trap Sing McKnight" loading="lazy" className="block w-full h-auto" />
      </section>
      <section className="mt-10 pt-6 border-t border-hairline" aria-labelledby="reading-heading">
        <h2 id="reading-heading" className="font-serif text-[27px] leading-tight mb-4">On my bookshelf</h2>
        <p className="text-sm leading-7 text-muted">I’m currently reading <span className="text-off-white">The Happiness Trap</span> by Russ Harris and <span className="text-off-white">Atomic Habits</span> by James Clear.</p>
        <a href="/bookshelf" className="inline-block mt-4 text-xs underline underline-offset-4">Explore my bookshelf ↗</a>
      </section>
      <section className="mt-10 pt-6 border-t border-hairline" aria-labelledby="hello-heading">
        <h2 id="hello-heading" className="font-serif text-[27px] leading-tight mb-4">Say hello</h2>
        <p className="text-sm leading-7 text-muted">You can <a href="mailto:tobiloba.oyedele05@gmail.com" className="underline underline-offset-4">send me an email</a> or leave a note in my <a href="/guestbook" className="underline underline-offset-4">guestbook</a>.</p>
      </section>
    </article>
  );
}
