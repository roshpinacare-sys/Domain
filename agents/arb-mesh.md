# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-17T09:17:40.984Z · Verdict: **NO-EDGE (every row below the floor — the machinery waits, the floor law protects the P&L)** · batch: — · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 0 · Intents drafted: 0 · Fills settled: 0 · Refusals: 0


## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 23606.19678715 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 2µ | 21754µ | 10877 | -53.92bps |
| 5% | 12µ | 126726µ | 10560.5 | -55.26bps |

**P2 WSBD/SBD** (mid 0.11393792 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6062µ | 3254µ | 0.53678654 | 371.12bps |
| 1% | 60625µ | 31943µ | 0.52689484 | 362.44bps |
| 5% | 303127µ | 146314µ | 0.48268218 | 323.63bps |

**P3 STEEM/SBD** (mid 2.48451079 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 312µ | 772µ | 2.47435897 | -0.4bps |
| 1% | 3121µ | 7658µ | 2.45370074 | -1.24bps |
| 5% | 15609µ | 36846µ | 2.36056121 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 1230 · Volume in: 16859644µ · Edge captured: -51231068µ · Fees paid (LP revenue): 17221µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1130µ · edge 3293µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

