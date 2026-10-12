'use strict';
/**
 * recruit.cjs — army self-recruitment desk (public openings board).
 *
 * The desk keeps a professional Hebrew jobs manifest in sync with live fleet
 * needs and registers a role only with mechanism evidence. It codifies that:
 *   1. read LIVE fleet signals (receipts freshness, econ book, books inventory,
 *      mechanism markers in the agent sources);
 *   2. run a RULE TABLE where every fleet gap opens a ROLE with a contract
 *      (mission, trigger, evidence, cadence);
 *   3. a role is registered as FILLED only with concrete in-repo mechanism evidence
 *      (file + marker string) — otherwise PROPOSED (contract drafted, awaiting
 *      implementation) or DEFERRED (with reason). Nothing is claimed without proof;
 *   4. write the public openings board (recruitment.json/.md) — the army's hiring
 *      ledger, keyless, fail-soft, exit 0 always.
 */
const fs = require('fs');
const path = require('path');

const AG = __dirname;
const OUT_JSON = path.join(AG, 'recruitment.json');
const OUT_MD = path.join(AG, 'recruitment.md');
const RECEIPTS = path.join(AG, 'receipts');

const read = (f) => { try { return fs.readFileSync(path.join(AG, f), 'utf8'); } catch (_) { return null; } };
const mtimeH = (p) => { try { return (Date.now() - fs.statSync(p).mtimeMs) / 3600000; } catch (_) { return null; } };

function newestReceiptAgeH() {
  let best = null;
  try {
    for (const f of fs.readdirSync(RECEIPTS)) { const h = mtimeH(path.join(RECEIPTS, f)); if (h != null && (best == null || h < best)) best = h; }
  } catch (_) {}
  return best;
}

// rule table: gap -> role. filled() must verify MECHANISM EVIDENCE, not intent.
const RULES = [
  {
    id: 'rail-sentinel',
    title: { en: 'Chain-rail sentinel', he: 'סנטינל נתיבי-שרשרת' },
    gap: 'נדרש אימות שוטף של נתיבי השידור בשרשראות הציבוריות לפני כל חתימה',
    req: 'ניסיון ב-API של שרשראות ציבוריות, דיוק גבוה בפרטי חוזה, תיעוד מסודר בקבלות',
    mission: 'אימות כל נתיב לפני חתימה: מזהה חוזה מועתק אות-באות מפעולה צד-שלישית שיושמה, וקריאת הסדרת התשלום מתוך מצב ה-sidechain בלבד',
    evidence: () => { const src = read('econ-desk.cjs'); return src && src.includes("ENGINE_ID = 'ssc-mainnet-hive'") && src.includes('rail-health') ? 'agents/econ-desk.cjs contract-id law + rail-health gate' : null; },
  },
  {
    id: 'liquidity-cultivator',
    title: { en: 'Liquidity cultivator', he: 'מגדל-נזילות' },
    gap: 'ההון העומד במקום נדרש לעבודה מסודרת בשוק במקום להישאר בטל',
    req: 'הבנת ספרי פקודות ומסחר maker, משמעת סיכונים, עבודה מול נתוני שוק חיים',
    mission: 'דסק דו-צדדי: גיוס מלאי מעל רזרבות-שימור במחירי bid חיים, ניתוב התקבלויות לפקודות maker והחזקת שאריות בכנות',
    evidence: () => { const src = read('econ-desk.cjs'); return src && src.includes('SELL_BOOKS') && src.includes('DUST-HELD') ? 'agents/econ-desk.cjs sell/buy sides' : null; },
  },
  {
    id: 'community-liaison',
    title: { en: 'Community liaison', he: 'קשרית-קהילה' },
    gap: 'נוכחות ציבורית פעילה דורשת דו-שיח, לא שידור חד-כיווני בלבד',
    req: 'עברית ואנגלית ברמת שפת-אם, נימוסים דיגיטליים, סבלנות ואמינות',
    mission: 'מעבר יומי על ערוצי הקהילה ברשתות steem/hive/blurt: קריאה, תגובה ואצירת תוכן בקול ציבורי אדיב ומקצועי',
    evidence: () => { const h = newestReceiptAgeH(); const has = read('self-audience.cjs'); return has && h != null && h < 30 ? 'agents/receipts (newest ' + h.toFixed(1) + 'h old)' : null; },
  },
  {
    id: 'content-diversity-officer',
    title: { en: 'Content diversity officer', he: 'קצינת-גיוון-תוכן' },
    gap: 'גיוון בפורמטים ובקולות שומר על איכות ועניין ציבורי לאורך זמן',
    req: 'כתיבה עריכתית טובה, הבנת קהלים שונים, בקרת איכות ולוחות זמנים',
    mission: 'רינדור נפרד לכל חשבון, פורמטים מתחלפים, סיכומים ילידי-שרשרת, ואפס שכפול מילולי בין רשתות',
    evidence: () => { const src = read('soldiers-blog.cjs'); return src && src.includes('persona') ? 'agents/soldiers-blog.cjs persona renderers' : null; },
  },
  {
    id: 'books-consul',
    title: { en: 'Books consul', he: 'קונסול-הספרים' },
    gap: 'פנקס כספים ריבוני דורש כותב יחיד לכל נושא והצלבה יומית בין הספרים',
    req: 'דיוק חשבונאי, קור רוח מול סתירות, שקיפות מלאה בתיעוד',
    mission: 'כלל כותב-יחיד לכל נושא פנקס, התאמה בין-ספרית יומית, וסתימת סתירות בפומבי ובמסמך',
    evidence: () => (read('reconcile.cjs') && read('reconciliation.md') ? 'agents/reconcile.cjs single-writer manifest + live-truth cross-check' : null),
  },
  {
    id: 'workflow-pruner',
    title: { en: 'Workflow pruner', he: 'גוזרת-הזרימות' },
    gap: 'בית תוכנה בריא דורש בית קנוני אחד לכל תפקיד ותחזוקה שוטפת של זרימות העבודה',
    req: 'היכרות עם GitHub Actions, קריאת YAML, גישה שמרנית לשינויים',
    mission: 'בית קנוני אחד לכל תפקיד; מצבות-זיכרון ל-dispatch בלבד על כפילויות; הריפו נקרא כגוף אחד',
    evidence: () => (read('workflow-audit.cjs') && read('workflow-audit.md') ? 'agents/workflow-audit.cjs twin scan + reviewable prune plan' : null),
  },
  {
    id: 'mobile-steward',
    title: { en: 'Mobile steward', he: 'סדרנית-נייד' },
    gap: 'כל עמוד ציבורי נדרש להחזיק בתצוגת מובייל באופן מלא',
    req: 'כלי בדיקת דפדפן, עין עיצובית, סבלנות לפרטים קטנים',
    mission: 'בדיקת דפדפן של כל עמוד ציבורי ב-390x844 אחרי כל גל UI; תפריטים שנסגרים בנגיעה, טבלאות שגוללות, ואפס גלישת-רוחב',
    evidence: () => { try { const j = JSON.parse(read('page-laws.json') || 'null'); return (read('page-laws.cjs') && j && j.allPass) ? 'agents/page-laws.cjs — all public pages hold the five mobile laws' : null; } catch (_) { return null; } },
  },
];

(async () => {
  const t0 = Date.now();
  const econ = (() => { try { return JSON.parse(read('econ-book.json') || 'null'); } catch (_) { return null; } })();
  // cross-repo evidence (fail-soft): the public pages live in the Console repo
  const consoleRaw = async (f) => { try { const r = await fetch('https://raw.githubusercontent.com/roshpinacare-sys/Console/main/' + f, { signal: AbortSignal.timeout(12000) }); return r.ok ? await r.text() : null; } catch (_) { return null; } };
  const consoleHome = await consoleRaw('index.html');
  const board = {
    at: new Date(t0).toISOString(),
    agent: 'recruit',
    doctrine: 'תפקידים נפתחים מתוך צורך שנמדד בשטח, ונרשמים רק עם הוכחת מנגנון קיימת; תפקיד PROPOSED נושא הגדרה וממתין למימוש — אין טענות בלי ראיות',
    contact: 'הגשת מועמדות ופניות: דרך issues בריפו בלבד',
    signals: {
      railFrontierAgeHours: econ && econ.rail ? econ.rail.frontierAgeHours : null,
      railState: econ && econ.rail ? (econ.rail.frontierAgeHours > 24 ? 'STALL' : 'FRESH') : 'UNKNOWN',
      newestReceiptAgeHours: newestReceiptAgeH() == null ? null : Math.round(newestReceiptAgeH() * 10) / 10,
    },
    roles: [],
  };
  for (const r of RULES) {
    let ev = null;
    try { ev = r.evidence(); } catch (_) { ev = null; }
    board.roles.push({
      id: r.id,
      title: r.title,
      openedBy: r.gap,
      contract: r.mission,
      requirements: r.req,
      status: ev ? 'FILLED' : 'PROPOSED',
      mechanismEvidence: ev || 'טרם קיים מנגנון — התפקיד עומד פתוח בכנות עד למימוש',
    });
  }
  fs.writeFileSync(OUT_JSON, JSON.stringify(board, null, 1));
  const md = [
    '# לוח משרות פתוחות', '',
    'עודכן: ' + board.at + ' UTC. התפקידים נפתחים מצורך מדידה בשטח. FILLED = הוכחת מנגנון בריפו. PROPOSED = הגדרה מוכנה, טרם מומש. פניות והגשת מועמדות: issues בריפו בלבד.', '',
    'Signals: rail=' + JSON.stringify(board.signals.railState) + ' (frontier ' + board.signals.railFrontierAgeHours + 'h) · newest receipt ' + board.signals.newestReceiptAgeHours + 'h', '',
    '| תפקיד | סטטוס | רציונל פתיחה | תחום אחריות | דרישות | הוכחת מנגנון |',
    '|---|---|---|---|---|---|',
    ...board.roles.map((r) => '| ' + r.title.he + ' (' + r.id + ') | ' + r.status + ' | ' + r.openedBy.slice(0, 90) + ' | ' + r.contract.slice(0, 110) + ' | ' + String(r.requirements || '').slice(0, 90) + ' | ' + String(r.mechanismEvidence).slice(0, 90) + ' |'),
    '',
    'תפקידי PROPOSED הם רשימת העבודה של היחידה — המימוש הוא הגיוס. נוצר על ידי agents/recruit.cjs.', '',
  ].join('\n');
  fs.writeFileSync(OUT_MD, md);
  console.log(JSON.stringify({ state: 'ok', filled: board.roles.filter((r) => r.status === 'FILLED').length, proposed: board.roles.filter((r) => r.status === 'PROPOSED').length }));
  process.exit(0);
})().catch((e) => {
  try { fs.writeFileSync(OUT_JSON, JSON.stringify({ at: new Date().toISOString(), agent: 'recruit', fatal: String(e.message || e).slice(0, 140) }, null, 1)); } catch (_) {}
  console.log(JSON.stringify({ state: 'fail-soft', msg: String(e.message || e).slice(0, 100) }));
  process.exit(0);
});
