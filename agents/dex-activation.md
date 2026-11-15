# dex-activation — THE IGNITION DESK (CR-0077)

At: 2026-11-15T20:26:10.670Z · Verdict: **IGNITED (3/3 rounds filled)** · batch: ACT-2026111520-4cae6fd2 · lane: dex-activation

Owner word (trace 1a135897157a1d75): "saos dex עמלות 0 נפח כמעט 0 מצטבר כלום" — הדלפק הזה הוא התיקון: זרימה דו-צדדית רציפה סביב המיד של כל בריכה חיה, דרך חוקי-ה-settle של הליבה עצמה.

Pools armed: P1, P2, P3 · Intents drafted: 12 · Fills settled: 12 · Refusals: 0 · Wires: 10

Core ledger: seq 2494 @ 2026-11-15T19:28:39.085Z · conservation true · att 9c10a76e1a8c6aad


| Agent | Fill | Out | Edge (marked) | Fees |
|---|---|---|---|---|
| operator | STEEM 13959µ | 1µ WSTEEM | -13958µ | 0µ |
| operator | STEEM 13959µ | 1µ WSTEEM | -13958µ | 0µ |
| operator | STEEM 13959µ | 1µ WSTEEM | -13958µ | 0µ |
| operator | STEEM 13959µ | 1µ WSTEEM | -13958µ | 0µ |
| operator | SBD 6247µ | 12657µ WSBD | 6410µ | 2µ |
| operator | WSBD 12658µ | 6245µ SBD | -6413µ | 1µ |
| operator | SBD 31237µ | 62145µ WSBD | 30908µ | 12µ |
| operator | STEEM 2791µ | 8544µ SBD | 8277µ | 6µ |
| operator | SBD 8654µ | 2812µ STEEM | -87466µ | 21µ |
| operator | STEEM 13958µ | 41117µ SBD | 39779µ | 34µ |
| operator | SBD 32799µ | 11188µ STEEM | -330969µ | 81µ |
| operator | WSBD 61906µ | 1µ WSTEEM | -645798µ | 83µ |

## Rolling 24h (measured from the ledger — never invented)

Fills: 74 · Volume in: 1006503µ · Volume out: 777429µ · Fees accrued: 1052µ


| Pool | Swaps 24h | In µ | Out µ | Fees µ |
|---|---|---|---|---|
| P2 | 18 | 429352 | 495388 | 92 |
| P3 | 39 | 393773 | 403040 | 960 |
| P1 | 23 | 304400 | 23 | 0 |

Laws: keyless internal-only · staged-lane (CR-0077) · two-sided (never a direction bet) · 10/100/500bps depth ladder · dust 1000µ · minOut −0.5% · roster split op-40% · bounded 30 intents/run · single-writer queue (DEX_SETTLE_QUEUE) · idempotent batch · measured 24h only

