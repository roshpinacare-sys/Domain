# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-13T16:54:55.687Z · Verdict: **MESH-LIVE** · batch: MESH-2026111316-074daab1 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 310459.21 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1090µ → SBD | P3 | 3510µ SBD | 3391µ (CEX-FAIR (SBD per STEEM)) | 2µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 15915.91746032 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 3µ | 21731µ | 7243.66666667 | -54.48bps |
| 5% | 15µ | 105645µ | 7043 | -55.74bps |

**P2 WSBD/SBD** (mid 0.08970742 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6314µ | 2809µ | 0.44488438 | 395.92bps |
| 1% | 63147µ | 27450µ | 0.43469999 | 384.57bps |
| 5% | 315739µ | 123579µ | 0.39139606 | 336.3bps |

**P3 STEEM/SBD** (mid 3.2411654 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 272µ | 878µ | 3.22794118 | -0.4bps |
| 1% | 2725µ | 8723µ | 3.20110092 | -1.23bps |
| 5% | 13629µ | 41970µ | 3.07946291 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 1012 · Volume in: 13928159µ · Edge captured: -39974789µ · Fees paid (LP revenue): 14138µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1090µ · edge 3391µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

