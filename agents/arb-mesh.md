# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-10T15:11:47.928Z · Verdict: **MESH-LIVE** · batch: MESH-2026111015-d446a07b · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 273856.65 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1152µ → SBD | P3 | 3307µ SBD | 3190µ (CEX-FAIR (SBD per STEEM)) | 2µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 10652.33910891 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 4µ | 19128µ | 4782 | -55.1bps |
| 5% | 20µ | 92894µ | 4644.7 | -56.39bps |

**P2 WSBD/SBD** (mid 0.08973238 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6314µ | 2809µ | 0.44488438 | 395.79bps |
| 1% | 63142µ | 27454µ | 0.43479776 | 384.54bps |
| 5% | 315710µ | 123600µ | 0.39149853 | 336.29bps |

**P3 STEEM/SBD** (mid 2.89000705 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 288µ | 829µ | 2.87847222 | -0.39bps |
| 1% | 2880µ | 8220µ | 2.85416667 | -1.24bps |
| 5% | 14403µ | 39548µ | 2.74581684 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 840 · Volume in: 11473674µ · Edge captured: -29589219µ · Fees paid (LP revenue): 11573µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1152µ · edge 3190µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

