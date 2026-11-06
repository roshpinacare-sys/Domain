# dex-activation — THE IGNITION DESK (CR-0077)

At: 2026-11-06T16:21:52.309Z · Verdict: **IGNITED (3/3 rounds filled)** · batch: ACT-2026110616-fba1fd73 · lane: dex-activation

Owner word (trace 1a135897157a1d75): "saos dex עמלות 0 נפח כמעט 0 מצטבר כלום" — הדלפק הזה הוא התיקון: זרימה דו-צדדית רציפה סביב המיד של כל בריכה חיה, דרך חוקי-ה-settle של הליבה עצמה.

Pools armed: P1, P2, P3 · Intents drafted: 15 · Fills settled: 15 · Refusals: 0 · Wires: 14

Core ledger: seq 1153 @ 2026-11-06T16:12:25.189Z · conservation true · att 9f235752bb514b7f


| Agent | Fill | Out | Edge (marked) | Fees |
|---|---|---|---|---|
| operator | STEEM 3396µ | 1µ WSTEEM | -3395µ | 0µ |
| operator | STEEM 3399µ | 1µ WSTEEM | -3398µ | 0µ |
| operator | STEEM 3403µ | 1µ WSTEEM | -3402µ | 0µ |
| operator | STEEM 17377µ | 7µ WSTEEM | -17370µ | 0µ |
| operator | STEEM 17377µ | 7µ WSTEEM | -17370µ | 0µ |
| operator | WSBD 3130µ | 1428µ SBD | -1702µ | 0µ |
| operator | WSBD 2817µ | 1282µ SBD | -1535µ | 0µ |
| operator | SBD 5802µ | 12689µ WSBD | 6887µ | 2µ |
| operator | WSBD 15224µ | 6952µ SBD | -8272µ | 1µ |
| operator | SBD 28817µ | 61932µ WSBD | 33115µ | 12µ |
| operator | STEEM 3475µ | 6770µ SBD | 6402µ | 8µ |
| operator | SBD 6855µ | 3500µ STEEM | -61192µ | 17µ |
| operator | STEEM 17376µ | 32572µ SBD | 30731µ | 43µ |
| operator | SBD 30258µ | 16118µ STEEM | -269433µ | 75µ |
| operator | WSBD 62835µ | 5µ WSTEEM | -592983µ | 78µ |

## Rolling 24h (measured from the ledger — never invented)

Fills: 59 · Volume in: 698381µ · Volume out: 474196µ · Fees accrued: 754µ


| Pool | Swaps 24h | In µ | Out µ | Fees µ |
|---|---|---|---|---|
| P2 | 18 | 367962 | 346757 | 60 |
| P3 | 29 | 282706 | 259691 | 694 |
| P1 | 18 | 180036 | 71 | 0 |

Laws: keyless internal-only · staged-lane (CR-0077) · two-sided (never a direction bet) · 10/100/500bps depth ladder · dust 1000µ · minOut −0.5% · roster split op-40% · bounded 30 intents/run · single-writer queue (DEX_SETTLE_QUEUE) · idempotent batch · measured 24h only

