# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-05T05:10:24.432Z · Verdict: **MESH-LIVE** · batch: MESH-2026110505-c521f34d · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 128344.98 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1529µ → SBD | P3 | 2470µ SBD | 2291µ (CEX-FAIR (SBD per STEEM)) | 3µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 4159.64814815 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 7µ | 12555µ | 1793.57142857 | -56.88bps |
| 5% | 37µ | 64456µ | 1742.05405405 | -58.12bps |

**P2 WSBD/SBD** (mid 0.09997522 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6199µ | 3015µ | 0.48636877 | 386.48bps |
| 1% | 61995µ | 29519µ | 0.4761513 | 376.26bps |
| 5% | 309979µ | 133882µ | 0.43190668 | 332.01bps |

**P3 STEEM/SBD** (mid 1.62632478 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 382µ | 619µ | 1.62041885 | -0.36bps |
| 1% | 3824µ | 6142µ | 1.60617155 | -1.23bps |
| 5% | 19121µ | 29545µ | 1.54515977 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 484 · Volume in: 7026774µ · Edge captured: -11413510µ · Fees paid (LP revenue): 6724µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1529µ · edge 2291µ · fees 3µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

