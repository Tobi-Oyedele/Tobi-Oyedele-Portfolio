const pages = [
  { title: "Bookshelf", description: "What I’m reading and have read", href: "/explorations/bookshelf.html" },
  { title: "List 100", description: "Things I’d like to do", href: "/explorations/list-100.html" },
  { title: "Guestbook", description: "Leave a little hello", href: "/explorations/guestbook.html" },
];

export default function More() {
  return (
    <section aria-labelledby="more-heading" className="mt-12 pt-6 border-t border-hairline">
      <h2 id="more-heading" className="font-serif text-[27px] font-normal leading-tight mb-5">
        A little more
      </h2>
      <ul>
        {pages.map((page) => (
          <li key={page.title} className="border-b border-hairline">
            <a href={page.href} className="group flex items-baseline justify-between gap-6 py-4 focus-visible:outline-2 focus-visible:outline-current focus-visible:outline-offset-4">
              <span className="font-serif text-[23px] leading-snug">{page.title}</span>
              <span className="text-xs text-muted text-right whitespace-nowrap">
                {page.description}{" "}
                <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none">↗</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs leading-relaxed text-muted">These pages currently open design previews.</p>
    </section>
  );
}
