# dex-activation — THE IGNITION DESK (CR-0077)

At: 2026-11-11T09:34:24.516Z · Verdict: **IGNITED (3/3 rounds filled)** · batch: ACT-2026111109-940664a4 · lane: dex-activation

Owner word (trace 1a135897157a1d75): "saos dex עמלות 0 נפח כמעט 0 מצטבר כלום" — הדלפק הזה הוא התיקון: זרימה דו-צדדית רציפה סביב המיד של כל בריכה חיה, דרך חוקי-ה-settle של הליבה עצמה.

Pools armed: P1, P2, P3 · Intents drafted: 12 · Fills settled: 12 · Refusals: 0 · Wires: 11

Core ledger: seq 1886 @ 2026-11-11T08:55:12.996Z · conservation true · att 0c42822a9a234242


| Agent | Fill | Out | Edge (marked) | Fees |
|---|---|---|---|---|
| operator | STEEM 14063µ | 2µ WSTEEM | -14061µ | 0µ |
| operator | STEEM 14063µ | 2µ WSTEEM | -14061µ | 0µ |
| operator | SBD 5664µ | 12631µ WSBD | 6967µ | 2µ |
| operator | WSBD 12665µ | 5677µ SBD | -6988µ | 1µ |
| operator | SBD 28324µ | 61935µ WSBD | 33611µ | 12µ |
| operator | STEEM 2812µ | 8429µ SBD | 8146µ | 7µ |
| operator | SBD 8536µ | 2833µ STEEM | -81953µ | 21µ |
| operator | STEEM 14062µ | 40557µ SBD | 39142µ | 35µ |
| operator | SBD 29740µ | 10393µ STEEM | -285010µ | 74µ |
| operator | WSBD 61965µ | 1µ WSTEEM | -615489µ | 75µ |
| operator | STEEM 13783µ | 2µ WSTEEM | -13781µ | 0µ |
| operator | STEEM 13783µ | 2µ WSTEEM | -13781µ | 0µ |

## Rolling 24h (measured from the ledger — never invented)

Fills: 60 · Volume in: 895256µ · Volume out: 609071µ · Fees accrued: 931µ


| Pool | Swaps 24h | In µ | Out µ | Fees µ |
|---|---|---|---|---|
| P1 | 20 | 263987 | 36 | 0 |
| P2 | 16 | 434586 | 434331 | 80 |
| P3 | 32 | 347905 | 325926 | 851 |

Laws: keyless internal-only · staged-lane (CR-0077) · two-sided (never a direction bet) · 10/100/500bps depth ladder · dust 1000µ · minOut −0.5% · roster split op-40% · bounded 30 intents/run · single-writer queue (DEX_SETTLE_QUEUE) · idempotent batch · measured 24h only

