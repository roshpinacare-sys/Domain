# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-12T01:25:28.305Z · Verdict: **MESH-LIVE** · batch: MESH-2026111201-fdb543df · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 311821.38 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1090µ → SBD | P3 | 3503µ SBD | 3394µ (CEX-FAIR (SBD per STEEM)) | 2µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 13420.11428571 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 3µ | 18237µ | 6079 | -54.7bps |
| 5% | 17µ | 100338µ | 5902.23529412 | -56.01bps |

**P2 WSBD/SBD** (mid 0.08970657 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6314µ | 2809µ | 0.44488438 | 395.93bps |
| 1% | 63146µ | 27449µ | 0.43469103 | 384.56bps |
| 5% | 315733µ | 123576µ | 0.39139399 | 336.3bps |

**P3 STEEM/SBD** (mid 3.23540008 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 272µ | 876µ | 3.22058824 | -0.45bps |
| 1% | 2725µ | 8707µ | 3.19522936 | -1.24bps |
| 5% | 13628µ | 41892µ | 3.07396536 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 929 · Volume in: 12813002µ · Edge captured: -35222313µ · Fees paid (LP revenue): 12966µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1090µ · edge 3394µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

