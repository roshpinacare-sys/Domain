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

const jfetch = async (url, opts, timeoutMs = 20000) => {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), timeoutMs);
  try {
    const r = await fetch(url, { ...opts, signal: ctl.signal, headers: { "User-Agent": "saos-agent9/1 truth-collector (keyless)", ...(opts?.headers || {}) } });
    if (!r.ok) throw new Error(`http-${r.status}`);
    return await r.json();
  } finally { clearTimeout(t); }
};
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

  // 4. סחר-חי — headcorner מן-השרשרת (RPC-ציבורי; דוקטרינת-הבית R74: זה-הכסף-האמת)
  const live = push(await wrap("headcorner-live", async () => {
    const [accArr, orders, props, hist] = await Promise.all([
      rpc("condenser_api.get_accounts", [["headcorner"]]),
      rpc("condenser_api.get_open_orders", ["headcorner"]),
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
      const resp = await rpc("condenser_api.get_account_history", ["headcorner", lo, 100]);
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
      const j = await jfetch(`${GH_API}/actions/workflows/${wf}.yml/runs?per_page=1`);
      const run = j.workflow_runs?.[0];
      if (!run) throw new Error("no-runs");
      return { status: run.status, conclusion: run.conclusion, at: run.created_at, url: run.html_url };
    }));
    arteries.push({ id: wf, ok: r.ok, ...(r.ok ? r.data : { err: r.err }) });
  }

  return {
    schema: "AGENT9-FLEET-TRUTH/1",
    at: new Date().toISOString(),
    baker: "Domain/scripts/agent9-fleet-truth.cjs (keyless, fail-closed — מקור-שלא-השיב מדווח-ולא-מומצא)",
    treasury: floor.ok ? floor.data : { ok: false, err: floor.err },
    trading: live.ok ? live.data : { ok: false, err: live.err },
    hedgeGate: hedge.ok ? hedge.data : { ok: false, err: hedge.err },
    fixedfloat: ff.ok ? ff.data : { ok: false, err: ff.err },
    arteries,
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
  console.log("selftest: sources =", b.sources.length,
    "| ok =", b.sources.filter(s => s.ok).length,
    "| fail-closed =", b.sources.filter(s => !s.ok).length);
  process.exit(fail);
}

if (process.argv.includes("--selftest")) {
  selftest().then(rc => process.exit(rc)).catch(e => { console.error("selftest-fatal:", e.message); process.exit(1); });
} else collect().then(b => {
  require("fs").writeFileSync(OUT, JSON.stringify(b, null, 1) + "\n");
  console.log(`baked ${OUT} @ ${b.at} | sources ok ${b.sources.filter(s => s.ok).length}/${b.sources.length}`);
}).catch(e => { console.error("FATAL:", e.message, "— fail-closed, nothing baked"); process.exit(1); });
