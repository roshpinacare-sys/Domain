# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-13T11:29:57.878Z · Verdict: **MESH-LIVE** · batch: MESH-2026111311-8cd81bed · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 320341.21 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1077µ → SBD | P3 | 3552µ SBD | 3444µ (CEX-FAIR (SBD per STEEM)) | 2µ |

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

**P3 STEEM/SBD** (mid 3.31960393 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 269µ | 889µ | 3.30483271 | -0.44bps |
| 1% | 2693µ | 8829µ | 3.27849981 | -1.23bps |
| 5% | 13467µ | 42474µ | 3.15393183 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 1009 · Volume in: 13924902µ · Edge captured: -39985021µ · Fees paid (LP revenue): 14132µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1077µ · edge 3444µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

