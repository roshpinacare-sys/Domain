#!/usr/bin/env node
/**
 * grid-doctor — the fleet truth machine (read-only, no keys, no broadcasts).
 *
 * Purpose (owner directive 2026-10-11, trace 1a12af86d9b689d5): the grid must
 * always treat itself according to its CURRENT state — measured from live chain
 * RPCs, never from self-reports or simulation books. Phantom numbers found in a
 * parallel agent's "verified" plan (3676 SP claimed vs 5.93 SP live on
 * headcorner) are exactly the disease this machine cures.
 *
 * Lane: measurement-only. STASIS explicitly keeps measurement lanes running.
 * Outputs:
 *   agents/grid-truth.json — machine book (append-per-run schema, latest wins)
 *   agents/grid-truth.md   — human book with per-account table + alerts
 * Alert kinds:
 *   ACCOUNT-MISSING | VP-EMPTY | VP-LOW | INACTIVE | STRANDED-CAPITAL |
 *   TREASURY-UNDERFLOOR | RPC-DEAD
 * Exit code: always 0 (observability must never be gated) — alerts are in the book.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const AG = __dirname;
const ROSTER = JSON.parse(fs.readFileSync(path.join(AG, 'grid-roster.json'), 'utf8'));
const OUT_JSON = path.join(AG, 'grid-truth.json');
const OUT_MD = path.join(AG, 'grid-truth.md');
const UA = 'saos-grid-doctor/1 (+https://github.com/roshpinacare-sys)';

function nowIso() { return new Date().toISOString(); }

async function rpc(chain, base, method, params, timeoutMs = 20000) {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), timeoutMs);
  try {
    const res = await fetch(base, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'user-agent': UA },
      body: JSON.stringify({ jsonrpc: '2.0', method, params, id: 1 }),
      signal: ctl.signal
    });
    const j = await res.json();
    if (j && j.error) throw new Error('rpc-error: ' + JSON.stringify(j.error).slice(0, 140));
    return j.result;
  } finally { clearTimeout(t); }
}

function vestsToToken(v) { return Number(String(v).split(' ')[0]) / 1e6; }
function tok(v) { return Number(String(v).split(' ')[0]); }

async function rcPct(chain, base, name) {
  if (chain === 'blurt') return null; // no rc_api assumed
  try {
    const r = await rpc(chain, base, 'rc_api.find_rc_accounts', { accounts: [name] });
    const a = r && r.rc_accounts && r.rc_accounts[0];
    if (!a || !a.max_rc) return null;
    return Math.max(0, Math.min(100, (Number(a.rc_manabar.current_mana) / Number(a.max_rc)) * 100));
  } catch (e) { return null; }
}

async function rpcRetry(chain, base, method, params, tries) {
  tries = tries || 3;
  let lastErr;
  for (let i = 0; i < tries; i++) {
    try { return await rpc(chain, base, method, params); }
    catch (e) { lastErr = e; await new Promise(r => setTimeout(r, 800 * (i + 1))); }
  }
  throw lastErr;
}

async function auditAccount(chain, base, spec, exp) {
  const name = spec.name;
  const out = { chain, account: name, role: spec.role, alerts: [] };
  try {
    const res = await rpcRetry(chain, base, 'condenser_api.get_accounts', [[name]]);
    const a = res && res[0];
    if (!a) { out.alerts.push({ kind: 'ACCOUNT-MISSING', detail: 'not found on ' + chain }); return out; }
    const ves = tok(a.vesting_shares), del = tok(a.delegated_vesting_shares), rec = tok(a.received_vesting_shares);
    const effVes = ves - del + rec;
    out.effective_power = effVes / 1e6; // SP / HP / BP
    out.liquid = tok(a.balance);
    out.sbd_like = tok(a.sbd_balance);
    out.delegated_out = del / 1e6;
    out.delegated_in = rec / 1e6;
    out.created = a.created;
    out.last_post = a.last_post;
    // voting power from manabar relative to effective vesting
    let vp = null;
    if (a.voting_manabar && effVes > 0) {
      vp = Math.max(0, Math.min(100, (Number(a.voting_manabar.current_mana) / effVes) * 100));
    } else if (a.voting_manabar) { vp = 0; }
    out.voting_power_pct = vp === null ? null : Math.round(vp * 10) / 10;
    out.rc_pct = null;
    // async fill below
    const rc = await rcPct(chain, base, name);
    out.rc_pct = rc === null ? null : Math.round(rc * 10) / 10;
    const daysSincePost = a.last_post && !a.last_post.startsWith('1970')
      ? (Date.now() - Date.parse(a.last_post)) / 86400000 : null;
    out.days_since_post = daysSincePost === null ? null : Math.round(daysSincePost * 10) / 10;

    const isActive = /worker-active|treasury|poster|connect-target/.test(spec.role);
    if (isActive && vp !== null && vp < (exp.vp_floor_pct || 20)) {
      out.alerts.push({ kind: 'VP-EMPTY', detail: 'vp=' + out.voting_power_pct + '% below floor ' + (exp.vp_floor_pct || 20) + '% — auto-voting drains mana' });
    }
    if (isActive && daysSincePost !== null && daysSincePost > (exp.active_post_max_age_days || 7)) {
      out.alerts.push({ kind: 'INACTIVE', detail: 'last post ' + out.days_since_post + 'd ago (role expects activity)' });
    }
    if (/keyless/.test(spec.role) && out.liquid > (exp.keyless_no_liquid_above || 1)) {
      out.alerts.push({ kind: 'STRANDED-CAPITAL', detail: 'keyless account holds ' + out.liquid + ' ' + chain.toUpperCase() + ' liquid — no custody, unrecoverable without key recovery' });
    }
    const floorKey = chain + ':' + name;
    const floor = exp.treasury_liquid_floor && exp.treasury_liquid_floor[floorKey];
    if (floor !== undefined && out.liquid < floor) {
      out.alerts.push({ kind: 'TREASURY-UNDERFLOOR', detail: 'liquid ' + out.liquid + ' below floor ' + floor + ' (note: grid ladder locks funds in open orders — check orders before panicking)' });
    }
  } catch (e) {
    out.alerts.push({ kind: 'RPC-DEAD', detail: String(e.message || e).slice(0, 120) });
  }
  return out;
}

async function main() {
  const exp = ROSTER.expectations || {};
  const chainsOut = {};
  const allAlerts = [];
  for (const [chain, cfg] of Object.entries(ROSTER.chains)) {
    const results = [];
    for (const spec of cfg.accounts) {
      const r = await auditAccount(chain, cfg.rpc, spec, exp);
      results.push(r);
      for (const al of r.alerts) allAlerts.push(chain + ':' + r.account + ' ' + al.kind + ' — ' + al.detail);
    }
    chainsOut[chain] = { rpc: cfg.rpc, accounts: results };
  }

  const totals = {};
  for (const [chain, c] of Object.entries(chainsOut)) {
    totals[chain] = {
      effective_power: Math.round(c.accounts.reduce((s, a) => s + (a.effective_power || 0), 0) * 1000) / 1000,
      liquid: Math.round(c.accounts.reduce((s, a) => s + (a.liquid || 0), 0) * 1000) / 1000,
      accounts_alive: c.accounts.filter(a => !a.alerts.some(x => x.kind === 'ACCOUNT-MISSING')).length
    };
  }

  const book = {
    schema: 'saos/grid-truth/1',
    generatedAt: nowIso(),
    by: 'grid-doctor',
    source: 'live chain RPC (api.steemit.com, api.hive.blog, blurt-rpc.saboin.com) — zero self-reports',
    totals,
    chains: chainsOut,
    alerts: allAlerts
  };
  fs.writeFileSync(OUT_JSON, JSON.stringify(book, null, 2) + '\n');

  const lines = [];
  lines.push('# GRID-TRUTH · ' + book.generatedAt + ' (live RPC, read-only)');
  lines.push('');
  lines.push('The anti-phantom book: every number below was measured from the chain this run.');
  lines.push('');
  lines.push('| chain | total effective power | total liquid | accounts alive |');
  lines.push('|---|---|---|---|');
  for (const [c, t] of Object.entries(totals)) {
    lines.push('| ' + c + ' | ' + t.effective_power + ' | ' + t.liquid + ' | ' + t.accounts_alive + ' |');
  }
  lines.push('');
  for (const [c, cfg] of Object.entries(chainsOut)) {
    lines.push('## ' + c.toUpperCase());
    lines.push('');
    lines.push('| account | role | eff power | liquid | VP% | RC% | last post | alerts |');
    lines.push('|---|---|---|---|---|---|---|---|');
    for (const a of cfg.accounts) {
      lines.push('| ' + a.account + ' | ' + (a.role || '') + ' | ' + (a.effective_power !== undefined ? a.effective_power : '—') + ' | ' + (a.liquid !== undefined ? a.liquid : '—') + ' | ' + (a.voting_power_pct === null || a.voting_power_pct === undefined ? '—' : a.voting_power_pct) + ' | ' + (a.rc_pct === null || a.rc_pct === undefined ? '—' : a.rc_pct) + ' | ' + (a.last_post || '—').slice(0, 10) + ' | ' + a.alerts.map(x => x.kind).join(',') + ' |');
    }
    lines.push('');
  }
  lines.push('## ALERTS (' + allAlerts.length + ')');
  lines.push('');
  if (!allAlerts.length) lines.push('none — fleet matches expectations');
  for (const al of allAlerts) lines.push('- ' + al);
  lines.push('');
  fs.writeFileSync(OUT_MD, lines.join('\n') + '\n');

  console.log('GRID-DOCTOR-DONE accounts=' + Object.values(chainsOut).reduce((s, c) => s + c.accounts.length, 0) + ' alerts=' + allAlerts.length);
  for (const al of allAlerts) console.log('GRID-ALERT ' + al);
}

main().catch(e => { console.error('GRID-DOCTOR-FATAL', e); process.exit(0); });
