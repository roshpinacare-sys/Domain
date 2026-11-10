# dex-activation — THE IGNITION DESK (CR-0077)

At: 2026-11-10T16:37:59.677Z · Verdict: **IGNITED (3/3 rounds filled)** · batch: ACT-2026111016-9127ff08 · lane: dex-activation

Owner word (trace 1a135897157a1d75): "saos dex עמלות 0 נפח כמעט 0 מצטבר כלום" — הדלפק הזה הוא התיקון: זרימה דו-צדדית רציפה סביב המיד של כל בריכה חיה, דרך חוקי-ה-settle של הליבה עצמה.

Pools armed: P1, P2, P3 · Intents drafted: 12 · Fills settled: 12 · Refusals: 0 · Wires: 11

Core ledger: seq 1784 @ 2026-11-10T16:04:14.356Z · conservation true · att 65c27d1d56b844de


| Agent | Fill | Out | Edge (marked) | Fees |
|---|---|---|---|---|
| operator | STEEM 14461µ | 2µ WSTEEM | -14459µ | 0µ |
| operator | STEEM 14461µ | 2µ WSTEEM | -14459µ | 0µ |
| operator | SBD 5665µ | 12631µ WSBD | 6966µ | 2µ |
| operator | WSBD 12695µ | 5691µ SBD | -7004µ | 1µ |
| operator | SBD 28328µ | 61933µ WSBD | 33605µ | 12µ |
| operator | STEEM 2892µ | 8189µ SBD | 7892µ | 7µ |
| operator | SBD 8292µ | 2913µ STEEM | -77713µ | 20µ |
| operator | STEEM 14460µ | 39397µ SBD | 37910µ | 36µ |
| operator | SBD 29744µ | 10992µ STEEM | -278222µ | 74µ |
| operator | WSBD 61990µ | 1µ WSTEEM | -602755µ | 75µ |
| operator | STEEM 14145µ | 2µ WSTEEM | -14143µ | 0µ |
| operator | STEEM 14145µ | 2µ WSTEEM | -14143µ | 0µ |

## Rolling 24h (measured from the ledger — never invented)

Fills: 63 · Volume in: 906411µ · Volume out: 615961µ · Fees accrued: 938µ


| Pool | Swaps 24h | In µ | Out µ | Fees µ |
|---|---|---|---|---|
| P1 | 20 | 272009 | 51 | 0 |
| P2 | 16 | 434934 | 434502 | 80 |
| P3 | 35 | 352501 | 334441 | 858 |

Laws: keyless internal-only · staged-lane (CR-0077) · two-sided (never a direction bet) · 10/100/500bps depth ladder · dust 1000µ · minOut −0.5% · roster split op-40% · bounded 30 intents/run · single-writer queue (DEX_SETTLE_QUEUE) · idempotent batch · measured 24h only

