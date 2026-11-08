# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-08T18:45:45.882Z · Verdict: **MESH-LIVE** · batch: MESH-2026110818-0ae0764a · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 255275.35 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1168µ → SBD | P3 | 3250µ SBD | 3132µ (CEX-FAIR (SBD per STEEM)) | 2µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 8234.3611691 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 4µ | 14659µ | 3664.75 | -55.49bps |
| 5% | 23µ | 81866µ | 3559.39130435 | -56.77bps |

**P2 WSBD/SBD** (mid 0.08985692 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6312µ | 2812µ | 0.44550063 | 395.78bps |
| 1% | 63125µ | 27480µ | 0.43532673 | 384.46bps |
| 5% | 315629µ | 123728µ | 0.39200454 | 336.25bps |

**P3 STEEM/SBD** (mid 2.80092177 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 292µ | 815µ | 2.79109589 | -0.35bps |
| 1% | 2922µ | 8083µ | 2.76625599 | -1.23bps |
| 5% | 14613µ | 38888µ | 2.66119209 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 734 · Volume in: 10152611µ · Edge captured: -24022085µ · Fees paid (LP revenue): 10147µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1168µ · edge 3132µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

