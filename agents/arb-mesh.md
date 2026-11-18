# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-18T09:55:09.778Z · Verdict: **NO-EDGE (every row below the floor — the machinery waits, the floor law protects the P&L)** · batch: — · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 0 · Intents drafted: 0 · Fills settled: 0 · Refusals: 0


## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 27115.17982456 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 2µ | 25063µ | 12531.5 | -53.78bps |
| 5% | 11µ | 133910µ | 12173.63636364 | -55.1bps |

**P2 WSBD/SBD** (mid 0.1612886 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 5687µ | 3788µ | 0.66608053 | 312.97bps |
| 1% | 56876µ | 37417µ | 0.65786975 | 307.88bps |
| 5% | 284380µ | 176269µ | 0.61983613 | 284.3bps |

**P3 STEEM/SBD** (mid 2.87996238 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 290µ | 832µ | 2.86896552 | -0.38bps |
| 1% | 2902µ | 8254µ | 2.84424535 | -1.24bps |
| 5% | 14514µ | 39714µ | 2.73625465 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 1296 · Volume in: 18061088µ · Edge captured: -51307736µ · Fees paid (LP revenue): 18607µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 14514µ · edge -14513µ · fees 0µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

