#!/usr/bin/env node
/**
 * key-census — resolve WHICH secret actually holds the live authority WIF,
 * by bit-compare against the chain (zero key material printed, ever).
 *
 * Honesty law: the fleet had a stale STEEM_ACTIVE_WIF that does NOT match
 * headcorner's live active authority (measured 2026-10-11 in treasury-arm run
 * 38147358384 — "Missing Active Authority headcorner"). Secrets must be
 * census-ed, not assumed.
 *
 * Candidates may be: raw WIFs, base64(JSON) key bundles (SA_FLEET_KEYS —
 * every WIF-shaped string inside is tried), or master passwords (MAIN_KEY —
 * derived via auth.getPrivateKeys). Exported resolve() returns
 * { secretName, wif } | null and prints only MATCH/NO-MATCH lines.
 */
'use strict';
const WIF_RE = /^[5JK][1-9A-HJ-NP-Za-km-z]{50}$/;

function collectWifs(node, out) {
  out = out || [];
  if (typeof node === 'string') {
    const t = node.trim();
    if (WIF_RE.test(t)) out.push(t);
    else {
      /* base64(JSON) bundles / multiline envs: extract any WIF-shaped substring */
      const m = t.match(/[5JK][1-9A-HJ-NP-Za-km-z]{50}/g);
      if (m) out.push(...m);
      else {
        try {
          const dec = Buffer.from(t, 'base64').toString('utf8');
          if (dec && dec !== t) {
            try {
              const j = JSON.parse(dec);
              collectWifs(j, out);
            } catch (_) {
              const m2 = dec.match(/[5JK][1-9A-HJ-NP-Za-km-z]{50}/g);
              if (m2) out.push(...m2);
            }
          }
        } catch (_) { /* not base64 */ }
      }
    }
  } else if (Array.isArray(node)) node.forEach(x => collectWifs(x, out));
  else if (node && typeof node === 'object') Object.values(node).forEach(x => collectWifs(x, out));
  return out;
}

function livePubkey(acct, role) {
  const auth = acct && acct[role];
  if (!auth) return null;
  if (auth.key_auths && auth.key_auths[0] && auth.key_auths[0][0]) return auth.key_auths[0][0];
  if (auth.key) return auth.key;
  return null;
}

/**
 * resolve({ rpc, account, role, steem, candidates:[{name, env}] })
 * → { secretName, wif } | null ; prints census lines only.
 */
async function resolve(opts) {
  const { rpc, account, role, steem, candidates } = opts;
  const res = await rpc('condenser_api.get_accounts', [[account]]);
  const acct = (res || [])[0];
  if (!acct) { console.log('CENSUS-NO-ACCOUNT ' + account); return null; }
  const live = livePubkey(acct, role);
  if (!live) { console.log('CENSUS-NO-LIVE-AUTHORITY ' + account + ':' + role); return null; }
  for (const c of candidates) {
    const raw = (process.env[c.name] || '').trim();
    if (!raw) { console.log('CENSUS-ABSENT ' + c.name); continue; }
    const wifs = collectWifs(raw);
    for (const w of wifs) {
      try {
        if (steem.auth.wifToPublic(w) === live) {
          console.log('CENSUS-MATCH ' + c.name + ' → ' + account + ':' + role + ' (bit-exact vs live authority)');
          return { secretName: c.name, wif: w };
        }
      } catch (_) { /* not a valid wif */ }
    }
    /* master-password derivation */
    try {
      const keys = steem.auth.getPrivateKeys(account, raw, [role]);
      if (keys && keys[role] && steem.auth.wifToPublic(keys[role]) === live) {
        console.log('CENSUS-MATCH ' + c.name + ' (master-password derivation) → ' + account + ':' + role);
        return { secretName: c.name, wif: keys[role] };
      }
    } catch (_) { /* not a password */ }
    console.log('CENSUS-NO-MATCH ' + c.name + ' (' + wifs.length + ' wif-shapes tried)');
  }
  console.log('CENSUS-EXHAUSTED no candidate matches ' + account + ':' + role + ' — owner must provision the correct secret');
  return null;
}

module.exports = { resolve, collectWifs, livePubkey, WIF_RE };
