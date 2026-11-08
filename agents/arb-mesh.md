# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-08T02:55:09.539Z · Verdict: **MESH-LIVE** · batch: MESH-2026110802-b2f48e7d · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 252832.9 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1185µ → SBD | P3 | 3203µ SBD | 3081µ (CEX-FAIR (SBD per STEEM)) | 2µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 7589.03359684 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 5µ | 16817µ | 3363.4 | -55.68bps |
| 5% | 25µ | 81664µ | 3266.56 | -56.95bps |

**P2 WSBD/SBD** (mid 0.0899531 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6311µ | 2814µ | 0.44588813 | 395.68bps |
| 1% | 63114µ | 27501µ | 0.43573534 | 384.4bps |
| 5% | 315570µ | 123829µ | 0.39239788 | 336.22bps |

**P3 STEEM/SBD** (mid 2.72094357 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 296µ | 802µ | 2.70945946 | -0.42bps |
| 1% | 2964µ | 7965µ | 2.68724696 | -1.23bps |
| 5% | 14820µ | 38312µ | 2.5851552 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 699 · Volume in: 9728902µ · Edge captured: -22206892µ · Fees paid (LP revenue): 9672µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1185µ · edge 3081µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

