/* ═══════════════════════════════════════════════════════════════════
   SAOS · Domain — bidi-fix.js (R-bidi)
   One systemic fix for the Hebrew RTL fronts: dates, times, money and
   numeric values that JS bakes into RTL text were being re-ordered by
   the Unicode bidi algorithm ("2026-10-21 06:02Z" rendering as
   "06:02Z 2026-10-21", "$1.016" fragments, "· 06:02Z 21 2026-10-").
   The runs themselves are fine — the neutral separators BETWEEN the
   numeric segments take the paragraph (RTL) direction and swap them.

   The fix: find LTR data-runs inside RTL text and wrap each one in
   <bdi dir="ltr"> so it always renders as written. Runs after the
   page's own live-data scripts via a MutationObserver, so baked
   values (money.html, console.html cards, press editions) are covered
   the moment they land — future bakes included, zero per-page work.

   Discipline:
   - touches text nodes only; skips script/style/code/pre/textarea,
     [dir=ltr] subtrees and .mono (those are already LTR by design);
   - wraps only runs that contain a digit AND a separator (space, :,
     -, ., /, comma, · context) — bare integers like "91" or "389"
     were never scrambled and are left untouched;
   - idempotent: bdi-wrapped content is never re-processed;
   - MutationObserver batches with requestAnimationFrame and ignores
     its own insertions, so there is no feedback loop.
   ═══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  if (window.__saosBidiFix) return;
  window.__saosBidiFix = true;

  var doc = document;

  /* one shared style: short data-runs (dates, times, money) never
     break mid-value; long runs still wrap normally */
  var style = doc.createElement('style');
  style.textContent = 'bdi.bfix{unicode-bidi:isolate}bdi.bfix.bfix-nw{white-space:nowrap}';
  doc.head.appendChild(style);
  /* LTR data-run: starts with optional sign + digit or currency,
     continues through digits, latin, decimals, commas, colons, slashes,
     hyphens, unit letters and internal single spaces between tokens. */
  var RUN = /(?:[-+]?\d[\d.,:%/+·\u00b5A-Za-z$€₪-]*|[$€₪][\d.,:%/+·\u00b5A-Za-z$€₪-]*)(?:\s(?:[-+]?\d[\d.,:%/+·\u00b5A-Za-z$€₪-]*|[$€₪][\d.,:%/+·\u00b5A-Za-z$€₪-]*))*/g;

  function isSkippable(el) {
    if (!el || el.nodeType !== 1) return false;
    var tag = el.tagName;
    if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'CODE' ||
        tag === 'PRE' || tag === 'TEXTAREA' || tag === 'BDI') return true;
    if (el.closest && el.closest('[dir="ltr"], .mono, code, pre, bdi')) return true;
    return false;
  }

  function fixTextNode(node) {
    var text = node.nodeValue;
    if (!text) return;
    RUN.lastIndex = 0;
    if (!RUN.test(text)) return;
    RUN.lastIndex = 0;

    var frag = doc.createDocumentFragment();
    var last = 0, m, wrapped = 0;
    while ((m = RUN.exec(text)) !== null) {
      var run = m[0];
      /* guard: only wrap runs that really need isolation — a digit
         plus a separator (space/:/-/.,) somewhere in the run */
      if (/\d/.test(run) && /[ \u00a0:.,\/\-·]/.test(run)) {
        if (m.index > last) frag.appendChild(doc.createTextNode(text.slice(last, m.index)));
        var bdi = doc.createElement('bdi');
        bdi.setAttribute('dir', 'ltr');
        bdi.className = 'bfix' + (run.length <= 28 ? ' bfix-nw' : '');
        bdi.appendChild(doc.createTextNode(run));
        frag.appendChild(bdi);
        wrapped++;
        last = m.index + run.length;
      }
    }
    if (!wrapped) return;
    if (last < text.length) frag.appendChild(doc.createTextNode(text.slice(last)));
    var parent = node.parentNode;
    if (!parent) return;
    parent.replaceChild(frag, node);
  }

  function walk(root) {
    if (isSkippable(root)) return;
    var walker = doc.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        if (isSkippable(n.parentNode)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [], n;
    while ((n = walker.nextNode())) nodes.push(n);
    for (var i = 0; i < nodes.length; i++) fixTextNode(nodes[i]);
  }

  function start() {
    walk(doc.body);

    var pending = false;
    var obs = new MutationObserver(function (muts) {
      if (pending) return;
      for (var i = 0; i < muts.length; i++) {
        var m = muts[i];
        if (m.type === 'characterData' && !isSkippable(m.target.parentNode)) {
          pending = true; break;
        }
        if (m.type === 'childList') {
          var add = m.addedNodes, skip = false;
          for (var j = 0; j < add.length; j++) {
            if (add[j].nodeType === 1 && add[j].classList && add[j].classList.contains('bfix')) { skip = true; continue; }
            if (add[j].nodeType === 3 && add[j].parentNode && add[j].parentNode.classList && add[j].parentNode.classList.contains('bfix')) { skip = true; continue; }
            if (add[j].nodeType === 1 || add[j].nodeType === 3) { pending = true; break; }
          }
          if (pending && !skip) break;
          if (skip && !pending) continue;
        }
      }
      if (!pending) return;
      pending = false;
      requestAnimationFrame(function () {
        /* re-walk the whole body: idempotent by design, cheap enough
           for this site size, immune to partial-subtree edge cases */
        if (doc.body) walk(doc.body);
      });
    });
    obs.observe(doc.body, { childList: true, characterData: true, subtree: true });
  }

  if (doc.readyState === 'loading') {
    doc.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
