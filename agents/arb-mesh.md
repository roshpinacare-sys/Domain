# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-20T21:29:38.746Z · Verdict: **NO-EDGE (every row below the floor — the machinery waits, the floor law protects the P&L)** · batch: — · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 0 · Intents drafted: 0 · Fills settled: 0 · Refusals: 0


## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 33729.56345178 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 1µ | 15724µ | 15724 | -53.38bps |
| 5% | 9µ | 137276µ | 15252.88888889 | -54.77bps |

**P2 WSBD/SBD** (mid 0.3322831 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 4811µ | 4154µ | 0.86343795 | 159.85bps |
| 1% | 48119µ | 41388µ | 0.86011762 | 158.85bps |
| 5% | 240597µ | 203244µ | 0.84474869 | 154.22bps |

**P3 STEEM/SBD** (mid 2.73509368 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 298µ | 812µ | 2.72483221 | -0.37bps |
| 1% | 2987µ | 8068µ | 2.70103783 | -1.24bps |
| 5% | 14938µ | 38818µ | 2.59860758 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 1441 · Volume in: 20634547µ · Edge captured: -51448998µ · Fees paid (LP revenue): 21940µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1597µ · edge 252µ · fees 0µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

