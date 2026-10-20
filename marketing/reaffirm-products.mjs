#!/usr/bin/env node
// marketing/reaffirm-products.mjs — the products-feed producer (wave-19.37, owner trace 1a157fd40d380521)
// ═══════════════════════════════════════════════════════════════════════════
// Measured design (wave-19.36, 19.36-f): marketing/products.json declares itself
// "static by design, claims-guard discipline" — its canonical sources live in
// roshpinacare-sys/Adsmarket (sourceCanon). Until this producer existed the feed
// was ORPHANED: zero writers across all 102 Domain workflows, stale 11,950min.
//
// The producer REAFFIRMS: it proves the canon sources are alive & unchanged
// (sha256 recorded per source), refreshes generatedAt, and FAILS loudly on any
// canon delta — content re-curation is owner-class and is never auto-applied.
//
// LAW-C: land capability as repo-owned machinery. LAW-D: a claim without a
// receipt is not a claim. Fail-closed: never claim freshness over a dead source.
// ═══════════════════════════════════════════════════════════════════════════
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';

const CANON_REPO = 'roshpinacare-sys/Adsmarket';
const TOKEN = process.env.GH_TOKEN || '';
const FILE = new URL('./products.json', import.meta.url).pathname;

const doc = JSON.parse(readFileSync(FILE, 'utf8'));
const sources = (doc?.sourceCanon?.sources) || [];
if (!sources.length) {
  console.error('no sourceCanon.sources — nothing to reaffirm');
  process.exit(2);
}

const prev = doc?.sourceCanon?.hashes || {};
const headers = TOKEN
  ? { authorization: `Bearer ${TOKEN}`, accept: 'application/vnd.github.raw+json' }
  : { accept: 'application/vnd.github.raw+json' };

const hashes = {};
for (const s of sources) {
  // measured 06:40Z: sourceCanon labels may carry version suffixes ("fact-sheet.md v3")
  // where "v3" is a version tag, not path — strip " vN" for the fetch path, keep the label
  const path = s.trim().replace(/\s+v\d+$/i, '');
  const res = await fetch(`https://api.github.com/repos/${CANON_REPO}/contents/${path}?ref=main`, { headers });
  if (!res.ok) {
    console.error(`canon source ${s} (${path}) -> HTTP ${res.status} — fail-closed: not claiming freshness over a dead source`);
    process.exit(1);
  }
  const body = await res.text();
  hashes[s] = createHash('sha256').update(body).digest('hex').slice(0, 16);
}

const deltas = sources.filter((s) => prev[s] && prev[s] !== hashes[s]);
if (deltas.length) {
  console.error(`CANON-DELTA (owner-class): ${deltas.join(', ')} changed since last reaffirm — content re-curation required, NOT auto-applied`);
  process.exit(1);
}

const now = new Date().toISOString().replace(/\.\d+Z$/, 'Z');
doc.generatedAt = now;
doc.sourceCanon.hashes = hashes;
doc.sourceCanon.reaffirmedAt = now;
if (!doc.audit || typeof doc.audit !== 'object') doc.audit = {};
doc.audit.producer = 'marketing/reaffirm-products.mjs (wave-19.37, trace 1a157fd40d380521)';

writeFileSync(FILE, JSON.stringify(doc, null, 2) + '\n');
console.log(`reaffirmed: ${sources.length} canon sources unchanged (sha256 recorded); generatedAt -> ${now}`);
