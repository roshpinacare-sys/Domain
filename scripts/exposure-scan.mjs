#!/usr/bin/env node
// exposure-scan — P0-1 enforcement (master plan T6, 2026-10-11)
// Law: hub/disclosure-policy.html — never publish key structure, recovery details,
// wallet addresses holding funds, internal operating procedures.
// Scans the PUBLIC surface of this repo and fails on any regression.
// Run locally: node scripts/exposure-scan.mjs
import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";

const FORBIDDEN_PATHS = [
  /^agent\/inspections\/INS-R\d+.*\.json$/,          // inspection receipts narrate custody
  /^receipts\/key-check(\.json|-log\.jsonl)$/,        // key-verification receipts
  /^about\/team\.json$/,                              // fleet desk roster
  /(^|\/)ssh-keys\.tar\.enc$/,                        // sealed key bundles
  /(^|\/)keys\.env(\.enc|\.bak.*)?$/,
  /(^|\/)vault\/.*\.enc$/,
];

// Content patterns are deliberately narrow to avoid false positives on engine code:
const FORBIDDEN_CONTENT = [
  { re: /hq\.password/i, why: "restoration passphrase pointer" },
  { re: /keysZipPass/i, why: "vault-zip passphrase pointer" },
  { re: /BEGIN (RSA |EC )?PRIVATE KEY/, why: "private key material" },
  { re: /(?:הסיסמה|המפתח) (?:היא|הוא|האמיתית)|מסמך העברת הסיסמה|הסיסמה של\s/i, why: "master-password narrative (disclosure, not form label)" },
  { re: /\b[5JKL][1-9A-HJ-NP-Za-km-z]{50,51}\b/, why: "WIF-shaped token (52-char base58)" },
  { re: /\b(?:mnemonic|seed[- ]phrase)\b[^\n]{0,40}\b(?:word|12|24)\b/i, why: "mnemonic phrase hint" },
];

const SCAN_GLOBS = [
  "receipts/**", "agent/inspections/**", "about/**", "public/**",
  "hub/**", "docs/**", "content/**", "press/**", "deck/**",
  "*.json", "*.jsonl", "*.md", "*.html",
];
const SKIP_RE = /(^|\/)(node_modules|\.git|gate-crypto\.js)/;

const tracked = execSync("git ls-files", { encoding: "utf8" })
  .split("\n").filter(Boolean);

const targets = tracked.filter((p) => {
  if (SKIP_RE.test(p)) return false;
  if (/^\.github\//.test(p)) return false;   // workflows reference secret *names* by design
  if (/^agents\/.*\.(mjs|cjs|js)$/.test(p)) return false; // engine code holds pattern literals
  if (/^(scripts|gate-crypto)/.test(p)) return false;
  return SCAN_GLOBS.some((g) => {
    if (g.endsWith("/**")) return p.startsWith(g.slice(0, -2));
    if (!g.includes("/")) return !p.includes("/") && p.endsWith(g.replace("*", ""));
    return false;
  });
});

const findings = [];

for (const p of tracked) {
  for (const fp of FORBIDDEN_PATHS) if (fp.test(p)) findings.push({ p, why: "forbidden path" });
}

for (const p of targets) {
  let body = "";
  try { body = readFileSync(p, "utf8"); } catch { continue; }
  for (const { re, why } of FORBIDDEN_CONTENT) {
    if (re.test(body)) findings.push({ p, why });
  }
}

if (findings.length) {
  console.error("EXPOSURE-GATE FAIL — public-surface violations found:\n");
  for (const f of findings.slice(0, 40)) console.error(`  ✗ ${f.p} — ${f.why}`);
  if (findings.length > 40) console.error(`  … and ${findings.length - 40} more`);
  console.error("\nLaw: hub/disclosure-policy.html · remediation: remove at HEAD, schedule history rewrite via owner DecisionQueue");
  process.exit(1);
}
console.log(`exposure-scan: PASS — ${targets.length} public-surface files scanned, 0 violations`);
