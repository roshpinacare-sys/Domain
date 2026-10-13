# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-10-13T22:04:54.062Z · Verdict: **GATED-WIRE (edge above floor but no free capital to arm the agents — named, never faked)** · batch: MESH-2026101322-d20bfd74 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 0 · Fills settled: 0 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 2355370.07 | 100 | dex-core.json (our pool — atomic, no bridge) |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 611.14285714 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 0µ | — | — | — |
| 5% | 2µ | 448µ | 224 | -63.34bps |

**P2 WSBD/SBD** (mid 0.63349867 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 1530µ | 1462µ | 0.95555556 | 50.83bps |
| 1% | 15309µ | 14619µ | 0.95492847 | 50.73bps |
| 5% | 76548µ | 72672µ | 0.9493651 | 49.86bps |

**P3 STEEM/SBD** (mid 24.38160677 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 1µ | 24µ | 24 | -1.56bps |
| 1% | 18µ | 433µ | 24.05555556 | -1.33bps |
| 5% | 94µ | 2178µ | 23.17021276 | -4.96bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 18 · Volume in: 293557µ · Edge captured: -426751µ · Fees paid (LP revenue): 156µ
- acct-00: 18 fills · vol 898121337133726686013371337214331063143341543716741543154314334µ · edge -126173-18-194-1365-12949-129525-4130-41447-254965-14813-138852µ · fees 5002133340020130336µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

