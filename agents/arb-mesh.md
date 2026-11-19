# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-19T17:53:14.085Z · Verdict: **NO-EDGE (every row below the floor — the machinery waits, the floor law protects the P&L)** · batch: — · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 0 · Intents drafted: 0 · Fills settled: 0 · Refusals: 0


## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 31092.25961538 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 2µ | 28823µ | 14411.5 | -53.64bps |
| 5% | 10µ | 140086µ | 14008.6 | -54.94bps |

**P2 WSBD/SBD** (mid 0.24372939 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 5208µ | 4129µ | 0.79281874 | 225.28bps |
| 1% | 52083µ | 41029µ | 0.78776184 | 223.21bps |
| 5% | 260417µ | 198780µ | 0.76331422 | 213.18bps |

**P3 STEEM/SBD** (mid 2.89343581 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 290µ | 836µ | 2.88275862 | -0.36bps |
| 1% | 2900µ | 8287µ | 2.85758621 | -1.23bps |
| 5% | 14500µ | 39861µ | 2.74903448 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 1370 · Volume in: 19389733µ · Edge captured: -51409263µ · Fees paid (LP revenue): 20235µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 14500µ · edge -14499µ · fees 0µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

