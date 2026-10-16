#!/usr/bin/env node
/**
 * bake-public-loops — אופה את לולאות-התנועה הציבוריות (Task 44):
 *   badge/office.svg · badge/fleet.svg · badge/edge.svg · feed.xml
 *
 * כל ערך נמדד עכשיו ממקור-ציבורי מוכרז (אפס-סודות, keyless):
 *   FleetHQ raw office-state.json · Domain status.json
 *   Domain content/published.json · Domain moment/moment.json
 *
 * חוקי-כנות:
 *  - מקור שנכשל → האסט הקודם נשמר כמו-שהוא (fail-soft) וההדפסה מדווחת; לעולם לא ערך-מזויף.
 *  - כתיבה אטומית (tmp+rename) ורק כשהתוכן באמת השתנה — בלי דחיפות-רעש ל-main.
 *  - feed.xml <updated> נגזר מהתאריך-החדש-ביותר של הכתבות עצמן, לא מעכשיו.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const OWNER = "roshpinacare-sys";
const RAW = (repo, p) => `https://raw.githubusercontent.com/${OWNER}/${repo}/main/${p}`;
const PAGES = (p) => `https://${OWNER}.github.io/Domain/${p}`;
const SITE = "https://roshpinacare-sys.github.io/Domain/";

const H = { "User-Agent": "bake-public-loops", Accept: "application/vnd.github+json" };

async function jget(url, timeoutMs = 12000) {
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), timeoutMs);
  try {
    const r = await fetch(url + `?t=${Date.now()}`, { headers: H, cache: "no-store", signal: ac.signal });
    if (!r.ok) throw new Error(`HTTP ${r.status} for ${url.replace(/^https?:\/\/[^/]+/, "")}`);
    const txt = await r.text();
    return JSON.parse(txt); // raw.githubusercontent מחזיר text/plain גם ל-JSON תקני
  } finally {
    clearTimeout(t);
  }
}

const ageMin = (iso) => (iso ? Math.round((Date.now() - new Date(iso).getTime()) / 60000) : null);

/* ------------------------------- svg badge ------------------------------- */

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
// רוחב-כתב מוערך: Verdana 11px ≈ 6.4px/תו לטקסט לטיני, ריווח צמוד
const textW = (s) => Math.round(String(s).length * 6.45);

function badge(label, value, color) {
  const lw = textW(label) + 14;
  const vw = textW(value) + 14;
  const w = lw + vw;
  const h = 20;
  const dot = 3.2;
  // מקור וגיל-אפייה חתומים ב-comment — כל תג מצהיר מאיפה הוא בא
  return `<?xml version="1.0" encoding="UTF-8"?>
<!-- SAOS measured badge — baked from public sources, keyless. Do not edit by hand; it is re-baked by CI. -->
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" role="img" aria-label="${esc(label)}: ${esc(value)}" viewBox="0 0 ${w} ${h}" font-family="Verdana,Geneva,DejaVu Sans,sans-serif">
<linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient>
<clipPath id="r"><rect width="${w}" height="${h}" rx="3" fill="#fff"/></clipPath>
<g clip-path="url(#r)">
<rect width="${lw}" height="${h}" fill="#1d1f24"/>
<rect x="${lw}" width="${vw}" height="${h}" fill="${color}"/>
<rect width="${w}" height="${h}" fill="url(#s)"/>
</g>
<g fill="#fff" text-anchor="middle" font-size="11">
<circle cx="9" cy="${h / 2}" r="${dot}" fill="#2fae63"/>
<text x="${9 + dot + 3.5}" y="${h / 2 + 3.8}" fill="#c8cdd4" text-anchor="start">${esc(label)}</text>
<text x="${lw + vw / 2}" y="${h / 2 + 3.8}" fill="#ffffff">${esc(value)}</text>
</g>
</svg>
`;
}

/* --------------------------------- writers -------------------------------- */

function bakeIfChanged(rel, content) {
  const abs = path.join(__dirname, "..", rel);
  try {
    const prev = fs.readFileSync(abs, "utf8");
    if (prev === content) return "same";
  } catch (_) {
    /* first bake */
  }
  const tmp = `${abs}.tmp-${process.pid}`;
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(tmp, content);
  fs.renameSync(tmp, abs);
  return "baked";
}

/* --------------------------------- sources -------------------------------- */

(async () => {
  const report = {};

  // 1) office — FleetHQ raw office-state (אותו מקור שהחדר והאתר קוראים)
  try {
    const o = await jget(RAW("FleetHQ", "office/state/office-state.json"));
    const age = ageMin(o.capturedAt);
    const shifts = (o.statusHe && /\((\d+) משמרות/.exec(o.statusHe))?.[1];
    const ok = o.connected === true && age !== null && age <= 130; // חוק-החדר לפורמן
    const color = ok ? "#0d9d6d" : age !== null && age <= 130 * 2 ? "#a16207" : "#c2410c";
    const val = ok ? `live · ${shifts ?? "?"} shifts` : `stale ${age ?? "?"}m`;
    report.office = bakeIfChanged("badge/office.svg", badge("SAOS office", val, color));
  } catch (e) {
    report.office = `kept-previous (${String(e.message || e).slice(0, 80)})`;
  }

  // 2) fleet — status.json (עורקים, פעימות, repos)
  try {
    const s = await jget(PAGES("status.json"));
    const p = s.pulse || {};
    report.fleet = bakeIfChanged(
      "badge/fleet.svg",
      badge("SAOS fleet", `${p.beatArteries ?? "?"}/${p.totalArteries ?? "?"} arteries · ${p.repos ?? "?"} repos`, "#1f6f54")
    );
  } catch (e) {
    report.fleet = `kept-previous (${String(e.message || e).slice(0, 80)})`;
  }

  // 3) edge — moment-watch (הפרש-העומק החי, R62)
  try {
    const m = await jget(PAGES("moment/moment.json"));
    const bps = m.liveBook && m.liveBook.bidSurplusBps;
    const regime = m.regime && m.regime.label;
    const dir = bps >= 0 ? `+${bps}` : `${bps}`;
    report.edge = bakeIfChanged("badge/edge.svg", badge("steem-edge", `${dir} bps · ${regime ?? "?"}`, "#7c4a03"));
  } catch (e) {
    report.edge = `kept-previous (${String(e.message || e).slice(0, 80)})`;
  }

  // 4) feed.xml — Atom מהמפורסם + המדידות החיות (מדיניות-חשיפה: כותרות בלבד, ללא קישור-חשבון)
  const entries = [];
  try {
    const pub = await jget(PAGES("content/published.json"));
    for (const p of (pub.posts || []).slice(0, 10)) {
      const at = p.at || pub.generatedAt;
      entries.push({
        title: `[${p.chain}] ${p.title}`,
        link: SITE + "truth.html",
        id: `urn:saos:post:${p.chain}:${p.permlink}`,
        updated: at,
        summary: "מפורסם-בשרשרת · כותרת בלבד לפי מדיניות-החשיפה הציבורית",
      });
    }
  } catch (e) {
    report.feedPosts = `error (${String(e.message || e).slice(0, 60)})`;
  }
  try {
    const o = await jget(RAW("FleetHQ", "office/state/office-state.json"));
    entries.push({
      title: `המשרד החי · ${o.statusHe || "office state"}`,
      link: SITE + "office3d/",
      id: `urn:saos:office:${o.capturedAt}`,
      updated: o.capturedAt,
      summary: "מדידת-משרד חיה (raw main, keyless)",
    });
  } catch (e) {
    report.feedOffice = `error (${String(e.message || e).slice(0, 60)})`;
  }
  try {
    const m = await jget(PAGES("moment/moment.json"));
    entries.push({
      title: `moment-watch · ${m.regime?.label ?? "?"} · steem-edge ${m.liveBook?.bidSurplusBps >= 0 ? "+" : ""}${m.liveBook?.bidSurplusBps ?? "?"}bps`,
      link: SITE + "money.html",
      id: `urn:saos:moment:${m.publishedAt}`,
      updated: m.publishedAt,
      summary: "קריאת-רגע כלכלית — נמדדת, מנוקדת רק אחרי-האופק (training as measurement)",
    });
  } catch (e) {
    report.feedMoment = `error (${String(e.message || e).slice(0, 60)})`;
  }
  entries.sort((a, b) => new Date(b.updated) - new Date(a.updated));
  const newest = entries.length ? entries[0].updated : new Date(0).toISOString();
  const feed =
    `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
<title>SAOS Network · עדכוני הצי</title>
<subtitle>הכל נמדד ממקורות-ציבוריים — אפס-אמון, בדוק בעצמך</subtitle>
<id>${SITE}</id>
<link rel="self" href="${SITE}feed.xml"/>
<link rel="alternate" href="${SITE}"/>
<updated>${newest}</updated>
<generator>bake-public-loops (keyless CI)</generator>
` +
    entries
      .slice(0, 20)
      .map(
        (e) => `<entry>
<title>${esc(e.title)}</title>
<link href="${e.link}"/>
<id>${e.id}</id>
<updated>${new Date(e.updated).toISOString()}</updated>
<summary>${esc(e.summary)}</summary>
</entry>`
      )
      .join("\n") +
    `
</feed>
`;
  report.feed = bakeIfChanged("feed.xml", feed);

  console.log(JSON.stringify({ state: "ok", report }, null, 1));
})().catch((e) => {
  // fail-soft: מוותרים על האפייה הזאת, האסטים הקודמים נשארים — לעולם לא לשבור את main
  console.log(JSON.stringify({ state: "fail-soft", msg: String(e.message || e).slice(0, 140) }));
  process.exit(0);
});
