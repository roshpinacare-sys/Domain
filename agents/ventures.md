# Ventures — the fleet's public business board (two-sided ledger)

_venture-desk v1.0.0 · 2026-10-02T14:53:36.175Z · doctrine: verified live (TWO-SIDED LEDGER LAW present)_

Born from the clodfarm study (Z-31): they built the best stop-spending governor we have seen and no earn side at all. We adopt the governor math and bind the missing half as law. Standing truth:

**earn $0.0034/day vs burn $4.3543/day — the gap is the mission; every venture's earn side is booked from here on (EARN-GOVERNOR LAW)**

## V1 · Curation house — OPEN
- **Thesis:** disciplined public-external curation (10 soldiers lane; headcorner lane owned by the weave daemon) — our votes ARE the traffic
- **Product → rail → traffic:** attention allocated by deterministic public scoring → HP curation rewards (steem/hive) → native feeds of curated public authors
- **Earn line:** measure first cycles; line set after (honest TBD)
- **Kill rule:** no measurable curation accrual in 3 consecutive cycles → weight→0 (IDLE)
- **Evidence:** curation-book.json (marker "soldiers lane of the fleet curation") ✓ · soldiers-curate.cjs (marker "verify-then-sign") ✓ → mechanism PROVEN in-repo
- **lastRun:** [object Object]
- **earn:** TBD-MEASURE (curation accrual not yet booked — booked the honest way, not estimated)

## V2 · Market desk — OPEN
- **Thesis:** dual-side hive-engine trading: harvest idle tokens, maker buys into live books, dust honesty
- **Product → rail → traffic:** liquidity + realized spreads → hive-engine order books → the books' own flow (ghost-book gate refuses dead books)
- **Earn line:** realized spreads ≥ $0.02/day within 7d of live rails
- **Kill rule:** RAIL-HEALTH stall >24h → zero signing; no fills in 14d → capital→escrow (HARVEST)
- **Evidence:** econ-desk.cjs (marker "rail-health") ✓ · econ-desk.cjs (marker "verify-then-sign") ✓ · econ-book.json (marker "rail-health") ✓ → mechanism PROVEN in-repo
- **swapHiveTreasury:** 0
- **hiveLiquid:** 0.034
- **railFrontier:** 0
- **earn:** realized fills booked in econ-book rows (on-chain deltas only)

## V3 · Knowledge house — OPEN
- **Thesis:** public verified playbooks (rail-health, verify-then-sign, delta-settlement, the two-sided ledger itself) as the authority funnel
- **Product → rail → traffic:** open doctrine + field-test reports (natural voice, EN, public) → steem/hive/blurt posts (tri-bridge canon) → SEO + native feeds; authority compounds
- **Earn line:** leading: views/votes per playbook; 3 playbooks × 0 engagement → retitle/re-lane
- **Kill rule:** 3 consecutive playbooks with zero engagement → PIVOT lane
- **Evidence:** knowledge-cards-en.json ✓ · public-wave.cjs ✓ → mechanism PROVEN in-repo
- **earn:** leading indicators only for now (engagement), no fake USD

## V4 · Content house — OPEN
- **Thesis:** per-persona expert lanes, zero AI-smell, English public content — support the public, never the echo
- **Product → rail → traffic:** expert long-form posts under fleet personas → steem/hive/blurt → followers/feeds + curation discovery
- **Earn line:** leading: engagement per lane; lane with 0 engagement in 14d → merge lane
- **Kill rule:** 14d zero-engagement lane → merged (IDLE) — the lane list shrinks honestly
- **Evidence:** personas.json ✓ · soldiers-blog.cjs ✓ → mechanism PROVEN in-repo
- **earn:** TBD-MEASURE (per-lane engagement next cycle)

## V5 · Fuel grid — OPEN
- **Thesis:** external fills on the fuel grid — the only currently-measured external USD inflow
- **Product → rail → traffic:** grid liquidity → grid external flow → external traders
- **Earn line:** measured $0.0604 lifetime (KPI) — keep only if fills continue
- **Kill rule:** no external fill in 21d → freeze grid spend (IDLE)
- **Evidence:** routes.json ✓ · route-desk.cjs ✓ → mechanism PROVEN in-repo
- **lifetimeUsd:** 0.0604
- **earn:** measured lifetime $0.0604

---

_Laws binding this board: GOVERNOR LAW · TWO-SIDED LEDGER LAW · EARN-GOVERNOR LAW · NOTEBOOK LAW · MEASURABLE→DASHBOARD LAW · LABOR TIERING LAW · VENTURE TEMPLATE LAW · DELEGATION-SELECTION LAW (Defi/fleet/DOCTRINE-economics.md)._
