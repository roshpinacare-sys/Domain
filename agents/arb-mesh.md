# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-10-16T21:41:55.065Z · Verdict: **MESH-LIVE** · batch: MESH-2026101621-e968980e · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 20885.99 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| headcorner | STEEM 3452µ → SBD | P3 | 1083µ SBD | 731µ (CEX-FAIR (SBD per STEEM)) | 8µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 61.09693726 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 16µ | 244µ | 15.25 | -75.03bps |
| 1% | 168µ | 2547µ | 15.16071428 | -75.18bps |
| 5% | 840µ | 12358µ | 14.71190476 | -75.92bps |

**P2 WSBD/SBD** (mid 0.65814678 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 3816µ | 3664µ | 0.96016771 | 45.88bps |
| 1% | 38161µ | 36596µ | 0.95898954 | 45.71bps |
| 5% | 190806µ | 181971µ | 0.95369642 | 44.9bps |

**P3 STEEM/SBD** (mid 0.3158936 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 863µ | 271µ | 0.31402086 | -0.59bps |
| 1% | 8632µ | 2693µ | 0.31197868 | -1.23bps |
| 5% | 43164µ | 12955µ | 0.30013437 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 53 · Volume in: 1119337µ · Edge captured: -900055µ · Fees paid (LP revenue): 934µ
- acct-00: 52 fills · vol 339395146063717130316253365295033656968516828496851213121371937332069420146033653365684581917422943584273535849116811792471168110071007023364441311180358435849µ · edge -102251414-14352041-7765-4135-443133-311222769670-67101745-32921192-19276-256051-65196444-33772-9069-940319-57694501301274-127035291-59444-32749-338298µ · fees 30200140061331330483235101020110062342225511127894µ
- headcorner: 1 fills · vol 3452µ · edge 731µ · fees 8µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

