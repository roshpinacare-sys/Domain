# dex-activation — THE IGNITION DESK (CR-0077)

At: 2026-11-11T02:00:43.920Z · Verdict: **IGNITED (3/3 rounds filled)** · batch: ACT-2026111102-4214c4ac · lane: dex-activation

Owner word (trace 1a135897157a1d75): "saos dex עמלות 0 נפח כמעט 0 מצטבר כלום" — הדלפק הזה הוא התיקון: זרימה דו-צדדית רציפה סביב המיד של כל בריכה חיה, דרך חוקי-ה-settle של הליבה עצמה.

Pools armed: P1, P2, P3 · Intents drafted: 12 · Fills settled: 12 · Refusals: 0 · Wires: 11

Core ledger: seq 1849 @ 2026-11-11T01:26:40.389Z · conservation true · att feb539cad7272ba7


| Agent | Fill | Out | Edge (marked) | Fees |
|---|---|---|---|---|
| operator | STEEM 14126µ | 2µ WSTEEM | -14124µ | 0µ |
| operator | STEEM 14126µ | 2µ WSTEEM | -14124µ | 0µ |
| operator | SBD 5665µ | 12632µ WSBD | 6967µ | 2µ |
| operator | WSBD 12674µ | 5681µ SBD | -6993µ | 1µ |
| operator | SBD 28325µ | 61934µ WSBD | 33609µ | 12µ |
| operator | STEEM 2825µ | 8389µ SBD | 8102µ | 7µ |
| operator | SBD 8495µ | 2845µ STEEM | -80702µ | 21µ |
| operator | STEEM 14125µ | 40362µ SBD | 38926µ | 35µ |
| operator | SBD 29741µ | 10489µ STEEM | -282011µ | 74µ |
| operator | WSBD 61972µ | 1µ WSTEEM | -609489µ | 75µ |
| operator | STEEM 13840µ | 2µ WSTEEM | -13838µ | 0µ |
| operator | STEEM 13840µ | 2µ WSTEEM | -13838µ | 0µ |

## Rolling 24h (measured from the ledger — never invented)

Fills: 61 · Volume in: 899475µ · Volume out: 611066µ · Fees accrued: 933µ


| Pool | Swaps 24h | In µ | Out µ | Fees µ |
|---|---|---|---|---|
| P1 | 20 | 267170 | 41 | 0 |
| P2 | 16 | 434678 | 434375 | 80 |
| P3 | 33 | 349520 | 328543 | 853 |

Laws: keyless internal-only · staged-lane (CR-0077) · two-sided (never a direction bet) · 10/100/500bps depth ladder · dust 1000µ · minOut −0.5% · roster split op-40% · bounded 30 intents/run · single-writer queue (DEX_SETTLE_QUEUE) · idempotent batch · measured 24h only

