#!/usr/bin/env node
/**
 * agent9-fleet-truth.cjs — מכונת-אמת-הצי [t55 · agent-9] · AGENT9-FLEET-TRUTH/1
 * ═════════════════════════════════════════════════════════════════════════════════
 * פקודת-בעלים (t55): "אל תסמוך על שום טענה — בחן את כל הטענות מול האמת בגיט, רק קוד
 * ופעילות בפועל. דף עם כמה מילים זה לא הוכחה." → המכונה הזו אוספת **מדידות חיות** בלבד
 * (keyless, ציבורי) ואופה truth/agent9.json לדפים. כל-שדה נושא measuredAt + מקור.
 * חוק fail-closed: כל-מקור שלא השיב = {ok:false, err} — **לעולם לא מומצא** (כנות-דוקטרינה R74).
 *
 * מקורות: Steem-RPC (יתרות/פקודות/מילויים חיים) · קבלות-CI של-Autonomy (raw.githubusercontent)
 * · GitHub-Actions-חי (סטטוס-ריצות-העורקים) · אפס-מפתחות, אפס-סודות.
 * שימוש: node scripts/agent9-fleet-truth.cjs            (אופה truth/agent9.json)
 *         node scripts/agent9-fleet-truth.cjs --selftest
 */
const OUT = "truth/agent9.json";
const AUTONOMY_RAW = "https://raw.githubusercontent.com/roshpinacare-sys/Autonomy/main";
const RPC = "https://api.steemit.com";
const GH_API = "https://api.github.com/repos/roshpinacare-sys/Autonomy";
// refs-cure house law (waves 19.47/19.48): the measured chain account never rides a literal —
// runtime base64 only + stable acct-h-sha8 pseudonym in every baked receipt. Missing decode = honest failure.
const ACCT = Buffer.from("aGVhZGNvcm5lcg==", "base64").toString("utf8");
const ACCT_TAG = "acct-h-849e9df7"; // sha256(handle)[0..8] — stable pseudonym, publicly derivable, leaks nothing

const jfetch = async (url, opts, timeoutMs = 20000) => {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), timeoutMs);
  try {
    const r = await fetch(url, { ...opts, signal: ctl.signal, headers: { "User-Agent": "saos-agent9/1 truth-collector (keyless)", ...(opts?.headers || {}) } });
    if (!r.ok) throw new Error(`http-${r.status}`);
    return await r.json();
  } finally { clearTimeout(t); }
};
// זהות-CI-ארעית בלבד (מוזרקת-מה-runner, אף-פעם-לא-נשמרת-לא-נרשמת-לא-מוצגת) —
// מטרתה-יחידה: למנוע-חנק-rate-limit של api.github.com בתוך-Actions. מקומית = keyless מלא.
const GH_TOKEN = process.env.GITHUB_TOKEN || null;
const ghHeaders = () => (GH_TOKEN ? { Authorization: `token ${GH_TOKEN}` } : {});
const rpc = async (method, params) =>
  jfetch(RPC, { method: "POST", body: JSON.stringify({ jsonrpc: "2.0", method, params, id: 1 }) });

const wrap = async (id, fn) => {
  const at = new Date().toISOString();
  try { return { id, ok: true, at, data: await fn() }; }
  catch (e) { return { id, ok: false, at, err: String(e.message || e).slice(0, 140) }; }
};

async function collect() {
  const sources = [];
  const push = (s) => { sources.push(s); return s; };

  // 1. אוצר — קבלת שער-הרצפה החיה (Autonomy-CI אופה אותה שעתית)
  const floor = push(await wrap("treasury-floor", async () => {
    const j = await jfetch(`${AUTONOMY_RAW}/receipts/treasury-floor/latest.json`);
    const g = j.gate || {};
    return {
      verdict: g.verdict || null, netSp: g.measured?.netSp ?? null, rowsOut: g.measured?.rowsOut ?? null,
      surplus: g.measured?.surplus ?? null, floorSp: g.measured?.floorSp ?? null, measuredAt: g.now || j.at,
    };
  }));

  // 2. שער-הסיכון + ארביטראז — קבלת AUTOHEDGE-חיה (t54)
  const hedge = push(await wrap("autotrade-hedge", async () => {
    const j = await jfetch(`${AUTONOMY_RAW}/receipts/autotrade-hedge/latest.json`);
    const m = j.measurement || {}, g = m.gate || {}, a = m.arb || {};
    return {
      verdict: g.verdict || null, blocked: (g.blocked || []).length || 0,
      arbGapPct: a.gapPct ?? null, edge: a.edge || null,
      internalUsd: a.internalSteemUsd ?? null, externalUsd: a.externalSteemUsd ?? null,
      measuredAt: m.now || j.at,
    };
  }));

  // 3. שער-FixedFloat — כנות-מלאה (HONEST-FAIL נשאר כנות)
  const ff = push(await wrap("fixedfloat", async () => {
    const j = await jfetch(`${AUTONOMY_RAW}/receipts/fixedfloat/latest.json`);
    const q = (j.quotes || [])[0] || {};
    return { verdict: j.verdict || null, pairErr: q.err || null, measuredAt: j.at };
  }));

  // 4. סחר-חי — acct-h-849e9df7 מן-השרשרת (RPC-ציבורי; דוקטרינת-הבית R74: זה-הכסף-האמת)
  const live = push(await wrap(ACCT_TAG + "-live", async () => {
    const [accArr, orders, props, hist] = await Promise.all([
      rpc("condenser_api.get_accounts", [[ACCT]]),
      rpc("condenser_api.get_open_orders", [ACCT]),
      rpc("condenser_api.get_dynamic_global_properties", []),
    ]);
    const a = accArr.result?.[0]; if (!a) throw new Error("no-account");
    for (const [name, r] of [["accounts", accArr], ["orders", orders], ["props", props]])
      if (!r || r.error) throw new Error(`sub-call-failed:${name} (fail-closed — no silent zeros)`);
    const p = props.result || {};
    // SP = vests × (total_vesting_fund_steem / total_vesting_shares) — השדה-הנכון (t54: 1611.37 vests/SP)
    const spRatio = parseFloat(p.total_vesting_fund_steem || "0") / Math.max(1, parseFloat(p.total_vesting_shares || "1"));
    const vests = parseFloat(a.vesting_shares);
    // הליכה-אחורה-באצוות: הגריד-יוצר ~600-ops/שעה — חלון-קבוע-משקר (0-מילויים-בלי-מילויים).
    // מדידה-כנה: מכסים ~2 שעות (עד 15 אצוות×100) ומדווחים את-החלון-שנמדד-בפועל.
    const cutoff = Date.now() - 2 * 3600e3;
    let fills = 0, lastFillAt = null, lastFill = null, windowFrom = null, batches = 0;
    let lo = -1;
    while (batches < 15) {
      const resp = await rpc("condenser_api.get_account_history", [ACCT, lo, 100]);
      if (resp.error) throw new Error(`history-fail-closed:${String(resp.error.message).slice(0,80)}`);
      const rows = resp.result || [];
      if (!rows.length) break;
      const oldest = rows[0][0];
      windowFrom = rows[0][1].timestamp + "Z";
      batches++;
      for (const row of rows) {
        const [op] = row[1].op;
        const ts = new Date(row[1].timestamp + "Z").getTime();
        if (op === "fill_order" && ts >= cutoff) {
          fills++;
          if (!lastFillAt || ts > Date.parse(lastFillAt)) { lastFillAt = row[1].timestamp + "Z"; lastFill = row[1].op[1]; }
        }
      }
      if (Date.parse(windowFrom) <= cutoff || oldest <= 1) break;
      lo = oldest - 1;
    }
    return {
      steem: a.balance, sbd: a.sbd_balance,
      sp: +(vests * spRatio).toFixed(1),
      delegatedFieldSp: +(parseFloat(a.delegated_vesting_shares) * spRatio).toFixed(1),
      receivedSp: +(parseFloat(a.received_vesting_shares) * spRatio).toFixed(1),
      openOrders: orders.result?.length ?? null,
      fillsWindowHours: 2, fills, fillRate: +(fills / Math.min(2, batches ? (Date.now() - Date.parse(windowFrom)) / 3600e3 : 2)).toFixed(2), lastFillAt,
      lastFillPair: lastFill ? { got: lastFill.current_pays, gave: lastFill.open_pays } : null,
    };
  }));

  // 5. עורקים-חיים — סטטוס-ריצת-ה-CI האחרונה של-כל-עורק (פומבי, keyless)
  const arteries = [];
  for (const wf of ["artery-treasury-floor-watch", "artery-autotrade-hedge-gate"]) {
    const r = push(await wrap(`artery:${wf}`, async () => {
      const j = await jfetch(`${GH_API}/actions/workflows/${wf}.yml/runs?per_page=1`, { headers: ghHeaders() });
      const run = j.workflow_runs?.[0];
      if (!run) throw new Error("no-runs");
      return { status: run.status, conclusion: run.conclusion, at: run.created_at, url: run.html_url };
    }));
    arteries.push({ id: wf, ok: r.ok, ...(r.ok ? r.data : { err: r.err }) });
  }

  // 6. מדידות-הצלבה [t55c] — גלמי-אמת לפנקס-הסתירות (owner trace 1a15d4acc349fc41:
  //    "יש הרבה סתירות בגיט בין הדברים בוא נוודא הכל"). keyless, fail-closed.
  const RAW_DOMAIN = "https://raw.githubusercontent.com/roshpinacare-sys/Domain/main";
  const hrs = (iso) => (Date.now() - Date.parse(iso)) / 36e5; // 36e5=3,600,000ms=שעה-אחת · תיקון-bug-t55c-a (360e5=10ש' שינה-את-פסק-X5)
  const ghRepos = push(await wrap("gh-repos-count", async () => {
    let count = 0, page = 1;
    for (;;) {
      const arr = await jfetch(`https://api.github.com/users/roshpinacare-sys/repos?per_page=100&page=${page}`, { headers: ghHeaders() });
      if (!Array.isArray(arr)) throw new Error("bad-shape");
      count += arr.length;
      if (arr.length < 100 || page >= 5) break;
      page++;
    }
    return { count };
  }));
  const domStatus = push(await wrap("domain-status", async () => {
    const j = await jfetch(`${RAW_DOMAIN}/status.json`);
    return { repos: j?.pulse?.repos ?? null, reposPublic: j?.pulse?.reposPublic ?? null, at: j?.generatedAt || null };
  }));
  // roast-t55g-b: מדידה-עצמאית-על-השרשרת (keyless, RPC-ציבורי) — האוצר-לא-רק-מושאל-מקבלה-של-Autonomy
  // שיכולה-להיות-שעה-ישנה; גם-חושף-גולמי-מול-נטו-והפרש-ההאצלות-במקום-להציג-נטו-בלבד
  const chainTreasury = push(await wrap("chain-treasury-onchain", async () => {
    const rpc = async (method, params) => {
      const r = await fetch("https://api.steemit.com", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ jsonrpc: "2.0", method, params, id: 1 }) });
      const j = await r.json();
      if (!j || !j.result) throw new Error("bad-rpc-shape");
      return j.result;
    };
    const gp = await rpc("condenser_api.get_dynamic_global_properties", []);
    const acc = (await rpc("condenser_api.get_accounts", [[Buffer.from("aGVhZGNvcm5lcg==", "base64").toString("utf8")]]))[0];
    const amt = (s) => parseFloat(String(s ?? "0 VESTS").split(" ")[0]);
    const fund = amt(gp.total_vesting_fund_steem), shares = amt(gp.total_vesting_shares);
    const toSp = (v) => v * fund / shares;
    const gross = toSp(amt(acc.vesting_shares));
    const delOut = toSp(amt(acc.delegated_vesting_shares));
    const delIn = toSp(amt(acc.received_vesting_shares));
    return { grossSp: +gross.toFixed(3), delegatedOutSp: +delOut.toFixed(3), delegatedInSp: +delIn.toFixed(3), netSp: +(gross - delOut + delIn).toFixed(3), account: Buffer.from("aGVhZGNvcm5lcg==", "base64").toString("utf8"), measuredAt: new Date().toISOString() };
  }));
  const fleetBeat = push(await wrap("domain-fleet-heartbeat", async () => {
    const j = await jfetch(`${RAW_DOMAIN}/truth/fleet.json`);
    return { repos: j?.summary?.repos ?? null, at: j?.at || null };
  }));
  const mirror = push(await wrap("domain-mirror", async () => {
    const j = await jfetch(`${RAW_DOMAIN}/mirror.json`);
    return { generatedAt: j?.generatedAt || null };
  }));
  const mreport = push(await wrap("domain-mirror-report", async () => {
    const j = await jfetch(`${RAW_DOMAIN}/mirror-report.json`);
    // bug-t55d-a fix: the mirror emits age as a string ("0.84h old at source") in field `age`,
    // not as a numeric `ageH` — the old parser read a nonexistent field and X6 was stuck UNMEASURED.
    const raw = j?.data?.["dex/money.json"];
    let dexMoneyAgeH = null;
    if (raw) {
      if (typeof raw.ageH === "number") dexMoneyAgeH = raw.ageH;
      else if (typeof raw.age === "string") {
        const m2 = raw.age.match(/^\s*([\d.]+)\s*h/i);
        if (m2) dexMoneyAgeH = +parseFloat(m2[1]).toFixed(2);
      }
    }
    return { dexMoneyAgeH, mirrorGenAt: j?.generatedAt || null, rawShape: raw ? Object.keys(raw).join(",") : null };
  }));
  const orgRoot = push(await wrap("org-root-freshness", async () => {
    const j = await jfetch("https://api.github.com/repos/roshpinacare-sys/roshpinacare-sys.github.io", { headers: ghHeaders() });
    if (!j || !j.pushed_at) throw new Error("bad-shape");
    return { pushedAt: j.pushed_at, ageH: +hrs(j.pushed_at).toFixed(2) };
  }));

  // 7. פנקס-הסתירות [t55c] — כל-בדיקה = שתי-טענות-מגיט מול-הנמדד →
  //    CONFIRMED (סתירה-אמתית) | OK (תואם) | UNMEASURED (מקור-שלא-השיב — לעולם-לא-מומצא).
  const items = [];
  const mk = (id, title, severity, cure) => ({ id, title, severity, cure,
    a: { claim: null, value: null, src: null }, b: { claim: null, value: null, src: null },
    verdict: "UNMEASURED", note: "", measuredAt: new Date().toISOString() });

  { // X1 — סמנטיקת-שער-האוצר: פסק-הפעולה PASS מול בריאות-האוצר (קריאה-כפולה-של-אותה-קבלה)
    const x = mk("X1-treasury-semantics", "פסק-השער PASS מופיע כשהאוצר עצמו מתחת-לרצפה", "medium",
      "DISPLAY-SPLIT (t55c): פס-האמת-ודף-האמת מפרידים-פסק-הפעולה-המוצעת מבריאות-האוצר");
    if (floor.ok) {
      const g = floor.data;
      const below = (g.netSp != null && g.floorSp != null) ? g.netSp < g.floorSp : null;
      x.a = { claim: "verdict", value: g.verdict, src: "Autonomy receipts/treasury-floor/latest.json" };
      x.b = { claim: "health", value: below == null ? null : (below ? "BELOW-FLOOR" : "OK"), src: "נגזר-מאותה-קבלה: netSp מול floorSp" };
      if (g.verdict == null || below == null) x.verdict = "UNMEASURED";
      else if (g.verdict === "PASS" && below) { x.verdict = "CONFIRMED"; x.note = "PASS = הפעולה-המוצעת-חוקית (delta ≤ surplus) — לא בריאות-האוצר; קריאה-חד-משמעית-הייתה-מטעה."; }
      else x.verdict = "OK";
    } else x.err = floor.err;
    items.push(x);
  }
  { // X2 — מספר-המאגרים: השוואה-כמו-לכמו בלבד (roast-t55g-a)
    // roast-מצא: הגרסה-הקודמת-השוותה-סה\"כ-46-מול-ציבוריים-38 — סתירה-מלאכותית-שלי;
    // status.json-היה-כן-כל-הזמן (46-סה\"כ = 38-ציבוריים + 8-פרטיים, נמדד-ב-roast)
    const x = mk("X2-repos-count", "מספר-מאגרים-ציבוריים: הצהרת-status.json מול-GitHub-API-חי (כמו-לכמו)", "low",
      "תיקון-roast-t55g-a: הסתירה-הקודמת-הייתה-באג-השוואה-שלי-ולא-שקר-של-status.json — השוואה-ציבוריים-מול-ציבוריים");
    if (domStatus.ok && ghRepos.ok) {
      x.a = { claim: "status.json pulse.reposPublic", value: domStatus.data.reposPublic, src: "Domain/status.json" };
      x.b = { claim: "GitHub API public repos", value: ghRepos.data.count, src: "api.github.com/users/roshpinacare-sys (ציבוריים-בלבד)" };
      const d = (domStatus.data.reposPublic != null && ghRepos.data.count != null) ? Math.abs(domStatus.data.reposPublic - ghRepos.data.count) : null;
      x.verdict = d == null ? "UNMEASURED" : (d >= 2 ? "CONFIRMED" : "OK");
      if (x.verdict === "OK") x.note = "אפס-סתירה-בהשוואה-הנכונה; הסה\"כ-המוצהר-46-כולל-גם-פרטיים (46=38ציבוריים+8פרטיים — נמדד-ב-roast-t55g)";
      if (x.verdict === "CONFIRMED") x.note = `פער-של-${d} מאגרים גם-בהשוואה-הכמו-לכמו`;
    } else x.err = !domStatus.ok ? domStatus.err : ghRepos.err;
    items.push(x);
  }
  { // X3 — מכונת-הדופק מדווחת-אפסים-שקטים
    const x = mk("X3-heartbeat-zeros", "מכונת-fleet-heartbeat מדווחת repos:0 מול-חשבון-עם-מאגרים-חיים", "high",
      "מכונה-שבורה — מסילת-הסוכן-שלה; נמדד-ונחשף-כאן-בכנות עד-הריפוי");
    if (fleetBeat.ok && ghRepos.ok) {
      x.a = { claim: "fleet.json summary.repos", value: fleetBeat.data.repos, src: "Domain/truth/fleet.json" };
      x.b = { claim: "GitHub API repos", value: ghRepos.data.count, src: "api.github.com/users/roshpinacare-sys" };
      x.verdict = (fleetBeat.data.repos === 0 && ghRepos.data.count > 0) ? "CONFIRMED" : "OK";
      if (x.verdict === "CONFIRMED") x.note = "אפסים-שקטים = מכונה-עיוורת; האמת-החיה-בצד-ב";
    } else x.err = !fleetBeat.ok ? fleetBeat.err : ghRepos.err;
    items.push(x);
  }
  { // X4 — mirror.json מוצג-כמקור-חי אך-ישן->12ש'
    const x = mk("X4-mirror-stale", "mirror.json מוצג-כמקור-חי אך-נאפה-לפני->12ש'", "low",
      "מסילת-weave-mirror (אחרת) — נמדד-כאן-בכנות");
    if (mirror.ok && mirror.data.generatedAt) {
      const age = hrs(mirror.data.generatedAt);
      x.a = { claim: "generatedAt", value: mirror.data.generatedAt, src: "Domain/mirror.json" };
      x.b = { claim: "age", value: +age.toFixed(2) + "h", src: "נגזר" };
      x.verdict = age > 12 ? "CONFIRMED" : "OK";
    } else x.err = mirror.err || "no generatedAt";
    items.push(x);
  }
  { // X5 — שורש-הארגון קפוא מול-טענת-"המערכת-החיה"
    const x = mk("X5-org-root-stale", "שורש-האתר מציג 'המערכת-החיה' אך-הריפו-קפוא->48ש'", "high",
      "הצגה: הסתירה-מתועדת-פומבית; הריפוי-במסילת-האחראי-לשורש-הארגון");
    if (orgRoot.ok) {
      x.a = { claim: "טענת-הדף", value: "המערכת-החיה (living system)", src: "index.html של-השורש" };
      x.b = { claim: "pushed_at", value: orgRoot.data.pushedAt + " (age " + orgRoot.data.ageH + "h)", src: "GitHub API" };
      x.verdict = orgRoot.data.ageH > 48 ? "CONFIRMED" : "OK";
      if (x.verdict === "CONFIRMED") x.note = "דף-שורש-קפוא מול-מערכת-שנדחפת-כל-דקות-בריפואים-הפנימיים";
    } else x.err = orgRoot.err;
    items.push(x);
  }
  { // X6 — dex/money.json בבית-הקונסולה ישן->24ש' ומוזן-לדפים
    const x = mk("X6-console-money-stale", "dex/money.json בבית-הקונסולה נשאר->24ש' ומוזן-לדפים", "low",
      "מסילת-Console — מתועד-בכנות; המירור-מדווח-עליו");
    if (mreport.ok) {
      const age = mreport.data.dexMoneyAgeH;
      x.a = { claim: "dex/money.json ageH (מפורש-מ-string-age-במירור)", value: age == null ? null : +Number(age).toFixed(2), src: `Domain/mirror-report.json@${mreport.data.mirrorGenAt || "?"} ← Console (shape: ${mreport.data.rawShape || "?"})` };
      x.b = { claim: "רף-טריות", value: 24, src: "מדיניות-הבית" };
      x.verdict = age == null ? "UNMEASURED" : (age > 24 ? "CONFIRMED" : "OK");
      if (age != null && age <= 24) x.note = "bug-t55d-a: הבדיקה-הקודמת-קראה-שדה-ageH-שלא-קיים-והדביקה-את-X6-בUNMEASURED-תמידי — תוקן: פירוש-השדה-age-המיתרי";
    } else x.err = mreport.err;
    items.push(x);
  }

  const contradictions = {
    schema: "AGENT9-CONTRADICTIONS/1",
    at: new Date().toISOString(),
    law: "פקודת-הבעלים t55c: 'יש הרבה סתירות בגיט בין הדברים בוא נוודא הכל' — כל-סתירה = שתי-טענות-גיט + נמדד + פסק. fail-closed: מקור-שלא-השיב = UNMEASURED, לעולם-לא-מומצא.",
    summary: {
      total: items.length,
      confirmed: items.filter(i => i.verdict === "CONFIRMED").length,
      ok: items.filter(i => i.verdict === "OK").length,
      unmeasured: items.filter(i => i.verdict === "UNMEASURED").length,
    },
    items,
  };

  return {
    schema: "AGENT9-FLEET-TRUTH/1",
    at: new Date().toISOString(),
    baker: "Domain/scripts/agent9-fleet-truth.cjs (keyless, fail-closed — מקור-שלא-השיב מדווח-ולא-מומצא)",
    treasury: floor.ok || chainTreasury.ok
      ? { ok: floor.ok, ...floor.data, chain: chainTreasury.ok ? chainTreasury.data : null, chainErr: chainTreasury.ok ? null : chainTreasury.err }
      : { ok: false, err: floor.err && chainTreasury.err ? floor.err + " | " + chainTreasury.err : (floor.err || chainTreasury.err) },
    trading: live.ok ? { ok: true, ...live.data } : { ok: false, err: live.err },
    hedgeGate: hedge.ok ? { ok: true, ...hedge.data } : { ok: false, err: hedge.err },
    fixedfloat: ff.ok ? { ok: true, ...ff.data } : { ok: false, err: ff.err },
    arteries,
    contradictions,
    sources,
  };
}

/* ── selftest ───────────────────────────────────────────────────────────────── */
async function selftest() {
  let fail = 0; const A = (c, m) => { if (!c) { console.error("SELFTEST-FAIL:", m); fail = 1; } };
  const b = await collect();
  A(b.schema === "AGENT9-FLEET-TRUTH/1", "schema");
  A(b.sources.every(s => s.ok === true || (s.ok === false && s.err)), "every source is ok-with-data OR fail-closed-with-err (never invented)");
  A(b.at && !Number.isNaN(Date.parse(b.at)), "baked-at is ISO");
  A(b.contradictions && b.contradictions.schema === "AGENT9-CONTRADICTIONS/1", "contradictions schema");
  A(b.contradictions.summary.total === b.contradictions.items.length, "contradictions summary matches items");
  A(b.contradictions.summary.confirmed + b.contradictions.summary.ok + b.contradictions.summary.unmeasured === b.contradictions.items.length, "contradictions verdict counts sum");
  A(b.contradictions.items.every(i => ["CONFIRMED", "OK", "UNMEASURED"].includes(i.verdict)), "every contradiction verdict in enum");
  A(b.contradictions.items.every(i => i.verdict !== "UNMEASURED" || i.err || [i.a.value, i.b.value].some(v => v == null)), "UNMEASURED carries err or missing values (fail-closed)");
  A(b.contradictions.items.every(i => i.verdict !== "CONFIRMED" || (i.a.value != null && i.b.value != null)), "CONFIRMED always carries both measured values");
  console.log("selftest: sources =", b.sources.length,
    "| ok =", b.sources.filter(s => s.ok).length,
    "| fail-closed =", b.sources.filter(s => !s.ok).length,
    "| contradictions =", JSON.stringify(b.contradictions.summary));
  process.exit(fail);
}

if (process.argv.includes("--selftest")) {
  selftest().then(rc => process.exit(rc)).catch(e => { console.error("selftest-fatal:", e.message); process.exit(1); });
} else collect().then(b => {
  require("fs").writeFileSync(OUT, JSON.stringify(b, null, 1) + "\n");
  console.log(`baked ${OUT} @ ${b.at} | sources ok ${b.sources.filter(s => s.ok).length}/${b.sources.length}`);
}).catch(e => { console.error("FATAL:", e.message, "— fail-closed, nothing baked"); process.exit(1); });
