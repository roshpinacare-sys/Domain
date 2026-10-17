// MOMENT-WATCH — סוכן הבנת-הרגע של הרשת הריבונית (R62)
//
// הדרישה מהמפעיל: "לקבל הבנה של הרגע ולא תמיד לעבוד לפי תוכנית מסודרת
// אלא לחפש הבנות ויכולות ברשת ופוטנציאל ולבחון דרכי מימוש — כי תוכניות
// ישנות יכולות להיות לא רלוונטיות בשוק תזזיתי; הריבונות חייבת להיות
// אוטונומית-דינמית."
//
// התשובה הכנה: לא עוד תוכנית אלא קריאת-רגע חיה כל חצי-שעה, ממקורות
// ציבוריים בלבד, עם ארבעה כלים:
//   1. משטר-השוק — BTC 24ש' + אינדקס פחד-ותאווה (אם נופל — null כן).
//   2. קו-הזהות שלנו — parity ‏SBD/STEEM מול הספר הפנימי החי של Steem;
//      עומק-קנייה מתחת לקו = העודף המדוד שהגריד נבנה ללכוד.
//   3. תובנות-רגע — חריגות שנמדדו עכשיו (מלאי-SBD, תזוזת-STEEM, ישנות-מראה,
//      הפקדות, זרימה חיצונית), כל אחת עם המספר שלה.
//   4. אימון-כנון — קריאת-כיוון דטרמיניסטית על STEEM (סף ±3% ביממה)
//      שנרשמת ומוכרעת רק אחרי 6 שעות; כל קריאה שהוכרעה נספרת בסטטיסטיקה
//      גלויה. זה לא ניבוי ולא למידת-מכונה — זו מדידה של הקריאות שלנו
//      מול המציאות, שתישאר גם אם תצא גרועה. FLAT אינו נספר.
//
// אפס-מפתחות: CoinGecko · alternative.me · RPC ציבורי של Steem · המראות
// הציבוריות שלנו. כל נפילה נרשמת בכנות (null + סיבה) — שום דבר לא מדומה.
// הסוכן לא זז כסף, לא חותם ולא מזניק אף מכונה: הוא רואה, מבין, מתעד.
//
// מאז netrun-8-b: בכל ריצה הסוכן גם מפרסם את agents/registry.json ממנוי-דינמי
// של הארגון (fleet-truth, סעיף 6 למטה) — במקום רשימת-ריפואים קשיחה שכיסתה
// 16 מתוך 40. כל מספר-סוכנים בדפים נגזר מהמדידה הזו, לעולם לא מקידוד-יד.

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";

const OUT_DIR = "moment";
const STEEM_ACCOUNT = "owner";
const GRID_URL = "https://roshpinacare-sys.github.io/Console/dex/grid.json"; // המראה החיה של המנוע
const CALL_THRESHOLD_PCT = 3; // סף קריאת-כיוון: |±3%| STEEM ביממה
const CALL_HORIZON_H = 6;    // אופק הכרעה: 6 שעות
const HISTORY_CAP = 240;
const THRESHOLDS = { btc24hPct: 4, fgLow: 25, fgHigh: 60, steemMovePct: 5, gridStaleHours: 26 };

const num = (s) => parseFloat(String(s).replace(/[A-Za-z ]+/g, "")) || 0;
const r2 = (v) => Math.round(v * 100) / 100;

/* ═══ 1) מקורות-הרגע ═══ */

async function coingeckoPrices() {
  const url =
    "https://api.coingecko.com/api/v3/simple/price?ids=steem,steem-dollars,bitcoin&vs_currencies=usd&include_24hr_change=true";
  let lastErr = null;
  // שני ניסיונות עם המתנה — הגבלות-קצב רגעיות הן שגרה ב-API החופשי
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const r = await fetch(url, { headers: { "User-Agent": "moment-watch" } });
      if (!r.ok) throw new Error(`coingecko -> ${r.status}`);
      const j = await r.json();
      return {
        steemUsd: j?.steem?.usd ?? null,
        steem24h: j?.steem?.usd_24h_change ?? null,
        sbdUsd: j?.["steem-dollars"]?.usd ?? null,
        btcUsd: j?.bitcoin?.usd ?? null,
        btc24h: j?.bitcoin?.usd_24h_change ?? null,
      };
    } catch (e) {
      lastErr = e;
      if (attempt < 2) await new Promise((res) => setTimeout(res, 15_000));
    }
  }
  throw lastErr;
}

async function fearGreed() {
  try {
    const r = await fetch("https://api.alternative.me/fng/?limit=1", {
      headers: { "User-Agent": "moment-watch" },
    });
    if (!r.ok) throw new Error(`fng -> ${r.status}`);
    const j = await r.json();
    const d = j?.data?.[0];
    return d ? { value: Number(d.value), label: d.value_classification ?? null } : null;
  } catch (e) {
    return { value: null, label: null, error: String(e.message).slice(0, 60) }; // נפילה כנה
  }
}

async function steemSide() {
  const post = async (method, params) => {
    const r = await fetch("https://api.steemit.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ jsonrpc: "2.0", method, params, id: 1 }),
    });
    if (!r.ok) throw new Error(`steemit rpc -> ${r.status}`);
    const j = await r.json();
    if (j?.error) throw new Error(String(j.error.message ?? "rpc-error"));
    return j.result;
  };
  const [book, accts, props] = await Promise.all([
    post("condenser_api.get_order_book", [21]),
    post("condenser_api.get_accounts", [[STEEM_ACCOUNT]]),
    post("condenser_api.get_dynamic_global_properties", []),
  ]);
  const fund = num(props.total_vesting_fund_steem);
  const shares = num(props.total_vesting_shares);
  const perVest = shares > 0 ? fund / shares : 0;
  const a = accts?.[0];
  if (!a) throw new Error("commander account unreadable");
  // כמויות הספר מגיעות במילי-יחידות; real_price = ‏SBD לכל STEEM
  const bestBid = book?.bids?.[0]?.real_price ? Number(book.bids[0].real_price) : null;
  const bestAsk = book?.asks?.[0]?.real_price ? Number(book.asks[0].real_price) : null;
  const bidsDepthSbd = (book?.bids ?? []).reduce((s, b) => s + num(b?.sbd ?? "0"), 0) / 1000;
  const asksDepthSteem = (book?.asks ?? []).reduce((s, o) => s + num(o?.steem ?? "0"), 0) / 1000;
  return {
    book: { bestBid, bestAsk, bidsDepthSbd: r2(bidsDepthSbd), asksDepthSteem: r2(asksDepthSteem), levels: (book?.bids ?? []).length },
    commander: {
      steem: num(a.balance),
      sbd: num(a.sbd_balance),
      sp: (num(a.vesting_shares) - num(a.delegated_vesting_shares)) * perVest,
      powerdown: {
        active: num(a.to_withdraw) > 0,
        weeklySp: num(a.vesting_withdraw_rate) * perVest,
        nextPayment: a.next_vesting_withdrawal || null,
        remainingSp: (num(a.to_withdraw) / 1e6) * perVest,
      },
    },
  };
}

async function gridMirror() {
  const r = await fetch(`${GRID_URL}?t=${Date.now()}`, { headers: { "User-Agent": "moment-watch" } });
  if (!r.ok) throw new Error(`grid mirror -> ${r.status}`);
  return r.json();
}

function localJson(path, fallback = null) {
  if (!existsSync(path)) return fallback;
  try { return JSON.parse(readFileSync(path, "utf8")); } catch { return fallback; }
}

/* ═══ 2) מדידה ═══ */

const prices = await coingeckoPrices().catch((e) => ({ error: String(e.message).slice(0, 90) }));
const fg = await fearGreed();
const steem = await steemSide().catch((e) => ({ error: String(e.message).slice(0, 90) }));
const grid = await gridMirror().catch((e) => null);
const money = localJson("dex/money.json");
const deposits = localJson("dex/deposits.json");

const steemUsd = prices.steemUsd ?? null;
const sbdUsd = prices.sbdUsd ?? null;
const parity = steemUsd && sbdUsd ? steemUsd / sbdUsd : null; // SBD לכל STEEM, כמו במנוע
const bestBid = steem.book?.bestBid ?? null;
const bidSurplusBps = bestBid != null && parity ? ((bestBid - parity) / parity) * 1e4 : null;

// משטר-השוק: דטרמיניסטי, ספים מפורסמים
const btc24h = prices.btc24h ?? null;
const fgVal = fg?.value ?? null;
const drivers = [];
if (btc24h != null) drivers.push(`BTC ${btc24h >= 0 ? "+" : ""}${btc24h.toFixed(1)}%`);
if (fgVal != null) drivers.push(`F&G ${fgVal}`);
let regimeLabel = "UNKNOWN";
if (btc24h != null) {
  if (btc24h <= -THRESHOLDS.btc24hPct || (fgVal != null && fgVal <= THRESHOLDS.fgLow)) regimeLabel = "RISK_OFF";
  else if (btc24h >= THRESHOLDS.btc24hPct || (fgVal != null && fgVal >= THRESHOLDS.fgHigh)) regimeLabel = "RISK_ON";
  else regimeLabel = "NEUTRAL";
}
const regime = { label: regimeLabel, drivers, thresholds: THRESHOLDS };

// מסלול-הדלק ואוצר בסימון חי
const cmd = steem.commander ?? null;
const weeklyUsd = cmd?.powerdown.weeklySp && steemUsd ? cmd.powerdown.weeklySp * steemUsd : null;
const treasuryUsd = cmd && steemUsd ? cmd.steem * steemUsd + cmd.sbd * (sbdUsd ?? 0) + cmd.sp * steemUsd : null;

/* ═══ 3) תובנות-הרגע ═══ */

const insights = [];
if (bidSurplusBps != null) {
  insights.push({
    kind: "parity-edge",
    tone: bidSurplusBps < 0 ? "good" : "warn",
    text: bidSurplusBps < 0
      ? `עומק-קנייה חי ${Math.round(Math.abs(bidSurplusBps))}bps מתחת לקו-הזהות (bid ${bestBid?.toFixed(4)} מול parity ${parity?.toFixed(4)}) — עודף מדוד לגריד.`
      : `הספר החי ${Math.round(bidSurplusBps)}bps מעל קו-הזהות — אין עודף-קנייה כרגע; הגריד ממתין.`,
  });
}
const blocker = Array.isArray(grid?.blocker) ? grid.blocker[0] : null;
if (blocker) insights.push({ kind: "sbd-inventory", tone: "warn", text: `צוואר-הקנייה של הגריד: ${blocker}` });
const steem24h = prices.steem24h ?? null;
if (steem24h != null && Math.abs(steem24h) >= THRESHOLDS.steemMovePct) {
  insights.push({ kind: "steem-move", tone: "info", text: `STEEM ${steem24h >= 0 ? "+" : ""}${steem24h.toFixed(1)}% ביממה — סימוני-הגריד ייגזרו מחדש בפעימה הבאה; תוכניות-עבר עלולות לא-רלוונטיות.` });
}
if (cmd?.powerdown?.nextPayment && weeklyUsd != null) {
  insights.push({ kind: "fuel", tone: "info", text: `דלק נוחת ${cmd.powerdown.nextPayment.slice(0, 10)} — ≈${cmd.powerdown.weeklySp.toFixed(0)} SP ≈ ${weeklyUsd.toFixed(1)}$ בסימון חי.` });
}
const gridAgeH = grid?.publishedAt ? (Date.now() - new Date(grid.publishedAt).getTime()) / 3.6e6 : null;
if (gridAgeH != null && gridAgeH > THRESHOLDS.gridStaleHours) {
  insights.push({ kind: "grid-stale", tone: "warn", text: `מראת-הגריד מעופשת (${gridAgeH.toFixed(0)}ש' מאז ${grid.publishedAt}) — חריגה מקצב הלב המובטח.` });
}
const depositsTotal = Array.isArray(deposits?.deposits) ? deposits.deposits.length : null;
if (depositsTotal != null) {
  insights.push({
    kind: "deposits",
    tone: depositsTotal === 0 ? "info" : "good",
    text: depositsTotal === 0
      ? "אפס הפקדות-חוץ (ספר ההפקדות הפתוח נקרא מהריפו) — המעגל האמיתי טרם נסגר בכסף של מישהו אחר."
      : `נמדדו ${depositsTotal} הפקדות-חוץ בספר הפתוח.`,
  });
}
if (grid?.externalFlowUsd != null) {
  insights.push({ kind: "external-flow", tone: "info", text: `זרימת-חוץ מצטברת: ${grid.externalFlowUsd.toFixed(4)}$ מ-${grid?.run?.filledTotal ?? 0} מילויים (txids בספר הציבורי).` });
}

// ═══ 4) אימון-כנון: קריאת-כיוון שנרשמת ומוכרעת ═══

// קריאה נרשמת רק עם מחיר-בסיס חי: קריאה בלי בסיס היא הבטחה שאין לה מדידה,
// והכרעתה תיצור hit מזויף (0/null → ∞). אין מחיר — אין קריאה.
let call = null; // אין קריאה כשאין מדידה
if (steem24h != null && steemUsd != null) {
  call = steem24h >= CALL_THRESHOLD_PCT ? "UP" : steem24h <= -CALL_THRESHOLD_PCT ? "DOWN" : "FLAT";
}

let history = localJson(`${OUT_DIR}/history.json`, []);
if (!Array.isArray(history)) history = [];
const now = Date.now();

// הכרעת קריאות שהגיעו לאופק — רק כשיש מחיר חי להכריע לפיו
let resolvedNow = 0;
if (steemUsd != null) {
  for (const h of history) {
    // רק קריאות עם בסיס נמדד מוכרעות; קריאה ללא בסיס אינה נספרת לעולם (הגנת-יושר)
    if (h.call && h.call !== "FLAT" && h.steemUsd != null && !h.resolved && now - new Date(h.at).getTime() >= CALL_HORIZON_H * 3.6e6) {
      const realizedPct = (steemUsd / h.steemUsd - 1) * 100;
      h.resolved = {
        at: new Date().toISOString(),
        realizedPct: r2(realizedPct),
        hit: (realizedPct > 0 && h.call === "UP") || (realizedPct < 0 && h.call === "DOWN"),
      };
      resolvedNow++;
    }
  }
}
const resolvedCalls = history.filter((h) => h.resolved);
const hits = resolvedCalls.filter((h) => h.resolved.hit).length;
const callStats = resolvedCalls.length
  ? { resolved: resolvedCalls.length, hits, hitRatePct: Math.round((hits / resolvedCalls.length) * 100), horizonH: CALL_HORIZON_H, thresholdPct: CALL_THRESHOLD_PCT }
  : { resolved: 0, hits: 0, hitRatePct: null, horizonH: CALL_HORIZON_H, thresholdPct: CALL_THRESHOLD_PCT };

// רישום הקריאה של עכשיו
history.push({
  at: new Date().toISOString(),
  steemUsd: steemUsd,
  steem24h: steem24h ?? null,
  regime: regimeLabel,
  call,
});
if (history.length > HISTORY_CAP) history = history.slice(-HISTORY_CAP);

/* ═══ 5) פרסום ═══ */

const doc = {
  ok: prices.error ? false : true,
  format: "moment-watch-v1",
  publishedAt: new Date().toISOString(),
  engine: "Domain/agents/moment-watch · R62 sovereign moment",
  role: "reads the live moment every 30 minutes (market regime, our parity line vs the live internal book, fuel runway, measured anomalies) and records a deterministic directional call that is only ever scored after its horizon has passed - training as measurement, never as promise",
  market: { ...prices, fearGreed: fg },
  paritySbdPerSteem: parity,
  liveBook: steem.error ? null : {
    ...steem.book,
    bidSurplusBps: bidSurplusBps != null ? Math.round(bidSurplusBps) : null,
  },
  regime,
  runway: steem.error ? null : {
    ...cmd.powerdown,
    weeklyUsd: weeklyUsd != null ? r2(weeklyUsd) : null,
    treasuryUsd: treasuryUsd != null ? r2(treasuryUsd) : null,
  },
  grid: grid ? { verdict: grid.verdict ?? null, armed: grid.armed ?? null, blocker, externalFlowUsd: grid.externalFlowUsd ?? null, publishedAt: grid.publishedAt ?? null } : null,
  moneyPath: money ? { fuel: money.fuel ?? null, redemption: money.redemption?.verdict ?? null } : null,
  call,
  callStats,
  resolvedNow,
  insights,
  sources: ["api.coingecko.com", "api.alternative.me", "api.steemit.com", "Console/dex/grid.json (live mirror)", "dex/money.json (self)", "dex/deposits.json (self)"],
  honesty: "כל נתון נמדד חי ממקורות ציבוריים; נפילת מקור מסומנת בכנות ואינה מוחלפת בהמצאה. קריאת-הכיוון דטרמיניסטית (±3% ביממה) ומוכרעת רק אחרי 6 שעות מול מחיר חי - גם כשהתוצאה גרועה. הסוכן אינו זז כסף, אינו חותם ואינו מזניק מכונות.",
};

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/moment.json`, JSON.stringify(doc, null, 1) + "\n");
writeFileSync(`${OUT_DIR}/history.json`, JSON.stringify(history, null, 1) + "\n");

const edgeLine = bidSurplusBps != null ? `${Math.round(bidSurplusBps)}bps` : "n/a";
const callLine = call ? `${call}${resolvedNow ? ` · ${resolvedNow} resolved` : ""}` : "none";
console.log(`[moment-watch] regime=${regimeLabel} steem=${steemUsd ?? "down"} parity=${parity?.toFixed(4) ?? "n/a"} bid-edge=${edgeLine}`);
console.log(`[moment-watch] call=${callLine} · stats ${callStats.resolved} resolved / ${callStats.hitRatePct ?? "–"}% hit`);
console.log(`[moment-watch] insights=${insights.length} sources=${prices.error ? "DEGRADED (coingecko down)" : "ok"}`);

/* ═══ 6) fleet-truth: רישום-הסוכנים באמת ממנוי-דינמי של הארגון (netrun-8-b) ═══
   תלונת-הבעלים: הדפים הכריזו "24 סוכנים" מקידוד-יד בעוד המדידה החיה אחרת, והרישום
   הקנוני כיסה 16 ריפואים מרשימה-קשיחה כשבארגון 40. מעתה הריצה הזו מפרסמת גם את
   agents/registry.json מה-API של גיטהאב:
     · מנוי-דינמי: GET /orgs/:org/repos?per_page=100 עם עימוד מלא דרך כותרת Link;
     · GITHUB_TOKEN אופציונלי (כותרת Bearer שקטה — הטוקן לעולם לא נדפס), עם נפילה
       כנה לאנונימי: בלי טוקן ניתנים למדידה רק הריפואים הפומביים, וזה נרשם בתוך
       הרישום עצמו (measurement.scope/notes), לא מוסתר;
     · כל סוכן נושא מדידה חיה מה-Actions API (ריצות, הצלחות, משכים, ריצה אחרונה);
       measuredState (alive/idle/dead/degraded) נגזר מהנתונים בלבד, לצד אוצא-המילון
       הקנוני (state) לתאימות-אחורה לדפים שכבר קוראים את הרישום;
     · מסילות-פרטיות שאינן קריאות אנונימית נישאות מהמפקד הקודם (שנמדד בטוקן) עם
       provenance (measuredAt + carried) והתיישנות מחושבת מהנתונים שלהן עצמן;
     · שער-כנות: אם מדידת-ההיקף-החי לא הושלמה (מכסה/רשת) — הרישום הקיים אינו נדרס
       וההשלמה נדחית בכנות לריצת-הענן השעתית (שם יש GITHUB_TOKEN). אפס המצאה. */

const GH_ORG = "roshpinacare-sys";
const GH_TOKEN = process.env.GITHUB_TOKEN || process.env.AGENTS_WATCH_TOKEN || "";
const REGISTRY_OUT = process.env.REGISTRY_PATH || new URL("registry.json", import.meta.url).pathname;

let ghRemaining = null; // יתרת-מכסה כפי שגיטהאב מדווח — לשער-התקציב על קריאות-ה-yml

function ghHeaders() {
  const h = { "User-Agent": "moment-watch fleet-truth", Accept: "application/vnd.github+json" };
  if (GH_TOKEN) h.Authorization = `Bearer ${GH_TOKEN}`; // שקט: הטוקן לעולם לא נרשם ולא נדפס
  return h;
}

async function gh(url) { // כשל-מכסה הוא תוצאה כנה עם סיבה — לא רגע להמצאה
  const r = await fetch(url, { headers: ghHeaders() });
  const rem = Number(r.headers.get("x-ratelimit-remaining"));
  ghRemaining = Number.isFinite(rem) ? rem : null;
  if (r.status === 403 || r.status === 429) {
    const reset = r.headers.get("x-ratelimit-reset");
    throw new Error(`github rate-limit (${r.status}) remaining=${r.headers.get("x-ratelimit-remaining")} reset=${reset ? new Date(Number(reset) * 1000).toISOString() : "?"}`);
  }
  if (!r.ok) throw new Error(`${url.replace("https://api.github.com", "")} -> ${r.status}`);
  return r.json();
}

// מנוי-דינמי של הצי — עימוד מלא דרך כותרת Link, לא רשימה-קשיחה.
// נמדד חי (netrun-8-b): roshpinacare-sys הוא חשבון-משתמש (type=User), לא ארגון —
// /orgs/ מחזיר 404. לכן המנוי נעשה על שני הבסיסים לפי האמת: /orgs/ תחילה, וב-404
// ממשיכים ל-/users/ — והבסיס שענה נרשם בכנות בתוך המדידה (measurement.enumEndpoint).
let ghEnumEndpoint = null;
async function orgRepos() {
  for (const base of [`orgs/${GH_ORG}`, `users/${GH_ORG}`]) {
    const all = [];
    let url = `https://api.github.com/${base}/repos?per_page=100`;
    let answered = false;
    for (let page = 1; url && page <= 10; page++) {
      const r = await fetch(url, { headers: ghHeaders() });
      const rem = Number(r.headers.get("x-ratelimit-remaining"));
      ghRemaining = Number.isFinite(rem) ? rem : null;
      if (r.status === 403 || r.status === 429) throw new Error(`github rate-limit on fleet enumeration (${r.status})`);
      if (r.status === 404) break; // הבסיס הזה לא קיים — כנות: ממשיכים לבסיס השני
      if (!r.ok) throw new Error(`${base}/repos -> ${r.status}`);
      answered = true;
      const batch = await r.json();
      if (!Array.isArray(batch)) throw new Error(`${base}/repos -> unexpected response shape`);
      all.push(...batch);
      const next = /<([^>]+)>;\s*rel="next"/.exec(r.headers.get("link") || "");
      url = next ? next[1] : null;
    }
    if (answered) { ghEnumEndpoint = base; return all; }
  }
  throw new Error("fleet enumeration failed: /orgs/ and /users/ both answered non-listable (404)");
}

// הטריגר והמדינות — אותם חוקי-אמת כמו המפקד הקנוני (agents/watch.mjs)
function triggerSummary(yml) {
  if (!yml) return "unknown";
  const has = (re) => re.test(yml);
  const isSched = has(/(^|\n)\s*schedule\s*:/) || has(/-\s*cron\s*:/);
  const isDisp  = has(/(^|\n)\s*workflow_dispatch\s*:/);
  const isPush  = has(/(^|\n)\s*push\s*:/) || has(/\[\s*['"]?push/);
  const isPR    = has(/(^|\n)\s*pull_request\s*:/) || has(/['"]?pull_request['"]?\s*,/);
  const isWR    = has(/(^|\n)\s*workflow_run\s*:/);
  const isRD    = has(/(^|\n)\s*repository_dispatch\s*:/);
  const parts = [];
  if (isSched) {
    const crons = [...yml.matchAll(/cron\s*:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);
    parts.push(crons.length ? "schedule " + crons.join(", ") : "schedule");
  }
  if (isPush) parts.push("on push");
  if (isPR) parts.push("on PR");
  if (isWR) parts.push("on workflow_run");
  if (isRD) parts.push("on repository_dispatch");
  if (isDisp) parts.push("manual dispatch");
  return parts.join(" + ") || "event";
}

function stateOf(lastConcl, lastAt, trigger, name) {
  if (name === "pages build and deployment") return "auto"; // GitHub מנהל אותו בעצמו
  const ageH = lastAt ? (Date.now() - Date.parse(lastAt)) / 36e5 : Infinity;
  const isSched  = /schedule/.test(trigger || "");
  const isEvent  = /on (push|PR|workflow_run|repository_dispatch)/.test(trigger || "");
  const isManual = /manual dispatch/.test(trigger || "");
  const manualOnly = isManual && !isSched && !isEvent;
  if (lastConcl === "failure") {
    if (ageH < 48) return "degraded";
    if (isSched) return "stale";
    return manualOnly ? "backup" : "dormant";
  }
  if (lastConcl === "success") {
    if (manualOnly) return "backup";
    if (isSched) return ageH < 48 ? "live" : "stale";
    return ageH < 168 ? "on-demand" : "dormant";
  }
  return manualOnly ? "backup" : "dormant";
}

// alive/idle/dead — נגזר אמת מהנתונים בלבד, בלי שום תלות בטריגר או בקטלוג
function measuredState(conclusion, at) {
  if (!at) return "dead"; // אין ריצה מתועדת כלל
  const ageH = (Date.now() - Date.parse(at)) / 36e5;
  if (!Number.isFinite(ageH)) return "dead";
  if (conclusion === "failure" && ageH < 48) return "degraded";
  if (conclusion === "success" && ageH < 48) return "alive";
  return ageH < 168 ? "idle" : "dead";
}

const GENERIC_TRUTH = {
  layer: "PUBLISH",
  role: {
    en: "Workflow measured live by the fleet-truth run (moment-watch) straight from the GitHub Actions API - runs, timing and state strictly from measured data; no catalog entry yet.",
    he: "Workflow שנמדד חי על-ידי ריצת fleet-truth (moment-watch) ישירות מה-API של GitHub Actions - ריצות, תזמון ומצב נגזרים מהנתונים בלבד; עדיין אין לו רישום בקטלוג.",
  },
  input: { en: "per workflow definition", he: "לפי הגדרת ה-workflow" },
  output: { en: "per workflow definition", he: "לפי הגדרת ה-workflow" },
};

try {
  const liveRepos = await orgRepos(); // כשל כאן = כשל-כנה של כל מדידת-הצי (הרישום נשאר כולו)
  const nowIso = new Date().toISOString().replace(/\.\d+Z$/, "Z");
  const liveByName = new Map(liveRepos.map((r) => [r.name, r]));
  const liveNames = [...liveByName.keys()];

  const prev = existsSync(REGISTRY_OUT) ? JSON.parse(readFileSync(REGISTRY_OUT, "utf8")) : null;
  const prevById = new Map((prev?.agents ?? []).map((a) => [a.id, a]));
  const snap = localJson(new URL("gh-snapshot.json", import.meta.url).pathname); // רוסטה שנמדדה בטוקן בריצה השעתית
  const snapRepos = Array.isArray(snap?.repos) ? snap.repos : [];

  // רוסטת-הריפואים: מה שנראה חי עכשיו + מה שידוע ממקורות-מדידה קודמים (עם provenance)
  const roster = new Map();
  for (const r of liveRepos) roster.set(r.name, { name: r.name, visibility: r.visibility ?? "public", archived: !!r.archived, provenance: "live-org-enumeration" });
  for (const r of snapRepos) if (!roster.has(r.name)) roster.set(r.name, { name: r.name, visibility: r.visibility ?? "unknown", archived: !!r.archived, provenance: `gh-snapshot (token-measured ${snap.generatedAt ?? "?"})` });
  for (const name of [...new Set([...(prev?.reposWithAgents ?? []), ...(prev?.reposIdle ?? [])])]) if (!roster.has(name)) roster.set(name, { name, visibility: "unknown", archived: false, provenance: "previous registry" });

  const notes = [];
  const plan = []; // כל ה-workflows הפעילים בריפואים-החיים
  let unmeasured = 0;
  for (const repo of liveNames) {
    let wfs;
    try { wfs = (await gh(`https://api.github.com/repos/${GH_ORG}/${repo}/actions/workflows?per_page=100`)).workflows || []; }
    catch (e) { notes.push(`workflows ${repo}: ${e.message}`); unmeasured++; continue; }
    for (const w of wfs) if (w.state === "active") plan.push({ repo, w });
  }

  // מדידת-החיות לכל סוכן: ריצות אמיתיות מה-Actions API (מדגם 100 אחרונות, כמו המפקד הקנוני)
  const measured = [];
  const declaredNeverRan = [];
  for (const { repo, w } of plan) {
    let runs;
    try { runs = (await gh(`https://api.github.com/repos/${GH_ORG}/${repo}/actions/workflows/${w.id}/runs?per_page=100`)).workflow_runs || []; }
    catch (e) { notes.push(`runs ${repo}/${w.name}: ${e.message}`); unmeasured++; continue; }
    if (!runs.length) { declaredNeverRan.push({ repo, name: w.name, path: w.path }); continue; } // מוצהר אך מעולם לא רץ — נרשם, לא מוסתר
    const succ = runs.filter((r) => r.conclusion === "success").length;
    const fail = runs.filter((r) => r.conclusion === "failure").length;
    const durs = runs.slice(0, 40).map((r) => {
      const s = Date.parse(r.run_started_at || r.created_at), e = Date.parse(r.updated_at);
      return Number.isFinite(s) && Number.isFinite(e) ? (e - s) / 1000 : null;
    }).filter((x) => x !== null && x >= 0);
    const last = runs.find((r) => r.conclusion) || runs[0]; // הריצה האחרונה שהושלמה — לא ריצה בעיצומה
    measured.push({ repo, w, runs, last, succ, fail, durs });
  }

  // טריגרים: מקובץ ה-workflow החי כשהתקציב מאפשר, אחרת מהמפקד הקודם, אחרת "unknown" כנה
  const fresh = [];
  for (const m of measured) {
    const { repo, w, runs, last, succ, fail, durs } = m;
    const id = `${repo.toLowerCase()}-${w.name.toLowerCase().replace(/ /g, "-")}`;
    const prevEntry = prevById.get(id);
    let trigger = "unknown";
    if (ghRemaining === null || ghRemaining > 8) {
      try {
        const c = await gh(`https://api.github.com/repos/${GH_ORG}/${repo}/contents/${encodeURIComponent(w.path)}?ref=HEAD`);
        trigger = triggerSummary(Buffer.from(c.content || "", "base64").toString("utf8"));
      } catch { trigger = prevEntry?.trigger ?? "unknown"; }
    } else {
      trigger = prevEntry?.trigger ?? "unknown";
    }
    const vis = liveByName.get(repo)?.visibility ?? "public";
    const ms = measuredState(last.conclusion, last.run_started_at);
    const st = trigger !== "unknown"
      ? stateOf(last.conclusion, last.run_started_at, trigger, w.name)
      : (w.name === "pages build and deployment" ? "auto" : ms === "alive" ? "live" : ms === "degraded" ? "degraded" : "dormant");
    fresh.push({
      id, name: w.name, repo,
      visibility: vis, rail: vis === "public" ? "public" : "private",
      trigger,
      schedule: /schedule/.test(trigger) ? trigger : (prevEntry?.schedule || trigger),
      layer: prevEntry?.layer ?? GENERIC_TRUTH.layer,
      role: prevEntry?.role ?? GENERIC_TRUTH.role,
      input: prevEntry?.input ?? GENERIC_TRUTH.input,
      output: prevEntry?.output ?? GENERIC_TRUTH.output,
      ...(prevEntry?.migratedTo ? { migratedTo: prevEntry.migratedTo } : {}),
      state: st,
      measuredState: ms,
      stats: { runs_sampled: runs.length, success: succ, failure: fail, other: runs.length - succ - fail,
        successRate: Math.round((1000 * succ) / runs.length) / 10, avgDurS: durs.length ? Math.round((10 * durs.reduce((a, b) => a + b, 0)) / durs.length) / 10 : null },
      lastRun: { at: last.run_started_at, conclusion: last.conclusion },
      measuredAt: nowIso,
    });
  }

  // נישאים: סוכני-מסילות שלא נמדדו בריצה זו (אנונימי ← פרטי) נישאים מהמפקד הקודם
  // עם provenance. ריפו שנמדד עכשיו וה-workflow שלו לא נראה — נמחק באמת ונוריד אותו בכנות.
  const freshIds = new Set(fresh.map((a) => a.id));
  const carried = [];
  for (const a of (prev?.agents ?? [])) {
    if (freshIds.has(a.id)) continue;
    if (liveNames.includes(a.repo)) continue;
    carried.push({
      ...a,
      measuredAt: prev?.generatedAt ?? null,
      carried: true,
      state: (a.lastRun?.at && a.trigger ? stateOf(a.lastRun.conclusion, a.lastRun.at, a.trigger, a.name) : a.state),
      measuredState: measuredState(a.lastRun?.conclusion, a.lastRun?.at),
    });
  }

  const all = [...fresh, ...carried];
  const order = { live: 0, "on-demand": 1, auto: 2, backup: 3, stale: 4, degraded: 5, dormant: 6 };
  all.sort((a, b) => (order[a.state] ?? 9) - (order[b.state] ?? 9) || a.repo.localeCompare(b.repo) || a.name.localeCompare(b.name));

  const withAgent = [...new Set(all.map((a) => a.repo))];
  const rosterNames = [...roster.keys()];
  const liveScopeComplete = unmeasured === 0; // כל ריפו-חי נפקד וכל workflow קיבל מדידת-ריצות
  const fullyComplete = liveScopeComplete && carried.length === 0 && liveRepos.length === rosterNames.length;

  if (!liveScopeComplete) {
    // שער-הכנות: מדידה חלקית לא דורסת רישום שלם — נדחה בכנות לריצת-הענן
    console.log(`[moment-watch] fleet-truth: INCOMPLETE (${unmeasured} unmeasured units) — agents/registry.json NOT overwritten; deferred to the hourly CI run (GITHUB_TOKEN)`);
    for (const n of notes.slice(0, 5)) console.log(`[moment-watch]   · ${n}`);
  } else {
    const reg = {
      ok: true,
      generatedAt: nowIso,
      source: "github-actions-api",
      measuredBy: "Domain/agents/moment-watch.mjs · dynamic fleet enumeration (org-or-user endpoint, Link-paginated), optional GITHUB_TOKEN, honest anonymous fallback",
      reposTotal: rosterNames.length,
      reposMeasured: liveNames.length,
      reposWithAgents: rosterNames.filter((r) => withAgent.includes(r)),
      reposIdle: rosterNames.filter((r) => !withAgent.includes(r)),
      agents: all,
      ...(declaredNeverRan.length ? { declaredNeverRan } : {}),
      measurement: {
        anonymous: !GH_TOKEN,
        complete: fullyComplete,
        liveScopeComplete,
        scope: GH_TOKEN ? "whole fleet (token)" : "public repos measured live; private rails carried from the previous token-measured census (provenance: measuredAt)",
        enumEndpoint: ghEnumEndpoint,
        orgReposSeen: liveRepos.length,
        carriedCount: carried.length,
        ...(notes.length ? { notes } : {}),
      },
    };
    writeFileSync(REGISTRY_OUT, JSON.stringify(reg, null, 1) + "\n");
    const aliveN = all.filter((a) => a.measuredState === "alive").length;
    console.log(`[moment-watch] fleet-truth: ${all.length} agents (${aliveN} alive by data) · repos measured ${liveNames.length}/${rosterNames.length} · carried ${carried.length} · declared-never-ran ${declaredNeverRan.length} · scope=${GH_TOKEN ? "org-wide (token)" : "public-only (anonymous)"}`);
  }
} catch (e) {
  console.log(`[moment-watch] fleet-truth: FAILED HONESTLY (${e.message}) — agents/registry.json untouched; regeneration deferred to the hourly CI run (GITHUB_TOKEN)`);
}
