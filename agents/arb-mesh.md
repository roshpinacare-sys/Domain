# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-12T22:43:56.677Z · Verdict: **MESH-LIVE** · batch: MESH-2026111222-ed53f9f5 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 317361.24 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1086µ → SBD | P3 | 3520µ SBD | 3409µ (CEX-FAIR (SBD per STEEM)) | 2µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 15038.92923077 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 3µ | 20503µ | 6834.33333333 | -54.55bps |
| 5% | 16µ | 106169µ | 6635.5625 | -55.87bps |

**P2 WSBD/SBD** (mid 0.08970599 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6314µ | 2809µ | 0.44488438 | 395.93bps |
| 1% | 63147µ | 27450µ | 0.43469999 | 384.58bps |
| 5% | 315737µ | 123577µ | 0.3913922 | 336.3bps |

**P3 STEEM/SBD** (mid 3.26325848 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 271µ | 881µ | 3.25092251 | -0.37bps |
| 1% | 2715µ | 8750µ | 3.22283609 | -1.23bps |
| 5% | 13578µ | 42098µ | 3.10045662 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 978 · Volume in: 13481913µ · Edge captured: -38077542µ · Fees paid (LP revenue): 13667µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1086µ · edge 3409µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

