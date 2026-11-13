# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-13T23:49:51.240Z · Verdict: **MESH-LIVE** · batch: MESH-2026111323-c57c9717 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 300592.06 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1073µ → SBD | P3 | 3568µ SBD | 3452µ (CEX-FAIR (SBD per STEEM)) | 2µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 16852.57704918 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 3µ | 23047µ | 7682.33333333 | -54.41bps |
| 5% | 15µ | 111935µ | 7462.33333333 | -55.71bps |

**P2 WSBD/SBD** (mid 0.08971013 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6314µ | 2809µ | 0.44488438 | 395.91bps |
| 1% | 63148µ | 27451µ | 0.43470894 | 384.57bps |
| 5% | 315740µ | 123583µ | 0.39140749 | 336.3bps |

**P3 STEEM/SBD** (mid 3.34759599 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 268µ | 894µ | 3.33582089 | -0.35bps |
| 1% | 2683µ | 8870µ | 3.30600074 | -1.24bps |
| 5% | 13416µ | 42670µ | 3.18053071 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 1041 · Volume in: 14369677µ · Edge captured: -41716862µ · Fees paid (LP revenue): 14599µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1073µ · edge 3452µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

