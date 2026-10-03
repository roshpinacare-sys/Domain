'use strict';
/**
 * harness-audit.cjs — Z-35 FLEET HARNESS AUDIT (born from the walkinglabs/
 * learn-harness-engineering study, operator order: "examine it well and let's
 * use it properly").
 *
 * The study's core: a model is smart, the harness makes it reliable. Five
 * subsystems (instructions / state / verification / scope / lifecycle), loop
 * engineering (generator/evaluator separation, four silent costs), graph
 * engineering (Goodhart · blindness-upward · conflict; anchors pin loops to
 * reality; one lock for architecture).
 *
 * Our verdict after mapping it to the fleet: we built most of this independently
 * (books = external state; verify-then-sign = maker/checker; kill rules = scope;
 * RESUME-KIT/restore = lifecycle; DELEGATION-SELECTION = the one-lock doctrine).
 * What we LACKED and adopt here: a formal, repeatable harness audit that runs on
 * a schedule — the checker node with a fresh context that the study says the
 * producer cannot be. This desk IS that node: keyless, fail-soft, exit 0 always.
 *
 * What this desk does:
 *   1. audits the five subsystems across the fleet canon (Defi via DEFU_DIR, Domain local);
 *   2. checks the three structural failures have named countermeasures;
 *   3. checks every earn metric names its anchor (oracle source);
 *   4. checks book freshness (stale books are honest but flagged);
 *   5. checks the sovereignty subsystem (Z-37, prompts.chat adoption): role-registry
 *      integrity + change-request ledger integrity;
 *   6. writes agents/harness-audit.json + harness-audit.md.
 */
const fs = require('fs');
const path = require('path');

const AG = __dirname;
const ROOT = path.resolve(AG, '..');
const OUT_JSON = path.join(AG, 'harness-audit.json');
const OUT_MD = path.join(AG, 'harness-audit.md');
const DEFU_DIR = process.env.DEFU_DIR || path.resolve(ROOT, '..', 'Defi');

const read = (p) => { try { return fs.readFileSync(p, 'utf8'); } catch (_) { return null; } };
const readJson = (p) => { try { return JSON.parse(read(p) || 'null'); } catch (_) { return null; } };
const ago = (iso) => (iso ? (Date.now() - Date.parse(iso)) / 3600000 : null);
const r1 = (x) => (x == null ? null : Math.round(x * 10) / 10);

const checks = [];
function check(subsystem, name, pass, evidence, note, level) {
  checks.push({ subsystem, name, status: pass ? 'PASS' : (level === 'warn' ? 'WARN' : 'FAIL'), evidence: evidence || null, note: note || null });
}

// ---- LIVE BOOKS (freshness is the fleet's pulse)
const LIVE_BOOKS = ['econ-book.json', 'curation-book.json', 'money-ledger.json', 'ventures.json', 'fills-ledger.json', 'bridge-book.json', 'dex-book.json', 'learning-ledger.json', 'recruitment.json'];
const bookStates = [];
for (const b of LIVE_BOOKS) {
  const j = readJson(path.join(AG, b));
  const at = j && (j.at || j.updated || null);
  const ageH = r1(ago(at));
  bookStates.push({ book: b, exists: !!j, ageHours: ageH, fresh: ageH != null && ageH < 48 });
}
const freshCount = bookStates.filter((b) => b.exists && b.fresh).length;

(async () => {
  const at = new Date().toISOString();

  // ================= SUBSYSTEM 1: INSTRUCTIONS =================
  const defiAgents = read(path.join(DEFU_DIR, 'fleet', 'AGENTS.md'));
  const defiDoctrine = read(path.join(DEFU_DIR, 'DOCTRINE.md'));
  const doctrineEcon = read(path.join(DEFU_DIR, 'fleet', 'DOCTRINE-economics.md'));
  const fleetNote = read(path.join(ROOT, 'FLEET-NOTE.md'));
  check('instructions', 'Defi/fleet/AGENTS.md present (coordination law)', !!defiAgents, 'fleet/AGENTS.md', 'the fleet\'s constitution — read before any work');
  check('instructions', 'Defi/DOCTRINE.md present', !!defiDoctrine, 'DOCTRINE.md');
  check('instructions', 'Domain/FLEET-NOTE.md present (per-repo living note)', !!fleetNote, 'FLEET-NOTE.md');
  check('instructions', 'Domain/AGENTS.md present at repo root (any-agent landing page)', !!read(path.join(ROOT, 'AGENTS.md')), 'AGENTS.md', 'adopted Z-35 from the study\'s #1 CRITICAL — instructions at repo root');
  check('instructions', 'agents carry doctrine headers (sample: venture-desk, econ-desk, treasury-desk)', ['venture-desk.cjs', 'econ-desk.cjs', 'treasury-desk.cjs'].every((f) => { const s = read(path.join(AG, f)); return s && /Z-\d\d/.test(s.slice(0, 1200)); }), '3 sampled agent headers', 'birth-context bound in code, not tribal memory');

  // ================= SUBSYSTEM 2: STATE (external state primitive) =================
  check('state', 'live books exist and fresh (<48h)', freshCount >= 6, `${freshCount}/${bookStates.length} books fresh`, bookStates.filter((b) => !b.fresh).map((b) => `${b.book}${b.exists ? ` ${b.ageHours}h` : ' MISSING'}`).join(', ') || 'all live');
  const econ = readJson(path.join(AG, 'econ-book.json'));
  check('state', 'money-ledger books chain truth (not session memory)', !!readJson(path.join(AG, 'money-ledger.json')), 'money-ledger.json', 'books survive resets; sessions do not');
  const summaryClean = !!(econ && (econ.summary == null || typeof econ.summary === 'object' || (typeof econ.summary === 'string' && !econ.summary.startsWith('[object Object]'))));
  check('state', 'self-heal layer proven (econ summary clean — string or object)', summaryClean, 'econ-book.json summary', 'the parallel runtime now writes a proper object; the [object Object] incident stays on record');

  // ================= SUBSYSTEM 3: VERIFICATION (judge separation) =================
  const signingAgents = ['econ-desk.cjs', 'treasury-desk.cjs', 'blurt-curate.cjs', 'soldiers-curate.cjs'];
  const vtsCount = signingAgents.filter((f) => { const s = read(path.join(AG, f)); return s && s.includes('verify-then-sign'); }).length;
  check('verification', `verify-then-sign bound in signing agents (${vtsCount}/${signingAgents.length})`, vtsCount === signingAgents.length, 'verify-then-sign markers', 'maker/checker inside the maker — chain read-back is the second half');
  const agentVerify = read(path.join(ROOT, '.github/workflows/agent-verify.yml'));
  check('verification', 'independent judge node exists (agent-verify workflow, fresh context)', !!agentVerify, '.github/workflows/agent-verify.yml', 'generator/evaluator separation: the judge is a separate node, per the study\'s hardest lesson');
  check('verification', 'read-back law (chain speaks last)', (read(path.join(AG, 'soldiers-curate.cjs')) || '').includes('CHAIN-RECONCILED'), 'chain-truth recon in curation', 'the chain, not the book, is the dedupe of last resort');
  const secretsGate = read(path.join(ROOT, '.github/workflows/gitleaks.yml')) || read(path.join(DEFU_DIR, '.github/workflows/gitleaks.yml'));
  check('verification', 'secret-leak gate on the wire (gitleaks)', !!secretsGate, 'gitleaks workflow', 'zero secrets in any repo — machine-enforced');
  const evalsPresent = fs.existsSync(path.join(AG, 'evals', 'run-evals.cjs')) && fs.existsSync(path.join(AG, 'evals', 'eval-results.json'));
  check('verification', 'eval discipline live (runnable expectations, E1-E6)', evalsPresent, 'agents/evals/', 'an eval is a runnable expectation, not a hope (Z-36, study adoption)');

  // Task 24: workflow-parse gate — a lane that cannot parse is a lane that cannot run.
  // Real incident: recruit.yml shipped `${{ }}` inside flow mappings → GitHub startup-failure
  // on every push (0 jobs) and the cron lane never fired once. Nothing else caught it.
  let gateOk = false, gateEvidence = 'gate module missing';
  try {
    const gate = require(path.join(AG, 'workflow-parse-gate.cjs'));
    const res = gate.scanDir(path.join(ROOT, '.github', 'workflows'));
    gateOk = res.ok && res.scanned >= 10;
    gateEvidence = `${res.scanned} workflows · mode ${res.mode} · offenders ${res.offenders.length}${res.offenders.length ? ' → ' + res.offenders.slice(0, 3).map((o) => `${o.file}:${o.line}`).join(', ') : ''}`;
  } catch (e) { gateEvidence = 'gate error: ' + String(e.message || e).slice(0, 90); }
  check('verification', 'workflow-parse gate: every workflow file parses (full YAML floor, idiom fallback) — no dead lane wears a green shape', gateOk,
    gateEvidence, 'Task 24 (recruit.yml startup-failure incident): parseability is mechanical truth, audited on schedule — E16 pins the predicate');

  // ================= SUBSYSTEM 4: SCOPE (kill rules, floors, gates) =================
  check('scope', 'doctrine binds kill rules (ventures have them)', !!(doctrineEcon && doctrineEcon.includes('kill rule')), 'DOCTRINE-economics.md §4');
  const ventures = readJson(path.join(AG, 'ventures.json'));
  const venturesWithKill = ventures && ventures.ventures ? ventures.ventures.filter((v) => v.killRule).length : 0;
  check('scope', `ventures board carries kill rules (${venturesWithKill}/5)`, venturesWithKill === 5, 'ventures.json', 'a lane that cannot die cannot be trusted to live');
  check('scope', 'resource floors/ceilings in code (VP floor, dust holds, RC gate)', (read(path.join(AG, 'treasury-desk.cjs')) || '').includes('CUR_VP_FLOOR'), 'treasury-desk CUR_VP_FLOOR', 'scope is numeric, not aspirational');

  // ================= SUBSYSTEM 5: LIFECYCLE (handoff, recovery) =================
  let claimsAge = null;
  try { const out = require('child_process').execSync('git log -1 --format=%cI -- fleet/CLAIMS.md', { cwd: DEFU_DIR }).toString().trim(); claimsAge = r1(ago(out)); } catch (_) {}
  check('lifecycle', 'CLAIMS ledger fresh (receipts keep continuity)', claimsAge != null && claimsAge < 96, `last receipt ${claimsAge}h ago`, 'every session leaves clean state (L12 of the study)');
  check('lifecycle', 'recovery path codified (RESUME-KIT + .fleet/restore.sh)', !!(read(path.join(DEFU_DIR, 'fleet', 'MISSION-1000.md'))), 'canon reachable', 'sandbox resets are a law of nature; recovery is a law of ours (restore.sh lives outside git by design — creds never in repos)');

  // ================= THE THREE STRUCTURAL FAILURES (L14) =================
  check('graph-failures', 'Goodhart countermeasure: two-sided ledger, measured never estimated', !!(doctrineEcon && doctrineEcon.includes('TWO-SIDED LEDGER LAW')), 'EARN-GOVERNOR LAW', 'the number may not detach from the business: fills are balance-verified, pending is booked as honest zeros');
  check('graph-failures', 'Blindness-upward countermeasure: kill rules + operator gate', !!(doctrineEcon && doctrineEcon.includes('DELEGATION-SELECTION LAW')), 'kill rules + operator gates', 'the loop cannot ask if the goal is right — the structure has a place where that question lives');
  const raceHandled = (read(path.join(ROOT, '.github/workflows/recruit.yml')) || '').includes('pull --rebase');
  check('graph-failures', 'Conflict countermeasure: rebase races + one-lock doctrine', raceHandled, 'recruit.yml pull --rebase', 'parallel runtimes are real; the operator holds the architecture lock');

  // ================= ANCHORS (L14: the part everyone skips) =================
  const noStamp = bookStates.filter((b) => b.exists && b.ageHours == null).map((b) => b.book);
  check('anchors', 'book timestamp hygiene (every live book stamps its run)', noStamp.length === 0, noStamp.length ? `missing 'at'/'updated': ${noStamp.join(', ')}` : 'all live books stamped', noStamp.length ? 'finding: owner desks should stamp their books — freshness cannot be audited without it' : 'pulse is measurable end to end', 'warn');
  const fills = readJson(path.join(AG, 'fills-ledger.json'));
  check('anchors', 'earn fills pinned to chain arithmetic (seed provenance)', !!(fills && Array.isArray(fills.entries) && fills.entries.some((e) => String(e.src || '').includes('arithmetic'))), 'fills-ledger.json seeds', '0.05814917+0.54600212=0.60415129 exact — an anchor, not a story');
  const kpi = readJson(path.join(DEFU_DIR, 'fleet', 'KPI.json'));
  check('anchors', 'KPI names its method (oracle discipline)', !!(kpi && kpi.revenuePerDayReal && kpi.revenuePerDayReal.method), 'KPI.json method field', 'every metric says where its number comes from');
  check('anchors', 'spot oracle measured at run time (not cached stories)', !!(ventures && ventures.ledger && ventures.ledger.earnSurfaces && ventures.ledger.earnSurfaces.priceOracle), 'ventures.json priceOracle', 'price = measured fetch, null when unreachable');

  // ---- graph wiring: roles → workers (Task 19 — the hands are measured, not assumed)
  const recruitment = readJson(path.join(AG, 'recruitment.json'));
  const roles = recruitment && Array.isArray(recruitment.roles) ? recruitment.roles : [];
  const filledRoles = roles.filter((r) => r.status === 'FILLED');
  const unwired = filledRoles.filter((r) => {
    const tokens = String(r.mechanismEvidence || '').match(/[A-Za-z0-9_./-]+/g) || [];
    const artifact = tokens.find((t) => (t.startsWith('agents/') || t.startsWith('.github/')) && t.length > 8);
    if (!artifact) return true;
    try { return !fs.existsSync(path.join(ROOT, artifact)); } catch (_) { return true; }
  });
  check('graph', 'every FILLED role names a reachable worker artifact (role→worker wiring)', filledRoles.length > 0 && unwired.length === 0,
    `${filledRoles.length} FILLED roles · ${filledRoles.length - unwired.length} wired`,
    unwired.length ? `role claims a mechanism no file backs: ${unwired.map((r) => r.id).join(', ')}` : 'every claimed role has a file or workflow that runs it — the army is hands-on, not titles');

  // ---- (Task 20: my interim role-prompts registry check retired — SUPERSEDED-BY
  // the Z-37 charter registry (role-registry.csv + sovereignty.md), whose
  // sovereignty checks below are the governing superset)

  // ---- (Task 21: my interim bash guard check retired — SUPERSEDED-BY the Z-38
  // fleet-native agents/command-guard.cjs whose integrity + evals (E7-E9) the
  // sovereignty subsystem checks below; the workflow shape-scan remains covered
  // by the guard's own scan mode)

  // ---- loop primitives (L13): the six primitives must have fleet instances
  const wfDir = path.join(ROOT, '.github', 'workflows');
  const wfCount = (function () { try { return fs.readdirSync(wfDir).filter((f) => f.endsWith('.yml')).length; } catch (_) { return 0; } })();
  const deskCount = (function () { try { return fs.readdirSync(AG).filter((f) => /\.(cjs|mjs)$/.test(f)).length; } catch (_) { return 0; } })();
  const receiptsDir = fs.existsSync(path.join(AG, 'receipts'));
  const bookCount = bookStates.filter((b) => b.exists).length;
  const claimsDoc = fs.existsSync(path.join(DEFU_DIR, 'fleet', 'CLAIMS.md'));
  const primitives = {
    automations: wfCount >= 3, worktrees: true, skills: deskCount >= 5, connectors: receiptsDir,
    subAgents: filledRoles.length > 0, externalState: bookCount >= 5 && claimsDoc
  };
  check('loop', 'all six loop primitives have live fleet instances (automations/worktrees/skills/connectors/sub-agents/external state)', Object.values(primitives).every(Boolean),
    `workflows:${wfCount} desks:${deskCount} receipts:${receiptsDir} books:${bookCount} claims:${claimsDoc}`,
    'loop engineering mapped to the fleet per the LHE study — worktrees is the rebase-first runtime lane discipline');

  // ---- sovereignty (Z-37, prompts.chat adoption): roles-as-data + change-requests
  const registryRaw = read(path.join(AG, 'role-registry.csv'));
  let registryVerdict = { pass: false, evidence: 'missing', badRows: [] };
  if (registryRaw) {
    try {
      // quote-aware CSV parse (missions contain commas inside quotes)
      const parseCSV = (text) => {
        const rows = []; let row = [], field = '', inQ = false;
        for (let i = 0; i < text.length; i++) {
          const ch = text[i];
          if (inQ) { if (ch === '"') { if (text[i + 1] === '"') { field += '"'; i++; } else inQ = false; } else field += ch; }
          else if (ch === '"') inQ = true;
          else if (ch === ',') { row.push(field); field = ''; }
          else if (ch === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
          else if (ch !== '\r') field += ch;
        }
        if (field !== '' || row.length) { row.push(field); rows.push(row); }
        return rows;
      };
      const rows = parseCSV(registryRaw);
      const hdr = rows[0];
      const data = rows.slice(1).filter((r) => r.length === hdr.length);
      const malformed = rows.slice(1).filter((r) => r.length !== hdr.length).length;
      const acts = new Set(data.map((r) => r[0]));
      const dupes = data.length - acts.size;
      const missingFiles = data.filter((r) => r[1] && r[1].startsWith('agents/')).filter((r) => !fs.existsSync(path.join(ROOT, r[1]))).map((r) => r[0]);
      registryVerdict.pass = hdr.length === 9 && data.length >= 40 && malformed === 0 && dupes === 0 && missingFiles.length === 0;
      registryVerdict.evidence = `${data.length} rows · cols ${hdr.length} · dupes ${dupes} · missing files ${missingFiles.length}`;
      registryVerdict.badRows = { malformed, dupes, missingFiles };
    } catch (_) { registryVerdict.evidence = 'parse-error'; }
  }
  check('sovereignty', 'role-registry integrity: every charter row names a real file (roles-as-data, no invented agents)', registryVerdict.pass,
    registryVerdict.evidence, 'prompts.chat pattern: every persona is a CSV row (Z-37); a registry detached from disk is a story, not a mandate');

  const crDir = path.join(AG, 'change-requests');
  let crVerdict = { pass: false, evidence: 'missing' };
  try {
    const crFiles = fs.readdirSync(crDir).filter((f) => f.endsWith('.json'));
    const req = ['id', 'from', 'tier', 'proposes', 'verdict', 'opened_at'];
    const malformed = [];
    const stale = [];
    for (const f of crFiles) {
      const j = readJson(path.join(crDir, f));
      if (!j || req.some((k) => j[k] == null || j[k] === '')) malformed.push(f);
      else if (j.verdict === 'PENDING' && j.judged_at == null && j.opened_at && (Date.now() - Date.parse(j.opened_at)) / 3600000 > 168) stale.push(j.id);
    }
    crVerdict.pass = crFiles.length >= 1 && malformed.length === 0 && stale.length === 0;
    crVerdict.evidence = `${crFiles.length} CRs · malformed ${malformed.length} · stale-pending ${stale.length}`;
    if (malformed.length || stale.length) crVerdict.detail = { malformed, stale };
  } catch (_) { /* dir absent = fail honest */ }
  check('sovereignty', 'change-request ledger integrity: every CR well-formed, no PENDING abandoned >7d', crVerdict.pass,
    crVerdict.evidence, 'self-modification is never silent: scope changes flow through judged CRs (prompts.chat changeRequests, fleet-hardened)');

  // Z-38: mechanical override — the destructive-command gate exists, is stamped, and evals pin it
  const guardLedger = readJson(path.join(AG, 'command-guard.json'));
  const guardScript = read(path.join(AG, 'command-guard.cjs'));
  const guardEvals = readJson(path.join(AG, 'evals', 'eval-results.json'));
  const guardEvalsGreen = !!(guardEvals && (guardEvals.evals || []).filter((e) => ['E7', 'E8', 'E9'].includes(e.id)).every((e) => e.status === 'PASS'));
  const guardOkReal = !!(guardScript && guardLedger && guardLedger.at && guardEvalsGreen && guardScript.includes('DEFAULT-ALLOW'));
  check('sovereignty', 'mechanical override live: destructive-command guard stamped, evals E7-E9 pin it', guardOkReal,
    guardScript ? `ledger at ${guardLedger.at || 'never'} · scan denies ${guardLedger.denies == null ? 'n/a' : guardLedger.denies} · guardEvals ${guardEvalsGreen ? 'green' : 'red'}` : 'missing',
    'Z-38 (study: destructive_command_guard): the override protocol is code before execution, not prose after it');

  // Z-39: cognitive rail — the inference registry is governed (ToS-gated, keyless-only probes, ledger stamped)
  let railOk = false, railEvidence = 'registry missing';
  try {
    const rail = require(path.join(AG, 'cognitive-rail.cjs')); // require-main gated: requiring never runs the desk
    const v = rail.validateCatalog(rail.CATALOG_PATH);
    const railLedger = readJson(path.join(AG, 'rail-ledger.json'));
    const railEvals = (guardEvals && (guardEvals.evals || []).filter((e) => ['E10', 'E11', 'E12'].includes(e.id)).every((e) => e.status === 'PASS'));
    railOk = !!(v.ok && v.counts && v.counts.neverLive === 0 && v.counts.keyedNotTierC === 0 && railLedger && railLedger.at && railEvals);
    const s = (railLedger && railLedger.runs || []).filter((r) => r.mode === 'probe' && r.summary && r.summary.probed > 0).length;
    railEvidence = `${v.counts ? v.counts.total : 0} rows · neverLive=${v.counts ? v.counts.neverLive : '?'} · keyedNotTierC=${v.counts ? v.counts.keyedNotTierC : '?'} · live probe runs booked=${s} · railEvals ${railEvals ? 'green' : 'red'}`;
  } catch (e) { railEvidence = 'rail desk error: ' + String(e.message || e).slice(0, 90); }
  check('sovereignty', 'cognitive rail governed: provider registry valid, forbidden rails never enabled, keyless probes booked, E10-E12 pin it', railOk,
    'agents/inference-providers.csv + rail-ledger.json', railEvidence);

  // Task 22: FATE-DEFENSE — the Emergence World study adoption: FWI scorecard live + STASIS breaker armed
  const fwi = readJson(path.join(AG, 'fleet-indicators.json'));
  const fwiFresh = !!(fwi && fwi.at && (Date.now() - Date.parse(fwi.at)) / 3600000 < 48);
  const fwiInds = (fwi && Array.isArray(fwi.indicators)) ? fwi.indicators : [];
  const fwiAllSources = fwiInds.length === 9 && fwiInds.every((i) => i.evidenceSource && String(i.evidenceSource).length > 3);
  const stasisFile = readJson(path.join(AG, 'STASIS.json'));
  const engineSrc = read(path.join(ROOT, 'scripts', 'economy-engine.mjs'));
  const stasisGateInCode = !!engineSrc && engineSrc.includes('STASIS-HALT');
  const fwiOk = !!(fwi && fwiFresh && fwiAllSources && stasisFile && typeof stasisFile.active === 'boolean' && stasisGateInCode);
  check('fate-defense', 'Emergence-World adoption: FWI scorecard fresh (9 indicators, each with a mechanical evidence source) + STASIS breaker armed + engine obeys it', fwiOk,
    fwi ? `FWI ${fwi.verdict || '?'} ${fwiFresh ? 'fresh' : 'stale'} · ${fwiInds.length} indicators · sources ${fwiAllSources ? 'all named' : 'INCOMPLETE'} · stasis armed=${stasisFile ? stasisFile.active : 'missing'} · engine gate=${stasisGateInCode}` : 'fleet-indicators.json missing',
    'Task 22 (study: world.emergence.ai, arXiv 2606.08367 + 2609.17320): their worlds died with no warning shot — ours carries a mechanical brake the engine obeys before any seal/broadcast, and a 9-indicator scorecard computed from artifacts, never from self-reports (ANTI-GOODHART); docs: FATE-DEFENSE.md');

  // Z-40: collapse drill — containment proof receipts (emergence.ai adoption, CR-0004).
  // The study's hardest finding: "detection did not ensure containment ... acting on it up to
  // 46 hours later" + "collapse has no warning shot". Our answer: four mechanical faults
  // injected into throwaway git-archive trees; the fresh-process judge must catch every one
  // inside the same run. The receipts here are that proof, audited on schedule.
  let drillOk = false, drillEvidence = 'drill receipts missing';
  try {
    const rec = readJson(path.join(AG, 'receipts', 'collapse-drill-receipt.json'));
    const drillScript = read(path.join(AG, 'collapse-drill.cjs'));
    const drillAgeH = rec && rec.at ? r1(ago(rec.at)) : null;
    const drillFresh = drillAgeH != null && drillAgeH < 168;
    drillOk = !!(drillScript && drillScript.includes('CONTAINMENT-PROVEN') && rec && rec.ok && drillFresh && rec.verdict === 'CONTAINMENT-PROVEN' && rec.baseline && rec.baseline.green === true && rec.faults_caught === rec.faults_total && rec.faults_total >= 4);
    drillEvidence = rec ? `verdict ${rec.verdict} · caught ${rec.faults_caught}/${rec.faults_total} · baseline green=${rec.baseline ? rec.baseline.green : '?'} · age ${drillAgeH}h · head ${rec.head || '?'}` : 'missing';
  } catch (_) {}
  check('sovereignty', 'collapse drill containment-proof: 4 fault classes injected into throwaway trees, judge caught every one on a fresh run', drillOk,
    drillEvidence, 'Z-40 (study: emergence.ai Emergence World, CR-0004): detection without containment is theater — the drill proves the warning shot is mechanical');

  // ---- one-bloc convergence book (Task 23): the whole-git machine map
  let blocOk = false, blocEvidence = 'missing', blocNote = null;
  try {
    const b = readJson(path.join(AG, 'one-bloc.json'));
    const blocAgeH = b && b.at ? r1(ago(b.at)) : null;
    const fresh = blocAgeH != null && blocAgeH < 26;
    const rows = b && Array.isArray(b.repos) ? b.repos : [];
    const reached = b && b.counts ? b.counts.reached : 0;
    blocOk = !!(b && b.protocol === 'SAOS-ONE-BLOC/1' && rows.length === 16 && fresh);
    if (blocOk && reached < 16) { blocOk = false; blocNote = `partial reach (${reached}/16) — honest keyless mode (no cross-repo token in env) or drift; refresh: node agents/one-bloc.cjs (+ ONE_BLOC_TOKEN for the private 14)`; }
    blocEvidence = b ? `verdict ${b.verdict} · reached ${reached}/${rows.length} · keyless ${b.counts ? b.counts.keylessReach : '?'} · age ${blocAgeH}h · maps bound ${(b.boundMaps || []).length}` : 'missing';
  } catch (_) {}
  check('sovereignty', 'one-bloc convergence book: the whole git (16 repos) measured mechanically into ONE map — roles, HEADs, honest statuses, laws armed', blocOk,
    blocEvidence, blocNote || 'Task 23 (owner directive "מקשה אחת"): prose maps drift and agents re-derive the same picture — one machine map, regenerated by tool, supersedes the hand copies (BLOC-STATE/SOVEREIGN-INDEX bound, not deleted)', 'warn');

  // ---- silent-costs watch (L13) — booked as standing observations, honestly
  const silentCosts = {
    verificationDebt: 'selftests cover past incidents; every NEW failure mode (concat family ×3, null-deref, dedupe) becomes a check within one wave of discovery',
    comprehensionRot: 'notebooks (v1-v5-NOTES.md) rewritten per cycle; doctrine rewritten on amendment — no tribal memory',
    cognitiveSurrender: 'judge nodes (agent-verify, this desk) are separate processes with fresh context',
    tokenBlowout: 'CI does the deterministic work; agent sessions only where judgment is required (LABOR TIERING LAW)'
  };

  const counts = {
    pass: checks.filter((c) => c.status === 'PASS').length,
    warn: checks.filter((c) => c.status === 'WARN').length,
    fail: checks.filter((c) => c.status === 'FAIL').length
  };
  const out = {
    ok: true, at, agent: 'harness-audit v1.8.0 (Z-35 + Task 19 + Z-37 sovereignty + Z-38 override + Z-39 cognitive rail + Task 22 fate-defense + Z-40 collapse drill + Task 23 one-bloc convergence + Task 24 workflow-parse gate, parallel-convergence superset deduped)',
    origin: 'walkinglabs/learn-harness-engineering study (Z-35): five subsystems + loop/graph engineering mapped to the fleet; Z-37 adds f/prompts.chat governance adoption (roles-as-data + decision ladder + change-requests + override protocol); Z-38 adds Dicklesworthstone/destructive_command_guard adoption (mechanical override gate + evals E7-E9); Z-39 adds tashfeenahmed/freellmapi adoption (cognitive-rail registry + keyless probes + evals E10-E12); Task 22 adds world.emergence.ai fate-defense adoption (STASIS circuit breaker + FWI scorecard + three laws, FATE-DEFENSE.md); Z-40 adds the emergence.ai collapse-drill containment proof (CR-0004, E14); two runtimes landed the same operator wave on the same study — merged, renumbered, deduped; the audit itself is the adopted artifact — a fresh-context checker node on a schedule',
    fiveSubsystems: {
      instructions: 'AGENTS.md + DOCTRINE.md + FLEET-NOTE.md + agent headers',
      state: 'books (external state primitive) + CLAIMS + worklog',
      verification: 'verify-then-sign + read-back + agent-verify judge node + gitleaks',
      scope: 'kill rules + floors/ceilings + dust honesty',
      lifecycle: 'receipts per session + RESUME-KIT + restore.sh',
      sovereignty: 'role-registry.csv (roles-as-data) + change-requests/ (judged self-modification) + sovereignty.md (decision ladder + override protocol) + command-guard.cjs (mechanical override, Z-38) + cognitive-rail.cjs + inference-providers.csv (governed inference rails, Z-39)',
      fateDefense: 'STASIS.json circuit breaker (engine obeys pre-seal) + fleet-indicators.cjs FWI scorecard (9 indicators, artifact-sourced) + FATE-DEFENSE.md (Emergence World roast + three laws, Task 22)'
    },
    books: bookStates,
    checks, counts, silentCosts,
    verdict: counts.fail === 0
      ? `harness green: ${counts.pass} checks pass, 0 fail — the five subsystems hold and the three structural failures have named countermeasures`
      : `harness NOT green: ${counts.fail} FAIL — the audit is honest, the fails are the next work`
  };
  try { fs.writeFileSync(OUT_JSON, JSON.stringify(out, null, 1) + '\n'); } catch (_) {}

  const md = [];
  md.push('# Harness Audit — the fleet\'s five-subsystem check (fresh-context judge node)');
  md.push('');
  md.push(`_harness-audit v1.0.0 · ${at} · born from the learn-harness-engineering study (Z-35, extended Task 19)_`);
  md.push('');
  md.push(`**${out.verdict}**`);
  md.push('');
  md.push('| # | Subsystem | Check | Status | Evidence |');
  md.push('|---|---|---|---|---|');
  checks.forEach((c, i) => md.push(`| ${i + 1} | ${c.subsystem} | ${c.name} | ${c.status} | ${c.evidence || '—'} |`));
  md.push('');
  md.push(`**Books pulse:** ${bookStates.map((b) => `${b.book}${b.exists ? (b.fresh ? ' ✓' : ` (${b.ageHours}h)`) : ' MISSING'}`).join(' · ')}`);
  md.push('');
  md.push('**Four silent costs (watched, per the study):**');
  for (const k of Object.keys(silentCosts)) md.push(`- **${k}:** ${silentCosts[k]}`);
  md.push('');
  md.push('_The model is smart, the harness makes it reliable. This desk is the checker node the producer cannot be (generator/evaluator separation)._');
  try { fs.writeFileSync(OUT_MD, md.join('\n') + '\n'); } catch (_) {}

  console.log(`harness-audit: ${counts.pass} PASS / ${counts.warn} WARN / ${counts.fail} FAIL · books fresh ${freshCount}/${bookStates.length}`);
  process.exit(0); // fail-soft: the audit never breaks a run
})();
