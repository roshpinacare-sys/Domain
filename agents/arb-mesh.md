# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-17T21:58:27.673Z · Verdict: **NO-EDGE (every row below the floor — the machinery waits, the floor law protects the P&L)** · batch: — · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 0 · Intents drafted: 0 · Fills settled: 0 · Refusals: 0


## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 25366.31512605 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 2µ | 23416µ | 11708 | -53.84bps |
| 5% | 11µ | 125244µ | 11385.81818182 | -55.11bps |

**P2 WSBD/SBD** (mid 0.12140704 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 5995µ | 3365µ | 0.56130108 | 362.32bps |
| 1% | 59951µ | 33065µ | 0.55153375 | 354.28bps |
| 5% | 299759µ | 152221µ | 0.50781128 | 318.27bps |

**P3 STEEM/SBD** (mid 2.88635375 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 289µ | 831µ | 2.87543252 | -0.37bps |
| 1% | 2897µ | 8258µ | 2.85053504 | -1.24bps |
| 5% | 14489µ | 39734µ | 2.74235627 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 1262 · Volume in: 17465492µ · Edge captured: -51280764µ · Fees paid (LP revenue): 17906µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 14489µ · edge -14488µ · fees 0µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

