# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-04T08:44:17.989Z · Verdict: **MESH-LIVE** · batch: MESH-2026110408-0b542756 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 103368.27 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1733µ → SBD | P3 | 2177µ SBD | 1979µ (CEX-FAIR (SBD per STEEM)) | 4µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 3303.57239819 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 8µ | 11261µ | 1407.625 | -57.39bps |
| 5% | 44µ | 60089µ | 1365.65909091 | -58.66bps |

**P2 WSBD/SBD** (mid 0.11829002 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6021µ | 3319µ | 0.55123734 | 366bps |
| 1% | 60216µ | 32604µ | 0.54145078 | 357.73bps |
| 5% | 301081µ | 149787µ | 0.49749735 | 320.57bps |

**P3 STEEM/SBD** (mid 1.26477022 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 433µ | 545µ | 1.25866051 | -0.48bps |
| 1% | 4333µ | 5412µ | 1.24901916 | -1.24bps |
| 5% | 21666µ | 26035µ | 1.20165236 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 423 · Volume in: 6192397µ · Edge captured: -8899843µ · Fees paid (LP revenue): 5925µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1733µ · edge 1979µ · fees 4µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

