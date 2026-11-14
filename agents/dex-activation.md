# dex-activation — THE IGNITION DESK (CR-0077)

At: 2026-11-14T09:27:18.366Z · Verdict: **IGNITED (3/3 rounds filled)** · batch: ACT-2026111409-76a24af2 · lane: dex-activation

Owner word (trace 1a135897157a1d75): "saos dex עמלות 0 נפח כמעט 0 מצטבר כלום" — הדלפק הזה הוא התיקון: זרימה דו-צדדית רציפה סביב המיד של כל בריכה חיה, דרך חוקי-ה-settle של הליבה עצמה.

Pools armed: P1, P2, P3 · Intents drafted: 12 · Fills settled: 12 · Refusals: 0 · Wires: 11

Core ledger: seq 2283 @ 2026-11-14T09:16:21.335Z · conservation true · att a5c0f0e90b7f92ee


| Agent | Fill | Out | Edge (marked) | Fees |
|---|---|---|---|---|
| operator | STEEM 13505µ | 1µ WSTEEM | -13504µ | 0µ |
| operator | STEEM 13505µ | 1µ WSTEEM | -13504µ | 0µ |
| operator | STEEM 13505µ | 1µ WSTEEM | -13504µ | 0µ |
| operator | STEEM 13505µ | 1µ WSTEEM | -13504µ | 0µ |
| operator | SBD 5665µ | 12633µ WSBD | 6968µ | 2µ |
| operator | WSBD 12636µ | 5664µ SBD | -6972µ | 1µ |
| operator | SBD 28325µ | 61937µ WSBD | 33612µ | 12µ |
| operator | STEEM 2701µ | 8815µ SBD | 8549µ | 6µ |
| operator | SBD 8926µ | 2721µ STEEM | -87804µ | 22µ |
| operator | STEEM 13504µ | 42407µ SBD | 41076µ | 33µ |
| operator | SBD 29741µ | 9560µ STEEM | -292066µ | 74µ |
| operator | WSBD 61940µ | 1µ WSTEEM | -628180µ | 75µ |

## Rolling 24h (measured from the ledger — never invented)

Fills: 75 · Volume in: 1104923µ · Volume out: 770936µ · Fees accrued: 1157µ


| Pool | Swaps 24h | In µ | Out µ | Fees µ |
|---|---|---|---|---|
| P2 | 20 | 542833 | 542737 | 100 |
| P3 | 40 | 432279 | 412918 | 1057 |
| P1 | 25 | 314555 | 25 | 0 |

Laws: keyless internal-only · staged-lane (CR-0077) · two-sided (never a direction bet) · 10/100/500bps depth ladder · dust 1000µ · minOut −0.5% · roster split op-40% · bounded 30 intents/run · single-writer queue (DEX_SETTLE_QUEUE) · idempotent batch · measured 24h only

