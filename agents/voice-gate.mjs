#!/usr/bin/env node
// voice-gate — the machine that enforces the house voice law on the LIVE site.
//
// Doctrine (trace 1a1321441, owner law): no machine fingerprints — no curly
// typographic quotes, no owner-directive quotes on public pages, no generic-AI
// vocabulary. The law is enforced by measurement, not by memory: this gate
// scans every live page listed in sitemap.xml and publishes truth/voice.json.
//
// Verdict law:
//   FAIL  — any typographic mark (curly quotes, visible or injected from JS
//           string templates) or personal-directive quote in visible text
//           (script/style excluded). Exit 1 ⇒ red run in public.
//   PASS  — zero marks. Generic-AI vocabulary (banned list, EN+HE) is REPORTED
//           as editorial findings with page+word counts, never hidden, never
//           red on its own (word choice is editorial judgment, marks are law).
//
// Zero secret material. Measures the deployed site, never the repo.

import { writeFileSync, readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = join(HERE, '..', 'truth', 'voice.json');
const BASE = 'https://roshpinacare-sys.github.io/Domain/';
const FETCH_TIMEOUT_MS = 15000;

const CURLY = /[\u201c\u201d\u2018\u2019]/g;
const PERSONAL = /(המפעיל ביקש|בהנחיית הבעלים|Owner instruction|ביקשתי|לפי בקשת|המפעיל שלי|האופרטור|The owner asked|operator asked|owner decision|owner action|owner asked|בהחלטת בעלים|הוראת המפעיל|המפעיל שאל|במילים של הבעלים)/g;
const VOCAB = [
  // Hebrew hype vocabulary
  'מהפכני', 'חדשנות', 'חדשני', 'פורץ דרך', 'פורץ-דרך', 'אולטימטיבי', 'מדהים', 'מושלמת', 'מושלם', 'אדיר', 'עוצמתי',
  // English AI-tell vocabulary
  'delve', 'robust', 'seamless', 'leverage', 'unlock', 'empower', 'journey', 'elevate', 'craft', 'comprehensive',
  'game-changing', 'revolutionary', 'cutting-edge',
];
const SKIP_PATTERNS = [/archive\//]; // the dated archive keeps the voice of its day — history is not rewritten

function visibleText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&');
}

// JS string bodies: the gate.html class of blindness — typographic marks that the
// visible-text scan never sees because a client-side template injects them into
// the DOM. The rendered page carries them, so they are law exactly like visible marks.
function scriptText(html) {
  return [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/gi)].map(m => m[1]).join('\n');
}

async function fetchText(url) {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), FETCH_TIMEOUT_MS);
  try {
    const r = await fetch(url, { signal: ctl.signal, headers: { 'User-Agent': 'saos-voice-gate' } });
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return await r.text();
  } finally { clearTimeout(t); }
}

// ── page list: the live sitemap (what crawlers see), noindex pages excluded ──
const smXml = await fetchText(BASE + 'sitemap.xml');
const allUrls = [...smXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
const urls = allUrls.filter(u => u.endsWith('.html') && !SKIP_PATTERNS.some(rx => rx.test(u)));

const marks = [];            // {page, kind, count} — law violations
const vocabulary = [];       // {page, word, count} — editorial findings
let scanned = 0, errors = 0;

for (const u of urls) {
  const page = u.replace(BASE, '') || 'index.html';
  try {
    const html = await fetchText(u + (u.includes('?') ? '&' : '?') + 'v=' + Date.now());
    const text = visibleText(html);
    const js = scriptText(html);
    const c = (text.match(CURLY) || []).length;
    const cj = (js.match(CURLY) || []).length;
    const p = (text.match(PERSONAL) || []).length;
    if (c) marks.push({ page, kind: 'curly-quotes', count: c });
    if (cj) marks.push({ page, kind: 'curly-quotes-js', count: cj });
    if (p) marks.push({ page, kind: 'personal-directive', count: p });
    for (const w of VOCAB) {
      // negation-honesty: "לא-מושלם" (not-perfect) is the anti-hype — strip the
      // negated form before counting so the spotlight never flags honesty itself
      const t2 = text.replace(new RegExp('לא[- ]' + w, 'g'), '');
      const n = t2.split(w).length - 1;
      if (n) vocabulary.push({ page, word: w, count: n });
    }
    scanned++;
  } catch (e) {
    errors++;
    marks.push({ page, kind: 'fetch-error', count: 1, note: String(e.message || e).slice(0, 80) });
  }
}

const prev = existsSync(OUT) ? (() => { try { return JSON.parse(readFileSync(OUT, 'utf8')); } catch { return null; } })() : null;
const markTotal = marks.reduce((s, m) => s + m.count, 0);
const verdict = markTotal === 0 ? 'PASS' : 'FAIL';
const report = {
  schema: 'saos/voice-gate/1',
  runner: 'github-actions',
  at: new Date().toISOString(),
  target: BASE,
  verdict,
  pagesScanned: scanned,
  fetchErrors: errors,
  marks,
  markTotal,
  vocabularyFindings: vocabulary,
  vocabularyTotal: vocabulary.reduce((s, v) => s + v.count, 0),
  law: 'typographic marks (visible and JS-injected) and personal directives are law (red); generic-AI vocabulary is editorial (reported)',
  prevVerdict: prev ? prev.verdict : null,
};
writeFileSync(OUT, JSON.stringify(report, null, 1) + '\n');
console.log(`voice-gate: ${verdict} · pages=${scanned} marks=${markTotal} vocab=${report.vocabularyTotal}`);
if (verdict === 'FAIL') {
  for (const m of marks) console.error(`::error::voice-law ${m.kind} ×${m.count} on ${m.page}`);
  process.exit(1);
}
