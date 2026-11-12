# dex-activation — THE IGNITION DESK (CR-0077)

At: 2026-11-12T20:56:28.952Z · Verdict: **IGNITED (3/3 rounds filled)** · batch: ACT-2026111220-53cb2080 · lane: dex-activation

Owner word (trace 1a135897157a1d75): "saos dex עמלות 0 נפח כמעט 0 מצטבר כלום" — הדלפק הזה הוא התיקון: זרימה דו-צדדית רציפה סביב המיד של כל בריכה חיה, דרך חוקי-ה-settle של הליבה עצמה.

Pools armed: P1, P2, P3 · Intents drafted: 12 · Fills settled: 12 · Refusals: 0 · Wires: 11

Core ledger: seq 2068 @ 2026-11-12T20:55:07.134Z · conservation true · att c9ec15c16827d992


| Agent | Fill | Out | Edge (marked) | Fees |
|---|---|---|---|---|
| operator | STEEM 13777µ | 2µ WSTEEM | -13775µ | 0µ |
| operator | STEEM 13777µ | 2µ WSTEEM | -13775µ | 0µ |
| operator | SBD 5664µ | 12632µ WSBD | 6968µ | 2µ |
| operator | WSBD 12644µ | 5667µ SBD | -6977µ | 1µ |
| operator | SBD 28323µ | 61935µ WSBD | 33612µ | 12µ |
| operator | STEEM 2755µ | 8620µ SBD | 8346µ | 6µ |
| operator | SBD 8730µ | 2775µ STEEM | -84811µ | 21µ |
| operator | STEEM 13776µ | 41475µ SBD | 40102µ | 34µ |
| operator | SBD 29739µ | 9964µ STEEM | -288401µ | 74µ |
| operator | WSBD 61946µ | 1µ WSTEEM | -621490µ | 75µ |
| operator | STEEM 13524µ | 1µ WSTEEM | -13523µ | 0µ |
| operator | STEEM 13524µ | 1µ WSTEEM | -13523µ | 0µ |

## Rolling 24h (measured from the ledger — never invented)

Fills: 61 · Volume in: 888159µ · Volume out: 617665µ · Fees accrued: 926µ


| Pool | Swaps 24h | In µ | Out µ | Fees µ |
|---|---|---|---|---|
| P1 | 20 | 255201 | 34 | 0 |
| P2 | 16 | 434344 | 434218 | 80 |
| P3 | 33 | 347449 | 332248 | 846 |

Laws: keyless internal-only · staged-lane (CR-0077) · two-sided (never a direction bet) · 10/100/500bps depth ladder · dust 1000µ · minOut −0.5% · roster split op-40% · bounded 30 intents/run · single-writer queue (DEX_SETTLE_QUEUE) · idempotent batch · measured 24h only

