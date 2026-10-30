const goals = [
  "Learn something completely outside my usual interests.",
  "Take a trip I’ve been putting off.",
  "Make something just for the fun of it.",
  "Read a book that changes my perspective.",
  "Learn to cook a favourite meal.",
  "Go to a live performance.",
  "Teach someone a useful skill.",
  "Spend a day exploring somewhere new.",
].map((text, index) => ({ text, number: index + 1, done: index === 3 }));

export default function List100() {
  return (
    <section aria-labelledby="list-heading">
      <h1 id="list-heading" className="font-serif text-5xl leading-tight mb-4">List 100</h1>
      <p className="font-serif text-[22px] leading-relaxed">A hundred things I’d like to try, make, learn and experience. A list to grow into.</p>
      <ol className="mt-8 list-decimal pl-5 space-y-1 font-serif text-xl leading-relaxed">
        {goals.map((goal) => <li key={goal.number} value={goal.number} className={`pl-2 ${goal.done ? "line-through text-red-700 dark:text-red-400" : ""}`}>{goal.text}</li>)}
      </ol>
    </section>
  );
}
