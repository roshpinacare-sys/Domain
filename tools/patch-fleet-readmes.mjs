#!/usr/bin/env node
/**
 * patch-fleet-readmes — מלביש את תגי-ההוכחה החיים על ה-README של כל ריפו-בצי (Task 44 roadmap A).
 *
 *  - מקור-הרשימה: 13 הריפואים שנמדדו עכשיו (keeper) — לא רשימה-קפואה: אם עברה ארגומנט, מקבלים רשימה-אחרת.
 *  - אידמפוטנטי: README שכבר עונד את התגים → skip (אפס-רעש, אפס-דחיפות מיותרות).
 *  - תוקף ב-Contents API (PUT) ולא ב-git-clone — בלי קונפליקט מול הבוטים הדוחפים כל-רגע.
 *  - סודות: טוקן נקרא מ-env (SAOS_PAT) בלבד; לעולם לא נכתב, לא מודפס, לא נשמר.
 *  - fail-soft לכל-ריפו בנפרד: ריפו שנכשל לא עוצר את השאר; דוח כנה בסוף.
 *
 *  שימוש:  SAOS_PAT=$(cat /path/to/token) node tools/patch-fleet-readmes.mjs
 */
import { setTimeout as sleep } from "node:timers/promises";

const OWNER = "roshpinacare-sys";
const TOKEN = process.env.SAOS_PAT || "";
if (!TOKEN) {
  console.log(JSON.stringify({ state: "fail", msg: "SAOS_PAT env required (token never hardcoded)" }));
  process.exit(1);
}

// ברירת-מחדל: 13 הריפואים כפי שנמדדו ב-keeper (potential.json estate.rows)
const DEFAULT_REPOS = [
  "Domain",
  "Autonomy",
  "sovereign-lighthouse",
  "Pulse",
  "Console",
  "saos-runtime",
  "FleetHQ",
  "sovereign-beacon",
  "ops-intake",
  "GridWatch",
  "ops-forge",
  "roshpinacare-sys.github.io",
  "sovereign-runner-kit",
];
const repos = process.argv.slice(2).length ? process.argv.slice(2) : DEFAULT_REPOS;

const BADGE_BASE = `https://${OWNER}.github.io/Domain`;
const BADGE_BLOCK = [
  `[![SAOS office](${BADGE_BASE}/badge/office.svg)](${BADGE_BASE}/office3d/)`,
  `[![SAOS fleet](${BADGE_BASE}/badge/fleet.svg)](${BADGE_BASE}/status/)`,
  `[![steem-edge](${BADGE_BASE}/badge/edge.svg)](${BADGE_BASE}/money.html)`,
].join("\n");
const SENTINEL = "badge/office.svg"; // סמן-אידמפוטנציה

const GH = `https://api.github.com/repos/${OWNER}`;
const H = {
  Authorization: `Bearer ${TOKEN}`,
  "User-Agent": "patch-fleet-readmes",
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
};

async function g(url, opts = {}) {
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), 15000);
  try {
    const r = await fetch(url, { headers: H, cache: "no-store", signal: ac.signal, ...opts });
    const body = await r.text();
    let json = null;
    try { json = JSON.parse(body); } catch { /* not json */ }
    return { status: r.status, json, body };
  } finally {
    clearTimeout(t);
  }
}

(async () => {
  const report = [];
  for (const repo of repos) {
    try {
      // 1) קריאת README נוכחי (ענף main)
      const cur = await g(`${GH}/${repo}/contents/README.md?ref=main`);
      if (cur.status === 404) {
        // אין README — יוצרים אחד מינימלי כן
        const name = `# ${repo}\n\n${BADGE_BLOCK}\n\nחלק מרשת SAOS האוטונומית — הכל נמדד חי, בדוק בעצמך.\n`;
        const put = await g(`${GH}/${repo}/contents/README.md`, {
          method: "PUT",
          body: JSON.stringify({
            message: "fleet-badges: create README wearing the fleet's live proof badges [skip ci]",
            content: Buffer.from(name).toString("base64"),
          }),
        });
        report.push({ repo, result: put.status >= 200 && put.status < 300 ? "created" : `error HTTP ${put.status}` });
        continue;
      }
      if (cur.status !== 200 || !cur.json?.content) {
        report.push({ repo, result: `error HTTP ${cur.status}` });
        continue;
      }
      const sha = cur.json.sha;
      const content = Buffer.from(cur.json.content, "base64").toString("utf8");

      // 2) אידמפוטנציה — כבר עונד? skip
      if (content.includes(SENTINEL)) {
        report.push({ repo, result: "already-wearing" });
        continue;
      }

      // 3) הזרקה: אחרי כותרת-הפתיחה, ואם אין — בראש-הקובץ
      const lines = content.split("\n");
      let insertAt = 0;
      if (lines.length && /^#\s/.test(lines[0])) insertAt = 1;
      const block = lines.slice(0, insertAt).concat(["", BADGE_BLOCK, ""], lines.slice(insertAt));
      let next = block.join("\n").replace(/\n{4,}/g, "\n\n\n");

      const put = await g(`${GH}/${repo}/contents/README.md`, {
        method: "PUT",
        body: JSON.stringify({
          message: "fleet-badges: wear the fleet's live proof badges — measured, honest, keyless [skip ci]",
          content: Buffer.from(next).toString("base64"),
          sha,
        }),
      });
      report.push({ repo, result: put.status >= 200 && put.status < 300 ? "patched" : `error HTTP ${put.status}` });
    } catch (e) {
      report.push({ repo, result: `error ${String(e.message || e).slice(0, 80)}` });
    }
    await sleep(700); // מנוע-עצבים מול rate-limit
  }

  const counts = {};
  for (const r of report) counts[r.result.split(" ")[0]] = (counts[r.result.split(" ")[0]] || 0) + 1;
  console.log(JSON.stringify({ state: "ok", repos: repos.length, counts, report }, null, 1));
})().catch((e) => {
  console.log(JSON.stringify({ state: "fail-soft", msg: String(e.message || e).slice(0, 140) }));
  process.exit(0);
});
