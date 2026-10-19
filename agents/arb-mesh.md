# arb-mesh — THE MESH MARKET (R41, CR-0071)

<<<<<<< Updated upstream
At: 2026-10-19T04:16:52.021Z · Verdict: **MESH-LIVE** · batch: MESH-2026101904-5602f57c · protocol: SAOS-ARB-MESH/1
=======
At: 2026-10-19T04:11:48.850Z · Verdict: **MESH-LIVE** · batch: MESH-2026101904-7589792a · protocol: SAOS-ARB-MESH/1
>>>>>>> Stashed changes

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
<<<<<<< Updated upstream
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 6260.47 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 4121µ → SBD | P3 | 721µ SBD | 276µ (CEX-FAIR (SBD per STEEM)) | 10µ |
=======
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 6389.95 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 4121µ → SBD | P3 | 727µ SBD | 282µ (CEX-FAIR (SBD per STEEM)) | 10µ |
>>>>>>> Stashed changes

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 62.01053138 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 16µ | 248µ | 15.5 | -75bps |
| 1% | 166µ | 2563µ | 15.43975904 | -75.1bps |
| 5% | 830µ | 12437µ | 14.98433735 | -75.83bps |

**P2 WSBD/SBD** (mid 0.65814678 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 3816µ | 3664µ | 0.96016771 | 45.88bps |
| 1% | 38161µ | 36596µ | 0.95898954 | 45.71bps |
| 5% | 190806µ | 181971µ | 0.95369642 | 44.9bps |

<<<<<<< Updated upstream
**P3 STEEM/SBD** (mid 0.17623571 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 1156µ | 203µ | 0.17560554 | -0.35bps |
| 1% | 11562µ | 2012µ | 0.17401833 | -1.25bps |
| 5% | 57814µ | 9680µ | 0.16743349 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 107 · Volume in: 1328705µ · Edge captured: -880303µ · Fees paid (LP revenue): 1430µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 4121µ · edge 276µ · fees 10µ
=======
**P3 STEEM/SBD** (mid 0.17749705 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 1152µ | 203µ | 0.17621528 | -0.72bps |
| 1% | 11521µ | 2019µ | 0.1752452 | -1.26bps |
| 5% | 57608µ | 9715µ | 0.16863977 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 106 · Volume in: 1324584µ · Edge captured: -880579µ · Fees paid (LP revenue): 1420µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 4121µ · edge 282µ · fees 10µ
>>>>>>> Stashed changes

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

