#!/usr/bin/env node
/* R-bidi injection: add <script src="<depth>assets/bidi-fix.js" defer>
   to every dir="rtl" HTML page that doesn't already reference it.
   Idempotent — safe to re-run after every bake. */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, relative, dirname, sep } from 'node:path';

const ROOT = process.cwd();
const SKIP = new Set(['.git', 'node_modules', '.github']);
const pages = [];

function walk(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) { if (!SKIP.has(e.name)) walk(join(dir, e.name)); }
    else if (e.name.endsWith('.html')) pages.push(join(dir, e.name));
  }
}
walk(ROOT);

let injected = 0, already = 0, skippedNonRtl = 0;
for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  if (!/dir="rtl"/.test(html)) { skippedNonRtl++; continue; }
  /* covered = external tag OR inline variant (base-href pages inline the
     fix because a relative src is ambiguous under <base>) */
  if (html.includes('bidi-fix.js') || html.includes('__saosBidiFix')) { already++; continue; }
  const rel = relative(ROOT, file).split(sep);
  const depth = rel.length - 1; /* segments below root */
  const prefix = depth === 0 ? '' : '../'.repeat(depth);
  const tag = `<script src="${prefix}assets/bidi-fix.js" defer></script>\n`;
  if (html.includes('</body>')) {
    const out = html.replace(/<\/body>/i, `${tag}</body>`);
    writeFileSync(file, out);
    injected++;
  }
}
console.log(JSON.stringify({ scanned: pages.length, injected, already, skippedNonRtl }));
