# dex-activation — THE IGNITION DESK (CR-0077)

At: 2026-11-14T16:08:37.007Z · Verdict: **IGNITED (3/3 rounds filled)** · batch: ACT-2026111416-e5b95fd1 · lane: dex-activation

Owner word (trace 1a135897157a1d75): "saos dex עמלות 0 נפח כמעט 0 מצטבר כלום" — הדלפק הזה הוא התיקון: זרימה דו-צדדית רציפה סביב המיד של כל בריכה חיה, דרך חוקי-ה-settle של הליבה עצמה.

Pools armed: P1, P2, P3 · Intents drafted: 12 · Fills settled: 12 · Refusals: 0 · Wires: 11

Core ledger: seq 2318 @ 2026-11-14T16:03:21.497Z · conservation true · att d1d21f98a16644b2


| Agent | Fill | Out | Edge (marked) | Fees |
|---|---|---|---|---|
| operator | STEEM 13435µ | 1µ WSTEEM | -13434µ | 0µ |
| operator | STEEM 13435µ | 1µ WSTEEM | -13434µ | 0µ |
| operator | SBD 5665µ | 12633µ WSBD | 6968µ | 2µ |
| operator | WSBD 12636µ | 5664µ SBD | -6972µ | 1µ |
| operator | SBD 28326µ | 61937µ WSBD | 33611µ | 12µ |
| operator | STEEM 2687µ | 8864µ SBD | 8606µ | 6µ |
| operator | SBD 8976µ | 2706µ STEEM | -90594µ | 22µ |
| operator | STEEM 13435µ | 42646µ SBD | 41354µ | 33µ |
| operator | SBD 29742µ | 9460µ STEEM | -299692µ | 74µ |
| operator | WSBD 61939µ | 1µ WSTEEM | -643821µ | 75µ |
| operator | STEEM 13212µ | 1µ WSTEEM | -13211µ | 0µ |
| operator | STEEM 13212µ | 1µ WSTEEM | -13211µ | 0µ |

## Rolling 24h (measured from the ledger — never invented)

Fills: 74 · Volume in: 1102856µ · Volume out: 768104µ · Fees accrued: 1154µ


| Pool | Swaps 24h | In µ | Out µ | Fees µ |
|---|---|---|---|---|
| P1 | 25 | 313429 | 25 | 0 |
| P2 | 20 | 542830 | 542740 | 100 |
| P3 | 39 | 431062 | 409804 | 1054 |

Laws: keyless internal-only · staged-lane (CR-0077) · two-sided (never a direction bet) · 10/100/500bps depth ladder · dust 1000µ · minOut −0.5% · roster split op-40% · bounded 30 intents/run · single-writer queue (DEX_SETTLE_QUEUE) · idempotent batch · measured 24h only

