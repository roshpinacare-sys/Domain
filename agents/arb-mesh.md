# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-17T14:07:04.438Z · Verdict: **NO-EDGE (every row below the floor — the machinery waits, the floor law protects the P&L)** · batch: — · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 0 · Intents drafted: 0 · Fills settled: 0 · Refusals: 0


## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 24393.33196721 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 2µ | 22493µ | 11246.5 | -53.89bps |
| 5% | 12µ | 130969µ | 10914.08333333 | -55.25bps |

**P2 WSBD/SBD** (mid 0.11417926 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6060µ | 3258µ | 0.53762376 | 370.85bps |
| 1% | 60603µ | 31981µ | 0.52771315 | 362.17bps |
| 5% | 303016µ | 146513µ | 0.48351572 | 323.47bps |

**P3 STEEM/SBD** (mid 2.69828084 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 299µ | 803µ | 2.68561873 | -0.46bps |
| 1% | 2996µ | 7984µ | 2.66488652 | -1.23bps |
| 5% | 14981µ | 38406µ | 2.56364729 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 1242 · Volume in: 17098422µ · Edge captured: -51263941µ · Fees paid (LP revenue): 17480µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 14981µ · edge -14980µ · fees 0µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

