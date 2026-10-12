/**
 * keys-census — THE one-shot key truth tool. Owner law: "אני לא רוצה לשמוע על זה יותר".
 *
 * WHY: rounds burned on key archaeology because material arrives in many formats
 * (uncompressed WIF 37B, compressed WIF 38B, P-prefixed WIF, password-derivation)
 * and files arrive MISLABELED. This tool measures EVERYTHING in one pass and
 * writes a receipt. Zero secret material in output or receipt — fingerprints
 * and labels only.
 *
 * EXPOSURE-SAFE BY CONSTRUCTION (v2, after the sanitizer-twin incident):
 *  - NO account names, NO credential-file names, NO absolute /home/... paths
 *    are hardcoded in this committed file. Everything is discovered at runtime:
 *    · paths derive from $HOME (env HOME)
 *    · candidate accounts come from the vault's own usernames
 *    · candidate credentials come from scanning the secrets dir + estate env
 *  - The sanitizer twin's hardcode-rename (dbdbb585/81301753) broke function:
 *    a tool that measures LIVE chain state cannot carry a renamed fake handle.
 *
 * What it proves (fail-loud):
 *  1. Every decodable secret on this machine → which live account/role it controls (STEEM+HIVE).
 *  2. Which raw credential derives ANY vault account's live authorities (steemit login law).
 *  3. Which raw credential matches the operator gate's salted hash.
 *
 * Run:  bun agents/keys-census.mjs   (from the Domain repo; exit 0 always)
 */
import { readFileSync, readdirSync, mkdirSync, writeFileSync, existsSync } from "fs";
import { createHash } from "crypto";
import { homedir } from "os";

// ---------- tiny base58 (no deps beyond noble for pubkey) ----------
const B58 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
function b58decode(s) {
  let num = 0n;
  for (const c of s) { const i = B58.indexOf(c); if (i < 0) throw new Error("char"); num = num * 58n + BigInt(i); }
  let hex = num.toString(16); if (hex.length % 2) hex = "0" + hex;
  const bytes = Buffer.from(hex, "hex");
  let zeros = 0; for (const c of s) { if (c === "1") zeros++; else break; }
  return Buffer.concat([Buffer.alloc(zeros), bytes]);
}
function b58encode(buf) {
  let num = BigInt("0x" + buf.toString("hex"));
  let out = "";
  while (num > 0n) { out = B58[Number(num % 58n)] + out; num /= 58n; }
  for (const b of buf) { if (b === 0) out = "1" + out; else break; }
  return out;
}
const sha256b = (b) => createHash("sha256").update(b).digest();

// ---------- runtime-discovered paths (no handles committed) ----------
const HOME = process.env.HOME || homedir();
const P = (...a) => a.join("/");
// 25-a fix (TDZ crash): P was used by the secp loader BEFORE its old definition
// site — `Cannot access 'P' before initialization` killed the tool at startup
// (measured 2026-10-12 21:0xZ). Paths/P now live above every use.
const KEYS_DIR = P(HOME, ".secrets/keys");
const VAULT = P(HOME, ".secrets/vault-unsealed/agent/keys/vault.json");
const ESTATE_ENV = P(HOME, "estate/.env.local");
const GATE_CONFIG = P(HOME, ".operator/config.json");
const RECEIPTS = P(process.cwd(), "agents/receipts");

// ---------- pubkey derivation ----------
let secp = null;
for (const p of ["@noble/secp256k1", process.env.NOBLE_SECP256K1_PATH, P("file://", HOME, "/estate/steem/mini-services/saos-engine/node_modules/@noble/secp256k1/index.js")].filter(Boolean)) {
  try { secp = await import(p); break; } catch {}
}
if (!secp) { console.log("FATAL: no secp256k1 lib — run `bun add @noble/secp256k1` in this repo"); process.exit(0); }
const stp = (sec) => new Uint8Array(secp.getPublicKey(Buffer.from(sec), true));
function chainPub(sec, prefix = "STM") {
  const pub = stp(sec);
  const chk = createHash("ripemd160").update(Buffer.from(pub)).digest().slice(0, 4);
  return prefix + b58encode(Buffer.concat([Buffer.from(pub), chk]));
}

// ---------- universal WIF decode (37B + 38B compressed + P-prefix) ----------
function decodeAny(t) {
  const clean = t.trim();
  const body = clean.startsWith("P") && clean.length >= 51 ? clean.slice(1) : clean;
  if (!/^[15HJKNL][1-9A-HJ-NP-Za-km-z]{48,52}$/.test(body)) return null;
  let raw; try { raw = b58decode(body); } catch { return null; }
  if ((raw.length !== 37 && raw.length !== 38) || raw[0] !== 0x80) return null;
  const payload = raw.slice(0, raw.length - 4);
  if (!sha256b(sha256b(payload)).slice(0, 4).equals(raw.slice(raw.length - 4))) return null;
  return raw.slice(1, 33);
}

// ---------- runtime-discovered paths (no handles committed) ----------
// (paths moved ABOVE the secp loader — 25-a TDZ fix; see comment there)

// ---------- collect secrets + raw credential candidates ----------
const secrets = []; // {label, sec}
const rawCreds = []; // {label, val}
const addFile = (label, txt) => {
  for (const tok of txt.split(/[^1-9A-HJ-NP-Za-km-z]+/)) {
    if (tok.length < 48 || tok.length > 55) continue;
    const sec = decodeAny(tok);
    if (sec) secrets.push({ label: label + ":wif", sec });
  }
};
if (existsSync(KEYS_DIR)) {
  for (const f of readdirSync(KEYS_DIR)) {
    try { const txt = readFileSync(P(KEYS_DIR, f), "utf8"); addFile("keys-dir", txt); const t = txt.trim(); if (t && t.length <= 120 && !t.includes("\n")) rawCreds.push({ label: "keys-dir-cred", val: t }); } catch {}
  }
}
let vaultAccounts = [];
try {
  const v = JSON.parse(readFileSync(VAULT, "utf8"));
  const walk = (o, p) => {
    if (typeof o === "string") {
      const sec = decodeAny(o);
      if (sec) secrets.push({ label: "vault:" + p, sec });
      else if (o.trim().length >= 8 && o.trim().length <= 120) rawCreds.push({ label: "vault-cred", val: o.trim() });
    } else if (Array.isArray(o)) o.forEach((x, i) => walk(x, p + "[" + i + "]"));
    else if (o && typeof o === "object") for (const k of Object.keys(o)) walk(o[k], p ? p + "." + k : k);
  };
  walk(v, "");
  vaultAccounts = (v.accounts || []).map(a => ({ name: (a.username || a.name || "?").toLowerCase(), mode: a.mode || "?" }));
} catch {}

// ---------- pseudonym refs (exposure law: no account-name maps in committed receipts or public logs) ----------
// Stable refs derive from vault order (deterministic on the same machine); the true-name
// mapping never leaves this process — the receipt/proofs stay readable per vault index.
const REFS = new Map();
function ref(name) {
  if (!REFS.has(name)) REFS.set(name, "acct-" + String(REFS.size).padStart(2, "0"));
  return REFS.get(name);
}
function refHits(hits) {
  return hits.map((h) => { const [ch, acct, role] = h.split(":"); return ch + ":" + ref(acct) + ":" + role; });
}
if (existsSync(ESTATE_ENV)) {
  for (const ln of readFileSync(ESTATE_ENV, "utf8").split(/\r?\n/)) {
    const m = ln.match(/^([A-Za-z_0-9]+)=(.*)$/);
    if (!m) continue;
    const val = m[2].trim().replace(/^["']|["']$/, "");
    const sec = decodeAny(val);
    if (sec) secrets.push({ label: "env-wif:" + (m[1].includes("MASTER") ? "master-var" : "wif-var:" + m[1].slice(-1)), sec });
    else if (val && val.length <= 120) rawCreds.push({ label: m[1].match(/MASTER|PASS|KEY|TOKEN/) ? "env-master-cand" : "env-cred", val });
  }
}
// dedupe credential candidates by value (labels collapse)
const seenVal = new Set();
const creds = rawCreds.filter(c => { const k = c.val; if (seenVal.has(k)) return false; seenVal.add(k); return true; });

// ---------- live authorities for ALL candidate accounts ----------
// candidates: vault usernames (when the vault is unsealed) + CENSUS_CANDIDATES
// env (comma-separated, runtime-supplied — zero names committed in code).
const envCands = (process.env.CENSUS_CANDIDATES || "")
  .split(",").map(s => s.trim().toLowerCase()).filter(n => /^[a-z0-9-]{3,20}$/.test(n));
const CANDS = [...new Set([...vaultAccounts.map(a => a.name).filter(n => /^[a-z0-9-]{3,20}$/.test(n)), ...envCands])];
if (!CANDS.length) {
  console.log("CANDIDATES: none discovered (vault.json missing AND no CENSUS_CANDIDATES env) —");
  console.log("  the counts below would be an EMPTY shell, not a census. Fail-loud: supply the roster");
  console.log("  via CENSUS_CANDIDATES (comma-separated names) or unseal the vault, then re-run.");
  process.exit(0);
}

// 25-a hardening (HIVE=0 drift): the old rpc() was ONE attempt against ONE
// endpoint — a single condenser flake zeroed the whole channel and the census
// printed HIVE=0 as if measured (Task 23 vs Round-16 drift). Now: per-channel
// endpoint fallback + retry round + recorded rpcErrors (fail-loud, no silent 0).
const ENDPOINTS = {
  STEEM: ["https://api.steemit.com", "https://api.steemitdev.com"],
  HIVE: ["https://api.hive.blog", "https://api.openhive.network"],
};
const rpcErrors = {};
async function rpc(ch, method, params) {
  const errs = [];
  for (let round = 1; round <= 2; round++) {
    for (const url of ENDPOINTS[ch]) {
      try {
        const r = await fetch(url, { method: "POST", headers: { "content-type": "application/json", "user-agent": "keys-census" }, body: JSON.stringify({ jsonrpc: "2.0", method, params, id: 1 }), signal: AbortSignal.timeout(15000) });
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        const j = await r.json();
        if (j.error) throw new Error(JSON.stringify(j.error).slice(0, 60));
        return j.result;
      } catch (e) { errs.push(`${url.replace("https://", "")}: ${String(e.message).slice(0, 50)}`); }
    }
    if (round === 1) await new Promise(res => setTimeout(res, 2000)); // backoff before the retry round
  }
  rpcErrors[ch] = errs.join(" | ").slice(0, 200);
  throw new Error(`all ${ENDPOINTS[ch].length} endpoints x2 rounds failed`);
}
const live = {};
for (const ch of Object.keys(ENDPOINTS)) {
  live[ch] = {};
  try {
    const accs = await rpc(ch, "condenser_api.get_accounts", [CANDS]);
    for (const a of accs.filter(Boolean)) live[ch][a.name] = {
      posting: a.posting.key_auths.map(k => k[0]), active: a.active.key_auths.map(k => k[0]),
      owner: a.owner.key_auths.map(k => k[0]), memo: [a.memo_key],
    };
  } catch (e) { console.log(ch + " RPC-ERR " + e.message.slice(0, 60)); }
}

// ---------- 1) held keys vs chain ----------
console.log("=== KEYS-CENSUS " + new Date().toISOString() + " (runtime-discovered, zero committed handles) ===");
console.log(`secrets decoded: ${secrets.length} | credential candidates: ${creds.length} | candidates discovered: ${CANDS.length} (vault=${vaultAccounts.length} env=${envCands.length}) | live on chain: STEEM=${Object.keys(live.STEEM).length} HIVE=${Object.keys(live.HIVE).length}${rpcErrors.STEEM ? " | STEEM RPC-ERR (see receipt)" : ""}${rpcErrors.HIVE ? " | HIVE RPC-ERR (see receipt)" : ""}`);
const matchLines = [];
for (const s of secrets) {
  const pub = chainPub(s.sec);
  const hits = [];
  for (const ch of Object.keys(live)) for (const acct of Object.keys(live[ch])) for (const role of Object.keys(live[ch][acct]))
    if (live[ch][acct][role].includes(pub)) hits.push(`${ch}:${acct}:${role}`);
  if (hits.length) matchLines.push(`${s.label} pub:${pub.slice(0, 12)}… → ${refHits(hits).join(", ")}`);
}
console.log(matchLines.length ? "HELD AUTHORITY:\n  " + matchLines.join("\n  ") : "HELD AUTHORITY: none of the decoded keys control any live account");

// ---------- 2) steemit login proof (generic law, per password-derived vault account) ----------
const loginProofs = [];
for (const acct of vaultAccounts.filter(a => a.mode.includes("password"))) {
  for (const c of creds) {
    for (const ch of Object.keys(live)) {
      if (!live[ch][acct.name]) continue;
      const matched = [];
      for (const role of ["posting", "active", "owner", "memo"]) {
        const seed = sha256b(Buffer.from(acct.name + role + c.val));
        if (live[ch][acct.name][role].includes(chainPub(seed))) matched.push(role);
      }
      if (matched.length) loginProofs.push(`STEEMIT-LOGIN ${c.label} → ${ch}:${ref(acct.name)} ${matched.join(",")} (law: sha256(name+role+password))`);
    }
  }
}
console.log(loginProofs.length ? loginProofs.join("\n") : "STEEMIT-LOGIN: no candidate derives any password-derived account's live authorities");

// ---------- 3) operator gate proof ----------
let gateProof = "GATE: config missing";
try {
  const cfg = JSON.parse(readFileSync(GATE_CONFIG, "utf8"));
  for (const c of creds) {
    if (createHash("sha256").update(cfg.salt + c.val).digest("hex") === cfg.hash) {
      gateProof = `GATE ${c.label} → salted-sha256 MATCH (operator gate credential)`;
    }
  }
} catch {}
console.log(gateProof);

// ---------- receipt (labels/fingerprints only; accounts appear as stable pseudonym refs) ----------
const receipt = {
  at: new Date().toISOString(),
  decodedSecrets: secrets.length,
  credentialCandidates: creds.length,
  vaultAccounts: vaultAccounts.map(a => ref(a.name)),
  liveOnChain: Object.fromEntries(Object.entries(live).map(([ch, m]) => [ch, Object.keys(m).map(ref)])),
  rpcErrors, // 25-a: channel failures recorded in the receipt — a flake must never masquerade as a measured 0
  candidateSources: { vault: vaultAccounts.length, env: envCands.length },
  heldAuthority: matchLines,
  steemitLogin: loginProofs,
  gate: gateProof,
  note: "zero secret material; zero account names (stable pseudonym refs, vault-order deterministic; true mapping stays on the operator machine); paths discovered at runtime",
};
try {
  mkdirSync(RECEIPTS, { recursive: true });
  const out = P(RECEIPTS, "keys-census-" + new Date().toISOString().slice(0, 10) + ".json");
  writeFileSync(out, JSON.stringify(receipt, null, 2));
  console.log("receipt written (local, staged for commit)");
} catch {}
console.log("VERDICT: " + (matchLines.length || loginProofs.length ? "KEYS OPERATIONAL" : "NO OPERATIONAL KEYS — fail-loud"));
