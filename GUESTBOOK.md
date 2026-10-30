# Guestbook setup

The React page calls `/api/guestbook`. On Vercel, `api/guestbook.js` is a Node serverless function. Vite serves that same handler during local development. A plain static host cannot run the API.

## Connect MongoDB Atlas

1. Create an Atlas cluster and a database user with read/write access to the `portfolio` database. Configure Atlas network access for your hosting environment.
2. Copy `.env.example` to `.env.local` and replace the MongoDB URI with the application's connection string (URL-encode password characters as needed).
3. Set `MONGODB_DB=portfolio` and a random `GUESTBOOK_RATE_SECRET`.
4. Add the same variables to Vercel Project Settings → Environment Variables, then redeploy. Do not use the `VITE_` prefix: these values must stay server-side.
5. Restart `npm run dev` after setting local environment variables.

The `guestbook` and `guestbook_limits` collections and indexes are created automatically. An empty database returns zero entries; no sample messages are seeded. If storage is missing or unavailable, the page shows an error instead of pretending notes were saved.

## Behavior and moderation

Names (60 characters), messages (500 characters), optional HTTP(S) websites, and dates are public. React escapes the text. Only these fields are returned by the API. Notes publish immediately; use Atlas Data Explorer to remove unwanted documents from `portfolio.guestbook`.

The API rejects cross-origin browser submissions, uses a honeypot, limits request sizes, and allows one submission per IP per minute using atomic database slots. IP addresses are HMAC-hashed and not saved with entries. Rate-limit documents expire automatically. This is basic abuse protection, not a CAPTCHA; distributed spam may require stronger protections later.

`npm run test:guestbook` exercises the API with an in-memory storage substitute, including persistence flow, pagination, validation, origin checks and rate limits. An Atlas connection is still required to verify real database writes.
