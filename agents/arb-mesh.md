# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-04T20:05:02.787Z · Verdict: **MESH-LIVE** · batch: MESH-2026110420-e09c2365 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 121036.18 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1577µ → SBD | P3 | 2394µ SBD | 2211µ (CEX-FAIR (SBD per STEEM)) | 3µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 3881.73737374 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 7µ | 11682µ | 1668.85714286 | -57bps |
| 5% | 39µ | 63163µ | 1619.56410256 | -58.27bps |

**P2 WSBD/SBD** (mid 0.10415075 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6156µ | 3092µ | 0.5022742 | 382.25bps |
| 1% | 61563µ | 30288µ | 0.49198382 | 372.37bps |
| 5% | 307819µ | 137785µ | 0.44761694 | 329.77bps |

**P3 STEEM/SBD** (mid 1.5280287 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 394µ | 599µ | 1.52030457 | -0.5bps |
| 1% | 3944µ | 5952µ | 1.50912779 | -1.23bps |
| 5% | 19721µ | 28631µ | 1.45180265 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 462 · Volume in: 6758188µ · Edge captured: -10586026µ · Fees paid (LP revenue): 6458µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1577µ · edge 2211µ · fees 3µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

