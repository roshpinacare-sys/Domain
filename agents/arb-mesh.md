# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-07T23:21:41.819Z · Verdict: **MESH-LIVE** · batch: MESH-2026110723-65b36556 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 231447.61 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1202µ → SBD | P3 | 3156µ SBD | 3032µ (CEX-FAIR (SBD per STEEM)) | 3µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 7283.45961538 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 5µ | 16115µ | 3223 | -55.74bps |
| 5% | 26µ | 81338µ | 3128.38461538 | -57.04bps |

**P2 WSBD/SBD** (mid 0.09001958 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6310µ | 2815µ | 0.44611727 | 395.57bps |
| 1% | 63106µ | 27515µ | 0.43601242 | 384.35bps |
| 5% | 315530µ | 123899µ | 0.39266948 | 336.2bps |

**P3 STEEM/SBD** (mid 2.64343896 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 300µ | 790µ | 2.63333333 | -0.38bps |
| 1% | 3006µ | 7848µ | 2.61077844 | -1.23bps |
| 5% | 15033µ | 37756µ | 2.51154127 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 683 · Volume in: 9518137µ · Edge captured: -21300078µ · Fees paid (LP revenue): 9435µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1202µ · edge 3032µ · fees 3µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

