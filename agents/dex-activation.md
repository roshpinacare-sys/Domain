# dex-activation — THE IGNITION DESK (CR-0077)

At: 2026-11-13T01:59:04.594Z · Verdict: **IGNITED (3/3 rounds filled)** · batch: ACT-2026111301-3ac14238 · lane: dex-activation

Owner word (trace 1a135897157a1d75): "saos dex עמלות 0 נפח כמעט 0 מצטבר כלום" — הדלפק הזה הוא התיקון: זרימה דו-צדדית רציפה סביב המיד של כל בריכה חיה, דרך חוקי-ה-settle של הליבה עצמה.

Pools armed: P1, P2, P3 · Intents drafted: 12 · Fills settled: 12 · Refusals: 0 · Wires: 11

Core ledger: seq 2102 @ 2026-11-13T01:55:21.450Z · conservation true · att 90b307ffda77a987


| Agent | Fill | Out | Edge (marked) | Fees |
|---|---|---|---|---|
| operator | STEEM 13686µ | 1µ WSTEEM | -13685µ | 0µ |
| operator | STEEM 13686µ | 1µ WSTEEM | -13685µ | 0µ |
| operator | SBD 5664µ | 12632µ WSBD | 6968µ | 2µ |
| operator | WSBD 12641µ | 5666µ SBD | -6975µ | 1µ |
| operator | SBD 28323µ | 61935µ WSBD | 33612µ | 12µ |
| operator | STEEM 2737µ | 8681µ SBD | 8409µ | 6µ |
| operator | SBD 8791µ | 2757µ STEEM | -85402µ | 21µ |
| operator | STEEM 13685µ | 41767µ SBD | 40403µ | 34µ |
| operator | SBD 29739µ | 9831µ STEEM | -288404µ | 74µ |
| operator | WSBD 61944µ | 1µ WSTEEM | -621200µ | 75µ |
| operator | STEEM 13440µ | 1µ WSTEEM | -13439µ | 0µ |
| operator | STEEM 13440µ | 1µ WSTEEM | -13439µ | 0µ |

## Rolling 24h (measured from the ledger — never invented)

Fills: 62 · Volume in: 887777µ · Volume out: 621739µ · Fees accrued: 928µ


| Pool | Swaps 24h | In µ | Out µ | Fees µ |
|---|---|---|---|---|
| P1 | 20 | 253619 | 30 | 0 |
| P2 | 16 | 434320 | 434208 | 80 |
| P3 | 34 | 348402 | 336065 | 848 |

Laws: keyless internal-only · staged-lane (CR-0077) · two-sided (never a direction bet) · 10/100/500bps depth ladder · dust 1000µ · minOut −0.5% · roster split op-40% · bounded 30 intents/run · single-writer queue (DEX_SETTLE_QUEUE) · idempotent batch · measured 24h only

