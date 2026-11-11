# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-11T00:51:34.593Z · Verdict: **MESH-LIVE** · batch: MESH-2026111100-546368a2 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 290446.14 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1125µ → SBD | P3 | 3387µ SBD | 3273µ (CEX-FAIR (SBD per STEEM)) | 2µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 11495.71243523 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 3µ | 15548µ | 5182.66666667 | -54.91bps |
| 5% | 19µ | 95512µ | 5026.94736842 | -56.27bps |

**P2 WSBD/SBD** (mid 0.08971802 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6314µ | 2809µ | 0.44488438 | 395.86bps |
| 1% | 63144µ | 27452µ | 0.43475231 | 384.57bps |
| 5% | 315721µ | 123586µ | 0.39144054 | 336.3bps |

**P3 STEEM/SBD** (mid 3.03103444 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 281µ | 848µ | 3.01779359 | -0.43bps |
| 1% | 2813µ | 8421µ | 2.99360114 | -1.23bps |
| 5% | 14069µ | 40516µ | 2.87980667 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 869 · Volume in: 11921821µ · Edge captured: -31460792µ · Fees paid (LP revenue): 12036µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1125µ · edge 3273µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

