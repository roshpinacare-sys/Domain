# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-11T22:58:39.287Z · Verdict: **MESH-LIVE** · batch: MESH-2026111122-6563f330 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 300305.26 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1106µ → SBD | P3 | 3447µ SBD | 3336µ (CEX-FAIR (SBD per STEEM)) | 2µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 12903.7632312 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 3µ | 17513µ | 5837.66666667 | -54.75bps |
| 5% | 17µ | 96435µ | 5672.64705882 | -56.03bps |

**P2 WSBD/SBD** (mid 0.08970795 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6314µ | 2809µ | 0.44488438 | 395.92bps |
| 1% | 63146µ | 27450µ | 0.43470687 | 384.58bps |
| 5% | 315731µ | 123577µ | 0.39139964 | 336.3bps |

**P3 STEEM/SBD** (mid 3.13722344 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 276µ | 862µ | 3.12318841 | -0.44bps |
| 1% | 2767µ | 8573µ | 3.09830141 | -1.24bps |
| 5% | 13837µ | 41244µ | 2.98070391 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 916 · Volume in: 12592693µ · Edge captured: -34272022µ · Fees paid (LP revenue): 12739µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1106µ · edge 3336µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

