# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-13T21:42:21.433Z · Verdict: **MESH-LIVE** · batch: MESH-2026111321-e2eaddbe · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 287829 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1083µ → SBD | P3 | 3531µ SBD | 3412µ (CEX-FAIR (SBD per STEEM)) | 2µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 16377.40322581 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 3µ | 22381µ | 7460.33333333 | -54.44bps |
| 5% | 15µ | 108747µ | 7249.8 | -55.73bps |

**P2 WSBD/SBD** (mid 0.08970868 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6314µ | 2809µ | 0.44488438 | 395.92bps |
| 1% | 63147µ | 27450µ | 0.43469999 | 384.56bps |
| 5% | 315739µ | 123581µ | 0.39140239 | 336.3bps |

**P3 STEEM/SBD** (mid 3.28220895 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 270µ | 883µ | 3.27037037 | -0.36bps |
| 1% | 2709µ | 8781µ | 3.2414175 | -1.24bps |
| 5% | 13546µ | 42242µ | 3.11841134 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 1027 · Volume in: 14149657µ · Edge captured: -40838993µ · Fees paid (LP revenue): 14370µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1083µ · edge 3412µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

