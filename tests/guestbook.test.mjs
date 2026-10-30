import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createGuestbookHandler, validateEntry, storageDiagnostic } from '../server/guestbook.mjs';

function storage() {
  const entries = []; const slots = new Set();
  return { entries, collection(name) {
    if (name === 'guestbook_limits') return { async insertOne(doc) { if (slots.has(doc._id)) throw Object.assign(new Error(), { code: 11000 }); slots.add(doc._id); } };
    return {
      async insertOne(doc) { entries.push({ ...doc, _id: String(entries.length + 1) }); return { insertedId: String(entries.length) }; },
      async countDocuments() { return entries.length; },
      find() { let offset = 0; let limit = 18; return { sort() { return this; }, skip(n) { offset = n; return this; }, limit(n) { limit = n; return this; }, async toArray() { return entries.slice().reverse().slice(offset, offset + limit); } }; },
    };
  } };
}
function invoke(handler, { method = 'GET', url = '/api/guestbook', body, headers = {} } = {}) {
  return new Promise((resolve, reject) => {
    const responseHeaders = {};
    const res = { setHeader(k, v) { responseHeaders[k] = v; }, end(data) { resolve({ status: this.statusCode, body: JSON.parse(data), headers: responseHeaders }); } };
    Promise.resolve(handler({ method, url, body, headers: { host: 'portfolio.test', 'content-type': 'application/json', ...headers }, socket: { remoteAddress: '127.0.0.1' } }, res)).catch(reject);
  });
}
process.env.GUESTBOOK_RATE_SECRET = 'test-secret-only';
test('starts empty; saves and reads an entry with only public fields', async () => {
  const db = storage(); const handler = createGuestbookHandler(async () => db);
  assert.deepEqual((await invoke(handler)).body.entries, []);
  const post = await invoke(handler, { method: 'POST', body: { name: ' Tobi ', message: 'Hello <script>alert(1)</script>', website: 'https://example.com', admin: true } });
  assert.equal(post.status, 201); assert.equal(post.body.entry.name, 'Tobi');
  assert.equal(post.body.entry.admin, undefined);
  const read = await invoke(handler);
  assert.equal(read.body.total, 1); assert.equal(read.body.entries[0].message, 'Hello <script>alert(1)</script>');
});
test('rejects unsafe links, blank messages, oversized names and non-object input', () => {
  for (const input of [{ name: 'a', message: 'b', website: 'javascript:alert(1)' }, { name: 'a', message: ' ' }, { name: 'a'.repeat(61), message: 'b' }, null]) assert.throws(() => validateEntry(input));
});
test('blocks cross-origin, honeypot, invalid JSON and excessive requests', async () => {
  const db = storage(); const handler = createGuestbookHandler(async () => db);
  const body = { name: 'Guest', message: 'Hello' };
  assert.equal((await invoke(handler, { method: 'POST', body, headers: { origin: 'https://other.test' } })).status, 403);
  assert.equal((await invoke(handler, { method: 'POST', body: { ...body, company: 'bot' } })).status, 400);
  assert.equal((await invoke(handler, { method: 'POST', body: '{' })).status, 400);
  assert.equal((await invoke(handler, { method: 'POST', body })).status, 201);
  assert.equal((await invoke(handler, { method: 'POST', body })).status, 429);
  assert.equal(db.entries.length, 1);
});
test('paginates, validates page numbers and rejects unsupported methods', async () => {
  const db = storage();
  for (let i = 0; i < 19; i++) db.entries.push({ _id: String(i), name: 'Guest', message: 'Hello', website: '', createdAt: new Date() });
  const handler = createGuestbookHandler(async () => db);
  const first = await invoke(handler); assert.equal(first.body.entries.length, 18); assert.equal(first.body.hasMore, true);
  assert.equal((await invoke(handler, { url: '/api/guestbook?page=2' })).body.entries.length, 1);
  assert.equal((await invoke(handler, { url: '/api/guestbook?page=-1' })).status, 400);
  assert.equal((await invoke(handler, { method: 'DELETE' })).status, 405);
});
test('storage failures return a safe recoverable error', async () => {
  const handler = createGuestbookHandler(async () => { throw new Error('secret connection details'); });
  const result = await invoke(handler); assert.equal(result.status, 503); assert.ok(!JSON.stringify(result).includes('secret connection'));
});

test('database diagnostics identify failures without exposing credentials', () => {
  assert.equal(storageDiagnostic({ code: 18, message: 'mongodb://private' }), 'AUTHENTICATION_FAILED');
  assert.equal(storageDiagnostic({ code: 13 }), 'DATABASE_PERMISSION_DENIED');
  assert.equal(storageDiagnostic({ name: 'MongoServerSelectionError', cause: { code: 'ENOTFOUND' } }), 'CLUSTER_DNS_FAILED');
  assert.equal(storageDiagnostic({ name: 'MongoServerSelectionError' }), 'CLUSTER_UNREACHABLE');
  assert.equal(storageDiagnostic({ name: 'MongoParseError' }), 'CONNECTION_CONFIGURATION_INVALID');
  assert.equal(storageDiagnostic(new Error('mongodb://private')), 'DATABASE_OPERATION_FAILED');
});
