# dex-activation — THE IGNITION DESK (CR-0077)

At: 2026-11-12T04:20:02.766Z · Verdict: **IGNITED (3/3 rounds filled)** · batch: ACT-2026111204-1b78ee34 · lane: dex-activation

Owner word (trace 1a135897157a1d75): "saos dex עמלות 0 נפח כמעט 0 מצטבר כלום" — הדלפק הזה הוא התיקון: זרימה דו-צדדית רציפה סביב המיד של כל בריכה חיה, דרך חוקי-ה-settle של הליבה עצמה.

Pools armed: P1, P2, P3 · Intents drafted: 12 · Fills settled: 12 · Refusals: 0 · Wires: 11

Core ledger: seq 1990 @ 2026-11-12T04:07:36.511Z · conservation true · att 0a36e02454fb18b6


| Agent | Fill | Out | Edge (marked) | Fees |
|---|---|---|---|---|
| operator | STEEM 13792µ | 2µ WSTEEM | -13790µ | 0µ |
| operator | STEEM 13792µ | 2µ WSTEEM | -13790µ | 0µ |
| operator | STEEM 13792µ | 2µ WSTEEM | -13790µ | 0µ |
| operator | STEEM 13792µ | 2µ WSTEEM | -13790µ | 0µ |
| operator | SBD 5664µ | 12631µ WSBD | 6967µ | 2µ |
| operator | WSBD 12649µ | 5669µ SBD | -6980µ | 1µ |
| operator | SBD 28323µ | 61936µ WSBD | 33613µ | 12µ |
| operator | STEEM 2758µ | 8604µ SBD | 8329µ | 6µ |
| operator | SBD 8714µ | 2778µ STEEM | -84343µ | 21µ |
| operator | STEEM 13791µ | 41400µ SBD | 40021µ | 34µ |
| operator | SBD 29739µ | 9992µ STEEM | -287333µ | 74µ |
| operator | WSBD 61952µ | 1µ WSTEEM | -619383µ | 75µ |

## Rolling 24h (measured from the ledger — never invented)

Fills: 61 · Volume in: 891270µ · Volume out: 615557µ · Fees accrued: 930µ


| Pool | Swaps 24h | In µ | Out µ | Fees µ |
|---|---|---|---|---|
| P2 | 16 | 434406 | 434245 | 80 |
| P3 | 33 | 348040 | 330954 | 850 |
| P1 | 20 | 258502 | 36 | 0 |

Laws: keyless internal-only · staged-lane (CR-0077) · two-sided (never a direction bet) · 10/100/500bps depth ladder · dust 1000µ · minOut −0.5% · roster split op-40% · bounded 30 intents/run · single-writer queue (DEX_SETTLE_QUEUE) · idempotent batch · measured 24h only

