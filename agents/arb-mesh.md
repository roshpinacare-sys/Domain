# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-19T03:47:58.362Z · Verdict: **NO-EDGE (every row below the floor — the machinery waits, the floor law protects the P&L)** · batch: — · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 0 · Intents drafted: 0 · Fills settled: 0 · Refusals: 0


## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 29200.66820276 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 2µ | 27037µ | 13518.5 | -53.7bps |
| 5% | 10µ | 131552µ | 13155.2 | -54.94bps |

**P2 WSBD/SBD** (mid 0.2000762 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 5443µ | 4010µ | 0.73672607 | 268.22bps |
| 1% | 54434µ | 39751µ | 0.7302605 | 264.99bps |
| 5% | 272174µ | 190270µ | 0.69907486 | 249.4bps |

**P3 STEEM/SBD** (mid 3.16041012 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 277µ | 872µ | 3.14801444 | -0.39bps |
| 1% | 2772µ | 8652µ | 3.12121212 | -1.24bps |
| 5% | 13864µ | 41630µ | 3.00274091 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 1332 · Volume in: 18735119µ · Edge captured: -51359952µ · Fees paid (LP revenue): 19421µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 13864µ · edge -13863µ · fees 0µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

