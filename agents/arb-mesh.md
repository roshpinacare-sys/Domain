# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-14T23:19:28.282Z · Verdict: **MESH-LIVE** · batch: MESH-2026111423-ed873b02 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 339488.03 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1094µ → SBD | P3 | 3505µ SBD | 3405µ (CEX-FAIR (SBD per STEEM)) | 2µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 18812.68181818 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 2µ | 17244µ | 8622 | -54.16bps |
| 5% | 14µ | 117022µ | 8358.71428571 | -55.56bps |

**P2 WSBD/SBD** (mid 0.09513378 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6252µ | 2921µ | 0.46721049 | 391.1bps |
| 1% | 62528µ | 28579µ | 0.45705924 | 380.43bps |
| 5% | 312644µ | 129165µ | 0.41313763 | 334.27bps |

**P3 STEEM/SBD** (mid 3.22479878 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 273µ | 877µ | 3.21245421 | -0.38bps |
| 1% | 2735µ | 8710µ | 3.18464351 | -1.24bps |
| 5% | 13678µ | 41908µ | 3.06389823 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 1102 · Volume in: 15191293µ · Edge captured: -44911292µ · Fees paid (LP revenue): 15452µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1094µ · edge 3405µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

