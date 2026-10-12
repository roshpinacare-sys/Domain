#!/usr/bin/env node
// exposure-scan — P0-1 enforcement (master plan T6) — v2, Task A-EXPOSURE-2 (2026-10-12)
// Law: hub/disclosure-policy.html + Sandbox/ops/PUBLISHING-POLICY.json —
//   never publish: owner identity/account linkage, key structure or key-file paths,
//   master-password narrative, owner verbatim quotes, owner chat/trace ids,
//   host filesystem paths, holdings tied to a named account.
// Scans EVERY tracked file of this public repo (workflows + engine + books included),
// except office3d/** (separate deployment lane) and this scanner itself.
// Run locally: node scripts/exposure-scan.mjs — exits non-zero on any violation.
// NOTE: pattern literals are assembled from parts so this scanner never matches itself.
import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";

// assembled literals (self-scan-safe)
const HC = ["head", "corner"].join("");
const TOVH = ["tov", "-hive"].join("");
const CASHM = ["@cash", "machine"].join("");
const UPLOAD_HC = ["upload/", HC].join("");
const MP = ["master", " password"].join("");
const MPH = ["master", "-password"].join("");
const SIMA = ["סיסמת", "-האב"].join("");
const HZ = ["/home", "/z/"].join("");
const TR = ["trace-1a", "12"].join("");
const TRHEX = ["1a12", "fff10c"].join("");
// v3 (19-a): estate-name law — no estate account names anywhere in the public tree.
// Distinctive tokens scan bare; short collision-prone tokens (wic/woq/wog/siq/tov/lsa)
// are scrubbed by the engines' refs layer (agents/refs.mjs) and checked contextually here.
const RX = (parts, flags = "i") => new RegExp(parts.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join(""), flags);
const ESTATE_NAMES = [
  { parts: ["cash", "machine"], why: "estate account name (fleet worker)" },
  { parts: ["hcs", "oldier"], re: null, why: "estate account name (soldier fleet)" },
  { parts: ["headc", "oner"], why: "estate account name (typo twin)" },
  { parts: ["israel", "news"], why: "estate account name (fleet worker)" },
  { parts: ["ha", "ran"], word: true, why: "estate account name (fleet worker)" },
  { parts: ["y", "net"], word: true, why: "estate account name (retired)" },
  { parts: ["corner", "stone"], word: true, why: "estate account name (legacy treasury)" },
].map(({ parts, word, why }) => ({ re: word ? new RegExp("\\b" + RX(parts).source + "\\b", "i") : RX(parts), why }));
// short tokens: only in identity-bearing contexts (@handle, quoted keys/values)
// (macrame is also a legitimate craft topic in post bodies — identity contexts only)
const SHORT_ESTATE = ["wic", "woq", "wog", "siq", "tov", "lsa", "macrame"]
  .map((n) => ({ re: new RegExp("[@\"']" + n + "[@\"':,\\s\\])}]", "i"), why: "estate account handle (short token, identity context)" }));

const FORBIDDEN_PATHS = [
  /^agent\/inspections\/INS-R\d+.*\.json$/,          // inspection receipts narrate custody
  /^receipts\/key-check(\.json|-log\.jsonl)$/,        // key-verification receipts
  /^about\/team\.json$/,                              // fleet desk roster
  /^agents\/personas\.json$/,                         // T3/P0-1: coordination doctrine (roster+desks) — sealed store only
  /^agents\/persona-slots\.json$/,                    // T3/P0-1: cadence windows/weights/budgets — sealed store only
  /^agents\/community-founder\.json$/,                // T-70: estate book (identity-bearing account names) — CI-workspace only, never committed
  /(^|\/)ssh-keys\.tar\.enc$/,                        // sealed key bundles
  /(^|\/)keys\.env(\.enc|\.bak.*)?$/,
  /(^|\/)vault\/.*\.enc$/,
];

// Content patterns — identity, key-mechanics, custody narrative, host paths, chat ids.
const FORBIDDEN_CONTENT = [
  { re: new RegExp(HC, "i"), why: "owner account handle (any case/inflection)" },
  { re: new RegExp(TOVH, "i"), why: "owner-only key identity" },
  { re: new RegExp(CASHM, "i"), why: "owner-tied account @handle in narrative" },
  ...ESTATE_NAMES,
  ...SHORT_ESTATE,
  { re: new RegExp(UPLOAD_HC, "i"), why: "key-file path" },
  { re: new RegExp(MP, "i"), why: "master-password narrative" },
  { re: new RegExp(MPH, "i"), why: "master-password classification label" },
  { re: new RegExp(SIMA, "i"), why: "master-password narrative (Hebrew)" },
  { re: new RegExp(HZ, "i"), why: "host filesystem path" },
  { re: new RegExp(TR, "i"), why: "owner chat trace id" },
  { re: new RegExp(TRHEX, "i"), why: "owner chat trace hex" },
  { re: /hq\.password/i, why: "restoration passphrase pointer" },
  { re: /keysZipPass/i, why: "vault-zip passphrase pointer" },
  { re: /BEGIN (RSA |EC )?PRIVATE KEY/, why: "private key material" },
  { re: /(?:הסיסמה|המפתח) (?:היא|הוא|האמיתית)|מסמך העברת הסיסמה|הסיסמה של\s/i, why: "master-password narrative (disclosure, not form label)" },
  { re: /\b[5JKL][1-9A-HJ-NP-Za-km-z]{50,51}\b/, why: "WIF-shaped token (52-char base58)" },
  { re: /\b(?:mnemonic|seed[- ]phrase)\b[^\n]{0,40}\b(?:word|12|24)\b/i, why: "mnemonic phrase hint" },
];

const SKIP_RE = /(^|\/)(node_modules|\.git)\//;
const LANE_SKIP = /^office3d\//;        // parallel deployment lane (do-not-touch zone)
const SELF = /^scripts\/exposure-scan\.mjs$/;
// Narrow waiver: engine code implements the custody contract of the PRIVATE checkout
// (agent/recovery-meta.json lives in the private steem repo, never here). The field
// name keysZipPass is that cross-repo contract — renaming it one-sidedly breaks
// custody unlock. Every other pattern still applies to engine code at full strength.
const ENGINE_RE = /^(agents\/.*\.(cjs|mjs)|scripts\/.*\.mjs)$/;
const ENGINE_WAIVED = /keysZipPass/;

const tracked = execSync("git ls-files", { encoding: "utf8" })
  .split("\n").filter(Boolean);

const targets = tracked.filter((p) => !SKIP_RE.test(p) && !LANE_SKIP.test(p) && !SELF.test(p));

const findings = [];

for (const p of tracked) {
  for (const fp of FORBIDDEN_PATHS) if (fp.test(p)) findings.push({ p, why: "forbidden path" });
}

for (const p of targets) {
  let body = "";
  try { body = readFileSync(p, "utf8"); } catch { continue; }
  if (body.includes("\u0000")) continue; // binary
  const waived = ENGINE_RE.test(p) && ENGINE_WAIVED;
  for (const { re, why } of FORBIDDEN_CONTENT) {
    if (waived && re.source === "keysZipPass") continue;
    if (re.test(body)) findings.push({ p, why });
  }
}

if (findings.length) {
  console.error("EXPOSURE-GATE FAIL — public-surface violations found:\n");
  for (const f of findings.slice(0, 40)) console.error(`  x ${f.p} — ${f.why}`);
  if (findings.length > 40) console.error(`  ... and ${findings.length - 40} more`);
  console.error("\nLaw: hub/disclosure-policy.html + PUBLISHING-POLICY.json (Sandbox/ops) - remediation: remove at HEAD; history rewrite is an owner decision only");
  process.exit(1);
}
console.log(`exposure-scan: PASS — ${targets.length} files scanned (full tree, office3d lane excluded), 0 violations`);
