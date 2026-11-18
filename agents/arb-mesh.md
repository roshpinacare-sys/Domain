# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-18T22:16:38.315Z · Verdict: **NO-EDGE (every row below the floor — the machinery waits, the floor law protects the P&L)** · batch: — · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 0 · Intents drafted: 0 · Fills settled: 0 · Refusals: 0


## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 28230.77027027 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 2µ | 26124µ | 13062 | -53.73bps |
| 5% | 11µ | 139438µ | 12676.18181818 | -55.09bps |

**P2 WSBD/SBD** (mid 0.17521094 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 5595µ | 3885µ | 0.69436997 | 296.3bps |
| 1% | 55951µ | 38425µ | 0.68676163 | 291.96bps |
| 5% | 279759µ | 182177µ | 0.65119263 | 271.66bps |

**P3 STEEM/SBD** (mid 3.15913337 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 277µ | 872µ | 3.14801444 | -0.35bps |
| 1% | 2772µ | 8648µ | 3.11976912 | -1.24bps |
| 5% | 13862µ | 41607µ | 3.00151493 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 1314 · Volume in: 18422797µ · Edge captured: -51333571µ · Fees paid (LP revenue): 19063µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 13862µ · edge -13861µ · fees 0µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

