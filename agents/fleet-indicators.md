# FLEET WORLD INDICATORS (FWI) — 2026-10-03T01:44:16.378Z

Verdict: **THRIVING** · GROW=9 HELD=0 DECLINE=0

| # | Indicator | Value | Break-even | Status | Evidence source |
|---|-----------|-------|------------|--------|-----------------|
| F1 | Population Health | 9/9 | ≥7/9 | GROW | `agents/{econ,curation,money-ledger,ventures,fills-ledger,bridge,dex,learning-ledger,recruitment}-book.json .at/.updated < 48h` |
| F2 | Safety & Public Order | denies=0 evals=PASS stasis=armed | evals PASS + stasis armed | GROW | `agents/command-guard.json .denies + agents/STASIS.json .active + evals/eval-results.json E7-E9` |
| F3 | Capability Exploration | 57/57 | 100% | GROW | `node --check over agents/*.cjs|*.mjs + scripts/*.mjs` |
| F4 | Governance Conformity | 6/6 CRs judged · registry 52 rows (48 LIVE) | 100% judged + ≥20 rows | GROW | `agents/change-requests/*.json verdict fields + role-registry.csv row count` |
| F5 | Public Expression | 35 posts · 62 samples | ≥20 posts | GROW | `agents/learning-ledger.json keys + samples[]` |
| F6 | Social Fabric & Diversity | tiers=3 lanes=23 ownedBooks=23 | ≥2 tiers · ≥5 lanes · ≥5 books | GROW | `role-registry.csv columns tier(7)/ci(3)/books(7) distinct counts` |
| F7 | Economic Vitality & Equity | headcorner: 10.031 STEEM liquid · 4286.098 SP · book 3.9h old | ledger fresh + executor-identified | GROW | `agents/money-ledger.json .book{executor,headSteemLiquid,headSteemStake} fresh <48h` |
| F8 | Constitutional Growth | law v1.0.5 · features 9/10 done · 2035 commits/7d | law versioned + ≤2 open features + ≥20 commits/7d | GROW | `agents/sovereignty.md version + feature_list.json status counts + git rev-list 7d` |
| F9 | Sovereign Autonomy | verify ALL_PASS=7 · econ receipts=109 · anchors=227 → score 17 | ≥5 receipts / 7d | GROW | `git log --grep receipts (agent-verify/econ/anchor), last 7 days` |

> ANTI-GOODHART: every value above is COMPUTED from the named artifact in this commit — a claim without an artifact is not a value. Their 9 indicators scored a spectacle; ours score a sovereign estate (docs/FATE-DEFENSE.md).
