# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-02T00:44:14.793Z · Verdict: **MESH-LIVE** · batch: MESH-2026110200-9d046aea · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 21689.54 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 3432µ → SBD | P3 | 1094µ SBD | 747µ (CEX-FAIR (SBD per STEEM)) | 8µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 797.93518903 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 2µ | 615µ | 307.5 | -61.46bps |
| 1% | 24µ | 7319µ | 304.95833333 | -61.78bps |
| 5% | 120µ | 35519µ | 295.99166667 | -62.9bps |

**P2 WSBD/SBD** (mid 0.38352509 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 4614µ | 4104µ | 0.88946684 | 131.91bps |
| 1% | 46149µ | 40923µ | 0.88675811 | 131.21bps |
| 5% | 230746µ | 201808µ | 0.87458938 | 128.03bps |

**P3 STEEM/SBD** (mid 0.32102365 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 858µ | 274µ | 0.31934732 | -0.52bps |
| 1% | 8581µ | 2720µ | 0.31697937 | -1.25bps |
| 5% | 42905µ | 13086µ | 0.30499942 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 255 · Volume in: 3107779µ · Edge captured: -2477360µ · Fees paid (LP revenue): 3431µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 3432µ · edge 747µ · fees 8µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

