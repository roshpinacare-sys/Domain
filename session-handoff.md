# session-handoff.md — Domain (LHE harness)

> Harness law: Blockers · Files · Next Session. The next agent resumes from
> this file + the books alone — no tribal memory.

## Blockers (honest, none invented)

- **Pulse mirror lanes** — root-caused and FIXED upstream (Pulse c940fc8,
  2026-10-21): grant-less-token raw-404 now re-probed anonymously; research
  walk-back 9→14d. Until the next heartbeat bakes, console panels sourced from
  mirror/lanes.json show honest gaps (never forged — by design). Verify, don't
  assume: read `Pulse/mirror/lanes.json` sources.* after the next 30-min tick.
- **status.json transient mid-write reads** — one lane (T-109-a) caught the
  live status.json mid-bake (JSON parse fail → honest "לא נמדד" fallback).
  Self-healed on next bake. If it recurs across bakes, the bake should write
  tmp+rename (atomic publish) — owner of that lane.
- **Treasury BELOW-FLOOR** (pulse.json: acct00sp 1714.246 vs floor 3000) and
  **verifier DEGRADED** — economic, not site, blockers; reported honestly on
  the faces. Not fixable from this repo.
- **HTX closed (owner refusal — KYC) · FF pending provider verification** —
  external-gate facts; the pages state them honestly. No action here.

## Files (T-109 wave — what changed and who owns follow-ups)

- `tools/bake-press.mjs` + `press/index.html` — BiDi/token isolation at the
  template (survives every future bake). Owner of follow-ups: press lane.
- No-JS content layers: `wallet.html`, `receipts.html`, `network/index.html`,
  `docs/index.html`, `hub/explainer/index.html`, `office3d/index.html`,
  `hub/products/api-reference.html`, `hub/products/identity-api-reference.html`,
  `hub/developers/identity-api.html`, `market/onepager-en.html`,
  `market/index-en.html`, `marketing/adsmarket.html`. JS apps untouched
  (script blocks byte-identical to pre-wave HEAD).
- Truth-refresh: `defi.html`, `products.html`, `sovereign.html`, `versus.html`,
  `readiness.html`, `reports.html`, `hub/fact-sheet.html`, `hub/index.html`,
  `about/index.html`, `pitch/index.html`, `hub/ecosystem.html`.
- `console.html` — grid min-width fix, `.lat` BiDi islands, lessons renderer
  (word-boundary clip + scrollable list). All other panels untouched.
- `progress.md` + this file — born today (startup protocol completeness).

## Next Session

1. Verify Pulse bake healed the 7 mirror lanes (console panels live again).
2. Landing-link law check before ANY index.html edit:
   `grep -c "TruthRail\|sovereign-lighthouse\|research/LEDGER.md" index.html` → 0.
   (Note: sovereign-lighthouse repo itself is 200-live again since ~2026-10 —
   the ban is about the never-published Pages path; keep links pointing at the
   public repo, never at the dead Pages URL.)
3. `./init.sh` then pick ONE feature from `feature_list.json`.
4. office3d/network 390px table overflow (5px) — small CSS pass if still there.
5. Books (`agents/*.json`, `feature_list.json`) are one-writer lanes — append
   evidence rows through their own desks, never drive-by edit.
