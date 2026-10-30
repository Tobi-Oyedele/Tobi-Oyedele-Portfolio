const groups = [
  ["Frontend", ["HTML", "CSS", "TypeScript", "React", "Next.js", "Tailwind CSS"]],
  ["Backend & data", ["Node.js", "Express", "MongoDB", "Mongoose"]],
  ["State & integration", ["Zustand", "Axios", "Zod", "Better Auth"]],
  ["Tools & deployment", ["Git", "GitHub", "Docker", "Vercel"]],
];

export default function TechStack() {
  return (
    <section id="tech-stack" aria-labelledby="stack-heading" className="mt-12">
      <h2 id="stack-heading" className="font-serif text-[27px] font-normal leading-tight mb-4">
        Tech stack
      </h2>
      <p className="text-sm leading-relaxed text-muted mb-6">
        The languages, frameworks and tools I build with.
      </p>
      <dl>
        {groups.map(([category, technologies]) => (
          <div key={category} className="grid grid-cols-1 sm:grid-cols-[130px_minmax(0,1fr)] gap-1.5 sm:gap-5 py-4 border-t border-hairline">
            <dt className="text-xs leading-relaxed text-muted">{category}</dt>
            <dd className="text-xs leading-loose">{technologies.join(" · ")}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
