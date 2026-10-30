const books = [
  { title: "The Happiness Trap", author: "Russ Harris", cover: "/images/books/the-happiness-trap.jpg", url: "https://www.simonandschuster.com.au/books/The-Happiness-Trap/Russ-Harris/9781922539199" },
  { title: "Atomic Habits", author: "James Clear", cover: "/images/books/atomic-habits.png", url: "https://jamesclear.com/atomic-habits" },
];

export default function Bookshelf() {
  return (
    <section aria-labelledby="books-heading">
      <h1 id="books-heading" className="font-serif text-5xl leading-tight mb-4">Bookshelf</h1>
      <p className="text-sm text-muted leading-relaxed">Books I’m reading, and the ones that have stayed with me.</p>
        <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-10">
          {books.map((book) => (
            <li key={book.title}>
              <a href={book.url} target="_blank" rel="noreferrer" className="block">
                <img src={book.cover} alt={`${book.title} book cover`} className="w-full aspect-[2/3] object-contain object-bottom" />
                <h2 className="font-serif text-xl leading-snug mt-4">{book.title}</h2>
                <p className="text-xs text-muted mt-1">{book.author}</p>
              </a>
            </li>
          ))}
        </ul>
    </section>
  );
}
