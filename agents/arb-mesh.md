# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-21T08:50:15.311Z · Verdict: **NO-EDGE (every row below the floor — the machinery waits, the floor law protects the P&L)** · batch: — · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 0 · Intents drafted: 0 · Fills settled: 0 · Refusals: 0


## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 33729.56345178 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 1µ | 15724µ | 15724 | -53.38bps |
| 5% | 9µ | 137276µ | 15252.88888889 | -54.77bps |

**P2 WSBD/SBD** (mid 0.36749322 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 4675µ | 4123µ | 0.88192513 | 139.98bps |
| 1% | 46754µ | 41107µ | 0.87921889 | 139.24bps |
| 5% | 233771µ | 202488µ | 0.86618101 | 135.69bps |

**P3 STEEM/SBD** (mid 1.86971807 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 361µ | 672µ | 1.86149584 | -0.43bps |
| 1% | 3615µ | 6675µ | 1.84647303 | -1.24bps |
| 5% | 18076µ | 32111µ | 1.7764439 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 1456 · Volume in: 20883848µ · Edge captured: -51431729µ · Fees paid (LP revenue): 22286µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1716µ · edge 228µ · fees 0µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

