'use strict';
/**
 * capital-gate.selftest.cjs — וקטורים דטרמיניסטיים אופליין לשער-ההון המודע-מסילות (staged lanes)
 *   node agents/capital-gate.selftest.cjs  → אפס-רשת, אפס-מפתחות, אפס-כתיבה-למדינה-החיה
 *   (השער נבדק תמיד על עותק-חול שלו + STASIS.json פיקטיבי — המדינה-החיה לא נוגעת)
 * נולד ב-T-B (owner directive 2026-10-05, trace 1a10bfe1342b2391 — staged re-entry).
 * וקטור-החובה-המיוחד של הבית-הזה: קובץ-לא-קריאable → HALT (היה fail-open היסטורית — נסגר).
 */
const fs = require('fs');
const os = require('os');
const path = require('path');

const SRC = path.join(__dirname, 'capital-gate.cjs');

let failures = 0;
function t(name, ok) {
  console.log(`${ok ? ' ✓' : ' ✗'} ${name}`);
  if (!ok) failures++;
}

/* חול: עותק-בתים של השער + agents/STASIS.json פיקטיבי (השער קורא path.join(__dirname,'STASIS.json')) */
const SANDBOXES = [];
function loadWith(doc, captured) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'capgate-selftest-'));
  SANDBOXES.push(root);
  fs.mkdirSync(path.join(root, 'agents'), { recursive: true });
  fs.writeFileSync(path.join(root, 'agents', 'capital-gate.cjs'), fs.readFileSync(SRC, 'utf8'));
  if (doc !== null && doc !== undefined) {
    fs.writeFileSync(path.join(root, 'agents', 'STASIS.json'),
      typeof doc === 'string' ? doc : JSON.stringify(doc, null, 2));
  }
  const origLog = console.log;
  console.log = (...a) => { captured.lines.push(a.join(' ')); };
  try {
    delete require.cache[require.resolve(path.join(root, 'agents', 'capital-gate.cjs'))];
    return require(path.join(root, 'agents', 'capital-gate.cjs'));
  } finally { console.log = origLog; }
}

const STAGED = (allow) => ({
  protocol: 'SAOS-FATE-DEFENSE-STASIS/1', active: true, mode: 'staged',
  reason: 'selftest staged brake', since: '2026-10-05T00:00:00Z',
  stagedLanes: { allow, reason: 'selftest', since: '2026-10-05T00:00:00Z' },
});

function withCapture(fn, captured) {
  const origLog = console.log;
  console.log = (...a) => { captured.lines.push(a.join(' ')); };
  try { return fn(); } finally { console.log = origLog; }
}

const captured = { lines: [] };

/* 1) מורשת: active=true בלי-mode → עצירה מלאה */
let g = loadWith({ protocol: 'SAOS-FATE-DEFENSE-STASIS/1', active: true, reason: 'full brake' }, captured);
t('legacy active=true (no mode) halts even a claims tool', g.stasisHalt('daily-claim') === true);

/* 2) staged + מסילת-claims פתוחה → כלי-התביעות מותר עם קבלת STASIS-STAGED-ALLOW */
captured.lines.length = 0;
g = loadWith(STAGED(['grid', 'claims']), captured);
let ok = withCapture(() => g.stasisHalt('daily-claim') === false && g.stasisHalt('fleet-claim') === false, captured);
t('staged + allowed lane (claims) lets claim tools sign', ok);
t('allow path prints the STASIS-STAGED-ALLOW receipt with the lane', captured.lines.some((l) => /STASIS-STAGED-ALLOW daily-claim \(lane=claims\)/.test(l)));

/* 3) staged + מסילת-grid פתוחה → מכונת-הסולם מותרת */
captured.lines.length = 0;
g = loadWith(STAGED(['grid', 'claims']), captured);
ok = withCapture(() => g.stasisHalt('market-exec') === false, captured) && captured.lines.some((l) => /STASIS-STAGED-ALLOW market-exec \(lane=grid\)/.test(l));
t('staged + allowed lane (grid) lets the ladder machine sign', ok);

/* 4) staged + כלי-לא-מוכר → עצירה (fail-closed) */
captured.lines.length = 0;
g = loadWith(STAGED(['grid', 'claims']), captured);
ok = withCapture(() => g.stasisHalt('totally-unknown-tool') === true, captured) && captured.lines.some((l) => /STASIS-HALT totally-unknown-tool \(lane=general\)/.test(l));
t('staged + unknown tool halts on the general lane', ok);

/* 5) staged + כלים-אסורים → עצירה (המסילות-האסורות-נשארות-סגורות) */
g = loadWith(STAGED(['grid', 'claims']), captured);
t('staged does NOT open head-delegate (general lane)', g.stasisHalt('head-delegate') === true);
t('staged does NOT open treasury-desk (general lane)', g.stasisHalt('treasury-desk') === true);
t('staged does NOT open community-founder (general lane)', g.stasisHalt('community-founder') === true);
t('staged does NOT open blurt-curate (general lane — votes stay halted)', g.stasisHalt('blurt-curate') === true);

/* 6) active=true + mode=full → עצירה גם-למסילה-רשומה (הדגל-הראשי מנצח) */
g = loadWith({ protocol: 'SAOS-FATE-DEFENSE-STASIS/1', active: true, mode: 'full', reason: 'full brake', stagedLanes: { allow: ['claims'] } }, captured);
t('mode=full halts even a listed lane', g.stasisHalt('daily-claim') === true);

/* 7) קובץ-חסר → עצירה fail-closed (התיקון-המהותי: היה fail-open) */
captured.lines.length = 0;
g = loadWith(null, captured);
ok = withCapture(() => g.stasisHalt('daily-claim') === true, captured);
t('missing stasis file halts — fail-closed (was fail-open)', ok);
t('unreadable state prints the loud STASIS-STATE-UNREADABLE line', captured.lines.some((l) => /STASIS-STATE-UNREADABLE/.test(l)));

/* 8) קובץ-שבור → עצירה fail-closed */
g = loadWith('{ this is not json', captured);
const st = g.stasisState();
t('corrupt stasis file: state.active=true (halt) + loud reason', st.active === true && /fail-closed/.test(st.reason || ''));
t('corrupt stasis file: mode=full (no staged lanes open)', st.mode === 'full' && g.stasisHalt('market-exec') === true);

/* 9) הדגל-הראשי active=false → מותר (תאימות-אחורה מלאה) */
g = loadWith({ protocol: 'SAOS-FATE-DEFENSE-STASIS/1', active: false, reason: 'lifted' }, captured);
t('active=false still allows (full-lift backward compat)', g.stasisHalt('daily-claim') === false && g.stasisHalt('market-exec') === false && g.stasisHalt('head-delegate') === false);

/* 10) laneOf — המיפוי-המפורש עצמו */
g = loadWith(STAGED(['claims']), captured);
ok = g.laneOf('daily-claim') === 'claims' && g.laneOf('fleet-claim') === 'claims'
  && g.laneOf('market-exec') === 'grid'
  && g.laneOf('head-delegate') === 'general' && g.laneOf('pegout-hand') === 'general'
  && g.laneOf('econ-desk') === 'general' && g.laneOf('') === 'general' && g.laneOf(undefined) === 'general';
t('laneOf maps by audited op class; unknown → general', ok);

/* 11) תאימות: STASIS.json אמיתי-בבית-זה (mode=staged, active=true) → הסולם-והתביעות מותרות, יתר עצור */
const live = require(SRC);
t('live home file: staged lanes grid+claims honored (market-exec allowed)', live.stasisHalt('market-exec') === false);
t('live home file: staged lanes grid+claims honored (daily-claim allowed)', live.stasisHalt('daily-claim') === false);
t('live home file: general lane still halts (head-delegate)', live.stasisHalt('head-delegate') === true);

for (const s of SANDBOXES) fs.rmSync(s, { recursive: true, force: true });
console.log(failures ? 'capital-gate.selftest: FAIL' : 'capital-gate.selftest: all vectors PASS');
process.exit(failures ? 1 : 0);
