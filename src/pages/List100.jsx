const goals = [
  "Learn something completely outside my usual interests.",
  "Make something just for the fun of it.",
  "Read a book that changes my perspective.",
  "Learn to cook a favourite meal.",
  "Go to a live performance.",
  "Teach someone a useful skill.",
  "Spend a day exploring somewhere new.",
  "Visit New York City.",
  "Visit Toronto.",
  "Travel to all seven continents.",
  "See the Northern Lights in person.",
  "Attend a TED Talk.",
  "Go on a solo vacation.",
  "Go skydiving.",
  "Ride in a hot air balloon.",
  "Drive a race car.",
  "Buy an SVJ.",
  "Attend a Travis Scott concert.",
  "Attend a Yeat concert.",
  "Watch the FIFA World Cup live.",
  "Watch a Manchester United game at Old Trafford.",
  "Learn how to drift cars.",
  "Go to a major fashion event, like Paris Fashion Week.",
  "See a rocket launch live.",
  "Go on a cruise.",
].map((text, index) => ({ text, number: index + 1, done: text === "Read a book that changes my perspective." || text === "Visit Toronto." }));

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
