import { ArrowUpRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export default function Guestbook() {
  const [entries, setEntries] = useState([]);
  const [total, setTotal] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [success, setSuccess] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const load = useCallback(async (next = 1, signal) => {
    setLoading(true); setLoadError("");
    try {
      const response = await fetch(`/api/guestbook?page=${next}`, { signal });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error);
      setEntries((previous) => next === 1 ? data.entries : [...previous, ...data.entries]);
      setTotal(data.total); setPage(next); setHasMore(data.hasMore);
    } catch (error) {
      if (error.name !== "AbortError") setLoadError("Couldn’t load the notes. Please try again.");
    } finally { if (!signal?.aborted) setLoading(false); }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    load(1, controller.signal);
    return () => controller.abort();
  }, [load]);

  async function submit(event) {
    event.preventDefault();
    if (submitting) return;
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    setSubmitting(true); setSubmitError(""); setSuccess("");
    try {
      const response = await fetch("/api/guestbook", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Couldn’t save your note. Please try again.");
      form.reset(); setMessage("");
      setSuccess("Your note is in the guestbook. Thanks for stopping by!");
      await load(1);
    } catch (error) { setSubmitError(error.message || "Couldn’t save your note. Please try again."); }
    finally { setSubmitting(false); }
  }

  const field = "w-full border border-hairline bg-transparent px-3 py-2.5 text-sm focus-visible:outline-2 focus-visible:outline-current focus-visible:outline-offset-2";
  return (
    <section aria-labelledby="guestbook-heading">
      <h1 id="guestbook-heading" className="font-serif text-5xl leading-tight mb-4">Guestbook</h1>
      <p className="text-sm leading-relaxed text-muted">You were here. Leave a hello, a thought, or something worth sharing.</p>
      <form onSubmit={submit} className="mt-8 border-y border-hairline py-6">
        <fieldset disabled={submitting}>
          <legend className="sr-only">Leave a note</legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <div><label htmlFor="guest-name" className="block text-xs mb-2">Your name</label><input id="guest-name" name="name" required maxLength={60} autoComplete="name" className={field} /></div>
            <div><label htmlFor="guest-website" className="block text-xs mb-2">Website · optional</label><input id="guest-website" name="website" type="url" maxLength={200} placeholder="https://" className={field} /></div>
          </div>
          <div className="hidden" aria-hidden="true"><label htmlFor="guest-company">Company</label><input id="guest-company" name="company" tabIndex={-1} autoComplete="off" /></div>
          <label htmlFor="guest-message" className="block text-xs mb-2">Your message</label>
          <textarea id="guest-message" name="message" required maxLength={500} rows={4} value={message} onChange={(event) => setMessage(event.target.value)} className={`${field} resize-y`} />
          <div className="flex justify-between items-center gap-4 mt-3">
            <span className="text-xs text-muted">{message.length} / 500</span>
            <button type="submit" className="border border-hairline px-4 py-2.5 text-xs disabled:opacity-50 disabled:cursor-wait">{submitting ? "Saving…" : <>Leave a note <ArrowUpRight className="h-3.5 w-3.5 inline-block align-middle" strokeWidth={1.5} aria-hidden="true" /></>}</button>
          </div>
          <p className="text-xs text-muted mt-4">Your name, message and website will be public.</p>
        </fieldset>
        {submitError && <p role="alert" className="text-sm mt-4 text-red-700 dark:text-red-400">{submitError}</p>}
        {success && <p role="status" className="text-sm mt-4">{success}</p>}
      </form>
      <section aria-labelledby="entries-heading" className="mt-10">
        <div className="flex items-baseline justify-between gap-4">
          <h2 id="entries-heading" className="font-serif text-[27px] leading-tight">Notes left here</h2>
          {total !== null && <span className="text-xs text-muted">{total} {total === 1 ? "entry" : "entries"}</span>}
        </div>
        {loadError && <div role="alert" className="mt-6 text-sm text-muted"><p>{loadError}</p><button type="button" className="underline mt-2" onClick={() => load(1)}>Try again</button></div>}
        {loading && <p role="status" className="mt-6 text-sm text-muted">Loading notes…</p>}
        {!loading && !loadError && total === 0 && <p className="mt-6 text-sm text-muted">No notes yet. Be the first to say hello.</p>}
        <ul className="mt-6 grid grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-3 gap-x-5 gap-y-6">
          {entries.map((entry) => <li key={entry.id} className="min-w-0 border-t border-hairline pt-4 break-words">
            <h3 className="text-sm font-medium">{entry.website ? <a href={entry.website} target="_blank" rel="nofollow ugc noopener noreferrer" className="underline underline-offset-4">{entry.name}</a> : entry.name}</h3>
            <time dateTime={entry.createdAt} className="text-[11px] text-muted">{new Date(entry.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</time>
            <p className="font-serif text-xl leading-relaxed mt-3 whitespace-pre-wrap">{entry.message}</p>
          </li>)}
        </ul>
        {hasMore && !loadError && <button type="button" disabled={loading} onClick={() => load(page + 1)} className="mt-6 text-xs underline disabled:opacity-50">Load more notes</button>}
      </section>
    </section>
  );
}
