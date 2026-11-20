# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-20T03:42:24.009Z · Verdict: **NO-EDGE (every row below the floor — the machinery waits, the floor law protects the P&L)** · batch: — · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 0 · Intents drafted: 0 · Fills settled: 0 · Refusals: 0


## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 31092.25961538 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 2µ | 28823µ | 14411.5 | -53.64bps |
| 5% | 10µ | 140086µ | 14008.6 | -54.94bps |

**P2 WSBD/SBD** (mid 0.30435309 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 4927µ | 4166µ | 0.84554496 | 177.81bps |
| 1% | 49278µ | 41481µ | 0.84177523 | 176.57bps |
| 5% | 246390µ | 203054µ | 0.82411624 | 170.77bps |

**P3 STEEM/SBD** (mid 2.8957279 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 290µ | 836µ | 2.88275862 | -0.44bps |
| 1% | 2900µ | 8293µ | 2.85965517 | -1.24bps |
| 5% | 14503µ | 39901µ | 2.75122388 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 1400 · Volume in: 19883208µ · Edge captured: -51359089µ · Fees paid (LP revenue): 20934µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1498µ · edge 272µ · fees 0µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

