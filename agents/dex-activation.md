# dex-activation — THE IGNITION DESK (CR-0077)

At: 2026-11-10T21:58:20.890Z · Verdict: **IGNITED (3/3 rounds filled)** · batch: ACT-2026111021-c40937c7 · lane: dex-activation

Owner word (trace 1a135897157a1d75): "saos dex עמלות 0 נפח כמעט 0 מצטבר כלום" — הדלפק הזה הוא התיקון: זרימה דו-צדדית רציפה סביב המיד של כל בריכה חיה, דרך חוקי-ה-settle של הליבה עצמה.

Pools armed: P1, P2, P3 · Intents drafted: 12 · Fills settled: 12 · Refusals: 0 · Wires: 11

Core ledger: seq 1817 @ 2026-11-10T20:34:50.324Z · conservation true · att 5170d3e7cb48a4d6


| Agent | Fill | Out | Edge (marked) | Fees |
|---|---|---|---|---|
| operator | STEEM 14316µ | 2µ WSTEEM | -14314µ | 0µ |
| operator | STEEM 14316µ | 2µ WSTEEM | -14314µ | 0µ |
| operator | STEEM 14316µ | 2µ WSTEEM | -14314µ | 0µ |
| operator | STEEM 14316µ | 2µ WSTEEM | -14314µ | 0µ |
| operator | SBD 5665µ | 12631µ WSBD | 6966µ | 2µ |
| operator | WSBD 12683µ | 5686µ SBD | -6997µ | 1µ |
| operator | SBD 28326µ | 61934µ WSBD | 33608µ | 12µ |
| operator | STEEM 2863µ | 8275µ SBD | 7985µ | 7µ |
| operator | SBD 8379µ | 2884µ STEEM | -79788µ | 20µ |
| operator | STEEM 14315µ | 39812µ SBD | 38362µ | 35µ |
| operator | SBD 29742µ | 10772µ STEEM | -282679µ | 74µ |
| operator | WSBD 61980µ | 1µ WSTEEM | -611529µ | 75µ |

## Rolling 24h (measured from the ledger — never invented)

Fills: 63 · Volume in: 904704µ · Volume out: 616667µ · Fees accrued: 937µ


| Pool | Swaps 24h | In µ | Out µ | Fees µ |
|---|---|---|---|---|
| P2 | 16 | 434790 | 434430 | 80 |
| P3 | 35 | 352207 | 334738 | 857 |
| P1 | 20 | 270254 | 46 | 0 |

Laws: keyless internal-only · staged-lane (CR-0077) · two-sided (never a direction bet) · 10/100/500bps depth ladder · dust 1000µ · minOut −0.5% · roster split op-40% · bounded 30 intents/run · single-writer queue (DEX_SETTLE_QUEUE) · idempotent batch · measured 24h only

