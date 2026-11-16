# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-16T06:06:52.988Z · Verdict: **MESH-LIVE** · batch: MESH-2026111606-3ae89cbc · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 308458.79 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1121µ → SBD | P3 | 3423µ SBD | 3314µ (CEX-FAIR (SBD per STEEM)) | 2µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 21622.43726236 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 2µ | 19887µ | 9943.5 | -54.01bps |
| 5% | 13µ | 125339µ | 9641.46153846 | -55.4bps |

**P2 WSBD/SBD** (mid 0.10706501 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6128µ | 3143µ | 0.51289164 | 379.04bps |
| 1% | 61282µ | 30806µ | 0.50269247 | 369.52bps |
| 5% | 306414µ | 140433µ | 0.4583113 | 328.06bps |

**P3 STEEM/SBD** (mid 3.07404674 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 280µ | 857µ | 3.06071428 | -0.43bps |
| 1% | 2804µ | 8513µ | 3.03601997 | -1.23bps |
| 5% | 14022µ | 40954µ | 2.92069605 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 1179 · Volume in: 16209846µ · Edge captured: -48745723µ · Fees paid (LP revenue): 16518µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1121µ · edge 3314µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

