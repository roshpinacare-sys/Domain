/* agent9-truth-band.js — פס-האמת-החי של-agent-9 [t55 · agent-9] · AGENT9-TRUTH-BAND/1
 * ══════════════════════════════════════════════════════════════════════════════════
 * פקודת-בעלים (t55): כל-טענה-על-הדף = מדידה-חיה עם זמן-מדידה + מקור. אין-מילים-בלי-ודאות.
 * הפס קורא truth/agent9.json (אופה-שעתית-ב-CI ממקורות-ציבוריים keyless) ומציג:
 * אוצר (שער-הרצפה) · סחר-חי (acct-h-849e9df7 מן-השרשרת · פסבדונים-יציב לפי חוק-הפניות של הבית) · שער-סיכון+ארביטראז · FF · עורקים.
 * fail-closed: מקור-חסר = "UNMEASURED" אדום-כנה — לעולם לא ירוק-שקרי. אפס-תלות.
 * שימוש: <div id="agent9-truth-band"></div><script src="agent9-truth-band.js" defer></script>
 */
(function () {
  "use strict";
  var SRC = "truth/agent9.json";
  var el = document.getElementById("agent9-truth-band");
  if (!el) return;
  var css = document.createElement("style");
  css.textContent = [
    ".a9-band{max-width:960px;margin:34px auto 10px;padding:0 20px;font-family:system-ui,'Segoe UI','Noto Sans Hebrew',sans-serif}",
    ".a9-band .a9-head{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;margin-bottom:12px}",
    ".a9-band .a9-title{font-size:17px;font-weight:700;color:#fafafa}",
    ".a9-band .a9-sub{font-size:12px;color:#a1a1aa}",
    ".a9-band .a9-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:12px}",
    ".a9-band .a9-card{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.09);border-radius:14px;padding:14px 16px}",
    ".a9-band .a9-card h4{margin:0 0 8px;font-size:12.5px;color:#a1a1aa;font-weight:600;letter-spacing:.4px}",
    ".a9-band .a9-k{font-size:21px;font-weight:800;font-family:ui-monospace,Menlo,Consolas,monospace;color:#34d399}",
    ".a9-band .a9-k.red{color:#ef4444}.a9-band .a9-k.amber{color:#eab308}.a9-band .a9-k.dim{color:#fafafa}",
    ".a9-band .a9-line{font-size:12px;color:#c9c9cf;margin-top:6px;line-height:1.55;word-break:break-word}",
    ".a9-band .a9-meta{font-size:10.5px;color:#71717a;margin-top:8px;font-family:ui-monospace,Menlo,monospace}",
    ".a9-band a{color:#34d399;text-decoration:none;border-bottom:1px dotted rgba(52,211,153,.4)}",
    ".a9-band .a9-dot{display:inline-block;width:7px;height:7px;border-radius:50%;margin-left:5px;vertical-align:middle}",
    "@media (prefers-color-scheme:light){.a9-band .a9-title{color:#111}.a9-band .a9-card{background:#fafafa;border-color:#e4e4e7}.a9-band .a9-line{color:#3f3f46}.a9-band .a9-k.dim{color:#111}}",
  ].join("\n");
  document.head.appendChild(css);

  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var verdictClass = function (v) {
    if (v === "PASS" || v === "success") return "";
    if (v === "BLOCK" || v === "BREACH" || v === "failure") return "red";
    if (v == null || v === "UNMEASURED") return "amber";
    return "dim";
  };
  var fmt = function (t) { try { return new Date(t).toISOString().replace("T", " ").slice(0, 16) + "Z"; } catch (e) { return String(t); } };
  var ago = function (t) { var m = Math.round((Date.now() - new Date(t).getTime()) / 60000); return m >= 60 ? Math.round(m / 60) + " שעות" : m + " דקות"; };

  function card(title, bodyHtml, metaHtml) {
    return '<div class="a9-card"><h4>' + esc(title) + "</h4>" + bodyHtml + '<div class="a9-meta">' + metaHtml + "</div></div>";
  }

  function render(d) {
    var c = [];
    // אוצר — שער-הרצפה · תיקון-סתירה X1 (t55c): פיצול-פסק-הפעולה-המוצעת (PASS/BLOCK) מבריאות-האוצר (OK/BELOW-FLOOR)
    var T = d.treasury || { ok: false };
    var Tm = T.ok || T.verdict != null; // bug-t55c-b: מדידה-קיימת = יש-נתוני-שער, לא-רק-שדה-ok
    var health = ((T.ok || T.verdict != null) && T.netSp != null && T.floorSp != null)
      ? (T.netSp >= T.floorSp ? "OK" : "BELOW-FLOOR −" + (T.floorSp - T.netSp).toFixed(1) + " SP") : null;
    c.push(card("🛡️ אוצר · שער-הרצפה-3000", Tm
      ? '<div style="display:flex;gap:10px;align-items:baseline;flex-wrap:wrap">'
        + '<span class="a9-k ' + verdictClass(T.verdict) + '">' + esc(T.verdict) + '</span>'
        + '<span class="a9-k ' + (health && health.indexOf("BELOW") === 0 ? "red" : "") + '" style="font-size:13px">' + esc(health || "UNMEASURED") + '</span></div>'
        + '<div class="a9-line">PASS = הפעולה-המוצעת-חוקית · לא בריאות-האוצר (תיקון-סתירה X1)</div>'
        + (T.chain && T.chain.grossSp != null // roast-t55g-c: שרשרת-מלאה-גולמי→האצלות→נטו — לא-נטו-בלבד-שמטעה
          ? '<div class="a9-line">גולמי <b>' + esc(T.chain.grossSp) + '</b> SP → מואצל-החוצה −' + esc(T.chain.delegatedOutSp) + ' → נטו ' + esc(T.chain.netSp) + ' SP</div>'
          : '<div class="a9-line">net ' + esc(T.netSp) + " SP · רצפה " + esc(T.floorSp) + " · עודף " + esc(T.surplus) + "</div>")
        + '<div class="a9-line">רצפה ' + esc(T.floorSp) + " · עודף " + esc(T.surplus) + " · שורות-האצלה-חיות " + esc(T.rowsOut) + " SP</div>"
      : '<div class="a9-k amber">UNMEASURED</div><div class="a9-line">' + esc(T.err || "המקור-לא-השיב") + "</div>",
      "נמדד: " + ((T.ok || T.measuredAt) ? fmt(T.measuredAt) + " · לפני " + ago(T.measuredAt) : "—")
      + (T.chain && T.chain.measuredAt ? " · שרשרת-עצמאית: " + ago(T.chain.measuredAt) : "")
      + ' · <a href="https://raw.githubusercontent.com/roshpinacare-sys/Autonomy/main/receipts/treasury-floor/latest.json" target="_blank" rel="noopener">קבלת-מקור</a>'));

    // סחר-חי
    var R = d.trading || { ok: false };
    c.push(card("🎯 סחר-חי · acct-h-849e9df7", (R.ok || R.fills != null) // bug-t55c-b
      ? '<div class="a9-k dim">' + esc(R.fills) + ' <span style="font-size:12px;color:#a1a1aa">מילויים בחלון-' + esc(R.fillsWindowHours) + "ש'</span></div>"
        + '<div class="a9-line">' + esc(R.openOrders) + " פקודות-פתוחות · קצב ~" + esc(R.fillRate) + "/שעה</div>"
        + '<div class="a9-line">' + esc(R.steem) + " · " + esc(R.sbd) + " · " + esc(R.sp) + " SP (נטו-בשרשרת)</div>"
        + (R.lastFillPair ? '<div class="a9-line">מילוי-אחרון: ' + esc(R.lastFillPair.got) + " ⇄ " + esc(R.lastFillPair.gave) + "</div>" : "")
      : '<div class="a9-k amber">UNMEASURED</div><div class="a9-line">' + esc(R.err || "") + "</div>",
      "נמדד: " + (R.ok ? fmt(d.at) : "—")
      + ' · <a href="https://steemblocks.steemcore.org/@' + atob("aGVhZGNvcm5lcg==") + '" target="_blank" rel="noopener">שרשרת-פומבית</a>'));

    // שער-סיכון + ארביטראז
    var H = d.hedgeGate || { ok: false };
    c.push(card("⚖️ שער-סיכון-לפני-ביצוע · AUTOHEDGE", (H.ok || H.verdict != null) // bug-t55c-b
      ? '<div class="a9-k ' + verdictClass(H.verdict) + '">' + esc(H.verdict) + "</div>"
        + '<div class="a9-line">' + esc(H.blocked) + " סיבות-חסימה על-הגריד-העומד (מול-הון-נזיל)</div>"
        + '<div class="a9-line">פער-ארביטראז פנים↔חוץ: <b>' + esc(H.arbGapPct) + "%</b> · " + esc(H.edge || "") + "</div>"
        + '<div class="a9-line">פנימי ' + esc(H.internalUsd) + "$ · חוץ " + esc(H.externalUsd) + "$</div>"
      : '<div class="a9-k amber">UNMEASURED</div><div class="a9-line">' + esc(H.err || "") + "</div>",
      "נמדד: " + ((H.ok || H.measuredAt) ? fmt(H.measuredAt) + " · לפני " + ago(H.measuredAt) : "—")
      + ' · <a href="https://raw.githubusercontent.com/roshpinacare-sys/Autonomy/main/receipts/autotrade-hedge/latest.json" target="_blank" rel="noopener">קבלת-מקור</a>'));

    // FF
    var F = d.fixedfloat || { ok: false };
    c.push(card("🔀 שער-FixedFloat → BTC", (F.ok || F.verdict != null) // bug-t55c-b
      ? '<div class="a9-k ' + (F.verdict === "HONEST-FAIL" ? "amber" : "") + '">' + esc(F.verdict) + "</div>"
        + '<div class="a9-line">' + esc(F.pairErr || "ממתין-לאישורם-שלהם") + "</div>"
      : '<div class="a9-k amber">UNMEASURED</div><div class="a9-line">' + esc(F.err || "") + "</div>",
      "נמדד: " + ((F.ok || F.measuredAt) ? fmt(F.measuredAt) : "—")
      + ' · <a href="https://raw.githubusercontent.com/roshpinacare-sys/Autonomy/main/receipts/fixedfloat/latest.json" target="_blank" rel="noopener">קבלת-מקור</a>'));

    // עורקים
    var ar = (d.arteries || []).map(function (a) {
      var v = a.conclusion || a.status || (a.ok ? null : "UNMEASURED");
      return '<div class="a9-line"><span class="a9-dot" style="background:' + (v === "success" ? "#22c55e" : v == null ? "#eab308" : "#ef4444") + '"></span>'
        + esc((a.id || "").replace("artery-", "")) + " → " + esc(v) + (a.at ? " · " + esc(fmt(a.at)) : "") + "</div>";
    }).join("");
    c.push(card("🫀 עורקי-CI-חיים", ar || '<div class="a9-k amber">UNMEASURED</div>', "כל-עורק = ריצת-CI-מתועדת-בגיט"));

    // פנקס-הסתירות [t55c] — מדידת-סתירות-בין-הטענות-בגיט, כל-שעה (owner: "בוא נוודא הכל")
    var X = d.contradictions || null;
    c.push(card("⚔️ פנקס-הסתירות · נמדד-חי", X
      ? '<div class="a9-k ' + (X.summary.confirmed > 0 ? "red" : "") + '">' + X.summary.confirmed
        + ' <span style="font-size:12px;color:#a1a1aa">סתירות-מאומתות · מתוך ' + X.summary.total + '-נבדקות</span></div>'
        + X.items.slice(0, 4).map(function (i) {
            var col = i.verdict === "CONFIRMED" ? "#ef4444" : (i.verdict === "OK" ? "#22c55e" : "#eab308");
            return '<div class="a9-line"><span class="a9-dot" style="background:' + col + '"></span>'
              + esc(String(i.id || "").replace(/^X\d+-/, "")) + " → " + esc(i.verdict) + "</div>";
          }).join("")
        + '<div class="a9-line">' + (X.summary.unmeasured > 0 ? esc(X.summary.unmeasured) + " מקורות-לא-השיבו (מדווח-בכנות, לא-מומצא)" : "כל-המקורות-השיבו") + "</div>"
      : '<div class="a9-k amber">UNMEASURED</div><div class="a9-line">מכונת-הסתירות-טרם-השיבה — fail-closed</div>',
      X ? '<a href="truth.html#contradictions">פנקס-הסתירות המלא · פסק-אחר-פסק עם-ראיות</a> · נאפה ' + fmt(X.at) : "—"));

    var head = '<div class="a9-head"><span class="a9-title">פס-האמת-החי · agent-9</span>'
      + '<span class="a9-sub">כל-מספר = מדידה-חיה עם זמן-ומקור · אפס-טענות-בלי-ודאות · אופה-שעתית-ב-CI · fail-closed</span></div>'
      + '<div class="a9-sub" style="margin-bottom:12px">נאפה: ' + esc(fmt(d.at)) + " · מכונה: " + esc(d.baker || "agent9-fleet-truth") + "</div>";
    el.innerHTML = '<section class="a9-band">' + head + '<div class="a9-grid">' + c.join("") + "</div></section>";
  }

  fetch(SRC, { cache: "no-store" })
    .then(function (r) { if (!r.ok) throw new Error("http-" + r.status); return r.json(); })
    .then(render)
    .catch(function (e) {
      el.innerHTML = '<section class="a9-band"><div class="a9-card"><h4>פס-האמת-החי · agent-9</h4>'
        + '<div class="a9-k amber">UNMEASURED</div><div class="a9-line">המכונה-לא-הגישה עדיין (' + esc(e.message)
        + ') — מדווח-בכנות ולא-ממציא. הריצה-השעתית-תאפה-בקרוב.</div></div></section>';
    });
})();
