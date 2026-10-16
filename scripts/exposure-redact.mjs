#!/usr/bin/env node
// exposure-redact — PRODUCER-side redactor driven by exposure-rules.mjs (one law, two enforcers).
// Same patterns as the tree gate; replaces identity-bearing estate names with the public
// ref alias "acct-00" in place. Idempotent. Honest per-file counts on stdout. Zero secrets.
// Usage: node scripts/exposure-redact.mjs <file> [<file>...]
import { readFileSync, writeFileSync } from "node:fs";
import { FORBIDDEN_CONTENT } from "./exposure-rules.mjs";

// Only identity-bearing classes are REWRITABLE. Destructive classes (WIF shapes,
// key material, passphrase narratives) must FAIL the producer, never be rewritten —
// a redactor must not become a launderer. These classes carry no legitimate value
// inside a mirrored/published book, so in-place aliasing is safe for them.
const REWRITABLE_WHYS = [
  "owner account handle (any case/inflection)",
  "owner-only key identity",
  "owner-tied account @handle in narrative",
  "estate account name (fleet worker)",
  "estate account name (soldier fleet)",
  "estate account name (typo twin)",
  "estate account name (fleet worker)",
  "estate account name (retired)",
  "estate account name (legacy treasury)",
  "estate account handle (short token, identity context)",
];
const ALIAS = "acct-00";

let changed = 0;
for (const file of process.argv.slice(2)) {
  let body;
  try { body = readFileSync(file, "utf8"); } catch { console.log(`redact: ${file} absent — skipped`); continue; }
  const before = body;
  let n = 0;
  for (const { re, why } of FORBIDDEN_CONTENT) {
    if (!REWRITABLE_WHYS.includes(why)) continue;
    body = body.replace(new RegExp(re.source, re.flags.includes("g") ? re.flags : re.flags + "g"), (m) => { n++; return ALIAS; });
  }
  if (body !== before) { writeFileSync(file, body); changed++; console.log(`redact: ${file} — ${n} identity hits aliased to ${ALIAS}`); }
  else console.log(`redact: ${file} — clean (0 hits)`);
}
console.log(`redact: ${changed} file(s) rewritten`);
