#!/usr/bin/env node
/**
 * blurt-connect — connect the fleet's blurt accounts (owner mission 2026-10-11).
 *
 * Lane: connect (CR-0076, directives chain i=3). Tools: account_update + comment.
 * Flow per candidate account (cornerstone, headcorner):
 *   1. STASIS gate at sign time (fail-closed)
 *   2. additive posting-authority update signed with ACTIVE WIF (keeps existing posting keys!)
 *   3. read-back: posting auth contains the new pubkey
 *   4. verification comment signed with the dedicated POSTING key (BLURT_POSTING_WIF)
 *   5. honest book rows; first success wins; wrong-account attempts fail cleanly (authority error)
 * Idempotent: skips accounts whose posting auth already contains the pubkey.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const GATE = require('./capital-gate.cjs');
const steem = require('steem');

const AG = __dirname;
const PLAN = JSON.parse(fs.readFileSync(path.join(AG, 'treasury-plan.json'), 'utf8'));
const BLURT = PLAN.blurt;
const STATE_F = path.join(AG, 'blurt-connect-state.json');
const BOOK_F = path.join(AG, 'blurt-connect-book.md');

function nowIso() { return new Date().toISOString(); }
function loadState() { try { return JSON.parse(fs.readFileSync(STATE_F, 'utf8')); } catch (_) { return { schema: 'saos/blurt-connect-state/1', runs: [] }; } }
function saveState(s) { fs.writeFileSync(STATE_F, JSON.stringify(s, null, 2) + '\n'); }
const rows = [];
function row(op, detail, status) { rows.push('| ' + nowIso() + ' | ' + op + ' | ' + detail + ' | ' + status + ' |'); console.log('BLURT-CONNECT-' + status.toUpperCase() + ' ' + op + ' ' + detail); }
function commitBlock() { return ['', '## BLURT-CONNECT RUN · ' + nowIso(), '', '| at | op | detail | status |', '|---|---|---|---|', ...rows, ''].join('\n'); }
function book() { fs.appendFileSync(BOOK_F, commitBlock() + '\n'); }

const RPC = BLURT.rpc;
async function rpc(method, params) {
  const res = await fetch(RPC, { method: 'POST', headers: { 'content-type': 'application/json', 'user-agent': 'saos-blurt-connect/1' }, body: JSON.stringify({ jsonrpc: '2.0', method, params, id: 1 }) });
  const j = await res.json();
  if (j.error) throw new Error('rpc: ' + JSON.stringify(j.error).slice(0, 140));
  return j.result;
}

async function main() {
  const activeWif = process.env[BLURT.wif_env];
  const postingWif = process.env[BLURT.posting.wif_env];
  const newPub = BLURT.posting.pub;
  if (!activeWif) { row('gate', 'BLURT_ACTIVE_WIF missing', 'refused'); book(); process.exit(0); }
  if (!postingWif) { row('gate', 'BLURT_POSTING_WIF missing (set repo secret)', 'refused'); book(); process.exit(0); }

  /* gates BEFORE any signing */
  if (GATE.stasisHalt('account_update')) { row('gate', 'STASIS halt on account_update', 'gated'); book(); process.exit(0); }

  const dgp = await rpc('condenser_api.get_dynamic_global_properties', []);
  steem.api.setOptions({ url: RPC, useAppbase: false, address_prefix: 'BLT', chain_id: dgp.chain_id || '' });
  row('config', 'chain_id=' + String(dgp.chain_id || '').slice(0, 12) + '… head_block=' + dgp.head_block_number, 'ok');

  const state = loadState();
  const candidates = ['cornerstone', 'headcorner'];
  let connected = 0;

  for (const account of candidates) {
    if (!['cornerstone', 'headcorner'].includes(account)) continue; /* CR-0076 caps.accounts */
    const a = (await rpc('condenser_api.get_accounts', [[account]]))[0];
    if (!a) { row('check', '@' + account + ' not found on blurt', 'skip'); continue; }
    const posting = a.posting || { weight_threshold: 1, account_auths: [], key_auths: [] };
    const has = (posting.key_auths || []).some(k => k[0] === newPub) || a.posting && a.posting.key && a.posting.key === newPub;
    if (has) { row('check', '@' + account + ' posting auth already contains the grid posting key', 'idempotent-skip'); connected++; continue; }

    const newPosting = {
      weight_threshold: posting.weight_threshold || 1,
      account_auths: posting.account_auths || [],
      key_auths: [...(posting.key_auths || []), [newPub, 1]]
    };
    try {
      await new Promise((resolve, reject) => {
        steem.broadcast.accountUpdate(activeWif, account, null, null, newPosting, a.memo_key || '', a.json_metadata || {}, (e, r) => e ? reject(e) : resolve(r));
      });
      /* read-back */
      let verified = false;
      for (let i = 0; i < 6 && !verified; i++) {
        await new Promise(r => setTimeout(r, 4000));
        const chk = (await rpc('condenser_api.get_accounts', [[account]]))[0];
        if (chk && chk.posting && (chk.posting.key_auths || []).some(k => k[0] === newPub)) verified = true;
      }
      row('account_update', '@' + account + ' posting auth + grid key, read-back=' + verified, verified ? 'verified' : 'RED-UNVERIFIED');
      state.runs.push({ at: nowIso(), account, op: 'account_update', verified });
      if (!verified) { saveState(state); book(); process.exit(1); }
      connected++;
    } catch (e) {
      const msg = String(e.message || e);
      row('account_update', '@' + account + ' broadcast refused: ' + msg.slice(0, 100), 'no-authority-or-error');
      continue; /* wrong key for this account → clean no-op; next candidate */
    }
  }

  if (!connected) { row('summary', 'no account accepts BLURT_ACTIVE_WIF — key-account mapping unknown; owner must map the secret', 'RED-UNKNOWN-MAPPING'); saveState(state); book(); process.exit(1); }

  /* verification comment with the dedicated posting key */
  if (GATE.stasisHalt('comment')) { row('gate', 'STASIS halt on comment', 'gated'); saveState(state); book(); process.exit(0); }
  const accounts = [...new Set(state.runs.filter(r => r.op === 'account_update' && r.verified).map(r => r.account))];
  for (const author of accounts.slice(0, 2)) { /* connect lane cap: ≤2 comments per run */
    const d = new Date();
    const permlink = 'saos-connect-verify-' + d.toISOString().slice(0, 10).replace(/-/g, '') + '-' + Math.random().toString(36).slice(2, 7);
    const title = 'SAOS grid — Blurt connectivity verification';
    const body = [
      'This account is now connected to the SAOS sovereign grid posting pipeline (CI-native, GitHub-hosted).',
      '',
      'This is a **connectivity verification post** — it proves the posting path end-to-end: dedicated posting key, additive posting authority (existing keys untouched), and signed broadcast through the connect lane under hard caps and read-back verification.',
      '',
      'Disclosure: פורסם באמצעות אוטומציה / published via automation — part of the fleet coordination protocol (Sandbox/ops).',
      '',
      'Tags reflect the verification purpose. No financial content, no requests.',
      '',
      '- chain: blurt',
      '- lane: connect (CR-0076, directives chain i=3)',
      '- verified: read-back of posting authority + this signed post'
    ].join('\n');
    const json = JSON.stringify({ tags: ['blurt', 'saos', 'verification'], app: 'saos-grid-connect/1' });
    try {
      await new Promise((resolve, reject) => {
        steem.broadcast.comment(postingWif, '', 'blurt', author, permlink, title, body, json, (e, r) => e ? reject(e) : resolve(r));
      });
      let verified = false;
      for (let i = 0; i < 5 && !verified; i++) {
        await new Promise(r => setTimeout(r, 4000));
        const c = await rpc('condenser_api.get_content', [author, permlink]).catch(() => null);
        if (c && c.author === author) verified = true;
      }
      row('comment', '@' + author + ' permlink=' + permlink + ' read-back=' + verified, verified ? 'verified' : 'RED-UNVERIFIED');
      state.runs.push({ at: nowIso(), account: author, op: 'comment', permlink, verified });
    } catch (e) {
      row('comment', '@' + author + ' failed: ' + String(e.message || e).slice(0, 100), 'RED-FAILED');
    }
  }

  saveState(state);
  book();
  console.log('BLURT-CONNECT-DONE connected=' + connected);
  process.exit(0);
}

main().catch(e => { console.error('BLURT-CONNECT-FATAL', e); row('fatal', String(e.message || e).slice(0, 140), 'RED-FATAL'); book(); process.exit(1); });
