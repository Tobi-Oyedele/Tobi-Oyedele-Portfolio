import { createHmac } from 'node:crypto';
import { MongoClient } from 'mongodb';

let connection;
let ready;
async function database() {
  if (!process.env.MONGODB_URI) throw new Error('NOT_CONFIGURED');
  if (!connection) {
    const client = new MongoClient(process.env.MONGODB_URI, { maxPoolSize: 5, serverSelectionTimeoutMS: 5000 });
    connection = client.connect().catch((error) => { connection = undefined; throw error; });
  }
  const db = (await connection).db(process.env.MONGODB_DB || 'portfolio');
  if (!ready) {
    ready = Promise.all([
      db.collection('guestbook').createIndex({ createdAt: -1, _id: -1 }),
      db.collection('guestbook_limits').createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 }),
    ]).catch((error) => { ready = undefined; throw error; });
  }
  await ready;
  return db;
}

export function validateEntry(input) {
  if (!input || typeof input !== 'object' || Array.isArray(input)) throw new Error('Enter your name and message.');
  const name = typeof input.name === 'string' ? input.name.trim() : '';
  const message = typeof input.message === 'string' ? input.message.trim() : '';
  const website = typeof input.website === 'string' ? input.website.trim() : '';
  if (!name || name.length > 60) throw new Error('Enter a name of 1–60 characters.');
  if (!message || message.length > 500) throw new Error('Enter a message of 1–500 characters.');
  if (website.length > 200) throw new Error('Your website URL is too long.');
  if (website) {
    let url;
    try { url = new URL(website); } catch { throw new Error('Enter a valid website URL starting with https:// or http://.'); }
    if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password) throw new Error('Enter a website URL using https:// or http://.');
  }
  return { name, message, website };
}

async function body(req) {
  if (req.body !== undefined) {
    const value = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);
    if (Buffer.byteLength(value) > 4096) throw new Error('BODY_TOO_LARGE');
    return JSON.parse(value);
  }
  const chunks = []; let size = 0;
  for await (const chunk of req) {
    size += Buffer.byteLength(chunk);
    if (size > 4096) throw new Error('BODY_TOO_LARGE');
    chunks.push(Buffer.from(chunk));
  }
  return JSON.parse(Buffer.concat(chunks).toString());
}
const publicEntry = (entry) => ({ id: String(entry._id), name: entry.name, message: entry.message, website: entry.website, createdAt: new Date(entry.createdAt).toISOString() });

export function createGuestbookHandler(getDatabase = database) {
  return async function handler(req, res) {
    const reply = (status, data) => {
      res.statusCode = status;
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.setHeader('Cache-Control', 'no-store');
      res.setHeader('X-Content-Type-Options', 'nosniff');
      res.end(JSON.stringify(data));
    };
    if (!['GET', 'POST'].includes(req.method)) {
      res.setHeader('Allow', 'GET, POST');
      return reply(405, { error: 'Method not allowed.' });
    }
    try {
      if (req.method === 'GET') {
        const page = Number(new URL(req.url, 'https://localhost').searchParams.get('page') || 1);
        if (!Number.isInteger(page) || page < 1 || page > 10000) return reply(400, { error: 'Invalid page.' });
        const db = await getDatabase();
        const entries = db.collection('guestbook');
        const [rows, total] = await Promise.all([
          entries.find({}).sort({ createdAt: -1, _id: -1 }).skip((page - 1) * 18).limit(18).toArray(),
          entries.countDocuments({}),
        ]);
        return reply(200, { entries: rows.map(publicEntry), total, page, hasMore: page * 18 < total });
      }
      // Reject browser submissions from another origin; never expose DB credentials.
      const host = req.headers.host;
      const origin = req.headers.origin;
      if (origin && new URL(origin).host !== host) return reply(403, { error: 'Please sign from this website.' });
      if (!(req.headers['content-type'] || '').startsWith('application/json')) return reply(415, { error: 'Send your note as JSON.' });
      let input;
      try { input = await body(req); } catch (error) { return reply(error.message === 'BODY_TOO_LARGE' ? 413 : 400, { error: 'Your note is invalid or too large.' }); }
      if (typeof input?.company === 'string' && input.company) return reply(400, { error: 'Unable to submit this note.' });
      let entry;
      try { entry = validateEntry(input); } catch (error) { return reply(400, { error: error.message }); }
      const db = await getDatabase();
      const address = String(req.headers['x-vercel-forwarded-for'] || req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown').split(',')[0].trim();
      const secret = process.env.GUESTBOOK_RATE_SECRET || process.env.MONGODB_URI;
      if (!secret) throw new Error('NOT_CONFIGURED');
      const digest = createHmac('sha256', secret).update(address).digest('hex');
      // Atomic unique slot survives serverless restarts. The next slot opens each minute.
      const now = new Date();
      try {
        await db.collection('guestbook_limits').insertOne({ _id: `${digest}:${Math.floor(now.getTime() / 60000)}`, expiresAt: new Date(now.getTime() + 120000) });
      } catch (error) {
        if (error.code === 11000) { res.setHeader('Retry-After', '60'); return reply(429, { error: 'Please wait a minute before leaving another note.' }); }
        throw error;
      }
      const document = { ...entry, createdAt: now };
      const result = await db.collection('guestbook').insertOne(document);
      return reply(201, { entry: publicEntry({ ...document, _id: result.insertedId }) });
    } catch (error) {
      // Do not log connection strings or return database errors to visitors.
      console.error('Guestbook request failed:', error.message === 'NOT_CONFIGURED' ? 'configuration missing' : 'storage unavailable');
      return reply(503, { error: 'The guestbook is temporarily unavailable. Please try again later.' });
    }
  };
}
