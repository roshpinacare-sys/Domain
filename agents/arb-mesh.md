# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-20T18:12:56.065Z · Verdict: **NO-EDGE (every row below the floor — the machinery waits, the floor law protects the P&L)** · batch: — · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 0 · Intents drafted: 0 · Fills settled: 0 · Refusals: 0


## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 32245.96551724 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 2µ | 29910µ | 14955 | -53.62bps |
| 5% | 10µ | 145283µ | 14528.3 | -54.94bps |

**P2 WSBD/SBD** (mid 0.32429296 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 4844µ | 4159µ | 0.85858794 | 164.75bps |
| 1% | 48443µ | 41428µ | 0.85519064 | 163.7bps |
| 5% | 242217µ | 203272µ | 0.83921442 | 158.78bps |

**P3 STEEM/SBD** (mid 2.20283139 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 332µ | 728µ | 2.19277108 | -0.45bps |
| 1% | 3327µ | 7238µ | 2.17553351 | -1.23bps |
| 5% | 16638µ | 34822µ | 2.09291982 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 1420 · Volume in: 20235582µ · Edge captured: -51401688µ · Fees paid (LP revenue): 21383µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1569µ · edge 257µ · fees 0µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

